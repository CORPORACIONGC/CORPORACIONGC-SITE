"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import {
  AnimatedEntry,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedEntry";
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
const featured = allMembers.filter((m) => m.featured);
const associates = allMembers.filter((m) => !m.featured);

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
    <section id="equipo" className="relative bg-surface py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-14">
          <AnimatedEntry>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-burgundy animate-breathe" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">
                Nuestro equipo
              </span>
            </div>
          </AnimatedEntry>

          <AnimatedEntry delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight leading-[1.05] text-cream mb-4">
              El equipo detr&#225;s{" "}
              <span className="text-burgundy-light">de cada caso</span>
            </h2>
          </AnimatedEntry>

          <AnimatedEntry delay={0.2}>
            <p className="text-sm text-cream/55 leading-relaxed max-w-[55ch]">
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

        {/* Featured members — balanced 2-col */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
          stagger={0.08}
        >
          {featured.map((member) => (
            <StaggerItem key={member.slug}>
              <Link
                href={`/abogados/${member.slug}`}
                className="group block p-6 md:p-8 rounded-xl border border-cream/[0.08] bg-cream/[0.03] hover:border-burgundy/20 active:-translate-y-[1px] active:scale-[0.98] transition-all duration-400 h-full"
              >
                <div className="flex items-start gap-5 mb-5">
                  {/* Photo with GC badge overlay */}
                  <div className="relative shrink-0">
                    {member.photo ? (
                      <div className="w-20 h-20 rounded-xl overflow-hidden border border-cream/[0.08]">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-xl bg-burgundy/15 flex items-center justify-center border border-cream/[0.08]">
                        <span className="font-display text-2xl font-semibold text-gold/80">
                          {getInitials(member.name)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-cream/90 tracking-tight group-hover:text-cream transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="text-[10px] tracking-wider uppercase text-gold/70 font-medium mt-1">
                      {member.role}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-cream/55 leading-relaxed mb-5">
                  {member.shortBio}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {member.areas.slice(0, 4).map((area) => (
                    <span
                      key={area}
                      className="px-2 py-0.5 rounded text-[9px] tracking-wide bg-cream/[0.08] text-cream/50"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase text-cream/40 group-hover:text-cream transition-colors duration-300">
                  Ver perfil completo
                  <ArrowRight size={10} weight="bold" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Associates — responsive grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          stagger={0.06}
        >
          {associates.map((member) => (
            <StaggerItem key={member.slug}>
              <Link
                href={`/abogados/${member.slug}`}
                className="group block p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.03] hover:border-burgundy/20 active:-translate-y-[1px] active:scale-[0.98] transition-all duration-400"
              >
                <div className="flex items-start gap-3.5 mb-3">
                  {member.photo ? (
                    <div className="w-11 h-11 rounded-lg overflow-hidden shrink-0 border border-cream/[0.08]">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={88}
                        height={88}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-lg bg-burgundy/15 flex items-center justify-center shrink-0 border border-cream/[0.08]">
                      <span className="font-display text-sm font-semibold text-gold/80">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-cream/90 tracking-tight group-hover:text-cream transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="text-[10px] tracking-wider uppercase text-gold/70 font-medium mt-0.5">
                      {member.role}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-cream/50 leading-relaxed mb-3 line-clamp-2">
                  {member.shortBio}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {member.areas.slice(0, 3).map((area) => (
                    <span
                      key={area}
                      className="px-2 py-0.5 rounded text-[9px] tracking-wide bg-cream/[0.08] text-cream/50"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
