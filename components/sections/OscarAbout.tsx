"use client";

import {
  Scales,
  Gavel,
  ShieldCheck,
  FileText,
  Crosshair,
} from "@phosphor-icons/react";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";
import { OSCAR_PROFILE, OSCAR_PRACTICE_AREAS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Scales,
  Gavel,
  ShieldCheck,
  FileText,
  Strategy: Crosshair,
};

export function OscarAbout() {
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
                Desde la judicatura
                <br />
                al{" "}
                <span className="text-burgundy-light">litigio privado</span>
              </h2>
            </AnimatedEntry>

            <AnimatedEntry delay={0.2}>
              <p className="mt-6 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                Con más de 38 años de trayectoria ininterrumpida en el Derecho
                Público, el Dr. González Camacho fue Magistrado de la Sala
                Primera de la Corte Suprema de Justicia durante 12 años y
                co-redactor del Código Procesal Contencioso Administrativo
                (Ley N.° 8508), pieza fundamental de la jurisdicción
                contenciosa moderna.
              </p>
            </AnimatedEntry>

            <AnimatedEntry delay={0.3}>
              <p className="mt-4 text-base text-cream/60 leading-relaxed max-w-[58ch]">
                Doctor en Derecho por la Universidad de Alcalá de Henares con
                la calificación Sobresaliente Cum Laude. Desde 2015 dirige
                Corporación GC como uno de los abogados litigantes de mayor
                calado en la materia administrativa del país, forjando la
                jurisdicción contenciosa moderna desde la judicatura y
                dominándola hoy desde el litigio.
              </p>
            </AnimatedEntry>

            <AnimatedEntry delay={0.4}>
              <div className="mt-8 p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.03]">
                <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-3">
                  Formación académica
                </div>
                <div className="space-y-2">
                  {OSCAR_PROFILE.education.map((edu, i) => (
                    <div key={i} className="flex items-baseline gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold mt-1.5 shrink-0" />
                      <span className="text-sm text-cream/75">
                        {edu.degree} — {edu.institution}
                        <span className="ml-1.5 text-[9px] tracking-wider uppercase text-cream/40">
                          {edu.period}
                        </span>
                        {"distinction" in edu && edu.distinction && (
                          <span className="ml-1.5 text-[9px] tracking-wider uppercase text-gold/70 font-medium">
                            {edu.distinction}
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedEntry>
          </div>

          {/* Right — Practice areas, Teaching, Publications */}
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
              {OSCAR_PRACTICE_AREAS.map((area, i) => {
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

            {/* Teaching */}
            <AnimatedEntry delay={0.4}>
              <div className="mt-8 p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.03]">
                <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-3">
                  Docencia
                </div>
                <div className="space-y-2">
                  {OSCAR_PROFILE.teaching.map((item, i) => (
                    <div key={i} className="flex items-baseline gap-2">
                      <div className="w-1 h-1 rounded-full bg-burgundy-light mt-1.5 shrink-0" />
                      <span className="text-sm text-cream/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedEntry>

            {/* Publications */}
            <AnimatedEntry delay={0.5}>
              <div className="mt-8 p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.03]">
                <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-3">
                  Publicaciones y obras
                </div>
                <div className="space-y-3">
                  {OSCAR_PROFILE.publications.map((pub, i) => (
                    <div key={i} className="flex items-baseline gap-2">
                      <div
                        className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${
                          pub.type === "law" ? "bg-gold" : "bg-burgundy-light"
                        }`}
                      />
                      <div>
                        <span className="text-sm text-cream/75 font-medium">
                          {pub.title}
                        </span>
                        <p className="text-xs text-cream/45 leading-relaxed mt-0.5">
                          {pub.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedEntry>
          </div>
        </div>
      </div>
    </section>
  );
}
