import Image from "next/image";

/* El membrete de los documentos de la oficina, llevado a la web: el sello GC
   a la izquierda y, a su lado, «CORPORACIÓN GC» en DM Sans mayúscula
   espaciada con «ABOGADOS · DERECHO PÚBLICO» debajo, igual que en la hoja
   membretada de los escritos. El nombre puede ir como <h1> cuando el membrete
   encabeza la página. */
export function Membrete({
  as: Heading = "div",
  srSuffix,
  className = "",
}: {
  as?: "h1" | "div";
  /** Texto adicional solo para lectores de pantalla y buscadores. */
  srSuffix?: string;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-4 md:gap-5 ${className}`}>
      <Image
        src="/images/logo-gc.png"
        alt=""
        width={492}
        height={466}
        priority
        className="h-14 w-auto md:h-[76px] dark:brightness-0 dark:invert"
      />
      <div className="text-left">
        <Heading className="font-body text-[22px] font-medium uppercase leading-none tracking-[0.2em] text-cream md:text-[32px]">
          Corporaci&oacute;n GC
          {srSuffix ? <span className="sr-only">{` — ${srSuffix}`}</span> : null}
        </Heading>
        <p className="mt-2.5 text-[10px] uppercase leading-none tracking-[0.34em] text-cream/65 md:mt-3 md:text-[12px]">
          Abogados &middot; Derecho P&uacute;blico
        </p>
      </div>
    </div>
  );
}
