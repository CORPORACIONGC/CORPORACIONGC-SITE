"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

export type TeamGalleryMember = {
  slug: string;
  name: string;
  role: string;
  /* Retrato 4:5 recortado a partir del rostro (public/images/equipo): mismo
     tamaño de cabeza y misma línea de ojos para los cinco. */
  portrait: string;
};

const HONORIFIC = /^(Dra?\.|Lic(?:da)?\.|MSc\.)\s+/;

function splitName(name: string) {
  const match = name.match(HONORIFIC);
  return match
    ? { honorific: match[1], rest: name.slice(match[0].length) }
    : { honorific: null, rest: name };
}

/* Retratos del equipo. En escritorio los cinco caben en una sola fila: se
   ven todos a la vez, sin flechas ni desplazamiento. Por debajo de 1024 px la
   fila se desliza con el dedo, la tarjeta siguiente asoma en el borde y un
   indicador marca la posición. El nombre vive debajo de la foto, nunca sobre
   ella; al pasar el cursor, el filete que lo encabeza se traza de izquierda a
   derecha, como el subrayado dorado de La firma. */
export function TeamGallery({ members }: { members: TeamGalleryMember[] }) {
  const scroller = useRef<HTMLUListElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const first = el.querySelector<HTMLElement>("li");
        if (!first) return;
        const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
        const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
        setCurrent(atEnd ? members.length - 1 : Math.round(el.scrollLeft / (first.offsetWidth + gap)));
      });
    };
    el.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", update);
    };
  }, [members.length]);

  return (
    <div>
      <ul
        ref={scroller}
        role="list"
        aria-label="Abogados de Corporación GC"
        className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 gc-scrollbar-none md:-mx-10 md:scroll-px-10 md:gap-5 md:px-10 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {members.map((member, index) => {
          const { honorific, rest } = splitName(member.name);
          return (
            <li
              key={member.slug}
              className="w-[68vw] max-w-[300px] shrink-0 snap-start sm:w-[42vw] md:w-[30vw] lg:w-auto lg:max-w-none"
            >
              <Link href={`/abogados/${member.slug}`} className="group block outline-none">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream/[0.04] outline-offset-4 outline-gold group-focus-visible:outline-2">
                  <Image
                    src={member.portrait}
                    alt={`Retrato de ${member.name}`}
                    fill
                    loading={index < 2 ? "eager" : "lazy"}
                    sizes="(min-width: 1400px) 250px, (min-width: 1024px) 18vw, (min-width: 768px) 30vw, (min-width: 640px) 42vw, 68vw"
                    className="object-cover saturate-[0.9] transition-[filter] duration-500 ease-out group-hover:saturate-100 group-focus-visible:saturate-100"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.06] dark:ring-white/[0.06]"
                  />
                </div>

                <div className="relative mt-5 pt-4">
                  {/* Filete base y el trazo que lo recorre al pasar el cursor */}
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-cream/10" />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-burgundy transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 dark:bg-gold"
                  />
                  <h3 className="text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-cream text-balance transition-colors duration-300 group-hover:text-burgundy group-focus-visible:text-burgundy dark:group-hover:text-gold dark:group-focus-visible:text-gold">
                    {honorific && (
                      <span className="font-normal text-cream/65">{honorific} </span>
                    )}
                    {rest}
                  </h3>
                  {/* La flecha va en la línea del cargo, que es corta: así no le
                      quita ancho al nombre. */}
                  <div className="mt-1.5 flex items-center justify-between gap-3">
                    <p className="text-[13px] leading-snug text-cream/65">{member.role}</p>
                    <ArrowRight
                      size={15}
                      weight="regular"
                      aria-hidden="true"
                      className="hidden shrink-0 -translate-x-1.5 text-burgundy opacity-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 dark:text-gold lg:block"
                    />
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Posición en la fila deslizable (solo por debajo de 1024 px) */}
      <div aria-hidden="true" className="mt-6 flex items-center gap-4 lg:hidden">
        <div className="flex flex-1 gap-1.5">
          {members.map((m, k) => (
            <span
              key={m.slug}
              className={`h-px flex-1 transition-colors duration-500 ${
                k === current ? "bg-burgundy dark:bg-gold" : "bg-cream/15"
              }`}
            />
          ))}
        </div>
        <span className="text-[13px] tabular-nums text-cream/65">
          {current + 1} / {members.length}
        </span>
      </div>
    </div>
  );
}
