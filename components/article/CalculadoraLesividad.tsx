"use client";

/* Calculadora de plazos de la guía «Proceso de lesividad en Costa Rica».
   Aplica los artículos 34 y 39 del CPCA con el cómputo de fecha a fecha que
   fijó el Tribunal de Casación Contencioso-Administrativo (181-F-TC-2024: el
   año arranca el día siguiente y vence en la misma fecha del año siguiente) y
   la prórroga al día hábil siguiente cuando el vencimiento cae en sábado o
   domingo (167-F-TC-2022). Los feriados no se calculan. */

import { useMemo, useState } from "react";
import { RunningHead } from "@/components/ui/RunningHead";

type Vicio = "relativa" | "absoluta";

const DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "setiembre", "octubre", "noviembre", "diciembre"];

function leer(valor: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(valor);
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return Number.isNaN(d.getTime()) ? null : d;
}

function masDias(d: Date, n: number) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
}

/* De fecha a fecha: el mismo día y mes del año siguiente; un 29 de febrero
   cae en el último día de febrero. */
function masUnAno(d: Date) {
  const r = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate());
  return r.getMonth() === d.getMonth() ? r : new Date(d.getFullYear() + 1, d.getMonth() + 1, 0);
}

function habil(d: Date) {
  const dia = d.getDay();
  return dia === 6 ? masDias(d, 2) : dia === 0 ? masDias(d, 1) : d;
}

function fmt(d: Date) {
  return `${DIAS[d.getDay()]} ${d.getDate()} de ${MESES[d.getMonth()]} de ${d.getFullYear()}`;
}

type Plazo = { inicio: Date; vence: Date; prorrogado: boolean };

function plazoAnual(desde: Date): Plazo {
  const inicio = masDias(desde, 1);
  const bruto = masUnAno(inicio);
  const vence = habil(bruto);
  return { inicio, vence, prorrogado: vence.getTime() !== bruto.getTime() };
}

function hoy() {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}

function Estado({ vence }: { vence: Date }) {
  const enPlazo = hoy().getTime() <= vence.getTime();
  return (
    <span className={enPlazo ? "gc-calc-estado gc-calc-estado--ok" : "gc-calc-estado"}>
      {enPlazo ? "Hoy todavía está en plazo" : "Hoy el plazo ya venció"}
    </span>
  );
}

function Campo({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="gc-calc-campo">
      <label htmlFor={id} className="gc-fig-label">
        {label}
      </label>
      {children}
    </div>
  );
}

export function CalculadoraLesividad() {
  const [acto, setActo] = useState("");
  const [vicio, setVicio] = useState<Vicio>("relativa");
  const [efectos, setEfectos] = useState<"siguen" | "cesaron">("siguen");
  const [cese, setCese] = useState("");
  const [dominio, setDominio] = useState(false);
  const [firmeza, setFirmeza] = useState("");

  const dActo = leer(acto);
  const dCese = leer(cese);
  const dFirmeza = leer(firmeza);

  const ordinario = useMemo(() => (dActo ? plazoAnual(dActo) : null), [dActo]);
  const trasCese = useMemo(() => (dCese ? plazoAnual(dCese) : null), [dCese]);
  const demanda = useMemo(() => (dFirmeza ? plazoAnual(dFirmeza) : null), [dFirmeza]);

  return (
    <figure className="gc-fig gc-calc" aria-labelledby="fig-calc-lesividad">
      <header className="gc-fig-head">
        <RunningHead title="Calculadora" locator="Herramienta" />
        <p id="fig-calc-lesividad" className="gc-fig-title">
          ¿Está la Administración en plazo para la lesividad?
        </p>
        <p className="gc-fig-lead">
          Con la fecha del acto y la de firmeza de la declaratoria, la calculadora aplica los plazos de los artículos 34 y 39
          del Código Procesal Contencioso-Administrativo.
        </p>
      </header>

      <div className="gc-calc-form">
        <Campo id="calc-acto" label="1 · Fecha en que se dictó el acto">
          <input id="calc-acto" type="date" value={acto} onChange={(e) => setActo(e.target.value)} />
        </Campo>

        <fieldset className="gc-calc-campo">
          <legend className="gc-fig-label">2 · Vicio que se le atribuye</legend>
          <div className="gc-calc-opciones">
            <label>
              <input type="radio" name="calc-vicio" checked={vicio === "relativa"} onChange={() => setVicio("relativa")} />
              Nulidad relativa
            </label>
            <label>
              <input type="radio" name="calc-vicio" checked={vicio === "absoluta"} onChange={() => setVicio("absoluta")} />
              Nulidad absoluta
            </label>
          </div>
        </fieldset>

        {vicio === "absoluta" && (
          <fieldset className="gc-calc-campo">
            <legend className="gc-fig-label">3 · Efectos del acto</legend>
            <div className="gc-calc-opciones">
              <label>
                <input type="radio" name="calc-efectos" checked={efectos === "siguen"} onChange={() => setEfectos("siguen")} />
                Siguen produciéndose
              </label>
              <label>
                <input type="radio" name="calc-efectos" checked={efectos === "cesaron"} onChange={() => setEfectos("cesaron")} />
                Ya cesaron
              </label>
            </div>
            {efectos === "cesaron" && (
              <div className="gc-calc-sub">
                <label htmlFor="calc-cese" className="gc-fig-label">
                  Fecha en que cesaron
                </label>
                <input id="calc-cese" type="date" value={cese} onChange={(e) => setCese(e.target.value)} />
              </div>
            )}
          </fieldset>
        )}

        <div className="gc-calc-campo">
          <label className="gc-calc-check">
            <input type="checkbox" checked={dominio} onChange={(e) => setDominio(e.target.checked)} />
            La lesividad busca tutelar bienes del dominio público
          </label>
        </div>

        <Campo id="calc-firmeza" label="Fecha de firmeza de la declaratoria de lesividad (si ya existe)">
          <input id="calc-firmeza" type="date" value={firmeza} onChange={(e) => setFirmeza(e.target.value)} />
        </Campo>
      </div>

      <div className="gc-calc-resultado" aria-live="polite">
        <section>
          <span className="gc-fig-num">01</span>
          <p className="gc-calc-paso">Declarar la lesividad</p>
          {dominio ? (
            <p>
              <strong className="gc-fig-plazo">Sin plazo.</strong> La lesividad referente a la tutela de bienes del dominio
              público no está sujeta a plazo. <span className="gc-fig-ref">CPCA, art. 34.2</span>
            </p>
          ) : !ordinario ? (
            <p className="gc-calc-vacio">Indique la fecha en que se dictó el acto.</p>
          ) : (
            <>
              <p>
                Plazo ordinario: un año, del <strong>{fmt(ordinario.inicio)}</strong> al{" "}
                <strong className="gc-fig-plazo">{fmt(ordinario.vence)}</strong>
                {ordinario.prorrogado ? " (el vencimiento cae en fin de semana y pasa al lunes)" : ""}.{" "}
                <Estado vence={ordinario.vence} />
                <span className="gc-fig-ref">CPCA, art. 34.1</span>
              </p>
              {vicio === "absoluta" && (
                <p>
                  Vencido ese año, la nulidad absoluta permite declararla{" "}
                  {efectos === "siguen" ? (
                    <strong>mientras perduren sus efectos</strong>
                  ) : trasCese ? (
                    <>
                      hasta el <strong className="gc-fig-plazo">{fmt(trasCese.vence)}</strong>, un año después del cese{" "}
                      <Estado vence={trasCese.vence} />
                    </>
                  ) : (
                    <>dentro del año siguiente al cese de sus efectos (indique la fecha)</>
                  )}
                  , pero entonces la sentencia anula el acto solo para el futuro.{" "}
                  <span className="gc-fig-ref">CPCA, art. 34.1</span>
                </p>
              )}
            </>
          )}
        </section>

        <section>
          <span className="gc-fig-num">02</span>
          <p className="gc-calc-paso">Presentar la demanda</p>
          {demanda ? (
            <p>
              Un año desde la firmeza de la declaratoria, del <strong>{fmt(demanda.inicio)}</strong> al{" "}
              <strong className="gc-fig-plazo">{fmt(demanda.vence)}</strong>
              {demanda.prorrogado ? " (el vencimiento cae en fin de semana y pasa al lunes)" : ""}.{" "}
              <Estado vence={demanda.vence} />
              <span className="gc-fig-ref">CPCA, art. 39.1.e</span>
            </p>
          ) : (
            <p className="gc-calc-vacio">
              El año para demandar corre desde el día siguiente a la firmeza de la declaratoria. Indique esa fecha.
            </p>
          )}
        </section>
      </div>

      <p className="gc-fig-note">
        Orientación general: la calculadora no descuenta feriados ni cierres colectivos, y el cómputo exacto depende de la
        fecha de comunicación que conste en el expediente. Los plazos son de caducidad: el juez puede declararla de oficio
        y no se interrumpen.
      </p>
      <p className="gc-fig-source">
        <span>Fuente:</span> Código Procesal Contencioso-Administrativo, arts. 34 y 39; Código Procesal Civil, art. 30.5;
        Tribunal de Casación Contencioso-Administrativo, sentencias 167-F-TC-2022 y 181-F-TC-2024.
      </p>
    </figure>
  );
}
