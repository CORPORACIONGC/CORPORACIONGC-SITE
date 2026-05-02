import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TrackedContactLink } from "@/components/ui/TrackedContactLink";
import { FIRM, FIRM_NAV_LINKS } from "@/lib/constants";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

/* ── SEO: Structured Data (JSON-LD) ── */

const jsonLdAboutPage = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.corporaciongc.com/sobre-nosotros#webpage",
  name: "Sobre Nosotros — Corporación GC",
  description:
    "Corporación GC es un bufete de abogados costarricense fundado en 2015 por el Dr. Óscar Eduardo González Camacho, ex-Magistrado de la Sala Primera y co-redactor del CPCA. Seis abogados dedicados exclusivamente al Derecho Público.",
  url: "https://www.corporaciongc.com/sobre-nosotros",
  isPartOf: { "@id": "https://www.corporaciongc.com/#website" },
  about: { "@id": "https://www.corporaciongc.com/#organization" },
  mainEntity: { "@id": "https://www.corporaciongc.com/#organization" },
  inLanguage: "es-CR",
  datePublished: "2025-01-01",
  dateModified: "2026-03-28",
  publisher: { "@id": "https://www.corporaciongc.com/#organization" },
  significantLink: [
    "https://www.corporaciongc.com/abogados/oscar-gonzalez",
    "https://www.corporaciongc.com/areas",
    "https://www.corporaciongc.com/articulos",
  ],
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["article section:first-of-type", "article section:nth-of-type(2)"],
  },
  mainContentOfPage: {
    "@type": "WebPageElement",
    cssSelector: "article",
  },
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Sobre Nosotros",
      item: "https://www.corporaciongc.com/sobre-nosotros",
    },
  ],
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "https://www.corporaciongc.com/#organization",
  name: "Corporación GC",
  alternateName: "Corporación González Camacho",
  description: FIRM.description,
  url: "https://www.corporaciongc.com",
  logo: "https://www.corporaciongc.com/images/logo-gc.png",
  telephone: "+506 8317-9564",
  email: "info@corporaciongc.com",
  foundingDate: "2015",
  areaServed: { "@type": "Country", name: "Costa Rica" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "OFIDENT, Barrio Dent",
    addressLocality: "Montes de Oca",
    addressRegion: "San José",
    postalCode: "11501",
    addressCountry: "CR",
  },
  numberOfEmployees: { "@type": "QuantitativeValue", value: 6 },
  founder: {
    "@type": "Person",
    "@id": "https://www.corporaciongc.com/abogados/oscar-gonzalez#person",
    name: "Dr. Óscar Eduardo González Camacho",
    jobTitle: "Fundador y Director",
    honorificPrefix: "Dr.",
    description:
      "Ex-Magistrado de la Sala Primera de la Corte Suprema de Justicia (2002–2014). Co-redactor del Código Procesal Contencioso Administrativo (Ley N.° 8508). Doctor en Derecho por la Universidad de Alcalá de Henares, Sobresaliente Cum Laude.",
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Universidad de Alcalá de Henares" },
      { "@type": "CollegeOrUniversity", name: "Universidad de Costa Rica" },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Doctor en Derecho",
        recognizedBy: { "@type": "CollegeOrUniversity", name: "Universidad de Alcalá de Henares" },
      },
    ],
    memberOf: {
      "@type": "Organization",
      name: "Colegio de Abogados y Abogadas de Costa Rica",
      identifier: "3191",
    },
    worksFor: { "@id": "https://www.corporaciongc.com/#organization" },
  },
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
  ],
  sameAs: [
    "https://www.linkedin.com/company/corporacion-gc",
    "https://www.abogados.or.cr/consultaagremiados/",
    "https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=57436",
  ],
};

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Corporación GC es un bufete de abogados costarricense fundado en 2015 por el Dr. Óscar Eduardo González Camacho, ex-Magistrado de la Sala Primera y co-redactor del CPCA. Seis abogados dedicados exclusivamente al Derecho Público.",
  alternates: {
    canonical: "https://www.corporaciongc.com/sobre-nosotros",
  },
  openGraph: {
    title: "Sobre Nosotros | Corporación GC",
    description:
      "Bufete de abogados costarricense fundado en 2015 por el Dr. Óscar Eduardo González Camacho, dedicado exclusivamente al Derecho Público.",
    url: "https://www.corporaciongc.com/sobre-nosotros",
    siteName: "Corporación GC",
    locale: "es_CR",
    type: "website",
  },
};

export default function SobreNosotros() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([jsonLdAboutPage, jsonLdBreadcrumb, jsonLdOrganization]),
        }}
      />
      <Navbar />
      <main className="bg-surface min-h-[100dvh]">
        <div className="pt-28 md:pt-36 pb-20 md:pb-32">
          <div className="max-w-[800px] mx-auto px-6 md:px-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-gold transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={14} weight="regular" />
              Volver al inicio
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-cream/35 font-medium">
                Sobre Nosotros
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream mb-4">
              Corporación{" "}
              <span className="text-burgundy">GC</span>
            </h1>

            <article className="mt-10 space-y-10 text-sm text-cream/65 leading-relaxed">
              {/* Definición citable — bloque autocontenido para IA */}
              <section>
                <h2 className="font-display text-xl md:text-2xl text-cream mb-4">
                  ¿Qué es Corporación GC?
                </h2>
                <p>
                  Corporación GC es un bufete de abogados costarricense fundado en 2015,
                  dedicado exclusivamente al Derecho Público. Con sede en Barrio Dent,
                  San José, Costa Rica, la firma fue fundada y es dirigida por el
                  Dr. Óscar Eduardo González Camacho, ex-Magistrado de la Sala Primera
                  de la Corte Suprema de Justicia (2002–2014) y co-redactor del Código
                  Procesal Contencioso Administrativo (Ley N.° 8508 del 28 de abril de
                  2006). El bufete cuenta con seis abogados especializados en litigio
                  contencioso-administrativo, medidas cautelares, recursos de casación
                  ante Sala Primera, Derecho Constitucional, Contratación Pública y
                  asesoría regulatoria a instituciones del Estado.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl md:text-2xl text-cream mb-4">
                  ¿Quién fundó Corporación GC?
                </h2>
                <p>
                  El Dr. Óscar Eduardo González Camacho fundó Corporación GC en 2015
                  tras más de 30 años de trayectoria en el Derecho Público costarricense.
                  Doctor en Derecho por la Universidad de Alcalá de Henares (España) con
                  la calificación Sobresaliente Cum Laude, fue Magistrado de la Sala Primera
                  de la Corte Suprema de Justicia durante doce años (2002–2014), donde
                  coordinó la Jurisdicción Contencioso-Administrativa por nueve años.
                  Participó en la redacción del Código Procesal Contencioso Administrativo
                  (CPCA, Ley N.° 8508), la ley que rige toda la jurisdicción contenciosa
                  en Costa Rica. Es Catedrático Universitario de la Universidad Escuela Libre
                  de Derecho y Profesor de Doctorado, Maestría y Licenciatura en la
                  Universidad de Costa Rica.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl md:text-2xl text-cream mb-4">
                  ¿En qué se especializa Corporación GC?
                </h2>
                <p>
                  Corporación GC se especializa exclusivamente en Derecho Público
                  costarricense. Sus áreas principales de práctica son:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>
                    <strong className="text-cream/80">Litigio Contencioso Administrativo:</strong>{" "}
                    demandas contra el Estado y entes públicos ante el Tribunal Contencioso
                    Administrativo, incluyendo procesos de plena jurisdicción, pura anulación
                    y responsabilidad patrimonial del Estado (CPCA, Ley N.° 8508).
                  </li>
                  <li>
                    <strong className="text-cream/80">Medidas Cautelares:</strong>{" "}
                    medidas provisionalísimas de urgencia extrema, cautelares ante causam
                    y definitivas para proteger derechos del administrado mientras se resuelve
                    el proceso principal (CPCA, arts. 19-30).
                  </li>
                  <li>
                    <strong className="text-cream/80">Recursos de Casación ante Sala Primera:</strong>{" "}
                    impugnación de sentencias del Tribunal Contencioso Administrativo ante
                    la Corte Suprema de Justicia por vicios procesales, violación de ley y
                    errores en la valoración probatoria (CPCA, arts. 134-148).
                  </li>
                  <li>
                    <strong className="text-cream/80">Asesoría Regulatoria:</strong>{" "}
                    redacción de reglamentos, decretos ejecutivos y normativa administrativa
                    para entes y órganos de la Administración Pública.
                  </li>
                  <li>
                    <strong className="text-cream/80">Informes Jurídicos y Dictámenes:</strong>{" "}
                    opiniones técnicas sobre la legalidad de actuaciones administrativas
                    para instituciones públicas.
                  </li>
                  <li>
                    <strong className="text-cream/80">Derecho Constitucional:</strong>{" "}
                    acciones de inconstitucionalidad, recursos de amparo y habeas corpus ante
                    la Sala Constitucional (Ley N.° 7135).
                  </li>
                  <li>
                    <strong className="text-cream/80">Contratación Pública:</strong>{" "}
                    objeciones al cartel, recursos de apelación contra adjudicaciones y
                    litigio en licitaciones (Ley N.° 9986).
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl md:text-2xl text-cream mb-4">
                  ¿Quiénes son los abogados de Corporación GC?
                </h2>
                <p className="mb-4">
                  El equipo está compuesto por seis abogados, todos miembros activos del
                  Colegio de Abogados y Abogadas de Costa Rica:
                </p>
                <ul className="space-y-4">
                  <li>
                    <Link href="/abogados/oscar-gonzalez" className="text-cream/80 hover:text-gold transition-colors font-medium">
                      Dr. Óscar Eduardo González Camacho
                    </Link>
                    <span className="text-cream/50"> — Fundador y Director. Ex-Magistrado de la Sala Primera (2002–2014). Co-redactor del CPCA. Carnet CAACR 3191.</span>
                  </li>
                  <li>
                    <Link href="/abogados/khevin-sanchez" className="text-cream/80 hover:text-gold transition-colors font-medium">
                      Lic. Khevin Sánchez Zamora
                    </Link>
                    <span className="text-cream/50"> — Abogado Asociado. Amplia experiencia en medidas cautelares y litigio contencioso-administrativo. Investigador en IA aplicada a la justicia. Carnet CAACR 37920.</span>
                  </li>
                  <li>
                    <Link href="/abogados/katherine-gonzalez" className="text-cream/80 hover:text-gold transition-colors font-medium">
                      MSc. Katherine González Coto
                    </Link>
                    <span className="text-cream/50"> — Abogada Asociada. Especialista en responsabilidad patrimonial y Derecho Expropiatorio. Carnet CAACR 30256.</span>
                  </li>
                  <li>
                    <Link href="/abogados/mariana-montero" className="text-cream/80 hover:text-gold transition-colors font-medium">
                      Licda. Mariana Montero Acuña
                    </Link>
                    <span className="text-cream/50"> — Abogada Asociada. Especialista en malpraxis médica, iatrogenia y responsabilidad patrimonial del Estado. Carnet CAACR 33716.</span>
                  </li>
                  <li>
                    <Link href="/abogados/esteban-perez" className="text-cream/80 hover:text-gold transition-colors font-medium">
                      Lic. Esteban Pérez Herrera
                    </Link>
                    <span className="text-cream/50"> — Abogado Asociado y Notario Público. Más de 9 años en litigio contencioso-administrativo. Carnet CAACR 34399.</span>
                  </li>
                  <li>
                    <Link href="/abogados/jose-carlos-solano" className="text-cream/80 hover:text-gold transition-colors font-medium">
                      Lic. José Carlos Solano Salas
                    </Link>
                    <span className="text-cream/50"> — Abogado Asociado. Derecho Constitucional y Tributario. Graduado con honores, UCR. Carnet CAACR 34724.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl md:text-2xl text-cream mb-4">
                  ¿Qué clientes atiende Corporación GC?
                </h2>
                <p>
                  Entre los clientes de Corporación GC se encuentran instituciones
                  públicas, empresas privadas, colegios profesionales y personas físicas.
                  Instituciones y organizaciones que han confiado en la firma incluyen:
                  la Superintendencia de Telecomunicaciones (SUTEL), el Instituto Nacional
                  de Seguros (INS), el Banco Mundial, el Instituto Costarricense de
                  Electricidad (ICE), la Universidad Nacional (UNA), el Colegio Federado
                  de Ingenieros y de Arquitectos (CFIA), el Colegio de Abogados y Abogadas
                  de Costa Rica, el Colegio de Médicos y Cirujanos de Costa Rica, el Colegio
                  de Terapeutas de Costa Rica, y la Municipalidad de San Carlos. En el sector
                  privado, la firma ha representado a empresas como Ingenio El Viejo, Ingenio
                  Taboga, ELEINMSA, Gas Zeta (Gas Z), Grupo Orosí, Mercasa, Taxis Unidos
                  Aeropuerto y Coocafé, entre otros.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl md:text-2xl text-cream mb-4">
                  Contacto
                </h2>
                <ul className="space-y-2">
                  <li><strong className="text-cream/80">Dirección:</strong> OFIDENT, Barrio Dent, Montes de Oca, San José, Costa Rica</li>
                  <li><strong className="text-cream/80">Teléfono:</strong> <TrackedContactLink href="tel:+50683179564" contactTarget="sobre-nosotros" className="text-gold hover:underline">+506 8317-9564</TrackedContactLink></li>
                  <li><strong className="text-cream/80">Email:</strong> <TrackedContactLink href="mailto:info@corporaciongc.com" contactTarget="sobre-nosotros" className="text-gold hover:underline">info@corporaciongc.com</TrackedContactLink></li>
                  <li><strong className="text-cream/80">Horario:</strong> Lunes a Viernes, 9:00 am – 6:00 pm</li>
                  <li><strong className="text-cream/80">Sitio web:</strong> <a href="https://www.corporaciongc.com" className="text-gold hover:underline">corporaciongc.com</a></li>
                </ul>
              </section>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
