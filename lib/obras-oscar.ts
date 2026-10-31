/* Las obras de don Óscar que el sitio presenta (tesis, libros, capítulo),
   con su tipo propio, su editorial y su ISBN (catálogo SIBDI, Dialnet y
   Tirant lo Blanch). La página de cada obra es un Article de la firma que
   trata de ella (`about`); el perfil del Director las declara como obras
   suyas, con el mismo @id, para que el grafo las una a su Person. */

const SITE = "https://www.corporaciongc.com";

const OSCAR = {
  "@type": "Person",
  "@id": `${SITE}/abogados/oscar-gonzalez#person`,
  name: "Óscar Eduardo González Camacho",
  honorificPrefix: "Dr.",
};

const pagina = (slug: string) => `${SITE}/articulos/${slug}`;

export const OBRAS_OSCAR: Record<string, Record<string, unknown>> = {
  "libro-justicia-administrativa": {
    "@type": "Thesis",
    "@id": `${pagina("libro-justicia-administrativa")}#tesis`,
    name: "La justicia administrativa frente a la inactividad material de la Administración Pública",
    inSupportOf: "Doctor en Derecho",
    author: OSCAR,
    sourceOrganization: { "@type": "CollegeOrUniversity", name: "Universidad de Alcalá" },
    datePublished: "1998",
    inLanguage: "es",
    url: pagina("libro-justicia-administrativa"),
    sameAs: "https://dialnet.unirioja.es/servlet/tesis?codigo=183910",
    /* La tesis se publicó en Costa Rica en tres tomos con dos ISBN. */
    workExample: [
      {
        "@type": "Book",
        name: "La justicia administrativa, tomo I",
        author: OSCAR,
        isbn: "9977132585",
        publisher: { "@type": "Organization", name: "Editorial Investigaciones Jurídicas" },
      },
      {
        "@type": "Book",
        name: "La justicia administrativa, tomos II y III",
        author: OSCAR,
        isbn: "9977132777",
        publisher: { "@type": "Organization", name: "Editorial Investigaciones Jurídicas" },
      },
    ],
  },
  "libro-nuevo-proceso-contencioso": {
    "@type": "Book",
    "@id": `${pagina("libro-nuevo-proceso-contencioso")}#libro`,
    name: "El nuevo proceso contencioso-administrativo",
    author: OSCAR,
    isbn: "9968770418",
    publisher: { "@type": "GovernmentOrganization", name: "Poder Judicial de Costa Rica" },
    datePublished: "2006",
    inLanguage: "es",
    url: pagina("libro-nuevo-proceso-contencioso"),
  },
  "por-que-y-para-que-contencioso-administrativo": {
    "@type": "Chapter",
    "@id": `${pagina("por-que-y-para-que-contencioso-administrativo")}#capitulo`,
    name: "El por qué y para qué del contencioso administrativo",
    author: OSCAR,
    inLanguage: "es",
    url: pagina("por-que-y-para-que-contencioso-administrativo"),
    isPartOf: {
      "@type": "Book",
      name: "CPCA, 20 años después: Perspectivas críticas sobre la justicia administrativa",
      isbn: "9791370214753",
      datePublished: "2026",
      publisher: { "@type": "Organization", name: "Editorial Tirant lo Blanch" },
      url: "https://editorial.tirant.com/cr/libro/cpca-20-anos-despues-perspectivas-criticas-sobre-la-justicia-administrativa-alex-rojas-ortega-9791370214753",
    },
  },
};
