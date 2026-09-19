"use client";

/* La sentencia destacada de la portada, presentada como un folio: una hoja
   con sombra sobre un pequeño expediente, que se lee como el documento que
   es. Arriba, el encabezado de la resolución. Debajo, dos voces separadas:
   a la izquierda, un bloque de prosa de la firma en tres párrafos (el caso,
   el análisis y su impacto), sin rótulos y con las frases clave en
   negrita; a la derecha, los pasajes literales de la Sala, en cursiva. Al
   pie, la fórmula de redacción y los enlaces.

   Jerarquía: el titular de la sección es el único grande. El título de cada
   sentencia es el encabezado del documento, a menor escala y centrado dentro
   de la hoja.

   Varias sentencias: con más de una, debajo del folio aparece un índice y la
   hoja cambia a la elegida. Con una sola, el índice no se muestra. Todo el
   texto entre comillas es literal (ver fragmentosLiterales en
   lib/jurisprudencia.ts). */

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowSquareOut } from "@phosphor-icons/react";
import { ConNegritas } from "@/components/jurisprudencia/ConNegritas";

export type SentenciaPortada = {
  slug: string;
  numero: string;
  fecha: string;
  anio: string;
  hora?: string;
  tribunal: string;
  titulo: string;
  badgeLabel?: string;
  sintesis?: { caso: string; analisis: string; impacto: string };
  pullQuote: { texto: string; citation?: string };
  fragmentos: { texto: string; citation: string }[];
  redactorTextual: string;
  nexusUrl: string;
};

const analisisHref = (s: SentenciaPortada) => `/jurisprudencia-destacada/${s.slug}`;

/* Comillas angulares colgadas en el margen, para que el texto quede alineado
   al borde y no a la comilla. */
function Comillas({ children }: { children: string }) {
  return (
    <>
      <span aria-hidden="true" className="absolute -translate-x-[0.62em] not-italic text-gold">
        «
      </span>
      {children}
      <span aria-hidden="true" className="not-italic text-gold">
        »
      </span>
    </>
  );
}

function Folio({ s }: { s: SentenciaPortada }) {
  const sintesis = s.sintesis ? [s.sintesis.caso, s.sintesis.analisis, s.sintesis.impacto] : [];

  return (
    <article className="gc-papel gc-panel-in rounded-md px-6 py-10 sm:px-10 md:px-14 md:py-14" data-active="true">
      {/* Encabezado de la resolución */}
      <header className="text-center">
        <p className="type-label text-cream/65">{s.tribunal}</p>
        <p className="mt-2 text-[13px] leading-relaxed text-cream/65">
          {s.numero}
          <span aria-hidden="true" className="mx-2 text-cream/30">·</span>
          San José, {s.fecha}
          {s.hora && (
            <>
              <span aria-hidden="true" className="mx-2 text-cream/30">·</span>
              {s.hora}
            </>
          )}
        </p>
        <span aria-hidden="true" className="mx-auto mt-7 block h-px w-12 bg-gold" />
        {s.badgeLabel && (
          <p className="mt-7 text-[13px] font-semibold text-burgundy dark:text-gold">{s.badgeLabel}</p>
        )}
        <h3 className="mx-auto mt-2 max-w-[24ch] text-[26px] font-light leading-[1.15] tracking-[-0.012em] text-cream text-balance md:text-[30px]">
          <Link
            href={analisisHref(s)}
            className="transition-colors duration-300 hover:text-burgundy dark:hover:text-gold"
          >
            {s.titulo}
          </Link>
        </h3>
      </header>

      {/* Dos voces: la síntesis de la firma y el texto de la Sala */}
      <div className="mt-10 grid gap-10 border-t border-cream/10 pt-10 md:mt-12 md:pt-12 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-cream/10">
        {sintesis.length > 0 && (
          <div className="space-y-5 lg:pr-12">
            {sintesis.map((x) => (
              <p key={x.slice(0, 32)} className="text-base leading-[1.7] text-cream/80 text-pretty">
                <ConNegritas texto={x} />
              </p>
            ))}
          </div>
        )}

        <div className={sintesis.length > 0 ? "lg:pl-12" : "lg:col-span-2"}>
          <h4 className="type-label text-cream/65">Pasajes literales</h4>
          <figure className="mt-4">
            <blockquote cite={s.nexusUrl} className="relative">
              <p className="text-[19px] font-light italic leading-[1.55] text-cream md:text-[21px]">
                <Comillas>{s.pullQuote.texto}</Comillas>
              </p>
            </blockquote>
            {s.pullQuote.citation && (
              <figcaption className="mt-3 text-[13px] text-cream/65">{s.pullQuote.citation}</figcaption>
            )}
          </figure>
          {s.fragmentos.length > 0 && (
            <ul role="list" className="mt-7 divide-y divide-cream/10 border-t border-cream/10">
              {s.fragmentos.map((f) => (
                <li key={f.texto} className="py-5 last:pb-0">
                  <figure>
                    <blockquote cite={s.nexusUrl} className="relative">
                      <p className="text-base italic leading-relaxed text-cream/85">
                        <Comillas>{f.texto}</Comillas>
                      </p>
                    </blockquote>
                    <figcaption className="mt-2 text-[13px] text-cream/65">{f.citation}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Pie: fórmula de redacción y enlaces */}
      <footer className="mt-10 flex flex-col items-center gap-5 border-t border-cream/10 pt-8 text-center md:mt-12 md:flex-row md:justify-between md:text-left">
        <p className="text-[13px] text-cream/65">{s.redactorTextual}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          <a
            href={s.nexusUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-cream/70 transition-colors duration-300 hover:text-burgundy dark:hover:text-gold"
          >
            Texto íntegro en Nexus
            <ArrowSquareOut size={13} aria-hidden="true" />
          </a>
          <Link
            href={analisisHref(s)}
            className="group inline-flex items-center gap-2 text-sm font-medium text-burgundy transition-colors duration-300 hover:text-burgundy-light dark:text-gold dark:hover:text-gold-light"
          >
            Leer el análisis completo
            <ArrowRight
              size={14}
              weight="bold"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </footer>
    </article>
  );
}

export function SentenciaFolio({ sentencias }: { sentencias: SentenciaPortada[] }) {
  const [activa, setActiva] = useState(0);
  const folioId = useId();
  if (sentencias.length === 0) return null;
  const s = sentencias[activa];

  return (
    <div>
      <div id={folioId} className="gc-pila mx-auto max-w-[1080px]">
        <Folio key={s.slug} s={s} />
      </div>

      {/* Índice de sentencias: solo cuando hay más de una */}
      {sentencias.length > 1 && (
        <nav aria-label="Sentencias destacadas" className="mx-auto mt-16 max-w-[1080px]">
          <ul role="list" className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {sentencias.map((x, i) => {
              const on = i === activa;
              return (
                <li key={x.slug}>
                  <button
                    type="button"
                    onClick={() => setActiva(i)}
                    aria-current={on ? "true" : undefined}
                    aria-controls={folioId}
                    className="group relative block w-full py-5 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-cream/10" />
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 top-0 h-px origin-left bg-burgundy transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-gold ${
                        on ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                    <span className="block text-[13px] tabular-nums text-cream/65">
                      {x.anio}
                      {x.badgeLabel ? ` · ${x.badgeLabel}` : ""}
                    </span>
                    <span
                      className={`mt-1.5 block text-[17px] font-semibold leading-snug tracking-[-0.01em] transition-colors duration-300 ${
                        on
                          ? "text-burgundy dark:text-gold"
                          : "text-cream group-hover:text-burgundy dark:group-hover:text-gold"
                      }`}
                    >
                      {x.titulo}
                    </span>
                    <span className="mt-1 block text-[13px] text-cream/65">{x.numero}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
