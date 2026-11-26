/* El índice de la búsqueda del sitio (OD-05, 25-11-2026). Se arma en el
   servidor durante la compilación, desde las mismas fuentes que pintan cada
   página: el frontmatter de content/articles, las áreas de lib/constants.ts
   y lib/area-commercial.ts, las sentencias de lib/jurisprudencia.ts y los
   perfiles de lib/constants.ts y lib/asistentes.ts. Así una guía o una
   sentencia nueva entra sola en la búsqueda, sin un paso aparte.

   Liviano a propósito: título, resumen, ruta, tipo, una línea de datos y
   etiquetas. No lleva el cuerpo de las guías ni el análisis de las
   sentencias, que pesarían varios megas; la búsqueda encuentra por lo que
   cada pieza declara de sí misma. Importa `fs` a través de lib/articles.ts,
   así que solo lo usa la página del servidor (app/buscar/page.tsx). */

import { formatDate, getAllArticles, publicationTypeLabel } from "@/lib/articles";
import { AREA_COMMERCIAL } from "@/lib/area-commercial";
import { ASISTENTES } from "@/lib/asistentes";
import { PRACTICE_AREA_PAGES, TEAM } from "@/lib/constants";
import { ETIQUETA_ESTADO, getAllSentencias } from "@/lib/jurisprudencia";
import type { EntradaBusqueda } from "@/lib/busqueda";

const TITULO_AREA = new Map<string, string>(PRACTICE_AREA_PAGES.map((a) => [a.slug, a.title]));
const tituloArea = (slug: string) => TITULO_AREA.get(slug);

export function construirIndiceBusqueda(): EntradaBusqueda[] {
  const guias: EntradaBusqueda[] = getAllArticles().map((a) => {
    const lang = a.lang === "en" ? "en" : "es";
    const rotulo = a.publicationType ? publicationTypeLabel(a.publicationType, lang) : undefined;
    const autor = a.authorVisible === false ? undefined : a.author;
    return {
      tipo: "guia",
      titulo: a.title,
      resumen: a.excerpt,
      ruta: `/articulos/${a.slug}`,
      meta: [rotulo, autor, a.date ? formatDate(a.date, lang) : undefined].filter(Boolean).join(" · "),
      etiquetas: [
        ...a.tags,
        ...(a.areas ?? []).flatMap((s) => tituloArea(s) ?? []),
        ...(a.institution && a.institution !== "Corporación GC" ? [a.institution] : []),
      ],
      ...(lang === "en" ? { lang: "en" as const } : {}),
    };
  });

  const areas: EntradaBusqueda[] = PRACTICE_AREA_PAGES.map((a) => {
    const comercial = AREA_COMMERCIAL[a.slug];
    return {
      tipo: "area",
      titulo: a.title,
      resumen: a.subtitle,
      ruta: `/areas/${a.slug}`,
      meta: a.priority === "primary" ? "Área principal" : "Área de práctica",
      etiquetas: [a.description, ...(comercial?.services.map((s) => s.title) ?? [])],
    };
  });

  const sentencias: EntradaBusqueda[] = getAllSentencias().map((s) => ({
    tipo: "sentencia",
    titulo: s.titulo,
    resumen: s.subtitulo ?? s.metaDescription,
    ruta: `/jurisprudencia-destacada/${s.slug}`,
    meta: [s.fecha.slice(-4), s.estado ? ETIQUETA_ESTADO[s.estado] : undefined, s.numero].filter(Boolean).join(" · "),
    etiquetas: [
      s.materia,
      s.area,
      s.tribunal,
      s.expediente,
      s.redactor,
      ...(s.temas ?? []),
      ...(s.areas ?? []).flatMap((x) => tituloArea(x) ?? []),
    ],
  }));

  const perfiles: EntradaBusqueda[] = [
    ...TEAM.map((m) => ({
      tipo: "perfil" as const,
      titulo: m.name,
      resumen: m.shortBio,
      ruta: `/abogados/${m.slug}`,
      meta: m.role,
      etiquetas: [...m.areas, ...m.languages],
    })),
    ...ASISTENTES.map((x) => ({
      tipo: "perfil" as const,
      titulo: x.name,
      resumen: x.heroDescription,
      ruta: `/equipo/${x.slug}`,
      meta: x.role,
      etiquetas: [x.study, ...x.languages],
    })),
  ];

  return [...guias, ...areas, ...sentencias, ...perfiles];
}
