// lib/page-metadata.ts
// Metadata estática centralizada — para importar desde cada page.tsx.
// Las rutas dinámicas usan generateMetadata() en su page.tsx (ver README).

import type { Metadata } from "next";

export const homeMetadata: Metadata = {
  title: "Corporación GC · Abogados en Derecho Público | Costa Rica",
  description:
    "Bufete líder en litigio contencioso-administrativo en Costa Rica. Dirigido por el Dr. Óscar González Camacho, ex-Magistrado y co-redactor del CPCA.",
  openGraph: {
    title: "Corporación GC · Abogados en Derecho Público en Costa Rica",
    description:
      "Bufete líder en litigio contencioso-administrativo. Fundado por el Dr. Óscar González Camacho, ex-Magistrado de la Sala Primera y co-redactor del CPCA (Ley N.° 8508). Más de 38 años de trayectoria.",
    url: "/",
  },
  twitter: {
    title: "Corporación GC | Abogados en Derecho Público — CR",
    description:
      "Bufete líder en litigio contencioso-administrativo. Fundado por el Dr. Óscar González Camacho, ex-Magistrado de la Sala Primera y co-redactor del CPCA (Ley N.° 8508). Más de 38 años de trayectoria.",
  },
};

export const sobreNosotrosMetadata: Metadata = {
  title: "Sobre Nosotros · Corporación GC",
  description:
    "Bufete fundado en 2015 por el Dr. Óscar González Camacho, ex-Magistrado de la Sala Primera y co-redactor del CPCA. Seis abogados dedicados al Derecho Público.",
  openGraph: {
    title: "Quiénes somos · Corporación GC, Costa Rica",
    description:
      "Conocé al equipo detrás de Corporación GC: seis abogados costarricenses dedicados exclusivamente al Derecho Público, dirigidos por un ex-Magistrado de la Corte Suprema y co-redactor del CPCA.",
    url: "/sobre-nosotros",
  },
  twitter: {
    title: "Sobre Nosotros · Corporación GC",
    description:
      "Conocé al equipo detrás de Corporación GC: seis abogados costarricenses dedicados exclusivamente al Derecho Público, dirigidos por un ex-Magistrado de la Corte Suprema y co-redactor del CPCA.",
  },
};

export const areasMetadata: Metadata = {
  title: "Áreas de Práctica · Derecho Público y Administrativo",
  description:
    "31 áreas en Derecho Público: contencioso-administrativo, medidas cautelares, casación ante Sala Primera, amparo, contratación pública y más. Costa Rica.",
  openGraph: {
    title: "Áreas de Práctica · Corporación GC, Costa Rica",
    description:
      "31 áreas en Derecho Público y Administrativo: litigio contencioso, medidas cautelares, casación ante Sala Primera, recursos de amparo, contratación pública, ZMT y más. Atendemos en todo Costa Rica.",
    url: "/areas",
  },
  twitter: {
    title: "Áreas de Práctica · Corporación GC",
    description:
      "31 áreas en Derecho Público y Administrativo: litigio contencioso, medidas cautelares, casación ante Sala Primera, recursos de amparo, contratación pública, ZMT y más. Atendemos en todo Costa Rica.",
  },
};

export const articulosMetadata: Metadata = {
  title: "Publicaciones Académicas · Corporación GC",
  description:
    "Artículos académicos, tesis y publicaciones especializadas en Derecho Administrativo, Contencioso Administrativo y Derecho Público por los abogados de Corporación GC.",
  openGraph: {
    title: "Publicaciones Académicas · Corporación GC, CR",
    description:
      "Artículos, tesis y publicaciones especializadas en Derecho Administrativo, Contencioso Administrativo y Derecho Público escritas por los abogados de Corporación GC. Doctrina jurídica costarricense.",
    url: "/articulos",
  },
  twitter: {
    title: "Publicaciones Académicas · Corporación GC",
    description:
      "Artículos, tesis y publicaciones especializadas en Derecho Administrativo, Contencioso Administrativo y Derecho Público escritas por los abogados de Corporación GC. Doctrina jurídica costarricense.",
  },
};

export const jurisprudenciaMetadata: Metadata = {
  title:
    "Jurisprudencia Destacada · Sentencias del Dr. Óscar González Camacho",
  description:
    "Sentencias paradigmáticas redactadas por el Dr. Óscar Eduardo González Camacho como Magistrado de la Sala Primera de la Corte Suprema (2002–2014). Texto íntegro verificado y pasajes destacados.",
  openGraph: {
    title: "Jurisprudencia Destacada · Corporación GC, Costa Rica",
    description:
      "Selección editorial de fallos paradigmáticos redactados por el Dr. Óscar Eduardo González Camacho como Magistrado de la Sala Primera de la Corte Suprema (2002–2014). Texto íntegro verificado y pasajes destacados.",
    url: "/jurisprudencia-destacada",
  },
  twitter: {
    title: "Jurisprudencia Destacada · Corporación GC",
    description:
      "Selección editorial de fallos paradigmáticos redactados por el Dr. Óscar Eduardo González Camacho como Magistrado de la Sala Primera de la Corte Suprema (2002–2014). Texto íntegro verificado y pasajes destacados.",
  },
};

export const privacidadMetadata: Metadata = {
  title: "Política de Privacidad · Corporación GC",
  description:
    "Política de privacidad de Corporación GC. Tratamiento de datos personales conforme a la Ley N.° 8968 y al Reglamento de PRODHAB. Costa Rica.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Política de Privacidad — Corporación GC",
    description:
      "Cómo Corporación GC recopila, usa y protege los datos personales de sus visitantes y clientes conforme a la Ley de Protección de la Persona frente al Tratamiento de sus Datos.",
    url: "/politica-de-privacidad",
  },
  twitter: {
    title: "Política de Privacidad · Corporación GC",
    description:
      "Cómo Corporación GC recopila, usa y protege los datos personales de sus visitantes y clientes conforme a la Ley de Protección de la Persona frente al Tratamiento de sus Datos.",
  },
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
import { PRACTICE_AREA_PAGES } from "./constants";

export async function generateAreaMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const area = PRACTICE_AREA_PAGES.find((a) => a.slug === slug);
  if (!area) return {};

  const title = area.seoTitle ?? area.title;
  const description = area.seoDescription ?? area.description;

  return {
    title,
    description,
    openGraph: {
      title: `${title} · Corporación GC`,
      description,
      url: `/areas/${slug}`,
    },
    twitter: { title, description },
  };
}

export async function generateAttorneyMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const a = ATTORNEYS[slug];
  if (!a) return {};

  return {
    title: a.seoTitle,
    description: a.seoDescription,
    openGraph: {
      title: a.ogTitle,
      description: a.ogDescription,
      url: `/abogados/${slug}`,
      type: "profile",
    },
    twitter: { title: a.twitterTitle, description: a.ogDescription },
  };
}

/**
 * Para sentencias destacadas: pasar el objeto `sentencia` ya cargado.
 * Llamar desde generateMetadata del page.tsx así:
 *   const sentencia = getSentenciaBySlug(slug);
 *   return buildJurisprudenciaMetadata(sentencia, slug);
 */
const _MESES_ES_ISO: Record<string, string> = {
  enero: "01", febrero: "02", marzo: "03", abril: "04",
  mayo: "05", junio: "06", julio: "07", agosto: "08",
  septiembre: "09", octubre: "10", noviembre: "11", diciembre: "12",
};

function spanishDateToISO(spanishDate: string): string | undefined {
  const m = spanishDate
    .toLowerCase()
    .match(/(\d+)\s+de\s+([a-záéíóú]+)\s+de\s+(\d+)/);
  if (!m) return undefined;
  const day = m[1].padStart(2, "0");
  const month = _MESES_ES_ISO[m[2]];
  const year = m[3];
  if (!month) return undefined;
  return `${year}-${month}-${day}`;
}

export function buildJurisprudenciaMetadata(
  sentencia:
    | {
        titulo: string;
        numero: string;
        metaDescription: string;
        materia: string;
        fecha: string;
        fechaCorta: string;
        tribunal: string;
        redactor: string;
      }
    | null,
  slug: string
): Metadata {
  if (!sentencia) return {};

  const seoTitle = `${sentencia.titulo} · ${sentencia.numero}`;
  const ogTitle = `${sentencia.titulo} | ${sentencia.numero} | Corporación GC`;
  const publishedTime = spanishDateToISO(sentencia.fecha);

  return {
    title: seoTitle,
    description: sentencia.metaDescription,
    openGraph: {
      title: ogTitle,
      description: sentencia.metaDescription,
      type: "article",
      url: `/jurisprudencia-destacada/${slug}`,
      ...(publishedTime ? { publishedTime } : {}),
      authors: [sentencia.redactor],
      section: "Jurisprudencia · Derecho Público",
      tags: [
        sentencia.materia,
        sentencia.tribunal,
        "Jurisprudencia Costa Rica",
        "Sala Primera",
      ],
    },
    twitter: {
      title: seoTitle,
      description: sentencia.metaDescription,
    },
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
    seoTitle?: string;
    seoDescription?: string;
  } | null,
  slug: string
): Metadata {
  if (!article) return {};

  const title = article.seoTitle ?? article.title;
  const description = article.seoDescription ?? article.excerpt;

  return {
    title,
    description,
    openGraph: {
      title: `${title} · Corporación GC`,
      description,
      type: "article",
      url: `/articulos/${slug}`,
      publishedTime: article.date,
      authors: [article.author],
      section: "Derecho Público",
    },
    twitter: { title, description },
  };
}
