"use client";

/* Calculadora de la guía de umbrales: con el régimen, el objeto y el monto
   estimado, indica el procedimiento que corresponde con los umbrales vigentes
   (lib/umbrales.ts) y el régimen de recursos de la Ley 9986. Es orientativa:
   no reemplaza la estimación del art. 35 ni el análisis de excepciones. */

import { useMemo, useState } from "react";
import { RunningHead } from "@/components/ui/RunningHead";
import { UMBRALES, VIGENTE, colones, type Objeto, type Regimen } from "@/lib/umbrales";

const RESULTADO = {
  mayor: {
    nombre: "Licitación mayor",
    detalle:
      "Invitación abierta y al menos 15 días hábiles para ofertar. El pliego se objeta ante la Contraloría dentro de 8 días hábiles y el acto final se apela ante la Contraloría dentro de 8 días hábiles.",
  },
  menor: {
    nombre: "Licitación menor",
    detalle:
      "Invitación a todos los proveedores del sistema y entre 5 y 15 días hábiles para ofertar. La objeción y la revocatoria las resuelve la propia Administración: 3 días hábiles para objetar y 5 para recurrir el acto final.",
  },
  reducida: {
    nombre: "Licitación reducida",
    detalle:
      "Invitación a un mínimo de tres oferentes y entre 3 y 5 días hábiles para ofertar. La revocatoria contra el acto final se presenta ante la Administración dentro de 2 días hábiles.",
  },
} as const;

function aNumero(texto: string): number {
  const limpio = texto.replace(/[^\d,]/g, "").replace(",", ".");
  const n = Number.parseFloat(limpio);
  return Number.isFinite(n) ? n : 0;
}

export function CalculadoraUmbral() {
  const [regimen, setRegimen] = useState<Regimen>("ordinario");
  const [objeto, setObjeto] = useState<Objeto>("bienesServicios");
  const [monto, setMonto] = useState("");
  const u = UMBRALES[VIGENTE];
  const n = aNumero(monto);

  const tipo = useMemo(() => {
    if (!n) return null;
    const p = u[regimen][objeto];
    if (n >= p.mayor) return "mayor" as const;
    if (n >= p.reducida) return "menor" as const;
    return "reducida" as const;
  }, [n, regimen, objeto, u]);

  const privados = u.privados[objeto];
  const boton = (activo: boolean) =>
    `rounded-lg border px-3 py-2 text-[13.5px] font-medium transition-colors ${
      activo
        ? "border-burgundy bg-burgundy text-white dark:border-[#9B2A5C] dark:bg-[#3A0B1F]"
        : "border-cream/15 text-cream/80 hover:border-cream/35"
    }`;

  return (
    <figure className="gc-fig not-prose" aria-labelledby="fig-calculadora-umbral">
      <header className="gc-fig-head">
        <RunningHead title="Calculadora" locator={`Umbrales ${VIGENTE}`} />
        <p id="fig-calculadora-umbral" className="gc-fig-title">
          ¿Qué procedimiento corresponde a su contratación?
        </p>
        <p className="gc-fig-lead">Elija el régimen y el objeto, y escriba el monto estimado en colones.</p>
      </header>

      <div className="mt-5 flex flex-col gap-4">
        <div role="group" aria-label="Régimen" className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={regimen === "ordinario"} className={boton(regimen === "ordinario")} onClick={() => setRegimen("ordinario")}>
            Régimen ordinario
          </button>
          <button type="button" aria-pressed={regimen === "diferenciado"} className={boton(regimen === "diferenciado")} onClick={() => setRegimen("diferenciado")}>
            Régimen diferenciado
          </button>
        </div>
        <div role="group" aria-label="Objeto" className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={objeto === "bienesServicios"} className={boton(objeto === "bienesServicios")} onClick={() => setObjeto("bienesServicios")}>
            Bienes y servicios
          </button>
          <button type="button" aria-pressed={objeto === "obras"} className={boton(objeto === "obras")} onClick={() => setObjeto("obras")}>
            Obra pública
          </button>
        </div>
        <label className="flex items-center gap-3 border-b border-cream/15 pb-2">
          <span className="shrink-0 text-[15px] text-cream/65">¢</span>
          <input
            inputMode="decimal"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            placeholder="Monto estimado, por ejemplo 150.000.000"
            aria-label="Monto estimado de la contratación en colones"
            className="w-full bg-transparent py-1.5 text-[16px] text-cream placeholder:text-cream/55 focus:outline-none"
          />
        </label>
      </div>

      <div aria-live="polite" className="mt-5 min-h-[96px]">
        {tipo ? (
          <div className="border-l-0">
            <p className="text-[19px] font-semibold tracking-tight text-burgundy dark:text-cream">{RESULTADO[tipo].nombre}</p>
            <p className="mt-1 text-[14.5px] leading-relaxed text-cream/80">{RESULTADO[tipo].detalle}</p>
            <p className="mt-3 text-[13px] leading-relaxed text-cream/65">
              Monto considerado: {colones(n)}. Un sujeto privado que administre fondos públicos aplicaría la ley a este monto{" "}
              {n > privados ? "porque supera" : "solo si superara"} {colones(privados, true)}.
            </p>
          </div>
        ) : (
          <p className="text-[14.5px] text-cream/65">El resultado aparece al escribir un monto.</p>
        )}
      </div>

      <p className="gc-fig-source">
        <span>Fuente:</span> resolución {u.resolucion} de la Contraloría y Ley 9986, arts. 1, 36, 56, 61, 63, 95, 97 y 99. Es orientativa: el monto que cuenta es la estimación del artículo 35, y hay procedimientos y entidades con reglas propias.
      </p>
    </figure>
  );
}
