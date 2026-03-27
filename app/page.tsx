import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FirmHero } from "@/components/sections/FirmHero";
import { Credentials } from "@/components/sections/Credentials";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { FirmAbout } from "@/components/sections/FirmAbout";
import { TeamSection } from "@/components/sections/TeamSection";
import { FirmPracticeAreas } from "@/components/sections/FirmPracticeAreas";
import { Publications } from "@/components/sections/Publications";
import { FirmContact } from "@/components/sections/FirmContact";
import { getAllArticles } from "@/lib/articles";
import { FIRM, FIRM_CREDENTIALS } from "@/lib/constants";

/* ── SEO: Page-level metadata ── */

export const metadata: Metadata = {
  title: FIRM.title,
  description: FIRM.description,
  keywords: [
    "abogados Costa Rica",
    "Derecho Público",
    "litigio contencioso-administrativo",
    "Derecho Administrativo",
    "Derecho Constitucional",
    "Contratación Pública",
    "bufete abogados San José",
    "Corporación GC",
    "Óscar González Camacho",
    "Sala Primera",
    "Tribunal Contencioso Administrativo",
    "Sala Constitucional",
    "recurso de amparo",
    "acción de inconstitucionalidad",
  ],
  alternates: {
    canonical: FIRM.url,
  },
  openGraph: {
    title: "Abogados Derecho Administrativo y Contencioso Administrativo · Costa Rica | Corporación GC",
    description: FIRM.description,
    url: FIRM.url,
    siteName: FIRM.name,
    locale: FIRM.locale,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Corporación GC — Abogados Especialistas en Derecho Público en Costa Rica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporación GC | Derecho Público",
    description: FIRM.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ── SEO: Structured Data (JSON-LD) ── */

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.corporaciongc.com/#organization",
  name: "Corporaci\u00f3n GC",
  alternateName: "Corporaci\u00f3n Gonz\u00e1lez Camacho",
  description: FIRM.description,
  url: "https://www.corporaciongc.com",
  logo: "https://www.corporaciongc.com/images/logo-gc.png",
  image: "https://www.corporaciongc.com/images/logo-gc.png",
  telephone: "+506 8317-9564",
  email: "info@corporaciongc.com",
  priceRange: "$$",
  currenciesAccepted: "CRC, USD",
  areaServed: {
    "@type": "Country",
    name: "Costa Rica",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "OFIDENT, Barrio Dent",
    addressLocality: "Montes de Oca",
    addressRegion: "San Jos\u00e9",
    postalCode: "11501",
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
    name: "Dr. \u00d3scar Gonz\u00e1lez Camacho",
    jobTitle: "Fundador y Director",
    description:
      "Ex-Magistrado de la Sala Primera de la Corte Suprema de Justicia (2002\u20132014). Co-redactor del C\u00f3digo Procesal Contencioso Administrativo (Ley N.\u00b0 8508). Coordinador de la Jurisdicci\u00f3n Contencioso-Administrativa por nueve a\u00f1os. Doctor en Derecho por la Universidad de Alcal\u00e1 de Henares, Sobresaliente Cum Laude.",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Universidad de Alcal\u00e1 de Henares",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Universidad de Costa Rica",
      },
    ],
    knowsAbout: [
      "Derecho Administrativo",
      "Contencioso Administrativo",
      "Derecho Constitucional",
      "Derecho P\u00fablico",
    ],
    worksFor: { "@id": "https://www.corporaciongc.com/#organization" },
  },
  foundingDate: "2015",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 6,
  },
  knowsAbout: [
    "Derecho Administrativo",
    "Contencioso Administrativo",
    "Derecho Constitucional",
    "Contrataci\u00f3n P\u00fablica",
    "Derecho P\u00fablico",
    "Derecho Inmobiliario",
    "Derecho Corporativo",
    "Derecho Tributario",
    "Derecho Ambiental",
    "Derecho Laboral",
    "Propiedad Intelectual",
    "Derecho Civil",
  ],
  knowsLanguage: ["es", "en", "fr", "de", "it"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Jur\u00eddicos",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Litigio Contencioso-Administrativo",
          description:
            "Representaci\u00f3n ante el Tribunal Contencioso Administrativo, Sala Primera y Sala Constitucional.",
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
          name: "Contrataci\u00f3n P\u00fablica",
          description:
            "Asesor\u00eda y litigio en licitaciones, concursos p\u00fablicos y contratos administrativos.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Derecho Administrativo",
          description:
            "Defensa y asesor\u00eda en procedimientos ante la Administraci\u00f3n P\u00fablica.",
        },
      },
    ],
  },
  hasMap: "https://maps.google.com/?q=Ofident,+Barrio+Dent,+Montes+de+Oca,+San+Jos%C3%A9,+Costa+Rica",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+506 8317-9564",
    contactType: "customer service",
    availableLanguage: ["es"],
    areaServed: "CR",
  },
  sameAs: [
    "https://www.linkedin.com/company/corporacion-gc",
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.corporaciongc.com/#website",
  name: "Corporaci\u00f3n GC \u2014 Abogados Especialistas en Derecho P\u00fablico",
  url: "https://www.corporaciongc.com",
  publisher: { "@id": "https://www.corporaciongc.com/#organization" },
  inLanguage: "es-CR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.google.com/search?q=site%3Acorporaciongc.com+{search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

/* ── SEO: SiteNavigationElement (sitelinks hint) ── */

const jsonLdSiteNavigation = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://www.corporaciongc.com/#site-navigation",
  name: "Navegación principal",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "Áreas de Práctica",
      description: "22 áreas de práctica en Derecho Público y Administrativo",
      url: "https://www.corporaciongc.com/areas",
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Dr. Óscar Eduardo González Camacho",
      description: "Fundador y Director — Ex-Magistrado, co-redactor del CPCA",
      url: "https://www.corporaciongc.com/abogados/oscar-gonzalez",
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "MSc. Katherine González Coto",
      description: "Abogada Asociada — Maestría en Derecho Público, UCR",
      url: "https://www.corporaciongc.com/abogados/katherine-gonzalez",
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Lic. Khevin Sánchez Zamora",
      description: "Abogado Asociado — Especialista en medidas cautelares y litigio contencioso-administrativo",
      url: "https://www.corporaciongc.com/abogados/khevin-sanchez",
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "Licda. Mariana Montero Acuña",
      description: "Abogada Asociada — Especialista en malpraxis médica e iatrogenia",
      url: "https://www.corporaciongc.com/abogados/mariana-montero",
    },
    {
      "@type": "SiteNavigationElement",
      position: 6,
      name: "Lic. Esteban Pérez Herrera",
      description: "Abogado Asociado — Más de 9 años de litigio contencioso-administrativo",
      url: "https://www.corporaciongc.com/abogados/esteban-perez",
    },
    {
      "@type": "SiteNavigationElement",
      position: 7,
      name: "Lic. José Carlos Solano Salas",
      description: "Abogado Asociado — Especialista en Derecho Constitucional y Tributario",
      url: "https://www.corporaciongc.com/abogados/jose-carlos-solano",
    },
    {
      "@type": "SiteNavigationElement",
      position: 8,
      name: "Publicaciones Académicas",
      description: "Artículos, tesis y publicaciones en Derecho Público",
      url: "https://www.corporaciongc.com/articulos",
    },
    {
      "@type": "SiteNavigationElement",
      position: 9,
      name: "Sobre Nosotros",
      description: "Bufete fundado en 2015 por el Dr. González Camacho",
      url: "https://www.corporaciongc.com/sobre-nosotros",
    },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://www.corporaciongc.com",
    },
  ],
};

export default function Home() {
  const articles = getAllArticles().map((a) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    date: a.date,
    type: a.type,
    tags: [...a.tags],
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            jsonLdOrganization,
            jsonLdWebSite,
            jsonLdBreadcrumb,
            jsonLdSiteNavigation,
          ]),
        }}
      />
      <Navbar />
      <main>
        <FirmHero />
        <ClientLogos />
        <FirmAbout />
        <TeamSection />
        <FirmPracticeAreas />
        <Publications articles={articles} />
        <FirmContact />
      </main>
      <Footer />
    </>
  );
}
