"use client";

import {
  Scales,
  Gavel,
  ShieldCheck,
  FileText,
  Buildings,
} from "@phosphor-icons/react";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";
import { ESTEBAN_PRACTICE_AREAS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Scales,
  Gavel,
  ShieldCheck,
  FileText,
  Buildings,
};

export function EstebanAbout() {
  return (
    <section id="perfil" className="relative bg-surface-alt py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20">
          {/* Left — Bio */}
          <div>
            <AnimatedEntry>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display text-lg text-cream/15 font-semibold">01</span>
                <div className="h-px w-6 bg-cream/10" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">
                  Perfil profesional
                </span>
              </div>
            </AnimatedEntry>

            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
                Litigio con enfoque
                <br />
                <span className="text-burgundy-light">especializado</span>
              </h2>
            </AnimatedEntry>

            <AnimatedEntry delay={0.2}>
              <p className="mt-6 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                Con más de 9 años de experiencia en litigio de alta complejidad
                contra el Estado, ejerzo como Abogado Asociado de Corporación GC
                en colaboración directa con el Dr. Óscar González Camacho —
                co-redactor del Código Procesal Contencioso Administrativo — en
                la gestión y estrategia de casos de relevancia jurídica.
              </p>
            </AnimatedEntry>

            <AnimatedEntry delay={0.3}>
              <p className="mt-4 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                Mi práctica se concentra en Derecho Administrativo, Contencioso
                Administrativo, Derecho Constitucional, Contratación Pública y
                Derecho Urbanístico, abarcando desde procedimientos
                administrativos hasta litigio ante las más altas instancias
                judiciales del país.
              </p>
            </AnimatedEntry>

            <AnimatedEntry delay={0.4}>
              <div className="mt-8 p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.03]">
                <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-3">
                  Formación académica
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <div className="w-1 h-1 rounded-full bg-gold mt-1.5 shrink-0" />
                    <span className="text-sm text-cream/75">
                      Maestría en Derecho Público — Universidad de Costa Rica
                      <span className="ml-1.5 text-[9px] tracking-wider uppercase text-gold/70 font-medium">
                        Egresado — Tesis en desarrollo
                      </span>
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <div className="w-1 h-1 rounded-full bg-gold mt-1.5 shrink-0" />
                    <span className="text-sm text-cream/75">
                      Licenciatura en Derecho — Universidad de Costa Rica
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <div className="w-1 h-1 rounded-full bg-burgundy-light mt-1.5 shrink-0" />
                    <span className="text-sm text-cream/75">
                      Especialidad en Derecho Notarial y Registral — Universidad Fidélitas
                    </span>
                  </div>
                </div>
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
              {ESTEBAN_PRACTICE_AREAS.map((area, i) => {
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
