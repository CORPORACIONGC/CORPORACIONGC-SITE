"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";

export function FirmAbout() {
  return (
    <section id="la-firma" className="relative bg-surface py-24 md:py-32 overflow-hidden">
      {/* Full-width editorial intro — no cards, just typography */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <AnimatedEntry>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-cream/55 font-medium">La Firma</span>
          </div>
        </AnimatedEntry>

        <AnimatedEntry delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-cream max-w-[20ch]">
            Donde el Derecho P&#250;blico se litiga con{" "}
            <span className="text-burgundy-light">conocimiento de autor</span>
          </h2>
        </AnimatedEntry>

        {/* Two-column editorial text — no cards wrapping it */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <AnimatedEntry delay={0.2}>
            <p className="text-base md:text-lg text-cream/80 leading-[1.8] max-w-[55ch]">
              El Dr. &#211;scar Eduardo Gonz&#225;lez Camacho recorri&#243; cada eslab&#243;n de la jurisdicci&#243;n contencioso-administrativa costarricense. Juzg&#243; en primera instancia. Resolvi&#243; apelaciones como Juez Superior del Tribunal. Defini&#243; jurisprudencia como Magistrado de la Sala Primera durante doce a&#241;os. Coordin&#243; la jurisdicci&#243;n por nueve a&#241;os. Co-redact&#243; el C&#243;digo Procesal que la rige.
            </p>
          </AnimatedEntry>
          <AnimatedEntry delay={0.3}>
            <p className="text-base md:text-lg text-cream/80 leading-[1.8] max-w-[55ch]">
              Y desde 2015, litiga ante los mismos tribunales con un conocimiento del sistema que ning&#250;n manual puede ofrecer. Corporaci&#243;n GC es la firma que fund&#243; para trasladar esa comprensi&#243;n al servicio del cliente. Bajo su direcci&#243;n, cinco abogados formados exclusivamente en Derecho P&#250;blico defienden sus intereses con la profundidad t&#233;cnica que solo la especializaci&#243;n y la formaci&#243;n directa permiten.
            </p>
          </AnimatedEntry>
        </div>

      </div>

      {/* Founder — centered, concise */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-20">
        <AnimatedEntry delay={0.2}>
          <div className="border-t border-cream/[0.08] pt-12 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-xl overflow-hidden border border-cream/[0.08] mb-4">
              <Image src="/images/oscar-gonzalez.png" alt="Dr. Óscar Eduardo González Camacho" width={160} height={160} className="w-full h-full object-cover" />
            </div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-cream/55 mb-1">Nuestro Fundador</div>
            <h3 className="text-lg font-semibold text-cream/90 tracking-tight">Dr. Óscar Eduardo González Camacho</h3>

            {/* KPIs — academic credentials */}
            <div className="mt-6 flex flex-wrap items-start justify-center gap-6 md:gap-10">
              <div className="max-w-[18ch] text-center">
                <div className="text-[11px] font-medium text-cream/80 leading-snug">Doctor en Derecho</div>
                <div className="text-[10px] text-cream/45 mt-0.5">U. de Alcalá de Henares · Sobresaliente Cum Laude</div>
              </div>
              <div className="w-px h-8 bg-cream/[0.1] hidden md:block" />
              <div className="max-w-[18ch] text-center">
                <div className="text-[11px] font-medium text-cream/80 leading-snug">Profesor Asociado</div>
                <div className="text-[10px] text-cream/45 mt-0.5">Universidad de Costa Rica</div>
              </div>
              <div className="w-px h-8 bg-cream/[0.1] hidden md:block" />
              <div className="max-w-[20ch] text-center">
                <div className="text-[11px] font-medium text-cream/80 leading-snug">Coordinador de la Maestría en Derecho Público</div>
                <div className="text-[10px] text-cream/45 mt-0.5">Universidad de Costa Rica</div>
              </div>
            </div>

            <Link href="/abogados/oscar-gonzalez" className="group mt-8 flex items-center gap-2 text-xs text-cream/55 hover:text-gold transition-colors duration-300">
              <span>Ver trayectoria completa</span>
              <ArrowRight size={12} weight="bold" className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </Link>
          </div>
        </AnimatedEntry>
      </div>
    </section>
  );
}
