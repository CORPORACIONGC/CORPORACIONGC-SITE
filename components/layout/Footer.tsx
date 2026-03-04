import Image from "next/image";
import Link from "next/link";
import { FIRM_CONTACT, FIRM_NAV_LINKS } from "@/lib/constants";
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
                <div className="text-[9px] tracking-[0.3em] text-cream/40 mt-1 font-light">
                  ABOGADOS · DERECHO PÚBLICO
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-[38ch] text-cream/50">
              Bufete de abogados especializado en Derecho Público, fundado
              por el Dr. Óscar González Camacho, co-redactor del Código
              Procesal Contencioso Administrativo.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={`mailto:${FIRM_CONTACT.email}`}
                className="p-2 rounded-lg border border-cream/12 hover:border-cream/25 hover:text-cream transition-all duration-300"
                aria-label="Email"
              >
                <Envelope size={18} weight="regular" />
              </a>
              <a
                href={`tel:${FIRM_CONTACT.phoneRaw}`}
                className="p-2 rounded-lg border border-cream/12 hover:border-cream/25 hover:text-cream transition-all duration-300"
                aria-label="Teléfono"
              >
                <Phone size={18} weight="regular" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-cream/40 mb-5">
              Navegación
            </div>
            <div className="flex flex-col gap-3">
              {FIRM_NAV_LINKS.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-cream/55 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-cream/55 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-cream/40 mb-5">
              Contacto
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={14} weight="duotone" className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-cream/50">{FIRM_CONTACT.location}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={14} weight="duotone" className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-cream/50">{FIRM_CONTACT.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <Envelope size={14} weight="duotone" className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-cream/50">{FIRM_CONTACT.email}</span>
              </div>
            </div>
            <div className="mt-4 text-xs text-cream/35">
              {FIRM_CONTACT.hours}
            </div>
          </div>
        </div>

        {/* Colegio affiliation */}
        <div className="mt-12 pt-6 border-t border-cream/[0.06]">
          <p className="text-[11px] text-cream/35 leading-relaxed max-w-[70ch]">
            Todos los abogados de Corporación GC son miembros activos del
            Colegio de Abogados y Abogadas de Costa Rica. La información
            contenida en este sitio no constituye asesoría legal.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-cream/35">
            © {new Date().getFullYear()} Corporación GC. Todos los
            derechos reservados.
          </div>
          <div className="text-xs text-cream/30">
            {FIRM_CONTACT.location}
          </div>
        </div>
      </div>
    </footer>
  );
}
