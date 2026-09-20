/* Una norma que el sitio publica entera y navegable: su ficha, el índice
   que viaja dentro del HTML y el texto de cada artículo, que se descarga
   aparte. Lo comparten el Código Procesal Contencioso-Administrativo y el
   Reglamento a la Ley General de Contratación Pública. */

export type FichaNorma = {
  /** Como se llama la norma en su propio encabezado. */
  nombre: string;
  /** «Ley 8508», «Decreto Ejecutivo 43808-H». */
  identificador: string;
  /** «Ley» o «Reglamento»: entra en el marcado de Google. */
  tipo: string;
  /** Fecha de sanción, en ISO, para el marcado. */
  fecha: string;
  /** Hasta cuándo está actualizado el texto que publicamos. */
  version: string;
  articulos: number;
  /** Ruta del JSON con el texto íntegro. */
  datos: string;
  /** La misma norma en el Sistema Costarricense de Información Jurídica. */
  sinalevi: string;
  /** Lo que dice el buscador antes de que escriban. */
  etiquetaBusqueda: string;
  /** Otros nombres por los que se la busca. */
  alias?: string[];
  /** Palabras que la norma dejó de usar y el nombre que llevan hoy. Quien
   *  busca «cartel» en el Reglamento no encontraría nada sin esto. */
  sinonimos?: Record<string, { actual: string; nota: string }>;
};

/** El texto de un artículo, tal como llega del JSON. */
export type ArticuloNorma = {
  art: string;
  texto: string;
  capitulo?: string;
  seccion?: string;
  /** Las reformas y derogatorias que ha recibido, en sus propias palabras. */
  reformas?: string[];
  derogado?: boolean;
};

/** Una sentencia comentada del sitio que interpreta un artículo. */
export type VotoDeArticulo = { slug: string; voto: string; sobre: string };

/** Una guía de la casa que explica lo que un artículo regula. */
export type GuiaDeArticulo = { href: string; texto: string };
