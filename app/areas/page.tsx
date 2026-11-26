import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PRACTICE_AREA_PAGES } from "@/lib/constants";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { areasMetadata } from "@/lib/page-metadata";
import { RunningHead } from "@/components/ui/RunningHead";
import { Migas } from "@/components/layout/Migas";
import { FUERA_DEL_NUCLEO, groupAreas } from "@/components/areas/grupos";
import { LlamadaArea, enlaceWhatsApp } from "@/components/areas/LlamadaArea";

export const metadata: Metadata = {
  ...areasMetadata,
  alternates: {
    canonical: "https://www.corporaciongc.com/areas",
  },
};

/* ── SEO: Structured Data (JSON-LD) ── */

const jsonLdCollectionPage = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.corporaciongc.com/areas#webpage",
  name: "Áreas de Práctica en Derecho Público y Administrativo | Corporación GC",
  description:
    `${PRACTICE_AREA_PAGES.length} áreas de práctica legal especializadas en Derecho Público costarricense: litigio contencioso-administrativo, medidas cautelares, casación ante Sala Primera, recursos de amparo, contratación pública y más.`,
  url: "https://www.corporaciongc.com/areas",
  isPartOf: { "@id": "https://www.corporaciongc.com/#website" },
  about: { "@id": "https://www.corporaciongc.com/#organization" },
  provider: { "@id": "https://www.corporaciongc.com/#organization" },
  inLanguage: "es-CR",
  dateModified: "2026-03-28",
  mainEntity: {
    "@type": "ItemList",
    name: "Áreas de Práctica — Corporación GC",
    numberOfItems: PRACTICE_AREA_PAGES.length,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: PRACTICE_AREA_PAGES.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: area.title,
      description: area.subtitle,
      url: `https://www.corporaciongc.com/areas/${area.slug}`,
    })),
  },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://www.corporaciongc.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Áreas de Práctica",
      item: "https://www.corporaciongc.com/areas",
    },
  ],
};

/* Índice en secciones (D-21, 25-11-2026). Las tarjetas con icono, de una en
   una, ocupaban seis pantallas en escritorio y diez en el teléfono. Ahora el
   índice reutiliza los grupos del explorador de la portada
   (components/areas/grupos.ts) como secciones y presenta cada área como una
   fila con filete, en dos columnas, con el mismo trazo al pasar el cursor
   que las filas del explorador. Lo que queda fuera del núcleo en Derecho
   Público va al final, como cobertura complementaria. */
const GRUPO_COMPLEMENTARIO = "Cobertura complementaria";

export default function AreasPage() {
  const grupos = [
    ...groupAreas(PRACTICE_AREA_PAGES),
    {
      title: GRUPO_COMPLEMENTARIO,
      items: PRACTICE_AREA_PAGES.filter((a) => FUERA_DEL_NUCLEO.has(a.slug)),
    },
  ].filter((g) => g.items.length > 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([jsonLdCollectionPage, jsonLdBreadcrumb]),
        }}
      />
      <Navbar />
      <main id="contenido" className="bg-surface min-h-[100dvh]">
        <div className="pt-28 md:pt-36 pb-20 md:pb-32">
          <div className="max-w-[1000px] mx-auto px-6 md:px-10">
            {/* Migas, con los mismos rótulos del BreadcrumbList (D-22). */}
            <Migas
              className="mb-8"
              items={[
                { label: "Inicio", href: "/" },
                { label: "Áreas de Práctica" },
              ]}
            />

            <RunningHead title="Áreas de práctica" />

            <h1 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream">
              Áreas de práctica en Derecho Público
            </h1>

            <p className="mt-6 text-base text-cream/[0.78] leading-[1.7] max-w-[62ch]">
              Corporación GC es un bufete costarricense especializado en
              Derecho Público. Cada área de práctica refleja una competencia
              específica de nuestro equipo: desde la interposición de demandas ante
              el Tribunal Contencioso Administrativo hasta la defensa en
              procedimientos administrativos y la impugnación de sentencias ante la
              Sala Primera de la Corte Suprema de Justicia.
            </p>

            {grupos.map((g, gi) => {
              const idGrupo = `grupo-${gi + 1}`;
              return (
                <section key={g.title} aria-labelledby={idGrupo} className="mt-14 md:mt-16">
                  <h2
                    id={idGrupo}
                    className="font-display text-xl md:text-2xl text-cream tracking-tight"
                  >
                    {g.title}
                  </h2>
                  <ul role="list" className="mt-5 grid gap-x-10 sm:grid-cols-2">
                    {g.items.map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={`/areas/${area.slug}`}
                          className="group relative flex h-full flex-col border-t border-cream/[0.12] py-4 sm:py-5 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hilo"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-burgundy-light transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 dark:bg-hilo"
                          />
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-base font-semibold leading-snug tracking-[-0.01em] text-cream transition-colors duration-300 group-hover:text-burgundy-light dark:group-hover:text-hilo-texto">
                              {area.title}
                            </h3>
                            <ArrowRight
                              size={15}
                              aria-hidden="true"
                              className="mt-1 shrink-0 text-cream/30 transition-[color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:text-burgundy-light group-focus-visible:text-burgundy-light dark:group-hover:text-hilo-texto"
                            />
                          </div>
                          <span className="mt-1.5 block text-sm leading-relaxed text-cream/[0.72]">
                            {area.subtitle}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}

            {/* Llamada: el mismo patrón y los mismos dos rótulos que las
                páginas de área (D-12). */}
            <LlamadaArea
              className="mt-16"
              titulo="¿Necesita asesoría en Derecho Público?"
              texto="Cuéntenos su caso para que nuestro equipo lo evalúe."
              whatsapp={enlaceWhatsApp()}
              contactTarget="areas-indice"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
