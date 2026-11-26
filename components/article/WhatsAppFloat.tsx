"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { trackContactFromHref } from "@/lib/analytics";

/* Acceso a WhatsApp en todas las páginas, visible desde el primer cuadro.
   En el teléfono es una barra inferior de 48 px que se retira al bajar (para
   no tapar la lectura) y vuelve al subir. En escritorio es un botón fijo
   abajo a la derecha, con el radio de 8 px de todos los botones (D-18; antes
   era una píldora). Fondo burdeos macizo: el degradado lacre queda para la
   acción principal de cada pantalla (D-19). El botón de escritorio también
   se retira al bajar, para no tapar el final de las líneas (D-05). Los dos
   dicen «Escribir por WhatsApp», el único rótulo del sitio para esta acción
   (D-12). El clic se registra como whatsapp_click. */
export function WhatsAppFloat({
  href,
  contactTarget = "article-float",
}: {
  href: string;
  contactTarget?: string;
}) {
  const [oculta, setOculta] = useState(false);
  const ultimo = useRef(0);

  useEffect(() => {
    let pendiente = false;
    ultimo.current = window.scrollY;
    const revisar = () => {
      pendiente = false;
      const y = window.scrollY;
      const delta = y - ultimo.current;
      if (y < 80) setOculta(false);
      else if (delta > 8) setOculta(true);
      else if (delta < -8) setOculta(false);
      if (Math.abs(delta) > 8 || y < 80) ultimo.current = y;
    };
    const onScroll = () => {
      if (!pendiente) {
        pendiente = true;
        requestAnimationFrame(revisar);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const registrar = () => trackContactFromHref(href, contactTarget);

  return (
    <>
      {/* Teléfono: barra inferior */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={registrar}
        className={`md:hidden fixed inset-x-0 bottom-0 z-40 flex flex-col bg-burgundy text-white shadow-[0_-6px_18px_-6px_rgba(107,29,58,0.45)] pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ease-out motion-reduce:transition-none active:bg-burgundy-dark ${
          oculta ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <span className="flex h-12 items-center justify-center gap-2 text-[15px] font-semibold tracking-tight">
          <WhatsappLogo size={22} weight="fill" aria-hidden="true" className="shrink-0" />
          Escribir por WhatsApp
        </span>
      </a>

      {/* Escritorio: botón fijo */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={registrar}
        className={`hidden md:inline-flex fixed bottom-5 right-5 z-40 items-center gap-2.5 rounded-lg bg-burgundy py-3.5 px-5 text-white shadow-lg shadow-[rgba(107,29,58,0.35)] hover:bg-burgundy-light active:bg-burgundy-dark active:scale-[0.98] transition-[transform,opacity,background-color] duration-300 motion-reduce:transition-none ${
          oculta ? "translate-y-[calc(100%+1.25rem)] opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
      >
        <WhatsappLogo size={26} weight="fill" aria-hidden="true" className="shrink-0" />
        <span className="text-sm font-semibold tracking-tight pr-0.5">Escribir por WhatsApp</span>
      </a>

      {/* Reserva al final de la página para que la barra no tape el pie */}
      <div aria-hidden="true" className="md:hidden h-[calc(3rem+env(safe-area-inset-bottom))]" />
    </>
  );
}
