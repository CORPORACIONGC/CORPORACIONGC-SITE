import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { CitasExplorador } from "@/components/jurisprudencia/CitasExplorador";
import { ConNegritas } from "@/components/jurisprudencia/ConNegritas";
import {
  Anclajes,
  Comparacion,
  Formas,
  LineaTemporal,
  PasajeLiteral,
  Periodo,
  Recepcion,
  Reparto,
  Trayectoria,
} from "@/components/jurisprudencia/SentenciaVisuales";
import {
  esLiteral,
  getAllSentencias,
  getSentenciaBySlug,
  nexusUrl,
  scijUrl,
  type SeccionAnalisis,
  type SentenciaDestacada,
} from "@/lib/jurisprudencia";
import { GRUPOS_CITAS, RESOLUCIONES_QUE_CITAN } from "@/lib/jurisprudencia-citas";
import { FIRM } from "@/lib/constants";
import { buildJurisprudenciaMetadata } from "@/lib/page-metadata";

// Slugs inexistentes devuelven un 404 real (no un soft-404 con estado 200),
// evitando que Google los archive como "rastreada, sin indexar".
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSentencias().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSentenciaBySlug(slug);
  const base = buildJurisprudenciaMetadata(s ?? null, slug);
  if (!s) return base;
  return {
    ...base,
    alternates: {
      canonical: `${FIRM.url}/jurisprudencia-destacada/${slug}`,
    },
    openGraph: {
      ...base.openGraph,
      url: `${FIRM.url}/jurisprudencia-destacada/${slug}`,
      siteName: FIRM.name,
      locale: FIRM.locale,
    },
  };
}

export default async function SentenciaDestacadaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sentencia = getSentenciaBySlug(slug);
  if (!sentencia) notFound();

  /* ── JSON-LD: Article + LegalForceStatus ── */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${FIRM.url}/jurisprudencia-destacada/${slug}#article`,
    headline: `${sentencia.titulo} — ${sentencia.numero}`,
    description: sentencia.metaDescription,
    author: {
      "@type": "Person",
      "@id": `${FIRM.url}/abogados/oscar-gonzalez#person`,
      name: "Dr. Óscar Eduardo González Camacho",
    },
    publisher: {
      "@id": `${FIRM.url}/#organization`,
    },
    inLanguage: "es-CR",
    isPartOf: { "@id": `${FIRM.url}/#website` },
    datePublished: sentencia.fechaISO,
    about: {
      "@type": "Thing",
      name: sentencia.materia,
    },
    /* El texto íntegro vive en Nexus PJ; el análisis se basa en él. */
    isBasedOn: nexusUrl(sentencia.nexusId),
    citation: [...(sentencia.precedentes ?? []), ...(sentencia.citadaPor ?? [])].flatMap((p) =>
      p.nexusId ? [nexusUrl(p.nexusId)] : [],
    ),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: FIRM.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Jurisprudencia Destacada",
        item: `${FIRM.url}/jurisprudencia-destacada`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: sentencia.titulo,
        item: `${FIRM.url}/jurisprudencia-destacada/${slug}`,
      },
    ],
  };

  const romanos = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  const secciones = sentencia.analisis ?? [];
  const indice = [
    ...secciones.map((sec) => ({ id: sec.id, titulo: sec.titulo })),
    { id: "fuentes", titulo: "Texto íntegro y bibliografía" },
  ];
  const ficha: [string, string][] = [
    ["Resolución", sentencia.numero.replace("Resolución ", "")],
    ["Tribunal", sentencia.tribunal],
    ["Fecha", `${sentencia.fecha}${sentencia.hora ? ` · ${sentencia.hora}` : ""}`],
    ["Expediente", sentencia.expediente],
    ["Materia", sentencia.materia],
    ["Redacta", sentencia.redactor],
  ];
  const sintesis = sentencia.sintesisPortada;

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

      <main className="min-h-[100dvh] bg-surface">
        {/* ─── Portada del documento: título y ficha de la resolución ─── */}
        <header className="pt-28 md:pt-36">
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <Link
              href="/jurisprudencia-destacada"
              className="inline-flex items-center gap-1.5 text-xs text-cream/65 transition-colors duration-300 hover:text-burgundy dark:hover:text-gold"
            >
              <ArrowLeft size={14} weight="regular" />
              Jurisprudencia destacada
            </Link>

            <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center lg:gap-20">
              <div>
                <p className="type-label text-burgundy dark:text-gold">
                  {[sentencia.badge?.label, sentencia.area].filter(Boolean).join(" · ")}
                </p>
                <h1 className="type-headline mt-5 max-w-[18ch] text-cream">{sentencia.titulo}</h1>
                {sentencia.subtitulo && (
                  <p className="type-lead mt-6 max-w-[56ch] text-cream/75">{sentencia.subtitulo}</p>
                )}
              </div>

              {/* Ficha en papel, como el folio de la portada */}
              <aside className="gc-papel rounded-md p-7 md:p-8" aria-label="Ficha de la resolución">
                <p className="type-label text-cream/65">Ficha de la resolución</p>
                <span aria-hidden="true" className="mt-4 block h-px w-10 bg-gold" />
                <dl className="mt-5 divide-y divide-cream/10">
                  {ficha.map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[96px_minmax(0,1fr)] gap-3 py-2.5">
                      <dt className="pt-0.5 text-[13px] text-cream/65">{k}</dt>
                      <dd className="text-[15px] leading-snug text-cream/90">{v}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={nexusUrl(sentencia.nexusId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-burgundy transition-colors hover:text-burgundy-light dark:text-gold dark:hover:text-gold-light"
                >
                  Texto íntegro en Nexus
                  <ArrowSquareOut size={14} weight="bold" aria-hidden="true" />
                </a>
              </aside>
            </div>

            {/* En síntesis: el caso, el análisis y el impacto */}
            {sintesis && (
              <section
                aria-label="En síntesis"
                className="mt-16 grid border-y border-cream/10 md:mt-20 md:grid-cols-3 md:divide-x md:divide-cream/10"
              >
                {[
                  ["El caso", sintesis.caso],
                  ["El análisis", sintesis.analisis],
                  ["El impacto", sintesis.impacto],
                ].map(([t, x]) => (
                  <div key={t} className="border-b border-cream/10 py-7 last:border-b-0 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0">
                    <h2 className="type-label text-cream/65">{t}</h2>
                    <p className="mt-3 text-[15px] leading-[1.7] text-cream/80">
                      <ConNegritas texto={x} />
                    </p>
                  </div>
                ))}
              </section>
            )}
          </div>
        </header>

        {/* ─── El análisis, en prosa, con índice al margen ─── */}
        <div className="mx-auto mt-20 max-w-[1200px] px-6 md:mt-28 md:px-10 lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16">
          <nav aria-label="Contenido del análisis" className="hidden lg:block">
            <div className="sticky top-32">
              <p className="type-label mb-5 text-cream/65">Contenido</p>
              <ol className="space-y-1 border-l border-cream/10">
                {indice.map((x, i) => (
                  <li key={x.id}>
                    <a
                      href={`#${x.id}`}
                      className="-ml-px flex gap-3 border-l border-transparent py-1.5 pl-4 text-sm leading-snug text-cream/70 transition-colors duration-300 hover:border-burgundy hover:text-cream dark:hover:border-gold"
                    >
                      <span className="w-7 shrink-0 tabular-nums text-cream/65">{romanos[i]}</span>
                      {x.titulo}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="min-w-0">
            {secciones.map((sec) => (
              <Seccion key={sec.id} sec={sec} sentencia={sentencia} />
            ))}

            {/* ─── Fuentes: texto íntegro en Nexus y bibliografía ─── */}
            <section id="fuentes" className="scroll-mt-32 pb-8">
              <h2 className="type-title mb-8 border-b border-cream/10 pb-5 text-cream md:mb-10 md:pb-6">
                Texto íntegro y bibliografía
              </h2>
              <a
                href={nexusUrl(sentencia.nexusId)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-5 rounded-md border border-cream/10 p-6 transition-colors duration-300 hover:border-burgundy/30 dark:hover:border-gold/30 md:flex-row md:items-center md:justify-between md:p-7"
              >
                <div>
                  <p className="text-[17px] font-semibold tracking-[-0.01em] text-cream">
                    {sentencia.numero}, en Nexus del Poder Judicial
                  </p>
                  <p className="mt-1.5 text-sm text-cream/65">
                    Resultandos, considerandos, por tanto y firmas, en la fuente oficial.
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-burgundy transition-colors group-hover:text-burgundy-light dark:text-gold dark:group-hover:text-gold-light">
                  Leer en Nexus
                  <ArrowSquareOut size={14} weight="bold" aria-hidden="true" />
                </span>
              </a>

              <div className="prose-article mt-12">
                <div className="gc-fig gc-biblio">
                  <section className="gc-juris-grupo">
                    <span className="gc-fig-label">Sentencia comentada</span>
                    <ol>
                      <li className="gc-juris-item">
                        <span className="gc-juris-id">
                          <b>
                            <a href={nexusUrl(sentencia.nexusId)} target="_blank" rel="noopener noreferrer">
                              {sentencia.numero}
                            </a>
                          </b>
                          <span className="gc-juris-org">{sentencia.tribunal}</span>
                          <span className="gc-juris-fecha">{sentencia.fecha}</span>
                        </span>
                        <span className="gc-juris-criterio">
                          <span className="gc-juris-tema">{sentencia.materia}</span>
                          Expediente {sentencia.expediente}. {sentencia.redactorTextual}
                        </span>
                      </li>
                    </ol>
                  </section>

                  {sentencia.precedentes && sentencia.precedentes.length > 0 && (
                    <section className="gc-juris-grupo">
                      <span className="gc-fig-label">Jurisprudencia citada</span>
                      <ol>
                        {sentencia.precedentes.map((p) => (
                          <li key={p.numero} className="gc-juris-item">
                            <span className="gc-juris-id">
                              <b>
                                {p.nexusId ? (
                                  <a href={nexusUrl(p.nexusId)} target="_blank" rel="noopener noreferrer">
                                    {p.numero}
                                  </a>
                                ) : (
                                  p.numero
                                )}
                              </b>
                              <span className="gc-juris-org">{p.organo ?? "Sala Primera"}</span>
                              <span className="gc-juris-fecha">{p.fecha}</span>
                            </span>
                            <span className="gc-juris-criterio">{p.nota}</span>
                          </li>
                        ))}
                      </ol>
                    </section>
                  )}

                  {sentencia.citadaPor && sentencia.citadaPor.length > 0 && (
                    <section className="gc-juris-grupo">
                      <span className="gc-fig-label">Jurisprudencia posterior que la cita</span>
                      <ol>
                        {sentencia.citadaPor.map((p) => (
                          <li key={p.nexusId} className="gc-juris-item">
                            <span className="gc-juris-id">
                              <b>
                                <a href={nexusUrl(p.nexusId)} target="_blank" rel="noopener noreferrer">
                                  {p.numero}
                                </a>
                              </b>
                              <span className="gc-juris-org">{p.organo}</span>
                              <span className="gc-juris-fecha">{p.fecha}</span>
                            </span>
                            <span className="gc-juris-criterio">{p.nota}</span>
                          </li>
                        ))}
                      </ol>
                    </section>
                  )}

                  {sentencia.normativa && sentencia.normativa.length > 0 && (
                    <section className="gc-juris-grupo">
                      <span className="gc-fig-label">Normativa</span>
                      <ol>
                        {sentencia.normativa.map((n) => (
                          <li key={n.scijId} className="gc-juris-item">
                            <span className="gc-juris-id">
                              <b>
                                <a href={scijUrl(n.scijId)} target="_blank" rel="noopener noreferrer">
                                  {n.nombre}
                                </a>
                              </b>
                              <span className="gc-juris-org">{n.detalle}</span>
                            </span>
                            <span className="gc-juris-criterio">
                              <span className="gc-juris-tema">{n.tema ?? "Disposiciones aplicadas"}</span>
                              {n.articulos}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </section>
                  )}

                  <p className="gc-fig-source">
                    Jurisprudencia: Nexus del Poder Judicial. Normativa: Sistema Costarricense de
                    Información Jurídica (SINALEVI), en su versión vigente.
                  </p>
                </div>
              </div>
            </section>

            {/* ─── Quién redactó la sentencia ─── */}
            <section className="mt-16 grid gap-6 border-t border-cream/10 pt-10 sm:grid-cols-[112px_minmax(0,1fr)] sm:gap-8">
              <div className="relative aspect-[4/5] w-28 overflow-hidden bg-cream/[0.04]">
                <Image
                  src="/images/equipo/oscar-gonzalez-oficina.jpg"
                  alt="Dr. Óscar Eduardo González Camacho"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="type-label text-cream/65">Redactó la sentencia</p>
                <p className="mt-2 text-[19px] font-semibold tracking-[-0.01em] text-cream">
                  Dr. Óscar Eduardo González Camacho
                </p>
                <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-cream/75">
                  Magistrado de la Sala Primera de la Corte Suprema de Justicia (2002–2014),
                  co-redactor del Código Procesal Contencioso Administrativo y fundador de
                  Corporación GC.
                </p>
                <Link
                  href="/abogados/oscar-gonzalez"
                  className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-burgundy transition-colors hover:text-burgundy-light dark:text-gold dark:hover:text-gold-light"
                >
                  Ver su trayectoria
                  <ArrowRight size={14} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </section>
          </article>
        </div>

        {/* ─── Navegación final ─── */}
        <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-16 md:px-10">
          <div className="flex items-center justify-between border-t border-cream/10 pt-8">
            <Link
              href="/jurisprudencia-destacada"
              className="inline-flex items-center gap-1.5 text-sm text-cream/65 transition-colors duration-300 hover:text-burgundy dark:hover:text-gold"
            >
              <ArrowLeft size={14} weight="regular" />
              Jurisprudencia destacada
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-burgundy transition-colors duration-300 hover:text-burgundy-light dark:text-gold dark:hover:text-gold-light"
            >
              Consultar un caso
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

/* Una sección del análisis: título, prosa de la firma con los pasajes
   literales tejidos entre sus párrafos (los de la Sala después del primero;
   los de otras resoluciones, donde indique `tras`), el elemento visual y una
   nota práctica si la hay. */
function Seccion({ sec, sentencia }: { sec: SeccionAnalisis; sentencia: SentenciaDestacada }) {
  const literales = (sec.literales ?? []).flatMap(([p, q, tras = 0]) => {
    const pasaje = sentencia.pasajes[p];
    const parrafo = pasaje?.parrafos[q];
    return parrafo
      ? [{ parrafo, citation: pasaje.citation, tras, href: undefined as string | undefined }]
      : [];
  });
  const externas = (sec.citasExternas ?? []).map((c) => ({
    parrafo: { texto: c.texto, destacar: c.destacar },
    citation: c.citation,
    tras: c.tras ?? 0,
    href: nexusUrl(c.nexusId),
  }));
  const citas = [...literales, ...externas];
  const v = sentencia.visuales ?? {};

  return (
    <section id={sec.id} className="mb-24 scroll-mt-32 md:mb-32">
      <AnimatedEntry>
        <h2 className="type-title mb-8 border-b border-cream/10 pb-5 text-cream md:mb-10 md:pb-6">
          {sec.titulo}
        </h2>
      </AnimatedEntry>

      {citas
        .filter((c) => c.tras === -1)
        .map((c) => (
          <PasajeLiteral key={c.parrafo.texto.slice(0, 32)} parrafo={c.parrafo} citation={c.citation} />
        ))}

      {sec.parrafos.map((x, i) => (
        <Fragment key={x.slice(0, 32)}>
          <p
            className={`type-lead max-w-[66ch] text-cream/80 ${
              i > 0 && !citas.some((c) => c.tras === i - 1) ? "mt-5" : ""
            }`}
          >
            {x}
          </p>
          {citas
            .filter((c) => c.tras === i)
            .map((c) => (
              <PasajeLiteral
                key={c.parrafo.texto.slice(0, 32)}
                parrafo={c.parrafo}
                citation={c.citation}
                href={c.href}
              />
            ))}
        </Fragment>
      ))}

      {sec.visual === "trayectoria" && v.trayectoria && <Trayectoria etapas={v.trayectoria} />}

      {sec.visual === "linea-temporal" && (
        <LineaTemporal
          hitos={(sentencia.precedentes ?? [])
            .filter((p) => !p.organo)
            .map((p) => ({
              anio: p.fecha.slice(-4),
              numero: p.numero,
              fecha: p.fecha,
              href: p.nexusId ? nexusUrl(p.nexusId) : nexusUrl(sentencia.nexusId),
            }))}
          giro={{
            anio: sentencia.fecha.slice(-4),
            numero: sentencia.numero.replace("Resolución N° ", "Resolución "),
            fecha: sentencia.fecha,
            href: nexusUrl(sentencia.nexusId),
          }}
        />
      )}

      {sec.visual === "anclajes" && v.anclajes && (
        <Anclajes anclajes={v.anclajes.filter((a) => esLiteral(sentencia, a.literal))} />
      )}

      {sec.visual === "comparacion" && (v.comparaciones?.[sec.id] ?? v.comparacion) && (
        <Comparacion
          columnas={(v.comparaciones?.[sec.id] ?? v.comparacion ?? []).filter((c) =>
            esLiteral(sentencia, c.literal),
          )}
        />
      )}

      {sec.visual === "periodo" && v.periodo && <Periodo periodo={v.periodo} />}

      {sec.visual === "formas" && v.formas?.[sec.id] && (
        <Formas formas={v.formas[sec.id]} etiqueta={sec.titulo} />
      )}

      {sec.visual === "reparto" && v.reparto && <Reparto reparto={v.reparto} />}

      {sec.visual === "recepcion" && v.recepcion && (
        <Recepcion
          hitos={v.recepcion.map((h) => ({
            ...h,
            enlaces: h.enlaces.flatMap((e) =>
              e.nexusId
                ? [{ etiqueta: e.etiqueta, href: nexusUrl(e.nexusId) }]
                : e.scijId
                  ? [{ etiqueta: e.etiqueta, href: scijUrl(e.scijId) }]
                  : [],
            ),
          }))}
        />
      )}

      {sec.visual === "citas" && v.citas && RESOLUCIONES_QUE_CITAN[sentencia.slug] && (
        <CitasExplorador
          lista={RESOLUCIONES_QUE_CITAN[sentencia.slug]}
          grupos={GRUPOS_CITAS[sentencia.slug] ?? []}
          corte={v.citas.corte}
          metodo={v.citas.metodo}
          csv={v.citas.csv}
        />
      )}

      {sec.nota && (
        <p className="mt-10 max-w-[66ch] border-t border-gold/60 pt-5 text-[17px] leading-relaxed text-cream">
          <span className="type-label mr-3 text-burgundy dark:text-gold">En la práctica</span>
          {sec.nota}
        </p>
      )}
    </section>
  );
}
