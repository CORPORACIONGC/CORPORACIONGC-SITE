"use client";

import { Scales, Gavel, ShieldCheck, FileText, Buildings, Stamp, Briefcase, Bank, Lightbulb, UsersThree, Leaf, Handshake } from "@phosphor-icons/react";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";
import { FIRM_PRACTICE_AREAS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Scales, Gavel, ShieldCheck, FileText, Buildings, Stamp, Briefcase, Bank, Lightbulb, UsersThree, Leaf, Handshake };

export function FirmPracticeAreas() {
  return (
    <section id="areas" className="relative bg-surface-alt py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <AnimatedEntry>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-display text-2xl font-light text-burgundy/40">02</span>
            <div className="h-px flex-1 max-w-8 bg-cream/[0.12]" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">Áreas de práctica</span>
          </div>
        </AnimatedEntry>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">Enfoque <span className="text-burgundy-light">integral</span></h2>
            </AnimatedEntry>
            <AnimatedEntry delay={0.2}>
              <p className="mt-4 text-sm text-cream/55 leading-relaxed max-w-[55ch]">
                N&#250;cleo en Derecho P&#250;blico con cobertura en todas las &#225;reas complementarias que cada caso exige. Abordaje integral respaldado por m&#225;s de tres d&#233;cadas de ejercicio profesional.
              </p>
            </AnimatedEntry>
          </div>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_0.85fr] xl:grid-cols-4 gap-4" stagger={0.05}>
          {FIRM_PRACTICE_AREAS.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <StaggerItem key={i}>
                <div className="group p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.03] hover:border-burgundy/20 active:scale-[0.98] transition-all duration-400 h-full">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 p-2.5 rounded-lg bg-burgundy/[0.12] text-burgundy-light group-hover:bg-burgundy/25 transition-colors duration-300 shrink-0">
                      {Icon && <Icon size={20} weight="duotone" />}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-cream/90 tracking-tight">{area.title}</h3>
                      <p className="mt-1.5 text-xs text-cream/50 leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
