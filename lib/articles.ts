import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

export type ArticleMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  type: "article" | "pdf";
  pdfFile?: string;
  author?: string;
  institution?: string;
  publicationType?: "tesis" | "articulo" | "ponencia" | "libro" | "ley";
  sourceReference?: string;
  sourceUrl?: string;
};

export type Article = ArticleMeta & {
  content: string;
};

function extractMeta(data: Record<string, unknown>, slug: string): ArticleMeta {
  return {
    slug,
    title: (data.title as string) || "Sin título",
    date: (data.date as string) || "",
    excerpt: (data.excerpt as string) || "",
    tags: (data.tags as string[]) || [],
    type: (data.type as "article" | "pdf") || "article",
    pdfFile: data.pdfFile as string | undefined,
    author: data.author as string | undefined,
    institution: data.institution as string | undefined,
    publicationType: data.publicationType as ArticleMeta["publicationType"],
    sourceReference: data.sourceReference as string | undefined,
    sourceUrl: data.sourceUrl as string | undefined,
  };
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".md"));

  const articles = files.map((file) => {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf-8");
    const { data } = matter(raw);
    return extractMeta(data, file.replace(/\.md$/, ""));
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    ...extractMeta(data, slug),
    content,
  };
}

export function getArticlesByAuthor(authorSubstring: string): ArticleMeta[] {
  return getAllArticles().filter(
    (a) => a.author && a.author.toLowerCase().includes(authorSubstring.toLowerCase())
  );
}

export function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("es-CR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

/** Map publicationType to a Spanish display label */
export function publicationTypeLabel(
  type?: ArticleMeta["publicationType"]
): string {
  const labels: Record<string, string> = {
    tesis: "Tesis",
    articulo: "Artículo",
    ponencia: "Ponencia",
    libro: "Libro",
    ley: "Ley",
  };
  return type ? labels[type] || type : "Artículo";
}
