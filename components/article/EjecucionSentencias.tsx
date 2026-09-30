/* Figuras y fuentes de la guía «Cómo se ejecuta una sentencia contra el
   Estado en Costa Rica». Cada regla se verificó contra el texto vigente del
   CPCA en SINALEVI y en las bases de Corporación GC el 29-09-2026. */

import { RunningHead } from "@/components/ui/RunningHead";

const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;
const CPCA_TEXTO = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1";
const ART = (n: string) => `/articulos/que-es-el-cpca-costa-rica#art-${n}`;

type Paso = { n: string; que: string; como: string; arts: string[] };

const PASOS: Paso[] = [
  {
    n: "1",
    que: "Sentencia firme y solicitud",
    como: "La ejecución la pide la parte victoriosa ante el juez ejecutor del Tribunal. Si la sentencia está recurrida en casación, puede pedirse la ejecución provisional de lo que ya esté firme.",
    arts: ["155", "146"],
  },
  {
    n: "2",
    que: "Liquidación de la condena en abstracto",
    como: "Quien ganó presenta la liquidación detallada con la prueba; la Administración tiene cinco días hábiles para contestar partida por partida; el juez aprueba solo lo demostrado y dicta sentencia de ejecución.",
    arts: ["163", "164", "165"],
  },
  {
    n: "3",
    que: "Actualización de la suma",
    como: "Las obligaciones dinerarias se indexan con el índice de precios al consumidor (colones) o la tasa prime rate (moneda extranjera) hasta el pago; las de valor se convierten en dinero y se actualizan en la ejecución.",
    arts: ["123", "124"],
  },
  {
    n: "4",
    que: "Plazo para cumplir",
    como: "La sentencia se ejecuta de inmediato, salvo que el juez conceda, en forma motivada, un plazo de hasta tres meses, prorrogable una sola vez en casos excepcionales.",
    arts: ["157"],
  },
  {
    n: "5",
    que: "Presupuesto",
    como: "La condena a pagar una suma líquida produce automáticamente el compromiso presupuestario del ejercicio en que queda firme. El juez certifica la sentencia a Presupuesto Nacional o al jerarca del ente, que debe incluirla en el presupuesto inmediato siguiente.",
    arts: ["166", "167"],
  },
  {
    n: "6",
    que: "Presión sobre el ente que no paga",
    como: "Si un ente descentralizado no ajusta su presupuesto en tres meses, el juez puede pedir a la Contraloría que congele la aprobación y modificación de sus presupuestos hasta que incluya la partida.",
    arts: ["168"],
  },
  {
    n: "7",
    que: "Multa al funcionario",
    como: "Al funcionario que incumple sin justa causa se le impone, previa audiencia de tres días, una multa personal de uno a cinco salarios base, y el juez puede testimoniar piezas al Ministerio Público.",
    arts: ["158", "159"],
  },
  {
    n: "8",
    que: "Sustitución de la Administración",
    como: "Si persiste el incumplimiento, el juez puede ejecutar con otras autoridades, ordenar la ejecución subsidiaria con cargo a la Administración o adoptar por su cuenta las conductas equivalentes al cumplimiento.",
    arts: ["161"],
  },
  {
    n: "9",
    que: "Embargo",
    como: "A petición de parte, el juez puede embargar bienes de dominio privado no afectos a un fin público, participaciones accionarias y transferencias presupuestarias, estas dos hasta un veinticinco por ciento.",
    arts: ["169", "170", "171"],
  },
];

export function RecorridoEjecucion() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-recorrido-ejecucion">
      <header className="gc-fig-head">
        <RunningHead title="Ejecución" locator="Figura 1" />
        <p id="fig-recorrido-ejecucion" className="gc-fig-title">
          De la sentencia firme al pago
        </p>
        <p className="gc-fig-lead">
          Las etapas y los instrumentos que el Código Procesal Contencioso-Administrativo pone en manos del juez
          ejecutor, en el orden en que suelen usarse.
        </p>
      </header>
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Etapa</th>
                <th scope="col">Qué ocurre</th>
              </tr>
            </thead>
            <tbody>
              {PASOS.map((p) => (
                <tr key={p.n}>
                  <td className="gc-recurso">
                    {p.n}. {p.que}
                  </td>
                  <td>
                    {p.como}{" "}
                    <span className="gc-fig-ref">
                      CPCA,{" "}
                      {p.arts.map((a, i) => (
                        <span key={a}>
                          {i > 0 && (i === p.arts.length - 1 ? " y " : ", ")}
                          <a href={ART(a)}>art. {a}</a>
                        </span>
                      ))}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        Los instrumentos no siguen un orden obligatorio: el juez elige los adecuados y necesarios para la efectividad del
        fallo (artículo 155). El cumplimiento solo puede suspenderse, en la medida estrictamente necesaria, ante graves
        dislocaciones a la seguridad o la paz o una afectación de servicios públicos esenciales (artículos 173 y 174).
      </p>
      <p className="gc-fig-source">
        <span>Fuente:</span> Código Procesal Contencioso-Administrativo, arts. 123 a 124, 146 y 155 a 174, texto vigente
        en{" "}
        <a href={CPCA_TEXTO} {...EXT}>
          SINALEVI
        </a>
        .
      </p>
    </figure>
  );
}

const EMBARGABLES = [
  "Bienes de dominio privado de la Administración que no estén afectos a un fin público.",
  "La participación accionaria o económica del ente condenado en empresas públicas o privadas, hasta un 25 % del total participativo.",
  "Los ingresos efectivamente percibidos por transferencias de la Ley de Presupuesto Nacional, hasta un 25 % de la transferencia del período.",
];

const INEMBARGABLES = [
  "Bienes de uso y aprovechamiento común y los vinculados directamente con servicios de salud, educación, seguridad u otros esenciales.",
  "Bienes de dominio público custodiados o explotados por particulares.",
  "Cuentas corrientes y cuentas cliente de la Administración.",
  "Fondos, valores o bienes indispensables o insustituibles para fines o servicios públicos.",
  "Recursos con destino legal específico, servicio de la deuda, planillas, emergencias o sufragio.",
  "Fondos de pensiones, transferencias del fondo de la Educación Superior y fondos dados en garantía dentro de un proceso judicial.",
];

export function EmbargoEstado() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-embargo-estado">
      <header className="gc-fig-head">
        <RunningHead title="Embargo" locator="Figura 2" />
        <p id="fig-embargo-estado" className="gc-fig-title">
          Qué bienes públicos pueden embargarse
        </p>
        <p className="gc-fig-lead">
          El Código abrió el embargo contra la Administración, con una lista de bienes embargables y otra de bienes
          protegidos.
        </p>
      </header>
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Embargables (art. 169)</th>
                <th scope="col">Inembargables (art. 170)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {[EMBARGABLES, INEMBARGABLES].map((lista, i) => (
                  <td key={i} className="align-top">
                    {lista.map((item, j) => (
                      <p
                        key={item}
                        style={{
                          margin: 0,
                          padding: j === 0 ? "0 0 0.7rem" : "0.7rem 0",
                          borderTop: j === 0 ? "none" : "1px solid var(--gc-rule, rgba(128,128,128,0.18))",
                        }}
                      >
                        {item}
                      </p>
                    ))}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        La gestión que no identifique con precisión los bienes, fondos o rubros por embargar se rechaza de plano, y la
        Administración puede proponer otros bienes en sustitución (artículo 169.2 y 169.3). Contra el auto que resuelve el
        embargo cabe revocatoria con apelación en subsidio dentro de tres días hábiles (artículo 178).
      </p>
      <p className="gc-fig-source">
        <span>Fuente:</span> Código Procesal Contencioso-Administrativo, arts. 169, 170 y 178, texto vigente en{" "}
        <a href={CPCA_TEXTO} {...EXT}>
          SINALEVI
        </a>
        .
      </p>
    </figure>
  );
}

const NEXUS = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;
const PGR = (p1: number) => `https://sinalevi.go.cr/ResultadosPronunciamiento/Informacion?param1=${p1}&param2=1&param3=1`;

type Fuente = { titulo: string; detalle: string; href?: string };
type Criterio = { numero: string; organo: string; fecha: string; tema: string; criterio: string; href?: string; gc?: boolean };

const NORMAS: Fuente[] = [
  { titulo: "Código Procesal Contencioso-Administrativo", detalle: "Ley N.° 8508, arts. 122 a 124, 146, 155 a 180 y 210", href: CPCA_TEXTO },
  { titulo: "Ley N.° 10702", detalle: "Reforma del art. 179 del CPCA, 06-05-2025 (Alcance 69, La Gaceta 98, 30-05-2025)" },
  { titulo: "Constitución Política", detalle: "Arts. 41, 153 y 176 a 180", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1" },
  { titulo: "Código Civil", detalle: "Ley N.° 30, art. 868" },
];

const S1 = "Sala Primera";
const SC = "Sala Constitucional";
const TCA = "Tribunal Contencioso Administrativo";

const JURISPRUDENCIA: Criterio[] = [
  { numero: "Voto 557-F-S1-2010", organo: S1, fecha: "06-05-2010", tema: "Poderes del juez ejecutor", criterio: "El juez ejecutor puede adoptar las conductas necesarias y equivalentes para el cumplimiento; proceden intereses por la demora de la Administración.", href: NEXUS("ext-1-0034-136900"), gc: true },
  { numero: "Voto 526-F-S1-2011", organo: S1, fecha: "26-04-2011", tema: "Intereses por la demora", criterio: "Reconoce intereses cuando la Administración demora el pago de una deuda dineraria, como consecuencia de la reparación integral. Texto en la base GC (Globalex).", gc: true },
  { numero: "Voto 6-F-S1-2011", organo: S1, fecha: "13-01-2011", tema: "Límites de la ejecución", criterio: "Los poderes del juez ejecutor tienen dos topes: lo pedido por el ejecutante y lo decidido en el fallo.", href: NEXUS("ext-1-0004-241203") },
  { numero: "Voto 1144-F-S1-2012", organo: S1, fecha: "13-09-2012", tema: "Intereses e indexación", criterio: "Intereses e indexación no se acumulan sobre la misma suma.", href: NEXUS("sen-1-0004-888107"), gc: true },
  { numero: "Voto 2015-003095", organo: SC, fecha: "04-03-2015", tema: "Multa al funcionario", criterio: "La audiencia previa de tres días del art. 159 es suficiente para imponer la multa.", href: NEXUS("ext-1-0007-264523") },
  { numero: "Sentencia 63-2018", organo: TCA, fecha: "07-03-2018", tema: "Liquidación", criterio: "El juez ejecutor respeta los términos del fallo y de la solicitud; las medidas del art. 168 suponen una liquidación ya aprobada.", href: NEXUS("sen-1-0034-740932") },
  { numero: "Voto 2388-F-S1-2019", organo: S1, fecha: "05-09-2019", tema: "Ejecución provisional", criterio: "El art. 146 permite pedir por vía incidental la ejecución provisional de lo firme mientras se tramita la casación.", href: NEXUS("sen-1-0004-964492") },
  { numero: "Voto 2854-F-S1-2020", organo: S1, fecha: "03-12-2020", tema: "Multa al funcionario", criterio: "Anula la multa impuesta a funcionarios que no recibieron la audiencia personal previa. Texto en la base GC (Globalex)." },
  { numero: "Sentencia 309-2022", organo: TCA, fecha: "01-08-2022", tema: "Carga del cumplimiento", criterio: "Cumplir, demostrar los impedimentos y proponer alternativas corresponde a la Administración condenada.", href: NEXUS("sen-1-0034-1136203") },
  { numero: "Sentencia 973-2024", organo: TCA, fecha: "19-02-2024", tema: "Presupuesto extraordinario", criterio: "Haber aprobado el presupuesto ordinario no exime de tramitar uno extraordinario para cumplir. Texto en la base GC (Globalex)." },
  { numero: "Voto 1060-F-S1-2024", organo: S1, fecha: "30-07-2024", tema: "Preclusión", criterio: "Lo que debió pedirse en el proceso de conocimiento, como la indexación de una condena ya líquida, no puede reclamarse en ejecución.", href: NEXUS("sen-1-0004-1243624") },
  { numero: "Voto 209-F-S1-2025", organo: S1, fecha: "13-02-2025", tema: "Prescripción", criterio: "La ejecución de sentencias prescribe en diez años (art. 868 del Código Civil).", href: NEXUS("sen-1-0004-1276228") },
  { numero: "Voto 2025-015689", organo: SC, fecha: "23-05-2025", tema: "Vía para exigir el pago", criterio: "El incumplimiento de una sentencia se reclama ante el juez de ejecución y no por amparo.", href: NEXUS("sen-1-0007-1293108") },
  { numero: "Voto 1370-F-S1-2025", organo: S1, fecha: "30-09-2025", tema: "Ley 10702", criterio: "Aplica diez años a una ejecución de amparo anterior a la reforma que fijó cuatro.", href: NEXUS("ext-1-0004-379019") },
  { numero: "Voto 1022-F-S1-2026", organo: S1, fecha: "22-07-2026", tema: "Ejecución de amparos", criterio: "La condena en abstracto no obliga a reconocer los daños; el ejecutante debe probar el nexo causal.", href: NEXUS("sen-1-0004-1416754") },
];

const PROCURADURIA: Fuente[] = [
  { titulo: "Dictamen C-210-1997", detalle: "11-11-1997 · El derecho del acreedor no desaparece por falta de partida presupuestaria", href: PGR(6417) },
  { titulo: "Dictamen C-039-2005", detalle: "28-01-2005 · La sentencia vuelve obligatorio el gasto autorizado", href: PGR(12956) },
  { titulo: "Dictamen C-232-2007", detalle: "10-07-2007 · Pago de condenas de amparo, incluso en sede administrativa", href: PGR(14646) },
  { titulo: "Dictamen C-270-2009", detalle: "02-10-2009 · Inembargabilidad de los bienes públicos como regla general", href: PGR(16053) },
  { titulo: "Dictamen C-457-2020", detalle: "18-11-2020 · Intereses e indexación como parte de la reparación integral", href: PGR(22434) },
  { titulo: "Dictamen C-018-2023", detalle: "08-02-2023 · La falta de contenido presupuestario no condiciona la ejecución", href: PGR(23775) },
];

const ANTECEDENTES: Fuente[] = [
  { titulo: "CPCA, subcomisión del expediente 15.134, acta n.º 02", detalle: "13-10-2004 · Exposición inicial del magistrado González Camacho sobre la ejecución" },
  { titulo: "CPCA, subcomisión, acta n.º 18", detalle: "13-04-2005 · Multa personal al funcionario" },
  { titulo: "CPCA, subcomisión, acta n.º 31", detalle: "29-06-2005, folios 1555 a 1587 · Plazo de hasta tres meses, ejecución gradual y sustitución" },
  { titulo: "CPCA, Comisión Permanente de Asuntos Jurídicos, sesión n.º 21", detalle: "31-08-2005 · Embargo de bienes de la Administración" },
  { titulo: "CPCA, Comisión Permanente de Asuntos Jurídicos, sesión n.º 38", detalle: "21-03-2006 · Topes del 25 % y bienes inembargables" },
  { titulo: "Ley 10702, expediente 23.873", detalle: "Exposición de motivos (La Gaceta 160, 01-09-2023) · Plazo para ejecutar amparos" },
];

const DOCTRINA: Fuente[] = [
  { titulo: "González Camacho, Óscar Eduardo. «La ejecución de sentencia»", detalle: "Cap. XV de El nuevo proceso contencioso-administrativo, San José, Poder Judicial, Escuela Judicial, 2006, pp. 573-624" },
];

function Grupo({ titulo, items }: { titulo: string; items: Fuente[] }) {
  return (
    <section className="gc-juris-grupo">
      <span className="gc-fig-label">{titulo}</span>
      <ol>
        {items.map((f) => (
          <li key={f.titulo} className="gc-juris-item gc-juris-item--simple">
            <span className="gc-juris-id">
              <b>
                {f.href ? (
                  <a href={f.href} {...EXT}>
                    {f.titulo}
                  </a>
                ) : (
                  f.titulo
                )}
              </b>
              <span className="gc-juris-org">{f.detalle}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function FuentesEjecucion() {
  return (
    <div className="gc-fig gc-biblio">
      <Grupo titulo="Normativa" items={NORMAS} />
      <section className="gc-juris-grupo">
        <span className="gc-fig-label">Jurisprudencia</span>
        <ol>
          {JURISPRUDENCIA.map((c) => (
            <li key={c.numero} className="gc-juris-item">
              <span className="gc-juris-id">
                <b>
                  {c.href ? (
                    <a href={c.href} {...EXT}>
                      {c.numero}
                    </a>
                  ) : (
                    c.numero
                  )}
                </b>
                <span className="gc-juris-org">{c.organo}</span>
                <span className="gc-juris-fecha">{c.fecha}</span>
              </span>
              <span className="gc-juris-criterio">
                <span className="gc-juris-tema">{c.tema}</span>
                {c.criterio}
                {c.gc && <span className="gc-juris-redacta">Redactó el magistrado González Camacho.</span>}
              </span>
            </li>
          ))}
        </ol>
      </section>
      <Grupo titulo="Procuraduría General de la República" items={PROCURADURIA} />
      <Grupo titulo="Antecedentes legislativos" items={ANTECEDENTES} />
      <Grupo titulo="Doctrina" items={DOCTRINA} />
      <p className="gc-fig-source">
        Textos normativos: SINALEVI, en su versión vigente. Jurisprudencia: Nexus del Poder Judicial y bases de
        Corporación GC. Dictámenes: SINALEVI. Actas: expedientes legislativos 15.134 y 23.873 de la Asamblea Legislativa.
      </p>
    </div>
  );
}
