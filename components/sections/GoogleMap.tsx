"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, ArrowUpRight, MapTrifold } from "@phosphor-icons/react";
import { FIRM_CONTACT } from "@/lib/constants";

/* Mapa de la oficina con fachada (25-11-2026). El `iframe` de Google Maps
   pesaba 470 KB y ocupaba 600 ms del hilo principal en el teléfono aunque
   nadie lo mirara, y al recorrer la página con el teclado capturaba nueve
   pulsaciones de Tab sin foco visible. Ahora la página muestra la dirección
   con dos salidas: abrir el lugar en Google Maps, en otra pestaña, o cargar
   el mapa aquí mismo. Solo en ese segundo caso se pide algo a Google. */

const CONSULTA = "Ofident, Barrio Dent, Montes de Oca, San José, Costa Rica";
const ENLACE_MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONSULTA)}`;
const TITULO = "Ubicación de Corporación GC — Barrio Dent, San José";

export function GoogleMap() {
  const [cargado, setCargado] = useState(false);
  const mapa = useRef<HTMLIFrameElement>(null);

  /* Quien pidió el mapa con el teclado sigue en el mismo lugar: el foco pasa
     al mapa en vez de perderse al desaparecer el botón. */
  useEffect(() => {
    if (cargado) mapa.current?.focus();
  }, [cargado]);

  return (
    <div className="rounded-xl overflow-hidden border border-cream/[0.08] shadow-[0_4px_20px_-6px_rgba(0,0,0,0.08)]">
      {cargado ? (
        <iframe
          ref={mapa}
          src={FIRM_CONTACT.mapsEmbed}
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title={TITULO}
          className="w-full h-[280px] md:h-[350px] grayscale-[0.3] contrast-[1.05] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-burgundy dark:focus-visible:outline-hilo-texto"
        />
      ) : (
        <div className="relative flex min-h-[280px] md:min-h-[350px] flex-col justify-between gap-8 bg-cream/[0.03] p-6 md:p-10">
          {/* Retícula tenue: indica «mapa» sin dibujar calles que no son. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,color-mix(in_oklab,var(--color-cream)_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--color-cream)_6%,transparent)_1px,transparent_1px)] [background-size:44px_44px]"
          />
          <div className="relative flex items-start gap-4">
            <MapPin size={22} weight="duotone" className="mt-0.5 shrink-0 text-burgundy dark:text-hilo-texto" aria-hidden="true" />
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cream/65">Dónde estamos</p>
              <p className="mt-2 max-w-[52ch] text-base leading-relaxed text-cream md:text-lg">{FIRM_CONTACT.location}</p>
            </div>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <a
              href={ENLACE_MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-burgundy px-5 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-burgundy-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy dark:focus-visible:outline-hilo-texto"
            >
              Abrir en Google Maps
              <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only"> (se abre en otra pestaña)</span>
            </a>
            <button
              type="button"
              onClick={() => setCargado(true)}
              className="inline-flex items-center gap-2 rounded-lg border border-cream/20 px-5 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:border-cream/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy dark:focus-visible:outline-hilo-texto"
            >
              <MapTrifold size={16} aria-hidden="true" />
              Ver el mapa aquí
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
