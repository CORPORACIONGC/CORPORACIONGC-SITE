import { MapPin, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { FIRM_CONTACT } from "@/lib/constants";

/* Mapa de la oficina (25-11-2026): el mapa se ve siempre, cargado en
   diferido (`loading="lazy"`), y debajo lleva una franja con el lugar y el
   botón «Abrir en Google Maps», que abre la ubicación en otra pestaña (o en
   la aplicación, en el teléfono) para pedir indicaciones. */

const CONSULTA = "Ofident, Barrio Dent, Montes de Oca, San José, Costa Rica";
const ENLACE_MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONSULTA)}`;

export function GoogleMap() {
  return (
    <div className="rounded-xl overflow-hidden border border-cream/[0.08] shadow-[0_4px_20px_-6px_rgba(0,0,0,0.08)]">
      <iframe
        src={FIRM_CONTACT.mapsEmbed}
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de Corporación GC — Barrio Dent, San José"
        className="block w-full h-[280px] md:h-[350px] grayscale-[0.3] contrast-[1.05]"
      />
      <div className="flex flex-col gap-4 border-t border-cream/[0.08] bg-cream/[0.03] px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
        <p className="flex items-center gap-2.5 text-sm text-cream/80">
          <MapPin size={18} weight="duotone" className="shrink-0 text-burgundy dark:text-hilo-texto" aria-hidden="true" />
          Edificio Ofident, Barrio Dent, San Pedro de Montes de Oca
        </p>
        <a
          href={ENLACE_MAPS}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-burgundy px-5 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-burgundy-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy dark:focus-visible:outline-hilo-texto"
        >
          Abrir en Google Maps
          <ArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only"> (se abre en otra pestaña)</span>
        </a>
      </div>
    </div>
  );
}
