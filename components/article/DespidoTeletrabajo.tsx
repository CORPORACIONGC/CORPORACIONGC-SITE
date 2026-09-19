/* Figuras de la pieza «Despido por teletrabajo en el sector público».
   Mismo lenguaje editorial que las demás guías (bloque .gc-fig de
   app/globals.css). La figura 2 enuncia las preguntas que decide todo
   expediente de despido sin desarrollar su aplicación: la pieza orienta y
   deja la estrategia para el análisis de cada caso. */

const NEXUS = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;
const SCIJ = (id: number) =>
  `https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=${id}`;

const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;

function FigHead({ id, n, kicker, title, lead }: { id: string; n: number; kicker: string; title: string; lead?: string }) {
  return (
    <header className="gc-fig-head">
      <span className="gc-fig-eyebrow">
        Figura {n} · {kicker}
      </span>
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

/* ── Figura 1. El procedimiento de despido de la Ley 10159 ──────────── */

const PASOS: { quien: string; que: string; plazo: string; rama?: { cuando: string; que: string } }[] = [
  {
    quien: "Jerarca institucional",
    que: "Conoce la posible falta y, si hace falta, ordena una investigación preliminar. Esa investigación no abre todavía el procedimiento.",
    plazo: "Un mes para iniciarla, bajo pena de prescripción",
  },
  {
    quien: "Jerarca institucional",
    que: "Decide abrir el procedimiento y nombra el órgano director. Desde ese momento corre el plazo para dictar el acto final.",
    plazo: "Dos meses para concluir",
  },
  {
    quien: "Órgano director",
    que: "Formula los cargos por escrito, da traslado a la persona servidora y la convoca a una comparecencia oral y privada. Ahí se recibe la prueba y se oyen los alegatos.",
    plazo: "Quince días para oponerse y ofrecer prueba",
    rama: {
      cuando: "Si no hay oposición en plazo",
      que: "el jerarca puede dictar el despido sin más trámite, salvo que la persona pruebe que no fue notificada o que estuvo impedida.",
    },
  },
  {
    quien: "Jerarca institucional",
    que: "Con el informe del órgano director, resuelve: despide, archiva por falta de mérito o impone una sanción menor si la falta no amerita el despido.",
    plazo: "Dentro de los dos meses",
  },
  {
    quien: "Tribunal de Servicio Civil",
    que: "Conoce la apelación en ambos efectos. Puede confirmar, rebajar la sanción o revocar el despido con restitución y salarios caídos. Su resolución agota la vía administrativa.",
    plazo: "Cinco días hábiles para recurrir",
  },
];

export function ProcedimientoDespido10159() {
  return (
    <figure className="gc-fig gc-fig-flujo" aria-labelledby="fig-despido-10159">
      <FigHead
        id="fig-despido-10159"
        n={1}
        kicker="Paso a paso"
        title="Cómo se despide hoy a un servidor del Poder Ejecutivo"
        lead="Procedimiento especial de la Ley Marco de Empleo Público, vigente desde marzo de 2023 para los procedimientos que se inician desde entonces."
      />
      <ol className="gc-flujo">
        <li className="gc-flujo-cab" aria-hidden="true">
          <span />
          <span>Quién actúa</span>
          <span>Qué ocurre</span>
          <span>Plazo</span>
        </li>
        {PASOS.map((p, i) => (
          <li key={i} className="gc-flujo-paso">
            <span className="gc-fig-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="gc-flujo-quien">{p.quien}</span>
            <span className="gc-flujo-que">{p.que}</span>
            <span className="gc-flujo-plazo">{p.plazo}</span>
            {p.rama && (
              <span className="gc-flujo-rama">
                <b>{p.rama.cuando}:</b> {p.rama.que}
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="gc-fig-note">
        El inciso b) del artículo 21 da quince días para oponerse, y el inciso g) se refiere a «diez días» para las
        excepciones previas. La Sala Constitucional advirtió esa posible contradicción y aun así consideró válido el
        procedimiento. Conviene no dejar ese punto al azar.
      </p>
      <FigSource>
        Ley Marco de Empleo Público (Ley N.° 10159), arts. 21, 22 y 50 y transitorio III; Sala Constitucional, voto{" "}
        <a href={NEXUS("sen-1-0007-1049802")} {...EXT}>
          17098-2021
        </a>
        .
      </FigSource>
    </figure>
  );
}

/* ── Figura 2. Plazos del procedimiento ──────────────────────────────── */

const PLAZOS: { plazo: string; norma: string; quien: string; para: string }[] = [
  {
    plazo: "Un mes",
    norma: "art. 21 a)",
    quien: "Administración",
    para: "Iniciar la investigación preliminar desde que el jerarca conoce la posible falta, bajo pena de prescripción. El mismo mes corre si la investigación se paraliza por culpa de la Administración.",
  },
  {
    plazo: "Dos meses",
    norma: "art. 21 a)",
    quien: "Administración",
    para: "Concluir el procedimiento con acto final, desde el nombramiento del órgano director.",
  },
  {
    plazo: "Quince días",
    norma: "art. 21 b)",
    quien: "Persona servidora",
    para: "Oponerse al traslado de cargos, presentar descargos y ofrecer prueba. El inciso g) menciona diez días para las excepciones previas.",
  },
  {
    plazo: "Cinco días hábiles",
    norma: "art. 22",
    quien: "Persona servidora",
    para: "Presentar revocatoria, apelación o ambas contra la resolución de despido. Sin recurso, el despido queda firme.",
  },
  {
    plazo: "Un mes",
    norma: "art. 22",
    quien: "Administración",
    para: "Hacer efectivo el despido autorizado por resolución firme. Es un plazo de caducidad.",
  },
];

export function PlazosDespido10159() {
  return (
    <figure className="gc-fig gc-fig-tabla" aria-labelledby="fig-plazos-despido">
      <FigHead
        id="fig-plazos-despido"
        n={2}
        kicker="Plazos"
        title="Los plazos del procedimiento de despido"
        lead="Unos corren contra la Administración y otros contra la persona servidora. Todos se cuentan desde fechas que constan en el expediente."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Plazo</th>
                <th scope="col">Corre para</th>
                <th scope="col">Para qué</th>
              </tr>
            </thead>
            <tbody>
              {PLAZOS.map((p, i) => (
                <tr key={i}>
                  <td className="gc-recurso">
                    {p.plazo}
                    <span className="gc-fig-ref">{p.norma}</span>
                  </td>
                  <td>{p.quien}</td>
                  <td>{p.para}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>Ley Marco de Empleo Público (Ley N.° 10159), arts. 21 y 22.</FigSource>
    </figure>
  );
}

/* ── Figura 3. Las preguntas que decide todo expediente ─────────────── */

const PREGUNTAS: { q: string; por: string }[] = [
  {
    q: "¿En qué falta encaja la conducta?",
    por: "Abandono, ausencia, uso indebido del equipo o falta grave son figuras distintas, con requisitos y escalas de sanción propias. La calificación que se elija abre o cierra la puerta al despido.",
  },
  {
    q: "¿Qué prueba realmente el registro informático?",
    por: "Un registro técnico acredita un hecho técnico. Si además prueba que la persona dejó de trabajar, en qué días y con qué efectos, es otra cuestión, y también importa cómo se obtuvo.",
  },
  {
    q: "¿Se actuó a tiempo?",
    por: "La potestad disciplinaria tiene plazos de prescripción y de conclusión que corren contra la Administración. Contarlos exige reconstruir cuándo conoció la falta el jerarca.",
  },
  {
    q: "¿Los cargos son de esta persona?",
    por: "Un procedimiento con muchas personas investigadas exige una imputación individual para cada una, con hechos, fechas y prueba propios.",
  },
  {
    q: "¿Las medidas provisionales tienen base?",
    por: "Retirar el teletrabajo o suspender a alguien mientras se investiga son decisiones con requisitos legales y de motivación, y pueden discutirse dentro del procedimiento.",
  },
];

export function PreguntasExpedienteDespido() {
  return (
    <figure className="gc-fig gc-fig-ruta" aria-labelledby="fig-preguntas-despido">
      <FigHead
        id="fig-preguntas-despido"
        n={3}
        kicker="Revisión del expediente"
        title="Cinco preguntas que decide todo procedimiento de despido"
        lead="Cada una tiene reglas, plazos y precedentes propios. La respuesta depende de la notificación, la adenda de teletrabajo y la prueba de cada persona."
      />
      <div className="gc-fig-steps">
        {PREGUNTAS.map((p, i) => (
          <section key={p.q} className="gc-fig-step">
            <div className="gc-fig-step-q">
              <span className="gc-fig-num">{String(i + 1).padStart(2, "0")}</span>
              {p.q}
            </div>
            <div className="gc-fig-step-a">
              <p>{p.por}</p>
            </div>
          </section>
        ))}
      </div>
      <FigSource>
        Ley Marco de Empleo Público, art. 21; Ley para regular el teletrabajo (Ley N.° 9738); Código de Trabajo, arts. 72
        y 81; Ley General de la Administración Pública, arts. 211 y 272.
      </FigSource>
    </figure>
  );
}

/* ── Figura 4. Lo que han resuelto los tribunales ───────────────────── */

const CASOS: { caso: string; lugar: string; probado: string; resultado: string }[] = [
  {
    caso: "Sala Segunda, voto 2018-539",
    lugar: "Costa Rica · empresa privada",
    probado: "Días sin conexión a la VPN, tareas incumplidas, quejas de clientes y proyectos reasignados.",
    resultado: "Despido justificado. La Sala exigió probar la falta «de manera indubitable».",
  },
  {
    caso: "Cheikho v. Insurance Australia Group, [2023] FWC 1792",
    lugar: "Australia",
    probado: "Actividad de teclado muy inferior a la esperada durante semanas, más incumplimientos documentados antes del despido.",
    resultado: "Despido confirmado.",
  },
  {
    caso: "Kumar v. Hansen Corporation, [2026] FWC 519",
    lugar: "Australia",
    probado: "Diez minutos de actividad frente a 7,5 horas reportadas en las hojas de horas.",
    resultado: "Despido confirmado por las horas falsas. El tribunal aceptó que leer no deja pulsaciones.",
  },
  {
    caso: "Wells Fargo, 2024",
    lugar: "Estados Unidos",
    probado: "Simulación de actividad del teclado, según los reportes que el banco envió al regulador.",
    resultado: "Despidos sin decisión judicial conocida.",
  },
  {
    caso: "Juzgado de lo Social n.° 4 de Santander, 2021",
    lugar: "España",
    probado: "Desconexiones de un teletrabajador, sin prueba de que fueran voluntarias.",
    resultado: "Despido improcedente.",
  },
];

export function CasosTeletrabajoTribunales() {
  return (
    <figure className="gc-fig gc-fig-tabla" aria-labelledby="fig-casos-teletrabajo">
      <FigHead
        id="fig-casos-teletrabajo"
        n={4}
        kicker="Precedentes"
        title="Monitoreo, teletrabajo y despido en los tribunales"
        lead="Ningún tribunal, en Costa Rica ni fuera, parece haber resuelto todavía un despido por un simulador de movimiento del mouse."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Caso</th>
                <th scope="col">Qué se probó</th>
                <th scope="col">Resultado</th>
              </tr>
            </thead>
            <tbody>
              {CASOS.map((c) => (
                <tr key={c.caso}>
                  <td className="gc-recurso">
                    {c.caso}
                    <span className="gc-fig-ref">{c.lugar}</span>
                  </td>
                  <td>{c.probado}</td>
                  <td>{c.resultado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Sala Segunda, voto{" "}
        <a href={NEXUS("sen-1-0005-842411")} {...EXT}>
          2018-539
        </a>
        ; Fair Work Commission,{" "}
        <a href="https://www.fwc.gov.au/documents/decisionssigned/pdf/2023fwc1792.pdf" {...EXT}>
          [2023] FWC 1792
        </a>{" "}
        y{" "}
        <a href="https://www.fwc.gov.au/documents/decisionssigned/pdf/2026fwc519.pdf" {...EXT}>
          [2026] FWC 519
        </a>
        ;{" "}
        <a href="https://www.bankingdive.com/news/wells-fires-employees-faking-productivity-finra/719033/" {...EXT}>
          Banking Dive
        </a>
        , 2024;{" "}
        <a
          href="https://www.poderjudicial.es/cgpj/en/Judiciary/Novelties/Improcedente-el-despido-de-un-teletrabajador-porque-no-se-puede-acreditar-que-las-desconexiones-fueran-voluntarias"
          {...EXT}
        >
          Consejo General del Poder Judicial de España
        </a>
        , 2021.
      </FigSource>
    </figure>
  );
}

/* ── Fuentes ─────────────────────────────────────────────────────────── */

type Fuente = { titulo: string; detalle: string; href: string };
type Criterio = { numero: string; organo: string; fecha: string; tema: string; criterio: string; href: string };

const OFICIALES: Fuente[] = [
  {
    titulo: "Hacienda inicia gestión de despido para 36 funcionarios",
    detalle: "Ministerio de Hacienda, comunicado CP-48-2026, 10 de setiembre de 2026",
    href: "https://www.hacienda.go.cr/docs/CP48INICIO_GESTION_DE_DESPIDO_PARA_36_FUNCIONARIOS.pdf",
  },
  {
    titulo: "Ministerio de Hacienda inicia proceso de despido de 36 funcionarios en teletrabajo",
    detalle: "La Nación, 10 de setiembre de 2026",
    href: "https://www.nacion.com/economia/ministerio-de-hacienda-inicia-proceso-de-despido/HXWOQH2VGFGQDMWZLFYCWXILIU/story/",
  },
  {
    titulo: "Hacienda inicia gestión de despido contra 36 funcionarios por simular actividad en teletrabajo",
    detalle: "Delfino, 10 de setiembre de 2026",
    href: "https://delfino.cr/2026/09/hacienda-inicia-gestion-de-despido-contra-36-funcionarios-por-simular-actividad-en-teletrabajo",
  },
];

const NORMAS: Fuente[] = [
  { titulo: "Ley Marco de Empleo Público", detalle: "Ley N.° 10159, arts. 21, 22 y 50 y transitorio III", href: SCIJ(96521) },
  { titulo: "Ley para regular el teletrabajo", detalle: "Ley N.° 9738", href: SCIJ(89753) },
  { titulo: "Código de Trabajo", detalle: "Ley N.° 2, arts. 72, 81 y 414", href: SCIJ(8045) },
  { titulo: "Ley General de la Administración Pública", detalle: "Ley N.° 6227, arts. 211 y 272", href: SCIJ(13231) },
];

const JURISPRUDENCIA: Criterio[] = [
  { numero: "Voto 15-90", organo: "Sala Constitucional", fecha: "05-01-1990", tema: "Debido proceso", criterio: "El derecho de defensa rige también en cualquier procedimiento administrativo.", href: NEXUS("sen-1-0007-84812") },
  { numero: "Voto 1739-92", organo: "Sala Constitucional", fecha: "01-07-1992", tema: "Intimación e imputación", criterio: "Los hechos imputados deben comunicarse de forma oportuna, expresa, precisa, clara y circunstanciada.", href: NEXUS("sen-1-0007-83512") },
  { numero: "Voto 2018-539", organo: "Sala Segunda", fecha: "22-03-2018", tema: "Teletrabajo", criterio: "La prueba de la falta recae en el empleador, que debe acreditarla de manera indubitable en modo, tiempo y lugar.", href: NEXUS("sen-1-0005-842411") },
  { numero: "Voto 17098-2021", organo: "Sala Constitucional", fecha: "31-07-2021", tema: "Ley Marco de Empleo Público", criterio: "Los artículos 21 y 22 no violan el debido proceso, pese a una posible contradicción en el plazo para oponerse.", href: NEXUS("sen-1-0007-1049802") },
  { numero: "Voto 2025-35473", organo: "Sala Constitucional", fecha: "28-10-2025", tema: "Vía procesal", criterio: "Los reclamos de un servidor de Hacienda sobre su procedimiento disciplinario corresponden a la vía común; el amparo es inadmisible.", href: NEXUS("sen-1-0007-1347309") },
];

function Grupo({ titulo, items }: { titulo: string; items: Fuente[] }) {
  return (
    <section className="gc-juris-grupo">
      <span className="gc-fig-label">{titulo}</span>
      <ol>
        {items.map((f) => (
          <li key={f.href} className="gc-juris-item gc-juris-item--simple">
            <span className="gc-juris-id">
              <b>
                <a href={f.href} {...EXT}>
                  {f.titulo}
                </a>
              </b>
              <span className="gc-juris-org">{f.detalle}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function FuentesDespidoTeletrabajo() {
  return (
    <div className="gc-fig gc-biblio">
      <Grupo titulo="Fuentes oficiales y prensa" items={OFICIALES} />
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
              </span>
            </li>
          ))}
        </ol>
      </section>
      <p className="gc-fig-source">
        Textos normativos: SINALEVI, en su versión vigente. Jurisprudencia nacional: Nexus del Poder Judicial.
        Precedentes extranjeros: sitios oficiales de la Fair Work Commission y del Consejo General del Poder Judicial.
      </p>
    </div>
  );
}
