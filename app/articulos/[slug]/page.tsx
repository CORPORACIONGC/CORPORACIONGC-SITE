import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import {
  getAllArticles,
  getArticleBySlug,
  formatDate,
  publicationTypeLabel,
} from "@/lib/articles";
import { TEAM, FIRM_CONTACT } from "@/lib/constants";
import { ATTORNEYS } from "@/lib/seo-constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PDFViewer } from "@/components/article/PDFViewer";
import { WhatsAppFloat } from "@/components/article/WhatsAppFloat";
import { TrackedContactLink } from "@/components/ui/TrackedContactLink";
import { ComparativaViasAmparo } from "@/components/article/ComparativaViasAmparo";
import { CodigoCPCA } from "@/components/article/CodigoCPCA";
import { ReglamentoContratacion } from "@/components/article/ReglamentoContratacion";
import { ComparativaRecursosContratacion } from "@/components/article/ComparativaRecursosContratacion";
import { ReformaCpca } from "@/components/article/ReformaCpca";
import { CapacitacionEleinmsa } from "@/components/article/CapacitacionEleinmsa";
import {
  MapaRecursosLgap,
  PlazoTresDiasLgap,
  FlujoApelacionSubsidio,
  ComparativaRecursosLgap,
  MateriasEspecialesRecursos,
  NulidadAbsolutaRelativa,
  BibliografiaRecursosLgap,
} from "@/components/article/RecursosLgap";
import {
  FalloSalaApp,
  RutaLegislativaApp,
  RegimenProyectosApp,
  FuentesLeyMarcoApp,
} from "@/components/article/LeyMarcoApp";
import {
  ProcedimientoDespido10159,
  PlazosDespido10159,
  PreguntasExpedienteDespido,
  CasosTeletrabajoTribunales,
  FuentesDespidoTeletrabajo,
} from "@/components/article/DespidoTeletrabajo";
import {
  ArrowLeft,
  ArrowsClockwise,
  CalendarBlank,
  Tag,
  BookOpen,
  ArrowSquareOut,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { buildArticleMetadata } from "@/lib/page-metadata";
import { getSentenciasPorTemas } from "@/lib/jurisprudencia";
import { SentenciasRelacionadas } from "@/components/jurisprudencia/SentenciasRelacionadas";

/* Credencial mostrada bajo el byline cuando el "autor" es la firma misma
   (artículos institucionales). Refleja la autoridad del director del bufete
   sin alterar la voz editorial corporativa del artículo. */
const ORG_AUTHOR_CREDENTIAL =
  "Bufete dirigido por el Dr. Óscar Eduardo González Camacho · Co-redactor del Código Procesal Contencioso Administrativo (Ley N.° 8508) y ex-Magistrado de la Sala Primera de la Corte Suprema (2002–2014).";

/* Textos de la plantilla según el idioma del artículo (campo `lang` del
   frontmatter): las guías en inglés se leen con la interfaz en inglés. */
const UI = {
  es: {
    back: "Todas las publicaciones",
    backBottom: "Volver a publicaciones",
    by: "Por",
    publishedIn: "Publicado en: ",
    translation: "Read this guide in English",
    ctaKicker: "Atención directa",
    ctaTitle: "¿Enfrenta un caso relacionado con este tema?",
    ctaText:
      "Escríbanos por WhatsApp para una respuesta rápida y directa. Converse con nuestro equipo y reciba una orientación inicial de su situación.",
    ctaButton: "Escribir por WhatsApp",
    aboutOne: "Sobre el autor",
    aboutMany: "Sobre los autores",
    updated: "Revisado el",
    profile: "Ver perfil completo",
    whatsapp: (topic: string) =>
      `Hola, leí su artículo "${topic}" en el sitio y quisiera una consulta.`,
  },
  en: {
    back: "All publications",
    backBottom: "Back to publications",
    by: "By",
    publishedIn: "Published in: ",
    translation: "Leer esta guía en español",
    ctaKicker: "Direct assistance",
    ctaTitle: "Facing a matter related to this topic?",
    ctaText:
      "Message us on WhatsApp for a quick, direct answer. Talk to our team and get an initial assessment of your situation.",
    ctaButton: "Message us on WhatsApp",
    aboutOne: "About the author",
    aboutMany: "About the authors",
    updated: "Reviewed on",
    profile: "View full profile",
    whatsapp: (topic: string) =>
      `Hello, I read your article "${topic}" on your website and would like a consultation.`,
  },
};

/* Componentes que los artículos en Markdown pueden insertar como etiquetas
   (<ReformaCpca />, <MapaRecursosLgap />, etc.). */
const ARTICLE_COMPONENTS = {
  ComparativaViasAmparo,
  CodigoCPCA,
  ReglamentoContratacion,
  ComparativaRecursosContratacion,
  ReformaCpca,
  CapacitacionEleinmsa,
  MapaRecursosLgap,
  PlazoTresDiasLgap,
  FlujoApelacionSubsidio,
  ComparativaRecursosLgap,
  MateriasEspecialesRecursos,
  NulidadAbsolutaRelativa,
  BibliografiaRecursosLgap,
  FalloSalaApp,
  RutaLegislativaApp,
  RegimenProyectosApp,
  FuentesLeyMarcoApp,
  ProcedimientoDespido10159,
  PlazosDespido10159,
  PreguntasExpedienteDespido,
  CasosTeletrabajoTribunales,
  FuentesDespidoTeletrabajo,
};

// Slugs inexistentes devuelven un 404 real (no un soft-404 con estado 200),
// evitando que Google los archive como "rastreada, sin indexar".
export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const base = buildArticleMetadata(
    article
      ? {
          title: article.title,
          excerpt: article.excerpt,
          author: article.author ?? "Corporación GC",
          date: article.date,
          seoTitle: article.seoTitle,
          seoDescription: article.seoDescription,
        }
      : null,
    slug
  );
  const url = `https://www.corporaciongc.com/articulos/${slug}`;
  const lang = article?.lang ?? "es";
  /* Guías con versión en el otro idioma: hreflang recíproco y x-default
     hacia la versión en español. */
  const translationUrl = article?.translation
    ? `https://www.corporaciongc.com/articulos/${article.translation}`
    : null;
  const languages = translationUrl
    ? lang === "en"
      ? { es: translationUrl, en: url, "x-default": translationUrl }
      : { es: url, en: translationUrl, "x-default": url }
    : undefined;
  return {
    ...base,
    ...(lang === "en" || translationUrl
      ? {
          openGraph: {
            ...base.openGraph,
            locale: lang === "en" ? "en_US" : "es_CR",
            ...(translationUrl ? { alternateLocale: [lang === "en" ? "es_CR" : "en_US"] } : {}),
          },
        }
      : {}),
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const isPdf = article.type === "pdf" && article.pdfFile;
  const lang = article.lang ?? "es";
  const t = UI[lang];

  /* Mensaje de WhatsApp con el tema del artículo, para que el contacto llegue
     ya en contexto. Toma la parte del título antes de ":", "·" o "|". */
  const articleTopic = article.title.split(/[:·|]/)[0].trim();
  const whatsappArticleMessage = t.whatsapp(articleTopic);
  const whatsappUrl = `https://wa.me/${FIRM_CONTACT.phoneRaw}?text=${encodeURIComponent(whatsappArticleMessage)}`;

  /* Contacto por WhatsApp en artículos:
     - Botón flotante (WhatsAppFloat): en TODOS los artículos.
     - Bloque CTA "Atención directa": SOLO en guías y artículos comerciales,
       que son los de contenido propio (type: "article"). Las piezas
       académicas (type: "pdf": tesis, libros, papers) no lo muestran para no
       restarles seriedad.
     Regla para el futuro: toda guía o artículo comercial se publica como
     Markdown (type "article"), por lo que el bloque aparece automáticamente
     al agregarla; no hay que recordar añadirlo. */
  const showCommercialCta = !isPdf;

  /* Find matching team members for author bio (supports multiple coauthors) */
  const authorMembers = article.author
    ? TEAM.filter((m) =>
        article.author!.toLowerCase().includes(m.name.replace(/^(Dr\.\s|Lic\.\s|Licda\.\s|MSc\.\s)/, "").split(" ")[0].toLowerCase())
      )
    : [];
  const authorMember = authorMembers[0] ?? null;

  /* Detecta si el "autor" del frontmatter es la firma misma (voz institucional)
     en vez de una persona física. En ese caso, el schema correcto es Organization,
     no Person — declarar "Corporación GC" como Person es un error de tipado que
     impide que Google interprete bien la cadena de autoridad. */
  const isOrgAuthor =
    article.author?.toLowerCase().startsWith("corporación gc") ||
    article.author?.toLowerCase().startsWith("corporacion gc");

  /* Credencial visible bajo el byline. Para personas, viene de ATTORNEYS
     (misma fuente que las imágenes OG). Para la firma, una credencial fija
     que ancla la autoridad académica del director sin alterar la voz
     editorial. Si no se encuentra credencial, fallback a institution. */
  const authorCredential = isOrgAuthor
    ? ORG_AUTHOR_CREDENTIAL
    : (authorMember && ATTORNEYS[authorMember.slug]?.credential) ||
      article.institution ||
      null;

  /* JSON-LD. ScholarlyArticle solo para piezas académicas (tesis, libros,
     ponencias); las guías y artículos informativos usan el tipo general
     Article, más apropiado para contenido no académico (mejor comprensión
     por Google e IA). */
  const SCHOLARLY_TYPES = ["tesis", "libro", "ponencia"];
  const articleSchemaType = SCHOLARLY_TYPES.includes(article.publicationType ?? "")
    ? "ScholarlyArticle"
    : "Article";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": articleSchemaType,
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.updated ?? article.date,
    url: `https://www.corporaciongc.com/articulos/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.corporaciongc.com/articulos/${slug}`,
    },
    image: {
      "@type": "ImageObject",
      url: `https://www.corporaciongc.com/articulos/${slug}/opengraph-image/default`,
      width: 1200,
      height: 630,
    },
    ...(article.author
      ? {
          author: isOrgAuthor
            ? {
                "@type": "Organization",
                "@id": "https://www.corporaciongc.com/#organization",
                name: "Corporación GC",
                url: "https://www.corporaciongc.com",
                logo: "https://www.corporaciongc.com/images/logo-gc.png",
              }
            : {
                "@type": "Person",
                /* El mismo identificador que usa la página del abogado, para
                   que Google entienda que quien firma es esa persona y no un
                   homónimo. */
                ...(authorMember
                  ? { "@id": `https://www.corporaciongc.com/abogados/${authorMember.slug}#person` }
                  : {}),
                name: article.author,
                ...(authorMember ? { url: `https://www.corporaciongc.com/abogados/${authorMember.slug}` } : {}),
                ...(article.institution
                  ? {
                      affiliation: {
                        "@type": "Organization",
                        name: article.institution,
                      },
                    }
                  : {}),
              },
        }
      : {}),
    publisher: {
      "@type": "Organization",
      "@id": "https://www.corporaciongc.com/#organization",
      name: "Corporación GC",
      url: "https://www.corporaciongc.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.corporaciongc.com/images/logo-gc.png",
        width: 492,
        height: 466,
      },
    },
    inLanguage: lang,
    ...(article.translation
      ? {
          [lang === "en" ? "translationOfWork" : "workTranslation"]: {
            "@id": `https://www.corporaciongc.com/articulos/${article.translation}`,
          },
        }
      : {}),
    keywords: article.tags.join(", "),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.corporaciongc.com" },
      { "@type": "ListItem", position: 2, name: "Publicaciones", item: "https://www.corporaciongc.com/articulos" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://www.corporaciongc.com/articulos/${slug}` },
    ],
  };

  const jsonLdFaq = article.faq && article.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://www.corporaciongc.com/articulos/${slug}#faq`,
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}
      <Navbar />
      <main className="bg-surface min-h-[100dvh]">
        <div className="pt-28 md:pt-36 pb-20 md:pb-28">
          <div
            lang={lang}
            className={`${isPdf ? "max-w-[1000px]" : "max-w-[800px]"} mx-auto px-6 md:px-10`}
          >
            {/* Back */}
            <Link
              href="/articulos"
              className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-gold transition-colors duration-300 mb-10"
            >
              <ArrowLeft size={14} weight="regular" />
              {t.back}
            </Link>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {/* Publication type badge */}
              {article.publicationType && (
                <span className="px-2.5 py-1 rounded-md text-[9px] tracking-wider uppercase font-medium bg-burgundy/[0.10] text-burgundy dark:text-burgundy-light">
                  {publicationTypeLabel(article.publicationType, lang)}
                </span>
              )}

              <div className="flex items-center gap-1.5 text-xs text-cream/35">
                <CalendarBlank size={13} weight="regular" />
                <time dateTime={article.date}>{formatDate(article.date, lang)}</time>
              </div>

              {/* La revisión posterior solo se anuncia cuando existe: una
                  fecha de actualización igual a la de publicación no dice
                  nada y Google la descuenta. */}
              {article.updated && article.updated !== article.date && (
                <div className="flex items-center gap-1.5 text-xs text-cream/35">
                  <ArrowsClockwise size={13} weight="regular" />
                  {t.updated}{" "}
                  <time dateTime={article.updated}>{formatDate(article.updated, lang)}</time>
                </div>
              )}

              {article.tags.length > 0 && (
                <div className="flex items-start gap-1.5 min-w-0">
                  <Tag
                    size={13}
                    weight="regular"
                    className="text-cream/35"
                  />
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[9px] tracking-wide bg-cream/[0.06] text-cream/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Enlace a la versión en el otro idioma */}
            {article.translation && (
              <Link
                href={`/articulos/${article.translation}`}
                hrefLang={lang === "en" ? "es" : "en"}
                lang={lang === "en" ? "es" : "en"}
                className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold/80 transition-colors duration-300 mb-6"
              >
                {t.translation}
                <ArrowSquareOut size={11} weight="bold" />
              </Link>
            )}

            {/* Title */}
            <h1 className="font-display text-2xl md:text-4xl font-semibold tracking-tighter leading-[1.1] text-cream mb-4">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="text-base text-cream/50 leading-relaxed max-w-[60ch] mb-10">
                {article.excerpt}
              </p>
            )}

            {/* Byline visible — autoridad académica del autor para E-E-A-T y
                señal de confianza al lector. Para personas usa la credencial
                de ATTORNEYS (misma fuente que las imágenes OG). Para la voz
                institucional usa ORG_AUTHOR_CREDENTIAL. */}
            {article.author && article.authorVisible !== false && (
              <div className="mb-10">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold/60 font-medium mb-2">
                  {t.by}
                </div>
                <div className="text-base md:text-lg font-medium text-cream tracking-tight">
                  {article.author}
                </div>
                {authorCredential && (
                  <div lang="es" className="mt-1.5 text-sm text-cream/55 leading-relaxed max-w-[60ch]">
                    {authorCredential}
                  </div>
                )}
              </div>
            )}

            {/* Source reference for journal articles */}
            {article.sourceReference && (
              <div className="flex items-start gap-3 p-4 rounded-lg border border-cream/[0.08] bg-cream/[0.03] mb-10">
                <BookOpen size={16} weight="regular" className="text-gold/60 shrink-0 mt-0.5" />
                <div className="text-xs text-cream/50 leading-relaxed">
                  <span className="text-cream/60 font-medium">{t.publishedIn}</span>
                  {article.sourceReference}
                  {article.sourceUrl && (
                    <>
                      {" "}
                      <a
                        href={article.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gold hover:text-gold/80 transition-colors duration-300"
                      >
                        {article.publicationType === "libro" ? "Acceder al libro" : "Acceder a la revista"}
                        <ArrowSquareOut size={11} weight="bold" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            )}

            <div className="h-px bg-cream/[0.06] mb-10" />

            {/* Content */}
            {isPdf && article.content.trim() && (
              <div className="prose-article mb-10">
                <MDXRemote
                  source={article.content}
                  components={ARTICLE_COMPONENTS}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                    },
                  }}
                />
              </div>
            )}
            {isPdf ? (
              <PDFViewer pdfFile={article.pdfFile!} />
            ) : (
              <div className="prose-article">
                <MDXRemote
                  source={article.content}
                  components={ARTICLE_COMPONENTS}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                    },
                  }}
                />
              </div>
            )}

            {/* CTA de WhatsApp — solo en guías/artículos comerciales (ver
                showCommercialCta). Vía rápida y directa, diferenciada del
                formulario de contacto (que es la vía formal y detallada). */}
            {showCommercialCta && (
            <div className="mt-14 rounded-2xl border border-burgundy/20 bg-gradient-to-br from-burgundy/[0.08] via-cream/[0.02] to-transparent p-7 md:p-9">
              <div className="flex items-start gap-5">
                <div className="hidden sm:flex shrink-0 items-center justify-center w-12 h-12 rounded-xl bg-burgundy/[0.14] text-burgundy-light">
                  <WhatsappLogo size={26} weight="fill" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-gold/70 font-medium mb-2">
                    {t.ctaKicker}
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-cream leading-snug">
                    {t.ctaTitle}
                  </h2>
                  <p className="mt-2.5 text-sm text-cream/60 leading-relaxed max-w-[54ch]">
                    {t.ctaText}
                  </p>
                  <TrackedContactLink
                    href={whatsappUrl}
                    contactTarget="article-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-b from-burgundy via-[#5A1730] to-[#4A0E27] text-white text-sm font-medium tracking-wide hover:from-burgundy-light hover:via-burgundy hover:to-[#5A1730] active:scale-[0.97] transition-all duration-300"
                  >
                    <WhatsappLogo size={18} weight="fill" />
                    {t.ctaButton}
                  </TrackedContactLink>
                </div>
              </div>
            </div>
            )}

            {/* About the Author(s) */}
            {authorMembers.length > 0 && article.authorVisible !== false && (
              <div className="mt-16 pt-8 border-t border-cream/[0.06]">
                <div className="text-[10px] tracking-[0.25em] uppercase text-cream/35 font-medium mb-5">
                  {authorMembers.length > 1 ? t.aboutMany : t.aboutOne}
                </div>
                <div className="space-y-6">
                  {authorMembers.map((member) => (
                    <div key={member.slug} className="flex items-start gap-5">
                      <Link href={`/abogados/${member.slug}`} className="shrink-0">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          width={72}
                          height={72}
                          className="rounded-full object-cover object-top w-[72px] h-[72px] border border-cream/10"
                        />
                      </Link>
                      <div>
                        <Link
                          href={`/abogados/${member.slug}`}
                          className="text-sm font-medium text-cream hover:text-gold transition-colors duration-300"
                        >
                          {member.name}
                        </Link>
                        <p lang="es" className="text-xs text-cream/40 mt-0.5">
                          {member.role} · Corporación GC
                        </p>
                        {/* En el artículo, la ficha del autor lleva su
                            credencial —la misma línea que va bajo la firma—,
                            no la biografía larga del equipo. */}
                        <p lang="es" className="text-xs text-cream/55 leading-relaxed mt-2 max-w-[50ch]">
                          {ATTORNEYS[member.slug]?.credential ?? member.shortBio}
                        </p>
                        <Link
                          href={`/abogados/${member.slug}`}
                          className="inline-flex items-center gap-1 text-[11px] text-burgundy hover:text-gold transition-colors duration-300 mt-3"
                        >
                          {t.profile}
                          <ArrowSquareOut size={11} weight="bold" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sentencias de la firma sobre la misma materia. Solo en
                español: las guías en inglés no las llevan. */}
            {article.lang !== "en" && (
              <SentenciasRelacionadas
                sentencias={getSentenciasPorTemas(article.tags)}
                titulo="Sentencias comentadas sobre esta materia"
              />
            )}

            {/* Bottom nav */}
            <div className="mt-10 pt-8 border-t border-cream/[0.06]">
              <Link
                href="/articulos"
                className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-gold transition-colors duration-300"
              >
                <ArrowLeft size={14} weight="regular" />
                {t.backBottom}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <WhatsAppFloat href={whatsappUrl} />
      <Footer />
    </>
  );
}
