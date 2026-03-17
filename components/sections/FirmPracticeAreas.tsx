"use client";

import { Scales, Gavel, ShieldCheck, FileText, Buildings, Stamp, Briefcase, Bank, Lightbulb, UsersThree, Leaf, Handshake } from "@phosphor-icons/react";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";
import { FIRM_PRACTICE_AREAS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Scales, Gavel, ShieldCheck, FileText, Buildings, Stamp, Briefcase, Bank, Lightbulb, UsersThree, Leaf, Handshake };

/* First 4 are the core Public Law areas */
const PRIMARY_COUNT = 4;

export function FirmPracticeAreas() {
  const primary = FIRM_PRACTICE_AREAS.slice(0, PRIMARY_COUNT);
  const secondary = FIRM_PRACTICE_AREAS.slice(PRIMARY_COUNT);

  return (
    <section id="areas" className="relative bg-surface py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <AnimatedEntry>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-cream/55 font-medium">&Aacute;reas de pr&aacute;ctica</span>
          </div>
        </AnimatedEntry>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">N&uacute;cleo en{" "}<span className="text-burgundy-light">Derecho P&uacute;blico</span></h2>
            </AnimatedEntry>
            <AnimatedEntry delay={0.2}>
              <p className="mt-4 text-sm text-cream/70 leading-relaxed max-w-[55ch]">
                Cuatro &#225;reas donde nuestra especializaci&#243;n marca la diferencia, con cobertura complementaria en todas las ramas que cada caso exige.
              </p>
            </AnimatedEntry>
          </div>
        </div>

        {/* Primary areas — large, prominent treatment */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" stagger={0.06}>
          {primary.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <StaggerItem key={i}>
                <div className="group p-6 md:p-8 rounded-xl border border-burgundy/15 bg-burgundy/[0.04] hover:bg-burgundy/[0.08] transition-all duration-400 h-full">
                  <div className="flex items-start gap-5">
                    <div className="p-3 rounded-xl bg-burgundy/[0.15] text-burgundy-light group-hover:bg-burgundy/25 transition-colors duration-300 shrink-0">
                      {Icon && <Icon size={24} weight="duotone" />}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-cream tracking-tight">{area.title}</h3>
                      <p className="mt-2 text-sm text-cream/75 leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Secondary areas — compact inline list */}
        <AnimatedEntry delay={0.4}>
          <div className="mt-12 pt-8 border-t border-cream/[0.08]">
            <div className="text-[10px] tracking-[0.2em] uppercase text-cream/50 mb-5">Cobertura complementaria</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3">
              {secondary.map((area, i) => {
                const Icon = iconMap[area.icon];
                return (
                  <div key={i} className="flex items-center gap-2.5 py-1.5">
                    {Icon && <Icon size={16} weight="duotone" className="text-cream/50 shrink-0" />}
                    <span className="text-sm text-cream/70">{area.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedEntry>
      </div>
    </section>
  );
}
