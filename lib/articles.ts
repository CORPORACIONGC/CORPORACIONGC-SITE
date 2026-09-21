import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

export type ArticleFAQ = {
  question: string;
  answer: string;
};

export type ArticleMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  type: "article" | "pdf";
  pdfFile?: string;
  author?: string;
  /** Si es false, el autor NO se muestra en la página (byline + bio ocultos)
      pero SÍ se emite en el JSON-LD (señal de autoría para SEO/E-E-A-T). */
  authorVisible?: boolean;
  /** Fecha de la última revisión de fondo, cuando hubo una posterior a la
   *  publicación. Alimenta «Actualizado el…», el `dateModified` y el
   *  `lastModified` del sitemap. */
  updated?: string;
  /** Áreas de práctica a las que pertenece la guía. La primera es su área
   *  principal: la que aparece en las migas y en el cierre del artículo. */
  areas?: string[];
  institution?: string;
  publicationType?: "tesis" | "articulo" | "ponencia" | "libro" | "ley" | "guia";
  sourceReference?: string;
  sourceUrl?: string;
  seoTitle?: string;
  seoDescription?: string;
  faq?: ArticleFAQ[];
  /** Idioma del artículo ("es" por omisión). Las guías en inglés declaran
      "en": la plantilla, el JSON-LD y el hreflang se ajustan a ese idioma. */
  lang?: "es" | "en";
  /** Slug de la versión del mismo artículo en el otro idioma, si existe. */
  translation?: string;
  /** Minutos de lectura, a 220 palabras por minuto. Lo calcula
      getAllArticles a partir del cuerpo del artículo. */
  minutos?: number;
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
    authorVisible: data.authorVisible as boolean | undefined,
    institution: data.institution as string | undefined,
    publicationType: data.publicationType as ArticleMeta["publicationType"],
    sourceReference: data.sourceReference as string | undefined,
    sourceUrl: data.sourceUrl as string | undefined,
    seoTitle: data.seoTitle as string | undefined,
    seoDescription: data.seoDescription as string | undefined,
    faq: data.faq as ArticleFAQ[] | undefined,
    lang: data.lang === "en" ? "en" : "es",
    translation: data.translation as string | undefined,
    updated: data.updated as string | undefined,
    areas: (data.areas as string[]) || [],
  };
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".md"));

  const articles = files.map((file) => {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const palabras = content.split(/\s+/).filter(Boolean).length;
    return {
      ...extractMeta(data, file.replace(/\.md$/, "")),
      minutos: Math.max(1, Math.round(palabras / 220)),
    };
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

/* ── El cluster de cada área ──────────────────────────────────────────
   Antes, cada área enlazaba una sola guía elegida a mano y cada guía no
   enlazaba ninguna. Con el campo `areas` del frontmatter, el área lista
   todo su cluster y la guía devuelve el camino hacia su área y hacia sus
   hermanas, que es lo que hace circular la autoridad dentro del sitio. */

/** El área principal de una guía: la primera que declara. */
export function getPrimaryArea(article: Pick<ArticleMeta, "areas">): string | null {
  return article.areas?.[0] ?? null;
}

/* Lo académico —tesis, libros y ponencias— va al final del listado de un
   área: respalda, pero no es lo que busca quien llega con un problema. */
const ACADEMICO = new Set(["tesis", "libro", "ponencia"]);

function ordenDeCluster(a: ArticleMeta, b: ArticleMeta): number {
  const aAcad = ACADEMICO.has(a.publicationType ?? "") ? 1 : 0;
  const bAcad = ACADEMICO.has(b.publicationType ?? "") ? 1 : 0;
  if (aAcad !== bAcad) return aAcad - bAcad;
  return b.date.localeCompare(a.date);
}

/** Todas las guías de un área, las prácticas antes que las académicas.
 *  Solo en español: las versiones en inglés viven enlazadas desde su par. */
export function getArticlesByArea(areaSlug: string): ArticleMeta[] {
  return getAllArticles()
    .filter((a) => a.lang !== "en" && a.areas?.includes(areaSlug))
    .sort(ordenDeCluster);
}

/** Las guías hermanas de una guía: las que comparten área, ordenadas por
 *  cuántas comparten y, en empate, por etiquetas en común y por fecha. */
export function getRelatedArticles(slug: string, tope = 4): ArticleMeta[] {
  const todos = getAllArticles();
  const propio = todos.find((a) => a.slug === slug);
  if (!propio || !propio.areas?.length) return [];
  const areas = new Set(propio.areas);
  const tags = new Set(propio.tags);
  return todos
    .filter((a) => a.slug !== slug && a.lang === propio.lang && a.areas?.some((x) => areas.has(x)))
    .map((a) => ({
      a,
      areasComunes: a.areas!.filter((x) => areas.has(x)).length,
      tagsComunes: a.tags.filter((t) => tags.has(t)).length,
    }))
    .sort(
      (x, y) =>
        y.areasComunes - x.areasComunes ||
        y.tagsComunes - x.tagsComunes ||
        ordenDeCluster(x.a, y.a),
    )
    .slice(0, tope)
    .map((x) => x.a);
}

export function getArticlesByAuthor(authorSubstring: string): ArticleMeta[] {
  return getAllArticles().filter(
    (a) => a.author && a.author.toLowerCase().includes(authorSubstring.toLowerCase())
  );
}

export function formatDate(dateStr: string, lang: "es" | "en" = "es"): string {
  const locale = lang === "en" ? "en-US" : "es-CR";
  try {
    // Las fechas del frontmatter vienen como "YYYY-MM-DD" (solo día). Si se
    // pasan a `new Date(dateStr)` se interpretan como medianoche UTC y, al
    // formatearlas en una zona con offset negativo (Costa Rica, UTC-6), la
    // fecha retrocede un día. Para evitarlo, construimos la fecha en UTC a
    // partir de sus componentes y la formateamos también en UTC, de modo que
    // el día mostrado siempre coincida con el escrito, sin importar la zona
    // horaria del servidor.
    const isoDayMatch = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (isoDayMatch) {
      const [, year, month, day] = isoDayMatch;
      const d = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
      return d.toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });
    }

    const d = new Date(dateStr);
    return d.toLocaleDateString(locale, {
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
  type?: ArticleMeta["publicationType"],
  lang: "es" | "en" = "es"
): string {
  if (lang === "en") {
    const en: Record<string, string> = {
      tesis: "Thesis",
      articulo: "Article",
      ponencia: "Paper",
      libro: "Book",
      ley: "Statute",
      guia: "Practical guide",
    };
    return type ? en[type] || type : "Article";
  }
  const labels: Record<string, string> = {
    tesis: "Tesis",
    articulo: "Artículo",
    ponencia: "Ponencia",
    libro: "Libro",
    ley: "Ley",
    guia: "Guía práctica",
  };
  return type ? labels[type] || type : "Artículo";
}
