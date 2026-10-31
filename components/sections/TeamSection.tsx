import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { TeamGallery, type TeamGalleryMember } from "@/components/sections/TeamGallery";
import { TEAM } from "@/lib/constants";
import { ASISTENTES } from "@/lib/asistentes";
import { RunningHead } from "@/components/ui/RunningHead";

// Exclude founder — he has his own dedicated section in La Firma
// Explicit surname order: González, Montero, Pérez, Sánchez
const surnameOrder = ["katherine-gonzalez", "mariana-montero", "esteban-perez", "khevin-sanchez"] as const;
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

const assistantMembers: TeamGalleryMember[] = ASISTENTES.map((a) => ({
  slug: a.slug,
  name: a.short,
  role: a.role,
  portrait: a.portrait,
}));

export function TeamSection() {
  return (
    <section id="equipo" className="relative bg-surface-alt pt-24 pb-14 md:pt-32 md:pb-16">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <AnimatedEntry>
          <RunningHead title="Equipo" />
        </AnimatedEntry>
        <div className="mb-12 md:mb-16">
          <AnimatedEntry>
            <h2 className="type-headline text-cream max-w-[18ch]">
              El equipo de abogados{" "}
              <span className="text-emphasis">detr&#225;s de cada caso</span>
            </h2>
          </AnimatedEntry>

          <AnimatedEntry delay={0.1}>
            <p className="type-lead mt-6 max-w-[44ch] text-cream/75 md:mt-8">
              Un equipo formado por el Dr. Gonz&#225;lez Camacho desde sus
              primeros a&#241;os de ejercicio, que trabaja con &#233;l en cada
              caso.
            </p>
          </AnimatedEntry>
        </div>

        <AnimatedEntry delay={0.2}>
          <TeamGallery members={teamMembers} />
        </AnimatedEntry>

        {/* Asistentes legales: el mismo formato que el bloque de abogados,
            con su propio título y su propia descripción. */}
        <div className="mt-20 mb-12 border-t border-cream/10 pt-16 md:mt-28 md:mb-16 md:pt-24">
          <AnimatedEntry>
            <h3 className="type-headline text-cream max-w-[18ch]">
              Nuestros asistentes{" "}
              <span className="text-emphasis">legales</span>
            </h3>
          </AnimatedEntry>

          <AnimatedEntry delay={0.1}>
            <p className="type-lead mt-6 max-w-[44ch] text-cream/75 md:mt-8">
              Estudiantes de Derecho de la Universidad de Costa Rica que apoyan
              a los abogados de la firma en la investigaci&#243;n jur&#237;dica,
              el an&#225;lisis de los expedientes y la preparaci&#243;n de los
              escritos.
            </p>
          </AnimatedEntry>
        </div>

        <AnimatedEntry delay={0.2}>
          <TeamGallery members={assistantMembers} basePath="/equipo" label="Asistentes legales de Corporación GC" />
        </AnimatedEntry>

        {/* Reseñas, carnés y el fundador están en Sobre nosotros */}
        <div className="mt-10 flex lg:mt-14 lg:justify-end">
          <Link
            href="/sobre-nosotros#abogados"
            className="group inline-flex items-center gap-2 text-sm font-medium text-burgundy transition-colors hover:text-burgundy-light dark:text-hilo-texto dark:hover:text-hilo-texto"
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
