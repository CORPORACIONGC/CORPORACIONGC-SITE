"use client";

import Image from "next/image";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function OscarHero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] bg-surface overflow-hidden"
    >
      {/* Subtle burgundy gradient accent — dark mode only */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-burgundy/[0.08] to-transparent pointer-events-none hidden dark:block" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-28 md:pt-0 md:min-h-[100dvh] grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-center">
        {/* Left — Content */}
        <div className="relative z-10 py-8 md:py-0">
          <AnimatedEntry delay={0.1}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[11px] tracking-[0.25em] uppercase text-cream/50 font-medium">
                Fundador y Director · Corporación GC
              </span>
            </div>
          </AnimatedEntry>

          <AnimatedEntry delay={0.2}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-none text-cream">
              Dr. Óscar Eduardo
              <br />
              González{" "}
              <span className="text-gold">Camacho</span>
            </h1>
          </AnimatedEntry>

          {/* Mobile-only: editorial photo strip */}
          <AnimatedEntry delay={0.3} className="md:hidden">
            <div className="mt-6 w-full overflow-hidden relative">
              <Image
                src="/images/oscar-gonzalez-solo.png"
                alt="Dr. Óscar Eduardo González Camacho"
                width={768}
                height={1024}
                priority
                className="w-full h-auto"
              />
              {/* Burgundy tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/30 via-transparent to-burgundy-dark/10 mix-blend-multiply pointer-events-none" />
              {/* Bottom fade into surface */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
              {/* Thin gold accent line — bottom */}
              <div className="absolute inset-x-[15%] bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            </div>
          </AnimatedEntry>

          <AnimatedEntry delay={0.35}>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-burgundy rounded-full" />
              <p className="text-base md:text-lg text-cream/65 leading-relaxed max-w-[50ch]">
                Ex-Magistrado de la Corte Suprema de Justicia. Co-redactor del
                Código Procesal Contencioso Administrativo. Uno de los
                litigantes de mayor calado en la jurisdicción
                contencioso-administrativa costarricense.
              </p>
            </div>
          </AnimatedEntry>

          <AnimatedEntry delay={0.5}>
            <div className="mt-4 text-[11px] text-cream/35 tracking-wide">
              Carnet CAACR 3191
            </div>
          </AnimatedEntry>

          <AnimatedEntry delay={0.65}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton href="#contacto" variant="primary">
                Contactar
              </MagneticButton>
              <MagneticButton href="/articulos" variant="outline">
                Artículos
              </MagneticButton>
            </div>
          </AnimatedEntry>
        </div>

        {/* Right — Photo (editorial treatment matching firm homepage) */}
        <AnimatedEntry delay={0.3} direction="right" className="relative hidden md:block">
          <div className="relative md:h-[82vh] max-h-[780px]">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/oscar-gonzalez-solo.png"
                alt="Dr. Óscar Eduardo González Camacho"
                width={768}
                height={1024}
                priority
                className="w-full h-full object-cover object-[65%_15%]"
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
