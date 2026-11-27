/* Las tesis del equipo que el sitio presenta, con su tipo propio (Thesis),
   la universidad, el grado y el año (informe 23-11, M-S1 y M-S2). La página
   de cada tesis es un Article de la firma que trata de ella (`about`), con la
   fecha en que la ficha se publicó en el sitio; el perfil de cada autor la
   declara como obra suya con el mismo @id, que es como schema.org une una
   obra con su Person. Antes, el registro de la tesis iba en el `sameAs` del
   perfil, que afirma una identidad y no una obra. */

const SITE = "https://www.corporaciongc.com";
const pagina = (slug: string) => `${SITE}/articulos/${slug}`;
const persona = (slug: string, name: string) => ({
  "@type": "Person",
  "@id": `${SITE}/abogados/${slug}#person`,
  name,
});
const UCR = { "@type": "CollegeOrUniversity", name: "Universidad de Costa Rica" };
const KERWA = (h: string) => `https://kerwa.ucr.ac.cr/handle/10669/${h}`;

export const OBRAS_EQUIPO: Record<string, Record<string, unknown>> = {
  "tesis-ia-justicia": {
    "@type": "Thesis",
    "@id": `${pagina("tesis-ia-justicia")}#tesis`,
    name: "Hacia la implementación de sistemas automatizados de decisión basados en inteligencia artificial en la administración de justicia costarricense: un análisis desde el marco normativo de la Unión Europea",
    author: persona("khevin-sanchez", "Khevin Alberto Sánchez Zamora"),
    inSupportOf: "Licenciatura en Derecho",
    sourceOrganization: UCR,
    datePublished: "2025",
    inLanguage: "es",
    url: pagina("tesis-ia-justicia"),
    /* Ficha de catálogo y texto completo en el SIBDI; el texto abre con el
       acta de la defensa del 15-05-2025, que la aprueba con distinción. */
    sameAs: [
      "https://primo-tc-na01.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=ucr_aleph000772343&context=L&vid=SIBDI&lang=es_ES",
      "https://repositorio.sibdi.ucr.ac.cr/server/api/core/bitstreams/77213017-2526-4e36-b955-edb7efcb7478/content",
    ],
    award: "Aprobada con distinción por el tribunal examinador (Universidad de Costa Rica, 15-05-2025)",
  },
  "tesis-dano-moral-indirecto": {
    "@type": "Thesis",
    "@id": `${pagina("tesis-dano-moral-indirecto")}#tesis`,
    name: "El daño moral indirecto familiar y social como responsabilidad patrimonial de la Administración",
    author: persona("katherine-gonzalez", "Katherine González Coto"),
    inSupportOf: "Maestría Profesional en Derecho Público",
    sourceOrganization: UCR,
    datePublished: "2024",
    inLanguage: "es",
    url: pagina("tesis-dano-moral-indirecto"),
    sameAs: KERWA("102175"),
  },
  "tesis-procedimiento-expropiatorio-cr": {
    "@type": "Thesis",
    "@id": `${pagina("tesis-procedimiento-expropiatorio-cr")}#tesis`,
    name: "Transformación y perspectivas del procedimiento expropiatorio en Costa Rica",
    author: persona("katherine-gonzalez", "Katherine González Coto"),
    inSupportOf: "Licenciatura en Derecho",
    sourceOrganization: { "@type": "CollegeOrUniversity", name: "Universidad Escuela Libre de Derecho" },
    datePublished: "2019",
    inLanguage: "es",
    url: pagina("tesis-procedimiento-expropiatorio-cr"),
  },
  "tesis-iatrogenia-responsabilidad-administrativa": {
    "@type": "Thesis",
    "@id": `${pagina("tesis-iatrogenia-responsabilidad-administrativa")}#tesis`,
    name: "La iatrogenia en la responsabilidad administrativa: una aproximación a los verdaderos criterios de aplicación en el ordenamiento jurídico costarricense",
    author: persona("mariana-montero", "Mariana Montero Acuña"),
    inSupportOf: "Licenciatura en Derecho",
    sourceOrganization: UCR,
    datePublished: "2022",
    inLanguage: "es",
    url: pagina("tesis-iatrogenia-responsabilidad-administrativa"),
    sameAs: KERWA("96806"),
  },
  "potestad-discrecional-municipalidades-urbanismo": {
    "@type": "Thesis",
    "@id": `${pagina("potestad-discrecional-municipalidades-urbanismo")}#tesis`,
    name: "La potestad discrecional de la Administración Municipal en la regulación urbanística",
    author: persona("esteban-perez", "Esteban Pérez Herrera"),
    inSupportOf: "Licenciatura en Derecho",
    sourceOrganization: UCR,
    datePublished: "2022",
    inLanguage: "es",
    url: pagina("potestad-discrecional-municipalidades-urbanismo"),
    sameAs: KERWA("94871"),
  },
  /* El artículo de Khevin Sánchez en la revista El Foro: una obra suya, que
     el perfil declara como tal en vez de ponerla en sameAs (B-G3). */
  "personalidad-juridica-instrumental": {
    "@type": "ScholarlyArticle",
    "@id": `${pagina("personalidad-juridica-instrumental")}#obra`,
    headline:
      "La personalidad jurídica instrumental como técnica de organización administrativa: límites constitucionales y tendencias regresivas en Costa Rica",
    author: persona("khevin-sanchez", "Khevin Alberto Sánchez Zamora"),
    datePublished: "2026",
    pagination: "7-22",
    inLanguage: "es",
    url: pagina("personalidad-juridica-instrumental"),
    isPartOf: {
      "@type": "PublicationIssue",
      issueNumber: "32",
      isPartOf: {
        "@type": "Periodical",
        name: "Revista El Foro",
        issn: "2215-6771",
        publisher: { "@type": "Organization", name: "Colegio de Abogados y Abogadas de Costa Rica" },
        url: "https://www.abogados.or.cr/revistaelforo/",
      },
    },
  },
  /* De José Carlos Solano Salas, que no tiene perfil en el sitio. */
  "control-jurisdiccional-actos-gobierno": {
    "@type": "Thesis",
    "@id": `${pagina("control-jurisdiccional-actos-gobierno")}#tesis`,
    name: "El control jurisdiccional del acto de gobierno",
    author: { "@type": "Person", name: "José Carlos Solano Salas" },
    inSupportOf: "Licenciatura en Derecho",
    sourceOrganization: UCR,
    datePublished: "2023",
    inLanguage: "es",
    url: pagina("control-jurisdiccional-actos-gobierno"),
  },
};

/** Las tesis de un integrante del equipo, para su perfil. */
export function obrasDe(slugPerfil: string): Record<string, unknown>[] {
  return Object.values(OBRAS_EQUIPO).filter(
    (o) => (o.author as { "@id"?: string })["@id"] === `${SITE}/abogados/${slugPerfil}#person`,
  );
}
