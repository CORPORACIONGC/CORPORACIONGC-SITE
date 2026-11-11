"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

/* El índice de una guía. Desde 1280 px vive fijo en el margen izquierdo de
   la columna y marca el apartado en curso. Por debajo es una fila que queda
   pegada bajo la barra mientras se lee: dice en qué apartado va el lector y
   cuántos faltan, y al tocarla despliega la lista. Una sola lista en el
   documento sirve a los dos casos. */
export function IndiceGuia({
  items,
  lang = "es",
}: {
  items: { id: string; titulo: string }[];
  lang?: "es" | "en";
}) {
  const [activo, setActivo] = useState(-1);
  const [abierto, setAbierto] = useState(false);
  const listaId = useId();
  const raiz = useRef<HTMLElement>(null);

  /* El apartado en curso es el último subtítulo que ya pasó bajo la barra. */
  useEffect(() => {
    const titulos = items.map((x) => document.getElementById(x.id));
    let pendiente = 0;
    const medir = () => {
      pendiente = 0;
      let i = -1;
      for (let k = 0; k < titulos.length; k++) {
        const el = titulos[k];
        if (el && el.getBoundingClientRect().top <= 196) i = k;
      }
      setActivo(i);
    };
    const alDesplazar = () => {
      if (!pendiente) pendiente = requestAnimationFrame(medir);
    };
    medir();
    window.addEventListener("scroll", alDesplazar, { passive: true });
    window.addEventListener("resize", alDesplazar);
    return () => {
      window.removeEventListener("scroll", alDesplazar);
      window.removeEventListener("resize", alDesplazar);
      if (pendiente) cancelAnimationFrame(pendiente);
    };
  }, [items]);

  /* La lista desplegada se cierra con Escape o al tocar fuera. */
  useEffect(() => {
    if (!abierto) return;
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    const fuera = (e: PointerEvent) => {
      if (raiz.current && !raiz.current.contains(e.target as Node)) setAbierto(false);
    };
    document.addEventListener("keydown", tecla);
    document.addEventListener("pointerdown", fuera);
    return () => {
      document.removeEventListener("keydown", tecla);
      document.removeEventListener("pointerdown", fuera);
    };
  }, [abierto]);

  const rotulo = lang === "en" ? "In this guide" : "En esta guía";
  const cuenta =
    activo >= 0
      ? `${activo + 1} ${lang === "en" ? "of" : "de"} ${items.length}`
      : `${items.length} ${lang === "en" ? "sections" : "apartados"}`;

  return (
    <nav
      ref={raiz}
      aria-label={rotulo}
      className="gc-indice-guia sticky top-16 z-30 -mx-6 mb-10 border-y border-cream/10 bg-surface md:top-20 md:-mx-10 xl:absolute xl:inset-y-0 xl:right-full xl:z-auto xl:mx-0 xl:mb-0 xl:mr-14 xl:w-[212px] xl:border-0 xl:bg-transparent"
    >
      <div className="relative xl:sticky xl:top-32">
        <button
          type="button"
          aria-expanded={abierto}
          aria-controls={listaId}
          onClick={() => setAbierto((v) => !v)}
          className="flex min-h-12 w-full items-center gap-3 px-6 text-left md:px-10 xl:hidden"
        >
          <span className="min-w-0 flex-1 truncate text-sm text-cream">
            {activo >= 0 ? items[activo].titulo : rotulo}
          </span>
          <span className="shrink-0 text-[13px] tabular-nums text-cream/65">{cuenta}</span>
          <CaretDown
            size={14}
            weight="bold"
            aria-hidden="true"
            className={`shrink-0 text-cream/65 transition-transform duration-300 ${abierto ? "rotate-180" : ""}`}
          />
        </button>

        <p className="type-label mb-5 hidden text-cream/65 xl:block">{rotulo}</p>

        <ol
          id={listaId}
          className={`${abierto ? "block" : "hidden"} absolute inset-x-0 top-full max-h-[62dvh] overflow-y-auto overscroll-contain border-b border-cream/10 bg-surface px-6 pb-3 shadow-[0_18px_30px_-18px_rgba(74,14,39,0.28)] md:px-10 xl:static xl:block xl:max-h-[calc(100dvh-13rem)] xl:space-y-0.5 xl:border-b-0 xl:border-l xl:border-cream/10 xl:bg-transparent xl:px-0 xl:pb-0 xl:shadow-none`}
        >
          {items.map((x, i) => (
            <li key={x.id} className="border-t border-cream/[0.07] xl:border-t-0">
              <a
                href={`#${x.id}`}
                aria-current={i === activo ? "location" : undefined}
                onClick={() => setAbierto(false)}
                className={`flex gap-3 py-3 text-sm leading-snug transition-colors duration-300 xl:-ml-px xl:border-l xl:py-1.5 xl:pl-4 xl:text-[13px] ${
                  i === activo
                    ? "font-medium text-cream xl:border-burgundy dark:xl:border-hilo"
                    : "text-cream/70 hover:text-cream xl:border-transparent xl:hover:border-cream/40"
                }`}
              >
                <span className="w-5 shrink-0 tabular-nums text-cream/65 xl:hidden">{i + 1}</span>
                {x.titulo}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
