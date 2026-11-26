"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  contactoRecienMedido,
  trackContactFromHref,
  trackEnlaceInterno,
  trackLectura,
  trackPaginaVista,
} from "@/lib/analytics";

/* Medición de cada página (25-11-2026), montada una vez en el layout:
   1. La página vista, con el contexto de la página nueva, al cargar y en
      cada cambio de ruta dentro del sitio. Se espera un instante para que
      la página haya declarado su contexto y actualizado el título.
   2. La lectura: cuando el lector llega al 25, 50, 75 y 100 % del cuerpo
      (el texto de la guía o, si no hay, el contenido principal), una vez
      por umbral y por página.
   3. Los clics en enlaces a otras páginas del sitio, con la zona donde
      estaba el enlace.
   4. Los clics de contacto que ningún componente midió. */

const UMBRALES = [25, 50, 75, 100];

function zonaDe(el: Element): string {
  if (el.closest(".prose-article")) return "cuerpo";
  if (el.closest("nav, header")) return "menu";
  if (el.closest("footer")) return "pie";
  return "pagina";
}

export function Analitica() {
  const ruta = usePathname();
  const anterior = useRef<string | undefined>(undefined);

  /* 1. Página vista. */
  useEffect(() => {
    const t = window.setTimeout(() => {
      trackPaginaVista(anterior.current);
      anterior.current = window.location.href;
    }, 80);
    return () => window.clearTimeout(t);
  }, [ruta]);

  /* 2. Lectura. */
  useEffect(() => {
    const vistos = new Set<number>();
    let pendiente = false;
    /* Al cambiar de página, la nueva se pinta un instante con la posición de
       la anterior antes de volver arriba (o el navegador restaura una
       posición guardada): ese primer instante no cuenta como lectura. */
    const desde = performance.now() + 800;
    const medir = () => {
      pendiente = false;
      if (performance.now() < desde) return;
      const cuerpo =
        document.querySelector<HTMLElement>(".prose-article") ?? document.getElementById("contenido");
      if (!cuerpo) return;
      const caja = cuerpo.getBoundingClientRect();
      if (caja.height < 400) return;
      const leido = ((window.innerHeight - caja.top) / caja.height) * 100;
      for (const u of UMBRALES) {
        if (leido >= u && !vistos.has(u)) {
          vistos.add(u);
          trackLectura(u);
        }
      }
    };
    const alDesplazar = () => {
      if (pendiente) return;
      pendiente = true;
      window.requestAnimationFrame(medir);
    };
    window.addEventListener("scroll", alDesplazar, { passive: true });
    return () => window.removeEventListener("scroll", alDesplazar);
  }, [ruta]);

  /* 3. Enlaces internos. */
  useEffect(() => {
    const alHacerClic = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      let url: URL;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      trackEnlaceInterno(url.pathname, zonaDe(a));
    };
    document.addEventListener("click", alHacerClic, { capture: true });
    return () => document.removeEventListener("click", alHacerClic, { capture: true });
  }, []);

  /* 4. Red de seguridad de los contactos. Casi todos los enlaces de correo,
     teléfono y WhatsApp miden su clic en su propio componente; los que no
     (un <a> suelto en una página) se miden aquí, con la zona como origen.
     Se espera a que terminen los manejadores del clic y, si alguno ya midió
     el contacto, no se cuenta otra vez. */
  useEffect(() => {
    const alHacerClic = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      const href = a?.getAttribute("href") ?? "";
      if (!a || !/^(mailto:|tel:|https:\/\/(wa\.me|api\.whatsapp\.com)\/)/.test(href)) return;
      window.setTimeout(() => {
        if (!contactoRecienMedido()) trackContactFromHref(href, `${zonaDe(a)}-sin-medir`);
      }, 0);
    };
    document.addEventListener("click", alHacerClic);
    return () => document.removeEventListener("click", alHacerClic);
  }, []);

  return null;
}
