import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RunningHead } from "@/components/ui/RunningHead";
import { BuscadorSitio } from "@/components/busqueda/BuscadorSitio";
import { construirIndiceBusqueda } from "@/lib/busqueda-indice";

/* Búsqueda en todo el sitio (OD-05, 25-11-2026). La página es estática: el
   índice se arma al compilar desde las fuentes del sitio y viaja con ella;
   el buscador corre en el navegador. Queda fuera del índice de Google
   (noindex) y fuera del sitemap, que se arma a mano en app/sitemap.ts: una
   página de resultados no aporta nada a quien llega desde un buscador. */
export const metadata: Metadata = {
  title: "Buscar en el sitio",
  description:
    "Busque en las guías, las áreas de práctica, la jurisprudencia destacada y los perfiles del equipo de Corporación GC.",
  alternates: { canonical: "/buscar" },
  robots: { index: false, follow: true },
};

export default function BuscarPage() {
  const indice = construirIndiceBusqueda();

  return (
    <>
      <Navbar />
      <main id="contenido" className="min-h-[100dvh] bg-surface">
        <div className="mx-auto max-w-[1000px] px-6 pb-24 pt-28 md:px-10 md:pb-32 md:pt-36">
          <nav aria-label="Ruta" className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-cream/65">
            <Link href="/" className="transition-colors duration-300 hover:text-burgundy dark:hover:text-hilo-texto">
              Inicio
            </Link>
            <span aria-hidden="true" className="text-cream/30">›</span>
            <span aria-current="page" className="text-cream/75">Buscar</span>
          </nav>

          <RunningHead title="Buscar en el sitio" />

          <h1 className="font-display text-3xl leading-[1.05] tracking-tighter text-cream md:text-5xl">
            ¿Qué necesita encontrar?
          </h1>
          <p className="type-body mt-5 max-w-[60ch] text-cream/75">
            Guías, áreas de práctica, sentencias comentadas y abogados del despacho. Puede escribir sin tildes:
            «licitacion» encuentra «licitación».
          </p>

          <div className="mt-10">
            {/* useSearchParams necesita un límite de Suspense en una página
                estática; mientras tanto se ve el campo vacío. */}
            <Suspense fallback={<div className="h-[52px] border-b border-cream/20" />}>
              <BuscadorSitio indice={indice} />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
