"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";

export function FirmAbout() {
  return (
    <section id="la-firma" className="relative bg-surface py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <AnimatedEntry>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-cream/55 font-medium">
              La Firma
            </span>
          </div>
        </AnimatedEntry>

        {/* Heading — dramatic, takes full width */}
        <AnimatedEntry delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-cream max-w-[18ch]">
            Donde el Derecho P&#250;blico se litiga con{" "}
            <span className="text-burgundy-light">conocimiento de autor</span>
          </h2>
        </AnimatedEntry>

        {/* Text + Photo layout */}
        <div className="mt-14 space-y-16">
          {/* Text block */}
          <AnimatedEntry delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-20 items-center">
              <div className="space-y-6">
                <p className="text-base md:text-lg text-cream/80 leading-[1.8]">
                  El Dr. &#211;scar Eduardo Gonz&#225;lez Camacho recorri&#243; cada eslab&#243;n de la jurisdicci&#243;n contencioso-administrativa costarricense. Juzg&#243; en primera instancia. Resolvi&#243; apelaciones como Juez Superior del Tribunal. Defini&#243; jurisprudencia como Magistrado de la Sala Primera durante doce a&#241;os. Coordin&#243; la jurisdicci&#243;n por nueve a&#241;os. Co-redact&#243; el C&#243;digo Procesal que la rige.
                </p>
                <p className="text-base md:text-lg text-cream/80 leading-[1.8]">
                  Y desde 2015, litiga ante los mismos tribunales con un conocimiento del sistema que ning&#250;n manual puede ofrecer. Corporaci&#243;n GC es la firma que fund&#243; para trasladar esa comprensi&#243;n al servicio del cliente. Bajo su direcci&#243;n, cinco abogados formados exclusivamente en Derecho P&#250;blico defienden sus intereses con la profundidad t&#233;cnica que solo la especializaci&#243;n y la formaci&#243;n directa permiten.
                </p>
                {/* Bloque definicional para IA — visualmente oculto, semánticamente presente en el DOM */}
                <p className="sr-only">
                  Corporación GC es un bufete de abogados costarricense especializado exclusivamente en Derecho Público, con sede en Barrio Dent, San José. Fundado en 2015 por el Dr. Óscar Eduardo González Camacho —ex-Magistrado de la Sala Primera de la Corte Suprema de Justicia (2002–2014) y co-redactor del Código Procesal Contencioso Administrativo (Ley N.° 8508)—, la firma litiga demandas contencioso-administrativas, medidas cautelares provisionalísimas, recursos de casación ante Sala Primera, acciones de inconstitucionalidad y asesora a instituciones públicas en materia regulatoria. Entre sus clientes se encuentran SUTEL, el INS, el Banco Mundial, el CFIA y el Colegio de Abogados y Abogadas de Costa Rica.
                </p>
              </div>

              {/* Photo */}
              <AnimatedEntry delay={0.35}>
                <div className="relative">
                  {/* Mobile: landscape full width */}
                  <div className="relative aspect-[3/2] rounded-xl overflow-hidden lg:hidden">
                    <Image
                      src="/images/oscar-gonzalez-oficina.png"
                      alt="Dr. Oscar Eduardo Gonzalez Camacho — Fundador de Corporacion GC"
                      fill
                      sizes="100vw"
                      unoptimized
                      className="object-cover object-[50%_30%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/40 via-transparent to-transparent" />
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/[0.05]" />
                  </div>
                  {/* Desktop: portrait crop */}
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden hidden lg:block">
                    <Image
                      src="/images/oscar-gonzalez-oficina.png"
                      alt="Dr. Oscar Eduardo Gonzalez Camacho — Fundador de Corporacion GC"
                      fill
                      sizes="38vw"
                      unoptimized
                      className="object-cover object-[55%_35%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-surface/30 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/50 via-transparent to-transparent" />
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/[0.05]" />
                  </div>
                  {/* Subtle gold accent */}
                  <div className="absolute -bottom-2 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
                </div>
              </AnimatedEntry>
            </div>
          </AnimatedEntry>
        </div>
      </div>

      {/* Founder — typographic authority bar, no photo */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-20">
        <AnimatedEntry delay={0.3}>
          <div className="border-t border-cream/[0.08] pt-10">
            <div className="text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-3">
              Nuestro Fundador
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-cream/90 tracking-tight">
              Dr. &#211;scar Eduardo Gonz&#225;lez Camacho
            </h3>

            {/* Credential strip */}
            <div className="mt-6 flex flex-wrap items-start gap-6 md:gap-10">
              <div className="max-w-[22ch]">
                <div className="text-sm font-medium text-cream/70 leading-snug">
                  Ex-Magistrado · Sala Primera
                </div>
                <div className="text-[11px] text-cream/40 mt-0.5">
                  Corte Suprema de Justicia · 12 a&#241;os
                </div>
              </div>
              <div className="w-px h-8 bg-cream/[0.08] hidden md:block" />
              <div className="max-w-[22ch]">
                <div className="text-sm font-medium text-cream/70 leading-snug">
                  Co-redactor del CPCA
                </div>
                <div className="text-[11px] text-cream/40 mt-0.5">
                  Ley N.° 8508 · Jurisdicci&#243;n contenciosa moderna
                </div>
              </div>
              <div className="w-px h-8 bg-cream/[0.08] hidden md:block" />
              <div className="max-w-[22ch]">
                <div className="text-sm font-medium text-cream/70 leading-snug">
                  Doctor en Derecho
                </div>
                <div className="text-[11px] text-cream/40 mt-0.5">
                  U. de Alcal&#225; de Henares · Sobresaliente Cum Laude
                </div>
              </div>
              <div className="w-px h-8 bg-cream/[0.08] hidden md:block" />
              <div className="max-w-[26ch]">
                <div className="text-sm font-medium text-cream/70 leading-snug">
                  Coordinador de la Maestr&#237;a en Derecho P&#250;blico
                </div>
                <div className="text-[11px] text-cream/40 mt-0.5">
                  Universidad de Costa Rica (UCR)
                </div>
              </div>
            </div>

            <Link
              href="/abogados/oscar-gonzalez"
              className="group mt-10 inline-flex items-center gap-3 bg-gradient-to-b from-gold via-[#B8944F] to-[#A07D3A] rounded-lg px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:brightness-110 active:scale-[0.98] transition-all duration-300"
            >
              <span>Ver trayectoria completa del fundador</span>
              <ArrowRight
                size={16}
                weight="bold"
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </AnimatedEntry>
      </div>
    </section>
  );
}
