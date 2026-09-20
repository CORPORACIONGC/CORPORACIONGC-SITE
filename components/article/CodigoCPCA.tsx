"use client";

/* El Código por dentro: sus doce títulos, cada artículo con su rótulo y el
   texto íntegro al abrirlo. Se busca por número —«39»— o por palabra
   —«cautelar»—. El texto se descarga una sola vez desde /datos/cpca.json,
   así la página no carga doscientas mil letras que casi nadie leerá enteras. */

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { CaretDown, MagnifyingGlass, ArrowSquareOut } from "@phosphor-icons/react";
import { CPCA_FICHA, CPCA_INDICE, CPCA_JURISPRUDENCIA, CPCA_ROTULOS, CPCA_TITULOS, type ArticuloCPCA } from "@/lib/cpca";

const sinTilde = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const tituloCorto = (t: string | null) => (t ?? "").replace(/^Título\s+[IVXL]+\s*·\s*/, "");
const romano = (t: string | null) => (t ?? "").match(/^Título\s+([IVXL]+)/)?.[1] ?? "";
/* Resumen de un artículo sin rótulo propio: su primera oración, sin el «1)»
   con que arrancan los incisos. */
const resumen = (texto: string) => {
  const limpio = texto.replace(/^\s*\d+\)\s*/, "");
  const corte = limpio.slice(0, 76);
  return corte.length < limpio.length ? `${corte.trim()}…` : corte.trim();
};

export function CodigoCPCA() {
  const [arts, setArts] = useState<ArticuloCPCA[] | null>(null);
  const [error, setError] = useState(false);
  const [busca, setBusca] = useState("");
  const [tituloActivo, setTituloActivo] = useState<string | null>(null);
  const [abierto, setAbierto] = useState<string | null>(null);
  const lista = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/datos/cpca.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("no disponible"))))
      .then(setArts)
      .catch(() => setError(true));
  }, []);

  /* El índice viene con la página; los textos, del JSON. Mientras no haya
     llegado, la lista se pinta igual y el artículo abierto avisa. */
  const base: ArticuloCPCA[] = useMemo(
    () => arts ?? CPCA_INDICE.map(([art, t]) => ({ art, titulo: CPCA_TITULOS[t], capitulo: null, seccion: null, texto: "" })),
    [arts],
  );
  const titulos = useMemo(() => {
    const vistos: string[] = [];
    base.forEach((a) => {
      if (a.titulo && !vistos.includes(a.titulo)) vistos.push(a.titulo);
    });
    return vistos;
  }, [base]);

  const visibles = useMemo(() => {
    const q = sinTilde(busca.trim());
    if (q) {
      const soloNumero = /^\d+$/.test(q);
      return base.filter((a) =>
        soloNumero ? a.art === q || a.art.startsWith(q) : sinTilde(a.texto).includes(q) || sinTilde(CPCA_ROTULOS[a.art] ?? "").includes(q),
      );
    }
    return base.filter((a) => a.titulo === (tituloActivo ?? titulos[0]));
  }, [base, busca, tituloActivo, titulos]);

  const elegirTitulo = (t: string) => {
    setBusca("");
    setTituloActivo(t);
    setAbierto(null);
    requestAnimationFrame(() => {
      const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      lista.current?.scrollIntoView({ block: "nearest", behavior: quieto ? "auto" : "smooth" });
    });
  };

  return (
    <div className="my-12 border-t border-gold/60 pt-8">
      {/* Google entiende así que esta página contiene la ley, no un comentario
          sobre ella. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Legislation",
            name: CPCA_FICHA.nombre,
            alternateName: ["CPCA", CPCA_FICHA.ley],
            legislationIdentifier: CPCA_FICHA.ley,
            legislationType: "Ley",
            legislationJurisdiction: "Costa Rica",
            legislationDate: "2006-04-28",
            legislationLegalForce: "InForce",
            inLanguage: "es",
            sameAs: CPCA_FICHA.sinalevi,
          }),
        }}
      />
      <p className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <span className="text-[44px] font-light leading-none tabular-nums tracking-[-0.02em] text-cream">
          {CPCA_FICHA.articulos}
        </span>
        <span className="max-w-[56ch] text-[15px] leading-snug text-cream/80">
          artículos en doce títulos. {CPCA_FICHA.version}, según el Sistema Costarricense de Información
          Jurídica.
        </span>
      </p>

      {/* Buscar por número o por palabra */}
      <div className="mt-8 flex items-center gap-3 border-b border-cream/15 pb-2">
        <MagnifyingGlass size={16} aria-hidden="true" className="shrink-0 text-cream/50" />
        <input
          type="search"
          value={busca}
          onChange={(e) => {
            setBusca(e.target.value);
            setAbierto(null);
          }}
          placeholder="Escriba un número de artículo —39— o una palabra —cautelar—"
          aria-label="Buscar en el Código por número de artículo o por palabra"
          className="w-full bg-transparent py-1.5 text-[15px] text-cream placeholder:text-cream/40 focus:outline-none"
        />
        {busca && (
          <button
            type="button"
            onClick={() => setBusca("")}
            className="shrink-0 text-sm text-burgundy transition-colors hover:text-burgundy-light dark:text-gold dark:hover:text-gold-light"
          >
            Limpiar
          </button>
        )}
      </div>

      {/* Los doce títulos */}
      {!busca && titulos.length > 0 && (
        <ul role="list" className="mt-6 flex list-none flex-wrap gap-x-5 gap-y-2 pl-0 marker:content-none">
          {titulos.map((t) => {
            const on = t === (tituloActivo ?? titulos[0]);
            return (
              <li key={t}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => elegirTitulo(t)}
                  className={`text-left text-[13px] leading-snug transition-colors duration-300 ${
                    on ? "text-burgundy dark:text-gold" : "text-cream/65 hover:text-burgundy dark:hover:text-gold"
                  }`}
                >
                  <span className="tabular-nums">{romano(t)}</span>{" "}
                  <span className={on ? "" : "text-cream/50"}>{tituloCorto(t).toLowerCase()}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <div ref={lista} className="mt-6 scroll-mt-28">
        {error && (
          <p className="text-[15px] text-cream/70">
            El texto del Código no está disponible en este momento.{" "}
            <a href={CPCA_FICHA.sinalevi} target="_blank" rel="noopener noreferrer" className="underline decoration-cream/30 underline-offset-4">
              Consúltelo en el SINALEVI
            </a>
            .
          </p>
        )}
        {(
          <>
            <p aria-live="polite" className="text-[13px] text-cream/65">
              {busca
                ? `${visibles.length} ${visibles.length === 1 ? "artículo coincide" : "artículos coinciden"} con «${busca}».`
                : `${visibles.length} artículos en este título.`}
            </p>

            <ol role="list" className="mt-4 list-none divide-y divide-cream/10 border-y border-cream/10 pl-0 marker:content-none">
              {visibles.map((a) => {
                const on = abierto === a.art;
                const rotulo = CPCA_ROTULOS[a.art];
                const votos = CPCA_JURISPRUDENCIA[a.art];
                return (
                  <li key={a.art} id={`art-${a.art}`} className="scroll-mt-28">
                    <button
                      type="button"
                      aria-expanded={on}
                      onClick={() => setAbierto(on ? null : a.art)}
                      className="group grid w-full grid-cols-[60px_minmax(0,1fr)_auto] items-baseline gap-4 py-3 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    >
                      <span className="text-[15px] tabular-nums text-cream/65">{a.art}</span>
                      <span className="min-w-0">
                        <span
                          className={`block text-[15px] leading-snug transition-colors duration-300 ${
                            on ? "text-burgundy dark:text-gold" : "text-cream group-hover:text-burgundy dark:group-hover:text-gold"
                          }`}
                        >
                          {rotulo ?? (a.texto ? resumen(a.texto) : `Artículo ${a.art}`)}
                        </span>
                        {votos && (
                          <span className="mt-0.5 block text-[13px] text-cream/55">
                            Interpretado en {votos.length === 1 ? "una sentencia" : `${votos.length} sentencias`} de esta
                            selección
                          </span>
                        )}
                      </span>
                      <CaretDown
                        size={13}
                        weight="bold"
                        aria-hidden="true"
                        className={`mt-1 shrink-0 text-cream/40 transition-transform duration-300 ${on ? "rotate-180" : ""}`}
                      />
                    </button>

                    {on && (
                      <div className="pb-5 pl-[76px] pr-2">
                        <p className="max-w-[70ch] whitespace-pre-line text-[15px] leading-relaxed text-cream/80">
                          {a.texto || "Cargando el texto del artículo…"}
                        </p>
                        {(a.capitulo || a.seccion) && (
                          <p className="mt-3 text-[13px] text-cream/50">
                            {[a.capitulo, a.seccion].filter(Boolean).join(" · ")}
                          </p>
                        )}
                        {votos && (
                          <ul role="list" className="mt-4 list-none space-y-1.5 pl-0 marker:content-none">
                            {votos.map((v) => (
                              <li key={v.voto} className="text-[14px] leading-snug">
                                <Link
                                  href={`/jurisprudencia-destacada/${v.slug}`}
                                  className="font-medium text-burgundy underline decoration-burgundy/30 underline-offset-4 transition-colors hover:text-burgundy-light dark:text-gold dark:decoration-gold/30 dark:hover:text-gold-light"
                                >
                                  Voto {v.voto}
                                </Link>
                                <span className="text-cream/70"> · {v.sobre}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        <p className="mt-4 text-[13px]">
                          <a
                            href={CPCA_FICHA.sinalevi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-cream/60 transition-colors hover:text-burgundy dark:hover:text-gold"
                          >
                            Ver el artículo en el SINALEVI
                            <ArrowSquareOut size={11} aria-hidden="true" />
                          </a>
                        </p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </>
        )}
      </div>

      <p className="mt-6 max-w-[72ch] text-[13px] leading-relaxed text-cream/65">
        Texto tomado del Sistema Costarricense de Información Jurídica, en su versión vigente. Para citar en un
        escrito, coteje siempre contra la fuente oficial.
      </p>
    </div>
  );
}
