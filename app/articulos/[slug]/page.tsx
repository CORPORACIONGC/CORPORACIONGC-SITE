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
import { TEAM } from "@/lib/constants";
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
    alternates: {
      canonical: `https://www.corporaciongc.com/articulos/${slug}`,
    },
    openGraph: {
      title: `${article.title} | Corporación GC`,
      description: article.excerpt,
      url: `https://www.corporaciongc.com/articulos/${slug}`,
      siteName: "Corporación GC",
      locale: "es_CR",
      type: "article",
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

  /* Find matching team members for author bio (supports multiple coauthors) */
  const authorMembers = article.author
    ? TEAM.filter((m) =>
        article.author!.toLowerCase().includes(m.name.replace(/^(Dr\.\s|Lic\.\s|Licda\.\s|MSc\.\s)/, "").split(" ")[0].toLowerCase())
      )
    : [];
  const authorMember = authorMembers[0] ?? null;

  /* JSON-LD for academic SEO */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    url: `https://www.corporaciongc.com/articulos/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.corporaciongc.com/articulos/${slug}`,
    },
    image: {
      "@type": "ImageObject",
      url: `https://www.corporaciongc.com/articulos/${slug}/opengraph-image`,
      width: 1200,
      height: 630,
    },
    ...(article.author
      ? {
          author: {
            "@type": "Person",
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
      name: "Corporación GC",
      url: "https://www.corporaciongc.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.corporaciongc.com/images/logo-gc.png",
        width: 492,
        height: 466,
      },
    },
    inLanguage: "es",
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

            {/* About the Author(s) */}
            {authorMembers.length > 0 && (
              <div className="mt-16 pt-8 border-t border-cream/[0.06]">
                <div className="text-[10px] tracking-[0.25em] uppercase text-cream/35 font-medium mb-5">
                  {authorMembers.length > 1 ? "Sobre los autores" : "Sobre el autor"}
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
                        <p className="text-xs text-cream/40 mt-0.5">
                          {member.role} · Corporación GC
                        </p>
                        <p className="text-xs text-cream/55 leading-relaxed mt-2 max-w-[50ch]">
                          {member.shortBio}
                        </p>
                        <Link
                          href={`/abogados/${member.slug}`}
                          className="inline-flex items-center gap-1 text-[11px] text-burgundy hover:text-gold transition-colors duration-300 mt-3"
                        >
                          Ver perfil completo
                          <ArrowSquareOut size={11} weight="bold" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom nav */}
            <div className="mt-10 pt-8 border-t border-cream/[0.06]">
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
