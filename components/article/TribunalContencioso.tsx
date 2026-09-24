/* Figuras de la guía «Tribunal Contencioso Administrativo de Costa Rica».
   Mismo lenguaje editorial que las demás guías (bloque .gc-fig de
   app/globals.css). Los datos de contacto salen del pie de las resoluciones
   que el Tribunal notificó en 2026; la cronología, de la hemeroteca del
   Poder Judicial (Observatorio Judicial, en actualidadjudicial.poder-judicial.go.cr). */

import { RunningHead } from "@/components/ui/RunningHead";

const NEXUS = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;
const SCIJ = (id: number) =>
  `https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=${id}`;
const AJ = (ruta: string) => `https://actualidadjudicial.poder-judicial.go.cr/${ruta}`;

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

/* ── Figura 1. Quién hace qué ────────────────────────────────────────── */

const ORGANOS: { organo: string; donde: string; que: string; norma: string }[] = [
  {
    organo: "Juez tramitador",
    donde: "Tribunal Contencioso Administrativo",
    que: "Admite la demanda, da traslado, resuelve las medidas cautelares y dirige la audiencia preliminar, donde sanea el proceso, fija los hechos en discusión y admite la prueba.",
    norma: "arts. 61, 63 y 90",
  },
  {
    organo: "Juez conciliador",
    donde: "Tribunal Contencioso Administrativo",
    que: "Convoca a las partes a conciliar. La Administración puede hacerlo sobre la conducta impugnada, su validez y sus efectos.",
    norma: "arts. 70 y 72 a 75",
  },
  {
    organo: "Tribunal de juicio",
    donde: "Tribunal Contencioso Administrativo",
    que: "Órgano colegiado de jueces decisores. Celebra el juicio oral y público y dicta la sentencia.",
    norma: "arts. 98, 99 y 111",
  },
  {
    organo: "Juez ejecutor",
    donde: "Tribunal Contencioso Administrativo",
    que: "Hace cumplir la sentencia firme. Tiene los poderes necesarios para su plena eficacia y puede pedir el auxilio de la Fuerza Pública.",
    norma: "arts. 155 y 156",
  },
  {
    organo: "Contralor no jerárquico",
    donde: "Tribunal Contencioso Administrativo",
    que: "Resuelve las apelaciones contra acuerdos y resoluciones municipales, la llamada jerarquía impropia.",
    norma: "Const. art. 173; arts. 189 y 190",
  },
  {
    organo: "Tribunal de Apelaciones",
    donde: "De lo Contencioso Administrativo y Civil de Hacienda",
    que: "Conoce la apelación contra los pocos autos que la admiten, como el que fija la caución de una cautelar o el que la resuelve en definitiva.",
    norma: "voto 10-2026-I",
  },
  {
    organo: "Tribunal de Casación",
    donde: "De lo Contencioso Administrativo y Civil de Hacienda",
    que: "Casación cuando la conducta viene de colegios profesionales, entes públicos no estatales, juntas con personalidad jurídica o empresas públicas organizadas bajo formas de Derecho privado, y en todo proceso sobre sanciones disciplinarias y multas administrativas. También resuelve los conflictos de competencia.",
    norma: "arts. 5 y 136",
  },
  {
    organo: "Sala Primera",
    donde: "Corte Suprema de Justicia",
    que: "Casación cuando la conducta viene del Poder Ejecutivo, los ministerios, la Contraloría, las instituciones descentralizadas o las municipalidades, entre otros, y en todo proceso sobre la validez de un reglamento.",
    norma: "art. 135",
  },
];

export function OrganosJurisdiccionContenciosa() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-organos-contencioso">
      <FigHead
        id="fig-organos-contencioso"
        n={1}
        kicker="Organización"
        title="Quién hace qué en la jurisdicción contencioso-administrativa"
        lead="Un mismo expediente pasa por varias manos dentro del Tribunal. La casación se reparte entre dos órganos según quién dictó la conducta impugnada."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Órgano</th>
                <th scope="col">Qué hace</th>
              </tr>
            </thead>
            <tbody>
              {ORGANOS.map((o) => (
                <tr key={o.organo}>
                  <td className="gc-recurso">
                    {o.organo}
                    <span className="gc-fig-ref">{o.donde}</span>
                  </td>
                  <td>
                    {o.que} <span className="gc-fig-ref">{o.norma}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Código Procesal Contencioso-Administrativo (Ley N.° 8508); Constitución Política, art. 173; Tribunal de
        Apelaciones de lo Contencioso Administrativo, voto{" "}
        <a href={NEXUS("sen-1-0034-1396389")} {...EXT}>
          10-2026-I
        </a>
        ; Tribunal Contencioso Administrativo, voto{" "}
        <a href={NEXUS("sen-1-0034-1423788")} {...EXT}>
          5350-2026
        </a>
        .
      </FigSource>
    </figure>
  );
}

/* ── Figura 2. La ruta del proceso ───────────────────────────────────── */

const PASOS: { quien: string; que: string; plazo: string; rama?: { cuando: string; que: string } }[] = [
  {
    quien: "Parte actora",
    que: "Presenta la demanda con su prueba. Si la conducta impugnada causa daños graves mientras dura el juicio, pide además una medida cautelar, que puede solicitarse incluso antes de demandar.",
    plazo: "Un año, como regla (art. 39)",
    rama: {
      cuando: "Si hay urgencia",
      que: "el juez puede dictar de inmediato una medida provisionalísima mientras decide la cautelar, y en casos de extrema urgencia ordenar la cautelar sin oír antes a la otra parte (arts. 23 y 25).",
    },
  },
  {
    quien: "Juez tramitador",
    que: "Revisa la demanda. Si le falta un requisito, ordena corregirlo; si no se corrige, la archiva.",
    plazo: "Tres días hábiles para subsanar (art. 61)",
    rama: {
      cuando: "Si el asunto es urgente o de gran trascendencia para el interés público",
      que: "el tribunal puede darle trámite preferente: la contestación se reduce a cinco días hábiles y, si hace falta, todo se resuelve en una única audiencia (art. 60).",
    },
  },
  {
    quien: "Administración demandada",
    que: "Contesta la demanda y remite el expediente administrativo certificado. Si no lo remite, los hechos de la demanda pueden tenerse por ciertos.",
    plazo: "Quince o treinta días hábiles (art. 63)",
  },
  {
    quien: "Actora y juez conciliador",
    que: "La actora se refiere a la contestación y ofrece contraprueba. Después, salvo que las partes renuncien, se celebra la audiencia de conciliación.",
    plazo: "Tres días hábiles para la réplica (art. 70)",
  },
  {
    quien: "Juez tramitador",
    que: "Audiencia preliminar oral: sanea el proceso, resuelve las defensas previas, fija los hechos controvertidos y decide qué prueba se admite.",
    plazo: "Art. 90",
    rama: {
      cuando: "Si el asunto es de puro derecho",
      que: "las partes formulan sus conclusiones ahí mismo y el expediente pasa directamente al tribunal de juicio para sentencia (art. 98).",
    },
  },
  {
    quien: "Tribunal de juicio",
    que: "Juicio oral y público: se recibe la prueba y las partes presentan sus conclusiones.",
    plazo: "En la fecha que fija el tramitador con el Tribunal (art. 98)",
  },
  {
    quien: "Tribunal de juicio",
    que: "Delibera y dicta sentencia, oralmente y en el mismo acto cuando es posible.",
    plazo: "Si no, por escrito en cinco días hábiles; hasta quince en casos muy complejos (art. 111)",
  },
  {
    quien: "Parte vencida",
    que: "Puede presentar recurso de casación ante la Sala Primera o el Tribunal de Casación, según quién dictó la conducta.",
    plazo: "Quince días hábiles (art. 139)",
  },
  {
    quien: "Juez ejecutor",
    que: "Con la sentencia firme, dicta a pedido de parte las medidas necesarias para que se cumpla.",
    plazo: "Arts. 155 y 156",
  },
];

export function RutaProcesoContencioso() {
  return (
    <figure className="gc-fig gc-fig-flujo" aria-labelledby="fig-ruta-contencioso">
      <FigHead
        id="fig-ruta-contencioso"
        n={2}
        kicker="Paso a paso"
        title="Cómo avanza un proceso ante el Tribunal Contencioso Administrativo"
        lead="Es un proceso por audiencias: la mayor parte de lo importante se decide de viva voz, frente al juez."
      />
      <ol className="gc-flujo">
        <li className="gc-flujo-cab" aria-hidden="true">
          <span />
          <span>Quién actúa</span>
          <span>Qué ocurre</span>
          <span>Plazo o norma</span>
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
        El plazo de un año tiene reglas propias para las actuaciones materiales, los actos absolutamente nulos y las
        omisiones con efectos continuados (arts. 39 y 40). Contarlo mal es uno de los errores que no se corrigen
        después, porque el Tribunal examina la caducidad aunque nadie la alegue.
      </p>
      <FigSource>
        Código Procesal Contencioso-Administrativo (Ley N.° 8508), versión vigente en{" "}
        <a href={SCIJ(57436)} {...EXT}>
          SINALEVI
        </a>
        .
      </FigSource>
    </figure>
  );
}

/* ── Figura 3. Ficha del despacho ────────────────────────────────────── */

const FICHA: { dt: string; dd: React.ReactNode }[] = [
  { dt: "Nombre oficial", dd: "Tribunal Contencioso Administrativo y Civil de Hacienda" },
  {
    dt: "Sede",
    dd: "Segundo Circuito Judicial de San José, Goicoechea, Calle Blancos: 50 metros al oeste del Banco Nacional, frente a Café Dorado",
  },
  { dt: "Teléfono", dd: "2545-0099, extensiones 01-2707 y 01-2599" },
  {
    dt: "Correo electrónico",
    dd: <a href="mailto:tproca-sgdoc@poder-judicial.go.cr">tproca-sgdoc@poder-judicial.go.cr</a>,
  },
  { dt: "Expedientes", dd: "Electrónicos. Los números de este despacho terminan en 1027-CA, por ejemplo 26-004027-1027-CA" },
  { dt: "Casación", dd: "Sala Primera o Tribunal de Casación, según quién dictó la conducta impugnada" },
];

export function FichaTribunalContencioso() {
  return (
    <figure className="gc-fig" aria-labelledby="fig-ficha-tca">
      <FigHead
        id="fig-ficha-tca"
        n={3}
        kicker="Ficha"
        title="El Tribunal Contencioso Administrativo en una ficha"
        lead="Datos del despacho tal como aparecen en el pie de sus resoluciones de 2026."
      />
      <dl className="gc-fig-dl">
        {FICHA.map((f) => (
          <div key={f.dt}>
            <dt>{f.dt}</dt>
            <dd>{f.dd}</dd>
          </div>
        ))}
      </dl>
      <p className="gc-fig-note">
        El Poder Judicial puede cambiar teléfonos y correos sin aviso. Antes de enviar un escrito o de acudir a la
        sede, conviene confirmarlos en la resolución más reciente del expediente.
      </p>
      <FigSource>
        Tribunal Contencioso Administrativo y Civil de Hacienda, voto{" "}
        <a href={NEXUS("sen-1-0034-1423788")} {...EXT}>
          5350-2026
        </a>{" "}
        y demás resoluciones notificadas en 2026.
      </FigSource>
    </figure>
  );
}

/* ── Figura 4. Cronología ────────────────────────────────────────────── */

const HITOS: { fecha: string; que: React.ReactNode; fuente: { texto: string; href: string } }[] = [
  {
    fecha: "1966 a 2007",
    que: "Rige la Ley Reguladora de la Jurisdicción Contencioso-Administrativa. El juicio es escrito y pasa por un juzgado, el Tribunal en alzada y la Sala Primera en casación.",
    fuente: { texto: "Vol. 35", href: AJ("vol35/noticias_judiciales/notjud01.htm") },
  },
  {
    fecha: "Noviembre de 2005",
    que: "Se da a conocer el proyecto de Código de la Corte, redactado por una comisión que coordinó el magistrado Óscar González Camacho. Elimina la primera instancia y reparte el Tribunal entre un juez tramitador, jueces decisores y jueces de ejecución.",
    fuente: { texto: "Vol. 35", href: AJ("vol35/noticias_judiciales/notjud01.htm") },
  },
  {
    fecha: "Mayo de 2006",
    que: "Se sanciona el Código Procesal Contencioso-Administrativo, Ley N.° 8508 del 28 de abril de 2006.",
    fuente: { texto: "Vol. 42", href: AJ("vol42/noticias_judiciales/nj1.htm") },
  },
  {
    fecha: "Julio de 2006",
    que: "González Camacho publica «Revolución en los juicios contra el Estado», su lectura del Código recién aprobado.",
    fuente: { texto: "Vol. 44", href: AJ("vol44/comentarios/com01.htm") },
  },
  {
    fecha: "2006 y 2007",
    que: "La Comisión Contencioso-Administrativa de la Corte y la Escuela Judicial preparan a jueces y funcionarios con ciclos semanales de conferencias sobre el Código.",
    fuente: { texto: "Vol. 45", href: AJ("vol45/capacitacion/cp02.htm") },
  },
  {
    fecha: "Enero de 2008",
    que: "Entra en vigor el Código. El Tribunal abre en Calle Blancos, en el antiguo edificio Motorola, y el 16 de enero celebra su primera audiencia oral, sobre una medida cautelar en el servicio de ferry entre Puntarenas y Paquera.",
    fuente: { texto: "Vol. 66", href: AJ("vol66/noticias_judiciales/nj04.htm") },
  },
  {
    fecha: "2008",
    que: "Inauguración oficial del Tribunal. En su primer semestre ingresaron 757 procesos, se dictaron 452 sentencias y se celebraron 201 audiencias orales.",
    fuente: { texto: "Vol. 75", href: AJ("vol75/noticias_judiciales/nj02.htm") },
  },
  {
    fecha: "Noviembre de 2011",
    que: "A cuatro años del Código, la Comisión de la Jurisdicción Contenciosa Administrativa pide tribunales regionales y acceso ordenado a las líneas jurisprudenciales del Tribunal.",
    fuente: { texto: "Vol. 129", href: AJ("vol129/noticias_judiciales/nota5.html") },
  },
];

export function CronologiaTribunalContencioso() {
  return (
    <figure className="gc-fig gc-fig-flujo" aria-labelledby="fig-cronologia-tca">
      <FigHead
        id="fig-cronologia-tca"
        n={4}
        kicker="Cronología"
        title="Del juicio escrito al Tribunal de Calle Blancos"
        lead="Los hitos de la reforma según el Observatorio Judicial, la publicación del Poder Judicial, con enlace a cada nota original."
      />
      <ol className="gc-flujo">
        <li className="gc-flujo-cab" aria-hidden="true">
          <span />
          <span>Fecha</span>
          <span>Qué pasó</span>
          <span>Observatorio Judicial</span>
        </li>
        {HITOS.map((h, i) => (
          <li key={i} className="gc-flujo-paso">
            <span className="gc-fig-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="gc-flujo-quien">{h.fecha}</span>
            <span className="gc-flujo-que">{h.que}</span>
            <span className="gc-flujo-plazo">
              <a href={h.fuente.href} {...EXT}>
                {h.fuente.texto}
              </a>
            </span>
          </li>
        ))}
      </ol>
      <FigSource>
        Hemeroteca del Poder Judicial,{" "}
        <a href={AJ("")} {...EXT}>
          Observatorio Judicial
        </a>
        , ediciones de 2005 a 2011.
      </FigSource>
    </figure>
  );
}

/* ── Fuentes ─────────────────────────────────────────────────────────── */

type Fuente = { titulo: string; detalle: string; href: string };
type Criterio = { numero: string; organo: string; fecha: string; tema: string; criterio: string; href: string };

const HEMEROTECA: Fuente[] = [
  {
    titulo: "Un nuevo modelo de justicia administrativa",
    detalle: "Observatorio Judicial, vol. 35, 30 de noviembre de 2005",
    href: AJ("vol35/noticias_judiciales/notjud01.htm"),
  },
  {
    titulo: "Por un nuevo modelo de justicia administrativa",
    detalle: "Observatorio Judicial, vol. 42, mayo de 2006",
    href: AJ("vol42/noticias_judiciales/nj1.htm"),
  },
  {
    titulo: "Charla sobre nueva legislación contenciosa",
    detalle: "Observatorio Judicial, vol. 43, 2006. Conferencia en la Contraloría General de la República",
    href: AJ("vol43/capacitacion/cap03.htm"),
  },
  {
    titulo: "Revolución en los juicios contra el Estado",
    detalle: "Óscar Eduardo González Camacho. Observatorio Judicial, vol. 44, julio de 2006",
    href: AJ("vol44/comentarios/com01.htm"),
  },
  {
    titulo: "Exitoso ciclo de conferencias sobre nueva legislación administrativa",
    detalle: "Observatorio Judicial, vol. 45, agosto de 2006",
    href: AJ("vol45/capacitacion/cp02.htm"),
  },
  {
    titulo: "Juzgado y Tribunal tramitan asuntos diferentes",
    detalle: "Observatorio Judicial, vol. 66, enero de 2008",
    href: AJ("vol66/noticias_judiciales/nj04.htm"),
  },
  {
    titulo: "Magistrados visitaron nuevo Tribunal",
    detalle: "Observatorio Judicial, vol. 66, enero de 2008",
    href: AJ("vol66/noticias_judiciales/nj06.htm"),
  },
  {
    titulo: "Tribunal Contencioso Administrativo con resultados positivos",
    detalle: "Observatorio Judicial, vol. 75, 2008. Informe del primer semestre",
    href: AJ("vol75/noticias_judiciales/nj02.htm"),
  },
  {
    titulo: "Corte señala posible restricción a acceso de justicia en materia contenciosa",
    detalle: "Observatorio Judicial, vol. 128, octubre de 2011",
    href: AJ("vol128/noticias_judiciales/nota4.html"),
  },
  {
    titulo: "Jurisdicción contenciosa apuesta a la tecnología",
    detalle: "Observatorio Judicial, vol. 129, noviembre de 2011",
    href: AJ("vol129/noticias_judiciales/nota5.html"),
  },
];

const NORMAS: Fuente[] = [
  { titulo: "Constitución Política", detalle: "Arts. 49 y 173", href: SCIJ(871) },
  { titulo: "Código Procesal Contencioso-Administrativo", detalle: "Ley N.° 8508, arts. 1 a 6, 39, 60 a 111, 134 a 139, 155 y 189", href: SCIJ(57436) },
  { titulo: "Ley Orgánica del Poder Judicial", detalle: "Art. 92", href: SCIJ(33635) },
];

const JURISPRUDENCIA: Criterio[] = [
  {
    numero: "Voto 9928-2010",
    organo: "Sala Constitucional",
    fecha: "09-06-2010",
    tema: "Empleo público",
    criterio: "Anuló el inciso a) del artículo 3 del Código. Si se impugna la validez de una conducta administrativa surgida en una relación estatutaria, la vía contencioso-administrativa está abierta.",
    href: NEXUS("sen-1-0007-473953"),
  },
  {
    numero: "Voto 1360-F-S1-2010",
    organo: "Sala Primera",
    fecha: "11-11-2010",
    tema: "Legitimación pasiva",
    criterio: "El órgano con personalidad jurídica instrumental responde por los daños que nacen de su competencia exclusiva, y la condena no alcanza al Estado.",
    href: NEXUS("sen-1-0034-502506"),
  },
  {
    numero: "Voto 1426-F-S1-2012",
    organo: "Sala Primera",
    fecha: "23-10-2012",
    tema: "Plazo para demandar",
    criterio: "Qué es un acto de efectos continuados; la caducidad de la acción la examina el juez de oficio.",
    href: NEXUS("sen-1-0004-767786"),
  },
  {
    numero: "Voto 10-2026-I",
    organo: "Tribunal de Apelaciones de lo Contencioso Administrativo",
    fecha: "13-01-2026",
    tema: "Apelación",
    criterio: "La apelación solo procede contra los autos que la ley señala; la medida provisionalísima no la admite.",
    href: NEXUS("sen-1-0034-1396389"),
  },
  {
    numero: "Voto 5350-2026",
    organo: "Tribunal Contencioso Administrativo",
    fecha: "06-08-2026",
    tema: "Jerarquía impropia",
    criterio: "El Tribunal conoce las apelaciones municipales como contralor no jerárquico de legalidad.",
    href: NEXUS("sen-1-0034-1423788"),
  },
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

export function FuentesTribunalContencioso() {
  return (
    <div className="gc-fig gc-biblio">
      <Grupo titulo="Hemeroteca del Poder Judicial" items={HEMEROTECA} />
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
        Textos normativos: SINALEVI, en su versión vigente. Jurisprudencia: Nexus del Poder Judicial. Notas de
        prensa: hemeroteca oficial del Poder Judicial.
      </p>
    </div>
  );
}
