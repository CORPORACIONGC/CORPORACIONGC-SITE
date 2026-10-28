// lib/page-metadata.ts
// Metadata estática centralizada — para importar desde cada page.tsx.
// Las rutas dinámicas usan generateMetadata() en su page.tsx (ver README).
//
// IMPORTANTE — Next.js hace *shallow merge* de metadata: cuando una ruta define
// su propio `openGraph` o `twitter`, REEMPLAZA por completo el del root layout
// (no se fusionan campo a campo). Por eso CADA objeto openGraph debe repetir
// `siteName` + `locale` (+ `type`) y CADA twitter debe repetir `card`; de lo
// contrario las páginas hijas pierden `og:locale=es_CR`, `og:site_name` y caen
// a `twitter:card=summary`. Los helpers `og()` y `tw()` garantizan esos valores.

import type { Metadata } from "next";
import { PRACTICE_AREA_PAGES } from "./constants";

const SITE_NAME = "Corporación GC";
const LOCALE = "es_CR";

type OG = NonNullable<Metadata["openGraph"]>;
type TW = NonNullable<Metadata["twitter"]>;

/** openGraph con los defaults que el shallow-merge de Next borraría. */
function og(overrides: OG): OG {
  return { type: "website", siteName: SITE_NAME, locale: LOCALE, ...overrides };
}
/** twitter con card grande garantizada (si no, Next cae a "summary"). */
function tw(overrides: TW): TW {
  return { card: "summary_large_image", ...overrides };
}

export const homeMetadata: Metadata = {
  title: "Abogados en Derecho Público en Costa Rica · Corporación GC",
  description:
    "Litigio contencioso-administrativo en Costa Rica. Lo dirige el Dr. Óscar González Camacho, ex-Magistrado y coordinador de la comisión redactora del CPCA.",
  alternates: { canonical: "/" },
  openGraph: og({
    title: "Corporación GC · Abogados en Derecho Público en Costa Rica",
    description:
      "Bufete líder en litigio contencioso-administrativo. Fundado por el Dr. Óscar González Camacho, ex-Magistrado de la Sala Primera y coordinador de la comisión redactora del CPCA (Ley N.° 8508). Más de 38 años de trayectoria.",
    url: "/",
  }),
  twitter: tw({
    title: "Corporación GC | Abogados en Derecho Público — CR",
    description:
      "Bufete líder en litigio contencioso-administrativo. Fundado por el Dr. Óscar González Camacho, ex-Magistrado de la Sala Primera y coordinador de la comisión redactora del CPCA (Ley N.° 8508). Más de 38 años de trayectoria.",
  }),
};

export const sobreNosotrosMetadata: Metadata = {
  // El layout aplica la plantilla "%s · Corporación GC"; el título no repite la
  // marca para evitar "Sobre Nosotros · Corporación GC · Corporación GC".
  title: "Sobre Nosotros",
  description:
    "Fundado en 2015 por el Dr. Óscar González Camacho, ex-Magistrado y coordinador de la comisión redactora del CPCA. Cinco abogados en Derecho Público.",
  alternates: { canonical: "/sobre-nosotros" },
  openGraph: og({
    title: "Quiénes somos · Corporación GC, Costa Rica",
    description:
      "Conocé al equipo detrás de Corporación GC: cinco abogados costarricenses especializados en Derecho Público, dirigidos por un ex-Magistrado de la Corte Suprema y coordinador de la comisión redactora del CPCA.",
    url: "/sobre-nosotros",
  }),
  twitter: tw({
    title: "Sobre Nosotros · Corporación GC",
    description:
      "Conocé al equipo detrás de Corporación GC: cinco abogados costarricenses especializados en Derecho Público, dirigidos por un ex-Magistrado de la Corte Suprema y coordinador de la comisión redactora del CPCA.",
  }),
};

export const areasMetadata: Metadata = {
  /* Absolutos: con el sufijo de la plantilla, Google los cortaba. */
  title: { absolute: "Áreas de práctica en Derecho Público · Costa Rica" },
  description:
    `${PRACTICE_AREA_PAGES.length} áreas en Derecho Público: contencioso-administrativo, medidas cautelares, casación ante Sala Primera, amparo, contratación pública y más. Costa Rica.`,
  alternates: { canonical: "/areas" },
  openGraph: og({
    title: "Áreas de Práctica · Corporación GC, Costa Rica",
    description:
      `${PRACTICE_AREA_PAGES.length} áreas en Derecho Público y Administrativo: litigio contencioso, medidas cautelares, casación ante Sala Primera, recursos de amparo, contratación pública, ZMT y más. Atendemos en todo Costa Rica.`,
    url: "/areas",
  }),
  twitter: tw({
    title: "Áreas de Práctica · Corporación GC",
    description:
      `${PRACTICE_AREA_PAGES.length} áreas en Derecho Público y Administrativo: litigio contencioso, medidas cautelares, casación ante Sala Primera, recursos de amparo, contratación pública, ZMT y más. Atendemos en todo Costa Rica.`,
  }),
};

export const articulosMetadata: Metadata = {
  /* Título absoluto: con la marca de la plantilla pasaría de 60 caracteres.
     El hub es la página con más autoridad interna del sitio y se titulaba
     «Publicaciones Académicas», que describía mal un listado de guías. */
  title: { absolute: "Guías y análisis de Derecho Público en Costa Rica" },
  description:
    "Guías prácticas y publicaciones de Corporación GC sobre contencioso-administrativo, contratación pública, amparo y procedimiento administrativo.",
  alternates: { canonical: "/articulos" },
  openGraph: og({
    title: "Guías y análisis de Derecho Público · Corporación GC",
    description:
      "Guías prácticas y publicaciones de Corporación GC sobre contencioso-administrativo, contratación pública, amparo y procedimiento administrativo.",
    url: "/articulos",
  }),
  twitter: tw({
    title: "Guías y análisis de Derecho Público · Corporación GC",
    description:
      "Guías prácticas y publicaciones de Corporación GC sobre contencioso-administrativo, contratación pública, amparo y procedimiento administrativo.",
  }),
};

/* Índice del equipo (/abogados). */
export const ABOGADOS_DESCRIPCION =
  "Los abogados de Corporación GC: el Dr. Óscar González Camacho, exmagistrado de la Sala Primera, y el equipo que litiga con él en Derecho Público en Costa Rica.";

export const abogadosMetadata: Metadata = {
  title: { absolute: "Abogados de Corporación GC · Derecho Público en Costa Rica" },
  description: ABOGADOS_DESCRIPCION,
  alternates: { canonical: "/abogados" },
  openGraph: og({
    title: "Abogados de Corporación GC · Derecho Público en Costa Rica",
    description: ABOGADOS_DESCRIPCION,
    url: "/abogados",
  }),
  twitter: tw({ title: "Abogados de Corporación GC", description: ABOGADOS_DESCRIPCION }),
};

/* Política editorial (/politica-editorial). */
export const editorialMetadata: Metadata = {
  title: { absolute: "Política editorial de las guías · Corporación GC" },
  description:
    "Cómo escribe y revisa Corporación GC sus guías de Derecho Público: autoría, revisión del Dr. González Camacho, fuentes oficiales, fechas y corrección de errores.",
  alternates: { canonical: "/politica-editorial" },
  openGraph: og({
    title: "Política editorial · Corporación GC",
    description:
      "Cómo escribe y revisa Corporación GC sus guías de Derecho Público: autoría, revisión, fuentes oficiales, fechas y corrección de errores.",
    url: "/politica-editorial",
  }),
  twitter: tw({ title: "Política editorial · Corporación GC", description: "Autoría, revisión, fuentes y corrección de errores de las guías de Corporación GC." }),
};

export const jurisprudenciaMetadata: Metadata = {
  title: { absolute: "Sentencias del Dr. Óscar González Camacho · Sala Primera" },
  description:
    "Sentencias redactadas por el Dr. Óscar Eduardo González Camacho en la Sala Primera (2002–2014): análisis, pasajes literales y texto íntegro en Nexus.",
  alternates: { canonical: "/jurisprudencia-destacada" },
  openGraph: og({
    title: "Jurisprudencia Destacada · Corporación GC, Costa Rica",
    description:
      "Selección editorial de fallos redactados por el Dr. Óscar Eduardo González Camacho como Magistrado de la Sala Primera de la Corte Suprema (2002–2014). Análisis, pasajes literales y enlace al texto íntegro en Nexus.",
    url: "/jurisprudencia-destacada",
  }),
  twitter: tw({
    title: "Jurisprudencia Destacada · Corporación GC",
    description:
      "Selección editorial de fallos redactados por el Dr. Óscar Eduardo González Camacho como Magistrado de la Sala Primera de la Corte Suprema (2002–2014). Análisis, pasajes literales y enlace al texto íntegro en Nexus.",
  }),
};

export const contactoMetadata: Metadata = {
  // Absoluto: «Contacto · Corporación GC» desaprovechaba el espacio del título.
  title: { absolute: "Contacto · Corporación GC, abogados de Derecho Público" },
  description:
    "Contacte a Corporación GC, bufete de Derecho Público y litigio contencioso-administrativo en Costa Rica, por formulario, WhatsApp, correo o teléfono.",
  alternates: { canonical: "/contacto" },
  openGraph: og({
    title: "Contacto · Corporación GC, Costa Rica",
    description:
      "Hablemos de su caso. Bufete dedicado al Derecho Público y al contencioso-administrativo en Costa Rica, dirigido por el Dr. Óscar González Camacho, ex-Magistrado y coordinador de la comisión redactora del CPCA. Le orientamos sobre su caso.",
    url: "/contacto",
  }),
  twitter: tw({
    title: "Contacto · Corporación GC",
    description:
      "Hablemos de su caso. Bufete especialista en Derecho Público y contencioso-administrativo en Costa Rica. Le orientamos sobre su caso.",
  }),
};

export const privacidadMetadata: Metadata = {
  // La plantilla del layout añade "· Corporación GC"; no duplicar la marca aquí.
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Corporación GC. Tratamiento de datos personales conforme a la Ley N.° 8968 y al Reglamento de PRODHAB. Costa Rica.",
  alternates: { canonical: "/politica-de-privacidad" },
  robots: { index: false, follow: true },
  openGraph: og({
    title: "Política de Privacidad — Corporación GC",
    description:
      "Cómo Corporación GC recopila, usa y protege los datos personales de sus visitantes y clientes conforme a la Ley de Protección de la Persona frente al Tratamiento de sus Datos.",
    url: "/politica-de-privacidad",
  }),
  twitter: tw({
    title: "Política de Privacidad · Corporación GC",
    description:
      "Cómo Corporación GC recopila, usa y protege los datos personales de sus visitantes y clientes conforme a la Ley de Protección de la Persona frente al Tratamiento de sus Datos.",
  }),
};

// =============================================================
// generateMetadata para rutas dinámicas
// =============================================================

import { ATTORNEYS } from "./seo-constants";
/* PRACTICE_AREA_PAGES vive en constants.ts (array, fuente única de verdad
   con las 31 áreas y sus seoTitle/seoDescription/ogShortTitle/ogEmphasis).
   Antes leíamos de seo-constants.ts (un Record incompleto con solo 28
   entradas) — eso causaba que /areas/zona-maritimo-terrestre,
   /areas/litigio-contencioso-administrativo y /areas/medidas-cautelares
   heredaran la metadata genérica de la home en lugar de su propia. */

export async function generateAreaMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const area = PRACTICE_AREA_PAGES.find((a) => a.slug === slug);
  if (!area) return {};

  /* Las 31 áreas en constants.ts garantizan seoTitle/seoDescription
     vía `as const`. El fallback con ?? sería código muerto. */
  const title = area.seoTitle;
  const description = area.seoDescription;

  /* Título absoluto: la plantilla añadiría «· Corporación GC» y el corte de
     Google se comería el final. La marca queda en el OpenGraph. */
  return {
    title: { absolute: title },
    description,
    openGraph: og({
      title: `${title} · Corporación GC`,
      description,
      url: `/areas/${slug}`,
    }),
    twitter: tw({ title, description }),
  };
}

export async function generateAttorneyMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const a = ATTORNEYS[slug];
  if (!a) return {};

  return {
    /* Sin el sufijo de marca cuando no cabe: el nombre va primero y el corte
       se llevaba solo la marca. */
    title: `${a.seoTitle} · Corporación GC`.length > 60 ? { absolute: a.seoTitle } : a.seoTitle,
    description: a.seoDescription,
    openGraph: og({
      title: a.ogTitle,
      description: a.ogDescription,
      url: `/abogados/${slug}`,
      type: "profile",
    }),
    twitter: tw({ title: a.twitterTitle, description: a.ogDescription }),
  };
}

/**
 * Para sentencias destacadas: pasar el objeto `sentencia` ya cargado.
 * Llamar desde generateMetadata del page.tsx así:
 *   const sentencia = getSentenciaBySlug(slug);
 *   return buildJurisprudenciaMetadata(sentencia, slug);
 */
export function buildJurisprudenciaMetadata(
  sentencia:
    | {
        titulo: string;
        numero: string;
        metaDescription: string;
        seoTitle?: string;
        materia: string;
        fecha: string;
        fechaCorta: string;
        publicado: string;
        actualizado: string;
        tribunal: string;
        redactor: string;
      }
    | null,
  slug: string
): Metadata {
  if (!sentencia) return {};

  /* El nombre del magistrado que redactó el fallo va en el título: es como
     buscan estas sentencias quienes conocen su obra. Título absoluto, sin la
     marca de la plantilla, para que el nombre no quede fuera del corte. */
  const numeroCorto = sentencia.numero.replace(/^Resolución N° /, "Voto ");
  /* El título del buscador lo declara la sentencia, y empieza por lo que la
     gente escribe en Google. Sin él, se arma con el título editorial. */
  const seoTitle = sentencia.seoTitle ?? `${sentencia.titulo} · ${numeroCorto} · Óscar González Camacho`;
  const ogTitle = `${sentencia.titulo} | ${sentencia.numero} | Corporación GC`;

  return {
    title: { absolute: seoTitle },
    description: sentencia.metaDescription,
    alternates: { canonical: `/jurisprudencia-destacada/${slug}` },
    openGraph: og({
      title: ogTitle,
      description: sentencia.metaDescription,
      type: "article",
      url: `/jurisprudencia-destacada/${slug}`,
      publishedTime: sentencia.publicado,
      modifiedTime: sentencia.actualizado,
      authors: ["Corporación GC"],
      section: "Jurisprudencia · Derecho Público",
      tags: [
        sentencia.materia,
        sentencia.tribunal,
        "Jurisprudencia Costa Rica",
        "Sala Primera",
      ],
    }),
    twitter: tw({
      title: seoTitle,
      description: sentencia.metaDescription,
    }),
  };
}

/**
 * Para artículos: pasar el objeto `article` ya cargado.
 * Llamar desde generateMetadata del page.tsx así:
 *   const article = await getArticle(params.slug);
 *   return buildArticleMetadata(article, params.slug);
 */
export function buildArticleMetadata(
  article: {
    title: string;
    excerpt: string;
    author: string;
    date: string; // ISO 8601
    updated?: string;
    seoTitle?: string;
    seoDescription?: string;
  } | null,
  slug: string
): Metadata {
  if (!article) return {};

  const title = article.seoTitle ?? article.title;
  const description = article.seoDescription ?? article.excerpt;

  /* Sufijo de marca condicional: si «título · Corporación GC» supera los 60
     caracteres, Google lo corta (y a veces lo reescribe en los dos puntos,
     perdiendo las palabras clave del final). En ese caso el título va sin
     sufijo; el resultado ya muestra el nombre del sitio encima. */
  const withSuffix = `${title} · ${SITE_NAME}`;

  return {
    title: withSuffix.length > 60 ? { absolute: title } : title,
    description,
    openGraph: og({
      title: `${title} · Corporación GC`,
      description,
      type: "article",
      url: `/articulos/${slug}`,
      publishedTime: article.date,
      ...(article.updated ? { modifiedTime: article.updated } : {}),
      authors: [article.author],
      section: "Derecho Público",
    }),
    twitter: tw({ title, description }),
  };
}
