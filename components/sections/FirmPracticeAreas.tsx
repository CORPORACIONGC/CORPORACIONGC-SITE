import Link from "next/link";
import { Scales, Gavel, ShieldCheck, Shield, FileText, Buildings, Stamp, Briefcase, Bank, Lightbulb, UsersThree, Leaf, Handshake, ArrowRight, BookOpen, Warning, IdentificationBadge, Lightning, MapPin, Waves, HouseSimple, CurrencyCircleDollar, Globe, Heart, Wrench } from "@phosphor-icons/react/dist/ssr";
import { AnimatedEntry, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";
import { PRACTICE_AREA_PAGES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Scales, Gavel, ShieldCheck, Shield, FileText, Buildings, Stamp, Briefcase, Bank, Lightbulb, UsersThree, Leaf, Handshake, BookOpen, Warning, IdentificationBadge, Lightning, MapPin, Waves, HouseSimple, CurrencyCircleDollar, Globe, Heart, Wrench };

export function FirmPracticeAreas() {
  const primary = PRACTICE_AREA_PAGES.filter((a) => a.priority === "primary");
  const specialized = PRACTICE_AREA_PAGES.filter((a) => a.priority === "specialized");
  const complementary = PRACTICE_AREA_PAGES.filter((a) => a.priority === "complementary");

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

        {/* All practice areas — unified grid of 3 columns */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" stagger={0.04}>
          {[...primary, ...specialized].map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <StaggerItem key={i}>
                <Link
                  href={`/areas/${area.slug}`}
                  className="group block p-5 md:p-6 rounded-xl border border-burgundy/15 bg-burgundy/[0.04] hover:bg-burgundy/[0.08] transition-all duration-400 h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-burgundy/[0.15] text-burgundy-light group-hover:bg-burgundy/25 transition-colors duration-300 shrink-0">
                      {Icon && <Icon size={22} weight="duotone" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm md:text-base font-semibold text-cream tracking-tight group-hover:text-gold transition-colors duration-300">{(area as any).homepageTitle ?? area.title}</h3>
                      <p className="mt-1.5 text-xs text-cream/60 leading-relaxed line-clamp-2">{area.subtitle}</p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Complementary areas */}
        <AnimatedEntry delay={0.5}>
          <div className="mt-8 pt-6 border-t border-cream/[0.05]">
            <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-4">Cobertura complementaria</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2">
              {complementary.map((area, i) => {
                const Icon = iconMap[area.icon];
                return (
                  <Link
                    key={i}
                    href={`/areas/${area.slug}`}
                    className="flex items-center gap-2 py-1 group"
                  >
                    {Icon && <Icon size={14} weight="duotone" className="text-cream/35 group-hover:text-burgundy-light shrink-0 transition-colors duration-300" />}
                    <span className="text-xs text-cream/50 group-hover:text-gold transition-colors duration-300">{area.title}</span>
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
