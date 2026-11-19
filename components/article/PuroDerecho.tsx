/* Figuras de la guía «Proceso de puro derecho en el contencioso
   administrativo». Mismo lenguaje editorial que las demás guías (.gc-fig de
   app/globals.css). Textos cotejados el 18-11-2026: CPCA (Ley 8508), arts.
   90, 98 y 111 (SINALEVI); Reglamento Autónomo de Organización y Servicio de
   la Jurisdicción Contencioso Administrativa, arts. 62.10, 75 y 82 (SINALEVI);
   Ley Orgánica del Poder Judicial, art. 5 (texto de la Ley 10905); proyecto
   25.815 (Alcance 135 a La Gaceta 189, 07-10-2026); acta de Corte Plena
   42-2026, art. XXXV; circular 177-2026; oficio 609-PLA-MNP-2025. */

import { RunningHead } from "@/components/ui/RunningHead";

const ALCANCE_135 = "https://www.imprentanacional.go.cr/pub/2026/10/07/ALCA135_07_10_2026.pdf";
const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;

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

/* ── Figura 1. El recorrido de un asunto de puro derecho ──────────────── */

const PASOS: { quien: string; que: string; norma: string; rama?: { cuando: string; que: string } }[] = [
  {
    quien: "Las partes",
    que: "Presentan la demanda, la contestación y, si corresponde, la réplica, con la prueba documental y el expediente administrativo.",
    norma: "CPCA, arts. 58 a 64",
  },
  {
    quien: "Juez tramitador",
    que: "En la audiencia preliminar sanea el proceso, resuelve las defensas previas, fija los hechos controvertidos y decide qué prueba admite.",
    norma: "CPCA, art. 90",
    rama: {
      cuando: "Si queda prueba que evacuar",
      que: "se convoca al juicio oral y público ante un tribunal de tres jueces (art. 98.1).",
    },
  },
  {
    quien: "Juez tramitador",
    que: "Si el asunto es de puro derecho o no hay prueba que evacuar, da la palabra a las partes para sus conclusiones antes de cerrar la audiencia. Quedan grabadas.",
    norma: "CPCA, art. 98.2",
  },
  {
    quien: "Juez tramitador",
    que: "Remite el expediente, sin más trámite, a la sección del Tribunal que falla los asuntos sin juicio.",
    norma: "Reglamento, art. 75",
  },
  {
    quien: "Tribunal",
    que: "Dicta sentencia por escrito con lo que consta en el expediente y en las conclusiones grabadas. Desde 2026, parte de estos asuntos los falla una sección del Tribunal de Apelación.",
    norma: "Reglamento, art. 82.4: 15 días hábiles",
  },
  {
    quien: "Las partes",
    que: "Contra la sentencia cabe el recurso de casación, como contra cualquier sentencia de fondo del Tribunal.",
    norma: "CPCA, arts. 134 y siguientes",
  },
];

export function RecorridoPuroDerecho() {
  return (
    <figure className="gc-fig gc-fig-flujo" aria-labelledby="fig-recorrido-puro-derecho">
      <FigHead
        id="fig-recorrido-puro-derecho"
        n={1}
        kicker="El proceso sin juicio oral"
        title="Cómo llega a sentencia un asunto de puro derecho"
        lead="La diferencia con el proceso ordinario está en el tercer paso: las conclusiones se dan en la audiencia preliminar y el juicio oral desaparece."
      />
      <ol className="gc-flujo">
        <li className="gc-flujo-cab" aria-hidden="true">
          <span />
          <span>Quién</span>
          <span>Qué ocurre</span>
          <span>Norma</span>
        </li>
        {PASOS.map((p, i) => (
          <li key={i} className="gc-flujo-paso">
            <span className="gc-fig-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="gc-flujo-quien">{p.quien}</span>
            <span className="gc-flujo-que">{p.que}</span>
            <span className="gc-flujo-plazo">{p.norma}</span>
            {p.rama && (
              <span className="gc-flujo-rama">
                <b>{p.rama.cuando}:</b> {p.rama.que}
              </span>
            )}
          </li>
        ))}
      </ol>
      <FigSource>
        Código Procesal Contencioso-Administrativo (Ley 8508), artículos 90 y 98; Reglamento Autónomo de Organización y
        Servicio de la Jurisdicción Contencioso Administrativa y Civil de Hacienda, artículos 62.10, 75 y 82.4; circular
        177-2026 de la Corte Suprema de Justicia.
      </FigSource>
    </figure>
  );
}

/* ── Figura 2. Cuánto tiempo tiene el Tribunal para sentenciar ────────── */

const PLAZOS: { supuesto: string; plazo: string; norma: string; hl?: boolean }[] = [
  {
    supuesto: "Después del juicio oral",
    plazo: "En el acto, de forma oral. Si no es posible, por escrito en 5 días hábiles; en casos muy complejos, 15 días hábiles.",
    norma: "Ley, CPCA art. 111.1. Dictarla tarde sin causa justificada es falta grave de servicio (art. 111.2).",
  },
  {
    supuesto: "Fallo directo",
    plazo: "5 días hábiles desde la notificación del auto que acoge la petición del actor de fallar sin prueba ni audiencias, si el demandado no se opone.",
    norma: "Ley, CPCA art. 69.2.",
  },
  {
    supuesto: "Trámite preferente",
    plazo: "5 días hábiles desde que se acordó el trámite preferente o desde la última audiencia.",
    norma: "Ley, CPCA art. 60.6.",
  },
  {
    supuesto: "Puro derecho o sin prueba que evacuar",
    plazo: "La ley no fija plazo. El reglamento de la Corte da 15 días hábiles desde que el juez tramitador remite el expediente.",
    norma: "Reglamento, art. 82.4. La Sala Primera lo considera un plazo ordenatorio: vencido, la sentencia sigue siendo válida.",
    hl: true,
  },
  {
    supuesto: "Puro derecho según el proyecto 25.815",
    plazo: "Un mes, en la ley, aplicable también a los procesos pendientes y con prioridad para ellos.",
    norma: "Proyecto de reforma al art. 98.2. Si se incumple, remite al art. 5 de la Ley Orgánica del Poder Judicial.",
    hl: true,
  },
];

export function PlazosSentenciaPuroDerecho() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-plazos-sentencia">
      <FigHead
        id="fig-plazos-sentencia"
        n={2}
        kicker="El plazo para sentenciar"
        title="Cuánto tiempo tiene el Tribunal para dictar sentencia, según cómo llegó el asunto"
        lead="De todas las vías que llevan a sentencia, el puro derecho es la única cuyo plazo no está en el Código. Lo fija un reglamento de la Corte."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Supuesto</th>
                <th scope="col">Plazo</th>
                <th scope="col">Norma y consecuencia</th>
              </tr>
            </thead>
            <tbody>
              {PLAZOS.map((p) => (
                <tr key={p.supuesto} className={p.hl ? "gc-fig-hl" : undefined}>
                  <td className="gc-recurso">{p.supuesto}</td>
                  <td data-label="Plazo">{p.plazo}</td>
                  <td data-label="Norma y consecuencia">{p.norma}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        CPCA, artículos 60.6, 69.2, 98.2 y 111 (reformado por la Ley 9784 de 2019); Reglamento Autónomo de Organización y
        Servicio de la Jurisdicción Contencioso Administrativa y Civil de Hacienda, artículo 82.4; Sala Primera, voto
        1368-F-S1-2012; proyecto de ley 25.815 (
        <a href={ALCANCE_135} {...EXT}>
          Alcance 135 a La Gaceta 189
        </a>
        , 07-10-2026).
      </FigSource>
    </figure>
  );
}

/* ── Figura 3. El rezago en cifras ────────────────────────────────────── */

const CIFRAS: { dato: string; cifra: string; detalle: string; hl?: boolean }[] = [
  {
    dato: "Duración promedio de los procesos de puro derecho terminados en 2024",
    cifra: "60,2 meses",
    detalle: "234 procesos. En 2025: 303 procesos y 60,1 meses.",
    hl: true,
  },
  {
    dato: "Duración promedio de los asuntos que el Tribunal terminó por sentencia en 2024",
    cifra: "17,2 meses",
    detalle: "En el informe, 17 meses y una semana. Todos los procesos, con juicio oral o sin él.",
  },
  {
    dato: "Asuntos de puro derecho listos para sentencia en el Tribunal, 2 de junio de 2025",
    cifra: "1.097",
    detalle: "31 de ellos con criterios de vulnerabilidad.",
  },
  {
    dato: "Sentencias de puro derecho por juez titular del Tribunal en 2025",
    cifra: "1 al mes",
    detalle: "De una cuota de 2,5 sentencias mensuales.",
  },
  {
    dato: "Sentencias de puro derecho de la sección del Tribunal de Apelación, del 16 de marzo al 31 de agosto de 2026",
    cifra: "38",
    detalle: "El 71 % de las 54 proyectadas.",
  },
  {
    dato: "Asuntos de puro derecho pendientes de sentencia, 30 de agosto de 2026",
    cifra: "970",
    detalle: "Dato con el que la Corte Plena prorrogó el plan el 28 de setiembre de 2026.",
    hl: true,
  },
];

export function RezagoPuroDerecho() {
  return (
    <figure className="gc-fig" aria-labelledby="fig-rezago-puro-derecho">
      <FigHead
        id="fig-rezago-puro-derecho"
        n={3}
        kicker="El rezago en cifras"
        title="Lo que dicen los datos oficiales sobre los asuntos de puro derecho"
        lead="Las dos duraciones salen de cuadros distintos del Poder Judicial, de modo que la comparación es aproximada. La distancia entre ellas es lo que llevó al proyecto de ley."
      />
      <table className="gc-fig-mini">
        <thead>
          <tr>
            <th scope="col">Dato</th>
            <th scope="col">Cifra</th>
          </tr>
        </thead>
        <tbody>
          {CIFRAS.map((c) => (
            <tr key={c.dato} className={c.hl ? "gc-fig-hl" : undefined}>
              <td>
                {c.dato}
                <span className="gc-fig-ref">{c.detalle}</span>
              </td>
              <td className="gc-fig-plazo">{c.cifra}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <FigSource>
        Subproceso de Estadística del Poder Judicial, cuadro 1 de la exposición de motivos del proyecto 25.815 (
        <a href={ALCANCE_135} {...EXT}>
          Alcance 135
        </a>
        ); Dirección de Planificación, informe «Materia Contenciosa Administrativa 2024» y oficio 609-PLA-MNP-2025; acta de
        Corte Plena 42-2026, artículo XXXV.
      </FigSource>
    </figure>
  );
}
