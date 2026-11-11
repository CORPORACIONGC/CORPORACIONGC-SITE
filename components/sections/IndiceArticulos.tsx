"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Article, FilePdf, MagnifyingGlass, User, X } from "@phosphor-icons/react";

export type PiezaIndice = {
  slug: string;
  title: string;
  excerpt: string;
  esPdf: boolean;
  rotulo?: string;
  fecha: string;
  author?: string;
  institution?: string;
  minutos?: number;
  tags: string[];
};

export type SeccionIndice = {
  id: string;
  titulo: string;
  areaHref?: string;
  lang?: "en";
  piezas: PiezaIndice[];
};

/** Sin tildes y en minúsculas, para que «casacion» encuentre «casación». */
const plano = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

function Tarjeta({ pieza }: { pieza: PiezaIndice }) {
  return (
    /* El enlace es el título; su ::after cubre la pieza entera. En el
       teléfono es una fila entre filetes; desde 768 px, una tarjeta. */
    <div className="gc-tarjeta group block border-b border-cream/10 py-5 md:rounded-xl md:border md:border-cream/[0.08] md:bg-cream/[0.02] md:p-6">
      <div className="mb-3 flex items-center gap-2 md:mb-4">
        <div
          className={`rounded-md p-1.5 transition-colors duration-300 group-hover:bg-burgundy group-hover:text-white ${
            pieza.esPdf ? "bg-burgundy/[0.08] text-burgundy" : "bg-emphasis/[0.15] text-emphasis"
          }`}
        >
          {pieza.esPdf ? <FilePdf size={14} weight="duotone" /> : <Article size={14} weight="duotone" />}
        </div>
        {pieza.rotulo && (
          <span className="text-[11px] font-medium uppercase tracking-wider text-cream/65">{pieza.rotulo}</span>
        )}
        <span className="ml-auto text-xs tabular-nums text-cream/65">{pieza.fecha}</span>
      </div>

      <h3 className="font-display text-lg font-semibold tracking-tight text-cream transition-colors duration-300 group-hover:text-emphasis">
        <Link href={`/articulos/${pieza.slug}`} className="after:absolute after:inset-0 after:content-['']">
          {pieza.title}
        </Link>
      </h3>

      {(pieza.author || pieza.minutos) && (
        <div className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-cream/65">
          {pieza.author && (
            <>
              <User size={12} weight="regular" aria-hidden="true" />
              <span>{pieza.author}</span>
            </>
          )}
          {pieza.author && pieza.institution && pieza.institution !== pieza.author && pieza.institution !== "Corporación GC" && (
            <span>· {pieza.institution}</span>
          )}
          {pieza.minutos ? <span>{pieza.author ? "· " : ""}{pieza.minutos} min</span> : null}
        </div>
      )}

      <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-cream/70 md:line-clamp-3">{pieza.excerpt}</p>
    </div>
  );
}

/* El índice de guías y publicaciones, con buscador. Sin texto en el campo
   muestra las secciones por materia; al escribir, una sola lista con lo que
   coincide en título, resumen, autor o tema. */
export function IndiceArticulos({
  masConsultadas,
  secciones,
}: {
  masConsultadas: { slug: string; title: string }[];
  secciones: SeccionIndice[];
}) {
  const [busca, setBusca] = useState("");

  const corpus = useMemo(
    () =>
      secciones.flatMap((sec) =>
        sec.piezas.map((p) => ({
          pieza: p,
          texto: plano([p.title, p.excerpt, p.author ?? "", p.rotulo ?? "", p.tags.join(" "), sec.titulo].join(" ")),
        })),
      ),
    [secciones],
  );

  const terminos = plano(busca).split(/\s+/).filter(Boolean);
  const buscando = terminos.length > 0;
  const hallados = buscando
    ? corpus.filter((c) => terminos.every((t) => c.texto.includes(t))).map((c) => c.pieza)
    : [];

  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-32">
      <div className="sticky top-16 z-20 -mx-1 bg-surface px-1 pt-3 md:top-20">
        <div className="flex items-center gap-3 border-b border-cream/20 pb-2">
          <MagnifyingGlass size={18} aria-hidden="true" className="shrink-0 text-cream/65" />
          <input
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            onKeyDown={(e) => e.key === "Escape" && setBusca("")}
            placeholder="Buscar por tema, norma o autor"
            aria-label="Buscar en las guías y publicaciones"
            className="w-full bg-transparent py-2 text-base text-cream placeholder:text-cream/65 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          {busca && (
            <button
              type="button"
              onClick={() => setBusca("")}
              aria-label="Borrar la búsqueda"
              className="-mr-2 flex h-11 w-11 shrink-0 items-center justify-center text-cream/65 transition-colors hover:text-cream"
            >
              <X size={16} weight="bold" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      <p aria-live="polite" className={buscando ? "mt-5 text-sm text-cream/75" : "sr-only"}>
        {buscando
          ? hallados.length === 0
            ? `Ninguna publicación coincide con «${busca.trim()}».`
            : `${hallados.length} ${hallados.length === 1 ? "publicación" : "publicaciones"} para «${busca.trim()}»`
          : ""}
      </p>

      {buscando ? (
        hallados.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 md:mt-6 md:grid-cols-2 md:gap-4">
            {hallados.map((p) => (
              <Tarjeta key={p.slug} pieza={p} />
            ))}
          </div>
        ) : (
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
        )
      ) : (
        <div className="mt-8 space-y-16 md:space-y-20">
          <nav aria-label="Materias" className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            {secciones.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                lang={sec.lang}
                className="py-2 text-cream/75 underline decoration-cream/25 underline-offset-4 transition-colors duration-300 hover:text-emphasis hover:decoration-current"
              >
                {sec.titulo}
              </a>
            ))}
          </nav>

          {/* Las más consultadas: se revisa cada mes contra Search Console,
              igual que las guías del pie (lib/constants.ts). */}
          {masConsultadas.length > 0 && (
            <section aria-labelledby="mas-consultadas">
              <h2 id="mas-consultadas" className="mb-6 font-display text-xl tracking-tight text-cream md:text-2xl">
                Guías más consultadas
              </h2>
              <ol role="list" className="grid grid-cols-1 gap-x-8 border-t border-cream/10 md:grid-cols-2 lg:grid-cols-3">
                {masConsultadas.map((a, i) => (
                  <li key={a.slug} className="border-b border-cream/10">
                    <Link href={`/articulos/${a.slug}`} className="group flex items-baseline gap-4 py-4">
                      <span className="w-6 shrink-0 text-sm tabular-nums text-cream/65">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[15px] leading-snug text-cream/85 transition-colors duration-300 group-hover:text-emphasis">
                        {a.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {secciones.map((sec) => (
            <section key={sec.id} aria-labelledby={sec.id} lang={sec.lang}>
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 md:mb-6">
                <h2 id={sec.id} className="scroll-mt-40 font-display text-xl tracking-tight text-cream md:text-2xl">
                  {sec.titulo}
                </h2>
                {sec.areaHref && (
                  <Link
                    href={sec.areaHref}
                    className="py-2 text-sm text-cream/70 transition-colors duration-300 hover:text-emphasis"
                  >
                    Ver el área →
                  </Link>
                )}
              </div>
              <div className="grid grid-cols-1 border-t border-cream/10 md:grid-cols-2 md:gap-4 md:border-t-0">
                {sec.piezas.map((p) => (
                  <Tarjeta key={p.slug} pieza={p} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
