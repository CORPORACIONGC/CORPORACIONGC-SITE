/* Las fuentes de una guía: normas, resoluciones y demás documentos que la
   respaldan, con su enlace a la fuente oficial. Cada guía tiene su archivo
   en esta carpeta (lib/fuentes-guias/<slug>.ts) y la plantilla las pinta con
   <FuentesGuia slug="…" />, con el mismo formato que las guías de setiembre. */

export type Fuente = { titulo: string; detalle: string; href?: string };

export type Criterio = {
  /** «Voto 2021-012345», «Sentencia 1426-F-S1-2012», «R-DCP-SICOP-01319-2026». */
  numero: string;
  organo: string;
  /** DD-MM-AAAA */
  fecha: string;
  tema: string;
  /** Lo que resolvió, en una o dos frases, verificado en el texto íntegro. */
  criterio: string;
  href: string;
  /** Redactada por el magistrado González Camacho. */
  gc?: boolean;
};

export type FuentesDeGuia = {
  normas: Fuente[];
  jurisprudencia: Criterio[];
  contraloria?: Criterio[];
  procuraduria?: Fuente[];
  otros?: { titulo: string; items: Fuente[] }[];
  /** Nota final: de dónde salen los textos y la fecha del cotejo. */
  pie: string;
};

export const NEXUS = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;
export const PGR = (p1: number) =>
  `https://sinalevi.go.cr/ResultadosPronunciamiento/Informacion?param1=${p1}&param2=1&param3=1`;
