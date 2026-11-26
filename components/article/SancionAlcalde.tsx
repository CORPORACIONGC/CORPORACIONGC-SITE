/* Figuras de la guía «¿Puede el concejo sancionar al alcalde?». Mismo
   lenguaje editorial que las demás guías (.gc-fig de app/globals.css).
   Fuentes, cotejadas el 26-11-2026: Código Municipal (arts. 13 o, 14, 18 y
   19), Código Electoral (art. 253), Leyes 7476 (art. 26 b) y 10235
   (art. 27 b); votos de la Sala Constitucional, sentencia 44-F-TC-2019 del
   Tribunal de Casación de lo Contencioso Administrativo, dictámenes de la
   PGR y resoluciones del TSE citadas en la guía; resolución de curso
   2026-092627 e informe de la PGR del 29-10-2026. */

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

/* ── Figura 1. Las vías para sancionar o destituir a un alcalde ──────── */

const VIAS: { via: string; quien: string; sancion: string; base: string }[] = [
  {
    via: "Causas automáticas de pérdida de credencial",
    quien: "Tribunal Supremo de Elecciones",
    sancion: "Cancelación de la credencial",
    base: "Código Municipal, art. 18; Código Electoral, art. 253. El concejo comunica las faltas (art. 13 o).",
  },
  {
    via: "Infracciones al ordenamiento de la Hacienda Pública",
    quien: "Contraloría instruye y recomienda en forma vinculante; el TSE ejecuta la suspensión",
    sancion: "Amonestación, suspensión o recomendación de pérdida de credencial",
    base: "Ley 7428, art. 68; Ley 8422, arts. 38 a 40 y 43; Casación 44-F-TC-2019.",
  },
  {
    via: "Faltas al deber de probidad tramitadas en la municipalidad",
    quien: "Según el TSE, el concejo, salvo la pérdida de credencial, que decide el TSE",
    sancion: "Amonestación o suspensión; pérdida de credencial por el TSE",
    base: "TSE 3509-M-2007, 713-M-2008, 1114-M-2009 y 4375-E8-2022. Impugnada en el exp. 26-034453-0007-CO.",
  },
  {
    via: "Hostigamiento sexual",
    quien: "Concejo, tras la investigación de la comisión",
    sancion: "Amonestación escrita, suspensión o pérdida de credencial",
    base: "Ley 7476, art. 26 b); Sala Constitucional 2014-17833.",
  },
  {
    via: "Violencia contra las mujeres en la política",
    quien: "La ley no nombra el órgano; la pérdida de credencial la decide el TSE",
    sancion: "Amonestación escrita, suspensión o pérdida de credencial",
    base: "Ley 10235, art. 27 b).",
  },
  {
    via: "Plebiscito revocatorio",
    quien: "Los electores del cantón, por convocatoria de tres cuartas partes del concejo",
    sancion: "Destitución",
    base: "Código Municipal, art. 19: dos tercios de los votos y participación mínima del 10 % del padrón.",
  },
  {
    via: "Delitos",
    quien: "Juez penal",
    sancion: "Pena e inhabilitación; la inhabilitación firme causa la pérdida de la credencial",
    base: "Código Municipal, art. 18 c).",
  },
];

export function ViasSancionAlcalde() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-vias-alcalde">
      <FigHead
        id="fig-vias-alcalde"
        n={1}
        kicker="Régimen del alcalde"
        title="Quién puede sancionar o destituir a un alcalde"
        lead="Cada vía tiene su propio órgano. La acción ante la Sala se refiere solo a la tercera."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Vía</th>
                <th scope="col">Quién decide</th>
                <th scope="col">Sanción</th>
                <th scope="col">Base</th>
              </tr>
            </thead>
            <tbody>
              {VIAS.map((v) => (
                <tr key={v.via}>
                  <td className="gc-recurso">{v.via}</td>
                  <td data-label="Quién decide">{v.quien}</td>
                  <td data-label="Sanción">{v.sancion}</td>
                  <td data-label="Base">{v.base}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>Texto vigente de las normas citadas y resoluciones indicadas en cada fila.</FigSource>
    </figure>
  );
}

/* ── Figura 2. Cronología ─────────────────────────────────────────────── */

const LINEA: { fecha: string; hito: string }[] = [
  { fecha: "2007-2009", hito: "TSE 3509-M-2007, 713-M-2008 y 1114-M-2009: las municipalidades instruyen y sancionan las faltas a la probidad; el TSE solo cancela credenciales." },
  { fecha: "2014", hito: "Sala Constitucional 2014-17833: no hay jerarquía entre concejo y alcalde; el legislador puede dar al concejo la potestad disciplinaria en supuestos determinados (hostigamiento sexual)." },
  { fecha: "2015", hito: "Sala Constitucional 2015-01780: la Contraloría puede sancionar a alcaldes; la suspensión no choca con el art. 23 de la Convención. Deja constancia de que nadie ejecutaba las suspensiones." },
  { fecha: "26-03-2019", hito: "Casación 44-F-TC-2019: el concejo no puede imponer al alcalde la sanción recomendada por la Contraloría; el órgano sancionador es el TSE." },
  { fecha: "2019-2021", hito: "La PGR acoge la línea (C-212-2019 y C-249-2021). Desde agosto de 2019 el TSE ejecuta las suspensiones de la Contraloría." },
  { fecha: "23-06-2022", hito: "TSE 4375-E8-2022, a consulta de la Procuraduría de la Ética Pública: confirma que el gobierno local sanciona las faltas a la probidad de sus funcionarios electos." },
  { fecha: "21-10-2025", hito: "El concejo de San José suspende al alcalde quince días sin goce de salario." },
  { fecha: "24-04-2026", hito: "Tribunal Contencioso Administrativo, resolución 2026-002549: suspende cautelarmente esa sanción hasta la sentencia firme." },
  { fecha: "08-10-2026", hito: "La Sala da curso a la acción de la Asociación Nacional de Alcaldías e Intendencias (exp. 26-034453-0007-CO), sin efecto suspensivo." },
  { fecha: "29-10-2026", hito: "Informe de la PGR: la doctrina impugnada infringe el art. 23.2 de la Convención; propone que juzgue el TSE o que legisle la Asamblea, y dimensionar los efectos." },
];

export function LineaSancionAlcalde() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-linea-alcalde">
      <FigHead
        id="fig-linea-alcalde"
        n={2}
        kicker="Cronología"
        title="Dos líneas sobre la sanción al alcalde"
        lead="La doctrina del TSE sobre las faltas a la probidad y la línea de Casación sobre las sanciones de la Contraloría, hasta la acción de 2026."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Qué pasó</th>
              </tr>
            </thead>
            <tbody>
              {LINEA.map((l) => (
                <tr key={l.fecha}>
                  <td className="gc-recurso">{l.fecha}</td>
                  <td data-label="Qué pasó">{l.hito}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>Resoluciones citadas en cada fila; los hechos de 2025 y 2026, según la resolución de curso de la acción y la resolución cautelar 2026-002549.</FigSource>
    </figure>
  );
}
