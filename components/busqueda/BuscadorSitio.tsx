"use client";

/* El buscador de /buscar (OD-05, 25-11-2026). Recibe el índice liviano que
   arma el servidor (lib/busqueda-indice.ts) y busca sin tildes en guías,
   áreas, sentencias y perfiles, con el mismo campo de filete y el mismo
   criterio de pertinencia del índice de artículos. Los resultados van
   agrupados por tipo, en filas con filete como las del índice de sentencias
   de la portada, sin tarjetas. Lee y escribe `?q=` en la dirección para que
   una búsqueda se pueda compartir o abrir desde otro lugar del sitio. */

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, MagnifyingGlass, X } from "@phosphor-icons/react";
import { buscar, GRUPOS, preparar, type EntradaBusqueda, type TipoResultado } from "@/lib/busqueda";
import { trackBusquedaSitio } from "@/lib/busqueda-analytics";

/** Cuántas filas se ven por grupo antes de «Ver todas». */
const VISIBLES = 6;

/** Búsquedas para empezar: las materias que más traen consultas. */
const SUGERENCIAS = ["lesividad", "caducidad", "licitación", "medida cautelar", "amparo", "responsabilidad patrimonial"];

/** Los índices de cada sección, para quien prefiere recorrer. */
const SECCIONES: { tipo: TipoResultado; href: string }[] = [
  { tipo: "guia", href: "/articulos" },
  { tipo: "area", href: "/areas" },
  { tipo: "sentencia", href: "/jurisprudencia-destacada" },
  { tipo: "perfil", href: "/abogados" },
];

function Fila({ e }: { e: EntradaBusqueda }) {
  return (
    <li lang={e.lang}>
      <Link
        href={e.ruta}
        className="group relative block py-5 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hilo"
      >
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-cream/10" />
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-burgundy-light transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 dark:bg-hilo"
        />
        {e.meta && <span className="block text-[13px] tabular-nums text-cream/65">{e.meta}</span>}
        <span className="mt-1.5 block text-[17px] font-semibold leading-snug tracking-[-0.01em] text-cream transition-colors duration-300 group-hover:text-burgundy-light dark:group-hover:text-hilo-texto">
          {e.titulo}
        </span>
        {e.resumen && (
          <span className="mt-1.5 line-clamp-2 max-w-[68ch] text-sm leading-relaxed text-cream/70">{e.resumen}</span>
        )}
      </Link>
    </li>
  );
}

export function BuscadorSitio({ indice }: { indice: EntradaBusqueda[] }) {
  const params = useSearchParams();
  const q = params.get("q") ?? "";
  const [busca, setBusca] = useState(q);
  const [abiertos, setAbiertos] = useState<Set<TipoResultado>>(new Set());
  const campo = useRef<HTMLInputElement>(null);

  /* Cada término nuevo vuelve a plegar los grupos. */
  const cambiar = (v: string) => {
    setBusca(v);
    setAbiertos(new Set());
  };

  /* Si otra parte del sitio abre /buscar?q=… con la página ya montada, el
     campo toma el término nuevo. Se ignora el valor que el propio buscador
     acaba de escribir en la dirección, para no pisar lo que se sigue
     tecleando. (Ajuste de estado durante el render, el patrón de React para
     derivar estado de un valor que cambia.) */
  const [qPrevio, setQPrevio] = useState(q);
  const [escrito, setEscrito] = useState(q);
  if (q !== qPrevio) {
    setQPrevio(q);
    if (q !== escrito) {
      setEscrito(q);
      cambiar(q);
    }
  }

  /* La dirección acompaña al campo, sin recargar ni sumar entradas al
     historial. */
  useEffect(() => {
    const termino = busca.trim();
    const t = window.setTimeout(() => {
      if (termino === escrito) return;
      setEscrito(termino);
      const url = termino ? `/buscar?q=${encodeURIComponent(termino)}` : "/buscar";
      window.history.replaceState(window.history.state, "", url);
    }, 400);
    return () => window.clearTimeout(t);
  }, [busca, escrito]);

  const corpus = useMemo(() => preparar(indice), [indice]);
  const grupos = useMemo(() => buscar(corpus, busca), [corpus, busca]);
  const total = grupos.reduce((n, g) => n + g.resultados.length, 0);
  const buscando = busca.trim().length > 0;

  /* Medición: cuando el texto se asienta (1,2 s sin teclear), como en el
     buscador de las normas. */
  const medida = useRef("");
  useEffect(() => {
    const termino = busca.trim();
    if (termino.length < 2) return;
    const t = window.setTimeout(() => {
      if (termino === medida.current) return;
      medida.current = termino;
      trackBusquedaSitio(termino, total);
    }, 1200);
    return () => window.clearTimeout(t);
  }, [busca, total]);

  const cuenta = useMemo(() => {
    const n = new Map<TipoResultado, number>();
    indice.forEach((e) => n.set(e.tipo, (n.get(e.tipo) ?? 0) + 1));
    return n;
  }, [indice]);

  const elegir = (termino: string) => {
    cambiar(termino);
    campo.current?.focus();
  };

  return (
    <div>
      <form
        role="search"
        onSubmit={(ev) => {
          ev.preventDefault();
          campo.current?.blur();
        }}
        className="sticky top-16 z-20 -mx-1 bg-surface px-1 pt-3 md:top-20"
      >
        <div className="gc-campo-filete flex items-center gap-3 border-b border-cream/20 pb-2">
          <MagnifyingGlass size={18} aria-hidden="true" className="shrink-0 text-cream/65" />
          <input
            ref={campo}
            type="search"
            name="q"
            value={busca}
            onChange={(ev) => cambiar(ev.target.value)}
            onKeyDown={(ev) => ev.key === "Escape" && cambiar("")}
            placeholder="Tema, norma, sentencia o abogado"
            aria-label="Buscar en el sitio"
            autoComplete="off"
            enterKeyHint="search"
            autoFocus
            className="w-full bg-transparent py-2 text-base text-cream placeholder:text-cream/65 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          {busca && (
            <button
              type="button"
              onClick={() => elegir("")}
              aria-label="Borrar la búsqueda"
              className="-mr-2 flex h-11 w-11 shrink-0 items-center justify-center text-cream/65 transition-colors hover:text-cream"
            >
              <X size={16} weight="bold" aria-hidden="true" />
            </button>
          )}
        </div>
      </form>

      <p aria-live="polite" className={buscando ? "mt-5 text-sm text-cream/75" : "sr-only"}>
        {buscando
          ? total === 0
            ? `Nada en el sitio coincide con «${busca.trim()}».`
            : `${total} ${total === 1 ? "resultado" : "resultados"} para «${busca.trim()}»`
          : ""}
      </p>

      {buscando && total > 0 && (
        <>
          {/* Saltos a cada grupo, con su cifra */}
          {grupos.length > 1 && (
            <nav aria-label="Tipos de resultado" className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm">
              {grupos.map((g) => (
                <a
                  key={g.tipo}
                  href={`#resultados-${g.tipo}`}
                  className="py-2 text-cream/75 underline decoration-cream/25 underline-offset-4 transition-colors duration-300 hover:text-emphasis hover:decoration-current"
                >
                  {g.titulo} <span className="tabular-nums text-cream/65">({g.resultados.length})</span>
                </a>
              ))}
            </nav>
          )}

          <div className="mt-10 space-y-14 md:space-y-16">
            {grupos.map((g) => {
              const todos = abiertos.has(g.tipo);
              const filas = todos ? g.resultados : g.resultados.slice(0, VISIBLES);
              const resto = g.resultados.length - VISIBLES;
              return (
                <section key={g.tipo} id={`resultados-${g.tipo}`} aria-labelledby={`titulo-${g.tipo}`} className="scroll-mt-36">
                  <h2
                    id={`titulo-${g.tipo}`}
                    className="flex items-baseline gap-3 text-[17px] font-medium text-burgundy-light dark:text-cream"
                  >
                    {g.titulo}
                    <span className="text-[13px] font-normal tabular-nums text-cream/65">{g.resultados.length}</span>
                  </h2>
                  <ul role="list" className="mt-3 border-b border-cream/10">
                    {filas.map((e) => (
                      <Fila key={e.ruta} e={e} />
                    ))}
                  </ul>
                  {resto > 0 && (
                    <button
                      type="button"
                      onClick={() =>
                        setAbiertos((prev) => {
                          const n = new Set(prev);
                          if (todos) n.delete(g.tipo);
                          else n.add(g.tipo);
                          return n;
                        })
                      }
                      aria-expanded={todos}
                      className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-burgundy transition-colors duration-300 hover:text-burgundy-light dark:text-hilo-texto"
                    >
                      {todos ? "Ver menos" : `Ver ${resto === 1 ? "1 más" : `${resto} más`}`}
                    </button>
                  )}
                </section>
              );
            })}
          </div>
        </>
      )}

      {buscando && total === 0 && (
        <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-cream/75">
          Pruebe con otra palabra o con el número de la ley. También puede{" "}
          <Link href="/areas" className="underline decoration-cream/30 underline-offset-4 hover:text-emphasis">
            recorrer las áreas de práctica
          </Link>{" "}
          o{" "}
          <Link href="/contacto" className="underline decoration-cream/30 underline-offset-4 hover:text-emphasis">
            escribirnos su consulta
          </Link>
          .
        </p>
      )}

      {!buscando && (
        <div className="mt-8 space-y-14">
          <div>
            <h2 className="text-[13px] text-cream/65">Para empezar</h2>
            <ul role="list" className="mt-1 flex flex-wrap gap-x-6 gap-y-1 text-sm">
              {SUGERENCIAS.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => elegir(s)}
                    className="min-h-11 text-cream/75 underline decoration-cream/25 underline-offset-4 transition-colors duration-300 hover:text-emphasis hover:decoration-current"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <section aria-labelledby="titulo-secciones">
            <h2 id="titulo-secciones" className="text-[17px] font-medium text-burgundy-light dark:text-cream">
              O recorra cada sección
            </h2>
            <ul role="list" className="mt-3 grid border-b border-cream/10 md:grid-cols-2 md:gap-x-8">
              {SECCIONES.map(({ tipo, href }) => {
                const g = GRUPOS.find((x) => x.tipo === tipo)!;
                const n = cuenta.get(tipo) ?? 0;
                return (
                  <li key={tipo}>
                    <Link
                      href={href}
                      className="group relative flex items-center justify-between gap-4 py-5 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hilo"
                    >
                      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-cream/10" />
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-burgundy-light transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 dark:bg-hilo"
                      />
                      <span>
                        <span className="block text-[17px] font-semibold leading-snug tracking-[-0.01em] text-cream transition-colors duration-300 group-hover:text-burgundy-light dark:group-hover:text-hilo-texto">
                          {g.titulo}
                        </span>
                        <span className="mt-1 block text-[13px] tabular-nums text-cream/65">
                          {n} {n === 1 ? g.singular : g.plural}
                        </span>
                      </span>
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 text-cream/65 transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}
