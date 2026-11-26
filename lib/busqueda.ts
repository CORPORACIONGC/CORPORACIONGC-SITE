/* Búsqueda en todo el sitio (OD-05, 25-11-2026): tipos, normalización y
   puntaje. Este archivo no lee el disco, así que lo puede importar el
   componente de cliente; el índice se arma en el servidor, en tiempo de
   compilación, con lib/busqueda-indice.ts. */

export type TipoResultado = "guia" | "area" | "sentencia" | "perfil";

/** Una entrada del índice: solo lo que hace falta para encontrarla y
 *  mostrarla, nunca el cuerpo de la guía o de la sentencia. */
export type EntradaBusqueda = {
  tipo: TipoResultado;
  titulo: string;
  resumen: string;
  ruta: string;
  /** Línea de datos que va sobre el título (tipo de pieza, autor, fecha;
   *  número y estado del criterio; cargo). */
  meta?: string;
  /** Temas, normas, materias y nombres que la entrada debe encontrar aunque
   *  no figuren en el título ni en el resumen. */
  etiquetas: string[];
  lang?: "en";
};

/** Orden de los grupos cuando empatan en pertinencia, y sus rótulos. */
export const GRUPOS: { tipo: TipoResultado; titulo: string; singular: string; plural: string }[] = [
  { tipo: "guia", titulo: "Guías y publicaciones", singular: "guía o publicación", plural: "guías y publicaciones" },
  { tipo: "area", titulo: "Áreas de práctica", singular: "área de práctica", plural: "áreas de práctica" },
  { tipo: "sentencia", titulo: "Jurisprudencia destacada", singular: "sentencia", plural: "sentencias" },
  { tipo: "perfil", titulo: "Equipo", singular: "perfil", plural: "perfiles" },
];

/** Sin tildes y en minúsculas, para que «casacion» encuentre «casación».
 *  Es la misma normalización del buscador de /articulos
 *  (components/sections/IndiceArticulos.tsx). */
export const plano = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

export const terminosDe = (busca: string) => plano(busca).split(/\s+/).filter(Boolean);

export type EntradaPreparada = {
  entrada: EntradaBusqueda;
  orden: number;
  titulo: string;
  resumen: string;
  texto: string;
};

/** Normaliza el índice una sola vez, al montarse el buscador. */
export function preparar(indice: EntradaBusqueda[]): EntradaPreparada[] {
  return indice.map((entrada, orden) => {
    const etiquetas = entrada.etiquetas.join(" ");
    return {
      entrada,
      orden,
      titulo: plano(entrada.titulo),
      resumen: plano(`${entrada.resumen} ${etiquetas}`),
      texto: plano([entrada.titulo, entrada.resumen, entrada.meta ?? "", etiquetas].join(" ")),
    };
  });
}

export type Grupo = { tipo: TipoResultado; titulo: string; singular: string; plural: string; resultados: EntradaBusqueda[] };

/* Mismo criterio que el índice de artículos (D-24): cada término tiene que
   aparecer en la entrada; pesa más el que está en el título (3), luego el
   del resumen o las etiquetas (2) y por último el de la línea de datos (1).
   A igual puntaje se conserva el orden del índice, que va por fecha en las
   guías y por prioridad en las áreas. Los grupos se ordenan por su mejor
   resultado, de modo que «Óscar» abre con el perfil y «lesividad», con la
   guía. */
export function buscar(corpus: EntradaPreparada[], busca: string): Grupo[] {
  const terminos = terminosDe(busca);
  if (terminos.length === 0) return [];

  const hallados = corpus
    .filter((c) => terminos.every((t) => c.texto.includes(t)))
    .map((c) => ({
      c,
      puntos: terminos.reduce((n, t) => n + (c.titulo.includes(t) ? 3 : c.resumen.includes(t) ? 2 : 1), 0),
    }))
    .sort((a, b) => b.puntos - a.puntos || a.c.orden - b.c.orden);

  return GRUPOS.map((g, i) => {
    const propios = hallados.filter((h) => h.c.entrada.tipo === g.tipo);
    return { g, i, mejor: propios[0]?.puntos ?? 0, propios };
  })
    .filter((x) => x.propios.length > 0)
    .sort((a, b) => b.mejor - a.mejor || a.i - b.i)
    .map(({ g, propios }) => ({ ...g, resultados: propios.map((h) => h.c.entrada) }));
}
