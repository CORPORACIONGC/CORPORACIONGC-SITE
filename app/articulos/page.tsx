import Link from "next/link";
import {
  getAllArticles,
  formatDate,
  publicationTypeLabel,
} from "@/lib/articles";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  FilePdf,
  Article,
  ArrowLeft,
  User,
} from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Publicaciones Académicas | Corporación GC",
  description:
    "Artículos académicos, tesis y publicaciones especializadas en Derecho Administrativo, Contencioso Administrativo y Derecho Público por los abogados de Corporación GC.",
};

export default function ArticulosPage() {
  const articles = getAllArticles();

  return (
    <>
      <Navbar />
      <main className="bg-surface min-h-[100dvh]">
        {/* Header */}
        <div className="pt-28 md:pt-36 pb-12 md:pb-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-gold transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={14} weight="regular" />
              Volver al inicio
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-cream/35 font-medium">
                Publicaciones Académicas
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
              Artículos y{" "}
              <span className="text-burgundy">análisis jurídico</span>
            </h1>
            <p className="mt-4 text-sm text-cream/45 leading-relaxed max-w-[55ch]">
              Investigación original en Derecho Público que aporta al
              debate jurídico, no lo resume.
            </p>
          </div>
        </div>

        {/* Articles grid */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24 md:pb-32">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articulos/${article.slug}`}
                  className="group block p-6 rounded-xl border border-cream/[0.06] bg-cream/[0.02] hover:border-burgundy/20 transition-all duration-400"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className={`p-1.5 rounded-md ${
                        article.type === "pdf"
                          ? "bg-burgundy/[0.08] text-burgundy"
                          : "bg-gold/[0.15] text-gold"
                      }`}
                    >
                      {article.type === "pdf" ? (
                        <FilePdf size={14} weight="duotone" />
                      ) : (
                        <Article size={14} weight="duotone" />
                      )}
                    </div>
                    {article.publicationType && (
                      <span className="text-[9px] tracking-wider uppercase text-cream/40 font-medium">
                        {publicationTypeLabel(article.publicationType)}
                      </span>
                    )}
                    <span className="text-[10px] text-cream/20 ml-auto">
                      {formatDate(article.date)}
                    </span>
                  </div>

                  <h2 className="font-display text-lg font-semibold tracking-tight text-cream group-hover:text-gold transition-colors duration-300">
                    {article.title}
                  </h2>

                  {article.author && (
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] text-cream/40">
                      <User size={11} weight="regular" />
                      <span>{article.author}</span>
                      {article.institution && (
                        <span className="text-cream/25">
                          · {article.institution}
                        </span>
                      )}
                    </div>
                  )}

                  <p className="mt-2 text-xs text-cream/45 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  {article.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[9px] tracking-wide bg-cream/[0.06] text-cream/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 px-6 rounded-2xl border border-dashed border-cream/[0.08] bg-cream/[0.02]">
              <Article
                size={48}
                weight="duotone"
                className="mx-auto text-cream/15 mb-4"
              />
              <p className="text-base text-cream/35 font-display mb-2">
                Próximamente
              </p>
              <p className="text-xs text-cream/25 max-w-[40ch] mx-auto">
                Las publicaciones académicas y artículos jurídicos aparecerán
                aquí.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
