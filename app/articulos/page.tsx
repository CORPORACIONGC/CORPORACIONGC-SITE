import type { Metadata } from "next";
import Link from "next/link";
import {
  getAllArticles,
  getPrimaryArea,
  formatDate,
  publicationTypeLabel,
  type ArticleMeta,
} from "@/lib/articles";
import { GUIAS_MAS_CONSULTADAS } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  FilePdf,
  Article,
  ArrowLeft,
  User,
} from "@phosphor-icons/react/dist/ssr";
import { articulosMetadata } from "@/lib/page-metadata";
import { RunningHead } from "@/components/ui/RunningHead";

export const metadata: Metadata = {
  ...articulosMetadata,
  alternates: {
    canonical: "https://www.corporaciongc.com/articulos",
  },
};

/* Las secciones del índice agrupan las áreas por familia, en el orden en que
   la gente las busca. Cada pieza va a la sección de su área principal (la
   primera de su frontmatter); las que no calzan, a «Otras publicaciones». */
const SECCIONES: { titulo: string; area: string; areas: string[] }[] = [
  {
    titulo: "Litigio contencioso-administrativo",
    area: "litigio-contencioso-administrativo",
    areas: ["litigio-contencioso-administrativo", "medidas-cautelares", "casacion-sala-primera"],
  },
  {
    titulo: "Contratación pública",
    area: "contratacion-publica",
    areas: ["contratacion-publica", "alianzas-publico-privadas-infraestructura"],
  },
  { titulo: "Recursos de amparo", area: "recursos-de-amparo", areas: ["recursos-de-amparo", "acciones-de-inconstitucionalidad"] },
  {
    titulo: "Procedimiento y vía administrativa",
    area: "derecho-administrativo",
    areas: ["derecho-administrativo", "procedimientos-sancionatorios", "empleo-publico"],
  },
  {
    titulo: "Propiedad, urbanismo y municipalidades",
    area: "expropiaciones",
    areas: ["expropiaciones", "materia-municipal", "derecho-urbanistico", "zona-maritimo-terrestre", "dominio-publico"],
  },
  {
    titulo: "Regulación y tecnología",
    area: "gobierno-digital-inteligencia-artificial-datos",
    areas: ["gobierno-digital-inteligencia-artificial-datos", "regulacion-fintech-criptoactivos"],
  },
];

function Tarjeta({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/articulos/${article.slug}`}
      className="gc-tarjeta group block p-6 rounded-xl border border-cream/[0.06] bg-cream/[0.02]"
    >
      <div className="flex items-center gap-2 mb-4">
        <div
          className={`p-1.5 rounded-md transition-colors duration-300 group-hover:bg-burgundy group-hover:text-white ${
            article.type === "pdf"
              ? "bg-burgundy/[0.08] text-burgundy"
              : "bg-emphasis/[0.15] text-emphasis"
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

      <h3 className="font-display text-lg font-semibold tracking-tight text-cream group-hover:text-emphasis transition-colors duration-300">
        {article.title}
      </h3>

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
  );
}

export default function ArticulosPage() {
  const articles = getAllArticles();
  const enEspanol = articles.filter((a) => a.lang !== "en");
  const enIngles = articles.filter((a) => a.lang === "en");
  const masConsultadas = GUIAS_MAS_CONSULTADAS.flatMap((slug) => enEspanol.filter((a) => a.slug === slug));
  const secciones = SECCIONES.map((sec) => ({
    ...sec,
    piezas: enEspanol.filter((a) => sec.areas.includes(getPrimaryArea(a) ?? "")),
  })).filter((sec) => sec.piezas.length > 0);
  const agrupadas = new Set(secciones.flatMap((sec) => sec.piezas.map((a) => a.slug)));
  const otras = enEspanol.filter((a) => !agrupadas.has(a.slug));

  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guías y análisis de Derecho Público en Costa Rica | Corporación GC",
    description:
      "Guías prácticas, artículos y tesis de Derecho Administrativo, Contencioso Administrativo y Derecho Público de los abogados de Corporación GC, ordenados por materia.",
    url: "https://www.corporaciongc.com/articulos",
    isPartOf: { "@id": "https://www.corporaciongc.com/#website" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://www.corporaciongc.com/articulos/${a.slug}`,
        name: a.title,
      })),
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.corporaciongc.com" },
      { "@type": "ListItem", position: 2, name: "Guías y publicaciones", item: "https://www.corporaciongc.com/articulos" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollection) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <Navbar />
      <main className="bg-surface min-h-[100dvh]">
        {/* Header */}
        <div className="pt-28 md:pt-36 pb-12 md:pb-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-emphasis transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={14} weight="regular" />
              Volver al inicio
            </Link>

            <RunningHead title="Guías y publicaciones" />

            <h1 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
              Guías y{" "}
              <span className="text-burgundy">análisis de Derecho Público</span>
            </h1>
            <p className="mt-4 text-sm text-cream/45 leading-relaxed max-w-[65ch]">
              Guías prácticas para quien enfrenta a la Administración y
              publicaciones académicas del equipo, ordenadas por materia.
            </p>
            <div className="mt-8 text-sm text-cream/55 leading-relaxed max-w-[65ch] space-y-4">
              <p>
                Corporación GC es un bufete de abogados costarricense
                especializado en Derecho Público. Desde su fundación en 2015,
                nuestro equipo ha mantenido un compromiso con la producción
                académica rigurosa: tesis de licenciatura, artículos en revistas
                jurídicas indexadas y libros que han contribuido a la doctrina
                del Derecho Administrativo y Contencioso Administrativo en
                Costa Rica.
              </p>
              <p>
                Esta sección reúne las guías prácticas de la firma, que
                explican con la ley y la jurisprudencia cómo actuar frente al
                Estado, y las publicaciones de sus abogados, entre ellas
                investigaciones sobre inteligencia artificial
                aplicada a la justicia, control jurisdiccional de actos de
                gobierno, discrecionalidad administrativa en materia
                urbanística, responsabilidad patrimonial del Estado por
                iatrogenia y procedimiento expropiatorio, entre otros temas.
                Cada publicación refleja el enfoque de la firma: litigar desde
                el conocimiento profundo de la materia.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24 md:pb-32 space-y-16 md:space-y-20">
          {/* Las más consultadas: se revisa cada mes contra Search Console,
              igual que las guías del pie (lib/constants.ts). */}
          {masConsultadas.length > 0 && (
            <section aria-labelledby="mas-consultadas">
              <h2 id="mas-consultadas" className="font-display text-xl md:text-2xl tracking-tight text-cream mb-6">
                Guías más consultadas
              </h2>
              <ol role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 border-t border-cream/10">
                {masConsultadas.map((a, i) => (
                  <li key={a.slug} className="border-b border-cream/10">
                    <Link href={`/articulos/${a.slug}`} className="group flex items-baseline gap-4 py-4">
                      <span className="w-6 shrink-0 text-sm tabular-nums text-cream/35">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[15px] leading-snug text-cream/85 transition-colors duration-300 group-hover:text-emphasis">
                        {a.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {secciones.map((sec) => (
            <section key={sec.titulo} aria-labelledby={`sec-${sec.area}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-6">
                <h2 id={`sec-${sec.area}`} className="font-display text-xl md:text-2xl tracking-tight text-cream">
                  {sec.titulo}
                </h2>
                <Link
                  href={`/areas/${sec.area}`}
                  className="text-sm text-cream/55 hover:text-emphasis transition-colors duration-300"
                >
                  Ver el área →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sec.piezas.map((article) => (
                  <Tarjeta key={article.slug} article={article} />
                ))}
              </div>
            </section>
          ))}

          {otras.length > 0 && (
            <section aria-labelledby="sec-otras">
              <h2 id="sec-otras" className="font-display text-xl md:text-2xl tracking-tight text-cream mb-6">
                Otras publicaciones
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {otras.map((article) => (
                  <Tarjeta key={article.slug} article={article} />
                ))}
              </div>
            </section>
          )}

          {enIngles.length > 0 && (
            <section aria-labelledby="sec-en" lang="en">
              <h2 id="sec-en" className="font-display text-xl md:text-2xl tracking-tight text-cream mb-6">
                In English
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {enIngles.map((article) => (
                  <Tarjeta key={article.slug} article={article} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
