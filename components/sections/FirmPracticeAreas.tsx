import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { PRACTICE_AREA_PAGES } from "@/lib/constants";
import { PracticeExplorer, type PracticeAreaLite } from "@/components/sections/PracticeExplorer";

export function FirmPracticeAreas() {
  /* Solo lo que la portada muestra de cada área: el explorador corre en el
     cliente y no debe arrastrar el contenido completo de las páginas. */
  const areas: PracticeAreaLite[] = PRACTICE_AREA_PAGES.map((a) => ({
    slug: a.slug,
    title: ("homepageTitle" in a && a.homepageTitle ? a.homepageTitle : a.title) as string,
    subtitle: a.subtitle,
    priority: a.priority,
  }));

  return (
    <section id="areas" className="relative bg-surface py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <AnimatedEntry>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <span className="type-label text-cream/65">&Aacute;reas de pr&aacute;ctica</span>
          </div>
        </AnimatedEntry>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <AnimatedEntry delay={0.1}>
              <h2 className="type-headline text-cream">N&uacute;cleo en{" "}<span className="text-emphasis">Derecho P&uacute;blico</span></h2>
            </AnimatedEntry>
            <AnimatedEntry delay={0.2}>
              <p className="mt-5 type-body text-cream/70 max-w-[55ch]">
Litigamos, asesoramos y redactamos normativa en las materias que definen el Derecho P&uacute;blico costarricense.
              </p>
            </AnimatedEntry>
          </div>
          <AnimatedEntry delay={0.25}>
            <Link
              href="/areas"
              className="text-sm text-cream/65 hover:text-burgundy dark:hover:text-gold transition-colors duration-300 flex items-center gap-1.5 shrink-0"
            >
              Ver todas las &aacute;reas
              <ArrowRight size={12} weight="bold" />
            </Link>
          </AnimatedEntry>
        </div>

        <AnimatedEntry delay={0.1}>
          <PracticeExplorer areas={areas} />
        </AnimatedEntry>
      </div>
    </section>
  );
}
