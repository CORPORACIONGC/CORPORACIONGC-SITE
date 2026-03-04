"use client";

import Image from "next/image";
import {
  Envelope,
  Phone,
  WhatsappLogo,
  MapPin,
  Clock,
  ArrowRight,
} from "@phosphor-icons/react";
import {
  AnimatedEntry,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedEntry";
import { LeadForm } from "@/components/sections/LeadForm";
import { GoogleMap } from "@/components/sections/GoogleMap";
import { FIRM_CONTACT } from "@/lib/constants";

const contactItems = [
  {
    icon: Envelope,
    label: "Email",
    value: FIRM_CONTACT.email,
    href: `mailto:${FIRM_CONTACT.email}`,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: FIRM_CONTACT.phone,
    href: `tel:${FIRM_CONTACT.phoneRaw}`,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: FIRM_CONTACT.location,
    href: null,
  },
  {
    icon: Clock,
    label: "Horario",
    value: FIRM_CONTACT.hours,
    href: null,
  },
];

export function FirmContact() {
  const whatsappUrl = `https://wa.me/${FIRM_CONTACT.phoneRaw}?text=${encodeURIComponent(FIRM_CONTACT.whatsappMessage)}`;

  return (
    <section
      id="contacto"
      className="relative bg-dark-bg py-24 md:py-32 overflow-hidden"
    >
      {/* Gold accent top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-burgundy/[0.04] blur-[120px] pointer-events-none hidden dark:block" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        {/* ─── Top: Info + Lead Form ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20">
          {/* Left — Info */}
          <div>
            <AnimatedEntry>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gold" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">
                  Contacto
                </span>
              </div>
            </AnimatedEntry>

            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
                Hablemos sobre
                <br />
                <span className="text-gold">su caso</span>
              </h2>
            </AnimatedEntry>

            <AnimatedEntry delay={0.2}>
              <p className="mt-5 text-sm text-cream/55 leading-relaxed max-w-[50ch]">
                Ofrecemos asesoría y representación jurídica de primer nivel en
                todas las ramas del Derecho Público. Cuéntenos su situación y
                buscaremos juntos la mejor estrategia legal.
              </p>
            </AnimatedEntry>

            <StaggerContainer className="mt-10 space-y-4" stagger={0.06}>
              {contactItems.map((item, i) => {
                const Wrapper = item.href ? "a" : "div";
                const wrapperProps = item.href
                  ? {
                      href: item.href,
                      target: item.href.startsWith("http")
                        ? ("_blank" as const)
                        : undefined,
                      rel: item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined,
                    }
                  : {};
                return (
                  <StaggerItem key={i}>
                    <Wrapper
                      {...wrapperProps}
                      className="group flex items-center gap-4 p-4 rounded-xl border border-cream/[0.08] hover:border-gold/20 active:scale-[0.98] transition-all duration-400"
                    >
                      <div className="p-2.5 rounded-lg bg-cream/[0.06] text-cream/60 group-hover:text-gold group-hover:bg-gold/[0.08] transition-all duration-300">
                        <item.icon size={20} weight="duotone" />
                      </div>
                      <div>
                        <div className="text-[10px] tracking-wider uppercase text-cream/40">
                          {item.label}
                        </div>
                        <div className="text-sm text-cream/75 group-hover:text-cream transition-colors duration-300">
                          {item.value}
                        </div>
                      </div>
                    </Wrapper>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Right — Lead Form Card */}
          <div className="flex items-start lg:items-center">
            <AnimatedEntry delay={0.3} direction="right" className="w-full">
              <div className="p-8 md:p-10 rounded-2xl bg-cream/[0.04] border border-cream/[0.10] backdrop-blur-sm">
                <h3 className="font-display text-xl font-semibold text-cream tracking-tight mb-2">
                  Solicite una consulta
                </h3>
                <p className="text-xs text-cream/45 leading-relaxed mb-8">
                  Complete el formulario y le contactaremos a la brevedad para
                  coordinar una reunión.
                </p>

                <LeadForm />
              </div>
            </AnimatedEntry>
          </div>
        </div>

        {/* ─── Google Maps ─── */}
        <AnimatedEntry delay={0.2} className="mt-16">
          <GoogleMap />
        </AnimatedEntry>

        {/* ─── WhatsApp secondary + GC branding ─── */}
        <AnimatedEntry delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-cream/[0.08]">
            {/* WhatsApp secondary CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 text-sm text-cream/50 hover:text-gold transition-colors duration-300"
            >
              <WhatsappLogo size={18} weight="fill" className="text-cream/40 group-hover:text-gold transition-colors duration-300" />
              <span>
                ¿Prefiere WhatsApp? Escríbanos directamente
              </span>
              <ArrowRight size={12} weight="bold" className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>

            {/* GC branding */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-gc.png"
                alt="Corporación GC"
                width={40}
                height={40}
                className="h-8 w-auto opacity-60 dark:opacity-90 dark:brightness-0 dark:invert"
              />
              <div>
                <div className="text-[13px] font-semibold tracking-[0.22em] text-cream/60 leading-none">
                  CORPORACIÓN GC
                </div>
                <div className="text-[9px] tracking-[0.3em] text-cream/40 mt-1 font-light">
                  ABOGADOS · DERECHO PÚBLICO
                </div>
              </div>
            </div>
          </div>
        </AnimatedEntry>
      </div>
    </section>
  );
}
