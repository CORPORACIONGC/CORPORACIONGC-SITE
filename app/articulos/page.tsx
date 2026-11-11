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
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { IndiceArticulos, type PiezaIndice } from "@/components/sections/IndiceArticulos";
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

/** Lo que el índice necesita de cada pieza, ya formateado en el servidor. */
function piezaDe(a: ArticleMeta): PiezaIndice {
  return {
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    esPdf: a.type === "pdf",
    rotulo: a.publicationType ? publicationTypeLabel(a.publicationType, a.lang === "en" ? "en" : "es") : undefined,
    fecha: formatDate(a.date, a.lang === "en" ? "en" : "es"),
    author: a.author,
    institution: a.institution,
    minutos: a.minutos,
    tags: a.tags,
  };
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
        <div className="pt-28 md:pt-36 pb-6 md:pb-8">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 py-2 text-xs text-cream/65 hover:text-emphasis transition-colors duration-300 mb-6"
            >
              <ArrowLeft size={14} weight="regular" />
              Volver al inicio
            </Link>

            <RunningHead title="Guías y publicaciones" />

            <h1 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
              Guías y{" "}
              <span className="text-burgundy">análisis de Derecho Público</span>
            </h1>
            <p className="mt-4 text-base text-cream/80 leading-relaxed max-w-[62ch]">
              Guías prácticas para quien enfrenta a la Administración y
              publicaciones académicas del equipo, ordenadas por materia.
            </p>
          </div>
        </div>

        <IndiceArticulos
          masConsultadas={masConsultadas.map((a) => ({ slug: a.slug, title: a.title }))}
          secciones={[
            ...secciones.map((sec) => ({
              id: `sec-${sec.area}`,
              titulo: sec.titulo,
              areaHref: `/areas/${sec.area}`,
              piezas: sec.piezas.map(piezaDe),
            })),
            ...(otras.length > 0 ? [{ id: "sec-otras", titulo: "Otras publicaciones", piezas: otras.map(piezaDe) }] : []),
            ...(enIngles.length > 0
              ? [{ id: "sec-en", titulo: "In English", lang: "en" as const, piezas: enIngles.map(piezaDe) }]
              : []),
          ]}
        />

        {/* La presentación de la sección va al pie: quien llega busca una
            guía, y el buscador y las materias deben quedar a la vista. */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24 md:pb-32">
          <div className="border-t border-cream/10 pt-10 text-[15px] text-cream/75 leading-relaxed max-w-[65ch] space-y-4">
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
      </main>
      <Footer />
    </>
  );
}
