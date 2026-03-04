"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scales, GraduationCap, Gavel, BookOpenText } from "@phosphor-icons/react";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";

const FOUNDER_HIGHLIGHTS = [
  { icon: GraduationCap, text: "Doctor en Derecho por la Universidad de Alcal\u00e1 de Henares, Sobresaliente Cum Laude" },
  { icon: Gavel, text: "Magistrado de la Sala Primera de la Corte Suprema de Justicia durante 12 a\u00f1os (2002\u20132014)" },
  { icon: Scales, text: "Co-redactor del C\u00f3digo Procesal Contencioso Administrativo (Ley N.\u00b0 8508)" },
  { icon: BookOpenText, text: "Autor de Justicia Administrativa (3 tomos). Profesor de Doctorado y Maestr\u00eda en Derecho P\u00fablico, UCR" },
] as const;

export function FirmAbout() {
  return (
    <section id="la-firma" className="relative bg-surface-alt py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20">
          <div>
            <AnimatedEntry>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-2xl font-light text-burgundy/40">01</span>
                <div className="h-px flex-1 max-w-8 bg-cream/[0.12]" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">La Firma</span>
              </div>
            </AnimatedEntry>
            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05] text-cream">
                Derecho P&#250;blico<br />con <span className="text-burgundy-light">autoridad</span>
              </h2>
            </AnimatedEntry>
            <AnimatedEntry delay={0.2}>
              <p className="mt-6 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                Corporaci&#243;n GC nace de la visi&#243;n del Dr. &#211;scar Eduardo Gonz&#225;lez Camacho, quien desde la judicatura contribuy&#243; a edificar la jurisdicci&#243;n contencioso-administrativa costarricense. Tras 12 a&#241;os como Magistrado de la Corte Suprema y co-redactar el C&#243;digo Procesal que rige la materia, su conocimiento &#237;ntimo del sistema se traduce en una ventaja estrat&#233;gica que ning&#250;n otro bufete puede replicar.
              </p>
            </AnimatedEntry>
            <AnimatedEntry delay={0.3}>
              <p className="mt-4 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                Bajo su direcci&#243;n, un equipo de abogados formados exclusivamente en Derecho P&#250;blico defiende sus intereses ante el Tribunal Contencioso Administrativo, la Sala Primera, la Sala Constitucional y diversas instancias de la Administraci&#243;n P&#250;blica con la profundidad t&#233;cnica que solo la especializaci&#243;n y la formaci&#243;n directa permiten.
              </p>
            </AnimatedEntry>
            <AnimatedEntry delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Litigio contencioso-administrativo", "Derecho Constitucional", "Contrataci\u00f3n P\u00fablica", "Derecho Administrativo"].map((area) => (
                  <span key={area} className="px-3 py-1.5 rounded-lg text-xs tracking-wide bg-cream/[0.06] text-cream/55 border border-cream/[0.06]">{area}</span>
                ))}
              </div>
            </AnimatedEntry>
          </div>
          <div className="lg:pt-8">
            <AnimatedEntry delay={0.2}>
              <div className="p-6 md:p-8 rounded-2xl border border-cream/[0.08] bg-cream/[0.03]">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-cream/[0.08]">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-cream/[0.08] shrink-0">
                    <Image src="/images/oscar-gonzalez.png" alt="Dr. &#211;scar Eduardo Gonz&#225;lez Camacho" width={112} height={112} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-1">Nuestro Fundador</div>
                    <h3 className="text-base font-semibold text-cream/90 tracking-tight">Dr. &#211;scar Eduardo Gonz&#225;lez Camacho</h3>
                  </div>
                </div>
                <StaggerContainer className="space-y-4" stagger={0.08}>
                  {FOUNDER_HIGHLIGHTS.map((item, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 p-2 rounded-lg bg-burgundy/[0.12] text-burgundy-light shrink-0"><item.icon size={16} weight="duotone" /></div>
                        <p className="text-sm text-cream/65 leading-relaxed">{item.text}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <div className="mt-5 pt-4 border-t border-cream/[0.08]">
                  <p className="text-[11px] text-cream/45 leading-relaxed">
                    Conferencista internacional en Colombia, Bolivia, Ecuador, Argentina, Alemania, Portugal, Espa&#241;a y Estados Unidos.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-cream/[0.08] grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-display text-2xl font-semibold text-cream tracking-tight">38+</div>
                    <div className="text-[10px] text-cream/40 mt-0.5">A&#241;os de trayectoria</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-semibold text-cream tracking-tight">2015</div>
                    <div className="text-[10px] text-cream/40 mt-0.5">Litigante desde</div>
                  </div>
                </div>
                <Link href="/abogados/oscar-gonzalez" className="group mt-6 flex items-center gap-2 text-xs text-cream/45 hover:text-gold transition-colors duration-300">
                  <span>Ver trayectoria completa del Director</span>
                  <ArrowRight size={12} weight="bold" className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </div>
            </AnimatedEntry>
          </div>
        </div>
      </div>
    </section>
  );
}
