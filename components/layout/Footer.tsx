import Image from "next/image";
import Link from "next/link";
import { FIRM_CONTACT, FIRM_NAV_LINKS, FOOTER_AREAS, FOOTER_GUIAS } from "@/lib/constants";
import { TrackedContactLink } from "@/components/ui/TrackedContactLink";
import {
  Envelope,
  Phone,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="bg-dark-bg text-cream/65">
      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-burgundy/30 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.8fr_0.8fr] gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo-gc.png"
                alt="Corporación GC"
                width={48}
                height={48}
                className="h-10 w-auto dark:brightness-0 dark:invert"
              />
              <div>
                <div className="text-[13px] font-semibold tracking-[0.22em] text-cream leading-none">
                  CORPORACIÓN GC
                </div>
                <div className="text-[9px] tracking-[0.3em] text-cream/55 mt-1 font-light">
                  ABOGADOS · DERECHO PÚBLICO
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-[38ch] text-cream/65">
              Bufete de abogados especializado en Derecho Público, fundado
              por el Dr. Óscar Eduardo González Camacho, co-redactor del Código
              Procesal Contencioso Administrativo.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <TrackedContactLink
                href={`mailto:${FIRM_CONTACT.email}`}
                contactTarget="footer"
                className="p-2 rounded-lg border border-cream/12 hover:border-cream/25 hover:text-cream transition-all duration-300"
                aria-label="Email"
              >
                <Envelope size={18} weight="regular" />
              </TrackedContactLink>
              <TrackedContactLink
                href={`tel:+${FIRM_CONTACT.phoneRaw}`}
                contactTarget="footer"
                className="p-2 rounded-lg border border-cream/12 hover:border-cream/25 hover:text-cream transition-all duration-300"
                aria-label="Teléfono"
              >
                <Phone size={18} weight="regular" />
              </TrackedContactLink>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="type-label text-cream/65 mb-5">
              Navegación
            </div>
            <div className="flex flex-col gap-3">
              {FIRM_NAV_LINKS.map((link) =>
                ("pageHref" in link ? link.pageHref : link.href).startsWith("/") ? (
                  <Link
                    key={link.href}
                    href={"pageHref" in link ? link.pageHref : link.href}
                    className="text-sm text-cream/65 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-cream/65 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <div className="type-label text-cream/65 mb-5">
              Contacto
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={14} weight="duotone" className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-cream/65">{FIRM_CONTACT.location}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={14} weight="duotone" className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-cream/65">{FIRM_CONTACT.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <Envelope size={14} weight="duotone" className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-cream/65">{FIRM_CONTACT.email}</span>
              </div>
            </div>
            <div className="mt-4 text-xs text-cream/55">
              {FIRM_CONTACT.hours}
            </div>
          </div>
        </div>
        {/* Áreas núcleo y guías pilar: los enlaces internos que el pie
            reparte en las 82 páginas. Antes solo repetía el menú, y la
            autoridad se escapaba hacia la política de privacidad. */}
        <div className="mt-14 grid grid-cols-1 gap-12 border-t border-cream/[0.08] pt-12 md:mt-16 md:grid-cols-2 md:gap-8 md:pt-14">
          <div>
            <div className="type-label mb-5 text-cream/65">Áreas de práctica</div>
            <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {FOOTER_AREAS.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="text-sm text-cream/65 transition-colors duration-300 hover:text-cream"
                  >
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="type-label mb-5 text-cream/65">Guías más consultadas</div>
            <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {FOOTER_GUIAS.map((g) => (
                <li key={g.href}>
                  <Link
                    href={g.href}
                    className="text-sm text-cream/65 transition-colors duration-300 hover:text-cream"
                  >
                    {g.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Colegio affiliation */}
        <div className="mt-12 pt-6 border-t border-cream/[0.06]">
          <p className="text-[11px] text-cream/55 leading-relaxed max-w-[70ch]">
            Todos los abogados de Corporación GC son miembros activos del
            Colegio de Abogados y Abogadas de Costa Rica. La información
            contenida en este sitio no constituye asesoría legal.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-cream/55">
            © {new Date().getFullYear()} Corporación GC. Todos los
            derechos reservados.
          </div>
          <Link
            href="/politica-de-privacidad"
            className="text-xs text-cream/40 hover:text-cream transition-colors duration-300"
          >
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
