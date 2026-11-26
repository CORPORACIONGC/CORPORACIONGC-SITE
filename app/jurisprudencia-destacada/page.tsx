import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { getAllSentencias } from "@/lib/jurisprudencia";
import { FilasSentencias, filaDe } from "@/components/sections/JurisprudenciaDestacada";
import { FIRM } from "@/lib/constants";
import { jurisprudenciaMetadata } from "@/lib/page-metadata";
import { RunningHead } from "@/components/ui/RunningHead";

export const metadata: Metadata = {
  ...jurisprudenciaMetadata,
  alternates: {
    canonical: `${FIRM.url}/jurisprudencia-destacada`,
  },
};


export default function JurisprudenciaDestacadaIndexPage() {
  const sentencias = getAllSentencias();

  const jsonLdCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Jurisprudencia Destacada | Corporación GC",
    description:
      "Sentencias redactadas por el Dr. Óscar Eduardo González Camacho en la Sala Primera (2002–2014): análisis, pasajes literales y texto íntegro en Nexus.",
    url: `${FIRM.url}/jurisprudencia-destacada`,
    isPartOf: { "@id": `${FIRM.url}/#website` },
    about: {
      "@type": "Person",
      "@id": `${FIRM.url}/abogados/oscar-gonzalez#person`,
      name: "Óscar Eduardo González Camacho",
      honorificPrefix: "Dr.",
      jobTitle:
        "Ex-Magistrado de la Sala Primera de la Corte Suprema de Justicia",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sentencias.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${FIRM.url}/jurisprudencia-destacada/${s.slug}`,
        name: `${s.titulo} — ${s.numero}`,
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
        item: FIRM.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Jurisprudencia Destacada",
        item: `${FIRM.url}/jurisprudencia-destacada`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdCollection),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdBreadcrumb),
        }}
      />
      <Navbar />

      <main id="contenido" className="bg-surface min-h-[100dvh]">
        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-20">
          <div className="absolute top-20 inset-x-0 h-px bg-cream/[0.08]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-burgundy/[0.04] blur-[140px] pointer-events-none hidden dark:block" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-10 relative z-10">
            {/* Migas (D-22): el mismo patrón de las guías y las áreas. */}
            <nav aria-label="Ruta" className="mb-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-cream/65">
              <Link href="/" className="hover:text-burgundy dark:hover:text-hilo-texto transition-colors duration-300">
                Inicio
              </Link>
              <span aria-hidden="true" className="text-cream/30">›</span>
              <span aria-current="page" className="text-cream/75">Jurisprudencia destacada</span>
            </nav>

            <AnimatedEntry>
              <RunningHead title="Jurisprudencia destacada" />
            </AnimatedEntry>

            <AnimatedEntry delay={0.1}>
              <h1 className="font-display text-4xl md:text-6xl tracking-tighter leading-[1.02] text-cream mb-6 max-w-[18ch]">
                Sentencias que marcaron el rumbo del Derecho costarricense
              </h1>
            </AnimatedEntry>

            <AnimatedEntry delay={0.2}>
              <p className="text-lg text-cream/65 leading-relaxed max-w-[60ch] mb-3">
                Selección de fallos redactados por el{" "}
                <Link
                  href="/abogados/oscar-gonzalez"
                  className="text-cream/85 underline decoration-cream/30 underline-offset-4 transition-colors duration-300 hover:text-emphasis hover:decoration-current"
                >
                  Dr. Óscar Eduardo González Camacho
                </Link>{" "}
                durante su gestión como Magistrado de la Sala Primera
                (2002–2014). Cada sentencia con pasajes literales verificados,
                análisis doctrinal y enlace a su texto íntegro en Nexus.
              </p>
            </AnimatedEntry>

            {/* Qué significa la etiqueta de cada ficha. Sin esta línea la
                etiqueta es adorno, y antes lo era: cinco de las seis
                sentencias decían «Sentencia de Referencia». */}
            <AnimatedEntry delay={0.25}>
              <p className="text-sm text-cream/65 leading-relaxed max-w-[68ch]">
                Cada sentencia lleva el estado de su criterio, comprobado contra
                los fallos posteriores que la citan.{" "}
                <span className="text-cream/70">Recogida en la ley</span>{" "}
                cuando el legislador convirtió la regla en norma escrita;{" "}
                <span className="text-cream/70">criterio vigente</span> cuando
                ningún fallo posterior de la Sala la modificó;{" "}
                <span className="text-cream/70">criterio matizado</span> cuando
                le fijaron un límite, y{" "}
                <span className="text-cream/70">criterio variado</span> cuando
                lo cambiaron. En los dos últimos casos la ficha nombra el voto
                y el año.
              </p>
            </AnimatedEntry>
          </div>
        </section>

        {/* ─── INDEX OF SENTENCIAS ─── */}
        <section className="relative pb-24 md:pb-32">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            {/* D-08 (25-11-2026): las filas del índice que acompaña al folio
                de la portada, con la materia debajo del título porque aquí
                la fila tiene todo el ancho. Sin tarjetas ni pastillas: el
                papel queda para la sentencia destacada de la portada. */}
            <AnimatedEntry delay={0.1}>
              <FilasSentencias
                sentencias={sentencias.map((s) => filaDe(s, true))}
                etiqueta="Sentencias destacadas"
                nivelTitulo="h2"
              />
            </AnimatedEntry>

            {/* Note about more coming */}
            {sentencias.length < 8 && (
              <AnimatedEntry delay={0.3}>
                <div className="mt-10 text-center text-xs text-cream/65 italic">
                  Selección en preparación. Próximamente se publicarán más
                  sentencias verificadas.
                </div>
              </AnimatedEntry>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
