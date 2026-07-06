import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { TeamGallery, type TeamGalleryMember } from "@/components/sections/TeamGallery";
import { TEAM } from "@/lib/constants";

// Exclude founder — he has his own dedicated section in La Firma
// Explicit surname order: González, Montero, Pérez, Sánchez, Solano
const surnameOrder = ["katherine-gonzalez", "mariana-montero", "esteban-perez", "khevin-sanchez", "jose-carlos-solano"] as const;
const teamMembers: TeamGalleryMember[] = TEAM
  .map((m) => ({ slug: m.slug, name: m.name, role: m.role, photo: m.photo, shortBio: m.shortBio }))
  .filter((m) => m.slug !== "oscar-gonzalez")
  .sort((a, b) => {
    const ai = surnameOrder.indexOf(a.slug as typeof surnameOrder[number]);
    const bi = surnameOrder.indexOf(b.slug as typeof surnameOrder[number]);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

export function TeamSection() {
  return (
    <section id="equipo" className="relative bg-surface-alt py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header — right-aligned for variety */}
        <div className="mb-14 md:text-right">
          <AnimatedEntry>
            <span className="text-[10px] tracking-[0.25em] uppercase text-cream/55 font-medium">
              Nuestro equipo
            </span>
          </AnimatedEntry>

          <AnimatedEntry delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05] text-cream mt-4 mb-4">
              El equipo detr&#225;s{" "}
              <span className="text-burgundy-light">de cada caso</span>
            </h2>
          </AnimatedEntry>

          <AnimatedEntry delay={0.2}>
            <p className="text-sm text-cream/70 leading-relaxed max-w-[55ch] md:ml-auto">
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
      </div>

      {/* Horizontal scroll gallery */}
      <AnimatedEntry delay={0.3}>
        <TeamGallery members={teamMembers} />
      </AnimatedEntry>
    </section>
  );
}
