import type { Metadata } from "next";
import { ORGANIZATION_SCHEMA } from "@/lib/organization-schema";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FirmHero } from "@/components/sections/FirmHero";
import { Credentials } from "@/components/sections/Credentials";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { FirmAbout } from "@/components/sections/FirmAbout";
import { TeamSection } from "@/components/sections/TeamSection";
import { FirmPracticeAreas } from "@/components/sections/FirmPracticeAreas";
import { Publications } from "@/components/sections/Publications";
import { JurisprudenciaDestacada } from "@/components/sections/JurisprudenciaDestacada";
import { FirmContact } from "@/components/sections/FirmContact";
import { getAllArticles } from "@/lib/articles";
import { FIRM, FIRM_CREDENTIALS } from "@/lib/constants";
import { homeMetadata } from "@/lib/page-metadata";

/* ── SEO: Page-level metadata ── */

export const metadata: Metadata = {
  ...homeMetadata,
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

const jsonLdOrganization = ORGANIZATION_SCHEMA;

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
      description: "Abogado Asociado — Amplia experiencia en medidas cautelares y litigio contencioso-administrativo",
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
        <JurisprudenciaDestacada variant="home" />
        <Publications articles={articles} />
        <FirmContact />
      </main>
      <Footer />
    </>
  );
}
