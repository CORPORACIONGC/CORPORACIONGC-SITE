// app/articulos/[slug]/opengraph-image.tsx
// Adaptado a `getArticleBySlug` y al shape Article del repo.

import { renderArticleOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";
import { authorInitials } from "@/lib/seo-constants";
import { getArticleBySlug, publicationTypeLabel } from "@/lib/articles";

// nodejs runtime: getArticleBySlug lee MDX desde el filesystem.
export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const MESES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

function dateLabel(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return `${MESES[d.getMonth()]} ${d.getFullYear()}`;
}

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  return [
    {
      id: "default",
      alt: article && article.author
        ? `${article.title} — Publicación de ${article.author}, Corporación GC.`
        : "Publicación de Corporación GC, Costa Rica.",
      size: OG_SIZE,
      contentType: OG_CONTENT_TYPE,
    },
  ];
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://corporaciongc.com";

  if (!article) {
    return renderArticleOg({
      tag: "Publicación",
      readingTime: "—",
      date: "—",
      title: "Corporación GC",
      excerpt: "Doctrina jurídica costarricense en Derecho Público.",
      authorName: "Corporación GC",
      authorInitials: "GC",
      baseUrl,
    });
  }

  const author = article.author ?? "Corporación GC";

  return renderArticleOg({
    tag: publicationTypeLabel(article.publicationType),
    readingTime: "Lectura especializada",
    date: dateLabel(article.date),
    title: article.title,
    excerpt: article.seoDescription ?? article.excerpt,
    authorName: author.split(",")[0].trim(),
    authorInitials: authorInitials(author.split(",")[0].trim()),
    baseUrl,
  });
}
