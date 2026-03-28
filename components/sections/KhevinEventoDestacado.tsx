"use client";

import Image from "next/image";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MapPin, Microphone, GlobeHemisphereWest } from "@phosphor-icons/react";

export function KhevinEventoDestacado() {
  return (
    <section className="relative bg-surface py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <AnimatedEntry>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-cream/55 font-medium">
              Evento Destacado
            </span>
          </div>
        </AnimatedEntry>

        <AnimatedEntry delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl tracking-tighter leading-[1.05] text-cream mb-12">
            Global Summit{" "}
            <span className="text-burgundy-light">Legal Hackers 2025</span>
          </h2>
        </AnimatedEntry>

        <AnimatedEntry delay={0.2}>
          <div className="rounded-2xl bg-cream/[0.025] shadow-[0_8px_30px_-16px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.03)] overflow-hidden backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-0">
              {/* Photo */}
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                <Image
                  src="/images/khevin-legal-hackers-bogota.jpeg"
                  alt="Lic. Khevin Sánchez Zamora — Panelista en Global Summit Legal Hackers 2025, Bogotá"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover object-[50%_30%]"
                />
                {/* Seamless blend into info panel */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface/40 pointer-events-none hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/30 to-transparent pointer-events-none md:hidden" />
              </div>

              {/* Event info */}
              <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/40 font-medium mb-5">
                  23 de octubre, 2025
                </span>

                <h3 className="font-display text-xl md:text-[1.65rem] tracking-tight text-cream leading-snug mb-5">
                  Global Summit Legal Hackers 2025: Bogot&aacute;
                </h3>

                <div className="space-y-2.5 mb-8">
                  <div className="flex items-start gap-2.5">
                    <Microphone size={14} weight="duotone" className="text-cream/30 shrink-0 mt-0.5" />
                    <p className="text-[13px] text-cream/55 leading-relaxed">
                      <span className="text-cream/70 font-medium">Panel</span>{" "}
                      &mdash; IA en el Derecho: M&aacute;s all&aacute; de la Eficiencia, la Urgencia de un Marco &Eacute;tico
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin size={14} weight="duotone" className="text-cream/30 shrink-0 mt-0.5" />
                    <p className="text-[13px] text-cream/55 leading-relaxed">
                      Universidad Javeriana, Bogot&aacute;, Colombia
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <GlobeHemisphereWest size={14} weight="duotone" className="text-cream/30 shrink-0 mt-0.5" />
                    <p className="text-[13px] text-cream/55 leading-relaxed">
                      Primera edici&oacute;n suramericana del summit global
                    </p>
                  </div>
                </div>

                {/* Panelists */}
                <div className="mb-8 pl-4 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" />
                  <p className="text-[13px] text-cream/65 leading-relaxed">
                    Panelistas: Khevin S&aacute;nchez &middot; &Aacute;ngela Villate (VillateLab) &middot; Jimena Mora (Microsoft) &middot; Nicol&aacute;s Casta&ntilde;eda (Keralty)
                  </p>
                  <p className="text-[11px] text-cream/35 mt-2 leading-relaxed">
                    Encuentro internacional con l&iacute;deres en legaltech de m&aacute;s de 130 ciudades
                  </p>
                </div>

                {/* Link */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <MagneticButton
                    href="https://www.globalsummitlh2025.com/en"
                    variant="outline"
                  >
                    <GlobeHemisphereWest size={16} weight="duotone" />
                    Ver sitio del evento
                  </MagneticButton>
                </div>

                {/* Organizer */}
                <p className="text-[11px] text-cream/25 tracking-wide">
                  Legal Hackers Bogot&aacute; &middot; Universidad Javeriana
                </p>
              </div>
            </div>
          </div>
        </AnimatedEntry>
      </div>
    </section>
  );
}
