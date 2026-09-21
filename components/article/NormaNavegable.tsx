"use client";

/* Una norma por dentro: sus títulos, cada artículo con su rótulo y el texto
   íntegro al abrirlo. Se busca por número —«39»— o por palabra —«cautelar»—.

   El índice completo se dibuja siempre, aunque el título elegido oculte la
   mayor parte: así el buscador de Google recorre la norma entera sin tener
   que pulsar nada. El texto se descarga una sola vez, al abrir el primer
   artículo o al buscar una palabra, porque son cientos de miles de letras
   que casi nadie leerá enteras. */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowSquareOut, CaretDown, Check, Copy, MagnifyingGlass } from "@phosphor-icons/react";
import type { ArticuloNorma, FichaNorma, GuiaDeArticulo, VotoDeArticulo } from "@/lib/normas";

/** Fila del índice: artículo, rótulo, título, capítulo y sección. Los dos
 *  últimos valen −1 cuando la norma no los distingue. */
export type FilaNorma = [string, string, number, number?, number?];

/** Quita las tildes conservando una letra por letra, de modo que la posición
 *  de una coincidencia en el texto sin tildes sirva también en el original. */
const plano = (s: string) =>
  Array.from(s, (c) => c.normalize("NFD")[0].toLowerCase()).join("");

const tituloCorto = (t: string) => {
  const n = t.replace(/^T[íi]tulo\s+[IVXL]+\s*·\s*/, "");
  return n.length > 42 && n.includes(",") ? n.slice(0, n.indexOf(",")) : n;
};
const romano = (t: string) => t.match(/^T[íi]tulo\s+([IVXL]+)/)?.[1] ?? "";
const grupoCorto = (g: string) => g.replace(/^(Cap[íi]tulo|Secci[óo]n)\s+[IVXL]+\s*·\s*/, "");

/** El texto con la palabra buscada marcada. */
function resaltar(texto: string, aguja: string) {
  if (!aguja) return texto;
  const letras = Array.from(texto);
  const i = plano(texto).indexOf(aguja);
  if (i < 0) return texto;
  return (
    <>
      {letras.slice(0, i).join("")}
      <mark className="bg-transparent text-burgundy underline decoration-burgundy/40 decoration-2 underline-offset-[3px] dark:text-gold dark:decoration-gold/40">
        {letras.slice(i, i + aguja.length).join("")}
      </mark>
      {letras.slice(i + aguja.length).join("")}
    </>
  );
}

/** El trozo del artículo donde aparece la palabra buscada, para no obligar a
 *  abrirlo solo por comprobar. */
function pasaje(texto: string, aguja: string) {
  const i = plano(texto).indexOf(aguja);
  if (i < 0) return null;
  const letras = Array.from(texto);
  let desde = Math.max(0, i - 46);
  let hasta = Math.min(letras.length, i + aguja.length + 82);
  // Ni el principio ni el final parten una palabra por la mitad.
  while (desde > 0 && !/\s/.test(letras[desde - 1])) desde -= 1;
  while (hasta < letras.length && !/\s/.test(letras[hasta])) hasta += 1;
  const trozo = letras.slice(desde, hasta).join("").replace(/\s+/g, " ").trim();
  return (
    <>
      {desde > 0 && "… "}
      {resaltar(trozo, aguja)}
      {hasta < letras.length && " …"}
    </>
  );
}

export function NormaNavegable({
  ficha,
  titulos,
  indice,
  grupos = [],
  votos = {},
  guias = {},
  derogados = [],
}: {
  ficha: FichaNorma;
  titulos: string[];
  indice: FilaNorma[];
  grupos?: string[];
  votos?: Record<string, VotoDeArticulo[]>;
  guias?: Record<string, GuiaDeArticulo>;
  derogados?: string[];
}) {
  const [textos, setTextos] = useState<Record<string, ArticuloNorma> | null>(null);
  const [error, setError] = useState(false);
  const [busca, setBusca] = useState("");
  const [tituloActivo, setTituloActivo] = useState(0);
  const [abierto, setAbierto] = useState<string | null>(null);
  const [copiado, setCopiado] = useState<string | null>(null);
  const lista = useRef<HTMLDivElement>(null);
  const campo = useRef<HTMLInputElement>(null);
  const pedido = useRef(false);

  const listaDerogados = useMemo(() => new Set(derogados), [derogados]);

  /* El texto se pide la primera vez que alguien abre un artículo o busca una
     palabra; quien solo recorre el índice no descarga nada. */
  const pedirTextos = useCallback(() => {
    if (pedido.current) return;
    pedido.current = true;
    fetch(ficha.datos)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("no disponible"))))
      .then((arr: ArticuloNorma[]) => setTextos(Object.fromEntries(arr.map((a) => [a.art, a]))))
      .catch(() => setError(true));
  }, [ficha.datos]);

  useEffect(() => {
    if (busca.trim().length > 2 && !/^\d+$/.test(busca.trim())) pedirTextos();
  }, [busca, pedirTextos]);

  /* Un enlace a «…#art-135» tiene que abrir ese artículo, aunque viva en un
     título que no es el que se muestra al llegar. */
  const irAlArticulo = useCallback(
    (art: string, desplazar: boolean) => {
      const fila = indice.find((f) => f[0] === art);
      if (!fila) return;
      setBusca("");
      setTituloActivo(fila[2]);
      setAbierto(art);
      pedirTextos();
      if (!desplazar) return;
      requestAnimationFrame(() => {
        const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        document
          .getElementById(`art-${art}`)
          ?.scrollIntoView({ block: "center", behavior: quieto ? "auto" : "smooth" });
      });
    },
    [indice, pedirTextos],
  );

  useEffect(() => {
    const desdeElHash = () => {
      const art = decodeURIComponent(window.location.hash).match(/^#art-([\w]+)$/)?.[1];
      if (art) irAlArticulo(art, true);
    };
    desdeElHash();
    window.addEventListener("hashchange", desdeElHash);
    return () => window.removeEventListener("hashchange", desdeElHash);
  }, [irAlArticulo]);

  /* «/» lleva el cursor al buscador desde cualquier punto de la página. */
  useEffect(() => {
    const atajo = (e: KeyboardEvent) => {
      const foco = document.activeElement;
      const escribiendo =
        foco instanceof HTMLInputElement ||
        foco instanceof HTMLTextAreaElement ||
        (foco as HTMLElement | null)?.isContentEditable;
      if (e.key === "/" && !escribiendo && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        campo.current?.focus();
      }
    };
    window.addEventListener("keydown", atajo);
    return () => window.removeEventListener("keydown", atajo);
  }, []);

  /* Quien busca «cartel» busca el pliego de condiciones: la norma cambió de
     palabra y el buscador lo sabe. */
  const sinonimo = ficha.sinonimos?.[plano(busca.trim())];
  const aguja = plano((sinonimo?.actual ?? busca).trim());
  const buscandoPalabra = Boolean(busca.trim()) && !/^\d+$/.test(busca.trim());

  const visibles = useMemo(() => {
    if (!aguja) return new Set(indice.filter((f) => f[2] === tituloActivo).map((f) => f[0]));
    if (/^\d+$/.test(aguja)) {
      const exacto = indice.filter((f) => f[0] === aguja);
      const hallados = exacto.length ? exacto : indice.filter((f) => f[0].startsWith(aguja));
      return new Set(hallados.map((f) => f[0]));
    }
    return new Set(
      indice
        .filter((f) => plano(f[1]).includes(aguja) || plano(textos?.[f[0]]?.texto ?? "").includes(aguja))
        .map((f) => f[0]),
    );
  }, [indice, aguja, tituloActivo, textos]);

  /* Los capítulos del título abierto, para saltar dentro de una lista larga. */
  const capitulos = useMemo(() => {
    if (busca) return [];
    const vistos: { i: number; art: string }[] = [];
    indice.forEach((f) => {
      const cap = f[3] ?? -1;
      if (f[2] !== tituloActivo || cap < 0) return;
      if (!vistos.some((v) => v.i === cap)) vistos.push({ i: cap, art: f[0] });
    });
    return vistos.length > 2 && visibles.size > 24 ? vistos : [];
  }, [indice, busca, tituloActivo, visibles.size]);

  const desplazarA = (art: string) => {
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .getElementById(`art-${art}`)
      ?.scrollIntoView({ block: "start", behavior: quieto ? "auto" : "smooth" });
  };

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

  const copiar = async (clave: string, texto: string) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(clave);
      window.setTimeout(() => setCopiado((c) => (c === clave ? null : c)), 2000);
    } catch {
      /* Sin permiso de portapapeles no hay nada que avisar. */
    }
  };

  return (
    <div className="not-prose gc-norma my-12 border-t border-gold/60 pt-8">
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
        <span className="max-w-[54ch] text-[15px] leading-snug text-cream/80">
          artículos. {ficha.version}.
        </span>
      </p>

      {/* El buscador acompaña la lista: en una norma de cientos de artículos,
          perderlo de vista al desplazarse obliga a volver arriba. */}
      <div className="sticky top-16 z-20 -mx-1 mt-7 bg-surface px-1 pt-3 md:top-20">
        <div className="flex items-center gap-3 border-b border-cream/15 pb-2">
          <MagnifyingGlass size={16} aria-hidden="true" className="shrink-0 text-cream/65" />
          <input
            ref={campo}
            type="search"
            value={busca}
            onChange={(e) => {
              setBusca(e.target.value);
              setAbierto(null);
            }}
            onKeyDown={(e) => e.key === "Escape" && setBusca("")}
            placeholder={ficha.etiquetaBusqueda}
            aria-label={`Buscar en ${ficha.nombre} por número de artículo o por palabra`}
            className="w-full bg-transparent py-1.5 text-[15px] text-cream placeholder:text-cream/65 focus:outline-none"
          />
          {busca ? (
            <button
              type="button"
              onClick={() => {
                setBusca("");
                campo.current?.focus();
              }}
              className="shrink-0 text-sm text-burgundy transition-colors hover:text-burgundy-light dark:text-gold dark:hover:text-gold-light"
            >
              Limpiar
            </button>
          ) : (
            <kbd className="hidden shrink-0 rounded-[6px] border border-cream/20 px-1.5 py-0.5 text-[11px] leading-none text-cream/65 sm:block">
              /
            </kbd>
          )}
        </div>
      </div>

      {/* Los títulos de la norma */}
      {!busca && (
        <ul role="list" className="mt-5 flex list-none flex-wrap gap-x-5 gap-y-1.5 pl-0 marker:content-none">
          {titulos.map((t, i) => {
            const on = i === tituloActivo;
            return (
              <li key={t}>
                <button
                  type="button"
                  aria-pressed={on}
                  title={t.replace(/^T[íi]tulo\s+[IVXL]+\s*·\s*/, "")}
                  onClick={() => elegirTitulo(i)}
                  className={`block text-left text-[13px] leading-snug transition-colors duration-300 ${
                    on ? "text-burgundy dark:text-gold" : "text-cream/65 hover:text-burgundy dark:hover:text-gold"
                  }`}
                >
                  {romano(t) && <span className="tabular-nums">{romano(t)} </span>}
                  <span>{tituloCorto(t).toLowerCase()}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {/* Los capítulos del título abierto y la cuenta comparten renglón: son
          la misma información, dónde estoy y cuánto hay. */}
      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-cream/10 pt-3">
        {capitulos.length > 0 ? (
          <nav aria-label="Capítulos de este título" className="min-w-0 flex-1">
            <ul role="list" className="flex list-none flex-wrap gap-x-4 gap-y-1 pl-0 marker:content-none">
              {capitulos.map((c) => (
                <li key={c.i}>
                  <button
                    type="button"
                    onClick={() => desplazarA(c.art)}
                    className="block text-left text-[12.5px] leading-snug text-cream/65 transition-colors duration-300 hover:text-burgundy dark:hover:text-gold"
                  >
                    {grupoCorto(grupos[c.i] ?? "").toLowerCase()}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <span aria-hidden="true" />
        )}
        <p aria-live="polite" className="max-w-[78ch] shrink-0 text-[12.5px] leading-snug text-cream/65">
          {busca
            ? `${visibles.size} ${visibles.size === 1 ? "artículo coincide" : "artículos coinciden"} con «${sinonimo?.actual ?? busca}».`
            : `${visibles.size} artículos`}
          {sinonimo && ` ${sinonimo.nota}`}
          {buscandoPalabra && !textos && !error && " Buscando en el texto…"}
        </p>
      </div>

      <div ref={lista} className="mt-4 scroll-mt-28">

        {/* Nadie se queda con las manos vacías */}
        {visibles.size === 0 && (
          <div className="mt-6 border-y border-cream/10 py-10">
            <p className="max-w-[60ch] text-[15px] leading-relaxed text-cream/80">
              No hay ningún artículo con esa palabra. Pruebe con una forma más corta de la raíz,
              como «subsan» en vez de «subsanación», o escriba el número del artículo.
            </p>
            <p className="mt-4 text-[13px]">
              <button
                type="button"
                onClick={() => {
                  setBusca("");
                  campo.current?.focus();
                }}
                className="text-burgundy underline decoration-burgundy/30 underline-offset-4 transition-colors hover:text-burgundy-light dark:text-gold dark:decoration-gold/30 dark:hover:text-gold-light"
              >
                Ver la norma completa
              </button>
            </p>
          </div>
        )}

        <ol
          role="list"
          className={`mt-3 list-none divide-y divide-cream/10 pl-0 marker:content-none ${
            visibles.size === 0 ? "" : "border-y border-cream/10"
          }`}
        >
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
            const derogado = listaDerogados.has(art) || cuerpo?.derogado;
            const contexto = busca ? grupoCorto(grupos[sec >= 0 ? sec : cap] ?? "") : "";
            const trozo = buscandoPalabra && cuerpo?.texto ? pasaje(cuerpo.texto, aguja) : null;
            return (
              <li key={art} id={`art-${art}`} hidden={oculto} className="scroll-mt-32">
                {nuevoCap && (
                  <p className="max-w-[60ch] pt-6 pb-1 text-[14px] font-medium leading-snug text-cream/80">
                    {grupoCorto(grupos[cap] ?? "")}
                  </p>
                )}
                {nuevaSec && (
                  <p className="max-w-[60ch] pt-3 pb-1 text-[13px] italic leading-snug text-cream/65">
                    {grupoCorto(grupos[sec] ?? "")}
                  </p>
                )}
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => abrir(art)}
                  className="group relative grid w-full grid-cols-[40px_minmax(0,1fr)_auto] items-baseline gap-3 py-3 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:grid-cols-[60px_minmax(0,1fr)_auto] sm:gap-4"
                >
                  {/* El mismo trazo que recorre las filas del equipo y de las áreas */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-px h-px origin-left bg-burgundy transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] dark:bg-gold ${
                      on ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                    }`}
                  />
                  <span className={`text-[15px] tabular-nums ${on ? "text-burgundy dark:text-gold" : "text-cream/65"}`}>
                    {art}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block text-[15px] leading-snug transition-colors duration-300 ${
                        derogado ? "text-cream/65" : on ? "text-burgundy dark:text-gold" : "text-cream group-hover:text-burgundy dark:group-hover:text-gold"
                      }`}
                    >
                      {busca && !/^\d+$/.test(busca.trim()) ? resaltar(rotulo, aguja) : rotulo || `Artículo ${art}`}
                      {derogado && <span className="text-cream/65"> (derogado)</span>}
                    </span>
                    {(votosArt || guia || contexto) && (
                      <span className="mt-0.5 block truncate text-[13px] leading-snug text-cream/65">
                        {votosArt
                          ? `Interpretado en ${votosArt.length === 1 ? "una sentencia" : `${votosArt.length} sentencias`} de esta selección`
                          : guia?.texto}
                        {contexto && (votosArt || guia) && " · "}
                        {contexto}
                      </span>
                    )}
                    {trozo && (
                      <span className="mt-1.5 block max-w-[68ch] text-[13px] leading-relaxed text-cream/65">
                        {trozo}
                      </span>
                    )}
                  </span>
                  <CaretDown
                    size={13}
                    weight="bold"
                    aria-hidden="true"
                    className={`mt-1 shrink-0 transition-transform duration-300 ${on ? "rotate-180 text-burgundy dark:text-gold" : "text-cream/65"}`}
                  />
                </button>

                {on && (
                  <div className="gc-norma-abre pt-4 pb-6 pr-2 sm:pl-[76px]">
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
                      <p className="max-w-[70ch] text-[15px] leading-relaxed text-cream/80">
                        Este artículo fue derogado y no está vigente.
                      </p>
                    ) : cuerpo ? (
                      <p className="gc-norma-texto max-w-[70ch] whitespace-pre-line text-[15px] leading-relaxed text-cream/80">
                        {buscandoPalabra ? resaltar(cuerpo.texto, aguja) : cuerpo.texto}
                      </p>
                    ) : (
                      /* Mientras llega el texto, el hueco tiene la forma de lo que va a llegar */
                      <div aria-label="Cargando el texto del artículo" className="max-w-[70ch] space-y-2.5 py-1">
                        {[100, 96, 88].map((ancho) => (
                          <span
                            key={ancho}
                            className="block h-[11px] animate-pulse rounded-[2px] bg-cream/10"
                            style={{ width: `${ancho}%` }}
                          />
                        ))}
                      </div>
                    )}

                    {cuerpo?.reformas?.length ? (
                      <ul role="list" className="mt-4 list-none space-y-1 pl-0 marker:content-none">
                        {cuerpo.reformas.map((r, n) => (
                          <li key={`${art}-r${n}`} className="max-w-[70ch] text-[13px] leading-snug text-cream/65">
                            {r}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {(cuerpo?.capitulo || cuerpo?.seccion) && (
                      <p className="mt-3 text-[13px] text-cream/65">
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

                    {/* Lo que hace falta para llevarse el artículo a un escrito */}
                    <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
                      <button
                        type="button"
                        disabled={!cuerpo}
                        onClick={() =>
                          copiar(
                            `t-${art}`,
                            `Artículo ${art}${rotulo ? `. ${rotulo}` : ""}\n\n${cuerpo?.texto ?? ""}\n\n${ficha.nombre} (${ficha.identificador})`,
                          )
                        }
                        className="inline-flex items-center gap-1.5 text-cream/65 transition-colors hover:text-burgundy disabled:opacity-40 dark:hover:text-gold"
                      >
                        {copiado === `t-${art}` ? (
                          <Check size={12} weight="bold" aria-hidden="true" />
                        ) : (
                          <Copy size={12} aria-hidden="true" />
                        )}
                        {copiado === `t-${art}` ? "Copiado" : "Copiar el artículo"}
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          copiar(`e-${art}`, `${window.location.origin}${window.location.pathname}#art-${art}`)
                        }
                        className="inline-flex items-center gap-1.5 text-cream/65 transition-colors hover:text-burgundy dark:hover:text-gold"
                      >
                        {copiado === `e-${art}` ? (
                          <Check size={12} weight="bold" aria-hidden="true" />
                        ) : (
                          <Copy size={12} aria-hidden="true" />
                        )}
                        {copiado === `e-${art}` ? "Copiado" : "Copiar el enlace"}
                      </button>
                      <a
                        href={ficha.sinalevi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-cream/65 transition-colors hover:text-burgundy dark:hover:text-gold"
                      >
                        Ver en el SINALEVI
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
