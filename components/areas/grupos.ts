/* Grupos de práctica: una sola fuente para el explorador de la portada
   (components/sections/PracticeExplorer.tsx) y para el índice /areas
   (app/areas/page.tsx). Vive fuera del explorador porque ese archivo es un
   componente de cliente y el índice, que es de servidor, no puede llamar
   funciones exportadas desde un módulo «use client».

   Un área nueva que no figure en ningún grupo cae en el que corresponde a
   su prioridad, para que nunca desaparezca. Ningún grupo pasa de ocho áreas
   (cuatro filas): en el explorador los paneles se apilan en la misma celda
   y la sección mide lo que el grupo más largo, así que un grupo de nueve
   dejaba un hueco bajo el de Litigio, que se abre por defecto con siete. */

export type AreaAgrupable = {
  slug: string;
  priority: "primary" | "specialized" | "complementary";
};

export const GROUPS: { title: string; slugs: string[] }[] = [
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
      "materia-presupuestaria",
      "compliance-publico-anticorrupcion",
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
      "defensa-regulatoria-sectorial",
      "gobierno-digital-inteligencia-artificial-datos",
    ],
  },
  {
    title: "Territorio y bienes públicos",
    slugs: [
      "dominio-publico",
      "zona-maritimo-terrestre",
      "derecho-urbanistico",
      "materia-municipal",
      "alianzas-publico-privadas-infraestructura",
    ],
  },
];

/* «Otras materias» no entra en el explorador de la portada. Esa sección
   presenta el núcleo en Derecho Público y esta página reúne justamente lo
   que no lo es; como grupo propio dejaba el panel casi vacío. En el índice
   /areas sí aparece, en un grupo final de cobertura complementaria. */
export const FUERA_DEL_NUCLEO = new Set(["otras-materias"]);

/** Reparte las áreas del núcleo en los grupos de práctica, en el orden de
 *  GROUPS. Las que quedan fuera del núcleo no se incluyen: el índice las
 *  agrega aparte. */
export function groupAreas<T extends AreaAgrupable>(areas: readonly T[]): { title: string; items: T[] }[] {
  const nucleo = areas.filter((a) => !FUERA_DEL_NUCLEO.has(a.slug));
  const bySlug = new Map(nucleo.map((a) => [a.slug, a]));
  const used = new Set<string>();
  const groups = GROUPS.map((g) => ({
    title: g.title,
    items: g.slugs.flatMap((s) => {
      used.add(s);
      const a = bySlug.get(s);
      return a ? [a] : [];
    }),
  }));
  /* Un área nueva debe asignarse a su grupo en GROUPS; si no, cae en
     Administración pública, que es el cajón menos equivocado, o en Sectores
     regulados si es especializada. */
  for (const a of nucleo) {
    if (used.has(a.slug)) continue;
    groups[a.priority === "specialized" ? 2 : 1].items.push(a);
  }
  return groups;
}
