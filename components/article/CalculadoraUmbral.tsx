"use client";

/* Calculadora de la guía de umbrales: con el régimen, el objeto y el monto
   estimado, indica el procedimiento que corresponde con los umbrales vigentes
   (lib/umbrales.ts) y el régimen de recursos de la Ley 9986. Es orientativa:
   no reemplaza la estimación del art. 35 ni el análisis de excepciones. */

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { RunningHead } from "@/components/ui/RunningHead";
import { UMBRALES, VIGENTE, NOMBRE_OBJETO, NOMBRE_REGIMEN, colones, type Objeto, type Regimen } from "@/lib/umbrales";
import { FIRM_CONTACT } from "@/lib/constants";
import { trackContactFromHref } from "@/lib/analytics";
import { WhatsappLogo } from "@phosphor-icons/react";

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

/* Lectura del monto. El punto separa miles, como en las resoluciones de la
   Contraloría. La coma o el punto valen como decimal solo si les siguen una o
   dos cifras al final; tres cifras tras un separador son siempre miles. Una
   entrada con letras o con una agrupación que no cuadra no da resultado. */
type Lectura = { estado: "vacio" } | { estado: "invalido" } | { estado: "ok"; valor: number };

const soloDigitos = (t: string) => t.replace(/\D/g, "");
const agrupar = (d: string) => (d.replace(/^0+(?=\d)/, "") || "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const limpiar = (t: string) => t.replace(/[\s¢₡]/g, "");

/* Devuelve las cifras de la parte entera si es un número sin separadores o
   agrupado de tres en tres con un único separador; si no, null. */
function enteroValido(e: string): string | null {
  if (/^\d+$/.test(e)) return e;
  if (/^\d{1,3}(\.\d{3})+$/.test(e) || /^\d{1,3}(,\d{3})+$/.test(e)) return soloDigitos(e);
  return null;
}

function leerMonto(texto: string): Lectura {
  const t = limpiar(texto);
  if (!t) return { estado: "vacio" };
  if (/[^\d.,]/.test(t)) return { estado: "invalido" };
  const cuerpo = t.replace(/[.,]$/, ""); // separador final: todavía se está escribiendo
  if (!cuerpo) return { estado: "vacio" };
  const m = cuerpo.match(/^(.*?)[.,](\d{1,2})$/);
  const entero = enteroValido(m ? m[1] || "0" : cuerpo);
  if (entero === null) return { estado: "invalido" };
  const valor = Number(entero + (m ? "." + m[2] : ""));
  return valor > 0 ? { estado: "ok", valor } : { estado: "vacio" };
}

/* Formato mientras se escribe: agrupa los miles con punto y, si hay decimales
   tras una parte entera de cuatro cifras o más, los separa con coma. Lo que no
   se puede leer se deja como se escribió, para no adivinar. */
function formatearAlEscribir(raw: string): string {
  const t = limpiar(raw);
  if (!t) return "";
  if (/[^\d.,]/.test(t)) return raw;
  if (/[.,]$/.test(t)) {
    const d = enteroValido(t.slice(0, -1));
    return d === null ? raw : agrupar(d) + t.slice(-1);
  }
  const m = t.match(/^(.*?)([.,])(\d{1,2})$/);
  if (m) {
    const d = m[1] === "" ? "0" : enteroValido(m[1]);
    if (d === null) return raw;
    const sep = m[2] === "." && d.length >= 4 ? "," : m[2];
    return agrupar(d) + sep + m[3];
  }
  return agrupar(soloDigitos(t));
}

/* Formato al borrar: si el valor anterior no tenía decimales, todos sus
   puntos eran de miles y se reagrupan las cifras que quedan. */
function formatearAlBorrar(raw: string, previo: string): string {
  if (/[^\d.,\s¢₡]/.test(raw)) return raw;
  const p = limpiar(previo).replace(/[.,]$/, "");
  const conDecimales = /[.,]\d{1,2}$/.test(p) && leerMonto(previo).estado === "ok";
  if (!conDecimales) return agrupar(soloDigitos(raw));
  const sep = p[p.search(/[.,]\d{1,2}$/)];
  const i = raw.lastIndexOf(sep);
  if (i === -1) return agrupar(soloDigitos(raw));
  return agrupar(soloDigitos(raw.slice(0, i)) || "0") + sep + soloDigitos(raw.slice(i + 1));
}

/* Posición del cursor después de reformatear: tras la misma cantidad de
   cifras que tenía delante, y tras el separador si el usuario acaba de
   escribir uno. */
function cursorTras(nuevo: string, cifras: number, trasSeparador: boolean): number {
  let pos = 0;
  let vistas = 0;
  while (pos < nuevo.length && vistas < cifras) {
    if (/\d/.test(nuevo[pos])) vistas++;
    pos++;
  }
  if (trasSeparador && /[.,]/.test(nuevo[pos] ?? "")) pos++;
  return pos;
}

export function CalculadoraUmbral() {
  const [regimen, setRegimen] = useState<Regimen>("ordinario");
  const [objeto, setObjeto] = useState<Objeto>("bienesServicios");
  const [monto, setMonto] = useState("");
  const campo = useRef<HTMLInputElement>(null);
  const cursor = useRef<number | null>(null);
  const u = UMBRALES[VIGENTE];
  const lectura = leerMonto(monto);
  const n = lectura.estado === "ok" ? lectura.valor : 0;

  useLayoutEffect(() => {
    const el = campo.current;
    if (cursor.current !== null && el && document.activeElement === el) {
      el.setSelectionRange(cursor.current, cursor.current);
    }
    cursor.current = null;
  }, [monto]);

  function alCambiar(e: React.ChangeEvent<HTMLInputElement>) {
    let raw = e.target.value;
    let pos = e.target.selectionStart ?? raw.length;
    const tipoEntrada = (e.nativeEvent as InputEvent).inputType ?? "";
    const borrado = tipoEntrada.startsWith("delete");
    /* Borrar un punto de miles no cambia nada al reagrupar: se borra la cifra
       contigua, que es lo que se pretendía. */
    if (borrado && soloDigitos(raw) === soloDigitos(monto) && monto[pos] === ".") {
      if (tipoEntrada === "deleteContentBackward" && pos > 0) {
        raw = raw.slice(0, pos - 1) + raw.slice(pos);
        pos -= 1;
      } else if (tipoEntrada === "deleteContentForward") {
        raw = raw.slice(0, pos) + raw.slice(pos + 1);
      }
    }
    const nuevo = borrado ? formatearAlBorrar(raw, monto) : formatearAlEscribir(raw);
    cursor.current =
      nuevo === raw ? pos : cursorTras(nuevo, soloDigitos(raw.slice(0, pos)).length, /[.,]/.test(raw[pos - 1] ?? ""));
    setMonto(nuevo);
  }

  const tipo = useMemo(() => {
    if (!n) return null;
    const p = u[regimen][objeto];
    if (n >= p.mayor) return "mayor" as const;
    if (n >= p.reducida) return "menor" as const;
    return "reducida" as const;
  }, [n, regimen, objeto, u]);

  const montoTexto = colones(n, n % 1 !== 0);
  const whatsapp = tipo
    ? `https://wa.me/${FIRM_CONTACT.phoneRaw}?text=${encodeURIComponent(
        `Hola, usé la calculadora de umbrales de contratación pública de Corporación GC. ${NOMBRE_REGIMEN[regimen]}, ${NOMBRE_OBJETO[objeto].toLowerCase()}, monto estimado ${montoTexto}: corresponde una ${RESULTADO[tipo].nombre.toLowerCase()}. Quisiera consultar sobre ofertar o impugnar este procedimiento.`
      )}`
    : "";

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
            ref={campo}
            inputMode="decimal"
            autoComplete="off"
            maxLength={24}
            value={monto}
            onChange={alCambiar}
            aria-invalid={lectura.estado === "invalido"}
            aria-describedby="calculadora-umbral-resultado"
            placeholder="Monto estimado, por ejemplo 150.000.000"
            aria-label="Monto estimado de la contratación en colones"
            className="w-full bg-transparent py-1.5 text-[16px] tabular-nums text-cream placeholder:text-cream/55 focus:outline-none"
          />
        </label>
      </div>

      <div id="calculadora-umbral-resultado" aria-live="polite" className="mt-5 min-h-[96px]">
        {tipo ? (
          <div>
            <p className="text-[15px] font-semibold tabular-nums text-cream">Monto considerado: {montoTexto}</p>
            <p className="mt-2 text-[19px] font-semibold tracking-tight text-burgundy dark:text-cream">{RESULTADO[tipo].nombre}</p>
            <p className="mt-1 text-[14.5px] leading-relaxed text-cream/80">{RESULTADO[tipo].detalle}</p>
            <p className="mt-3 text-[13px] leading-relaxed text-cream/65">
              Un sujeto privado que administre fondos públicos aplicaría la ley a este monto{" "}
              {n > privados ? "porque supera" : "solo si superara"} {colones(privados, true)}.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-cream/15 pt-3">
              <p className="text-[14px] text-cream/80">¿Va a ofertar o a impugnar este procedimiento?</p>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactFromHref(whatsapp, "calculadora-umbral")}
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-burgundy underline decoration-burgundy/35 underline-offset-4 hover:decoration-burgundy dark:text-cream dark:decoration-cream/35"
              >
                <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        ) : lectura.estado === "invalido" ? (
          <p className="text-[14.5px] text-cream">Escriba el monto en colones, por ejemplo 150.000.000</p>
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
