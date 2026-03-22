"use client";

import Link from "next/link";
import { Scales, Gavel, ShieldCheck, FileText, Buildings, Stamp, Briefcase, Bank, Lightbulb, UsersThree, Leaf, Handshake, ArrowRight, BookOpen } from "@phosphor-icons/react";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";
import { PRACTICE_AREA_PAGES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Scales, Gavel, ShieldCheck, FileText, Buildings, Stamp, Briefcase, Bank, Lightbulb, UsersThree, Leaf, Handshake, BookOpen };

export function FirmPracticeAreas() {
  const primary = PRACTICE_AREA_PAGES.filter((a) => a.priority === "primary");
  const secondary = PRACTICE_AREA_PAGES.filter((a) => a.priority === "secondary");

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
Litigamos, asesoramos y redactamos normativa en las materias que definen el Derecho P&uacute;blico costarricense.
              </p>
            </AnimatedEntry>
          </div>
          <AnimatedEntry delay={0.25}>
            <Link
              href="/areas"
              className="text-xs text-cream/40 hover:text-gold transition-colors duration-300 flex items-center gap-1.5 shrink-0"
            >
              Ver todas las &aacute;reas
              <ArrowRight size={12} weight="bold" />
            </Link>
          </AnimatedEntry>
        </div>

        {/* Primary areas — clickable cards linking to /areas/[slug] */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" stagger={0.06}>
          {primary.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <StaggerItem key={i}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="group block p-6 md:p-8 rounded-xl border border-burgundy/15 bg-burgundy/[0.04] hover:bg-burgundy/[0.08] transition-all duration-400 h-full"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3 rounded-xl bg-burgundy/[0.15] text-burgundy-light group-hover:bg-burgundy/25 transition-colors duration-300 shrink-0">
                      {Icon && <Icon size={24} weight="duotone" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-base md:text-lg font-semibold text-cream tracking-tight group-hover:text-gold transition-colors duration-300">{(area as any).homepageTitle ?? area.title}</h3>
                        <ArrowRight size={16} weight="bold" className="text-cream/15 group-hover:text-gold transition-colors duration-300 shrink-0 mt-1" />
                      </div>
                      <p className="mt-2 text-sm text-cream/75 leading-relaxed">{area.subtitle}</p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Secondary areas — compact inline list, also clickable */}
        <AnimatedEntry delay={0.4}>
          <div className="mt-12 pt-8 border-t border-cream/[0.08]">
            <div className="text-[10px] tracking-[0.2em] uppercase text-cream/50 mb-5">Cobertura complementaria</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-3">
              {secondary.map((area, i) => {
                const Icon = iconMap[area.icon];
                return (
                  <Link
                    key={i}
                    href={`/areas/${area.slug}`}
                    className="flex items-center gap-2.5 py-1.5 group"
                  >
                    {Icon && <Icon size={16} weight="duotone" className="text-cream/50 group-hover:text-burgundy-light shrink-0 transition-colors duration-300" />}
                    <span className="text-sm text-cream/70 group-hover:text-gold transition-colors duration-300">{area.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </AnimatedEntry>
      </div>
    </section>
  );
}
