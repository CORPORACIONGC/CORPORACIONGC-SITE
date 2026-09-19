"use client";

/* Las citas de una sentencia: la cifra total, la serie por año y el reparto
   por despacho, con la lista completa de resoluciones detrás. Cada año y
   cada despacho es un botón que abre la lista filtrada; la lista está
   siempre en el HTML (oculta hasta que se abre) y se descarga en CSV, así
   cualquier cifra del gráfico se puede comprobar una por una en Nexus.
   Las dos vistas están enlazadas: al elegir un despacho, cada año marca en
   burdeos la parte que le corresponde, y al elegir un año, cada despacho. */

import { useId, useRef, useState } from "react";
import { ArrowSquareOut, CaretDown, DownloadSimple } from "@phosphor-icons/react";
import type { ResolucionQueCita } from "@/lib/jurisprudencia-citas";

type Filtro = { tipo: "anio"; valor: number } | { tipo: "grupo"; valor: string } | null;

const fechaCorta = (iso: string) => iso.split("-").reverse().join("-");
const nexus = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;

export function CitasExplorador({
  lista,
  grupos,
  corte,
  metodo,
  csv,
}: {
  lista: ResolucionQueCita[];
  grupos: string[];
  corte: string;
  metodo: string;
  csv: string;
}) {
  const [filtro, setFiltro] = useState<Filtro>(null);
  const [abierta, setAbierta] = useState(false);
  const listaId = useId();
  const cabecera = useRef<HTMLDivElement>(null);

  const total = lista.length;
  const despachos = new Set(lista.map((r) => r.tribunal)).size;
  const anios = lista.map((r) => Number(r.fecha.slice(0, 4)));
  const primero = Math.min(...anios);
  const ultimo = Math.max(...anios);
  const porAnio = Array.from({ length: ultimo - primero + 1 }, (_, i) => {
    const anio = primero + i;
    return { anio, n: anios.filter((a) => a === anio).length };
  });
  const porGrupo = grupos.map((g) => ({ grupo: g, n: lista.filter((r) => r.grupo === g).length }));
  const maxAnio = Math.max(...porAnio.map((a) => a.n));
  const maxGrupo = Math.max(...porGrupo.map((g) => g.n));
  const rotulos = new Set([primero, 2010, 2015, 2020, ultimo]);

  const visibles = lista.filter((r) =>
    !filtro
      ? true
      : filtro.tipo === "anio"
        ? r.fecha.startsWith(String(filtro.valor))
        : r.grupo === filtro.valor,
  );
  const etiqueta = !filtro ? "" : filtro.tipo === "anio" ? String(filtro.valor) : filtro.valor;

  const elegir = (f: NonNullable<Filtro>) => {
    const mismo = filtro?.tipo === f.tipo && filtro.valor === f.valor;
    setFiltro(mismo ? null : f);
    setAbierta(true);
    requestAnimationFrame(() => {
      const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      cabecera.current?.scrollIntoView({ block: "nearest", behavior: quieto ? "auto" : "smooth" });
    });
  };
  const activoAnio = (anio: number) => filtro?.tipo === "anio" && filtro.valor === anio;
  const activoGrupo = (g: string) => filtro?.tipo === "grupo" && filtro.valor === g;
  /* Cuántas del filtro caen en cada año o en cada despacho (null sin filtro). */
  const parteAnio = (anio: number) =>
    !filtro ? null : visibles.filter((r) => r.fecha.startsWith(String(anio))).length;
  const parteGrupo = (g: string) => (!filtro ? null : visibles.filter((r) => r.grupo === g).length);

  return (
    <figure className="my-10 border-t border-gold/60 pt-8 md:my-12 md:pt-10">
      <p className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <span className="text-[44px] font-light leading-none tabular-nums tracking-[-0.02em] text-cream">
          {total}
        </span>
        <span className="max-w-[56ch] text-[15px] leading-snug text-cream/80">
          resoluciones la citan entre {primero} y {ultimo}, en {despachos} despachos judiciales
        </span>
      </p>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
        {/* Por año: cada columna es un botón */}
        <div>
          <p className="type-label text-cream/65">Por año</p>
          <div
            role="group"
            aria-label="Resoluciones por año"
            className="mt-5 flex h-36 items-end gap-[3px] border-b border-cream/15 md:gap-1 lg:h-60"
          >
            {porAnio.map((a) => {
              const on = activoAnio(a.anio);
              const parte = parteAnio(a.anio);
              return (
                <button
                  key={a.anio}
                  type="button"
                  disabled={a.n === 0}
                  aria-pressed={on}
                  aria-controls={listaId}
                  aria-label={`${a.anio}: ${a.n} ${a.n === 1 ? "resolución" : "resoluciones"}`}
                  title={`${a.anio}: ${a.n}`}
                  onClick={() => elegir({ tipo: "anio", valor: a.anio })}
                  className="group flex h-full flex-1 items-end outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-default"
                >
                  <span
                    className={`relative block w-full transition-colors duration-300 ${
                      filtro ? "bg-gold/30 group-hover:bg-gold/60" : "bg-gold/80 group-hover:bg-gold"
                    }`}
                    style={{ height: `${(a.n / maxAnio) * 100}%` }}
                  >
                    {!!parte && (
                      <span
                        className="absolute inset-x-0 bottom-0 bg-burgundy dark:bg-gold-light"
                        style={{ height: `${(parte / a.n) * 100}%` }}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
          <div aria-hidden="true" className="mt-2 flex gap-[3px] md:gap-1">
            {porAnio.map((a) => (
              <span
                key={a.anio}
                className="flex flex-1 justify-center whitespace-nowrap text-[13px] tabular-nums text-cream/65"
              >
                {rotulos.has(a.anio) ? a.anio : ""}
              </span>
            ))}
          </div>
        </div>

        {/* Por despacho: cada fila es un botón */}
        <div>
          <p className="type-label text-cream/65">Por despacho</p>
          <ul role="list" className="mt-3">
            {porGrupo.map((g) => {
              const on = activoGrupo(g.grupo);
              const parte = parteGrupo(g.grupo);
              return (
                <li key={g.grupo}>
                  <button
                    type="button"
                    aria-pressed={on}
                    aria-controls={listaId}
                    onClick={() => elegir({ tipo: "grupo", valor: g.grupo })}
                    className="group block w-full py-2 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    <span className="flex items-baseline justify-between gap-4 text-[15px] leading-snug">
                      <span
                        className={`transition-colors duration-300 ${
                          on
                            ? "text-burgundy dark:text-gold"
                            : "text-cream/85 group-hover:text-burgundy dark:group-hover:text-gold"
                        }`}
                      >
                        {g.grupo}
                      </span>
                      <span className="tabular-nums text-cream">
                        {filtro?.tipo === "anio" && (
                          <span className="text-burgundy dark:text-gold">{parte} de </span>
                        )}
                        {g.n}
                      </span>
                    </span>
                    <span aria-hidden="true" className="mt-1.5 block h-[3px] bg-cream/10">
                      <span
                        className={`relative block h-full transition-colors duration-300 ${
                          filtro ? "bg-gold/30" : "bg-gold"
                        }`}
                        style={{ width: `${(g.n / maxGrupo) * 100}%` }}
                      >
                        {!!parte && (
                          <span
                            className="absolute inset-y-0 left-0 bg-burgundy dark:bg-gold-light"
                            style={{ width: `${(parte / g.n) * 100}%` }}
                          />
                        )}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* La lista completa */}
      <div className="mt-10 border-t border-cream/10 pt-6">
        <div
          ref={cabecera}
          className="flex scroll-mt-32 flex-wrap items-center justify-between gap-x-6 gap-y-3"
        >
          <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <button
              type="button"
              aria-expanded={abierta}
              aria-controls={listaId}
              onClick={() => setAbierta((v) => !v)}
              className="group inline-flex items-center gap-2 text-sm font-medium text-burgundy outline-none transition-colors hover:text-burgundy-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold dark:text-gold dark:hover:text-gold-light"
            >
              {abierta ? "Ocultar la lista" : `Ver las ${total} resoluciones`}
              <CaretDown
                size={13}
                weight="bold"
                aria-hidden="true"
                className={`transition-transform duration-300 ${abierta ? "rotate-180" : ""}`}
              />
            </button>
            {!abierta && <span className="text-sm text-cream/65">o elija un año o un despacho.</span>}
          </p>
          <a
            href={csv}
            download
            className="inline-flex items-center gap-1.5 text-sm text-cream/70 transition-colors hover:text-burgundy dark:hover:text-gold"
          >
            Descargar la lista (CSV)
            <DownloadSimple size={14} aria-hidden="true" />
          </a>
        </div>

        <div id={listaId} hidden={!abierta}>
          <p aria-live="polite" className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[13px] text-cream/65">
            {filtro ? (
              <>
                <span>
                  <span className="font-medium text-cream">{etiqueta}</span> · {visibles.length} de {total}
                </span>
                <button
                  type="button"
                  onClick={() => setFiltro(null)}
                  className="underline decoration-cream/20 underline-offset-4 transition-colors hover:text-burgundy hover:decoration-burgundy dark:hover:text-gold dark:hover:decoration-gold"
                >
                  Ver todas
                </button>
              </>
            ) : (
              <span>Las {total} resoluciones, en orden cronológico.</span>
            )}
          </p>

          <div className="mt-4 hidden grid-cols-[96px_112px_minmax(0,1fr)_148px] gap-5 pb-2 md:grid">
            {["Fecha", "Resolución", "Despacho", "Expediente"].map((t) => (
              <span key={t} className="type-label text-cream/65">
                {t}
              </span>
            ))}
          </div>
          <ol role="list" className="divide-y divide-cream/10 border-y border-cream/10">
            {visibles.map((r) => (
              <li
                key={`${r.despacho}-${r.numero}-${r.fecha}`}
                className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-0.5 py-3 text-[15px] leading-snug md:grid-cols-[96px_112px_minmax(0,1fr)_148px] md:gap-5"
              >
                <span className="order-2 whitespace-nowrap text-right text-[13px] tabular-nums text-cream/65 md:order-none md:text-left md:text-[15px]">
                  {fechaCorta(r.fecha)}
                </span>
                <span className="order-1 md:order-none">
                  {r.nexusId ? (
                    <a
                      href={nexus(r.nexusId)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium tabular-nums text-cream underline decoration-cream/20 underline-offset-4 transition-colors hover:text-burgundy hover:decoration-burgundy dark:hover:text-gold dark:hover:decoration-gold"
                    >
                      {r.numero}
                      <ArrowSquareOut size={11} aria-hidden="true" className="text-cream/50" />
                    </a>
                  ) : (
                    <span className="font-medium tabular-nums text-cream">{r.numero}</span>
                  )}
                </span>
                <span className="order-3 col-span-2 text-[13px] text-cream/75 md:order-none md:col-span-1 md:text-[15px]">
                  {r.despacho}
                  {r.expediente && <span className="md:hidden"> · {r.expediente}</span>}
                </span>
                <span className="hidden text-[13px] tabular-nums text-cream/65 md:block md:pt-0.5">
                  {r.expediente ?? "—"}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-4">
            <button
              type="button"
              onClick={() => {
                setAbierta(false);
                cabecera.current?.scrollIntoView({ block: "nearest" });
              }}
              className="text-sm text-cream/70 transition-colors hover:text-burgundy dark:hover:text-gold"
            >
              Ocultar la lista
            </button>
          </p>
        </div>
      </div>

      <figcaption className="mt-8 text-[13px] leading-relaxed text-cream/65">
        {metodo} Corte al {corte}.
      </figcaption>
    </figure>
  );
}
