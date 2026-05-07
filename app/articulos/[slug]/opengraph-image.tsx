import { renderArticleOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";
import {
  getArticleBySlug,
  publicationTypeLabel,
} from "@/lib/articles";

export const runtime = "nodejs";
export const alt = "Corporación GC — Publicación";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

function authorInitials(author?: string): string {
  if (!author) return "GC";
  const first = author.split(",")[0].trim();
  const cleaned = first.replace(/^(Dr\.\s|Lic\.\s|Licda\.\s|MSc\.\s|Mtro\.\s)/, "");
  const parts = cleaned.split(/\s+/).filter(Boolean);
  const a = parts[0]?.[0] ?? "G";
  const b = parts[1]?.[0] ?? parts[0]?.[1] ?? "C";
  return (a + b).toUpperCase();
}

function formatMonthYear(dateStr: string): string {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    const formatted = d.toLocaleDateString("es-CR", {
      month: "long",
      year: "numeric",
    });
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  } catch {
    return dateStr;
  }
}

function authorDisplay(author?: string): string {
  if (!author) return "Corporación GC";
  return author.split(",")[0].trim();
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return renderArticleOg({
      tag: "Publicación",
      date: "",
      title: "Publicación Académica",
      excerpt: "Corporación GC — Doctrina jurídica costarricense en Derecho Público.",
      authorName: "Corporación GC",
      authorInitials: "GC",
    });
  }
  return renderArticleOg({
    tag: publicationTypeLabel(article.publicationType),
    date: formatMonthYear(article.date),
    title: article.title,
    excerpt: article.seoDescription ?? article.excerpt,
    authorName: authorDisplay(article.author),
    authorInitials: authorInitials(article.author),
  });
}
