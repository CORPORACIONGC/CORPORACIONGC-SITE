/* Figuras de la guía sobre el presupuesto 2027 y la consulta a la Sala
   Constitucional. Mismo lenguaje editorial que las demás guías (.gc-fig de
   app/globals.css). Fechas cotejadas el 19-11-2026: trámite del expediente
   legislativo 25.754 según el SIL y la prensa; plazos según la Constitución
   (art. 178), el Reglamento de la Asamblea (arts. 204 y 205) y la Ley de la
   Jurisdicción Constitucional (arts. 96 a 101). */

import { RunningHead } from "@/components/ui/RunningHead";

function FigHead({ id, n, kicker, title, lead }: { id: string; n: number; kicker: string; title: string; lead?: string }) {
  return (
    <header className="gc-fig-head">
      <RunningHead title={kicker} locator={`Figura ${n}`} />
      <p id={id} className="gc-fig-title">
        {title}
      </p>
      {lead && <p className="gc-fig-lead">{lead}</p>}
    </header>
  );
}

function FigSource({ children }: { children: React.ReactNode }) {
  return (
    <p className="gc-fig-source">
      <span>Fuente:</span> {children}
    </p>
  );
}

/* ── Figura 1. Calendario del presupuesto 2027 ────────────────────────── */

const PASOS: { quien: string; que: string; plazo: string; hl?: boolean }[] = [
  { quien: "Poder Ejecutivo", que: "Presenta el proyecto de presupuesto ordinario y extraordinario para 2027 (expediente 25.754).", plazo: "1 de setiembre · Constitución, art. 178" },
  { quien: "Comisión de Hacendarios", que: "Vota el proyecto y emite dictamen afirmativo de mayoría y negativo de minoría.", plazo: "20 de octubre · Reglamento, art. 204" },
  { quien: "Corte Plena y diputados", que: "Tres consultas a la Sala: la de la Corte y la de diputados del PLN sobre las normas que condicionan fondos y plazas del Poder Judicial; la de diputados del Frente Amplio y del PLN sobre el recorte al FEES.", plazo: "22 de octubre y días siguientes · LJC, art. 96" },
  { quien: "Plenario", que: "Aprueba el proyecto en primer debate por 31 votos contra 23. El mismo día el Directorio envía el expediente a la Sala.", plazo: "5 de noviembre" },
  { quien: "Sala Constitucional", que: "Dos resoluciones ordenan no discutir ni votar el segundo debate antes del 29 de noviembre.", plazo: "9 de noviembre" },
  { quien: "Sala Constitucional", que: "Votos 2026-045630 y 2026-045631: vicios de procedimiento en las normas 9 a 12 del Poder Judicial y en la moción 16 que rebajó el FEES. Ordena eliminarlas; si no, se tienen por excluidas.", plazo: "20 de noviembre · LJC, art. 101", hl: true },
  { quien: "Plenario", que: "Lee la opinión consultiva y envía el expediente a la Comisión de Consultas de Constitucionalidad.", plazo: "24 de noviembre · Reglamento, art. 146" },
  { quien: "Plenario", que: "Último día para el segundo debate. Se sesiona aunque sea domingo; si a las 23:30 no ha terminado la discusión, se vota sin más.", plazo: "29 de noviembre · Reglamento, art. 205.3", hl: true },
  { quien: "Constitución", que: "La ley de presupuesto debe estar definitivamente aprobada antes de esta fecha.", plazo: "30 de noviembre · art. 178" },
];

export function CalendarioPresupuesto2027() {
  return (
    <figure className="gc-fig gc-fig-flujo" aria-labelledby="fig-calendario-presupuesto-2027">
      <FigHead
        id="fig-calendario-presupuesto-2027"
        n={1}
        kicker="El calendario"
        title="La Sala respondió antes del segundo debate"
        lead="Las filas marcadas son las dos fechas que definen el desenlace: la opinión de la Sala y el último día para el segundo debate."
      />
      <ol className="gc-flujo">
        <li className="gc-flujo-cab" aria-hidden="true">
          <span />
          <span>Quién</span>
          <span>Qué ocurre</span>
          <span>Fecha y norma</span>
        </li>
        {PASOS.map((p, i) => (
          <li key={i} className={`gc-flujo-paso${p.hl ? " gc-fig-hl" : ""}`}>
            <span className="gc-fig-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="gc-flujo-quien">{p.quien}</span>
            <span className="gc-flujo-que">{p.que}</span>
            <span className="gc-flujo-plazo">{p.plazo}</span>
          </li>
        ))}
      </ol>
      <FigSource>
        Constitución Política, art. 178; Reglamento de la Asamblea Legislativa, arts. 146, 204 y 205; Ley de la Jurisdicción Constitucional, arts. 96, 98, 100 y 101; trámite del expediente 25.754 en el SIL, consultado el 25 de noviembre de 2026; resoluciones de la Sala del 9 de noviembre y votos 2026-045630 (expediente 26-039748-0007-CO) y 2026-045631 (expediente 26-040155-0007-CO) del 20 de noviembre, según la prensa, porque su texto íntegro aún no está publicado.
      </FigSource>
    </figure>
  );
}

/* ── Figura 2. Qué obliga y qué no de la opinión de la Sala ───────────── */

const ALCANCE: { caso: string; ejemplo: string; efecto: string }[] = [
  {
    caso: "Vicio en el trámite",
    ejemplo: "Que se omitiera la consulta obligatoria a la Corte del artículo 167 de la Constitución, o que se introdujeran normas atípicas por el trámite del presupuesto del artículo 177. Así lo resolvió la Sala el 20 de noviembre sobre las normas 9 a 12 del presupuesto 2027.",
    efecto: "Vincula a la Asamblea. Si llega antes de la votación final, el vicio debe corregirse en el trámite.",
  },
  {
    caso: "Vicio de fondo",
    ejemplo: "Que el contenido de una norma choque con una regla constitucional de fondo. En las consultas del presupuesto 2027 la Sala no examinó esos reproches, porque los vicios de procedimiento bastaban.",
    efecto: "No vincula. La Asamblea decide si enmienda el texto; la opinión no impide votarlo.",
  },
  {
    caso: "Opinión que llega con la ley ya vigente",
    ejemplo: "Lo ocurrido con los presupuestos de 2015 y de 2025, resueltos por la Sala en enero.",
    efecto: "No afecta la vigencia de la ley. Lo que se objete puede llevarse después a una acción de inconstitucionalidad.",
  },
];

export function AlcanceOpinionSala() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-alcance-opinion-sala">
      <FigHead
        id="fig-alcance-opinion-sala"
        n={2}
        kicker="El efecto de la opinión"
        title="Lo que la Sala diga obliga a la Asamblea solo en lo que toca al procedimiento"
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Lo que la Sala encuentre</th>
                <th scope="col">Ejemplo en esta discusión</th>
                <th scope="col">Efecto</th>
              </tr>
            </thead>
            <tbody>
              {ALCANCE.map((a) => (
                <tr key={a.caso}>
                  <td className="gc-recurso">{a.caso}</td>
                  <td data-label="Ejemplo en esta discusión">{a.ejemplo}</td>
                  <td data-label="Efecto">{a.efecto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Ley de la Jurisdicción Constitucional, arts. 98, 100 y 101; Sala Constitucional, votos 2015-001240, 2024-001729 y 2025-000380.
      </FigSource>
    </figure>
  );
}
