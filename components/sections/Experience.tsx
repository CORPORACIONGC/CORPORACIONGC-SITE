"use client";

import { EXPERIENCE, CONFERENCES } from "@/lib/constants";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";

export function Experience() {
  return (
    <section id="trayectoria" className="relative bg-surface py-24 md:py-32">
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] gap-12 lg:gap-20">
          {/* Left — Heading */}
          <div>
            <AnimatedEntry>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-burgundy animate-breathe" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">
                  Trayectoria
                </span>
              </div>
            </AnimatedEntry>

            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
                Experiencia
                <br />
                <span className="text-burgundy-light">comprobada</span>
              </h2>
            </AnimatedEntry>

            <AnimatedEntry delay={0.2}>
              <p className="mt-5 text-sm text-cream/50 leading-relaxed max-w-[35ch]">
                Desde la Sala Constitucional hasta el litigio privado de alto
                nivel, un recorrido construido con rigor y dedicación.
              </p>
            </AnimatedEntry>
          </div>

          {/* Right — Timeline */}
          <StaggerContainer className="relative" stagger={0.1}>
            {/* Timeline line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-cream/[0.10]" />

            <div className="space-y-1">
              {EXPERIENCE.map((exp, i) => (
                <StaggerItem key={i}>
                  <div
                    className={`relative pl-10 pr-5 py-5 rounded-xl transition-colors duration-300 ${
                      exp.highlight
                        ? "bg-gold/[0.06] border border-gold/[0.15]"
                        : ""
                    }`}
                  >
                    {/* Dot */}
                    <div
                      className={`absolute left-[7px] top-7 w-[9px] h-[9px] rounded-full border-2 ${
                        exp.highlight
                          ? "border-gold bg-gold"
                          : "border-cream/25 bg-surface"
                      }`}
                    />

                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                      <h3 className="text-sm font-semibold text-cream/90 tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="text-[10px] tracking-wider text-cream/35 uppercase shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    <div className="text-xs text-gold font-medium mb-2">
                      {exp.org}
                    </div>

                    <p className="text-xs text-cream/50 leading-relaxed max-w-[60ch]">
                      {exp.description}
                    </p>

                    {exp.highlight && (
                      <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gold/[0.1] text-gold text-[10px] tracking-wide font-medium">
                        Posición actual
                      </div>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </div>

            {/* Thesis highlight */}
            <StaggerItem>
              <div className="relative pl-10 mt-8 pt-6 border-t border-cream/[0.08]">
                <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-3">
                  Investigación destacada
                </div>
                <h3 className="text-sm font-semibold text-cream/90 tracking-tight max-w-[55ch]">
                  Hacia la implementación de sistemas automatizados de decisión
                  basados en inteligencia artificial en la administración de
                  justicia costarricense
                </h3>
                <p className="mt-2 text-xs text-cream/50 leading-relaxed max-w-[55ch]">
                  Trabajo Final de Graduación que analiza la integración de
                  inteligencia artificial en el ámbito judicial desde el marco
                  normativo de la Unión Europea (EU AI Act), proponiendo una
                  hoja de ruta para su adopción segura en Costa Rica.
                </p>
                <div className="mt-2 text-[10px] text-cream/35">
                  Director: Dr. Óscar Eduardo González Camacho — UCR, 2025
                </div>
              </div>
            </StaggerItem>

            {/* Conferences & panels */}
            <StaggerItem>
              <div className="relative pl-10 mt-8 pt-6 border-t border-cream/[0.08]">
                <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-4">
                  Conferencias y paneles
                </div>
                <div className="space-y-6">
                  {CONFERENCES.map((conf, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.03] hover:border-burgundy/20 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded-md bg-burgundy/[0.2] text-burgundy-light text-[10px] tracking-wide font-medium uppercase">
                          {conf.role}
                        </span>
                        <span className="text-[10px] text-cream/35 tracking-wide">
                          {conf.date}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-cream/90 tracking-tight">
                        {conf.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-gold/80 font-medium leading-relaxed max-w-[55ch]">
                        {conf.panel}
                      </p>
                      <div className="mt-2 text-[10px] text-cream/40">
                        {conf.location}
                      </div>
                      <div className="mt-3">
                        <span className="text-[10px] tracking-[0.15em] uppercase text-cream/35 font-medium">
                          Copanelistas:
                        </span>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {conf.copanelists.map((person, j) => (
                            <span
                              key={j}
                              className="px-2 py-0.5 rounded-md bg-cream/[0.05] text-cream/50 text-[10px] tracking-wide"
                            >
                              {person}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-2 text-[10px] text-cream/30">
                        Organiza: {conf.organizers}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
