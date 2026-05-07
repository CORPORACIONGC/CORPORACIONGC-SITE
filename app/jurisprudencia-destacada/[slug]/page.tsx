import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Quotes,
  Scales,
  BookOpen,
  Gavel,
  CalendarBlank,
  ArrowSquareOut,
  CaretDown,
  FilePdf,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HighlightedText } from "@/components/article/HighlightedText";
import {
  AnimatedEntry,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedEntry";
import {
  getAllSentencias,
  getSentenciaBySlug,
} from "@/lib/jurisprudencia";
import { FIRM } from "@/lib/constants";

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
  if (!s) return {};
  return {
    title: `${s.titulo} · ${s.numero}`,
    description: s.metaDescription,
    alternates: {
      canonical: `${FIRM.url}/jurisprudencia-destacada/${slug}`,
    },
    openGraph: {
      title: `${s.titulo} | ${s.numero} | Corporación GC`,
      description: s.metaDescription,
      url: `${FIRM.url}/jurisprudencia-destacada/${slug}`,
      siteName: FIRM.name,
      locale: FIRM.locale,
      type: "article",
    },
  };
}

const BADGE_STYLES: Record<string, string> = {
  fundacional:
    "bg-gold/[0.12] text-gold border border-gold/30",
  paradigmatica:
    "bg-burgundy/[0.15] text-burgundy-light border border-burgundy/30",
  ambiental:
    "bg-emerald-500/[0.10] text-emerald-300 border border-emerald-500/25",
  doctrinal:
    "bg-cream/[0.08] text-cream/80 border border-cream/15",
};

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
    datePublished: "2004-11-26",
    about: {
      "@type": "Thing",
      name: sentencia.materia,
    },
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
        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden pt-28 md:pt-36 pb-12 md:pb-16">
          {/* Subtle gold accent at top */}
          <div className="absolute top-20 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          {/* Subtle burgundy glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-burgundy/[0.04] blur-[140px] pointer-events-none hidden dark:block" />

          <div className="max-w-[820px] mx-auto px-6 md:px-10 relative z-10">
            <Link
              href="/jurisprudencia-destacada"
              className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-gold transition-colors duration-300 mb-10"
            >
              <ArrowLeft size={14} weight="regular" />
              Jurisprudencia destacada
            </Link>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {sentencia.badge && (
                <span
                  className={`px-3 py-1 rounded-md text-[10px] tracking-[0.18em] uppercase font-medium ${
                    BADGE_STYLES[sentencia.badge.type] ?? BADGE_STYLES.doctrinal
                  }`}
                >
                  {sentencia.badge.label}
                </span>
              )}
              <span className="text-[10px] tracking-wider uppercase text-cream/50 font-medium">
                {sentencia.area}
              </span>
            </div>

            {/* Tribunal + fecha */}
            <div className="flex flex-wrap items-center gap-4 mb-7 text-xs text-cream/45">
              <div className="inline-flex items-center gap-1.5">
                <Scales size={13} weight="duotone" className="text-gold/55" />
                {sentencia.tribunal}
              </div>
              <div className="inline-flex items-center gap-1.5">
                <CalendarBlank
                  size={13}
                  weight="regular"
                  className="text-cream/40"
                />
                {sentencia.fecha}
                {sentencia.hora && (
                  <span className="text-cream/30"> · {sentencia.hora}</span>
                )}
              </div>
            </div>

            {/* Editorial title */}
            <h1 className="font-display text-4xl md:text-6xl tracking-tighter leading-[1.02] text-cream mb-6">
              {sentencia.titulo}
            </h1>

            {sentencia.subtitulo && (
              <p className="text-lg text-cream/60 leading-relaxed max-w-[60ch] mb-10">
                {sentencia.subtitulo}
              </p>
            )}

            {/* Resolución + expediente */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 border-t border-cream/[0.08]">
              <div>
                <div className="text-[9px] tracking-[0.3em] uppercase text-cream/40 mb-1">
                  Resolución
                </div>
                <div className="text-sm font-mono text-cream/85">
                  {sentencia.numero}
                </div>
              </div>
              <div className="h-8 w-px bg-cream/[0.08]" />
              <div>
                <div className="text-[9px] tracking-[0.3em] uppercase text-cream/40 mb-1">
                  Expediente
                </div>
                <div className="text-sm font-mono text-cream/85">
                  {sentencia.expediente}
                </div>
              </div>
              <div className="h-8 w-px bg-cream/[0.08]" />
              <div>
                <div className="text-[9px] tracking-[0.3em] uppercase text-cream/40 mb-1">
                  Materia
                </div>
                <div className="text-sm text-cream/85">{sentencia.materia}</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PULL QUOTE ─── */}
        <section className="relative py-14 md:py-20">
          <div className="max-w-[820px] mx-auto px-6 md:px-10">
            <AnimatedEntry>
              <div className="relative rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/[0.04] via-burgundy/[0.03] to-transparent p-8 md:p-12">
                <Quotes
                  size={36}
                  weight="fill"
                  className="absolute -top-5 left-8 text-gold/60 bg-surface px-2 box-content"
                />
                <p className="font-display italic text-2xl md:text-3xl leading-[1.3] tracking-tight text-cream/95 max-w-[55ch]">
                  «{sentencia.pullQuote.texto}»
                </p>
                {sentencia.pullQuote.citation && (
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px w-8 bg-gold/40" />
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold/70 font-medium">
                      {sentencia.pullQuote.citation}
                    </span>
                  </div>
                )}
              </div>
            </AnimatedEntry>
          </div>
        </section>

        {/* ─── CONTEXTO ─── */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-[760px] mx-auto px-6 md:px-10">
            <AnimatedEntry>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-gold" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold/85 font-medium">
                  Contexto
                </span>
              </div>
            </AnimatedEntry>

            <div className="space-y-5">
              {sentencia.contexto.map((parrafo, i) => (
                <AnimatedEntry key={i} delay={0.05 * i}>
                  <p className="text-base md:text-[17px] text-cream/75 leading-[1.75] max-w-[65ch]">
                    {parrafo}
                  </p>
                </AnimatedEntry>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PASAJES DESTACADOS ─── */}
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-transparent via-burgundy/[0.025] to-transparent">
          <div className="max-w-[820px] mx-auto px-6 md:px-10">
            <AnimatedEntry>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-gold" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold/85 font-medium">
                  Pasajes destacados
                </span>
              </div>
            </AnimatedEntry>
            <AnimatedEntry delay={0.08}>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight text-cream mb-3 leading-tight">
                El núcleo doctrinal
              </h2>
              <p className="text-sm text-cream/45 max-w-[55ch] mb-12">
                Extractos textuales de la sentencia. Las frases marcadas en{" "}
                <span className="text-gold/90 font-medium">dorado</span> condensan
                la fuerza argumentativa del fallo.
              </p>
            </AnimatedEntry>

            <StaggerContainer className="space-y-8" stagger={0.1}>
              {sentencia.pasajes.map((pasaje, i) => (
                <StaggerItem key={i}>
                  <article className="relative">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="font-display text-3xl text-gold/30 font-light leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl md:text-2xl text-cream tracking-tight mb-1.5 leading-snug">
                          {pasaje.titulo}
                        </h3>
                        {pasaje.citation && (
                          <span className="text-[10px] tracking-[0.22em] uppercase text-gold/70 font-medium">
                            {pasaje.citation}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="ml-0 md:ml-[3.25rem] pl-5 border-l border-gold/15 space-y-4">
                      {pasaje.parrafos.map((p, j) => (
                        <p
                          key={j}
                          className="text-[15px] md:text-base text-cream/72 leading-[1.75] max-w-[62ch]"
                        >
                          <HighlightedText
                            texto={p.texto}
                            destacar={p.destacar}
                          />
                        </p>
                      ))}
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ─── DOCTRINA ─── */}
        <section className="relative py-12 md:py-20">
          <div className="max-w-[760px] mx-auto px-6 md:px-10">
            <AnimatedEntry>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-gold" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold/85 font-medium">
                  Doctrina jurídica establecida
                </span>
              </div>
            </AnimatedEntry>
            <AnimatedEntry delay={0.05}>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight text-cream mb-12 leading-tight">
                El legado del fallo
              </h2>
            </AnimatedEntry>

            <div className="space-y-12">
              {sentencia.doctrina.map((seccion, i) => (
                <AnimatedEntry key={i} delay={0.05 * i}>
                  <h3 className="font-display text-xl md:text-2xl text-cream/95 mb-5 leading-snug tracking-tight">
                    {seccion.titulo}
                  </h3>
                  <div className="space-y-4">
                    {seccion.parrafos.map((p, j) => (
                      <p
                        key={j}
                        className="text-base text-cream/72 leading-[1.75] max-w-[64ch]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </AnimatedEntry>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EL CASO ─── */}
        {sentencia.casoFactico && sentencia.casoFactico.length > 0 && (
          <section className="relative py-12 md:py-16">
            <div className="max-w-[760px] mx-auto px-6 md:px-10">
              <AnimatedEntry>
                <div className="rounded-2xl border border-cream/[0.08] bg-cream/[0.02] p-7 md:p-9">
                  <div className="flex items-center gap-3 mb-5">
                    <Gavel
                      size={18}
                      weight="duotone"
                      className="text-cream/55"
                    />
                    <span className="text-[10px] tracking-[0.25em] uppercase text-cream/55 font-medium">
                      El caso de origen
                    </span>
                  </div>
                  <div className="space-y-3">
                    {sentencia.casoFactico.map((p, i) => (
                      <p
                        key={i}
                        className="text-sm text-cream/60 leading-relaxed max-w-[62ch]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedEntry>
            </div>
          </section>
        )}

        {/* ─── TEXTO ÍNTEGRO ─── */}
        {sentencia.textoCompleto && (
          <section className="relative py-12 md:py-16">
            <div className="max-w-[820px] mx-auto px-6 md:px-10">
              <AnimatedEntry>
                <details
                  open
                  className="group rounded-2xl border border-cream/[0.10] bg-cream/[0.02] overflow-hidden"
                >
                  <summary className="cursor-pointer list-none p-6 md:p-8 flex items-center justify-between gap-4 hover:bg-cream/[0.03] transition-colors duration-300">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <BookOpen
                          size={16}
                          weight="duotone"
                          className="text-gold/70"
                        />
                        <span className="text-[10px] tracking-[0.3em] uppercase text-gold/85 font-medium">
                          Texto íntegro de la resolución
                        </span>
                      </div>
                      <h3 className="font-display text-lg md:text-xl text-cream/95 tracking-tight">
                        Reproducción literal de la sentencia
                      </h3>
                      <p className="text-xs text-cream/45 mt-1.5 leading-relaxed">
                        Resultandos, considerandos completos, por tanto y firmas
                      </p>
                      {sentencia.textoCompletoFuente && (
                        <p className="text-[11px] text-cream/40 mt-3 italic">
                          Fuente: {sentencia.textoCompletoFuente}
                        </p>
                      )}
                    </div>
                    <CaretDown
                      size={22}
                      weight="bold"
                      className="text-cream/40 group-open:rotate-180 transition-transform duration-300 shrink-0"
                    />
                  </summary>

                  <div className="px-6 md:px-10 pb-8 md:pb-10 pt-2 border-t border-cream/[0.06]">
                    <pre className="font-body whitespace-pre-wrap text-[14px] text-cream/70 leading-[1.85] mt-6 max-w-[68ch]">
                      {sentencia.textoCompleto}
                    </pre>

                    {sentencia.textoCompletoUrl && (
                      <a
                        href={sentencia.textoCompletoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 text-xs text-gold/85 hover:text-gold transition-colors duration-300"
                      >
                        <FilePdf size={14} weight="duotone" />
                        Descargar PDF oficial del Poder Judicial
                        <ArrowSquareOut size={11} weight="bold" />
                      </a>
                    )}
                  </div>
                </details>
              </AnimatedEntry>
            </div>
          </section>
        )}

        {/* ─── ATRIBUCIÓN ─── */}
        <section className="relative py-12 md:py-20">
          <div className="max-w-[760px] mx-auto px-6 md:px-10">
            <AnimatedEntry>
              <div className="rounded-2xl border border-gold/20 bg-gradient-to-br from-burgundy/[0.06] via-transparent to-gold/[0.04] p-8 md:p-10">
                <div className="flex items-start gap-5">
                  <div className="hidden md:flex h-14 w-14 rounded-full bg-gold/[0.12] items-center justify-center shrink-0">
                    <Scales
                      size={26}
                      weight="duotone"
                      className="text-gold/85"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-gold/80 font-medium mb-2">
                      Redactado por
                    </div>
                    <h3 className="font-display text-2xl text-cream tracking-tight mb-2">
                      Dr. Óscar Eduardo González Camacho
                    </h3>
                    <p className="text-sm text-cream/65 leading-relaxed mb-3 max-w-[55ch]">
                      Magistrado de la Sala Primera de la Corte Suprema de
                      Justicia (2002–2014). Co-redactor del Código Procesal
                      Contencioso Administrativo (Ley N.° 8508). Doctor en
                      Derecho por la Universidad de Alcalá de Henares.
                    </p>
                    <p className="text-xs italic text-cream/45 mb-5 max-w-[55ch]">
                      Cita textual de redactoría:{" "}
                      <span className="text-cream/65 not-italic">
                        «{sentencia.redactorTextual}»
                      </span>
                    </p>
                    <Link
                      href="/abogados/oscar-gonzalez"
                      className="inline-flex items-center gap-2 text-xs text-gold/85 hover:text-gold transition-colors duration-300"
                    >
                      Ver perfil completo
                      <ArrowSquareOut size={11} weight="bold" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedEntry>
          </div>
        </section>

        {/* ─── BOTTOM NAV ─── */}
        <div className="max-w-[760px] mx-auto px-6 md:px-10 pb-20">
          <div className="pt-8 border-t border-cream/[0.06] flex items-center justify-between">
            <Link
              href="/jurisprudencia-destacada"
              className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-gold transition-colors duration-300"
            >
              <ArrowLeft size={14} weight="regular" />
              Jurisprudencia destacada
            </Link>
            <Link
              href="/abogados/oscar-gonzalez"
              className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-gold transition-colors duration-300"
            >
              Perfil del Dr. González
              <ArrowSquareOut size={11} weight="bold" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
