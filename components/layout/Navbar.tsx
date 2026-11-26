"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, MagnifyingGlass, Phone, WhatsappLogo, X } from "@phosphor-icons/react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { FIRM_CONTACT, FIRM_NAV_LINKS } from "@/lib/constants";
import { trackContactFromHref } from "@/lib/analytics";

const WHATSAPP_MENU = `https://wa.me/${FIRM_CONTACT.phoneRaw}?text=${encodeURIComponent(FIRM_CONTACT.whatsappMessage)}`;

/* Rótulo de la llamada de la barra en las páginas de la firma (D-12): una de
   las dos únicas del sitio. Lleva al formulario (en la portada, al de la
   sección #contacto; en las demás, a /contacto). WhatsApp ya está en el
   botón flotante y al pie del menú del teléfono. */
const ROTULO_CONSULTA = "Enviar una consulta";

/* ── Barra en modo perfil (D-20, 25-11-2026) ──
   En /abogados/<slug> y /equipo/<slug> la barra recorre el perfil, y los
   rótulos de la firma llevaban a otro sitio: «Inicio» subía al tope del
   perfil, «Contacto» bajaba a su contacto y «Artículos» salía al índice
   general. Aquí se rotulan «Arriba», «Contacto de {nombre}» y «Sus
   artículos», este último con destino a la sección de artículos del propio
   perfil (#articulos, en Publications).

   El nombre corto sale del slug (nombre de pila, que es la primera parte):
   así la barra no carga en el navegador los datos completos del equipo. Un
   integrante con tilde en el nombre de pila, o que se nombre de otro modo,
   va en NOMBRE_CORTO.

   El Director se nombra como en el resto del sitio, «Dr. González». En la
   barra del teléfono ese rótulo no cabe junto al conmutador y el menú
   (215 px contra unos 190 disponibles en 375 px, menos en 360), y ahí se
   abrevia «Contacto del Director»; el menú del teléfono lo dice completo. */
const PERFIL = /^\/(abogados|equipo)\/([^/]+)\/?$/;
const NOMBRE_CORTO: Record<string, { largo: string; telefono?: string }> = {
  "oscar-gonzalez": { largo: "del Dr. González", telefono: "del Director" },
};

function contactoDe(slug: string) {
  const fijo = NOMBRE_CORTO[slug];
  if (fijo) return `Contacto ${fijo.largo}`;
  const pila = slug.split("-")[0] ?? "";
  return `Contacto de ${pila.charAt(0).toUpperCase()}${pila.slice(1)}`;
}

function contactoTelefonoDe(slug: string) {
  const fijo = NOMBRE_CORTO[slug];
  return fijo?.telefono ? `Contacto ${fijo.telefono}` : undefined;
}

type EnlaceBarra = { label: string; href: string; pageHref?: string };

function enlacesDePerfil(links: readonly EnlaceBarra[], slug: string): EnlaceBarra[] {
  return links.map((l) => {
    if (l.href === "#inicio") return { ...l, label: "Arriba" };
    if (/^contact/i.test(l.label) && l.href.startsWith("#")) return { ...l, label: contactoDe(slug) };
    if (l.href === "/articulos") return { label: "Sus artículos", href: "#articulos", pageHref: "/articulos" };
    return l;
  });
}

export function Navbar({
  navLinks: enlaces = FIRM_NAV_LINKS,
  topOffset = false,
}: {
  navLinks?: readonly { label: string; href: string; pageHref?: string }[];
  topOffset?: boolean;
}) {
  const pathname = usePathname() || "/";
  const slugPerfil = pathname.match(PERFIL)?.[2];
  const navLinks: readonly EnlaceBarra[] = useMemo(
    () => (slugPerfil ? enlacesDePerfil(enlaces, slugPerfil) : enlaces),
    [enlaces, slugPerfil]
  );
  /* Un ancla sin su sección en esta página apunta a su ruta real (pageHref).
     En un perfil las anclas son suyas; si alguna no encuentra su sección al
     hacer clic (un perfil sin artículos), irA() la manda a pageHref. */
  const hrefOf = (link: { href: string; pageHref?: string }) =>
    link.href.startsWith("#") && link.pageHref && pathname !== "/" && !slugPerfil
      ? link.pageHref
      : link.href;
  const irA = (link: EnlaceBarra) => {
    const el = document.getElementById(link.href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else if (link.pageHref) window.location.assign(link.pageHref);
    return !!el;
  };
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  /* «Contacto» sale de la fila de enlaces y va como llamada, en la barra de
     escritorio y en la del teléfono: es la acción que el sitio busca. En las
     páginas de la firma se rotula «Enviar una consulta»; en un perfil,
     «Contacto de {nombre}», porque baja al contacto de esa persona. */
  const contacto = navLinks.find((l) => /^contact/i.test(l.label));
  const rotuloContacto = contacto && !slugPerfil ? ROTULO_CONSULTA : contacto?.label;
  const rotuloTelefono = slugPerfil ? contactoTelefonoDe(slugPerfil) : undefined;

  const navRef = useRef<HTMLElement>(null);
  const botonMenu = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const linkEls = useRef<(HTMLElement | null)[]>([]);
  const [pill, setPill] = useState({ x: 0, w: 0, show: false });

  /* ── Scroll state ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Body lock for mobile menu ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ── Menú del teléfono: al abrir, el foco entra al panel y no sale de él;
     Escape lo cierra y devuelve el foco al botón que lo abrió. ── */
  useEffect(() => {
    if (!mobileOpen) return;
    const caja = panel.current;
    const boton = botonMenu.current;
    const enfocables = () =>
      Array.from(caja?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    enfocables()[0]?.focus();
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const lista = enfocables();
      if (lista.length === 0) return;
      const primero = lista[0];
      const ultimo = lista[lista.length - 1];
      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    };
    document.addEventListener("keydown", tecla);
    return () => {
      document.removeEventListener("keydown", tecla);
      boton?.focus();
    };
  }, [mobileOpen]);

  /* ── Mouse glare tracking (only when glass active) ── */
  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = navRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty(
        "--glare-x",
        `${((e.clientX - r.left) / r.width) * 100}%`
      );
      el.style.setProperty(
        "--glare-y",
        `${((e.clientY - r.top) / r.height) * 100}%`
      );
    },
    []
  );

  /* ── Active section detection via IntersectionObserver ── */
  useEffect(() => {
    const anchors = navLinks
      .map((l, i) =>
        l.href.startsWith("#") ? { id: l.href.slice(1), idx: i } : null
      )
      .filter(Boolean) as { id: string; idx: number }[];

    if (anchors.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const match = anchors.find((a) => a.id === entry.target.id);
            if (match) setActiveIndex(match.idx);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    anchors.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) io.observe(section);
    });

    return () => io.disconnect();
  }, [navLinks]);

  /* ── Sliding pill measurement ── */
  useEffect(() => {
    const measure = () => {
      const el = linkEls.current[activeIndex];
      if (!el) {
        setPill((p) => ({ ...p, show: false }));
        return;
      }
      setPill({
        x: el.offsetLeft - 10,
        w: el.offsetWidth + 20,
        show: true,
      });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeIndex]);

  return (
    <>
      <nav
        ref={navRef}
        onMouseMove={onMouseMove}
        className={`fixed left-0 right-0 z-40 navbar-glass transition-all duration-700 ${
          topOffset ? "top-8" : "top-0"
        }`}
      >
        {/* Subtle edge line */}
        <div className="absolute inset-0 pointer-events-none z-[3]">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cream/[0.06] to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20 relative z-10">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-3 group nav-tactile">
            <Image
              src="/images/logo-gc.png"
              alt="Corporación GC"
              width={38}
              height={36}
              className="h-9 w-auto dark:brightness-0 dark:invert"
            />
            <div className="hidden sm:block">
              <div className="text-[13px] font-semibold tracking-[0.22em] text-cream leading-none">
                CORPORACIÓN GC
              </div>
              <div className="text-[9px] tracking-[0.3em] text-cream/65 mt-1 font-light">
                ABOGADOS
              </div>
            </div>
          </Link>

          {/* Desktop links + toggle. Con «Enviar una consulta» (D-12) la fila
              no cabe en 1024 px con el espaciado de antes: entre 1024 y
              1279 px el hueco baja a 16 px y se omite «Inicio», que repite
              el logotipo (en un perfil, «Arriba» sí se muestra). */}
          <div
            ref={linksRef}
            className="hidden lg:flex items-center gap-4 xl:gap-7 relative whitespace-nowrap"
          >
            {navLinks.map((link, i) =>
              link === contacto ? null : hrefOf(link).startsWith("/") ? (
                <Link
                  key={link.href}
                  href={hrefOf(link)}
                  ref={(el: HTMLAnchorElement | null) => {
                    linkEls.current[i] = el;
                  }}
                  className={`nav-link-item text-xs tracking-[0.12em] uppercase transition-colors duration-300 ${
                    link.href === "#inicio" && !slugPerfil ? "lg:max-xl:hidden" : ""
                  } ${
                    activeIndex === i
                      ? "text-cream font-medium"
                      : "text-cream/70 hover:text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  ref={(el) => {
                    linkEls.current[i] = el;
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveIndex(i);
                    if (irA(link)) window.history.replaceState(null, "", link.href);
                  }}
                  className={`nav-link-item text-xs tracking-[0.12em] uppercase transition-colors duration-300 ${
                    link.href === "#inicio" && !slugPerfil ? "lg:max-xl:hidden" : ""
                  } ${
                    activeIndex === i
                      ? "text-cream font-medium"
                      : "text-cream/70 hover:text-cream"
                  }`}
                >
                  {link.label}
                </a>
              )
            )}

            {contacto && <BotonContacto label={rotuloContacto ?? contacto.label} href={hrefOf(contacto)} />}

            {/* Búsqueda en todo el sitio (OD-05). Solo desde 1280 px: entre
                1024 y 1279 la fila no tiene sitio; ahí y en el teléfono se
                llega desde el menú y desde el pie. */}
            <Link
              href="/buscar"
              aria-label="Buscar en el sitio"
              className="hidden xl:flex h-11 w-11 shrink-0 items-center justify-center text-cream/65 transition-colors duration-300 hover:text-emphasis nav-tactile"
            >
              <MagnifyingGlass size={16} weight="regular" aria-hidden="true" />
            </Link>
            <ThemeToggle className="shrink-0" />
          </div>

          {/* Teléfono y tableta: contacto, tema y menú */}
          <div className="flex lg:hidden items-center gap-1">
            {contacto && (
              <BotonContacto
                label={rotuloTelefono ?? rotuloContacto ?? contacto.label}
                href={hrefOf(contacto)}
                titulo={rotuloTelefono ? rotuloContacto : undefined}
              />
            )}
            <ThemeToggle className="shrink-0" />
            <button
              ref={botonMenu}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-11 w-11 items-center justify-center text-cream/75 hover:text-emphasis transition-colors nav-tactile"
              aria-label="Menú"
              aria-expanded={mobileOpen}
              aria-controls="menu-movil"
            >
              {mobileOpen ? (
                <X size={22} weight="light" />
              ) : (
                <List size={22} weight="light" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile panel — CSS transitions instead of Framer Motion. Cerrado
          queda inerte: ni el teclado ni el lector de pantalla entran en él. */}
      <div
        ref={panel}
        id="menu-movil"
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
        inert={!mobileOpen}
        className="fixed inset-0 z-50 flex flex-col bg-surface transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden"
        style={{
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        <div className="flex items-center justify-between px-6 h-16">
          <Image
            src="/images/logo-gc.png"
            alt="Corporación GC"
            width={34}
            height={32}
            className="h-8 w-auto dark:brightness-0 dark:invert"
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="-mr-2 flex h-11 w-11 items-center justify-center text-cream/75 nav-tactile"
            aria-label="Cerrar menú"
          >
            <X size={22} weight="light" />
          </button>
        </div>
        <div className="flex flex-col items-start gap-1 overflow-y-auto px-6 pt-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={hrefOf(link)}
              onClick={(e) => {
                setMobileOpen(false);
                if (hrefOf(link).startsWith("#")) {
                  e.preventDefault();
                  setTimeout(() => irA(link), 400);
                }
              }}
              className="font-display text-2xl font-light tracking-wide text-cream py-3 border-b border-cream/10 w-full nav-tactile transition-all duration-400"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateX(0)" : "translateX(24px)",
                transitionDelay: mobileOpen ? `${0.1 + i * 0.06}s` : "0s",
              }}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/buscar"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 font-display text-2xl font-light tracking-wide text-cream py-3 border-b border-cream/10 w-full nav-tactile transition-all duration-400"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateX(0)" : "translateX(24px)",
              transitionDelay: mobileOpen ? `${0.1 + navLinks.length * 0.06}s` : "0s",
            }}
          >
            <MagnifyingGlass size={22} weight="light" aria-hidden="true" />
            Buscar
          </Link>
        </div>
        {/* El menú termina en las dos vías directas: escribir o llamar. */}
        <div className="mt-auto flex flex-col gap-3 px-6 pb-8 pt-6">
          <a
            href={WHATSAPP_MENU}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContactFromHref(WHATSAPP_MENU, "menu-movil")}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-burgundy px-6 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-burgundy-light active:scale-[0.98]"
          >
            <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
            Escribir por WhatsApp
          </a>
          <a
            href={`tel:+${FIRM_CONTACT.phoneRaw}`}
            onClick={() => trackContactFromHref(`tel:+${FIRM_CONTACT.phoneRaw}`, "menu-movil")}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-cream/25 px-6 text-sm font-medium tracking-wide text-cream transition-colors duration-300 hover:border-cream/50"
          >
            <Phone size={17} weight="regular" aria-hidden="true" />
            {FIRM_CONTACT.phone}
          </a>
          <p className="text-center text-xs text-cream/65">{FIRM_CONTACT.hours}</p>
        </div>
      </div>
    </>
  );
}

/* «Contacto» en la barra (19-11-2026): un enlace más, sin caja, que se
   distingue de los otros por el subrayado burdeos de 2 px y la tinta plena.
   Antes era un botón de contorno; al estar en todas las páginas pesaba
   demasiado. En la portada baja al formulario; en las demás abre /contacto. */
function BotonContacto({ label, href, titulo }: { label: string; href: string; titulo?: string }) {
  /* La caja mide 44 px de alto (área táctil, D-15) y el subrayado de 2 px va
     en el texto, no al pie de la caja. En el teléfono el espaciado de letras
     baja a 0,06 em para que el rótulo del perfil quepa en 360 px. */
  const clase =
    "group nav-tactile inline-flex h-11 min-w-0 items-center justify-center whitespace-nowrap px-0.5 text-xs font-medium uppercase tracking-[0.06em] sm:tracking-[0.12em] text-cream transition-colors duration-300 hover:text-burgundy-light dark:text-white dark:hover:text-white lg:ml-1";
  const texto = (
    <span className="border-b-2 border-burgundy-light pb-1 dark:border-[#9B2A5C] dark:group-hover:border-white">
      {label}
    </span>
  );
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={clase} title={titulo}>
        {texto}
      </Link>
    );
  }
  return (
    <a
      href={href}
      onClick={(e) => {
        const destino = document.getElementById(href.slice(1));
        if (!destino) return;
        e.preventDefault();
        destino.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", href);
      }}
      className={clase}
      title={titulo}
    >
      {texto}
    </a>
  );
}
