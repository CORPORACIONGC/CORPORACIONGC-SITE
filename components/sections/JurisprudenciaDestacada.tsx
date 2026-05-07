import Link from "next/link";
import {
  ArrowRight,
  Quotes,
  Scales,
  BookOpen,
} from "@phosphor-icons/react/dist/ssr";
import {
  AnimatedEntry,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedEntry";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { getAllSentencias } from "@/lib/jurisprudencia";

const BADGE_STYLES: Record<string, string> = {
  fundacional:
    "bg-gold/[0.12] text-[#8A6F3D] dark:text-gold border-gold/40",
  paradigmatica:
    "bg-burgundy/[0.10] text-burgundy dark:text-burgundy-light border-burgundy/30",
  ambiental:
    "bg-emerald-600/[0.08] text-emerald-700 dark:text-emerald-300 border-emerald-600/25 dark:border-emerald-500/25",
  doctrinal: "bg-cream/[0.05] text-cream/75 border-cream/20",
};

type Props = {
  /**
   * Variant: "home" for the homepage (editorial hero featured),
   * "profile" for Don Óscar's profile (more compact).
   */
  variant?: "home" | "profile";
};

export function JurisprudenciaDestacada({ variant = "home" }: Props) {
  const sentencias = getAllSentencias();
  if (sentencias.length === 0) return null;

  const featured = sentencias[0];
  const additional = sentencias.slice(1);

  const sectionEyebrow =
    variant === "profile"
      ? "Jurisprudencia redactada"
      : "Jurisprudencia destacada";

  const sectionHeadline =
    variant === "profile"
      ? "Sentencias que escribió desde la Sala Primera"
      : "Sentencias que marcaron el rumbo";

  const sectionSubhead =
    variant === "profile"
      ? "Selección de fallos paradigmáticos redactados durante sus doce años como Magistrado de la Sala Primera de la Corte Suprema (2002–2014)."
      : "Fallos paradigmáticos redactados por el Dr. Óscar Eduardo González Camacho durante sus doce años como Magistrado de la Sala Primera de la Corte Suprema (2002–2014).";

  return (
    <section
      className={`relative overflow-hidden bg-surface ${
        variant === "home" ? "py-24 md:py-32" : "py-20 md:py-24"
      }`}
    >
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-burgundy/30 dark:via-gold/30 to-transparent" />

      {/* Dark mode only — subtle warmth in dark mode (no fondo rosa en light mode) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-burgundy/[0.06] blur-[140px] pointer-events-none hidden dark:block" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <AnimatedEntry>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-burgundy dark:bg-gold" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-burgundy dark:text-gold/85 font-medium">
                  {sectionEyebrow}
                </span>
              </div>
            </AnimatedEntry>

            <AnimatedEntry delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream mb-4 max-w-[20ch]">
                {sectionHeadline}
              </h2>
            </AnimatedEntry>

            <AnimatedEntry delay={0.2}>
              <p className="text-sm md:text-base text-cream/70 leading-relaxed max-w-[60ch]">
                {sectionSubhead}
              </p>
            </AnimatedEntry>
          </div>

          <AnimatedEntry delay={0.25} direction="right">
            <MagneticButton href="/jurisprudencia-destacada" variant="outline">
              Ver todas
              <ArrowRight size={14} weight="bold" />
            </MagneticButton>
          </AnimatedEntry>
        </div>

        {/* ── Featured sentencia card (editorial glass) ── */}
        <AnimatedEntry delay={0.3}>
          <Link
            href={`/jurisprudencia-destacada/${featured.slug}`}
            className="group block relative rounded-2xl md:rounded-3xl overflow-hidden border border-burgundy/[0.08] dark:border-white/[0.08] bg-white/85 dark:bg-white/[0.04] backdrop-blur-2xl shadow-[0_30px_80px_-25px_rgba(107,29,58,0.35),0_8px_24px_-8px_rgba(107,29,58,0.18)] dark:shadow-[0_24px_60px_-22px_rgba(0,0,0,0.5)] hover:border-burgundy/25 dark:hover:border-gold/35 hover:shadow-[0_40px_100px_-25px_rgba(107,29,58,0.45),0_12px_30px_-8px_rgba(107,29,58,0.25)] dark:hover:shadow-[0_30px_80px_-22px_rgba(0,0,0,0.6)] transition-all duration-500"
          >
            {/* Inner glass tint — subtle warm wash */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] via-transparent to-burgundy/[0.05] pointer-events-none" />

            {/* Top edge highlight (glass gleam) */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-burgundy/15 dark:via-white/30 to-transparent pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_0.95fr]">
              {/* Left: meta + title + intro */}
              <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-between">
                <div>
                  {/* Top meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-7">
                    {featured.badge && (
                      <span
                        className={`px-3 py-1 rounded-md text-[9px] tracking-[0.22em] uppercase font-medium border ${
                          BADGE_STYLES[featured.badge.type] ??
                          BADGE_STYLES.doctrinal
                        }`}
                      >
                        {featured.badge.label}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-[1.05] text-cream group-hover:text-burgundy dark:group-hover:text-gold transition-colors duration-500 mb-4">
                    {featured.titulo}
                  </h3>

                  {/* Materia */}
                  <p className="text-xs tracking-[0.18em] uppercase text-cream/60 mb-7">
                    {featured.materia}
                  </p>

                  {/* Subtitle/intro */}
                  {featured.subtitulo && (
                    <p className="text-base text-cream/80 leading-relaxed max-w-[50ch]">
                      {featured.subtitulo}
                    </p>
                  )}
                </div>

                {/* Bottom: resolution + CTA */}
                <div className="mt-10 pt-6 border-t border-burgundy/15 dark:border-white/[0.10] flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[9px] tracking-[0.3em] uppercase text-cream/45 mb-1">
                      Resolución
                    </div>
                    <div className="text-sm font-mono text-cream/85">
                      {featured.numero}
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-burgundy dark:text-gold/90 group-hover:text-burgundy-dark dark:group-hover:text-gold transition-colors duration-300">
                    Leer la sentencia
                    <ArrowRight
                      size={14}
                      weight="bold"
                      className="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Right: pull quote — glass panel with burgundy / gold tint */}
              <div className="relative p-8 md:p-12 lg:p-14 lg:border-l border-burgundy/15 dark:border-white/[0.08] flex items-center bg-gradient-to-br from-burgundy/[0.06] via-transparent to-gold/[0.05]">
                <div className="relative">
                  <Quotes
                    size={42}
                    weight="fill"
                    className="absolute -top-3 -left-1 text-burgundy/30 dark:text-gold/35"
                  />
                  <blockquote className="relative pl-12 pt-2">
                    <p className="font-display italic text-xl md:text-2xl lg:text-[26px] leading-[1.35] tracking-tight text-cream">
                      {featured.pullQuote.texto}
                    </p>
                    {featured.pullQuote.citation && (
                      <footer className="mt-7 flex items-center gap-3">
                        <div className="h-px w-7 bg-burgundy/40 dark:bg-gold/40" />
                        <cite className="not-italic text-[10px] tracking-[0.25em] uppercase text-burgundy/85 dark:text-gold/80 font-medium">
                          {featured.pullQuote.citation}
                        </cite>
                      </footer>
                    )}
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Bottom attribution row */}
            <div className="relative border-t border-burgundy/15 dark:border-white/[0.10] px-8 md:px-12 lg:px-14 py-4 flex items-center gap-3">
              <Scales
                size={14}
                weight="duotone"
                className="text-burgundy/65 dark:text-gold/65 shrink-0"
              />
              <span className="text-[11px] text-cream/65">
                Redactado por el{" "}
                <span className="text-cream font-medium">
                  Dr. Óscar Eduardo González Camacho
                </span>
                <span className="text-cream/45"> · {featured.tribunal}</span>
              </span>
            </div>
          </Link>
        </AnimatedEntry>

        {/* ── Additional sentencias (mini glass cards) ── */}
        {additional.length > 0 && (
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5"
            stagger={0.08}
          >
            {additional.slice(0, 3).map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/jurisprudencia-destacada/${s.slug}`}
                  className="group relative block h-full p-6 rounded-xl border border-burgundy/[0.08] dark:border-white/[0.08] bg-white dark:bg-white/[0.03] backdrop-blur-xl shadow-[0_18px_40px_-18px_rgba(107,29,58,0.25),0_4px_12px_-4px_rgba(107,29,58,0.12)] dark:shadow-[0_12px_30px_-15px_rgba(0,0,0,0.4)] hover:border-burgundy/25 dark:hover:border-gold/25 hover:shadow-[0_28px_60px_-18px_rgba(107,29,58,0.35),0_8px_18px_-4px_rgba(107,29,58,0.18)] hover:-translate-y-0.5 transition-all duration-400 overflow-hidden"
                >
                  {/* Top hairline gleam */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-burgundy/15 dark:via-white/20 to-transparent pointer-events-none" />

                  <div className="flex items-center gap-3 mb-4">
                    {s.badge && (
                      <span
                        className={`px-2 py-0.5 rounded text-[8px] tracking-[0.2em] uppercase font-medium border ${
                          BADGE_STYLES[s.badge.type] ?? BADGE_STYLES.doctrinal
                        }`}
                      >
                        {s.badge.label}
                      </span>
                    )}
                    <span className="text-[9px] text-cream/55 ml-auto font-mono">
                      {s.fechaCorta}
                    </span>
                  </div>
                  <h4 className="font-display text-lg text-cream group-hover:text-burgundy dark:group-hover:text-gold transition-colors duration-300 mb-2 leading-tight tracking-tight">
                    {s.titulo}
                  </h4>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-cream/60">
                    {s.materia}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        {/* Footer reading hint — only on home */}
        {variant === "home" && additional.length === 0 && (
          <AnimatedEntry delay={0.4}>
            <div className="mt-10 flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase text-cream/50">
              <BookOpen size={12} weight="duotone" className="text-burgundy/60 dark:text-gold/60" />
              <span>Texto íntegro disponible · análisis editorial</span>
            </div>
          </AnimatedEntry>
        )}
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-burgundy/15 dark:via-gold/20 to-transparent" />
    </section>
  );
}
