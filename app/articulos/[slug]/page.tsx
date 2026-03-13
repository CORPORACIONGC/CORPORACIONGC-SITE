import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  getAllArticles,
  getArticleBySlug,
  formatDate,
  publicationTypeLabel,
} from "@/lib/articles";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PDFViewer } from "@/components/article/PDFViewer";
import {
  ArrowLeft,
  CalendarBlank,
  Tag,
  User,
  BookOpen,
  ArrowSquareOut,
} from "@phosphor-icons/react/dist/ssr";

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
  if (!article) return {};
  return {
    title: `${article.title} | Corporación GC`,
    description: article.excerpt,
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

  /* JSON-LD for academic SEO */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    ...(article.author
      ? {
          author: {
            "@type": "Person",
            name: article.author,
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
      name: "Corporación GC",
      url: "https://corporaciongc.com",
    },
    keywords: article.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="bg-surface min-h-[100dvh]">
        <div className="pt-28 md:pt-36 pb-20 md:pb-28">
          <div
            className={`${isPdf ? "max-w-[1000px]" : "max-w-[800px]"} mx-auto px-6 md:px-10`}
          >
            {/* Back */}
            <Link
              href="/articulos"
              className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-gold transition-colors duration-300 mb-10"
            >
              <ArrowLeft size={14} weight="regular" />
              Todas las publicaciones
            </Link>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {/* Publication type badge */}
              {article.publicationType && (
                <span className="px-2.5 py-1 rounded-md text-[9px] tracking-wider uppercase font-medium bg-burgundy/[0.10] text-burgundy dark:text-burgundy-light">
                  {publicationTypeLabel(article.publicationType)}
                </span>
              )}

              <div className="flex items-center gap-1.5 text-xs text-cream/35">
                <CalendarBlank size={13} weight="regular" />
                {formatDate(article.date)}
              </div>

              {article.tags.length > 0 && (
                <div className="flex items-center gap-1.5">
                  <Tag
                    size={13}
                    weight="regular"
                    className="text-cream/35"
                  />
                  <div className="flex gap-1.5">
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

            {/* Author + institution */}
            {article.author && (
              <div className="flex items-center gap-1.5 text-xs text-cream/45 mb-6">
                <User size={13} weight="regular" className="shrink-0" />
                <span>{article.author}</span>
                {article.institution && (
                  <span className="text-cream/30">
                    · {article.institution}
                  </span>
                )}
              </div>
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

            {/* Source reference for journal articles */}
            {article.sourceReference && (
              <div className="flex items-start gap-3 p-4 rounded-lg border border-cream/[0.08] bg-cream/[0.03] mb-10">
                <BookOpen size={16} weight="regular" className="text-gold/60 shrink-0 mt-0.5" />
                <div className="text-xs text-cream/50 leading-relaxed">
                  <span className="text-cream/60 font-medium">Publicado en: </span>
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
                        Acceder a la revista
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
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                    },
                  }}
                />
              </div>
            )}

            {/* Bottom nav */}
            <div className="mt-16 pt-8 border-t border-cream/[0.06]">
              <Link
                href="/articulos"
                className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-gold transition-colors duration-300"
              >
                <ArrowLeft size={14} weight="regular" />
                Volver a publicaciones
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
