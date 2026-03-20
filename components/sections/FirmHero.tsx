"use client";

import Image from "next/image";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { MagneticButton } from "@/components/ui/MagneticButton";

import { OSCAR_PROFILE } from "@/lib/constants";

export function FirmHero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] bg-surface overflow-hidden"
    >
      {/* Subtle burgundy gradient accent — dark mode only */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-burgundy/[0.08] to-transparent pointer-events-none hidden dark:block" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-28 md:pt-0 md:min-h-[100dvh] grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-6 items-center">
        {/* Left — Content */}
        <div className="relative z-10 py-8 md:py-0">
          <AnimatedEntry delay={0.15}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-cream/55 font-medium">
                Bufete de Abogados en Derecho P&#250;blico
              </span>
            </div>
          </AnimatedEntry>

          <AnimatedEntry delay={0.25}>
            <h1 className="font-body text-4xl md:text-6xl lg:text-7xl tracking-[0.08em] uppercase leading-none text-cream font-medium">
              Corporaci&#243;n GC
            </h1>
          </AnimatedEntry>

          <AnimatedEntry delay={0.35}>
            <p className="mt-3 text-[11px] tracking-[0.2em] uppercase text-cream/55 font-medium">
              Fundado y dirigido por el Dr. &#211;scar Eduardo Gonz&#225;lez Camacho
            </p>
          </AnimatedEntry>

          {/* Mobile-only: compact founder photo strip */}
          <AnimatedEntry delay={0.4} className="md:hidden">
            <div className="mt-6 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-cream/[0.08] shrink-0">
                <Image
                  src={OSCAR_PROFILE.photo}
                  alt={OSCAR_PROFILE.name}
                  width={128}
                  height={128}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-cream/90 tracking-tight">
                  Dr. Óscar E. González Camacho
                </div>
                <div className="text-[10px] tracking-[0.12em] text-gold/70 font-medium mt-0.5">
                  FUNDADOR Y DIRECTOR
                </div>
              </div>
            </div>
          </AnimatedEntry>

          <AnimatedEntry delay={0.45}>
            <div className="mt-6 md:mt-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-burgundy rounded-full" />
              <p className="text-base md:text-lg text-cream/80 leading-relaxed max-w-[50ch]">
                Co-redactor del C&#243;digo Procesal Contencioso
                Administrativo. Magistrado de la Sala Primera de la Corte
                Suprema durante doce a&#241;os. Coordinador de la
                Jurisdicci&#243;n Contencioso-Administrativa por nueve
                a&#241;os. Once a&#241;os litigando ante los tribunales que
                ayud&#243; a construir.
              </p>
            </div>
          </AnimatedEntry>

          <AnimatedEntry delay={0.55}>
            <p className="mt-4 text-sm text-cream/65 leading-relaxed max-w-[55ch]">
              El Dr. Gonz&#225;lez Camacho dirige y trabaja personalmente
              en cada caso junto a un equipo de cinco abogados formados
              exclusivamente en Derecho P&#250;blico bajo su
              supervisi&#243;n directa. Conocimiento de autor y un equipo
              entrenado para ejecutarlo.
            </p>
          </AnimatedEntry>

          <AnimatedEntry delay={0.65}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton href="#contacto" variant="primary">
                Agendar consulta
              </MagneticButton>
              <MagneticButton href="#la-firma" variant="outline">
                Conocer la firma
              </MagneticButton>
            </div>
          </AnimatedEntry>
        </div>

        {/* Right — Founder Photo (desktop only, monumental editorial treatment) */}
        <AnimatedEntry delay={0.3} direction="right" className="relative hidden md:block">
          <div className="relative md:h-[82vh] max-h-[780px]">
            {/* Photo — full column, no rounded corners, editorial crop */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={OSCAR_PROFILE.photo}
                alt={`${OSCAR_PROFILE.name} \u2014 Fundador y Director de Corporaci\u00f3n GC`}
                width={768}
                height={1024}
                priority
                className="w-full h-full object-cover object-top"
              />

              {/* Subtle burgundy tint overlay for editorial tone */}
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/40 via-transparent to-burgundy-dark/10 mix-blend-multiply pointer-events-none" />

              {/* Bottom fade into surface */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface via-surface/60 to-transparent" />

              {/* Thin gold accent line — left edge */}
              <div className="absolute top-[10%] bottom-[10%] left-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
            </div>

          </div>
        </AnimatedEntry>
      </div>
    </section>
  );
}
