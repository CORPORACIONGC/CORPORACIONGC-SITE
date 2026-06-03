import { FIRM_CONTACT } from "@/lib/constants";

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
        className="w-full h-[280px] md:h-[350px] grayscale-[0.3] contrast-[1.05]"
      />
    </div>
  );
}
