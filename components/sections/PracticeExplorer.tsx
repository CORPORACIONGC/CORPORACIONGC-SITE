"use client";

/* Explorador de áreas de práctica.
   En lugar de una cuadrícula de tarjetas iguales, las 32 áreas se ordenan en
   cinco grupos de práctica: a la izquierda, los grupos en tipografía ligera
   grande (pestañas verticales, sin conteo); a la derecha, las áreas del grupo elegido,
   con nombre y descripción en filas separadas por filetes. Pasar el cursor,
   hacer clic o moverse con las flechas del teclado cambia de grupo. En móvil
   los grupos son una tira de pestañas deslizable. Todas las áreas quedan en
   el HTML (los paneles inactivos solo se ocultan), de modo que los buscadores
   las siguen leyendo. En escritorio los paneles se apilan en la misma celda,
   así la sección mide lo que el grupo más largo y no salta al cambiar. */

import { useId, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

export type PracticeAreaLite = {
  slug: string;
  title: string;
  subtitle: string;
  priority: "primary" | "specialized" | "complementary";
};

/* Grupos por materia. Un área nueva que no figure en ninguno cae en el grupo
   que corresponde a su prioridad, para que nunca desaparezca de la portada. */
const GROUPS: { title: string; slugs: string[] }[] = [
  {
    title: "Litigio y tribunales",
    slugs: [
      "litigio-contencioso-administrativo",
      "medidas-cautelares",
      "casacion-sala-primera",
      "recursos-de-amparo",
      "acciones-de-inconstitucionalidad",
      "derecho-administrativo",
      "expropiaciones",
    ],
  },
  {
    title: "Administración pública",
    slugs: [
      "contratacion-publica",
      "procedimientos-sancionatorios",
      "empleo-publico",
      "informes-juridicos-dictamenes",
      "asesoria-regulatoria",
      "materia-municipal",
      "materia-presupuestaria",
      "compliance-publico-anticorrupcion",
      "derecho-electoral-financiamiento-politico",
    ],
  },
  {
    title: "Sectores regulados",
    slugs: [
      "servicio-publico",
      "telecomunicaciones-espectro-5g",
      "energia-renovable-transicion-energetica",
      "regulacion-fintech-criptoactivos",
      "regulacion-ambiental-mercados-carbono",
      "alianzas-publico-privadas-infraestructura",
      "defensa-regulatoria-sectorial",
      "comercio-internacional",
      "gobierno-digital-inteligencia-artificial-datos",
    ],
  },
  {
    title: "Territorio y bienes públicos",
    slugs: ["dominio-publico", "zona-maritimo-terrestre", "derecho-urbanistico"],
  },
  {
    title: "Cobertura complementaria",
    slugs: ["derecho-civil", "derecho-de-familia", "derecho-laboral", "derecho-notarial"],
  },
];

function groupAreas(areas: PracticeAreaLite[]) {
  const bySlug = new Map(areas.map((a) => [a.slug, a]));
  const used = new Set<string>();
  const groups = GROUPS.map((g) => ({
    title: g.title,
    items: g.slugs.flatMap((s) => {
      used.add(s);
      const a = bySlug.get(s);
      return a ? [a] : [];
    }),
  }));
  for (const a of areas) {
    if (used.has(a.slug)) continue;
    const i = a.priority === "complementary" ? 4 : a.priority === "specialized" ? 2 : 1;
    groups[i].items.push(a);
  }
  return groups;
}

export function PracticeExplorer({ areas }: { areas: PracticeAreaLite[] }) {
  const groups = groupAreas(areas);
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const mobileTabs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number, focus = false, mobile = false) => {
    setActive(i);
    if (focus) (mobile ? mobileTabs : tabs).current[i]?.focus();
    if (mobile) mobileTabs.current[i]?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  };

  const onKey = (e: KeyboardEvent, i: number, mobile = false) => {
    const n = groups.length;
    const next = mobile ? "ArrowRight" : "ArrowDown";
    const prev = mobile ? "ArrowLeft" : "ArrowUp";
    if (e.key === next) { e.preventDefault(); select((i + 1) % n, true, mobile); }
    if (e.key === prev) { e.preventDefault(); select((i - 1 + n) % n, true, mobile); }
    if (e.key === "Home") { e.preventDefault(); select(0, true, mobile); }
    if (e.key === "End") { e.preventDefault(); select(n - 1, true, mobile); }
  };

  const tabId = (i: number, mobile = false) => `${baseId}-${mobile ? "m" : "d"}tab-${i}`;
  const panelId = (i: number) => `${baseId}-panel-${i}`;

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:gap-16 xl:gap-24">
      {/* Grupos — pestañas verticales en escritorio */}
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label="Grupos de práctica"
        className="hidden border-t border-cream/10 lg:block"
      >
        {groups.map((g, i) => {
          const on = i === active;
          return (
            <button
              key={g.title}
              ref={(el) => { tabs.current[i] = el; }}
              id={tabId(i)}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls={panelId(i)}
              tabIndex={on ? 0 : -1}
              onClick={() => select(i)}
              onMouseEnter={() => select(i)}
              onKeyDown={(e) => onKey(e, i)}
              className="group relative flex w-full items-baseline justify-between gap-6 border-b border-cream/10 py-6 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 -bottom-px h-px origin-left bg-burgundy transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-gold ${
                  on ? "scale-x-100" : "scale-x-0"
                }`}
              />
              <span
                className={`text-[28px] font-light leading-[1.1] tracking-[-0.015em] transition-colors duration-300 xl:text-[32px] ${
                  on ? "text-burgundy dark:text-gold" : "text-cream"
                }`}
              >
                {g.title}
              </span>
              <span className="flex items-center">
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className={`text-burgundy transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] dark:text-gold ${
                    on ? "translate-x-0 opacity-100" : "-translate-x-1.5 opacity-0"
                  }`}
                />
              </span>
            </button>
          );
        })}
      </div>

      {/* Grupos — tira de pestañas en móvil y tableta */}
      <div
        role="tablist"
        aria-label="Grupos de práctica"
        className="-mx-6 flex gap-6 overflow-x-auto border-b border-cream/10 px-6 gc-scrollbar-none md:-mx-10 md:px-10 lg:hidden"
      >
        {groups.map((g, i) => {
          const on = i === active;
          return (
            <button
              key={g.title}
              ref={(el) => { mobileTabs.current[i] = el; }}
              id={tabId(i, true)}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls={panelId(i)}
              tabIndex={on ? 0 : -1}
              onClick={() => select(i, false, true)}
              onKeyDown={(e) => onKey(e, i, true)}
              className={`relative shrink-0 whitespace-nowrap pb-4 pt-1 text-base outline-none transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                on ? "font-semibold text-burgundy dark:text-gold" : "text-cream/70"
              }`}
            >
              {g.title}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 -bottom-px h-0.5 bg-burgundy transition-opacity duration-300 dark:bg-gold ${
                  on ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Áreas del grupo elegido */}
      <div className="mt-2 lg:mt-0 lg:grid">
        {groups.map((g, i) => (
          <div
            key={g.title}
            id={panelId(i)}
            role="tabpanel"
            aria-labelledby={tabId(i)}
            inert={i !== active}
            data-active={i === active}
            className={`gc-panel-in lg:[grid-area:1/1] ${
              i === active ? "" : "hidden lg:invisible lg:block"
            }`}
          >
            <ul role="list" className="grid gap-x-10 sm:grid-cols-2">
              {g.items.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="group relative block border-b border-cream/10 py-5 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:py-6"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-burgundy transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 dark:bg-gold"
                    />
                    <span className="flex items-center justify-between gap-4">
                      <span className="text-base font-semibold leading-snug tracking-[-0.01em] text-cream transition-colors duration-300 group-hover:text-burgundy dark:group-hover:text-gold">
                        {a.title}
                      </span>
                      <ArrowRight
                        size={15}
                        aria-hidden="true"
                        className="shrink-0 -translate-x-1.5 text-burgundy opacity-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 dark:text-gold"
                      />
                    </span>
                    <span className="mt-1.5 block text-[13px] leading-relaxed text-cream/65 line-clamp-2">
                      {a.subtitle}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
