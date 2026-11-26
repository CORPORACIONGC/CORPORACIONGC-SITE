"use client";

import { useState } from "react";
import { Pause, Play } from "@phosphor-icons/react";

/* Pausa de la cinta de clientes (WCAG 2.2.2, B6 del informe 23-11). La cinta
   ya se detenía al pasar el cursor o al recibir el foco, y con movimiento
   reducido no se mueve; faltaba poder detenerla con el teclado o con el dedo
   y que quedara detenida. El botón va fuera de la máscara que desvanece los
   bordes, para que no se pierda en ella. Con movimiento reducido se oculta,
   porque no hay nada que pausar. */
export function PausaCinta({ className, children }: { className: string; children: React.ReactNode }) {
  const [pausada, setPausada] = useState(false);
  return (
    <>
      <div className={className} data-pausada={pausada}>
        {children}
      </div>
      <div className="mx-auto mt-6 flex max-w-[1400px] justify-end px-6 md:px-10 motion-reduce:hidden">
        <button
          type="button"
          onClick={() => setPausada((p) => !p)}
          className="inline-flex min-h-6 items-center gap-1.5 rounded-md px-2 py-1 text-[12px] font-medium tracking-wide text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {pausada ? <Play size={14} weight="fill" aria-hidden="true" /> : <Pause size={14} weight="fill" aria-hidden="true" />}
          {pausada ? "Reanudar la cinta" : "Pausar la cinta"}
        </button>
      </div>
    </>
  );
}
