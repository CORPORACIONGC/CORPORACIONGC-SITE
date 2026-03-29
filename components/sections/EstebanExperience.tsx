
import { ESTEBAN_PROFILE } from "@/lib/constants";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";

export function EstebanExperience() {
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
                nivel, una trayectoria construida con rigor y dedicación.
              </p>
            </AnimatedEntry>
          </div>

          {/* Right — Timeline */}
          <StaggerContainer className="relative" stagger={0.1}>
            {/* Timeline line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-cream/[0.10]" />

            <div className="space-y-1">
              {ESTEBAN_PROFILE.career.map((exp, i) => (
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

            {/* Research highlight */}
            <StaggerItem>
              <div className="relative pl-10 mt-8 pt-6 border-t border-cream/[0.08]">
                <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-3">
                  Investigación destacada
                </div>
                <h3 className="text-sm font-semibold text-cream/90 tracking-tight max-w-[55ch]">
                  {ESTEBAN_PROFILE.research.title}
                </h3>
                <p className="mt-2 text-xs text-cream/50 leading-relaxed max-w-[55ch]">
                  {ESTEBAN_PROFILE.research.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ESTEBAN_PROFILE.research.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-cream/[0.05] text-cream/45 text-[10px] tracking-wide"
                    >
                      {tag}
                    </span>
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
