import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  ETIQUETA_ESTADO,
  fragmentosLiterales,
  getAllSentencias,
  nexusUrl,
  type SentenciaDestacada,
} from "@/lib/jurisprudencia";
import { SentenciaFolio, type SentenciaPortada } from "@/components/sections/SentenciaFolio";
import { RunningHead } from "@/components/ui/RunningHead";

/* ── Filas del índice de sentencias ──
   El mismo marcado de las filas que acompañan al folio de la portada
   (components/sections/SentenciaFolio.tsx): un filete fino arriba que se
   traza en burdeos al pasar el cursor o recibir el foco, el año y el estado
   del criterio en 13 px, el título en 17 px semibold y el número de la
   resolución. Allí cada fila es un botón que cambia la hoja; aquí es un
   enlace a la ficha. Lo usan el perfil del Director y el índice
   /jurisprudencia-destacada (D-08, 25-11-2026), sin tarjetas ni pastillas. */

export type FilaSentencia = {
  slug: string;
  anio: string;
  estado?: string;
  titulo: string;
  numero: string;
  /** Materia, solo en el índice completo, donde la fila tiene todo el ancho. */
  materia?: string;
};

export function filaDe(s: SentenciaDestacada, conMateria = false): FilaSentencia {
  return {
    slug: s.slug,
    anio: s.fecha.slice(-4),
    estado: s.estado ? ETIQUETA_ESTADO[s.estado] : undefined,
    titulo: s.titulo,
    numero: s.numero,
    materia: conMateria ? s.materia : undefined,
  };
}

export function FilasSentencias({
  sentencias,
  etiqueta,
  columnas = "",
  nivelTitulo = "h3",
}: {
  sentencias: FilaSentencia[];
  etiqueta: string;
  /** Clases de columnas de la cuadrícula; por omisión, una sola columna. */
  columnas?: string;
  nivelTitulo?: "h2" | "h3";
}) {
  const Titulo = nivelTitulo;
  return (
    <ul role="list" aria-label={etiqueta} className={`grid gap-x-8 border-b border-cream/10 ${columnas}`}>
      {sentencias.map((x) => (
        <li key={x.slug}>
          <Link
            href={`/jurisprudencia-destacada/${x.slug}`}
            className="group relative block w-full py-5 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hilo"
          >
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-cream/10" />
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-burgundy-light transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 dark:bg-hilo"
            />
            <span className="block text-[13px] tabular-nums text-cream/65">
              {x.anio}
              {x.estado ? ` · ${x.estado}` : ""}
            </span>
            <Titulo className="mt-1.5 block text-[17px] font-semibold leading-snug tracking-[-0.01em] text-cream transition-colors duration-300 group-hover:text-burgundy-light dark:group-hover:text-hilo-texto">
              {x.titulo}
            </Titulo>
            {x.materia && <span className="mt-1 block text-sm leading-relaxed text-cream/70">{x.materia}</span>}
            <span className="mt-1 block text-[13px] text-cream/65">{x.numero}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

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

  /* Solo lo que el folio de la portada muestra de cada sentencia: el
     componente corre en el cliente y no debe cargar el análisis completo. */
  const portadas: SentenciaPortada[] = sentencias.map((x) => ({
    slug: x.slug,
    numero: x.numero,
    fecha: x.fecha,
    anio: x.fecha.slice(-4),
    hora: x.hora,
    tribunal: x.tribunal,
    titulo: x.titulo,
    badgeLabel: x.estado ? ETIQUETA_ESTADO[x.estado] : undefined,
    sintesis: x.sintesisPortada,
    pullQuote: x.pullQuote,
    fragmentos: fragmentosLiterales(x),
    redactorTextual: x.redactorTextual,
    nexusUrl: nexusUrl(x.nexusId),
  }));

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
      ? "Selección de fallos redactados durante sus doce años como Magistrado de la Sala Primera de la Corte Suprema (2002–2014)."
      : "Fallos redactados por el Dr. Óscar Eduardo González Camacho durante sus doce años como Magistrado de la Sala Primera de la Corte Suprema (2002–2014).";

  return (
    <section
      className={`relative overflow-hidden bg-surface ${
        variant === "home" ? "py-24 md:py-32" : "py-20 md:py-24"
      }`}
    >
      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-cream/[0.08]" />

      {/* Dark mode only — subtle warmth in dark mode (no fondo rosa en light mode) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-burgundy/[0.06] blur-[140px] pointer-events-none hidden dark:block" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        {/* ── Section header ── */}
        <AnimatedEntry>
          <RunningHead title={sectionEyebrow} locator={variant === "home" ? undefined : "Sala Primera"} />
        </AnimatedEntry>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>

            <AnimatedEntry delay={0.1}>
              <h2 className="type-headline text-cream mb-5 max-w-[18ch]">
                {sectionHeadline}
              </h2>
            </AnimatedEntry>

            <AnimatedEntry delay={0.2}>
              <p className="type-body text-cream/70 max-w-[60ch]">
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

        {variant === "home" ? (
          /* Portada: el folio, con índice cuando haya más de una sentencia */
          <AnimatedEntry delay={0.3}>
            <SentenciaFolio sentencias={portadas} />
          </AnimatedEntry>
        ) : (
          /* Perfil (D-08, 25-11-2026): las mismas filas del índice que
             acompaña al folio de la portada. El papel queda reservado para
             la sentencia destacada de la portada. */
          <AnimatedEntry delay={0.3}>
            <FilasSentencias
              sentencias={sentencias.map((s) => filaDe(s))}
              etiqueta="Sentencias redactadas por el Dr. González Camacho"
              columnas="md:grid-cols-2"
              nivelTitulo="h3"
            />
          </AnimatedEntry>
        )}
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-cream/[0.08]" />
    </section>
  );
}
