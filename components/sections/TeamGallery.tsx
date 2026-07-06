"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export type TeamGalleryMember = {
  slug: string;
  name: string;
  role: string;
  photo: string | null;
  shortBio: string;
};

function getInitials(name: string) {
  return name
    .replace(/^(Dr\.|Lic\.|Licda\.|MSc\.)\s+/i, "")
    .split(" ")
    .filter((w) => w.length > 1)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/* Galería horizontal del equipo: mantiene el snap-scroll y el panel de bio
   al pasar el mouse, y añade lo que faltaba para ser usable en todos los
   dispositivos — flechas de desplazamiento en escritorio, bio visible bajo
   la foto en móvil (donde no existe hover) y panel visible también al
   navegar con teclado (focus). */
export function TeamGallery({ members }: { members: TeamGalleryMember[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = scroller.current;
    updateArrows();
    el?.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el?.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const nudge = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    // Dos tarjetas por pulsación: avance perceptible sin perder el hilo
    const card = el.querySelector<HTMLElement>("a");
    const step = card ? (card.offsetWidth + 24) * 2 : 600;
    const max = el.scrollWidth - el.clientWidth;
    const target = Math.max(0, Math.min(max, el.scrollLeft + dir * step));
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  const arrowBase =
    "hidden md:flex items-center justify-center absolute top-[38%] z-20 h-11 w-11 border border-cream/15 bg-surface/90 backdrop-blur-sm text-cream/70 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.25)] hover:text-gold hover:border-gold/40 transition-all duration-300";

  return (
    <div className="relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-surface-alt to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-surface-alt to-transparent z-10 pointer-events-none" />

      {/* Flechas de desplazamiento — solo escritorio; se desvanecen en los extremos */}
      <button
        type="button"
        onClick={() => nudge(-1)}
        aria-label="Abogados anteriores"
        className={`${arrowBase} left-4 lg:left-8 ${canPrev ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <ArrowLeft size={18} weight="regular" />
      </button>
      <button
        type="button"
        onClick={() => nudge(1)}
        aria-label="Más abogados"
        className={`${arrowBase} right-4 lg:right-8 ${canNext ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <ArrowRight size={18} weight="regular" />
      </button>

      <div
        ref={scroller}
        className="flex gap-5 md:gap-6 overflow-x-auto pl-6 pr-6 md:pl-10 md:pr-10 pb-4 snap-x snap-proximity gc-scrollbar-none max-w-[1400px] mx-auto"
      >
        {members.map((member) => (
          <Link
            key={member.slug}
            href={`/abogados/${member.slug}`}
            className="group relative shrink-0 w-[260px] md:w-[280px] snap-start"
          >
            {/* Photo container — tall portrait ratio, esquinas rectas */}
            <div className="relative aspect-[3/4] overflow-hidden">
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="280px"
                  className={`object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                    member.slug === "jose-carlos-solano"
                      ? "object-[center_15%]"
                      : member.slug === "katherine-gonzalez" || member.slug === "esteban-perez"
                        ? "object-top"
                        : ""
                  }`}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-b from-burgundy/20 to-burgundy/[0.08] flex items-center justify-center">
                  <span className="font-display text-5xl font-semibold text-gold/40">
                    {getInitials(member.name)}
                  </span>
                </div>
              )}

              {/* Placa inferior de vidrio esmerilado — cargo como antefirma
                  y nombre en serif. Sin degradado aparatoso: una banda sobria
                  con filo superior de luz. */}
              <div className="absolute inset-x-0 bottom-0 border-t border-white/20 bg-black/35 backdrop-blur-md px-5 pt-3.5 pb-4">
                <div className="text-[9px] tracking-[0.22em] uppercase text-gold/90 font-medium">
                  {member.role}
                </div>
                <h3 className="font-display text-lg text-white tracking-tight leading-snug mt-1">
                  {member.name}
                </h3>
              </div>

              {/* Afford. de clic — arriba a la derecha, lejos del nombre */}
              <div className="absolute top-4 right-4 flex items-center justify-center h-8 w-8 border border-white/30 bg-white/10 backdrop-blur-sm text-white/85 group-hover:border-gold/70 group-hover:text-gold transition-colors duration-300">
                <ArrowRight size={13} weight="regular" />
              </div>

              {/* Panel de bio — hover en escritorio y foco con teclado */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-focus-visible:opacity-100 transition-all duration-400 hidden md:flex flex-col justify-end p-5">
                <p className="text-xs text-white/85 leading-relaxed mb-4">
                  {member.shortBio}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase text-gold font-medium">
                  Ver perfil
                  <ArrowRight
                    size={10}
                    weight="bold"
                    className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Filo perimetral sutil */}
              <div className="absolute inset-0 border border-white/[0.08] group-hover:border-gold/25 transition-colors duration-400 pointer-events-none" />
            </div>

            {/* Móvil: la reseña vive bajo la foto — sin hover no hay otra
                forma de verla antes de entrar al perfil */}
            <p className="md:hidden mt-3 text-xs text-cream/65 leading-relaxed line-clamp-3 px-0.5">
              {member.shortBio}
            </p>
          </Link>
        ))}

        {/* Right spacer for wide viewports */}
        <div className="shrink-0 w-[max(0px,calc((100vw-1400px)/2))]" aria-hidden="true" />
      </div>
    </div>
  );
}
