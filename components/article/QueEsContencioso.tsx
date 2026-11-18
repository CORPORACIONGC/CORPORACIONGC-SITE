/* Figuras de la guía «Qué es el contencioso administrativo en Costa Rica».
   Mismo lenguaje editorial que las demás guías (bloque .gc-fig de
   app/globals.css). Textos normativos cotejados el 18-11-2026 contra el
   corpus local (SINALEVI: Constitución versión 28 de 28; CPCA versión 8 de 8)
   y contra las actas de la Asamblea Nacional Constituyente de 1949. */

import { RunningHead } from "@/components/ui/RunningHead";

const NEXUS = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;
const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;
const CPCA = SINALEVI(57436, 146091);
const CONSTITUCION = SINALEVI(871, 147492);

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

/* ── Figura 1. Qué se puede llevar al contencioso ─────────────────────── */

const CONDUCTAS: { conducta: string; ejemplo: string; norma: string }[] = [
  {
    conducta: "Un acto administrativo",
    ejemplo:
      "La resolución que deniega un permiso, impone una multa, cancela una beca o rechaza una licitación. También un acto de trámite cuando tiene efecto propio.",
    norma: "art. 36 c)",
  },
  {
    conducta: "Un reglamento o una disposición general",
    ejemplo:
      "Un reglamento que afecta a quien demanda, aunque todavía no se le haya aplicado, o el acto que se lo aplica en concreto.",
    norma: "arts. 10.2 y 37",
  },
  {
    conducta: "Una actuación material",
    ejemplo: "La obra que invade un terreno, el cierre de un local o el decomiso de bienes sin un acto que lo respalde.",
    norma: "arts. 36 d) y 42 h)",
  },
  {
    conducta: "Una omisión",
    ejemplo:
      "La solicitud que nunca se resolvió, el servicio que no se presta o la obra que la ley manda hacer y no se hace.",
    norma: "arts. 35 y 36 e)",
  },
  {
    conducta: "Un contrato con el Estado",
    ejemplo:
      "La adjudicación de una licitación, el pago retenido a un contratista o la resolución de un contrato administrativo.",
    norma: "art. 2 a)",
  },
  {
    conducta: "Un daño causado por la Administración",
    ejemplo: "La indemnización por un accidente en una vía pública, por el mal funcionamiento de un servicio público o por un acto ilegal.",
    norma: "art. 2 b)",
  },
  {
    conducta: "Lo que hace un particular con poder público",
    ejemplo: "Las conductas regidas por el Derecho público aunque vengan de personas privadas o estas sean parte.",
    norma: "art. 2 e)",
  },
];

export function ConductasContencioso() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-conductas-contencioso">
      <FigHead
        id="fig-conductas-contencioso"
        n={1}
        kicker="Qué se puede llevar"
        title="Lo que la Administración hace, y también lo que deja de hacer"
        lead="El Código abarca los actos escritos y cualquier otra conducta sujeta al Derecho administrativo (art. 36 f)."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Conducta</th>
                <th scope="col">Ejemplos</th>
              </tr>
            </thead>
            <tbody>
              {CONDUCTAS.map((c) => (
                <tr key={c.conducta}>
                  <td className="gc-recurso">{c.conducta}</td>
                  <td>
                    {c.ejemplo} <span className="gc-fig-ref">{c.norma}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        Quedan fuera los actos de relación entre los Poderes del Estado y los que se dictan con motivo de las relaciones
        internacionales, salvo las indemnizaciones que causen (art. 3 b). En el empleo público, la vía depende de lo que
        se pide y del régimen que rige la relación.
      </p>
      <FigSource>
        Código Procesal Contencioso-Administrativo (Ley N.° 8508), arts. 2, 3, 10, 35, 36, 37 y 42, texto vigente en{" "}
        <a href={CPCA} {...EXT}>
          SINALEVI
        </a>
        .
      </FigSource>
    </figure>
  );
}

/* ── Figura 2. Quién puede demandar ───────────────────────────────────── */

const LEGITIMADOS: { quien: string; cuando: string; norma: string }[] = [
  {
    quien: "La persona afectada",
    cuando:
      "Cualquier persona, física o jurídica, que invoque la afectación de un derecho subjetivo o de un interés legítimo por una conducta administrativa.",
    norma: "art. 10.1 a)",
  },
  {
    quien: "Gremios, colegios y asociaciones",
    cuando:
      "Las entidades que representan intereses generales, gremiales o corporativos, en cuanto la conducta afecte esos intereses, y los grupos regidos por un estatuto que defienden intereses colectivos.",
    norma: "art. 10.1 b)",
  },
  {
    quien: "Quien defiende intereses difusos o colectivos",
    cuando: "Intereses que comparte un grupo amplio de personas, como el ambiente o la protección del consumidor.",
    norma: "art. 10.1 c)",
  },
  {
    quien: "Cualquier persona, por acción popular",
    cuando: "Solo cuando una ley la autoriza de forma expresa.",
    norma: "art. 10.1 d)",
  },
  {
    quien: "Grupos sin personalidad jurídica",
    cuando:
      "Grupos, uniones o patrimonios autónomos afectados en sus intereses legítimos, aunque no formen una persona jurídica. Los menores de edad pueden actuar directamente cuando la ley se lo permite.",
    norma: "art. 9",
  },
  {
    quien: "La Defensoría de los Habitantes y la Contraloría",
    cuando:
      "Para asegurar o restablecer la legalidad de lo que está bajo su fiscalización; la Contraloría, en materia de Hacienda Pública.",
    norma: "art. 10.3",
  },
  {
    quien: "La propia Administración",
    cuando:
      "Contra otro sujeto que dañó los intereses públicos o la Hacienda Pública, y contra su propio acto, cuando lo declara lesivo antes de demandar (proceso de lesividad).",
    norma: "arts. 10.1 e), 10.5 y 34",
  },
];

export function QuienPuedeDemandar() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-quien-demanda">
      <FigHead
        id="fig-quien-demanda"
        n={2}
        kicker="Legitimación"
        title="Quién puede demandar en lo contencioso administrativo"
        lead="La regla general es tener algo propio en juego: un derecho o un interés legítimo que la conducta afecta. El Código abrió además la puerta a la defensa de intereses que comparte un grupo."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Quién</th>
                <th scope="col">Cuándo puede demandar</th>
              </tr>
            </thead>
            <tbody>
              {LEGITIMADOS.map((l) => (
                <tr key={l.quien}>
                  <td className="gc-recurso">{l.quien}</td>
                  <td>
                    {l.cuando} <span className="gc-fig-ref">{l.norma}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Código Procesal Contencioso-Administrativo (Ley N.° 8508), arts. 9, 10 y 34 (
        <a href={CPCA} {...EXT}>
          SINALEVI
        </a>
        ); Sala Primera, sentencia{" "}
        <a href={NEXUS("sen-1-0004-767783")} {...EXT}>
          896-F-S1-2012
        </a>
        .
      </FigSource>
    </figure>
  );
}

/* ── Figura 3. El recorrido en cinco momentos ─────────────────────────── */

const MOMENTOS: { momento: string; que: string; plazo: string }[] = [
  {
    momento: "Antes de demandar",
    que: "La persona decide si reclama primero ante la institución o va directo al juez: salvo en materia municipal y de contratación administrativa, puede elegir. Si se trata de una omisión, puede pedir a la institución que actúe.",
    plazo: "Quince días para que la institución actúe ante una omisión (art. 35)",
  },
  {
    momento: "La demanda",
    que: "Se presenta por escrito, con los hechos, el Derecho, lo que se pide y la prueba. Si hay urgencia, se pide además una medida cautelar, incluso antes de la demanda.",
    plazo: "Un año, como regla, desde la notificación del acto (art. 39)",
  },
  {
    momento: "La contestación",
    que: "La institución contesta y remite el expediente administrativo. Después, salvo que alguna parte se oponga, se convoca a una audiencia de conciliación.",
    plazo: "Quince o treinta días hábiles para contestar (art. 63)",
  },
  {
    momento: "Dos audiencias orales",
    que: "En la audiencia preliminar el juez ordena el caso, fija lo que está en discusión y decide qué prueba se recibe. Después viene el juicio oral y público ante el tribunal de juicio. Si no hay prueba que recibir, el caso pasa directo a sentencia.",
    plazo: "Arts. 90, 98 y 99",
  },
  {
    momento: "Sentencia y cumplimiento",
    que: "El tribunal dicta sentencia, de viva voz cuando puede. Quien pierde puede presentar recurso de casación. Con la sentencia firme, un juez ejecutor obliga a cumplirla.",
    plazo: "Cinco días hábiles para la sentencia escrita (art. 111); quince para la casación (art. 139)",
  },
];

export function MomentosProcesoContencioso() {
  return (
    <figure className="gc-fig gc-fig-flujo" aria-labelledby="fig-momentos-contencioso">
      <FigHead
        id="fig-momentos-contencioso"
        n={3}
        kicker="Paso a paso"
        title="El proceso contencioso administrativo en cinco momentos"
        lead="Desde 2008 es un proceso por audiencias: lo importante se discute de viva voz frente al juez."
      />
      <ol className="gc-flujo">
        <li className="gc-flujo-cab" aria-hidden="true">
          <span />
          <span>Momento</span>
          <span>Qué ocurre</span>
          <span>Plazo o norma</span>
        </li>
        {MOMENTOS.map((m, i) => (
          <li key={m.momento} className="gc-flujo-paso">
            <span className="gc-fig-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="gc-flujo-quien">{m.momento}</span>
            <span className="gc-flujo-que">{m.que}</span>
            <span className="gc-flujo-plazo">{m.plazo}</span>
          </li>
        ))}
      </ol>
      <p className="gc-fig-note">
        El detalle de cada etapa, con quién actúa en cada una, está en la guía del{" "}
        <a href="/articulos/tribunal-contencioso-administrativo-costa-rica#como-avanza-un-proceso-etapa-por-etapa">
          Tribunal Contencioso Administrativo
        </a>
        .
      </p>
      <FigSource>
        Código Procesal Contencioso-Administrativo (Ley N.° 8508), arts. 19, 31, 35, 39, 58, 63, 70, 90, 98, 99, 111, 139 y
        155, texto vigente en{" "}
        <a href={CPCA} {...EXT}>
          SINALEVI
        </a>
        .
      </FigSource>
    </figure>
  );
}

/* ── Figura 4. Contencioso, amparo o reclamo ante la institución ──────── */

const VIAS: { via: string; para: string; quien: string; abogado: string }[] = [
  {
    via: "Reclamo ante la propia institución",
    para: "Pedirle a la institución que revise su decisión, con los recursos de revocatoria y apelación.",
    quien: "La misma institución y su jerarca.",
    abogado: "No es obligatorio.",
  },
  {
    via: "Recurso de amparo",
    para: "Las violaciones directas y evidentes de un derecho fundamental, que no exigen discutir leyes o reglamentos ni recibir prueba extensa.",
    quien: "La Sala Constitucional.",
    abogado: "No es obligatorio.",
  },
  {
    via: "Proceso contencioso administrativo",
    para: "Discutir si una conducta pública respeta la ley, anularla, obligar a la institución a actuar y cobrar los daños. Admite toda clase de prueba.",
    quien: "El Tribunal Contencioso Administrativo y Civil de Hacienda.",
    abogado: "Sí: la demanda y los escritos van autenticados por un abogado.",
  },
];

export function ViasFrenteAdministracion() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-vias-administracion">
      <FigHead
        id="fig-vias-administracion"
        n={4}
        kicker="Comparación"
        title="Tres caminos frente a una decisión pública"
        lead="Pueden combinarse: reclamar ante la institución no impide demandar después, siempre que se respete el plazo."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Vía</th>
                <th scope="col">Para qué sirve, quién decide y si hace falta abogado</th>
              </tr>
            </thead>
            <tbody>
              {VIAS.map((v) => (
                <tr key={v.via}>
                  <td className="gc-recurso">{v.via}</td>
                  <td>
                    {v.para}
                    <span className="gc-fig-ref">
                      Decide: {v.quien} Abogado: {v.abogado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Ley General de la Administración Pública, arts. 342 y siguientes; Ley de la Jurisdicción Constitucional, arts. 29 y
        siguientes; Código Procesal Contencioso-Administrativo, arts. 1 y 220, con el art. 20.1 del Código Procesal Civil;
        Sala Constitucional, votos{" "}
        <a href={NEXUS("sen-1-0007-411228")} {...EXT}>
          2545-2008
        </a>{" "}
        y{" "}
        <a href={NEXUS("sen-1-0007-1410984")} {...EXT}>
          28193-2026
        </a>
        .
      </FigSource>
    </figure>
  );
}

/* ── Figura 5. Cronología ─────────────────────────────────────────────── */

const HITOS: { fecha: string; que: React.ReactNode; fuente: { texto: string; href?: string } }[] = [
  {
    fecha: "Antes de 1949",
    que: "Los tribunales podían condenar al Estado a pagar daños, pero no anular sus actos. No existía una jurisdicción contencioso-administrativa propiamente dicha.",
    fuente: { texto: "Acta 113 de la Constituyente" },
  },
  {
    fecha: "1949",
    que: (
      <>
        La Constituyente crea la jurisdicción en el artículo 49 y la confía al Poder Judicial. El texto original solo
        permitía revisar lo actuado <em>«en uso de facultades regladas»</em>.
      </>
    ),
    fuente: { texto: "Actas 109 a 113 y 179", href: SINALEVI(871, 928) },
  },
  {
    fecha: "1950",
    que: "La Ley N.° 1226 desarrolla por primera vez el artículo 49 y regula el juicio contencioso-administrativo.",
    fuente: { texto: "Ley 1226", href: SINALEVI(37912, 39975) },
  },
  {
    fecha: "1963",
    que: "La Ley N.° 3124 reescribe el artículo 49: garantiza la legalidad de toda la función administrativa, permite revisar también las decisiones discrecionales y protege los derechos subjetivos y los intereses legítimos.",
    fuente: { texto: "Constitución, art. 49", href: CONSTITUCION },
  },
  {
    fecha: "1966",
    que: "La Ley Reguladora de la Jurisdicción Contencioso-Administrativa, N.° 3667, organiza un juicio escrito, centrado en anular actos.",
    fuente: { texto: "Ley 3667", href: SINALEVI(7331, 75210) },
  },
  {
    fecha: "2006",
    que: "La Sala Constitucional declara inconstitucional obligar a agotar la vía administrativa antes de demandar. Ese mismo año se aprueba el Código Procesal Contencioso-Administrativo, Ley N.° 8508.",
    fuente: { texto: "Voto 3669-2006", href: NEXUS("sen-1-0007-337671") },
  },
  {
    fecha: "2008",
    que: "El Código entra en vigor el 1 de enero: proceso oral, control de las omisiones, medidas cautelares amplias y jueces ejecutores.",
    fuente: { texto: "CPCA, art. 222", href: CPCA },
  },
];

export function CronologiaContencioso() {
  return (
    <figure className="gc-fig gc-fig-flujo" aria-labelledby="fig-cronologia-contencioso">
      <FigHead
        id="fig-cronologia-contencioso"
        n={5}
        kicker="Cronología"
        title="De la indemnización sin anulación al control pleno"
        lead="Setenta y cinco años de historia de la jurisdicción, con su fuente."
      />
      <ol className="gc-flujo">
        <li className="gc-flujo-cab" aria-hidden="true">
          <span />
          <span>Fecha</span>
          <span>Qué pasó</span>
          <span>Fuente</span>
        </li>
        {HITOS.map((h, i) => (
          <li key={h.fecha} className="gc-flujo-paso">
            <span className="gc-fig-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="gc-flujo-quien">{h.fecha}</span>
            <span className="gc-flujo-que">{h.que}</span>
            <span className="gc-flujo-plazo">
              {h.fuente.href ? (
                <a href={h.fuente.href} {...EXT}>
                  {h.fuente.texto}
                </a>
              ) : (
                h.fuente.texto
              )}
            </span>
          </li>
        ))}
      </ol>
      <FigSource>
        Actas de la Asamblea Nacional Constituyente de 1949; Constitución Política, art. 49, versiones de 1949 y vigente;
        Leyes N.° 1226, 3124, 3667 y 8508 en SINALEVI; Sala Constitucional, voto 3669-2006.
      </FigSource>
    </figure>
  );
}
