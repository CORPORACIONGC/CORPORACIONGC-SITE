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
  /** Órgano que la dictó («Asamblea Legislativa…»): entra en el marcado. */
  emisor?: string;
  /** Fecha, en ISO, de la versión consolidada que se publica. */
  fechaVersion?: string;
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

/** Lo que el marcado `Legislation` necesita de una norma: la ficha completa
 *  de las que el sitio publica íntegras, o solo esto para las que una guía
 *  explica sin reproducir. */
export type NormaSchema = Pick<FichaNorma, "nombre" | "identificador" | "tipo" | "fecha" | "sinalevi" | "alias" | "emisor" | "fechaVersion">;

/** El nodo `Legislation` de una norma, con un @id estable que comparten la
 *  página que la reproduce y las guías que tratan de ella (`about`). */
export function legislacionSchema(ficha: NormaSchema): Record<string, unknown> {
  return {
    "@type": "Legislation",
    "@id": `https://www.corporaciongc.com/#legislacion-${ficha.identificador.toLowerCase().normalize("NFD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
    name: ficha.nombre,
    alternateName: ficha.alias ?? [ficha.identificador],
    legislationIdentifier: ficha.identificador,
    legislationType: ficha.tipo,
    legislationJurisdiction: { "@type": "Country", name: "Costa Rica" },
    legislationDate: ficha.fecha,
    legislationLegalForce: "https://schema.org/InForce",
    ...(ficha.fechaVersion && { legislationDateVersion: ficha.fechaVersion }),
    ...(ficha.emisor && { legislationPassedBy: { "@type": "GovernmentOrganization", name: ficha.emisor } }),
    inLanguage: "es",
    sameAs: ficha.sinalevi,
  };
}
