"use client";

/* Una norma por dentro: sus títulos, cada artículo con su rótulo y el texto
   íntegro al abrirlo. Se busca por número —«39»— o por palabra —«cautelar»—.
   El índice viaja con la página, así el buscador de Google recorre la norma
   completa; el texto se descarga una sola vez al abrir el primer artículo,
   porque son cientos de miles de letras que casi nadie leerá enteras. */

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { CaretDown, MagnifyingGlass, ArrowSquareOut } from "@phosphor-icons/react";
import type { ArticuloNorma, FichaNorma, GuiaDeArticulo, VotoDeArticulo } from "@/lib/normas";

/** Fila del índice: artículo, rótulo, título, capítulo y sección. Los dos
 *  últimos valen −1 cuando la norma no los distingue. */
export type FilaNorma = [string, string, number, number?, number?];

const sinTilde = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
/** El nombre del título sin su numeral y, cuando es muy largo, solo hasta
 *  la primera coma: en la fila de títulos manda la brevedad. */
const tituloCorto = (t: string) => {
  const n = t.replace(/^T[íi]tulo\s+[IVXL]+\s*·\s*/, "");
  return n.length > 42 && n.includes(",") ? n.slice(0, n.indexOf(",")) : n;
};
const romano = (t: string) => t.match(/^T[íi]tulo\s+([IVXL]+)/)?.[1] ?? "";
const grupoCorto = (g: string) => g.replace(/^(Cap[íi]tulo|Secci[óo]n)\s+[IVXL]+\s*·\s*/, "");

export function NormaNavegable({
  ficha,
  titulos,
  indice,
  grupos = [],
  votos = {},
  guias = {},
}: {
  ficha: FichaNorma;
  titulos: string[];
  indice: FilaNorma[];
  grupos?: string[];
  votos?: Record<string, VotoDeArticulo[]>;
  guias?: Record<string, GuiaDeArticulo>;
}) {
  const [textos, setTextos] = useState<Record<string, ArticuloNorma> | null>(null);
  const [error, setError] = useState(false);
  const [busca, setBusca] = useState("");
  const [tituloActivo, setTituloActivo] = useState(0);
  const [abierto, setAbierto] = useState<string | null>(null);
  const lista = useRef<HTMLDivElement>(null);
  const pedido = useRef(false);

  /* El texto se pide la primera vez que alguien abre un artículo o busca
     una palabra; quien solo recorre el índice no descarga nada. */
  const pedirTextos = () => {
    if (pedido.current) return;
    pedido.current = true;
    fetch(ficha.datos)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("no disponible"))))
      .then((arr: ArticuloNorma[]) =>
        setTextos(Object.fromEntries(arr.map((a) => [a.art, a]))),
      )
      .catch(() => setError(true));
  };

  useEffect(() => {
    if (busca.trim().length > 2 && !/^\d+$/.test(busca.trim())) pedirTextos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [busca]);

  /* Quien busca «cartel» busca el pliego de condiciones: la norma cambió
     de palabra y el buscador lo sabe. */
  const sinonimo = ficha.sinonimos?.[sinTilde(busca.trim())];

  /* La norma entera se dibuja siempre; el título y el buscador solo deciden
     qué se muestra. Así el índice completo queda en la página y se puede
     recorrer con la búsqueda del propio navegador. */
  const visibles = useMemo(() => {
    const q = sinonimo ? sinTilde(sinonimo.actual) : sinTilde(busca.trim());
    if (!q) return new Set(indice.filter((f) => f[2] === tituloActivo).map((f) => f[0]));
    if (/^\d+$/.test(q)) {
      const exacto = indice.filter((f) => f[0] === q);
      const hallados = exacto.length ? exacto : indice.filter((f) => f[0].startsWith(q));
      return new Set(hallados.map((f) => f[0]));
    }
    return new Set(
      indice
        .filter((f) => sinTilde(f[1]).includes(q) || sinTilde(textos?.[f[0]]?.texto ?? "").includes(q))
        .map((f) => f[0]),
    );
  }, [indice, busca, sinonimo, tituloActivo, textos]);

  const elegirTitulo = (i: number) => {
    setBusca("");
    setTituloActivo(i);
    setAbierto(null);
    requestAnimationFrame(() => {
      const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      lista.current?.scrollIntoView({ block: "nearest", behavior: quieto ? "auto" : "smooth" });
    });
  };

  const abrir = (art: string) => {
    pedirTextos();
    setAbierto(abierto === art ? null : art);
  };

  return (
    <div className="my-12 border-t border-gold/60 pt-8">
      {/* Google entiende así que esta página contiene la norma, no un
          comentario sobre ella. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Legislation",
            name: ficha.nombre,
            alternateName: ficha.alias ?? [ficha.identificador],
            legislationIdentifier: ficha.identificador,
            legislationType: ficha.tipo,
            legislationJurisdiction: "Costa Rica",
            legislationDate: ficha.fecha,
            legislationLegalForce: "InForce",
            inLanguage: "es",
            sameAs: ficha.sinalevi,
          }),
        }}
      />
      <p className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <span className="text-[44px] font-light leading-none tabular-nums tracking-[-0.02em] text-cream">
          {ficha.articulos}
        </span>
        <span className="max-w-[56ch] text-[15px] leading-snug text-cream/80">
          artículos. {ficha.version}, según el Sistema Costarricense de Información Jurídica.
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
          placeholder={ficha.etiquetaBusqueda}
          aria-label={`Buscar en ${ficha.nombre} por número de artículo o por palabra`}
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

      {/* Los títulos de la norma */}
      {!busca && (
        <ul role="list" className="mt-6 flex list-none flex-wrap gap-x-5 gap-y-2 pl-0 marker:content-none">
          {titulos.map((t, i) => {
            const on = i === tituloActivo;
            return (
              <li key={t}>
                <button
                  type="button"
                  aria-pressed={on}
                  title={t.replace(/^T[íi]tulo\s+[IVXL]+\s*·\s*/, "")}
                  onClick={() => elegirTitulo(i)}
                  className={`text-left text-[13px] leading-snug transition-colors duration-300 ${
                    on ? "text-burgundy dark:text-gold" : "text-cream/65 hover:text-burgundy dark:hover:text-gold"
                  }`}
                >
                  {romano(t) && <span className="tabular-nums">{romano(t)} </span>}
                  <span className={on ? "" : "text-cream/50"}>{tituloCorto(t).toLowerCase()}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <div ref={lista} className="mt-6 scroll-mt-28">
        <p aria-live="polite" className="max-w-[78ch] text-[13px] leading-relaxed text-cream/65">
          {busca
            ? `${visibles.size} ${visibles.size === 1 ? "artículo coincide" : "artículos coinciden"} con «${sinonimo?.actual ?? busca}».`
            : `${visibles.size} artículos en este título.`}
          {sinonimo && ` ${sinonimo.nota}`}
          {busca && !/^\d+$/.test(busca.trim()) && !textos && !error && " Buscando en el texto…"}
        </p>

        <ol role="list" className="mt-4 list-none divide-y divide-cream/10 border-y border-cream/10 pl-0 marker:content-none">
          {indice.map((f, i) => {
            const [art, rotulo, , cap = -1, sec = -1] = f;
            const previo = indice[i - 1];
            const nuevoCap = !busca && cap >= 0 && (!previo || previo[3] !== cap);
            const nuevaSec = !busca && sec >= 0 && (!previo || previo[4] !== sec);
            const oculto = !visibles.has(art);
            const on = abierto === art;
            const cuerpo = textos?.[art];
            const votosArt = votos[art];
            const guia = guias[art];
            return (
              <li key={art} id={`art-${art}`} hidden={oculto} className="scroll-mt-28">
                {nuevoCap && (
                  <p className="max-w-[60ch] pt-7 pb-1 text-[14px] font-medium leading-snug text-cream/70">
                    {grupoCorto(grupos[cap] ?? "")}
                  </p>
                )}
                {nuevaSec && (
                  <p className="max-w-[60ch] pt-3 pb-1 text-[13px] italic leading-snug text-cream/45">
                    {grupoCorto(grupos[sec] ?? "")}
                  </p>
                )}
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => abrir(art)}
                  className="group grid w-full grid-cols-[40px_minmax(0,1fr)_auto] items-baseline gap-3 py-3 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:grid-cols-[60px_minmax(0,1fr)_auto] sm:gap-4"
                >
                  <span className="text-[15px] tabular-nums text-cream/65">{art}</span>
                  <span className="min-w-0">
                    <span
                      className={`block text-[15px] leading-snug transition-colors duration-300 ${
                        on ? "text-burgundy dark:text-gold" : "text-cream group-hover:text-burgundy dark:group-hover:text-gold"
                      }`}
                    >
                      {rotulo || `Artículo ${art}`}
                    </span>
                    {(votosArt || guia) && (
                      <span className="mt-0.5 block text-[13px] text-cream/55">
                        {votosArt
                          ? `Interpretado en ${votosArt.length === 1 ? "una sentencia" : `${votosArt.length} sentencias`} de esta selección`
                          : guia.texto}
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
                  <div className="pb-5 pl-[52px] pr-2 sm:pl-[76px]">
                    {error ? (
                      <p className="max-w-[70ch] text-[15px] leading-relaxed text-cream/80">
                        El texto no está disponible en este momento.{" "}
                        <a
                          href={ficha.sinalevi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-cream/30 underline-offset-4"
                        >
                          Consúltelo en el SINALEVI
                        </a>
                        .
                      </p>
                    ) : cuerpo?.derogado ? (
                      <p className="max-w-[70ch] text-[15px] leading-relaxed text-cream/60">
                        Artículo derogado.
                      </p>
                    ) : (
                      <p className="max-w-[70ch] whitespace-pre-line text-[15px] leading-relaxed text-cream/80">
                        {cuerpo?.texto || "Cargando el texto del artículo…"}
                      </p>
                    )}
                    {cuerpo?.reformas?.length ? (
                      <ul role="list" className="mt-4 list-none space-y-1 pl-0 marker:content-none">
                        {cuerpo.reformas.map((r) => (
                          <li key={r} className="max-w-[70ch] text-[13px] leading-snug text-cream/50">
                            {r}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {(cuerpo?.capitulo || cuerpo?.seccion) && (
                      <p className="mt-3 text-[13px] text-cream/50">
                        {[cuerpo.capitulo, cuerpo.seccion].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    {(votosArt || guia) && (
                      <ul role="list" className="mt-4 list-none space-y-1.5 pl-0 marker:content-none">
                        {votosArt?.map((v) => (
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
                        {guia && (
                          <li className="text-[14px] leading-snug">
                            <Link
                              href={guia.href}
                              className="font-medium text-burgundy underline decoration-burgundy/30 underline-offset-4 transition-colors hover:text-burgundy-light dark:text-gold dark:decoration-gold/30 dark:hover:text-gold-light"
                            >
                              {guia.texto}
                            </Link>
                          </li>
                        )}
                      </ul>
                    )}
                    <p className="mt-4 text-[13px]">
                      <a
                        href={ficha.sinalevi}
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
      </div>

      <p className="mt-6 max-w-[72ch] text-[13px] leading-relaxed text-cream/65">
        Texto tomado del Sistema Costarricense de Información Jurídica, en su versión vigente. Para citar en un
        escrito, coteje siempre contra la fuente oficial.
      </p>
    </div>
  );
}
