import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { ORGANIZATION_SCHEMA } from "@/lib/organization-schema";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TrackedContactLink } from "@/components/ui/TrackedContactLink";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Membrete } from "@/components/ui/Membrete";
import { CLIENTES, tamanoOptico } from "@/lib/constants";
import { sobreNosotrosMetadata } from "@/lib/page-metadata";

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
  dateModified: "2026-09-19",
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

const jsonLdOrganization = ORGANIZATION_SCHEMA;

export const metadata: Metadata = {
  ...sobreNosotrosMetadata,
  alternates: {
    canonical: "https://www.corporaciongc.com/sobre-nosotros",
  },
};

/* ── Contenido ──
   La página se lee como un documento de la oficina: membrete arriba, regla
   dorada, ficha de datos como la de los dictámenes y apartados numerados con
   su índice al margen. Cada apartado conserva su pregunta como título: son
   bloques autocontenidos que los buscadores y los asistentes citan. */

const SECCIONES = [
  { id: "la-firma", n: "I", label: "La firma" },
  { id: "fundador", n: "II", label: "El fundador" },
  { id: "especialidad", n: "III", label: "Especialidad" },
  { id: "abogados", n: "IV", label: "Los abogados" },
  { id: "clientes", n: "V", label: "Clientes" },
  { id: "contacto", n: "VI", label: "Contacto" },
] as const;

const FICHA: [string, string][] = [
  ["Fundación", "2015"],
  ["Sede", "Barrio Dent, San José, Costa Rica"],
  ["Dirección", "Dr. Óscar Eduardo González Camacho"],
  ["Práctica", "Exclusivamente Derecho Público"],
  ["Equipo", "Seis abogados, miembros activos del Colegio de Abogados y Abogadas de Costa Rica"],
];

const AREAS = [
  {
    title: "Litigio Contencioso Administrativo",
    href: "/areas/litigio-contencioso-administrativo",
    desc: "Demandas contra el Estado y entes públicos ante el Tribunal Contencioso Administrativo, incluyendo procesos de plena jurisdicción, pura anulación y responsabilidad patrimonial del Estado (CPCA, Ley N.° 8508).",
  },
  {
    title: "Medidas Cautelares",
    href: "/areas/medidas-cautelares",
    desc: "Medidas provisionalísimas de urgencia extrema, cautelares ante causam y definitivas para proteger derechos del administrado mientras se resuelve el proceso principal (CPCA, arts. 19-30).",
  },
  {
    title: "Recursos de Casación ante Sala Primera",
    href: "/areas/casacion-sala-primera",
    desc: "Impugnación de sentencias del Tribunal Contencioso Administrativo ante la Corte Suprema de Justicia por vicios procesales, violación de ley y errores en la valoración probatoria (CPCA, arts. 134-148).",
  },
  {
    title: "Asesoría Regulatoria",
    href: "/areas/asesoria-regulatoria",
    desc: "Redacción de reglamentos, decretos ejecutivos y normativa administrativa para entes y órganos de la Administración Pública.",
  },
  {
    title: "Informes Jurídicos y Dictámenes",
    href: "/areas/informes-juridicos-dictamenes",
    desc: "Opiniones técnicas sobre la legalidad de actuaciones administrativas para instituciones públicas.",
  },
  {
    title: "Derecho Constitucional",
    href: "/areas/acciones-de-inconstitucionalidad",
    desc: "Acciones de inconstitucionalidad, recursos de amparo y habeas corpus ante la Sala Constitucional (Ley N.° 7135).",
  },
  {
    title: "Contratación Pública",
    href: "/areas/contratacion-publica",
    desc: "Objeciones al cartel, recursos de apelación contra adjudicaciones y litigio en licitaciones (Ley N.° 9986).",
  },
];

/* El fundador primero; después, el orden por apellido de la portada. Los
   retratos comparten escala de rostro y línea de ojos (public/images/equipo). */
const ABOGADOS = [
  {
    slug: "oscar-gonzalez",
    portrait: "/images/equipo/oscar-gonzalez-oficina.jpg",
    name: "Dr. Óscar Eduardo González Camacho",
    role: "Fundador y Director",
    desc: "Ex-Magistrado de la Sala Primera (2002–2014). Co-redactor del CPCA.",
    carnet: "3191",
  },
  {
    slug: "katherine-gonzalez",
    name: "MSc. Katherine González Coto",
    role: "Abogada Asociada",
    desc: "Especialista en responsabilidad patrimonial y Derecho Expropiatorio.",
    carnet: "30256",
  },
  {
    slug: "mariana-montero",
    name: "Licda. Mariana Montero Acuña",
    role: "Abogada Asociada",
    desc: "Especialista en malpraxis médica, iatrogenia y responsabilidad patrimonial del Estado.",
    carnet: "33716",
  },
  {
    slug: "esteban-perez",
    name: "Lic. Esteban Pérez Herrera",
    role: "Abogado Asociado y Notario Público",
    desc: "Más de 9 años en litigio contencioso-administrativo.",
    carnet: "34399",
  },
  {
    slug: "khevin-sanchez",
    name: "Lic. Khevin Alberto Sánchez Zamora",
    role: "Abogado Asociado",
    desc: "Amplia experiencia en medidas cautelares y litigio contencioso-administrativo. Investigador en IA aplicada a la justicia.",
    carnet: "37920",
  },
  {
    slug: "jose-carlos-solano",
    name: "Lic. José Carlos Solano Salas",
    role: "Abogado Asociado",
    desc: "Derecho Constitucional y Tributario. Graduado con honores, UCR.",
    carnet: "34724",
  },
];

const HONORIFIC = /^(Dra?\.|Lic(?:da)?\.|MSc\.)\s+/;

function splitName(name: string) {
  const match = name.match(HONORIFIC);
  return match
    ? { honorific: match[1], rest: name.slice(match[0].length) }
    : { honorific: null, rest: name };
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="type-title mb-8 border-b border-cream/10 pb-5 text-cream md:mb-10 md:pb-6">
      {children}
    </h2>
  );
}

const linkClass =
  "text-burgundy underline decoration-burgundy/30 underline-offset-4 transition-colors hover:decoration-burgundy dark:text-gold dark:decoration-gold/40 dark:hover:decoration-gold";

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
      <main className="min-h-[100dvh] bg-surface">
        {/* ── Membrete ── */}
        <header className="pt-28 md:pt-36">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-cream/65 transition-colors duration-300 hover:text-burgundy dark:hover:text-gold"
            >
              <ArrowLeft size={14} weight="regular" />
              Volver al inicio
            </Link>

            <div className="mt-12 flex justify-center md:mt-16">
              <Membrete
                as="h1"
                srSuffix="Abogados especialistas en Derecho Administrativo y Contencioso Administrativo en Costa Rica"
              />
            </div>

            {/* Regla dorada, como la que abre los dictámenes */}
            <div aria-hidden="true" className="mx-auto mt-12 h-px max-w-[880px] bg-gold/60 md:mt-14" />

            <p className="type-headline mx-auto mt-12 max-w-[20ch] text-center text-cream md:mt-16">
              Un bufete dedicado exclusivamente al Derecho P&uacute;blico
            </p>
            <p className="type-lead mx-auto mt-6 max-w-[58ch] text-center text-cream/75">
              Fundado en 2015 y dirigido por el Dr. &Oacute;scar Eduardo Gonz&aacute;lez
              Camacho, ex-Magistrado de la Sala Primera de la Corte Suprema de Justicia y
              co-redactor del C&oacute;digo Procesal Contencioso Administrativo.
            </p>

            {/* Ficha de la firma, con el formato de la tabla de datos de los dictámenes */}
            <dl className="mx-auto mt-14 max-w-[880px] divide-y divide-cream/10 border-y border-cream/10 md:mt-20">
              {FICHA.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-8 md:py-5"
                >
                  <dt className="type-label pt-1 text-cream/65">{label}</dt>
                  <dd className="text-base leading-relaxed text-cream/85">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        {/* ── Apartados con índice al margen ── */}
        <div className="mx-auto mt-20 max-w-[1100px] px-6 pb-24 md:mt-28 md:px-10 md:pb-32 lg:grid lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-16">
          <nav aria-label="Contenido de la página" className="hidden lg:block">
            <div className="sticky top-32">
              <p className="type-label mb-5 text-cream/65">Contenido</p>
              <ol className="space-y-1 border-l border-cream/10">
                {SECCIONES.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px flex gap-3 border-l border-transparent py-1.5 pl-4 text-sm text-cream/70 transition-colors duration-300 hover:border-burgundy hover:text-cream dark:hover:border-gold"
                    >
                      <span className="w-6 shrink-0 tabular-nums text-cream/65">{s.n}</span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="min-w-0 space-y-24 md:space-y-32">
            {/* I · Definición citable — bloque autocontenido para IA */}
            <section id="la-firma" className="scroll-mt-32">
              <SectionTitle>¿Qué es Corporación GC?</SectionTitle>
              <p className="type-lead max-w-[64ch] text-cream/80">
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

            {/* II · El fundador */}
            <section id="fundador" className="scroll-mt-32">
              <SectionTitle>¿Quién fundó Corporación GC?</SectionTitle>
              {/* La misma foto del hero de la portada, a lo ancho y en su
                  proporción original (3:2). */}
              <figure className="mb-10 md:mb-12">
                <div className="relative aspect-[3/2] overflow-hidden bg-cream/[0.04]">
                  <Image
                    src="/images/oscar-gonzalez-oficina.png"
                    alt="Dr. Óscar Eduardo González Camacho, fundador y director de Corporación GC"
                    fill
                    sizes="(min-width: 1100px) 760px, 100vw"
                    className="object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.06] dark:ring-white/[0.06]"
                  />
                </div>
                <figcaption className="mt-3 text-[13px] leading-snug text-cream/65">
                  Dr. Óscar Eduardo González Camacho, fundador y director de Corporación GC.
                </figcaption>
              </figure>
              <div>
                <p className="type-lead max-w-[62ch] text-cream/80">
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
                <Link
                  href="/abogados/oscar-gonzalez"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-burgundy transition-colors hover:text-burgundy-light dark:text-gold dark:hover:text-gold-light"
                >
                  Ver su trayectoria completa
                  <ArrowRight
                    size={14}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </section>

            {/* III · Especialidad */}
            <section id="especialidad" className="scroll-mt-32">
              <SectionTitle>¿En qué se especializa Corporación GC?</SectionTitle>
              <p className="type-lead max-w-[64ch] text-cream/80">
                Corporación GC se especializa exclusivamente en Derecho Público
                costarricense. Sus áreas principales de práctica son:
              </p>
              <dl className="mt-10 divide-y divide-cream/10 border-y border-cream/10">
                {AREAS.map((area) => (
                  <div
                    key={area.title}
                    className="group relative grid gap-2 py-6 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-10"
                  >
                    <dt className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-cream transition-colors duration-300 group-hover:text-burgundy dark:group-hover:text-gold">
                      <Link href={area.href} className="after:absolute after:inset-0">
                        {area.title}
                      </Link>
                    </dt>
                    <dd className="text-base leading-relaxed text-cream/75">
                      {area.desc}
                    </dd>
                  </div>
                ))}
              </dl>
              <Link
                href="/areas"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-burgundy transition-colors hover:text-burgundy-light dark:text-gold dark:hover:text-gold-light"
              >
                Ver todas las áreas de práctica
                <ArrowRight
                  size={14}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            </section>

            {/* IV · Los abogados */}
            <section id="abogados" className="scroll-mt-32">
              <SectionTitle>¿Quiénes son los abogados de Corporación GC?</SectionTitle>
              <p className="type-lead max-w-[64ch] text-cream/80">
                El equipo está compuesto por seis abogados, todos miembros activos del
                Colegio de Abogados y Abogadas de Costa Rica.
              </p>
              <ul
                role="list"
                className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 xl:grid-cols-3"
              >
                {ABOGADOS.map((a) => {
                  const { honorific, rest } = splitName(a.name);
                  return (
                    <li key={a.slug}>
                      <Link href={`/abogados/${a.slug}`} className="group block outline-none">
                        <div className="relative aspect-[4/5] overflow-hidden bg-cream/[0.04] outline-offset-4 outline-gold group-focus-visible:outline-2">
                          <Image
                            src={"portrait" in a && a.portrait ? a.portrait : `/images/equipo/${a.slug}.jpg`}
                            alt={`Retrato de ${a.name}`}
                            fill
                            sizes="(min-width: 1280px) 240px, (min-width: 640px) 34vw, 45vw"
                            className="object-cover saturate-[0.9] transition-[filter] duration-500 ease-out group-hover:saturate-100 group-focus-visible:saturate-100"
                          />
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.06] dark:ring-white/[0.06]"
                          />
                        </div>
                        <div className="mt-5 border-t border-cream/10 pt-4 transition-colors duration-300 group-hover:border-burgundy/60 dark:group-hover:border-gold/60">
                          <h3 className="text-base font-semibold leading-[1.3] tracking-[-0.01em] text-cream text-balance transition-colors duration-300 group-hover:text-burgundy sm:text-[17px] dark:group-hover:text-gold">
                            {honorific && (
                              <span className="font-normal text-cream/65">{honorific} </span>
                            )}
                            {rest}
                          </h3>
                          <p className="mt-1 text-[13px] leading-snug text-cream/65">{a.role}</p>
                          <p className="mt-3 text-[13px] leading-relaxed text-cream/75 sm:text-[14px]">
                            {a.desc}
                          </p>
                          <p className="mt-3 text-[13px] tabular-nums text-cream/65">
                            Carnet CAACR {a.carnet}
                          </p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* V · Clientes */}
            <section id="clientes" className="scroll-mt-32">
              <SectionTitle>¿Qué clientes atiende Corporación GC?</SectionTitle>
              <p className="type-lead max-w-[64ch] text-cream/80">
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
              {/* Los logos se recortaron a su contenido y tamanoOptico() los
                  iguala en peso visual, como en la cinta de la portada. En
                  filas centradas la última nunca queda coja. */}
              <div className="mt-12 rounded-xl bg-[#3A0B1F] px-4 py-10 md:px-8 md:py-14">
                <ul
                  role="list"
                  aria-label="Clientes que han confiado en Corporación GC"
                  className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8"
                >
                  {CLIENTES.map((c) => {
                    const t = tamanoOptico(c.ratio, c.densidad, 48);
                    return (
                      <li
                        key={c.name}
                        className="flex h-16 w-[132px] items-center justify-center md:h-20 md:w-[150px]"
                        title={c.name}
                      >
                        <Image
                          src={c.src}
                          alt={c.name}
                          width={t.width * 2}
                          height={t.height * 2}
                          className="opacity-85 mix-blend-screen"
                          style={{ width: t.width, height: t.height }}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>

            {/* VI · Contacto */}
            <section id="contacto" className="scroll-mt-32">
              <SectionTitle>Contacto</SectionTitle>
              <dl className="divide-y divide-cream/10 border-y border-cream/10">
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-8">
                  <dt className="type-label pt-1 text-cream/65">Dirección</dt>
                  <dd className="text-base leading-relaxed text-cream/85">
                    200 m norte y 25 m este del Centro Cultural Norteamericano, Barrio Dent,
                    San José, Costa Rica
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-8">
                  <dt className="type-label pt-1 text-cream/65">Teléfono</dt>
                  <dd className="text-base">
                    <TrackedContactLink href="tel:+50686622169" contactTarget="sobre-nosotros" className={linkClass}>
                      +506 8662-2169
                    </TrackedContactLink>
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-8">
                  <dt className="type-label pt-1 text-cream/65">Correo</dt>
                  <dd className="text-base">
                    <TrackedContactLink href="mailto:info@corporaciongc.com" contactTarget="sobre-nosotros" className={linkClass}>
                      info@corporaciongc.com
                    </TrackedContactLink>
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-8">
                  <dt className="type-label pt-1 text-cream/65">Horario</dt>
                  <dd className="text-base leading-relaxed text-cream/85">
                    Lunes a Viernes, 9:00 am – 6:00 pm
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-8">
                  <dt className="type-label pt-1 text-cream/65">Sitio web</dt>
                  <dd className="text-base">
                    <a href="https://www.corporaciongc.com" className={linkClass}>
                      corporaciongc.com
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-10">
                <MagneticButton href="/contacto" variant="primary">
                  Agendar consulta
                </MagneticButton>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
