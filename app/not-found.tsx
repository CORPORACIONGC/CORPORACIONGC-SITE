import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FIRM_CONTACT, FOOTER_GUIAS } from "@/lib/constants";

/* Sin esto, la 404 heredaba el título de la portada. */
export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

const SECCIONES = [
  { href: "/areas", label: "Áreas de práctica" },
  { href: "/articulos", label: "Guías y publicaciones" },
  { href: "/jurisprudencia-destacada", label: "Jurisprudencia destacada" },
  { href: "/abogados", label: "El equipo" },
  { href: "/contacto", label: "Contacto" },
];

const WHATSAPP = `https://wa.me/${FIRM_CONTACT.phoneRaw}?text=${encodeURIComponent(FIRM_CONTACT.whatsappMessage)}`;

function Salidas({ titulo, enlaces }: { titulo: string; enlaces: { href: string; label: string }[] }) {
  return (
    <section>
      <h2 className="type-label mb-2 text-cream/65">{titulo}</h2>
      <ul role="list" className="border-t border-cream/10">
        {enlaces.map((e) => (
          <li key={e.href} className="border-b border-cream/10">
            <Link
              href={e.href}
              className="group flex items-baseline justify-between gap-4 py-4 text-[15px] leading-snug text-cream/85 transition-colors duration-300 hover:text-emphasis"
            >
              {e.label}
              <ArrowRight
                size={14}
                weight="bold"
                aria-hidden="true"
                className="shrink-0 translate-y-0.5 text-cream/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-emphasis"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh] bg-surface">
        <div className="mx-auto max-w-[1100px] px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-44">
          <h1 className="type-headline text-cream">Esta página no existe</h1>
          <p className="type-lead mt-5 max-w-[56ch] text-cream/80">
            La dirección cambió o se escribió con un error (código 404). Puede seguir por
            cualquiera de estas entradas.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton href={WHATSAPP} variant="primary" contactTarget="404">
              Escribir por WhatsApp
            </MagneticButton>
            <MagneticButton href="/" variant="outline">
              Volver al inicio
            </MagneticButton>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-12 md:mt-20 md:grid-cols-2">
            <Salidas titulo="Secciones del sitio" enlaces={SECCIONES} />
            <Salidas titulo="Guías más consultadas" enlaces={FOOTER_GUIAS} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
