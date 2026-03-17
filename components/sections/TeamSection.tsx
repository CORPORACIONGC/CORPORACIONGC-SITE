"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { TEAM } from "@/lib/constants";

type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo: string | null;
  shortBio: string;
  areas: readonly string[];
  languages: readonly string[];
  featured: boolean;
};

const allMembers: TeamMember[] = TEAM.map((m) => ({ ...m }));
// Exclude founder — he has his own dedicated section in La Firma
// Explicit surname order: González, Montero, Pérez, Sánchez, Solano
const surnameOrder = ["katherine-gonzalez", "mariana-montero", "esteban-perez", "khevin-sanchez", "jose-carlos-solano"] as const;
const teamMembers = allMembers
  .filter((m) => m.slug !== "oscar-gonzalez")
  .sort((a, b) => {
    const ai = surnameOrder.indexOf(a.slug as typeof surnameOrder[number]);
    const bi = surnameOrder.indexOf(b.slug as typeof surnameOrder[number]);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

function getInitials(name: string) {
  return name
    .replace(/^(Dr\.|Lic\.|Licda\.)\s+/i, "")
    .split(" ")
    .filter((w) => w.length > 1)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

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
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-surface-alt to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-surface-alt to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-5 overflow-x-auto pl-6 pr-6 md:pl-10 md:pr-10 pb-4 snap-x snap-mandatory scrollbar-hide max-w-[1400px] mx-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >

            {teamMembers.map((member) => (
              <Link
                key={member.slug}
                href={`/abogados/${member.slug}`}
                className="group relative shrink-0 w-[260px] md:w-[280px] snap-start"
              >
                {/* Photo container — tall portrait ratio */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className={`object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                        member.slug === "jose-carlos-solano" ? "object-[center_15%]" : member.slug === "katherine-gonzalez" ? "object-top" : ""
                      }`}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-b from-burgundy/20 to-burgundy/[0.08] flex items-center justify-center">
                      <span className="font-display text-5xl font-semibold text-gold/40">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}

                  {/* Glass overlay — always visible at bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-20 pb-5 px-5">
                    <h3 className="text-base font-semibold text-white tracking-tight leading-snug">
                      {member.name}
                    </h3>
                    <div className="text-[10px] tracking-[0.15em] uppercase text-gold/80 font-medium mt-1">
                      {member.role}
                    </div>
                  </div>

                  {/* Hover glass panel — bio + arrow */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-5">
                    <p className="text-xs text-white/80 leading-relaxed mb-4">
                      {member.shortBio}
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase text-gold/90 font-medium">
                      Ver perfil
                      <ArrowRight size={10} weight="bold" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Subtle glass border effect */}
                  <div className="absolute inset-0 rounded-2xl border border-white/[0.08] group-hover:border-gold/20 transition-colors duration-400 pointer-events-none" />
                </div>
              </Link>
            ))}

            {/* Right spacer for wide viewports */}
            <div className="shrink-0 w-[max(0px,calc((100vw-1400px)/2))]" aria-hidden="true" />
          </div>
        </div>
      </AnimatedEntry>
    </section>
  );
}
