import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Scales,
  Quotes,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  AnimatedEntry,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedEntry";
import { getAllSentencias } from "@/lib/jurisprudencia";
import { FIRM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Jurisprudencia Destacada del Dr. Óscar González Camacho",
  description:
    "Sentencias paradigmáticas redactadas por el Dr. Óscar Eduardo González Camacho durante su tiempo como Magistrado de la Sala Primera de la Corte Suprema de Justicia (2002-2014). Cada fallo con texto íntegro verificado y pasajes destacados.",
  alternates: {
    canonical: `${FIRM.url}/jurisprudencia-destacada`,
  },
};

const BADGE_STYLES: Record<string, string> = {
  fundacional: "bg-gold/[0.12] text-gold border-gold/30",
  paradigmatica: "bg-burgundy/[0.15] text-burgundy-light border-burgundy/30",
  ambiental: "bg-emerald-500/[0.10] text-emerald-300 border-emerald-500/25",
  doctrinal: "bg-cream/[0.08] text-cream/80 border-cream/15",
};

export default function JurisprudenciaDestacadaIndexPage() {
  const sentencias = getAllSentencias();

  return (
    <>
      <Navbar />

      <main className="bg-surface min-h-[100dvh]">
        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-20">
          <div className="absolute top-20 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-burgundy/[0.04] blur-[140px] pointer-events-none hidden dark:block" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-10 relative z-10">
            <Link
              href="/abogados/oscar-gonzalez"
              className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-gold transition-colors duration-300 mb-10"
            >
              <ArrowLeft size={14} weight="regular" />
              Perfil del Dr. Óscar González
            </Link>

            <AnimatedEntry>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gold" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold/85 font-medium">
                  Jurisprudencia Destacada
                </span>
              </div>
            </AnimatedEntry>

            <AnimatedEntry delay={0.1}>
              <h1 className="font-display text-4xl md:text-6xl tracking-tighter leading-[1.02] text-cream mb-6 max-w-[18ch]">
                Sentencias que marcaron el rumbo del Derecho costarricense
              </h1>
            </AnimatedEntry>

            <AnimatedEntry delay={0.2}>
              <p className="text-lg text-cream/60 leading-relaxed max-w-[60ch] mb-3">
                Selección de fallos redactados por el Dr. Óscar Eduardo González
                Camacho durante su gestión como Magistrado de la Sala Primera
                (2002–2014). Cada sentencia con texto íntegro verificado y
                análisis doctrinal.
              </p>
            </AnimatedEntry>
          </div>
        </section>

        {/* ─── INDEX OF SENTENCIAS ─── */}
        <section className="relative pb-24 md:pb-32">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
              stagger={0.08}
            >
              {sentencias.map((s) => (
                <StaggerItem key={s.slug}>
                  <Link
                    href={`/jurisprudencia-destacada/${s.slug}`}
                    className="group flex flex-col h-full p-7 md:p-8 rounded-2xl border border-cream/[0.08] bg-cream/[0.02] hover:border-gold/30 hover:bg-cream/[0.035] transition-all duration-400"
                  >
                    {/* Top meta row */}
                    <div className="flex items-center gap-3 mb-6">
                      {s.badge && (
                        <span
                          className={`px-2.5 py-1 rounded-md text-[9px] tracking-[0.2em] uppercase font-medium border ${
                            BADGE_STYLES[s.badge.type] ?? BADGE_STYLES.doctrinal
                          }`}
                        >
                          {s.badge.label}
                        </span>
                      )}
                      <span className="text-[9px] tracking-[0.2em] uppercase text-cream/40 ml-auto">
                        {s.fechaCorta}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-2xl md:text-[28px] tracking-tight leading-[1.1] text-cream group-hover:text-gold transition-colors duration-300 mb-3">
                      {s.titulo}
                    </h2>

                    {/* Materia */}
                    <p className="text-xs tracking-wider uppercase text-cream/45 mb-5">
                      {s.materia}
                    </p>

                    {/* Quote excerpt */}
                    <div className="relative pl-4 border-l border-gold/25 mb-6">
                      <p className="text-sm italic text-cream/65 leading-relaxed line-clamp-4">
                        «{s.pullQuote.texto}»
                      </p>
                    </div>

                    {/* Bottom row */}
                    <div className="mt-auto pt-4 border-t border-cream/[0.06] flex items-center justify-between">
                      <div className="text-[10px] font-mono text-cream/40">
                        {s.numero}
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-xs text-cream/55 group-hover:text-gold transition-colors duration-300">
                        Leer
                        <ArrowRight
                          size={12}
                          weight="bold"
                          className="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Note about more coming */}
            {sentencias.length < 8 && (
              <AnimatedEntry delay={0.3}>
                <div className="mt-10 text-center text-xs text-cream/35 italic">
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
