/* Figuras de la guía «Recurso de revocatoria y apelación contra un acto
   administrativo». Lenguaje editorial del sitio (el de .gc-reforma): filetes
   finos, antetítulo con línea dorada, filas numeradas y una línea de fuente
   al pie de cada figura. Todo es HTML semántico, legible para buscadores y
   lectores de pantalla, con los colores del tema claro y oscuro. Estilos en
   app/globals.css, bloque .gc-fig. Cada norma citada se verificó contra el
   texto vigente. */

import Link from "next/link";

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

function Ref({ children }: { children: React.ReactNode }) {
  return <span className="gc-fig-ref">{children}</span>;
}

/* Identificadores de Nexus (Poder Judicial) de cada voto citado. */
const NEXUS_IDS: Record<string, string> = {
  "2006-3669": "sen-1-0007-337671",
  "2012-17737": "sen-1-0007-569858",
  "2014-2529": "sen-1-0007-601432",
  "2016-9506": "sen-1-0007-677832",
  "2017-15945": "sen-1-0007-734465",
  "2018-10287": "sen-1-0007-878411",
  "2026-11597": "sen-1-0007-1375431",
  "2026-24826": "sen-1-0007-1408848",
  "2026-28581": "sen-1-0007-1415269",
  "515-F-S1-2024": "sen-1-0004-1229516",
  "1560-F-S1-2022": "sen-1-0004-1102286",
  "32-F-S1-2022": "sen-1-0004-1075221",
  "2053-F-S1-2022": "sen-1-0004-1115309",
  "680-F-S1-2022": "sen-1-0004-1080557",
  "1429-A-S1-2024": "sen-1-0004-1258728",
  "8-F-S1-2026": "sen-1-0004-1363077",
  "1050-S1-2026": "sen-1-0004-1416782",
  "920-F-S1-2026": "sen-1-0004-1403886",
  "103-F-TC-2025": "sen-1-1011-1323288",
  "584-2020": "sen-1-0034-1010955",
  "2026-4285": "sen-1-0034-1410509",
  "2024-6600": "sen-1-0034-1257727",
  "2024-1476": "sen-1-0034-1223221",
  "43-2023": "sen-1-0034-1170723",
  "479-2019": "sen-1-0034-944688",
  "417-2019": "sen-1-0034-944643",
  "166-2016": "sen-1-0034-688662",
  "99-2013": "sen-1-0034-580802",
  "33-2013": "sen-1-0034-565589",
};

function V({ n }: { n: string }) {
  return (
    <a href={`https://nexuspj.poder-judicial.go.cr/document/${NEXUS_IDS[n]}`} target="_blank" rel="noopener noreferrer">
      {n}
    </a>
  );
}

/* ── Figura 1. La ruta del recurso ──────────────────────────────────── */

export function MapaRecursosLgap() {
  return (
    <figure className="gc-fig gc-fig-ruta" aria-labelledby="fig-ruta">
      <FigHead
        id="fig-ruta"
        n={1}
        kicker="La ruta del recurso"
        title="Qué recurso cabe, ante quién y en qué plazo"
        lead="Cuatro preguntas, en este orden, resuelven casi cualquier acto administrativo."
      />

      <div className="gc-fig-steps">
        <section className="gc-fig-step">
          <div className="gc-fig-step-q">
            <span className="gc-fig-num">01</span>
            ¿Cuándo quedó notificado?
          </div>
          <div className="gc-fig-step-a">
            <p>
              El plazo corre desde el día hábil siguiente a la última comunicación del acto.
              Si la notificación llegó al correo electrónico, fax o casillero señalado, la
              persona queda notificada el día hábil siguiente al envío, y el plazo arranca el
              día hábil posterior.
            </p>
            <p>
              La primera notificación del procedimiento debe ser personal. En contratación
              pública el plazo corre desde la comunicación en el sistema, sin el día adicional.
              Si la Administración ejecuta el acto sin haberlo comunicado, puede recurrirlo
              desde que conoce la ejecución.
            </p>
          </div>
        </section>

        <section className="gc-fig-step">
          <div className="gc-fig-step-q">
            <span className="gc-fig-num">02</span>
            ¿Qué acto recibió?
          </div>
          <div className="gc-fig-step-a">
            <table className="gc-fig-mini">
              <thead>
                <tr>
                  <th scope="col">Acto</th>
                  <th scope="col">Recursos</th>
                  <th scope="col">Plazo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="gc-fig-hl">
                  <td>Acto final, o el de trámite que suspende indefinidamente o impide continuar el procedimiento</td>
                  <td>Revocatoria, apelación o ambas</td>
                  <td className="gc-fig-plazo">3 días hábiles</td>
                </tr>
                <tr>
                  <td>Acto que inicia el procedimiento, o que deniega la comparecencia oral o una prueba</td>
                  <td>Revocatoria, apelación o ambas</td>
                  <td className="gc-fig-plazo">24 horas</td>
                </tr>
                <tr>
                  <td>Cualquier otro acto de trámite</td>
                  <td>Sin recurso propio; sus vicios se alegan al recurrir el acto final</td>
                  <td className="gc-fig-plazo gc-fig-plazo--muted">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="gc-fig-step">
          <div className="gc-fig-step-q">
            <span className="gc-fig-num">03</span>
            ¿La materia tiene ley especial?
          </div>
          <div className="gc-fig-step-a">
            <dl className="gc-fig-dl">
              <div>
                <dt>Municipal</dt>
                <dd>Quinto día hábil <Ref>Código Municipal, arts. 165, 170 y 171</Ref></dd>
              </div>
              <div>
                <dt>Tributaria</dt>
                <dd>Treinta días hábiles <Ref>CNPT, arts. 145, 146 y 156</Ref></dd>
              </div>
              <div>
                <dt>Contratación pública</dt>
                <dd>
                  Régimen propio{" "}
                  <Ref>
                    Ley N.° 9986 ·{" "}
                    <Link href="/articulos/recursos-contratacion-publica-objecion-apelacion-revocatoria">ver guía</Link>
                  </Ref>
                </dd>
              </div>
              <div>
                <dt>Todas las demás</dt>
                <dd>Reglas generales de la LGAP <Ref>arts. 342 a 356</Ref></dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="gc-fig-step">
          <div className="gc-fig-step-q">
            <span className="gc-fig-num">04</span>
            ¿Ante quién y quién decide?
          </div>
          <div className="gc-fig-step-a">
            <div className="gc-fig-trio">
              <div>
                <span className="gc-fig-label">Revocatoria</span>
                <p>Decide el mismo órgano que dictó el acto.</p>
              </div>
              <div>
                <span className="gc-fig-label">Apelación</span>
                <p>Decide el superior jerárquico, en única alzada.</p>
              </div>
              <div className="gc-fig-hl">
                <span className="gc-fig-label">En subsidio</span>
                <p>Las dos en un escrito: primero el órgano y, si la rechaza, el superior.</p>
              </div>
            </div>
            <p className="gc-fig-note">
              Ambos recursos se presentan ante el órgano director del procedimiento, que debe
              elevar la apelación.
            </p>
          </div>
        </section>

        <section className="gc-fig-step gc-fig-step--end">
          <div className="gc-fig-step-q">
            <span className="gc-fig-num">—</span>
            Con el acto firme
          </div>
          <div className="gc-fig-step-a">
            <p>
              Quedan el recurso extraordinario de revisión, por causales tasadas, y la demanda
              ante el Tribunal Contencioso-Administrativo, dentro del año.
            </p>
          </div>
        </section>
      </div>

      <FigSource>
        LGAP, arts. 141, 243, 256, 344 a 350 y 353; Ley de Notificaciones Judiciales, art. 38;
        Código Municipal, arts. 165 y 171; CNPT, arts. 145 y 156; CPCA, art. 39.
      </FigSource>
    </figure>
  );
}

/* ── Figura 2. Los tres recursos ────────────────────────────────────── */

export function ComparativaRecursosLgap() {
  return (
    <figure className="gc-fig gc-fig-tabla" aria-labelledby="fig-recursos">
      <FigHead id="fig-recursos" n={2} kicker="Comparación" title="Revocatoria, apelación y revisión en la LGAP" />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Recurso</th>
                <th scope="col">Quién lo resuelve</th>
                <th scope="col">Contra qué</th>
                <th scope="col">Plazos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="gc-recurso">
                  Revocatoria
                  <Ref>o reposición · arts. 343 a 346 y 352.1</Ref>
                </td>
                <td>El mismo órgano que dictó el acto. Se presenta ante el órgano director.</td>
                <td>Acto final, acto de inicio, denegatoria de comparecencia o de prueba.</td>
                <td className="gc-plazo">
                  <span><b>Presentarla</b>3 días hábiles contra el acto final; 24 horas en los demás casos.</span>
                  <span><b>Resolverla</b>8 días; si se dirige contra un acto de trámite, puede reservarse para el acto final.</span>
                </td>
              </tr>
              <tr>
                <td className="gc-recurso">
                  Apelación
                  <Ref>arts. 347 a 351 y 352.2</Ref>
                </td>
                <td>El superior jerárquico, en única alzada. Su decisión agota la vía administrativa.</td>
                <td>Los mismos actos que la revocatoria.</td>
                <td className="gc-plazo">
                  <span><b>Presentarla</b>3 días hábiles contra el acto final; 24 horas en los demás casos.</span>
                  <span><b>Resolverla</b>8 días desde que recibe el expediente.</span>
                </td>
              </tr>
              <tr>
                <td className="gc-recurso">
                  Revisión
                  <Ref>extraordinario · arts. 353 a 355</Ref>
                </td>
                <td>El jerarca de la Administración.</td>
                <td>Actos finales firmes, solo por las cuatro causales de la ley.</td>
                <td className="gc-plazo">
                  <span><b>Presentarlo</b>1 año por error de hecho; 3 meses desde que aparecen documentos esenciales; 1 año desde la sentencia en los demás casos.</span>
                  <span><b>Resolverlo</b>Reglas de los recursos ordinarios, en lo compatible.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>Ley General de la Administración Pública (Ley N.° 6227), arts. 342 a 356.</FigSource>
    </figure>
  );
}

/* ── Figura 3. Cómputo del plazo ────────────────────────────────────── */

type Dia = "inicio" | "inhabil" | "dia" | "vence" | "tarde" | "vacio";
const DIAS = ["Vie", "Sáb", "Dom", "Lun", "Mar", "Mié", "Jue", "Vie"];

const CARRILES: {
  titulo: string;
  vence: string;
  resumen: string;
  celdas: { tipo: Dia; marca?: string; n?: number }[];
}[] = [
  {
    titulo: "Notificación personal o en el domicilio",
    vence: "Vence el miércoles",
    resumen: "Notificado el viernes; el plazo corre lunes, martes y miércoles; vence el miércoles.",
    celdas: [
      { tipo: "inicio", marca: "N" },
      { tipo: "inhabil" },
      { tipo: "inhabil" },
      { tipo: "dia", n: 1 },
      { tipo: "dia", n: 2 },
      { tipo: "vence", n: 3 },
      { tipo: "tarde" },
      { tipo: "vacio" },
    ],
  },
  {
    titulo: "Notificación por correo electrónico, fax o casillero",
    vence: "Vence el jueves",
    resumen: "Enviado el viernes; se tiene por notificado el lunes; el plazo corre martes, miércoles y jueves; vence el jueves.",
    celdas: [
      { tipo: "inicio", marca: "E" },
      { tipo: "inhabil" },
      { tipo: "inhabil" },
      { tipo: "inicio", marca: "N" },
      { tipo: "dia", n: 1 },
      { tipo: "dia", n: 2 },
      { tipo: "vence", n: 3 },
      { tipo: "tarde" },
    ],
  },
];

export function PlazoTresDiasLgap() {
  return (
    <figure className="gc-fig gc-fig-computo" aria-labelledby="fig-plazo">
      <FigHead
        id="fig-plazo"
        n={3}
        kicker="Cómputo del plazo"
        title="Cuándo vence el plazo contra un acto final comunicado un viernes"
        lead="El medio de notificación cambia el día en que empieza a correr el plazo."
      />

      <div className="gc-crono" role="table" aria-label="Cómputo del plazo de tres días hábiles">
        <div className="gc-crono-fila gc-crono-fila--dias" role="row">
          <span className="gc-crono-titulo" role="columnheader" />
          {DIAS.map((d, i) => (
            <span key={i} role="columnheader" className={`gc-crono-dia${d === "Sáb" || d === "Dom" ? " is-inhabil" : ""}`}>
              {d}
            </span>
          ))}
        </div>

        {CARRILES.map((c) => (
          <div key={c.titulo} className="gc-crono-fila" role="row">
            <span className="gc-crono-titulo" role="rowheader">
              {c.titulo}
              <span className="gc-crono-vence">{c.vence}</span>
              <span className="gc-sr">{c.resumen}</span>
            </span>
            {c.celdas.map((d, i) => (
              <span key={i} role="cell" className={`gc-crono-celda is-${d.tipo}`}>
                {d.marca && <span className={`gc-crono-marca gc-crono-marca--${d.marca}`}>{d.marca}</span>}
                {d.n && <span className="gc-crono-n">{d.n}</span>}
                {d.tipo === "vence" && <span className="gc-crono-flag">vence</span>}
                {d.tipo === "tarde" && <span className="gc-crono-x" aria-label="fuera de plazo">×</span>}
              </span>
            ))}
          </div>
        ))}
      </div>

      <ul className="gc-crono-leyenda">
        <li><span className="gc-crono-marca gc-crono-marca--E">E</span> Envío del correo</li>
        <li><span className="gc-crono-marca gc-crono-marca--N">N</span> Notificación</li>
        <li><span className="gc-crono-barra" /> Día hábil del plazo</li>
        <li><span className="gc-crono-rayado" /> Día inhábil</li>
        <li><span className="gc-crono-x">×</span> Fuera de plazo</li>
      </ul>

      <p className="gc-fig-note">
        Un feriado dentro del plazo corre el vencimiento un día hábil. El día adicional no se
        suma en contratación pública ni donde una ley especial cuente el plazo desde el recibo.
        El recurso presentado después del vencimiento es inadmisible.
      </p>

      <FigSource>
        LGAP, arts. 256, 346.1 y 347.2; Ley de Notificaciones Judiciales (Ley N.° 8687), arts. 1 y 38;
        Corte Plena, <a href="https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=70140" target="_blank" rel="noopener noreferrer">circular 42-2011</a>; Sala Primera, voto <V n="515-F-S1-2024" />; TCA, Sección IV, voto
        <V n="2024-6600" />; PGR, dictamen C-037-2025; CGR, resoluciones R-DFOE-DEC-00016-2026 y
        R-DCA-SICOP-00888-2023.
      </FigSource>
    </figure>
  );
}

/* ── Figura 4. Recorrido de la revocatoria con apelación en subsidio ── */

const PASOS: { quien: string; que: string; plazo: string; rama?: { cuando: string; que: string } }[] = [
  {
    quien: "Usted",
    que: "Presenta un solo escrito con ambos recursos ante el órgano director. Si el acto se ejecuta de inmediato, pide en el mismo escrito la suspensión.",
    plazo: "3 días hábiles",
  },
  {
    quien: "Órgano que dictó el acto",
    que: "Resuelve la revocatoria. Si la rechaza, pasa al paso siguiente.",
    plazo: "8 días",
    rama: { cuando: "Si la acoge", que: "el acto se revoca o se modifica y el recorrido termina ahí." },
  },
  {
    quien: "Órgano que dictó el acto",
    que: "Si la rechaza, emplaza a las partes ante el superior y remite el expediente con un informe, sin admitir ni rechazar la apelación.",
    plazo: "Sin plazo propio",
  },
  {
    quien: "Superior jerárquico",
    que: "Decide la apelación, con dictamen previo de la asesoría jurídica: confirma, modifica o revoca, sin empeorar la situación de quien recurre. Solo el jerarca propio, ante una nulidad absoluta, puede resolver en su perjuicio.",
    plazo: "8 días desde que recibe el expediente",
    rama: {
      cuando: "Si pasa un mes sin respuesta",
      que: "el recurso puede tenerse por desestimado y la vía por agotada. La Administración sigue obligada a resolver.",
    },
  },
  {
    quien: "Tribunal",
    que: "Con la vía agotada, corre el año para demandar desde el día siguiente a la notificación de lo resuelto, aunque la resolución llegue tarde. En materia tributaria rige el plazo de prescripción.",
    plazo: "1 año",
  },
];

export function FlujoApelacionSubsidio() {
  return (
    <figure className="gc-fig gc-fig-flujo" aria-labelledby="fig-flujo">
      <FigHead id="fig-flujo" n={4} kicker="Paso a paso" title="El recorrido de una revocatoria con apelación en subsidio" />
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
      <FigSource>
        LGAP, arts. 127, 148, 261, 346 a 352 y 356; CPCA, arts. 31.6, 31.7, 39 y 41; Sala Constitucional,
        voto <V n="2016-9506" />; Sala Primera, votos <V n="32-F-S1-2022" /> y <V n="1560-F-S1-2022" />; TCA, Sección III, voto
        <V n="479-2019" />, y Sección IV, voto <V n="43-2023" />.
      </FigSource>
    </figure>
  );
}

/* ── Figura 5. Nulidad absoluta y relativa ──────────────────────────── */

const ASPECTOS: { aspecto: string; absoluta: React.ReactNode; relativa: React.ReactNode }[] = [
  {
    aspecto: "Cuándo se produce",
    absoluta: <>Falta por completo uno o varios elementos del acto. <Ref>art. 166</Ref></>,
    relativa: <>Un elemento es imperfecto sin impedir el fin del acto. <Ref>art. 167</Ref></>,
  },
  {
    aspecto: "Presunción de legitimidad",
    absoluta: <>No se presume legítimo. <Ref>art. 169</Ref></>,
    relativa: <>Se presume legítimo mientras no se anule en firme. <Ref>art. 176</Ref></>,
  },
  {
    aspecto: "Ejecución",
    absoluta: <>No puede ordenarse su ejecución. <Ref>art. 169</Ref></>,
    relativa: <>Debe obedecerse, y su incumplimiento genera responsabilidad. <Ref>art. 176</Ref></>,
  },
  {
    aspecto: "Plazo para impugnarlo",
    absoluta: <>Un año desde el día siguiente a su comunicación. Si sus efectos continúan, mientras subsistan, pero la anulación vale solo hacia el futuro. <Ref>LGAP, art. 175; CPCA, art. 40</Ref></>,
    relativa: <>Los plazos ordinarios de recurso y de demanda. <Ref>LGAP, art. 346; CPCA, art. 39</Ref></>,
  },
  {
    aspecto: "Al resolver la apelación",
    absoluta: <>Solo el jerarca propio puede declararla aun en perjuicio de quien recurre. <Ref>art. 351.2; TCA IV, voto <V n="43-2023" /></Ref></>,
    relativa: <>Rige la prohibición de reformar en perjuicio de quien recurre. <Ref>Sala Constitucional, voto <V n="2016-9506" /></Ref></>,
  },
];

export function NulidadAbsolutaRelativa() {
  return (
    <figure className="gc-fig gc-fig-cmp" aria-labelledby="fig-nulidad">
      <FigHead id="fig-nulidad" n={5} kicker="Gravedad del vicio" title="Qué cambia entre la nulidad absoluta y la relativa" />
      <div className="gc-cmp" role="table" aria-label="Nulidad absoluta y nulidad relativa">
        <div className="gc-cmp-cab" role="row">
          <span role="columnheader">Aspecto</span>
          <span role="columnheader" className="gc-cmp-col--hl">Nulidad absoluta</span>
          <span role="columnheader">Nulidad relativa</span>
        </div>
        {ASPECTOS.map((a, i) => (
          <div key={a.aspecto} className="gc-cmp-fila" role="row">
            <span className="gc-cmp-aspecto" role="rowheader">
              <span className="gc-fig-num">{String(i + 1).padStart(2, "0")}</span>
              {a.aspecto}
            </span>
            <span className="gc-cmp-celda gc-cmp-col--hl" role="cell" data-label="Nulidad absoluta">{a.absoluta}</span>
            <span className="gc-cmp-celda" role="cell" data-label="Nulidad relativa">{a.relativa}</span>
          </div>
        ))}
      </div>
      <FigSource>
        LGAP, arts. 166, 167, 169, 175, 176 y 351.2; CPCA, arts. 39 y 40; Sala Primera, voto
        <V n="2053-F-S1-2022" />; Sala Constitucional, votos <V n="2016-9506" /> y <V n="2017-15945" />.
      </FigSource>
    </figure>
  );
}

/* ── Figura 6. Regímenes especiales ─────────────────────────────────── */

export function MateriasEspecialesRecursos() {
  return (
    <figure className="gc-fig gc-fig-tabla" aria-labelledby="fig-especiales">
      <FigHead id="fig-especiales" n={6} kicker="Leyes especiales" title="Cuando la ley especial cambia el plazo o el órgano" />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Materia y acto</th>
                <th scope="col">Recursos</th>
                <th scope="col">Plazo</th>
                <th scope="col">Resuelve la apelación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="gc-recurso">Acuerdos del Concejo Municipal<Ref>Código Municipal, art. 165</Ref></td>
                <td>Revocatoria y apelación, en memorial razonado. La apelación solo por ilegalidad.</td>
                <td className="gc-plazo">Quinto día hábil</td>
                <td>Tribunal Contencioso-Administrativo</td>
              </tr>
              <tr>
                <td className="gc-recurso">Funcionarios que dependen del Concejo<Ref>Código Municipal, art. 170</Ref></td>
                <td>Revocatoria y apelación. No suspenden la ejecución.</td>
                <td className="gc-plazo">Quinto día hábil</td>
                <td>Concejo Municipal</td>
              </tr>
              <tr>
                <td className="gc-recurso">Decisiones de la Alcaldía<Ref>Código Municipal, art. 171</Ref></td>
                <td>Revocatoria ante la Alcaldía y apelación. No suspenden la ejecución.</td>
                <td className="gc-plazo">Quinto día hábil</td>
                <td>Tribunal Contencioso-Administrativo</td>
              </tr>
              <tr>
                <td className="gc-recurso">Funcionarios municipales que no dependen del Concejo<Ref>Código Municipal, art. 171</Ref></td>
                <td>Revocatoria y apelación. Suspenden la ejecución del acto.</td>
                <td className="gc-plazo">Quinto día hábil</td>
                <td>Alcaldía</td>
              </tr>
              <tr>
                <td className="gc-recurso">Liquidación tributaria de oficio<Ref>CNPT, arts. 145, 146 y 156</Ref></td>
                <td>Revocatoria potestativa y apelación. Si se presentan juntas, se tramita la primera y la segunda es inadmisible; lo resuelto en revocatoria puede apelarse después.</td>
                <td className="gc-plazo">30 días hábiles la revocatoria; 30 días la apelación</td>
                <td>Tribunal Fiscal Administrativo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        El quinto día municipal se cuenta en días hábiles. En materia tributaria, el plazo para
        demandar es el de prescripción del derecho de fondo.
      </p>
      <FigSource>
        Código Municipal (Ley N.° 7794), arts. 165, 170 y 171; Código de Normas y Procedimientos
        Tributarios (Ley N.° 4755, CNPT), arts. 145, 146 y 156; CPCA, art. 41.2; TCA, voto <V n="2026-4285" />, y
        Sección III, voto <V n="417-2019" />; Sala Constitucional, voto <V n="2014-2529" />; Sala Primera, voto
        <V n="920-F-S1-2026" />. La contratación pública tiene su propio régimen en la Ley N.° 9986.
      </FigSource>
    </figure>
  );
}

/* ── Bibliografía: normativa, jurisprudencia y criterios citados ─────── */

const NEXUS = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;
const CGR = (ruta: string) => `https://cgrfiles.cgr.go.cr/publico/docs_cgr/${ruta}`;

type Criterio = { organo: string; numero: string; fecha: string; tema: string; criterio: string; href?: string };

const JUDICIALES: Criterio[] = [
  { organo: "Sala Constitucional", numero: "Voto 2006-3669", fecha: "15-03-2006", tema: "Agotamiento de la vía", criterio: "Anuló la obligación de agotar la vía administrativa antes de demandar y dejó a salvo los acuerdos municipales y la contratación administrativa.", href: NEXUS("sen-1-0007-337671") },
  { organo: "Sala Constitucional", numero: "Voto 2012-17737", fecha: "12-12-2012", tema: "Agotamiento de la vía", criterio: "Reafirma las dos excepciones. En lo municipal, la falta de agotamiento debe alegarla la Administración al inicio del proceso.", href: NEXUS("sen-1-0007-569858") },
  { organo: "Sala Constitucional", numero: "Voto 2014-2529", fecha: "26-02-2014", tema: "Materia tributaria", criterio: "La vía administrativa tributaria se agota ante el Tribunal Fiscal Administrativo por medio de la apelación.", href: NEXUS("sen-1-0007-601432") },
  { organo: "Sala Constitucional", numero: "Voto 2016-9506", fecha: "08-07-2016", tema: "Reforma en perjuicio", criterio: "El superior que conoce la apelación se limita a lo recurrido y no puede empeorar la situación de quien recurre.", href: NEXUS("sen-1-0007-677832") },
  { organo: "Sala Constitucional", numero: "Voto 2017-15945", fecha: "04-10-2017", tema: "Nulidad absoluta", criterio: "Es constitucional impugnar el acto absolutamente nulo mientras duren sus efectos, con anulación solo hacia el futuro.", href: NEXUS("sen-1-0007-734465") },
  { organo: "Sala Constitucional", numero: "Voto 2018-10287", fecha: "26-06-2018", tema: "Motivación", criterio: "Motivar el acto es una exigencia del debido proceso y del derecho de defensa; anuló un acto motivado en términos generales.", href: NEXUS("sen-1-0007-878411") },
  { organo: "Sala Constitucional", numero: "Voto 2026-11597", fecha: "27-03-2026", tema: "Notificación", criterio: "El acto inicial que debía notificarse personalmente se envió por correo: anuló el procedimiento. Aplica el cómputo del art. 38.", href: NEXUS("sen-1-0007-1375431") },
  { organo: "Sala Constitucional", numero: "Voto 2026-24826", fecha: "02-07-2026", tema: "Demora en resolver", criterio: "Excepción a la regla anterior: acogió un amparo por la demora de casi un año en resolver una apelación sobre disponibilidad de agua.", href: NEXUS("sen-1-0007-1408848") },
  { organo: "Sala Constitucional", numero: "Voto 2026-28581", fecha: "28-07-2026", tema: "Demora en resolver", criterio: "La demora en resolver recursos administrativos se discute en la vía contencioso-administrativa, salvo supuestos de excepción.", href: NEXUS("sen-1-0007-1415269") },
  { organo: "Sala Primera", numero: "Voto 515-F-S1-2024", fecha: "17-05-2024", tema: "Notificación electrónica", criterio: "Ante el vacío de la LGAP, la notificación electrónica en sede administrativa se rige por el art. 38 de la Ley de Notificaciones.", href: NEXUS("sen-1-0004-1229516") },
  { organo: "Sala Primera", numero: "Voto 1560-F-S1-2022", fecha: "07-07-2022", tema: "Plazo para demandar", criterio: "Si se recurrió, el año corre desde la notificación de lo resuelto, aunque la resolución llegue años después.", href: NEXUS("sen-1-0004-1102286") },
  { organo: "Sala Primera", numero: "Voto 32-F-S1-2022", fecha: "18-01-2022", tema: "Plazo para demandar", criterio: "Si se agotó la vía y el recurso se resolvió expresamente, aunque fuera tarde, el año para demandar corre desde esa notificación.", href: NEXUS("sen-1-0004-1075221") },
  { organo: "Sala Primera", numero: "Voto 2053-F-S1-2022", fecha: "29-09-2022", tema: "Nulidad absoluta", criterio: "La alegación de nulidad absoluta no es perpetua: está sujeta al plazo de un año.", href: NEXUS("sen-1-0004-1115309") },
  { organo: "Sala Primera", numero: "Voto 680-F-S1-2022", fecha: "22-03-2022", tema: "Formalidades sustanciales", criterio: "Solo anula la omisión que cambió la decisión o causó indefensión; no hay nulidad por la nulidad misma.", href: NEXUS("sen-1-0004-1080557") },
  { organo: "Sala Primera", numero: "Resolución 1429-A-S1-2024", fecha: "17-10-2024", tema: "Motivación", criterio: "Queda firme la nulidad absoluta de un acto de la CCSS que no analizó la prueba de descargo, por falta de motivación.", href: NEXUS("sen-1-0004-1258728") },
  { organo: "Sala Primera", numero: "Voto 8-F-S1-2026", fecha: "15-01-2026", tema: "Contratación administrativa", criterio: "El agotamiento preceptivo se exige solo cuando se discute la validez de un acto; una pretensión indemnizatoria puede ir directo al juez.", href: NEXUS("sen-1-0004-1363077") },
  { organo: "Sala Primera", numero: "Resolución 1050-S1-2026", fecha: "22-07-2026", tema: "Agotamiento municipal", criterio: "El agotamiento municipal es preceptivo, pero si el defecto se advierte en juicio se tiene por subsanado (CPCA, art. 120.4).", href: NEXUS("sen-1-0004-1416782") },
  { organo: "Sala Primera", numero: "Voto 920-F-S1-2026", fecha: "26-06-2026", tema: "Materia tributaria", criterio: "Para demandar rige el plazo de prescripción del derecho de fondo (CPCA, art. 41.2).", href: NEXUS("sen-1-0004-1403886") },
  { organo: "Tribunal de Casación Contencioso", numero: "Voto 103-F-TC-2025", fecha: "07-08-2025", tema: "Recurso de revisión", criterio: "Por ser extraordinario, el recurso de revisión no interrumpe el año para demandar.", href: NEXUS("sen-1-1011-1323288") },
  { organo: "Tribunal de Apelación Contencioso, Sección II", numero: "Voto 584-2020", fecha: "17-12-2020", tema: "Ejecución del acto", criterio: "El acto final puede ejecutarse aunque no esté firme: los recursos administrativos tienen efecto devolutivo.", href: NEXUS("sen-1-0034-1010955") },
  { organo: "Tribunal Contencioso Administrativo, jerarquía impropia municipal", numero: "Voto 2026-4285", fecha: "26-06-2026", tema: "Plazo municipal", criterio: "El quinto día del Código Municipal son cinco días hábiles y desplaza los tres días de la LGAP; acoge una apelación por inadmisión.", href: NEXUS("sen-1-0034-1410509") },
  { organo: "Tribunal Contencioso Administrativo, Sección IV", numero: "Voto 2024-6600", fecha: "30-09-2024", tema: "Notificación electrónica", criterio: "El art. 38 de la Ley de Notificaciones se aplica supletoriamente al plazo de tres días del art. 346 LGAP.", href: NEXUS("sen-1-0034-1257727") },
  { organo: "Tribunal Contencioso Administrativo", numero: "Voto 2024-1476", fecha: "08-03-2024", tema: "Notificación defectuosa", criterio: "Notificado el acto en un medio distinto del señalado, se tiene por hecha la notificación cuando la parte gestiona.", href: NEXUS("sen-1-0034-1223221") },
  { organo: "Tribunal Contencioso Administrativo, Sección IV", numero: "Voto 43-2023", fecha: "10-05-2023", tema: "Jerarquía impropia", criterio: "El art. 351.2 habilita solo al jerarca propio; el impropio no puede anular de oficio lo que no se recurrió.", href: NEXUS("sen-1-0034-1170723") },
  { organo: "Tribunal Contencioso Administrativo, Sección III", numero: "Voto 479-2019", fecha: "25-09-2019", tema: "Apelación", criterio: "La apelación puede interponerse sola, y su admisibilidad la decide el superior.", href: NEXUS("sen-1-0034-944688") },
  { organo: "Tribunal Contencioso Administrativo, Sección III", numero: "Voto 417-2019", fecha: "30-08-2019", tema: "Suspensión en lo municipal", criterio: "La apelación ante el Tribunal contra lo resuelto por la Alcaldía no suspende el acto; hace falta una medida cautelar.", href: NEXUS("sen-1-0034-944643") },
  { organo: "Tribunal Contencioso Administrativo, Sección VI", numero: "Voto 166-2016", fecha: "08-11-2016", tema: "Plazo y taxatividad", criterio: "Solo se impugna lo que la ley permite y dentro de su plazo; el recurso extemporáneo es inadmisible.", href: NEXUS("sen-1-0034-688662") },
  { organo: "Tribunal Contencioso Administrativo, Sección VI", numero: "Voto 99-2013", fecha: "31-07-2013", tema: "Recurso de revisión", criterio: "La revisión procede solo por las causales del art. 353; usarla como tercera instancia es improcedente.", href: NEXUS("sen-1-0034-580802") },
  { organo: "Tribunal Contencioso Administrativo, Sección VI", numero: "Voto 33-2013", fecha: "21-02-2013", tema: "Consulta jurídica previa", criterio: "Omitir la consulta del art. 356 no anula el acto que agota la vía si no causó perjuicio.", href: NEXUS("sen-1-0034-565589") },
];

const ADMINISTRATIVOS: Criterio[] = [
  { organo: "Procuraduría General", numero: "Dictamen C-037-2025", fecha: "24-02-2025", tema: "Notificación electrónica", criterio: "El art. 38 de la Ley de Notificaciones rige en los procedimientos de la LGAP, salvo norma especial que cuente desde el recibo." },
  { organo: "Procuraduría General", numero: "Dictamen C-016-98", fecha: "1998", tema: "Plazo de 24 horas", criterio: "Las veinticuatro horas se reducen a las horas en que el despacho debe estar abierto el día siguiente a la comunicación." },
  { organo: "Procuraduría General", numero: "Dictamen C-244-2015", fecha: "07-09-2015", tema: "Única alzada", criterio: "Deben evitarse las cadenas de recursos: lo resuelto en alzada no tiene ulterior recurso." },
  { organo: "Procuraduría General", numero: "Dictamen C-181-2012", fecha: "20-07-2012", tema: "Jerarquía impropia", criterio: "El jerarca impropio solo controla legalidad y en virtud de recurso; lo que resuelve es definitivo en sede administrativa." },
  { organo: "Procuraduría General", numero: "Dictamen C-300-2012", fecha: "05-11-2012", tema: "Demanda directa", criterio: "La audiencia de ocho días del art. 31.3 del CPCA procede solo si no se agotó la vía, y se da al superior jerárquico supremo." },
  { organo: "Procuraduría General", numero: "Dictamen C-030-2011", fecha: "2011", tema: "Efecto suspensivo", criterio: "El efecto suspensivo es excepcional y existe solo cuando una ley lo da, como el Estatuto de Servicio Civil." },
  { organo: "Contraloría General", numero: "R-DFOE-DEC-00016-2026", fecha: "19-08-2026", tema: "Notificación electrónica", criterio: "Tuvo por presentado en tiempo un recurso que solo llegaba al plazo gracias al día adicional del art. 38.", href: CGR("2026/SIGYD_D/SIGYD_D_2026013798.pdf") },
  { organo: "Contraloría General", numero: "R-DCA-SICOP-00888-2023", fecha: "07-08-2023", tema: "Contratación pública", criterio: "En compras públicas el plazo corre desde la comunicación en el sistema, sin el día adicional de la notificación electrónica." },
  { organo: "Contraloría General", numero: "R-DFOE-CIU-00002-2023", fecha: "25-04-2023", tema: "Suspensión y revisión", criterio: "La suspensión es excepcional y su perjuicio debe constatarse; la revisión no rescata una orden firme por falta de recurso oportuno.", href: CGR("2023/SIGYD_D/SIGYD_D_2023006441.pdf") },
  { organo: "Contraloría General", numero: "Oficio DJ-0655-2012", fecha: "28-06-2012", tema: "Elevación de la apelación", criterio: "El órgano director que rechaza la apelación en lugar de elevarla infringe el art. 349 y causa indefensión.", href: CGR("2012/SIGYD_D_2012010433.pdf") },
];

const SCIJ = (id: number) =>
  `https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=${id}`;

const NORMATIVA: { nombre: string; detalle: string; articulos: string; id: number }[] = [
  { nombre: "Constitución Política de la República de Costa Rica", detalle: "7 de noviembre de 1949", articulos: "Arts. 173, 182 y 184", id: 871 },
  { nombre: "Ley General de la Administración Pública", detalle: "Ley N.° 6227, 2 de mayo de 1978", articulos: "Arts. 126, 127, 131, 133, 136, 141, 148, 158, 166, 167, 169, 175, 176, 223, 229, 243, 247, 256, 258, 260, 261, 329 y 342 a 356", id: 13231 },
  { nombre: "Código Procesal Contencioso-Administrativo", detalle: "Ley N.° 8508, 28 de abril de 2006", articulos: "Arts. 31, 39, 40, 41 y 120", id: 57436 },
  { nombre: "Ley de Notificaciones Judiciales", detalle: "Ley N.° 8687, 4 de diciembre de 2008", articulos: "Arts. 1, 20 y 38", id: 64786 },
  { nombre: "Ley para establecer el correo electrónico como medio de notificación para las sociedades mercantiles", detalle: "Ley N.° 10597, 5 de noviembre de 2024", articulos: "Reforma de los arts. 20 de la Ley N.° 8687 y 243 de la LGAP", id: 103387 },
  { nombre: "Código Municipal", detalle: "Ley N.° 7794, 30 de abril de 1998", articulos: "Arts. 163 a 171", id: 40197 },
  { nombre: "Código de Normas y Procedimientos Tributarios", detalle: "Ley N.° 4755, 3 de mayo de 1971", articulos: "Arts. 145, 146 y 156", id: 6530 },
  { nombre: "Ley General de Contratación Pública", detalle: "Ley N.° 9986, 27 de mayo de 2021", articulos: "Régimen de recursos", id: 94469 },
  { nombre: "Estatuto de Servicio Civil", detalle: "Ley N.° 1581, 30 de mayo de 1953", articulos: "Efecto de los recursos", id: 32708 },
  { nombre: "Corte Plena, circular N.° 42-2011", detalle: "Aplicación del artículo 38 de la Ley de Notificaciones Judiciales, 5 de abril de 2011", articulos: "Cómputo de la notificación electrónica", id: 70140 },
];

function ListaCriterios({ titulo, items }: { titulo: string; items: Criterio[] }) {
  return (
    <section className="gc-juris-grupo">
      <span className="gc-fig-label">{titulo}</span>
      <ol>
        {items.map((c) => (
          <li key={c.numero} className="gc-juris-item">
            <span className="gc-juris-id">
              <b>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer">
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
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function BibliografiaRecursosLgap() {
  return (
    <div className="gc-fig gc-biblio">
      <section className="gc-juris-grupo">
        <span className="gc-fig-label">Normativa</span>
        <ol>
          {NORMATIVA.map((n) => (
            <li key={n.id} className="gc-juris-item">
              <span className="gc-juris-id">
                <b>
                  <a href={SCIJ(n.id)} target="_blank" rel="noopener noreferrer">
                    {n.nombre}
                  </a>
                </b>
                <span className="gc-juris-org">{n.detalle}</span>
              </span>
              <span className="gc-juris-criterio">
                <span className="gc-juris-tema">Disposiciones revisadas</span>
                {n.articulos}
              </span>
            </li>
          ))}
        </ol>
      </section>
      <ListaCriterios titulo="Jurisprudencia judicial" items={JUDICIALES} />
      <ListaCriterios titulo="Criterios administrativos" items={ADMINISTRATIVOS} />
      <p className="gc-fig-source">
        Textos normativos: Sistema Costarricense de Información Jurídica (SINALEVI), en su versión
        vigente. Jurisprudencia judicial: Nexus del Poder Judicial.
      </p>
    </div>
  );
}
