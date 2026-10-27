import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { FIRM } from "@/lib/constants";
import { editorialMetadata } from "@/lib/page-metadata";
import { RunningHead } from "@/components/ui/RunningHead";

/* Cómo se escriben, se revisan y se corrigen las guías del sitio. Cada guía
   y análisis propio enlaza aquí desde su línea final de alcance. */

export const metadata: Metadata = {
  ...editorialMetadata,
  alternates: { canonical: `${FIRM.url}/politica-editorial` },
};

const enlace = "text-emphasis underline decoration-emphasis/30 underline-offset-4 hover:decoration-emphasis";

export default function PoliticaEditorial() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${FIRM.url}/politica-editorial#page`,
    name: "Política editorial",
    url: `${FIRM.url}/politica-editorial`,
    isPartOf: { "@id": `${FIRM.url}/#website` },
    publisher: { "@id": `${FIRM.url}/#organization` },
    dateModified: "2026-10-27",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="bg-surface min-h-[100dvh]">
        <div className="pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="max-w-[800px] mx-auto px-6 md:px-10">
            <Link
              href="/articulos"
              className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-emphasis transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={14} weight="regular" />
              Guías y publicaciones
            </Link>

            <RunningHead title="Guías y publicaciones" />

            <h1 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream mb-12">
              Política <span className="text-burgundy">editorial</span>
            </h1>

            <article className="prose-legal space-y-8 text-sm text-cream/70 leading-relaxed">
              <p className="text-cream/50 text-xs">Última actualización: 27 de octubre de 2026</p>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">1. Quién escribe y quién revisa</h2>
                <p>
                  Las guías y los análisis de este sitio los escribe el{" "}
                  <Link href="/abogados" className={enlace}>
                    equipo de abogados
                  </Link>{" "}
                  de Corporación GC, y cada pieza lleva la firma de quien la redactó. Las revisa el{" "}
                  <Link href="/abogados/oscar-gonzalez" className={enlace}>
                    Dr. Óscar Eduardo González Camacho
                  </Link>
                  , director de la firma, magistrado de la Sala Primera de la Corte Suprema de Justicia entre 2002 y
                  2014 y coordinador de la comisión redactora del Código Procesal Contencioso Administrativo. Las tesis,
                  los libros y los artículos publicados en revistas se reproducen con la autoría y la referencia de su
                  publicación original.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">2. Fuentes</h2>
                <p>
                  Cada afirmación jurídica se apoya en fuentes oficiales, enlazadas donde se citan y reunidas al final de
                  cada guía:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-cream/85">Normas:</strong> el texto vigente del Sistema Nacional de
                    Legislación Vigente (SINALEVI), de la Procuraduría General de la República, y las publicaciones del
                    diario oficial La Gaceta, de la Imprenta Nacional.
                  </li>
                  <li>
                    <strong className="text-cream/85">Jurisprudencia:</strong> el texto íntegro de las resoluciones en
                    Nexus, el buscador del Poder Judicial, con enlace a cada una.
                  </li>
                  <li>
                    <strong className="text-cream/85">Criterios administrativos:</strong> las resoluciones y los oficios de
                    la Contraloría General de la República y los dictámenes y opiniones jurídicas de la Procuraduría
                    General de la República.
                  </li>
                  <li>
                    <strong className="text-cream/85">Antecedentes legislativos:</strong> los expedientes, dictámenes y
                    actas de la Asamblea Legislativa y los expedientes históricos del Archivo Nacional, para explicar
                    cómo y por qué se redactó una norma.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">3. Cómo se verifica</h2>
                <p>
                  Toda cita entre comillas reproduce el texto de la norma o de la resolución tal como está en la fuente,
                  sin cortar sus salvedades. Cada resolución que se cita se lee completa, y se comprueba qué decidió y
                  con qué resultado antes de atribuirle un criterio. Cuando una afirmación se toma de otro documento que
                  la cita, se indica así. Los artículos de ley se cotejan con su texto vigente y con sus reformas.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">4. Fechas y revisiones</h2>
                <p>
                  Cada guía muestra la fecha en que se publicó. La fecha «Revisado el» aparece solo cuando el contenido
                  se revisó a fondo; un cambio de formato o de enlaces no la modifica. Las piezas sobre hechos en curso,
                  como un reglamento pendiente o un proyecto de ley, llevan una nota «Verificado el» con la fecha de la
                  última comprobación, aunque esta no haya cambiado nada. Las guías prácticas se revisan al menos cada
                  tres meses.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">5. Correcciones</h2>
                <p>
                  Si encuentra un error, escríbanos a{" "}
                  <a href="mailto:info@corporaciongc.com" className={enlace}>
                    info@corporaciongc.com
                  </a>{" "}
                  e indique la guía y el pasaje. Lo revisamos contra la fuente y, si corresponde, corregimos el texto y
                  actualizamos su fecha de revisión.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">6. Alcance</h2>
                <p>
                  Las guías explican el marco jurídico general y los criterios de los tribunales y de la Administración.
                  Su aplicación a un caso concreto depende de los hechos y del expediente, y requiere una revisión
                  profesional. Las guías no utilizan información de los asuntos de nuestros clientes. Si necesita
                  analizar su situación,{" "}
                  <Link href="/contacto" className={enlace}>
                    escríbanos
                  </Link>
                  .
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
