import Image from "next/image";
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

        {/* Asistentes legales (D-10, 25-11-2026): sin segundo titular. Van
            como dos firmas pequeñas bajo la fila de los abogados (retrato de
            56 px, nombre y cargo), y el cargo es la única diferencia. En la
            misma línea, a la derecha en escritorio, el enlace al equipo
            completo. Antes llevaban su propio titular y media fila de
            retratos grandes, y la sección se leía como dos equipos. En
            escritorio la línea usa las cuatro columnas de la fila de arriba:
            cada firma arranca bajo un retrato. */}
        <div className="mt-12 flex flex-col gap-6 border-t border-cream/10 pt-8 md:mt-14 lg:grid lg:grid-cols-4 lg:items-center lg:gap-6">
          <AnimatedEntry delay={0.25} className="lg:col-span-2">
            <ul
              role="list"
              aria-label="Asistentes legales de Corporación GC"
              className="flex flex-col gap-5 sm:flex-row sm:gap-12 lg:grid lg:grid-cols-2 lg:gap-6"
            >
              {assistantMembers.map((a) => (
                <li key={a.slug}>
                  <Link href={`/equipo/${a.slug}`} className="group flex items-center gap-4 outline-offset-4">
                    <span className="relative block h-[70px] w-14 shrink-0 overflow-hidden bg-cream/[0.04]">
                      <Image
                        src={a.portrait}
                        alt=""
                        fill
                        loading="lazy"
                        sizes="56px"
                        className="object-cover saturate-[0.9] transition-[filter] duration-500 ease-out group-hover:saturate-100 group-focus-visible:saturate-100"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.06] dark:ring-white/[0.06]"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[15px] font-semibold leading-snug tracking-[-0.01em] text-cream transition-colors duration-300 group-hover:text-burgundy-light group-focus-visible:text-burgundy-light dark:group-hover:text-hilo-texto dark:group-focus-visible:text-hilo-texto">
                        {a.name}
                      </span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-cream/65">{a.role}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedEntry>

          {/* Reseñas, carnés y el fundador están en Sobre nosotros. py-3 le
              da 44 px de alto táctil (D-15). */}
          <Link
            href="/sobre-nosotros#abogados"
            className="group inline-flex items-center gap-2 self-start py-3 text-sm font-medium text-burgundy transition-colors hover:text-burgundy-light dark:text-hilo-texto dark:hover:text-hilo-texto lg:col-start-4 lg:justify-self-end"
          >
            Conozca al equipo completo
            <ArrowRight
              size={14}
              weight="bold"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
