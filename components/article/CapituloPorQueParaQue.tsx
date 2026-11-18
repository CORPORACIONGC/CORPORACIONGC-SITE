/* Lectura de fondo de la guía «Qué es el contencioso administrativo»: el
   capítulo que el Dr. González Camacho publicó en la obra colectiva de
   Tirant lo Blanch por los veinte años del CPCA (2026). La página fue antes
   una ficha de ese capítulo; la guía lo conserva completo y los enlaces del
   sitio que decían «Leer capítulo» llegan a este bloque por el ancla
   #capitulo. Se presenta como una portada (la primera página del ensayo)
   con su referencia y dos acciones, en lugar del visor del navegador, que
   cargaba el PDF entero con su barra y sus miniaturas. */

import { ArrowSquareOut, DownloadSimple } from "@phosphor-icons/react/dist/ssr";

const PDF = "/pdfs/por-que-y-para-que-contencioso-administrativo.pdf";
const PORTADA = "/pdfs/por-que-y-para-que-contencioso-administrativo-p1.webp";
const TIRANT =
  "https://editorial.tirant.com/cr/libro/cpca-20-anos-despues-perspectivas-criticas-sobre-la-justicia-administrativa-alex-rojas-ortega-9791370214753";

const boton =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium no-underline! transition-colors duration-300 active:scale-[0.98]";

export function CapituloPorQueParaQue() {
  return (
    <section
      id="capitulo"
      aria-labelledby="capitulo-titulo"
      className="not-prose my-12 scroll-mt-32 border-y border-cream/[0.12] py-8"
    >
      <div className="grid gap-8 sm:grid-cols-[minmax(0,200px)_1fr] sm:items-start">
        <a
          href={PDF}
          target="_blank"
          rel="noopener noreferrer"
          className="group block w-full max-w-[200px] overflow-hidden border border-cream/[0.12] bg-white shadow-[0_6px_24px_-12px_rgba(28,28,30,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
          aria-label="Abrir el capítulo en PDF"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PORTADA}
            alt="Primera página del capítulo «El por qué y para qué del contencioso administrativo»"
            width={935}
            height={750}
            loading="lazy"
            className="block h-auto w-full"
          />
        </a>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cream/60">Capítulo · 32 páginas · PDF</p>
          <p id="capitulo-titulo" className="mt-2 font-display text-xl leading-snug tracking-tight text-cream md:text-2xl">
            El por qué y para qué del contencioso administrativo
          </p>
          <p className="mt-1 text-sm text-cream/75">Óscar Eduardo González Camacho</p>
          <p className="mt-4 text-[13px] leading-relaxed text-cream/65">
            En <em>CPCA, 20 años después: perspectivas críticas sobre la justicia administrativa</em>, dirigida por Alex
            Rojas Ortega (San José: Tirant lo Blanch, Colección Monografías Maior, 2026). ISBN 9791370214753. Presentado en
            la Mesa II de <em>«CPCA 20 años: balance, transformaciones y desafíos de la justicia administrativa»</em>, Colegio de
            Abogados y Abogadas de Costa Rica, 25 de marzo de 2026.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className={`${boton} border-2 border-burgundy/50 text-burgundy! hover:border-burgundy hover:bg-burgundy/[0.05] dark:border-[#5A1730] dark:bg-[#3A0B1F] dark:text-white! dark:hover:border-[#6B1D3A]`}
            >
              <ArrowSquareOut size={16} weight="regular" aria-hidden="true" />
              Leer el capítulo
            </a>
            <a href={PDF} download className={`${boton} border border-cream/[0.15] text-cream/75! hover:border-cream/30 hover:text-cream!`}>
              <DownloadSimple size={16} weight="regular" aria-hidden="true" />
              Descargar
            </a>
            <a
              href={TIRANT}
              target="_blank"
              rel="noopener noreferrer"
              className={`${boton} px-1 text-cream/65! underline! decoration-cream/25 underline-offset-4 hover:text-cream!`}
            >
              La obra en Tirant lo Blanch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
