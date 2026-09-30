/* Figuras y fuentes de la guía «Agotamiento de la vía administrativa en
   Costa Rica». Normas verificadas en el texto vigente (SINALEVI y bases GC) y
   votos cotejados en Nexus el 29-09-2026. */

import { RunningHead } from "@/components/ui/RunningHead";

const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;
const NEXUS = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;
const PGR = (p1: number) => `https://sinalevi.go.cr/ResultadosPronunciamiento/Informacion?param1=${p1}&param2=1&param3=1`;
const CPCA_TEXTO = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1";
const ART = (n: string) => `/articulos/que-es-el-cpca-costa-rica#art-${n}`;

type Materia = { materia: string; regla: string; detalle: string; norma: string };

const MATERIAS: Materia[] = [
  {
    materia: "Contencioso-administrativo en general",
    regla: "Facultativo",
    detalle: "Se puede demandar sin recurrir antes. Si se demanda sin agotar, el jerarca supremo tiene ocho días hábiles para revisar la conducta.",
    norma: "CPCA, art. 31.1 y 31.3-31.5",
  },
  {
    materia: "Acuerdos y actos municipales",
    regla: "Obligatorio",
    detalle: "El recurso final lo resuelve el Tribunal Contencioso Administrativo como jerarca impropio. Si la municipalidad alega la omisión y no se subsana, la demanda es inadmisible.",
    norma: "Constitución, art. 173; CPCA, art. 31.1",
  },
  {
    materia: "Contratación administrativa",
    regla: "Obligatorio cuando se discute la validez de un acto que debe recurrirse ante la Contraloría",
    detalle: "El reclamo puramente indemnizatorio queda libre de ese requisito.",
    norma: "CPCA, art. 31.1; Constitución, arts. 182 y 184",
  },
  {
    materia: "Laboral contra el Estado y sus instituciones",
    regla: "Facultativo",
    detalle: "Si la parte eligió agotar, la omisión no se exige de oficio y se tiene por subsanada si la demandada no la alega a tiempo. En el empleo municipal la jurisprudencia aplica la regla del artículo 173.",
    norma: "Código de Trabajo, arts. 460 y 461",
  },
  {
    materia: "Tributaria",
    regla: "Facultativo",
    detalle: "El recurso ante el Tribunal Fiscal Administrativo es opcional; sus fallos agotan la vía administrativa.",
    norma: "Código de Normas y Procedimientos Tributarios, arts. 158 y 165",
  },
  {
    materia: "Recurso de amparo",
    regla: "No se exige",
    detalle: "Si se usan los recursos administrativos, el plazo de prescripción del amparo se suspende mientras no se resuelvan.",
    norma: "Ley de la Jurisdicción Constitucional, art. 31",
  },
];

export function MapaAgotamiento() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-mapa-agotamiento">
      <header className="gc-fig-head">
        <RunningHead title="Agotamiento" locator="Figura 1" />
        <p id="fig-mapa-agotamiento" className="gc-fig-title">
          ¿Hay que agotar la vía? La respuesta por materia
        </p>
        <p className="gc-fig-lead">La regla general es el agotamiento facultativo; las excepciones vienen de la Constitución.</p>
      </header>
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Materia</th>
                <th scope="col">Regla</th>
              </tr>
            </thead>
            <tbody>
              {MATERIAS.map((m) => (
                <tr key={m.materia}>
                  <td className="gc-recurso">{m.materia}</td>
                  <td>
                    <strong>{m.regla}.</strong> {m.detalle} <span className="gc-fig-ref">{m.norma}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-source">
        <span>Fuente:</span> Código Procesal Contencioso-Administrativo, Constitución Política, Código de Trabajo, Código
        de Normas y Procedimientos Tributarios y Ley de la Jurisdicción Constitucional, textos vigentes; Sala
        Constitucional, votos 2006-3669 y 2006-15487.
      </p>
    </figure>
  );
}

type Plazo = { que: string; plazo: string; efecto: string; art: string };

const PLAZOS: Plazo[] = [
  { que: "Solicitud ante la Administración", plazo: "Dos meses", efecto: "Sin respuesta notificada, puede tenerse por desestimada para recurrir o demandar, salvo que la ley dé al silencio efecto positivo.", art: "32" },
  { que: "Recurso ordinario (revocatoria o apelación)", plazo: "Un mes", efecto: "Sin resolución notificada, puede tenerse por desestimado y por agotada la vía administrativa.", art: "31" },
  { que: "Apelación ante un jerarca impropio", plazo: "Un mes", efecto: "Es el plazo máximo para resolver el recurso.", art: "31" },
  { que: "Demanda sin agotar contra el Estado", plazo: "Ocho días hábiles", efecto: "Antes del emplazamiento, el jerarca supremo puede confirmar, modificar, anular, revocar o cesar la conducta; si calla o la mantiene, corre el plazo de contestación.", art: "31" },
  { que: "Demanda sin agotar contra un ente descentralizado", plazo: "Ocho días", efecto: "Dentro del emplazamiento, con la misma facultad del jerarca y sin suspender el proceso.", art: "31" },
  { que: "Plazo para demandar", plazo: "Un año", efecto: "Desde la notificación del acto; si se recurrió y el recurso se resolvió expresamente, desde la notificación de esa resolución.", art: "39" },
];

export function PlazosVia() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-plazos-via">
      <header className="gc-fig-head">
        <RunningHead title="Plazos" locator="Figura 2" />
        <p id="fig-plazos-via" className="gc-fig-title">
          Los plazos de la vía administrativa y del silencio
        </p>
        <p className="gc-fig-lead">Qué ocurre si la Administración no responde y cuánto tiempo queda para demandar.</p>
      </header>
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Situación</th>
                <th scope="col">Plazo y efecto</th>
              </tr>
            </thead>
            <tbody>
              {PLAZOS.map((p) => (
                <tr key={p.que}>
                  <td className="gc-recurso">{p.que}</td>
                  <td>
                    <strong>{p.plazo}.</strong> {p.efecto}{" "}
                    <span className="gc-fig-ref">
                      <a href={ART(p.art)}>CPCA, art. {p.art}</a>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-source">
        <span>Fuente:</span> Código Procesal Contencioso-Administrativo, arts. 31, 32 y 39, texto vigente en{" "}
        <a href={CPCA_TEXTO} {...EXT}>
          SINALEVI
        </a>
        ; Sala Primera, votos 32-F-S1-2022 y 1776-F-S1-2024.
      </p>
    </figure>
  );
}

type Fuente = { titulo: string; detalle: string; href?: string };
type Criterio = { numero: string; organo: string; fecha: string; tema: string; criterio: string; href: string; gc?: boolean };

const NORMAS: Fuente[] = [
  { titulo: "Constitución Política", detalle: "Arts. 41, 49, 173, 182 y 184", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=871&param2=147492&param3=1" },
  { titulo: "Código Procesal Contencioso-Administrativo", detalle: "Ley N.° 8508, arts. 31 a 33, 39, 41 y 120.4", href: CPCA_TEXTO },
  { titulo: "Ley General de la Administración Pública", detalle: "Ley N.° 6227, art. 126", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1" },
  { titulo: "Código de Trabajo", detalle: "Arts. 460 y 461 (Reforma Procesal Laboral, Ley N.° 9343)" },
  { titulo: "Código de Normas y Procedimientos Tributarios", detalle: "Ley N.° 4755, arts. 158 y 165" },
  { titulo: "Ley de la Jurisdicción Constitucional", detalle: "Ley N.° 7135, art. 31" },
];

const SC = "Sala Constitucional";
const S1 = "Sala Primera";

const JURISPRUDENCIA: Criterio[] = [
  { numero: "Voto 2006-3669", organo: SC, fecha: "15-03-2006", tema: "Agotamiento facultativo", criterio: "Anula el agotamiento obligatorio de la ley de 1966 y deja a salvo la materia municipal y la contratación ante la Contraloría.", href: NEXUS("sen-1-0007-337671") },
  { numero: "Voto 376-F-2006", organo: S1, fecha: "21-06-2006", tema: "Prescripción", criterio: "El reclamo en sede administrativa interrumpe la prescripción del derecho a la indemnización.", href: NEXUS("sen-1-0004-764390"), gc: true },
  { numero: "Voto 2006-15487", organo: SC, fecha: "25-10-2006", tema: "Materia laboral", criterio: "Anula el agotamiento obligatorio para demandar al Estado en la vía laboral (art. 402 del Código de Trabajo de entonces).", href: NEXUS("sen-1-0007-361440") },
  { numero: "Sentencia 1293-2010", organo: "Tribunal Contencioso Administrativo", fecha: "12-04-2010", tema: "Materia tributaria", criterio: "El recurso ante el Tribunal Fiscal Administrativo es facultativo.", href: NEXUS("sen-1-0034-478570") },
  { numero: "Voto 2012-017737", organo: SC, fecha: "12-12-2012", tema: "Materia municipal", criterio: "La Constitución exige agotar en lo municipal, pero no regula cómo se acredita; la subsanación del art. 120.4 CPCA es conforme.", href: NEXUS("sen-1-0007-569858") },
  { numero: "Voto 1131-F-S1-2017", organo: S1, fecha: "28-09-2017", tema: "Los ocho días", criterio: "El plazo del art. 31.3 abre un acceso rápido al juez; si la Administración satisface después, rige otra regla de costas.", href: NEXUS("sen-1-0004-950963") },
  { numero: "Voto 2021-000034", organo: "Sala Segunda", fecha: "08-01-2021", tema: "Materia laboral", criterio: "Agotar es facultativo, pero quien demanda antes de la resolución administrativa queda atado por la cosa juzgada.", href: NEXUS("sen-1-0005-1013629") },
  { numero: "Voto 32-F-S1-2022", organo: S1, fecha: "18-01-2022", tema: "Caducidad", criterio: "Si se recurrió y el recurso se resolvió expresamente, el año para demandar corre desde su notificación.", href: NEXUS("sen-1-0004-1075221") },
  { numero: "Resolución 2022-000116", organo: "Tribunal de Apelación Contencioso", fecha: "01-04-2022", tema: "Materia municipal", criterio: "Sin el recurso ante el Tribunal como jerarca impropio, la demanda contra un acto municipal es inadmisible si se alega a tiempo.", href: NEXUS("sen-1-0034-1091529") },
  { numero: "Voto 2023-000094", organo: "Tribunal de Apelación Civil y Trabajo de Puntarenas", fecha: "24-05-2023", tema: "Empleo municipal", criterio: "En despidos municipales el agotamiento es preceptivo por el art. 173 de la Constitución.", href: NEXUS("sen-1-0034-1189025") },
  { numero: "Voto 1753-F-S1-2024", organo: S1, fecha: "12-12-2024", tema: "Contratación", criterio: "No objetar el cartel ante la Contraloría no es una falta de agotamiento preceptivo.", href: NEXUS("sen-1-0004-1267709") },
  { numero: "Voto 1776-F-S1-2024", organo: S1, fecha: "12-12-2024", tema: "Caducidad", criterio: "Criterio vigente: la caducidad se cuenta desde la notificación del acto definitivo.", href: NEXUS("sen-1-0004-1267730") },
  { numero: "Voto 1801-F-S1-2024", organo: S1, fecha: "12-12-2024", tema: "Materia tributaria", criterio: "En la impugnación de un acto determinativo rige el plazo del art. 51 del CNPT y no el art. 39 CPCA.", href: NEXUS("sen-1-0004-1267754") },
  { numero: "Voto 2026-000535", organo: SC, fecha: "06-01-2026", tema: "Amparo por omisión", criterio: "Sin gestión previa ante la autoridad no hay omisión imputable.", href: NEXUS("sen-1-0007-1362038") },
  { numero: "Voto 8-F-S1-2026", organo: S1, fecha: "15-01-2026", tema: "Contratación", criterio: "El agotamiento se exige cuando se discute la validez de un acto; el reclamo indemnizatorio queda libre.", href: NEXUS("sen-1-0004-1363077") },
  { numero: "Voto 1050-S1-2026", organo: S1, fecha: "22-07-2026", tema: "Materia municipal", criterio: "El agotamiento municipal es preceptivo porque resuelve un tercero, el Tribunal como jerarca impropio.", href: NEXUS("sen-1-0004-1416782") },
];

const PROCURADURIA: Fuente[] = [
  { titulo: "Dictamen C-445-2006", detalle: "08-11-2006 · Agotamiento facultativo en materia administrativa y laboral", href: PGR(14231) },
  { titulo: "Dictamen C-066-2008", detalle: "06-03-2008 · Los ocho días del art. 31.3 CPCA", href: PGR(15063) },
  { titulo: "Dictamen C-188-2009", detalle: "03-07-2009 · El reclamo administrativo interrumpe la prescripción", href: PGR(15934) },
  { titulo: "Dictamen C-255-2013", detalle: "19-11-2013 · Regla general y excepciones", href: PGR(17848) },
  { titulo: "Dictamen C-202-2017", detalle: "11-09-2017 · Acceso directo a la vía judicial", href: PGR(20132) },
  { titulo: "Opinión jurídica OJ-122-2023", detalle: "22-11-2023 · Apelación facultativa ante el Tribunal Fiscal Administrativo", href: PGR(24156) },
];

const ANTECEDENTES: Fuente[] = [
  { titulo: "Corte Plena, acta n.º 21-2002, artículo XXII", detalle: "20-05-2002 · Exposición de la comisión redactora del CPCA" },
  { titulo: "CPCA, exposición de motivos del proyecto (expediente 15.134)", detalle: "Derecho opcional al agotamiento, salvo materia municipal y contratación" },
  { titulo: "CPCA, subcomisión, actas n.º 9 a 12", detalle: "02-03-2005 a 16-03-2005 · Carácter facultativo, propuesta de la Procuraduría y plazos del silencio" },
  { titulo: "CPCA, Comisión Permanente de Asuntos Jurídicos, sesión n.º 38", detalle: "21-03-2006 · Texto final del art. 31 tras el voto 2006-3669" },
];

const DOCTRINA: Fuente[] = [
  { titulo: "González Camacho, Óscar Eduardo. La justicia administrativa frente a la inactividad material de la Administración Pública", detalle: "Tesis doctoral, Universidad de Alcalá, 1998, pp. 160-161" },
  { titulo: "González Camacho, Óscar Eduardo. «Sentencia»", detalle: "Cap. XIII de El nuevo proceso contencioso-administrativo, Poder Judicial, Escuela Judicial, 2006, p. 438" },
  { titulo: "Rojas Ortega, Alex. «El agotamiento de la vía administrativa en el derecho administrativo moderno»", detalle: "Revista IUS Doctrina (UCR), vol. 14, n.º 1, 2021" },
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

export function FuentesAgotamiento() {
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
      <Grupo titulo="Antecedentes legislativos" items={ANTECEDENTES} />
      <Grupo titulo="Doctrina" items={DOCTRINA} />
      <p className="gc-fig-source">
        Textos normativos: SINALEVI y bases normativas de Corporación GC, en su versión vigente. Jurisprudencia: Nexus del
        Poder Judicial. Dictámenes: SINALEVI. Actas: expediente legislativo 15.134 y actas de Corte Plena.
      </p>
    </div>
  );
}
