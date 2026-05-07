import Link from "next/link";
import {
  ArrowRight,
  Quotes,
  Scales,
} from "@phosphor-icons/react/dist/ssr";
import {
  AnimatedEntry,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedEntry";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { getAllSentencias } from "@/lib/jurisprudencia";

const BADGE_STYLES: Record<string, string> = {
  fundacional: "bg-gold/[0.12] text-gold border-gold/30",
  paradigmatica: "bg-burgundy/[0.15] text-burgundy-light border-burgundy/30",
  ambiental: "bg-emerald-500/[0.10] text-emerald-300 border-emerald-500/25",
  doctrinal: "bg-cream/[0.08] text-cream/80 border-cream/15",
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
      className={`relative overflow-hidden ${
        variant === "home"
          ? "bg-gradient-to-b from-surface via-[#0E0507] to-surface py-24 md:py-32"
          : "py-20 md:py-24"
      }`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      {/* Subtle burgundy glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-burgundy/[0.05] blur-[140px] pointer-events-none hidden dark:block" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <AnimatedEntry>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gold" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold/85 font-medium">
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
              <p className="text-sm md:text-base text-cream/55 leading-relaxed max-w-[60ch]">
                {sectionSubhead}
              </p>
            </AnimatedEntry>
          </div>

          <AnimatedEntry delay={0.25} direction="right">
            <MagneticButton
              href="/jurisprudencia-destacada"
              variant="outline"
            >
              Ver todas
              <ArrowRight size={14} weight="bold" />
            </MagneticButton>
          </AnimatedEntry>
        </div>

        {/* ── Featured sentencia card ── */}
        <AnimatedEntry delay={0.3}>
          <Link
            href={`/jurisprudencia-destacada/${featured.slug}`}
            className="group block relative rounded-2xl md:rounded-3xl border border-gold/15 bg-gradient-to-br from-burgundy/[0.05] via-[#150407] to-[#0F0306] hover:border-gold/35 transition-all duration-500 overflow-hidden"
          >
            {/* Grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-0">
              {/* Left side: meta + title + intro */}
              <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-between">
                <div>
                  {/* Top meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
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
                    <span className="text-[9px] tracking-[0.22em] uppercase text-cream/45 font-medium">
                      {featured.area}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-[1.05] text-cream group-hover:text-gold transition-colors duration-500 mb-4">
                    {featured.titulo}
                  </h3>

                  {/* Materia */}
                  <p className="text-xs tracking-[0.18em] uppercase text-cream/50 mb-6">
                    {featured.materia}
                  </p>

                  {/* Subtitle/intro */}
                  {featured.subtitulo && (
                    <p className="text-base text-cream/65 leading-relaxed max-w-[50ch]">
                      {featured.subtitulo}
                    </p>
                  )}
                </div>

                {/* Bottom: read CTA */}
                <div className="mt-10 pt-6 border-t border-cream/[0.08] flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[9px] tracking-[0.3em] uppercase text-cream/35 mb-1">
                      Resolución
                    </div>
                    <div className="text-sm font-mono text-cream/80">
                      {featured.numero}
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-gold/85 group-hover:text-gold transition-colors duration-300">
                    Leer la sentencia
                    <ArrowRight
                      size={14}
                      weight="bold"
                      className="-translate-x-1 group-hover:translate-x-0 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Right side: pull quote */}
              <div className="relative p-8 md:p-12 lg:p-14 lg:border-l border-cream/[0.06] bg-gradient-to-br from-gold/[0.04] via-transparent to-burgundy/[0.04] flex items-center">
                <div className="relative">
                  <Quotes
                    size={42}
                    weight="fill"
                    className="absolute -top-3 -left-1 text-gold/40"
                  />
                  <blockquote className="relative pl-12 pt-2">
                    <p className="font-display italic text-xl md:text-2xl lg:text-[26px] leading-[1.35] tracking-tight text-cream/95">
                      {featured.pullQuote.texto}
                    </p>
                    {featured.pullQuote.citation && (
                      <footer className="mt-7 flex items-center gap-3">
                        <div className="h-px w-7 bg-gold/40" />
                        <cite className="not-italic text-[10px] tracking-[0.25em] uppercase text-gold/75 font-medium">
                          {featured.pullQuote.citation}
                        </cite>
                      </footer>
                    )}
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Bottom-right corner: subtle attribution */}
            <div className="border-t border-cream/[0.06] px-8 md:px-12 lg:px-14 py-4 flex items-center gap-3">
              <Scales
                size={14}
                weight="duotone"
                className="text-gold/55 shrink-0"
              />
              <span className="text-[11px] text-cream/50">
                Redactado por el{" "}
                <span className="text-cream/80 font-medium">
                  Dr. Óscar Eduardo González Camacho
                </span>
                <span className="text-cream/35"> · {featured.tribunal}</span>
              </span>
            </div>
          </Link>
        </AnimatedEntry>

        {/* ── Additional sentencias (mini cards) ── */}
        {additional.length > 0 && (
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5"
            stagger={0.08}
          >
            {additional.slice(0, 3).map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/jurisprudencia-destacada/${s.slug}`}
                  className="group block h-full p-6 rounded-xl border border-cream/[0.08] bg-cream/[0.02] hover:border-gold/25 transition-all duration-400"
                >
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
                    <span className="text-[9px] text-cream/40 ml-auto">
                      {s.fechaCorta}
                    </span>
                  </div>
                  <h4 className="font-display text-lg text-cream group-hover:text-gold transition-colors duration-300 mb-2 leading-tight tracking-tight">
                    {s.titulo}
                  </h4>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-cream/45">
                    {s.materia}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
