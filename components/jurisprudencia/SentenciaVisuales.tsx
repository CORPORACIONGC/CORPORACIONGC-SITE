/* Elementos visuales de la página de una sentencia. Se alimentan de
   `visuales` y `precedentes` en lib/jurisprudencia.ts; las frases literales
   llegan ya verificadas por la página (esLiteral). Mismo lenguaje que el
   resto del sitio: filetes, dorado como hilo, burdeos como sello, DM Sans. */

import type { ReactNode } from "react";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import type { PasajeParrafo, VisualesSentencia } from "@/lib/jurisprudencia";

/* ── Pasaje literal ──
   La voz de la Sala: cursiva, comillas angulares colgadas al margen y las
   frases decisivas con el subrayado dorado, el único énfasis del sitio. Con `href`, el pasaje es de otra
   resolución y su referencia enlaza al texto íntegro. */
export function PasajeLiteral({
  parrafo,
  citation,
  href,
  size = "lg",
}: {
  parrafo: PasajeParrafo;
  citation?: string;
  href?: string;
  size?: "lg" | "sm";
}) {
  const destacar = parrafo.destacar ?? [];
  let contenido: ReactNode = parrafo.texto;
  if (destacar.length) {
    const esc = [...destacar]
      .sort((a, b) => b.length - a.length)
      .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    contenido = parrafo.texto
      .split(new RegExp(`(${esc.join("|")})`, "g"))
      .map((p, i) =>
        destacar.includes(p) ? (
          <mark key={i} className="gc-subrayado bg-transparent text-inherit">
            {p}
          </mark>
        ) : (
          <span key={i}>{p}</span>
        ),
      );
  }
  return (
    <figure className={size === "lg" ? "my-10 md:my-12" : "mt-4"}>
      <blockquote cite={href} className="relative pl-[0.62em]">
        <p
          className={
            size === "lg"
              ? "max-w-[60ch] text-[19px] font-light italic leading-[1.6] text-cream md:text-[21px]"
              : "text-[15px] italic leading-relaxed text-cream/85"
          }
        >
          <span
            aria-hidden="true"
            className="absolute left-0 not-italic text-gold"
          >
            «
          </span>
          {contenido}
          <span aria-hidden="true" className="not-italic text-gold">
            »
          </span>
        </p>
      </blockquote>
      {citation && (
        <figcaption
          className={`${size === "lg" ? "mt-4" : "mt-2"} pl-[0.62em] text-[13px] text-cream/65`}
        >
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 underline decoration-cream/20 underline-offset-4 transition-colors hover:text-burgundy hover:decoration-burgundy dark:hover:text-gold dark:hover:decoration-gold"
            >
              {citation}
              <ArrowSquareOut size={12} aria-hidden="true" />
            </a>
          ) : (
            citation
          )}
        </figcaption>
      )}
    </figure>
  );
}

/* Punto sobre el eje: dorado vacío para los hitos, lleno para el final.
   `desde` es el ancho a partir del cual el eje se vuelve horizontal. */
function Punto({
  final = false,
  desde = "md",
}: {
  final?: boolean;
  desde?: "md" | "lg" | "nunca";
}) {
  const top = { md: "top-1 md:top-0", lg: "top-1 lg:top-0", nunca: "top-[7px]" }[desde];
  return (
    <span
      aria-hidden="true"
      className={`absolute left-0 h-[15px] w-[15px] rounded-full border ${top} ${
        final
          ? "border-burgundy bg-burgundy dark:border-gold dark:bg-gold"
          : "border-gold bg-surface"
      }`}
    />
  );
}

/* Eje horizontal que une los puntos a partir de `desde`. */
function Eje({ desde = "md" }: { desde?: "md" | "lg" }) {
  const cls = { md: "hidden md:block", lg: "hidden lg:block" }[desde];
  return (
    <span
      aria-hidden="true"
      className={`absolute left-0 right-0 top-[7px] h-px bg-cream/15 ${cls}`}
    />
  );
}

/* Tramo vertical de un punto al siguiente, mientras la línea va en
   vertical. Va en cada hito menos el último, así el eje termina en el punto
   final. `cls` fija dónde arranca, cuánto baja (el hueco entre hitos) y en
   qué ancho desaparece. */
function Tramo({ cls }: { cls: string }) {
  return <span aria-hidden="true" className={`absolute left-[7px] w-px bg-cream/15 ${cls}`} />;
}

/* ── Trayectoria procesal del caso ──
   Cuatro etapas: en vertical hasta lg, donde el texto ya cabe en columnas. */
export function Trayectoria({
  etapas,
}: {
  etapas: NonNullable<VisualesSentencia["trayectoria"]>;
}) {
  return (
    <div className="relative my-10 md:my-12">
      <Eje desde="lg" />
      <ol
        role="list"
        aria-label="Trayectoria procesal"
        className="grid gap-8 lg:auto-cols-fr lg:grid-flow-col lg:gap-7"
      >
        {etapas.map((e, i) => (
          <li key={e.etapa} className="relative pl-8 lg:pl-0 lg:pt-8">
            {i < etapas.length - 1 && <Tramo cls="-bottom-8 top-[19px] lg:hidden" />}
            <Punto final={e.final} desde="lg" />
            <p
              className={`type-label ${e.final ? "text-burgundy dark:text-gold" : "text-cream/65"}`}
            >
              {e.etapa}
            </p>
            <p className="mt-2 text-[15px] font-semibold leading-snug text-cream">
              {e.sede}
            </p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-cream/75">
              {e.detalle}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ── Línea de tiempo: los precedentes de la tesis abandonada y el giro ── */
export function LineaTemporal({
  hitos,
  giro,
}: {
  hitos: { anio: string; numero: string; fecha: string; href: string }[];
  giro: { anio: string; numero: string; fecha: string; href: string };
}) {
  const todos = [...hitos, { ...giro, final: true as const }];
  return (
    <div className="relative my-10 md:my-12">
      <Eje />
      <ol
        role="list"
        aria-label="Precedentes de la tesis nominalista y la sentencia que la abandona"
        className="grid gap-6 md:auto-cols-fr md:grid-flow-col md:gap-4"
      >
        {todos.map((h, i) => {
          const final = "final" in h;
          return (
            <li key={h.numero} className="relative pl-8 md:pl-0 md:pt-8">
              {i < todos.length - 1 && <Tramo cls="-bottom-6 top-[19px] md:hidden" />}
              <Punto final={final} />
              <p
                className={`text-[26px] font-light leading-none tabular-nums tracking-[-0.01em] ${
                  final ? "text-burgundy dark:text-gold" : "text-cream"
                }`}
              >
                {h.anio}
              </p>
              <a
                href={h.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-[13px] font-medium text-cream/85 underline decoration-cream/20 underline-offset-4 transition-colors hover:text-burgundy hover:decoration-burgundy dark:hover:text-gold dark:hover:decoration-gold"
              >
                {h.numero}
              </a>
              <p className="mt-1 text-[13px] tabular-nums text-cream/65">
                {h.fecha}
              </p>
              {final && (
                <p className="type-label mt-3 text-burgundy dark:text-gold">
                  El giro
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* ── Los anclajes constitucionales ── */
export function Anclajes({
  anclajes,
}: {
  anclajes: NonNullable<VisualesSentencia["anclajes"]>;
}) {
  return (
    <ul
      role="list"
      className="my-10 grid gap-10 md:my-12 md:grid-cols-3 md:gap-8"
    >
      {anclajes.map((a) => (
        <li key={a.articulo} className="border-t border-gold/60 pt-6">
          <p className="flex items-baseline gap-2 text-cream">
            <span className="text-[13px] text-cream/65">Art.</span>
            <span className="text-[44px] font-light leading-none tracking-[-0.02em] tabular-nums">
              {a.articulo}
            </span>
          </p>
          <p className="mt-3 text-[17px] font-semibold tracking-[-0.01em] text-cream">
            {a.principio}
          </p>
          <PasajeLiteral
            parrafo={{ texto: a.literal }}
            citation={a.citation}
            size="sm"
          />
        </li>
      ))}
    </ul>
  );
}

/* ── Obligaciones dinerarias y de valor ── */
export function Comparacion({
  columnas,
}: {
  columnas: NonNullable<VisualesSentencia["comparacion"]>;
}) {
  return (
    <div className="my-10 grid border-y border-cream/10 md:my-12 md:grid-cols-2 md:divide-x md:divide-cream/10">
      {columnas.map((c) => (
        <section
          key={c.titulo}
          className="border-b border-cream/10 py-7 last:border-b-0 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0"
        >
          <h3 className="text-[19px] font-semibold tracking-[-0.01em] text-cream">
            {c.titulo}
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-cream/75">
            {c.rasgo}
          </p>
          {c.enElCaso && (
            <p className="mt-3 text-[15px] text-cream/75">
              <span className="type-label mr-2 text-cream/65">
                En este caso
              </span>
              {c.enElCaso}
            </p>
          )}
          <PasajeLiteral
            parrafo={{ texto: c.literal }}
            citation={c.citation}
            size="sm"
          />
        </section>
      ))}
    </div>
  );
}

/* ── El período que cubre la indexación ── */
export function Periodo({
  periodo,
}: {
  periodo: NonNullable<VisualesSentencia["periodo"]>;
}) {
  return (
    <figure className="my-10 md:my-12">
      <div className="grid gap-4 md:grid-cols-[minmax(0,11rem)_minmax(0,1fr)_minmax(0,11rem)] md:items-center md:gap-5">
        <p className="text-[15px] font-semibold leading-snug text-cream md:text-right">
          {periodo.desde}
        </p>
        <div className="relative py-6">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-cream/15"
          />
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 bg-gold"
          />
          <span
            aria-hidden="true"
            className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
          />
          <span
            aria-hidden="true"
            className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-burgundy dark:bg-gold"
          />
        </div>
        <p className="text-[15px] font-semibold leading-snug text-cream">
          {periodo.hasta}
        </p>
      </div>
      <figcaption className="mt-4 text-center text-[13px] leading-relaxed text-cream/65">
        {periodo.tramo}
        <span aria-hidden="true" className="mx-2 text-cream/30">
          ·
        </span>
        Parámetro:{" "}
        <span className="font-medium text-cream/85">{periodo.parametro}</span>
      </figcaption>
    </figure>
  );
}

/* ── La recepción: cómo la recibieron la jurisprudencia y la ley ──
   Siempre vertical: cada hito lleva texto y enlaces a sus fuentes. */
export function Recepcion({
  hitos,
}: {
  hitos: {
    anio: string;
    organo: string;
    texto: string;
    enlaces: { etiqueta: string; href: string }[];
    final?: boolean;
  }[];
}) {
  return (
    <ol role="list" aria-label="Recepción de la sentencia" className="my-10 space-y-10 md:my-12">
        {hitos.map((h, i) => (
          <li
            key={`${h.anio}-${h.organo}`}
            className="relative grid gap-3 pl-9 md:grid-cols-[88px_minmax(0,1fr)] md:gap-8 md:pl-10"
          >
            {i < hitos.length - 1 && <Tramo cls="-bottom-10 top-[22px]" />}
            <Punto final={h.final} desde="nunca" />
            <p
              className={`text-[26px] font-light leading-none tabular-nums tracking-[-0.01em] ${
                h.final ? "text-burgundy dark:text-gold" : "text-cream"
              }`}
            >
              {h.anio}
            </p>
            <div className="md:pt-0.5">
              <p className="type-label text-cream/65">{h.organo}</p>
              <p className="mt-2 max-w-[58ch] text-[15px] leading-relaxed text-cream/80">
                {h.texto}
              </p>
              <p className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
                {h.enlaces.map((e) => (
                  <a
                    key={e.href}
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-medium tabular-nums text-cream/85 underline decoration-cream/20 underline-offset-4 transition-colors hover:text-burgundy hover:decoration-burgundy dark:hover:text-gold dark:hover:decoration-gold"
                  >
                    {e.etiqueta}
                  </a>
                ))}
              </p>
            </div>
          </li>
        ))}
    </ol>
  );
}
