/* Figuras de la guía «Plan regulador de Montes de Oca: cómo funciona la
   audiencia pública y por qué se suspendió». Mismo lenguaje editorial que
   las demás guías (.gc-fig de app/globals.css).
   Fuentes, cotejadas el 26-11-2026: Ley de Planificación Urbana, art. 17;
   Decreto 44710-MINAE; Reglamento para la audiencia pública del Plan
   Regulador de Montes de Oca (sesión 126-2026); reglamentos de audiencia de
   Belén (La Gaceta 215, 12-11-2026) y Quepos (La Gaceta 210, 05-11-2026);
   aclaración pública de la Municipalidad de Montes de Oca del 26-11-2026. */

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

/* ── Figura 1. Las etapas de un plan regulador ────────────────────────── */

const ETAPAS: { quien: string; que: string; estado: string; hl?: boolean }[] = [
  { quien: "Concejo y Alcaldía", que: "Deciden actualizar el plan y contratan los estudios.", estado: "Hecho: contratación de 2022." },
  { quien: "Municipalidad y equipo consultor", que: "Diagnóstico, propuesta de zonificación y reglamentos, talleres con la comunidad.", estado: "Hecho, según la Municipalidad; borradores en revisión." },
  { quien: "SETENA", que: "Revisa los estudios ambientales y otorga la viabilidad ambiental por resolución.", estado: "Notificada el 24-11-2026, según la Municipalidad.", hl: true },
  { quien: "Concejo", que: "Convoca la audiencia pública en La Gaceta, con quince días hábiles de antelación y divulgación adicional.", estado: "Pendiente: sin nueva fecha.", hl: true },
  { quien: "Vecinos e interesados", que: "Audiencia: observaciones orales y escritas; escritas hasta quince días hábiles después.", estado: "Pendiente." },
  { quien: "Equipo consultor y Concejo", que: "Informe de la audiencia en treinta días hábiles: qué se incorpora y por qué no.", estado: "Pendiente." },
  { quien: "INVU (Dirección de Urbanismo)", que: "Aprueba el proyecto o pide cambios. Si cambia la zonificación, puede requerirse modificar la viabilidad ambiental.", estado: "Pendiente." },
  { quien: "Concejo", que: "Adopta el plan por mayoría absoluta.", estado: "Pendiente." },
  { quien: "La Gaceta", que: "Publica la adopción y fija la fecha desde la que rige. Hasta entonces se aplica el plan de 2007.", estado: "Pendiente." },
];

export function EtapasPlanRegulador() {
  return (
    <figure className="gc-fig gc-fig-flujo" aria-labelledby="fig-etapas-montes-de-oca">
      <FigHead
        id="fig-etapas-montes-de-oca"
        n={1}
        kicker="Etapas"
        title="Del estudio a la publicación: dónde está Montes de Oca"
        lead="Las filas marcadas son las del momento actual: la viabilidad ambiental recién notificada y la convocatoria pendiente."
      />
      <ol className="gc-flujo">
        <li className="gc-flujo-cab" aria-hidden="true">
          <span />
          <span>Quién</span>
          <span>Qué ocurre</span>
          <span>Montes de Oca</span>
        </li>
        {ETAPAS.map((e, i) => (
          <li key={i} className={`gc-flujo-paso${e.hl ? " gc-fig-hl" : ""}`}>
            <span className="gc-fig-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="gc-flujo-quien">{e.quien}</span>
            <span className="gc-flujo-que">{e.que}</span>
            <span className="gc-flujo-plazo">{e.estado}</span>
          </li>
        ))}
      </ol>
      <FigSource>
        Ley de Planificación Urbana, art. 17; Decreto 44710-MINAE, arts. 13 y 20; Reglamento de audiencia de Montes de Oca, arts. 4, 13 y 16;
        aclaración pública de la Municipalidad del 26-11-2026 y sección del proyecto en su sitio web.
      </FigSource>
    </figure>
  );
}

/* ── Figura 2. Tres reglamentos de audiencia ──────────────────────────── */

const FILAS: { tema: string; mo: string; belen: string; quepos: string }[] = [
  {
    tema: "Aprobación y publicación",
    mo: "Sesión 126-2026 del 28-09-2026.",
    belen: "Sesión 64-2026 del 27-10-2026; La Gaceta 215, 12-11-2026.",
    quepos: "Primera publicación en La Gaceta 182, 28-09-2026; texto definitivo en La Gaceta 210, 05-11-2026.",
  },
  {
    tema: "Antelación de la convocatoria",
    mo: "Quince días hábiles, en La Gaceta y medios comunitarios.",
    belen: "Quince días hábiles, en La Gaceta y medios comunitarios.",
    quepos: "Quince días hábiles, en el Diario Oficial y otros medios.",
  },
  {
    tema: "Documentos a disposición",
    mo: "Desde la convocatoria, incluida la viabilidad ambiental de SETENA.",
    belen: "Al menos un mes antes de la audiencia.",
    quepos: "En el sitio web, a más tardar cinco días hábiles después de firme el acuerdo de convocatoria.",
  },
  {
    tema: "Modalidad",
    mo: "Presencial, con transmisión en vivo.",
    belen: "Presencial; híbrida cuando sea posible; virtual solo por excepción justificada.",
    quepos: "Presencial; la virtual, como herramienta adicional.",
  },
  {
    tema: "Observaciones escritas",
    mo: "Desde la convocatoria hasta quince días hábiles después de la audiencia.",
    belen: "Durante la audiencia o en el plazo que se habilite para ampliarlas.",
    quepos: "Por escrito en la modalidad virtual; quedan en el acta.",
  },
];

export function ReglamentosAudienciaComparados() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-reglamentos-audiencia">
      <FigHead
        id="fig-reglamentos-audiencia"
        n={2}
        kicker="Reglamentos de audiencia"
        title="Montes de Oca, Belén y Quepos: tres reglamentos de 2026"
        lead="Los tres desarrollan el artículo 17 de la Ley de Planificación Urbana con matices en documentos, modalidad y plazos."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Montes de Oca</th>
                <th scope="col">Belén</th>
                <th scope="col">Quepos</th>
              </tr>
            </thead>
            <tbody>
              {FILAS.map((f) => (
                <tr key={f.tema}>
                  <td className="gc-recurso">{f.tema}</td>
                  <td data-label="Montes de Oca">{f.mo}</td>
                  <td data-label="Belén">{f.belen}</td>
                  <td data-label="Quepos">{f.quepos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Reglamento de audiencia de Montes de Oca (arts. 4, 5, 7 y 13); de Belén (arts. 1, 4, 6 y 7), La Gaceta 215; de Quepos (arts. 3 a 6),
        La Gaceta 210.
      </FigSource>
    </figure>
  );
}
