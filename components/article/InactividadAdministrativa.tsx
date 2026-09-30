/* Figuras y fuentes de la guía «Inactividad administrativa en Costa Rica».
   Normas verificadas en el texto vigente (bases GC); votos cotejados en Nexus,
   actas del expediente 15.134 y dictámenes de la PGR leídos en las bases
   locales el 30-09-2026. */

import { RunningHead } from "@/components/ui/RunningHead";

const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;
const NEXUS = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;
const PGR = (id: string) => `https://sinalevi.go.cr/ResultadosPronunciamiento/Informacion?param1=${id}&param2=1&param3=1`;
const CPCA_TEXTO = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1";
const LGAP = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1";

type Caso = { omision: string; tipo: string; orden: string; voto: string; href: string };

const CASOS: Caso[] = [
  {
    omision: "Una municipalidad no construye ni repara aceras ni hace cumplir a los propietarios su deber de hacerlo",
    tipo: "Material",
    orden: "Cesar la inactividad, presentar un cronograma en un mes y construir las aceras de forma sustitutiva.",
    voto: "TCA, Sección VI, 26-2021",
    href: NEXUS("sen-1-0034-1025966"),
  },
  {
    omision: "Una municipalidad costera lleva años sin dictar el reglamento de cánones que la norma le exige",
    tipo: "Formal normativa",
    orden: "Actuaciones previas en tres meses y el reglamento publicado en un año como máximo.",
    voto: "TCA, Sección VI, 74-2020",
    href: NEXUS("sen-1-0034-980061"),
  },
  {
    omision: "El Poder Ejecutivo no reglamenta la prueba psicológica que manda la Ley de Tránsito",
    tipo: "Formal normativa",
    orden: "Reglamentar en seis meses; la Sala Primera confirmó la condena.",
    voto: "Sala Primera, 1242-F-S1-2011",
    href: NEXUS("sen-1-0004-767405"),
  },
  {
    omision: "La CCSS no actualiza los perfiles de puesto de sus ingenieros",
    tipo: "Material",
    orden: "Cesar la inactividad y concluir los estudios técnicos en dos meses.",
    voto: "TCA, Sección VI, 7849-2025",
    href: NEXUS("sen-1-0034-1331940"),
  },
  {
    omision: "El Estado deja de pagar cuotas obrero-patronales a su cargo",
    tipo: "Material",
    orden: "Pagar las trece cuotas adeudadas, con intereses y costas.",
    voto: "TCA, Sección VI, 29-2023",
    href: NEXUS("sen-1-0034-1153574"),
  },
  {
    omision: "La CCSS demora la cirugía de un paciente, que pierde la visión de un ojo",
    tipo: "Material",
    orden: "Indemnizar el daño: la demora es funcionamiento anormal por inactividad material.",
    voto: "Sala Primera, 976-F-S1-2010",
    href: NEXUS("sen-1-0034-487267"),
  },
  {
    omision: "El MOPT no repara un puente peatonal en mal estado y un niño muere al caer",
    tipo: "Material",
    orden: "Indemnizar los daños y perjuicios (responsabilidad por inactividad).",
    voto: "Sala Primera, 74-F-2007",
    href: NEXUS("sen-1-0004-764428"),
  },
];

export function EjemplosInactividad() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-ejemplos-inactividad">
      <header className="gc-fig-head">
        <RunningHead title="Inactividad" locator="Figura 1" />
        <p id="fig-ejemplos-inactividad" className="gc-fig-title">
          Siete ejemplos de inactividad administrativa que los tribunales ordenaron corregir o indemnizar
        </p>
        <p className="gc-fig-lead">Qué dejó de hacer la Administración, qué clase de inactividad era y qué ordenó el juez.</p>
      </header>
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Qué dejó de hacer la Administración</th>
                <th scope="col">Qué ordenó el juez</th>
              </tr>
            </thead>
            <tbody>
              {CASOS.map((c) => (
                <tr key={c.voto}>
                  <td className="gc-recurso">
                    {c.omision} <span className="gc-fig-ref">Inactividad {c.tipo.toLowerCase()}</span>
                  </td>
                  <td>
                    {c.orden}{" "}
                    <a href={c.href} {...EXT} className="gc-fig-ref">
                      {c.voto}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-source">
        <span>Fuente:</span> sentencias citadas, en su texto publicado en Nexus del Poder Judicial.
      </p>
    </figure>
  );
}

type Ruta = { situacion: string; via: string; norma: string };

const RUTAS: Ruta[] = [
  {
    situacion: "No contestan una petición o una consulta simple",
    via: "Derecho de petición: respuesta en diez días hábiles. Si no llega, recurso de amparo ante la Sala Constitucional.",
    norma: "Constitución, art. 27; Ley 9097, art. 6",
  },
  {
    situacion: "No resuelven un procedimiento o un recurso administrativo",
    via: "Puede tenerse por rechazado (silencio negativo) y demandarse el fondo, o pedirse al Tribunal Contencioso que ordene resolver (amparo de legalidad).",
    norma: "LGAP, art. 261; CPCA, art. 31.6",
  },
  {
    situacion: "No responden una solicitud de permiso, licencia o autorización",
    via: "Al mes de presentada con todos los requisitos opera el silencio positivo: la solicitud se tiene por aprobada.",
    norma: "LGAP, arts. 330 y 331",
  },
  {
    situacion: "No hacen lo que la ley les ordena: una obra, un pago, un reglamento, integrar un órgano, fiscalizar",
    via: "Demanda contencioso-administrativa contra la conducta omisiva, con requerimiento previo de quince días o sin él.",
    norma: "CPCA, arts. 35, 36.e y 42.2.g",
  },
  {
    situacion: "La omisión ya causó un daño",
    via: "Pretensión indemnizatoria, sola o junto con la condena a actuar; prescribe en cuatro años.",
    norma: "LGAP, arts. 190 y 198; CPCA, art. 42.2.j",
  },
];

export function RutasSilencio() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-rutas-silencio">
      <header className="gc-fig-head">
        <RunningHead title="Qué hacer" locator="Figura 2" />
        <p id="fig-rutas-silencio" className="gc-fig-title">
          Cuando la Administración no responde: la vía depende de lo que dejó de hacer
        </p>
        <p className="gc-fig-lead">No contestar una petición, no resolver un recurso y no cumplir una obligación son supuestos distintos.</p>
      </header>
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Situación</th>
                <th scope="col">Vía</th>
              </tr>
            </thead>
            <tbody>
              {RUTAS.map((r) => (
                <tr key={r.situacion}>
                  <td className="gc-recurso">{r.situacion}</td>
                  <td>
                    {r.via} <span className="gc-fig-ref">{r.norma}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        La Procuraduría General precisó que, cuando el órgano que debía resolver no está integrado, el remedio adecuado es
        la impugnación de la conducta omisiva (dictamen C-039-2026).
      </p>
      <p className="gc-fig-source">
        <span>Fuente:</span> Constitución Política, Ley de Regulación del Derecho de Petición, Ley General de la
        Administración Pública (
        <a href={LGAP} {...EXT}>
          SINALEVI
        </a>
        ) y Código Procesal Contencioso-Administrativo (
        <a href={CPCA_TEXTO} {...EXT}>
          SINALEVI
        </a>
        ), textos vigentes; Sala Constitucional, votos 2008-5322 y 2025-10114.
      </p>
    </figure>
  );
}

type Paso = { titulo: string; texto: string; norma: string };

const PASOS: Paso[] = [
  {
    titulo: "Identificar la obligación",
    texto: "Ubicar la norma, el contrato o el acto propio que impone a la Administración una conducta concreta a favor de quien reclama.",
    norma: "CPCA, art. 36.e",
  },
  {
    titulo: "Requerir, si conviene",
    texto: "Pedir por escrito al órgano o ente que adopte la conducta debida en quince días. Es facultativo; si la omisión persiste, la vía queda expedita.",
    norma: "CPCA, art. 35.1",
  },
  {
    titulo: "Demandar",
    texto: "Pedir la declaración de que la omisión es ilegítima, la condena a realizar la conducta y, si hubo daño, la indemnización. Si hay urgencia, solicitar una medida cautelar.",
    norma: "CPCA, arts. 19 y 42.2",
  },
  {
    titulo: "Plazo judicial de quince días",
    texto: "Si no hubo requerimiento previo, el juez concede al jerarca quince días hábiles con el proceso suspendido. Si cumple, el proceso termina sin costas; si no, continúa.",
    norma: "CPCA, art. 35.2",
  },
  {
    titulo: "Invitación a cumplir",
    texto: "En cualquier momento antes de la sentencia, el juez puede instar a la Administración a verificar la conducta y darle cinco días para pronunciarse.",
    norma: "CPCA, art. 118",
  },
  {
    titulo: "Sentencia",
    texto: "Si la conducta es reglada, se impone; si es discrecional, se condena a ejercer la potestad dentro de un plazo y de los límites que fije el juez.",
    norma: "CPCA, arts. 122, 127 y 128",
  },
  {
    titulo: "Ejecución",
    texto: "Si la Administración no cumple, el juez ejecutor puede multar al funcionario y, al final, adoptar por su cuenta la conducta omitida con cargo a la Administración.",
    norma: "CPCA, arts. 159 y 161",
  },
];

export function RecorridoOmision() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-recorrido-omision">
      <header className="gc-fig-head">
        <RunningHead title="Demanda" locator="Figura 3" />
        <p id="fig-recorrido-omision" className="gc-fig-title">
          Cómo se demanda una omisión de la Administración, paso a paso
        </p>
        <p className="gc-fig-lead">El Código da a la Administración dos oportunidades de cumplir antes de la sentencia.</p>
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
              {PASOS.map((p, i) => (
                <tr key={p.titulo}>
                  <td className="gc-recurso">
                    {i + 1}. {p.titulo}
                  </td>
                  <td>
                    {p.texto} <span className="gc-fig-ref">{p.norma}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-source">
        <span>Fuente:</span> Código Procesal Contencioso-Administrativo, texto vigente (
        <a href={CPCA_TEXTO} {...EXT}>
          SINALEVI
        </a>
        ).
      </p>
    </figure>
  );
}

type Fuente = { titulo: string; detalle: string; href?: string };
type Criterio = { numero: string; organo: string; fecha: string; tema: string; criterio: string; href: string; gc?: boolean };

const NORMAS: Fuente[] = [
  { titulo: "Código Procesal Contencioso-Administrativo", detalle: "Ley N.° 8508, arts. 31, 35, 36, 40, 42, 118, 122, 127, 128, 159 y 161", href: CPCA_TEXTO },
  { titulo: "Ley General de la Administración Pública", detalle: "Ley N.° 6227, arts. 190, 198, 261, 330 y 331", href: LGAP },
  { titulo: "Ley de Regulación del Derecho de Petición", detalle: "Ley N.° 9097, art. 6" },
  { titulo: "Constitución Política", detalle: "Arts. 27, 41 y 49" },
];

const S1 = "Sala Primera";
const TCA6 = "Tribunal Contencioso Administrativo, Sección VI";
const SC = "Sala Constitucional";

const JURISPRUDENCIA: Criterio[] = [
  { numero: "Voto 74-F-2007", organo: S1, fecha: "02-02-2007", tema: "Definición", criterio: "Hay inactividad material cuando, existiendo una obligación de dar o hacer, no se despliega la actividad debida; la Administración responde por sus daños.", href: NEXUS("sen-1-0004-764428"), gc: true },
  { numero: "Sentencia 2810-2009", organo: TCA6, fecha: "14-12-2009", tema: "Art. 35.2", criterio: "Si la Administración cumple en los quince días, el proceso termina sin costas; la conducta debe resolverse motivadamente y notificarse.", href: NEXUS("sen-1-0034-459037") },
  { numero: "Voto 116-F-S1-2010", organo: S1, fecha: "22-01-2010", tema: "Discrecionalidad", criterio: "El juez no sustituye al órgano mientras subsista un margen de discrecionalidad, salvo que se haya reducido a cero.", href: NEXUS("sen-1-0004-765278"), gc: true },
  { numero: "Voto 976-F-S1-2010", organo: S1, fecha: "17-08-2010", tema: "Responsabilidad", criterio: "La demora de la CCSS en autorizar una cirugía es funcionamiento anormal por inactividad material.", href: NEXUS("sen-1-0034-487267"), gc: true },
  { numero: "Voto 1242-F-S1-2011", organo: S1, fecha: "26-09-2011", tema: "Omisión reglamentaria", criterio: "El juez debe corregir la omisión de reglamentar una ley; el control universal alcanza también las omisiones.", href: NEXUS("sen-1-0004-767405") },
  { numero: "Voto 383-F-S1-2018", organo: S1, fecha: "26-04-2018", tema: "Responsabilidad", criterio: "La municipalidad que no fiscaliza, estando en posición de garante, responde por el daño.", href: NEXUS("sen-1-0004-892637") },
  { numero: "Sentencia 74-2020", organo: TCA6, fecha: "12-06-2020", tema: "Inactividad normativa", criterio: "Define la inactividad formal normativa y ordena a una municipalidad dictar su reglamento de cánones.", href: NEXUS("sen-1-0034-980061") },
  { numero: "Sentencia 26-2021", organo: TCA6, fecha: "11-03-2021", tema: "Condena a hacer", criterio: "La municipalidad debe fiscalizar y, en último término, construir las aceras de forma sustitutiva.", href: NEXUS("sen-1-0034-1025966") },
  { numero: "Voto 1820-F-S1-2022", organo: S1, fecha: "04-08-2022", tema: "Responsabilidad", criterio: "La falta de mantenimiento de la red vial es inactividad que obliga a indemnizar.", href: NEXUS("sen-1-0004-1106645") },
  { numero: "Sentencia 29-2023", organo: TCA6, fecha: "28-04-2023", tema: "Formal y material", criterio: "Distingue la inactividad material de la formal; la omisión no está sujeta a la caducidad del art. 39.", href: NEXUS("sen-1-0034-1153574") },
  { numero: "Sentencia 5768-2025", organo: "Tribunal Contencioso Administrativo", fecha: "12-06-2025", tema: "Plazo", criterio: "La omisión es de efecto perenne mientras no se adopte la conducta debida (art. 40).", href: NEXUS("sen-1-0034-1308537") },
  { numero: "Sentencia 7849-2025", organo: TCA6, fecha: "02-08-2025", tema: "Requisito", criterio: "La sola falta de acción no es ilegítima; se requiere un mandato preexistente de actuar.", href: NEXUS("sen-1-0034-1331940") },
  { numero: "Voto 259-F-S1-2026", organo: S1, fecha: "11-02-2026", tema: "Responsabilidad", criterio: "Los daños sufridos mientras persiste un funcionamiento anormal son indemnizables.", href: NEXUS("sen-1-0004-1366405") },
  { numero: "Voto 2008-5322", organo: SC, fecha: "09-04-2008", tema: "Amparo de legalidad", criterio: "El incumplimiento de plazos para resolver procedimientos y recursos se discute ante la jurisdicción contencioso-administrativa.", href: NEXUS("sen-1-0007-408073") },
  { numero: "Voto 2025-10114", organo: SC, fecha: "01-04-2025", tema: "Petición y recursos", criterio: "La falta de resolución de un recurso se tutela por el art. 41 constitucional, en la vía contenciosa.", href: NEXUS("sen-1-0007-1285095") },
];

const PROCURADURIA: Fuente[] = [
  { titulo: "Dictamen C-052-1999", detalle: "16-03-1999 · Responsabilidad por inactividad (art. 190 LGAP)", href: PGR("8149") },
  { titulo: "Dictamen C-272-2007", detalle: "16-08-2007 · Inactividad material en el reajuste de pensiones", href: PGR("14723") },
  { titulo: "Opinión jurídica OJ-016-2010", detalle: "13-04-2010 · Condena a cumplir un deber legal (arts. 36.e y 42.2.g CPCA)", href: PGR("16262") },
  { titulo: "Dictamen C-039-2026", detalle: "19-02-2026 · La falta de integración de un órgano es inactividad material", href: PGR("25338") },
];

const DOCTRINA: Fuente[] = [
  { titulo: "Óscar Eduardo González Camacho, La justicia administrativa frente a la inactividad material de la Administración Pública", detalle: "Tesis doctoral, Universidad de Alcalá, 1998; publicada por IJUSA en 2001", href: "/articulos/libro-justicia-administrativa" },
  { titulo: "Óscar Eduardo González Camacho, caps. XII y XIII de El nuevo proceso contencioso-administrativo", detalle: "Poder Judicial, Escuela Judicial, 2006, pp. 400-404 y 484-493" },
];

const ANTECEDENTES: Fuente[] = [
  { titulo: "CPCA, subcomisión del expediente 15.134, acta n.º 10", detalle: "09/10-03-2005, folios 811 a 814 · El requerimiento previo en la conducta omisiva" },
  { titulo: "CPCA, subcomisión del expediente 15.134, acta n.º 12", detalle: "16-03-2005, folios 885 a 902 · Propuestas de la Procuraduría y rechazo del requerimiento preceptivo" },
  { titulo: "CPCA, subcomisión del expediente 15.134, acta n.º 13", detalle: "30-03-2005, folios 916 y 917 · El control universal y las conductas omisivas (art. 36)" },
  { titulo: "CPCA, Comisión Permanente de Asuntos Jurídicos, sesión n.º 38", detalle: "21-03-2006 · Moción 16-38-CJ: redacción final del art. 35" },
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
                  <a href={f.href} {...(f.href.startsWith("http") ? EXT : {})}>
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

export function FuentesInactividad() {
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
                  <a href={c.href} {...EXT}>
                    {c.numero}
                  </a>
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
      <Grupo titulo="Doctrina" items={DOCTRINA} />
      <Grupo titulo="Antecedentes legislativos" items={ANTECEDENTES} />
      <p className="gc-fig-source">
        Textos normativos: SINALEVI y bases normativas de Corporación GC, en su versión vigente. Jurisprudencia: Nexus del
        Poder Judicial. Dictámenes: Sistema Costarricense de Información Jurídica. Actas: expediente legislativo 15.134 de la
        Asamblea Legislativa.
      </p>
    </div>
  );
}
