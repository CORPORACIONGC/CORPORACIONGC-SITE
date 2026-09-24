import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { TeamGallery, type TeamGalleryMember } from "@/components/sections/TeamGallery";
import { TEAM } from "@/lib/constants";
import { RunningHead } from "@/components/ui/RunningHead";

// Exclude founder — he has his own dedicated section in La Firma
// Explicit surname order: González, Montero, Pérez, Sánchez, Solano
const surnameOrder = ["katherine-gonzalez", "mariana-montero", "esteban-perez", "khevin-sanchez", "jose-carlos-solano"] as const;
const teamMembers: TeamGalleryMember[] = TEAM
  .filter((m) => m.slug !== "oscar-gonzalez")
  .map((m) => ({
    slug: m.slug,
    name: m.name,
    role: m.role,
    portrait: `/images/equipo/${m.slug}.jpg`,
  }))
  .sort((a, b) => {
    const ai = surnameOrder.indexOf(a.slug as typeof surnameOrder[number]);
    const bi = surnameOrder.indexOf(b.slug as typeof surnameOrder[number]);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

export function TeamSection() {
  return (
    <section id="equipo" className="relative bg-surface-alt pt-24 pb-14 md:pt-32 md:pb-16">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <AnimatedEntry>
          <RunningHead title="Equipo" />
        </AnimatedEntry>
        <div className="mb-12 md:mb-16 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
          <AnimatedEntry>
            <h2 className="type-headline text-cream max-w-[14ch]">
              El equipo detr&#225;s{" "}
              <span className="text-emphasis">de cada caso</span>
            </h2>
          </AnimatedEntry>

          <AnimatedEntry delay={0.1}>
            <p className="type-body text-cream/75 max-w-[56ch]">
              El Dr. Gonz&#225;lez Camacho form&#243; a cada abogado de
              esta firma &mdash; todos desde sus primeros a&#241;os de
              carrera &mdash; con la disciplina y el rigor que veintiocho
              a&#241;os de judicatura le exigieron. Hoy trabaja con ellos
              directamente en cada caso. Eso se traduce en un est&#225;ndar
              que no depende de qui&#233;n lleve el caso &mdash; porque
              todos lo llevan con &#233;l.
            </p>
          </AnimatedEntry>
        </div>

        <AnimatedEntry delay={0.2}>
          <TeamGallery members={teamMembers} />
        </AnimatedEntry>

        {/* Reseñas, carnés y el fundador están en Sobre nosotros */}
        <div className="mt-10 flex lg:mt-14 lg:justify-end">
          <Link
            href="/sobre-nosotros#abogados"
            className="group inline-flex items-center gap-2 text-sm font-medium text-burgundy transition-colors hover:text-burgundy-light dark:text-gold dark:hover:text-gold-light"
          >
            Conozca al equipo completo
            <ArrowRight
              size={14}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
