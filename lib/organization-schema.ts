// lib/organization-schema.ts
// Fuente ÚNICA del nodo JSON-LD de la organización (@id #organization).
// Antes existían dos definiciones distintas con el MISMO @id (en app/page.tsx
// y app/sobre-nosotros/page.tsx): el home tenía los campos comerciales pero no
// las credenciales del fundador ni la lista de empleados, y sobre-nosotros al
// revés. Esta constante fusiona ambos y se inyecta idéntica en las dos páginas
// para no emitir nodos contradictorios con el mismo @id.

import { FIRM } from "./constants";

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.corporaciongc.com/#organization",
  name: "Corporación GC",
  alternateName: "Corporación González Camacho",
  description: FIRM.description,
  url: "https://www.corporaciongc.com",
  logo: "https://www.corporaciongc.com/images/logo-gc.png",
  image: "https://www.corporaciongc.com/images/logo-gc.png",
  telephone: "+506 8317-9564",
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
      "200 m norte y 25 m este del Centro Cultural Norteamericano, Barrio Dent",
    addressLocality: "San José",
    addressRegion: "San José",
    addressCountry: "CR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "9.9355",
    longitude: "-84.0512",
  },
  founder: {
    "@type": "Person",
    "@id": "https://www.corporaciongc.com/abogados/oscar-gonzalez#person",
    name: "Dr. Óscar Eduardo González Camacho",
    jobTitle: "Fundador y Director",
    honorificPrefix: "Dr.",
    description:
      "Ex-Magistrado de la Sala Primera de la Corte Suprema de Justicia (2002–2014). Co-redactor del Código Procesal Contencioso Administrativo (Ley N.° 8508). Coordinador de la Jurisdicción Contencioso-Administrativa por nueve años. Doctor en Derecho por la Universidad de Alcalá de Henares, Sobresaliente Cum Laude.",
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Universidad de Alcalá de Henares" },
      { "@type": "CollegeOrUniversity", name: "Universidad de Costa Rica" },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Doctor en Derecho",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Universidad de Alcalá de Henares",
        },
      },
    ],
    memberOf: {
      "@type": "Organization",
      name: "Colegio de Abogados y Abogadas de Costa Rica",
      identifier: "3191",
    },
    knowsAbout: [
      "Derecho Administrativo",
      "Contencioso Administrativo",
      "Derecho Constitucional",
      "Derecho Público",
    ],
    worksFor: { "@id": "https://www.corporaciongc.com/#organization" },
  },
  foundingDate: "2015",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 6 },
  employee: [
    {
      "@type": "Person",
      name: "Lic. Khevin Sánchez Zamora",
      jobTitle: "Abogado Asociado",
      url: "https://www.corporaciongc.com/abogados/khevin-sanchez",
      memberOf: { "@type": "Organization", name: "Colegio de Abogados y Abogadas de Costa Rica", identifier: "37920" },
    },
    {
      "@type": "Person",
      name: "MSc. Katherine González Coto",
      jobTitle: "Abogada Asociada",
      url: "https://www.corporaciongc.com/abogados/katherine-gonzalez",
      memberOf: { "@type": "Organization", name: "Colegio de Abogados y Abogadas de Costa Rica", identifier: "30256" },
    },
    {
      "@type": "Person",
      name: "Licda. Mariana Montero Acuña",
      jobTitle: "Abogada Asociada",
      url: "https://www.corporaciongc.com/abogados/mariana-montero",
      memberOf: { "@type": "Organization", name: "Colegio de Abogados y Abogadas de Costa Rica", identifier: "33716" },
    },
    {
      "@type": "Person",
      name: "Lic. Esteban Pérez Herrera",
      jobTitle: "Abogado Asociado y Notario Público",
      url: "https://www.corporaciongc.com/abogados/esteban-perez",
      memberOf: { "@type": "Organization", name: "Colegio de Abogados y Abogadas de Costa Rica", identifier: "34399" },
    },
    {
      "@type": "Person",
      name: "Lic. José Carlos Solano Salas",
      jobTitle: "Abogado Asociado",
      url: "https://www.corporaciongc.com/abogados/jose-carlos-solano",
      memberOf: { "@type": "Organization", name: "Colegio de Abogados y Abogadas de Costa Rica", identifier: "34724" },
    },
  ],
  knowsAbout: [
    "Derecho Administrativo",
    "Contencioso Administrativo",
    "Derecho Constitucional",
    "Contratación Pública",
    "Derecho Público",
    "Derecho Inmobiliario",
    "Derecho Corporativo",
    "Derecho Tributario",
    "Derecho Ambiental",
    "Derecho Laboral",
    "Propiedad Intelectual",
    "Derecho Civil",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Jurídicos",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Litigio Contencioso-Administrativo",
          description:
            "Representación ante el Tribunal Contencioso Administrativo, Sala Primera y Sala Constitucional.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Derecho Constitucional",
          description:
            "Recursos de amparo, acciones de inconstitucionalidad y habeas corpus.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Contratación Pública",
          description:
            "Asesoría y litigio en licitaciones, concursos públicos y contratos administrativos.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Derecho Administrativo",
          description:
            "Defensa y asesoría en procedimientos ante la Administración Pública.",
        },
      },
    ],
  },
  hasMap:
    "https://maps.google.com/?q=Centro+Cultural+Norteamericano,+Barrio+Dent,+San+Jos%C3%A9,+Costa+Rica",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+506 8317-9564",
    contactType: "customer service",
    availableLanguage: ["es"],
    areaServed: "CR",
  },
  sameAs: [
    "https://www.linkedin.com/company/corporacion-gc",
    "https://www.abogados.or.cr/consultaagremiados/",
    "https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=57436",
  ],
};
