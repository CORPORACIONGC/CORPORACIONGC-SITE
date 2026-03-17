"use client";

import {
  Scales,
  ShieldCheck,
  FileText,
  Buildings,
} from "@phosphor-icons/react";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";
import { KATHERINE_PRACTICE_AREAS, KATHERINE_PROFILE } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Scales,
  ShieldCheck,
  FileText,
  Buildings,
};

export function KatherineAbout() {
  return (
    <section id="perfil" className="relative bg-surface-alt py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20">
          {/* Left — Bio */}
          <div>
            <AnimatedEntry>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gold" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">
                  Perfil profesional
                </span>
              </div>
            </AnimatedEntry>

            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
                Derecho Público con
                <br />
                <span className="text-burgundy-light">rigor académico</span>
              </h2>
            </AnimatedEntry>

            <AnimatedEntry delay={0.2}>
              <p className="mt-6 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                Licenciada en Derecho y Notaria Pública por la Universidad
                Escuela Libre de Derecho, con Maestría Profesional en Derecho
                Público por la Universidad de Costa Rica. Mi práctica se
                concentra en Derecho Administrativo, Derecho Expropiatorio y
                responsabilidad patrimonial de la Administración.
              </p>
            </AnimatedEntry>

            <AnimatedEntry delay={0.3}>
              <p className="mt-4 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                Ejerzo como Abogada y Notaria Pública con énfasis en litigio
                contencioso-administrativo, procedimientos expropiatorios y
                responsabilidad patrimonial del Estado. Domino cuatro idiomas:
                español, inglés, francés e italiano.
              </p>
            </AnimatedEntry>

            <AnimatedEntry delay={0.4}>
              <div className="mt-8 p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.03]">
                <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-3">
                  Formación académica
                </div>
                <div className="space-y-2">
                  {KATHERINE_PROFILE.education.map((edu, i) => (
                    <div key={i} className="flex items-baseline gap-2">
                      <div className={`w-1 h-1 rounded-full ${i === 0 ? "bg-gold" : "bg-burgundy-light"} mt-1.5 shrink-0`} />
                      <span className="text-sm text-cream/75">
                        {edu.degree} — {edu.institution}
                        {edu.period && (
                          <span className="ml-1.5 text-[9px] tracking-wider uppercase text-cream/40">
                            {edu.period}
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedEntry>

            <AnimatedEntry delay={0.5}>
              <div className="mt-4 text-xs text-cream/40">
                Idiomas: Español, Inglés, Francés, Italiano
              </div>
            </AnimatedEntry>
          </div>

          {/* Right — Practice areas */}
          <div className="lg:pt-16">
            <AnimatedEntry delay={0.15}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-burgundy/50" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">
                  Áreas de práctica
                </span>
              </div>
            </AnimatedEntry>

            <StaggerContainer className="space-y-3" stagger={0.07}>
              {KATHERINE_PRACTICE_AREAS.map((area, i) => {
                const Icon = iconMap[area.icon];
                return (
                  <StaggerItem key={i}>
                    <div className="group p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.03] hover:border-burgundy/20 transition-colors duration-400">
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 p-2.5 rounded-lg bg-burgundy/[0.15] text-burgundy-light group-hover:bg-burgundy/25 transition-colors duration-300">
                          <Icon size={20} weight="duotone" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-cream/90 tracking-tight">
                            {area.title}
                          </h3>
                          <p className="mt-1.5 text-xs text-cream/50 leading-relaxed">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
