"use client";

import Image from "next/image";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MapPin, Microphone, BookOpen } from "@phosphor-icons/react";

export function OscarEventoDestacado() {
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
            CPCA 20 A&ntilde;os:{" "}
            <span className="text-burgundy-light">Balance y desaf&iacute;os</span>
          </h2>
        </AnimatedEntry>

        <AnimatedEntry delay={0.2}>
          <div className="rounded-2xl bg-cream/[0.025] shadow-[0_8px_30px_-16px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.03)] overflow-hidden backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-0">
              {/* Photo */}
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                <Image
                  src="/images/oscar-cpca-podio.png"
                  alt="Dr. Óscar Eduardo González Camacho — Ponencia en CPCA 20 Años, Colegio de Abogados"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover object-[50%_20%]"
                />
                {/* Seamless blend into info panel */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface/40 pointer-events-none hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/30 to-transparent pointer-events-none md:hidden" />
              </div>

              {/* Event info */}
              <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/40 font-medium mb-5">
                  25 de marzo, 2026
                </span>

                <h3 className="font-display text-xl md:text-[1.65rem] tracking-tight text-cream leading-snug mb-5">
                  CPCA 20 A&ntilde;os: Balance, transformaciones y desaf&iacute;os de la justicia administrativa
                </h3>

                <div className="space-y-2.5 mb-8">
                  <div className="flex items-start gap-2.5">
                    <Microphone size={14} weight="duotone" className="text-cream/30 shrink-0 mt-0.5" />
                    <p className="text-[13px] text-cream/55 leading-relaxed">
                      <span className="text-cream/70 font-medium">Mesa II</span>{" "}
                      &mdash; El futuro del proceso contencioso administrativo
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin size={14} weight="duotone" className="text-cream/30 shrink-0 mt-0.5" />
                    <p className="text-[13px] text-cream/55 leading-relaxed">
                      Colegio de Abogados y Abogadas de Costa Rica
                    </p>
                  </div>
                </div>

                {/* Article presented */}
                <div className="mb-8 pl-4 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" />
                  <p className="text-[13px] text-cream/65 leading-relaxed italic">
                    &ldquo;El por qu&eacute; y para qu&eacute; del contencioso administrativo&rdquo;
                  </p>
                  <p className="text-[11px] text-cream/35 mt-2 leading-relaxed">
                    En: <em>CPCA, 20 a&ntilde;os despu&eacute;s</em> &mdash; Tirant lo Blanch, 2026
                  </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <MagneticButton
                    href="/articulos/por-que-y-para-que-contencioso-administrativo"
                    variant="primary"
                  >
                    Leer cap&iacute;tulo
                  </MagneticButton>
                  <MagneticButton
                    href="https://editorial.tirant.com/cr/libro/cpca-20-anos-despues-perspectivas-criticas-sobre-la-justicia-administrativa-alex-rojas-ortega-9791370214753"
                    variant="outline"
                  >
                    <BookOpen size={16} weight="duotone" />
                    Comprar el libro
                  </MagneticButton>
                </div>

                {/* Co-organizers */}
                <p className="text-[11px] text-cream/25 tracking-wide">
                  Tirant Editorial &middot; Universidad Escuela Libre de Derecho
                </p>
              </div>
            </div>
          </div>
        </AnimatedEntry>
      </div>
    </section>
  );
}
