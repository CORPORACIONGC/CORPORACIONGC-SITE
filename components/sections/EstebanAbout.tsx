
import {
  Scales,
  Gavel,
  ShieldCheck,
  FileText,
  Buildings,
} from "@phosphor-icons/react/dist/ssr";
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
          {/* Left — CTA */}
          <div>
            <AnimatedEntry>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display text-lg text-cream/15 font-semibold">01</span>
                <div className="h-px w-6 bg-cream/10" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">
                  Nuestro enfoque
                </span>
              </div>
            </AnimatedEntry>

            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
                Litigio en derecho p&#250;blico.
                <br />
                <span className="text-burgundy-light">Estrategia y acompa&#241;amiento real.</span>
              </h2>
            </AnimatedEntry>

            <AnimatedEntry delay={0.2}>
              <p className="mt-8 text-base text-cream/65 leading-[1.85] max-w-[58ch]">
                Enfrentarse al Estado es un asunto serio. Los procedimientos
                tienen reglas propias y plazos estrictos, donde cada decisi&#243;n
                procesal requiere preparaci&#243;n. No es un litigio que permita
                improvisar.
              </p>
            </AnimatedEntry>

            <AnimatedEntry delay={0.3}>
              <p className="mt-5 text-base text-cream/65 leading-[1.85] max-w-[58ch]">
                Por eso cada asunto se trabaja con una estrategia dise&#241;ada
                desde cero seg&#250;n cada caso, con investigaci&#243;n jur&#237;dica
                a fondo, escritos preparados con precisi&#243;n y comunicaci&#243;n
                clara para que usted entienda qu&#233; est&#225; pasando en cada
                etapa.
              </p>
            </AnimatedEntry>

            <AnimatedEntry delay={0.4}>
              <div className="mt-10">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-b from-burgundy via-[#5A1730] to-[#4A0E27] text-white text-sm tracking-wide font-medium hover:from-burgundy-light hover:via-burgundy hover:to-[#5A1730] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-burgundy/20"
                >
                  Coordinar una consulta
                </a>
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
