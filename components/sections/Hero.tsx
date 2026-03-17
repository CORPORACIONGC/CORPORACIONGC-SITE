"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowDown } from "@phosphor-icons/react";

export function Hero() {
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
                Abogado Asociado · Corporación GC
              </span>
            </div>
          </AnimatedEntry>

          <AnimatedEntry delay={0.2}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-none text-cream">
              Lic. Khevin Alberto
              <br />
              Sánchez{" "}
              <span className="text-gold">Zamora</span>
            </h1>
          </AnimatedEntry>

          <AnimatedEntry delay={0.35}>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-burgundy rounded-full" />
              <p className="text-base md:text-lg text-cream/65 leading-relaxed max-w-[50ch]">
                Abogado litigante especializado en Derecho Administrativo,
                Contencioso Administrativo y Derecho Constitucional.
              </p>
            </div>
          </AnimatedEntry>

          <AnimatedEntry delay={0.5}>
            <div className="mt-3 text-[11px] text-cream/35 tracking-wide">
              Carnet CAACR 37920
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

        {/* Right — Photo */}
        <AnimatedEntry delay={0.3} direction="right" className="relative">
          <div className="relative md:h-[75vh] max-h-[700px] flex items-end justify-center">
            <div className="relative w-[80%] md:w-[85%] aspect-[3/4] rounded-[1.5rem] overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/foto-perfil.jpeg"
                alt="Lic. Khevin Alberto Sánchez Zamora"
                width={768}
                height={1024}
                priority
                className="w-full h-[110%] object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent" />
            </div>
          </div>
        </AnimatedEntry>
      </div>

    </section>
  );
}
