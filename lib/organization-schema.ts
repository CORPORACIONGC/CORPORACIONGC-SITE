// lib/organization-schema.ts
// Fuente ÚNICA del nodo JSON-LD de la organización (@id #organization).
// Antes existían dos definiciones distintas con el MISMO @id (en app/page.tsx
// y app/sobre-nosotros/page.tsx): el home tenía los campos comerciales pero no
// las credenciales del fundador ni la lista de empleados, y sobre-nosotros al
// revés. Esta constante fusiona ambos y se inyecta idéntica en las dos páginas
// para no emitir nodos contradictorios con el mismo @id.

import { FIRM, PRACTICE_AREA_PAGES } from "./constants";

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.corporaciongc.com/#organization",
  name: "Corporación GC",
  alternateName: ["Bufete Corporación GC", "Corporación González Camacho"],
  description: FIRM.description,
  url: "https://www.corporaciongc.com",
  logo: "https://www.corporaciongc.com/images/logo-gc.png",
  image: "https://www.corporaciongc.com/images/logo-gc.png",
  telephone: "+50686622169",
  email: "info@corporaciongc.com",
  priceRange: "$$",
  currenciesAccepted: "CRC, USD",
  areaServed: [
    { "@type": "Country", name: "Costa Rica" },
    { "@type": "City", name: "San José" },
    { "@type": "AdministrativeArea", name: "Gran Área Metropolitana" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Edificio Ofident, 200 m norte y 25 m este del Centro Cultural Norteamericano, Barrio Dent",
    addressLocality: "San Pedro, Montes de Oca",
    addressRegion: "San José",
    postalCode: "11501",
    addressCountry: "CR",
  },
  geo: {
    "@type": "GeoCoordinates",
    /* Pin de la ficha verificada de Google (Maps, 31-10-2026). */
    latitude: 9.9365568,
    longitude: -84.0606924,
  },
  /* Las personas se unen a su perfil por el @id; el nodo completo vive en
     /abogados/<slug>. Aquí solo se repite lo que no puede contradecirlo. */
  founder: {
    "@type": "Person",
    "@id": "https://www.corporaciongc.com/abogados/oscar-gonzalez#person",
    name: "Óscar Eduardo González Camacho",
    honorificPrefix: "Dr.",
    url: "https://www.corporaciongc.com/abogados/oscar-gonzalez",
  },
  foundingDate: "2015",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 5 },
  employee: [
    {
      "@type": "Person",
      "@id": "https://www.corporaciongc.com/abogados/oscar-gonzalez#person",
      name: "Óscar Eduardo González Camacho",
      honorificPrefix: "Dr.",
      jobTitle: "Fundador y Director",
      url: "https://www.corporaciongc.com/abogados/oscar-gonzalez",
    },
    {
      "@type": "Person",
      "@id": "https://www.corporaciongc.com/abogados/khevin-sanchez#person",
      name: "Khevin Alberto Sánchez Zamora",
      honorificPrefix: "Lic.",
      jobTitle: "Abogado Asociado",
      url: "https://www.corporaciongc.com/abogados/khevin-sanchez",
    },
    {
      "@type": "Person",
      "@id": "https://www.corporaciongc.com/abogados/katherine-gonzalez#person",
      name: "Katherine González Coto",
      honorificPrefix: "MSc.",
      jobTitle: "Abogada Asociada",
      url: "https://www.corporaciongc.com/abogados/katherine-gonzalez",
    },
    {
      "@type": "Person",
      "@id": "https://www.corporaciongc.com/abogados/mariana-montero#person",
      name: "Mariana Montero Acuña",
      honorificPrefix: "Licda.",
      jobTitle: "Abogada Asociada",
      url: "https://www.corporaciongc.com/abogados/mariana-montero",
    },
    {
      "@type": "Person",
      "@id": "https://www.corporaciongc.com/abogados/esteban-perez#person",
      name: "Esteban Pérez Herrera",
      honorificPrefix: "Lic.",
      jobTitle: "Abogado Asociado y Notario Público",
      url: "https://www.corporaciongc.com/abogados/esteban-perez",
    },
  ],
  /* Las materias son las áreas publicadas en /areas (sin «Otras materias»),
     más el Derecho Público que las agrupa. */
  knowsAbout: ["Derecho Público", ...PRACTICE_AREA_PAGES.filter((a) => a.slug !== "otras-materias").map((a) => a.title)],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  /* Cada oferta apunta al Service de su página de área. */
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Jurídicos",
    itemListElement: PRACTICE_AREA_PAGES.filter((a) => a.slug !== "otras-materias").map((a) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        "@id": `https://www.corporaciongc.com/areas/${a.slug}#service`,
        name: a.title,
        url: `https://www.corporaciongc.com/areas/${a.slug}`,
      },
    })),
  },
  hasMap:
    "https://maps.google.com/?cid=2879986279070957327",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+50686622169",
    contactType: "customer service",
    availableLanguage: ["es"],
    areaServed: "CR",
  },
  /* sameAs afirma identidad: solo perfiles de la propia firma. Va vacío hasta
     que la página de empresa en LinkedIn esté administrada por la firma. */
};
