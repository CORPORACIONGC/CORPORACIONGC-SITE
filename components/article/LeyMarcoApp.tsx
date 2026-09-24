/* Figuras de la pieza «La Sala Constitucional y la Ley Marco de APP».
   Mismo lenguaje editorial que las figuras de la guía de recursos
   (bloque .gc-fig de app/globals.css): antetítulo con línea dorada, filetes
   finos, filas numeradas y línea de fuente al pie. Mientras la Sala no
   publique el texto íntegro del voto 2026-034680, cada fila indica de dónde
   sale el dato: la parte dispositiva citada textualmente por la prensa, o
   la reseña de un medio. */

import { RunningHead } from "@/components/ui/RunningHead";

const NEXUS = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;
const SCIJ = (id: number) =>
  `https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=${id}`;

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

function Ref({ children }: { children: React.ReactNode }) {
  return <span className="gc-fig-ref">{children}</span>;
}

/* Identificadores de Nexus de los votos citados. */
const NEXUS_IDS: Record<string, string> = {
  "495-92": "sen-1-0007-80326",
  "1696-92": "sen-1-0007-80431",
  "3309-94": "sen-1-0007-81035",
  "998-98": "sen-1-0007-114246",
  "2318-98": "sen-1-0007-84637",
  "5947-98": "sen-1-0007-82607",
  "919-99": "sen-1-0007-191209",
  "5445-99": "sen-1-0007-158355",
  "9524-99": "sen-1-0007-193861",
  "9527-99": "sen-1-0007-965851",
  "8193-2000": "sen-1-0007-131268",
  "2002-1221": "sen-1-0007-184030",
  "8675-2005": "sen-1-0007-312247",
  "2010-12026": "sen-1-0007-482113",
  "2018-2396": "sen-1-0007-753360",
  "17098-2021": "sen-1-0007-1049802",
  "31179-2023": "sen-1-0007-1224138",
  "2024-21375": "sen-1-0007-1250313",
  "2025-27397": "sen-1-0007-1367041",
  "2026-16432": "sen-1-0007-1386794",
};

function V({ n }: { n: string }) {
  return (
    <a href={NEXUS(NEXUS_IDS[n])} {...EXT}>
      {n}
    </a>
  );
}

/* ── Figura 1. Lo que declaró la Sala, norma por norma ──────────────── */

type Fila = {
  norma: string;
  regula: string;
  resultado: string;
  parametro: string;
  fuente: "Por tanto" | "La Nación" | "Delfino";
  inconstitucional: boolean;
};

const FILAS: Fila[] = [
  {
    norma: "Arts. 23, 24 (párrafo segundo), 25, 26, 27, 30 d) y 36 h)",
    regula:
      "Creaban la ANAPP como ente público no estatal, con patrimonio propio, Junta de tres ministros y una Dirección General que ejecutaba los proyectos y dictaminaba con carácter vinculante sus modificaciones.",
    resultado: "Inconstitucionales, por mayoría",
    parametro: "Autonomía, Constitución arts. 188 y 189.3. Salvaron el voto Castillo, Salazar y Garro.",
    fuente: "Por tanto",
    inconstitucional: true,
  },
  {
    norma: "Art. 26 e)",
    regula:
      "Excluía a la ANAPP de los artículos 18, 20 y 78 de la Ley Orgánica de la Contraloría: aprobación del presupuesto, aprobación de contratos y régimen de sus servidores.",
    resultado: "Inconstitucional",
    parametro: "Contraloría, Constitución arts. 183 y 184.",
    fuente: "Por tanto",
    inconstitucional: true,
  },
  {
    norma: "Arts. 26 f) y 33",
    regula: "Sacaban a la ANAPP de la Ley Marco de Empleo Público y regían a su personal por el Código de Trabajo.",
    resultado: "Inconstitucionales",
    parametro: "Constitución arts. 33, 191 y 192. Según La Nación, los tres magistrados disidentes las admitían si no alcanzaban a quienes participan en la gestión administrativa.",
    fuente: "Por tanto",
    inconstitucional: true,
  },
  {
    norma: "Art. 40",
    regula: "Régimen tarifario de los contratos APP con servicios públicos regulados y papel de la Aresep.",
    resultado: "Inconstitucional, por mayoría, salvo dos reglas",
    parametro:
      "Constitución art. 188. Se mantienen el plazo reglamentario de la Aresep con silencio sin objeciones y la vía de controversias posterior.",
    fuente: "La Nación",
    inconstitucional: true,
  },
  {
    norma: "Art. 9, párrafo final",
    regula: "Permitía incluir en la tarifa o precio público los pagos y las inversiones del contrato.",
    resultado: "Inconstitucional",
    parametro: "Eficacia y eficiencia, Constitución art. 182.",
    fuente: "La Nación",
    inconstitucional: true,
  },
  {
    norma: "Arts. 21 b) y 40 d)",
    regula: "Multas de la Aresep al contratista por cobros irregulares o por un servicio deficiente.",
    resultado: "Inconstitucionales",
    parametro: "Certeza en materia sancionatoria.",
    fuente: "La Nación",
    inconstitucional: true,
  },
  {
    norma: "Art. 44 i)",
    regula: "Daba al proponente de una iniciativa privada una «retribución» en la evaluación de su oferta.",
    resultado: "Inconstitucional",
    parametro: "Igualdad de trato y libre concurrencia, Constitución art. 182.",
    fuente: "La Nación",
    inconstitucional: true,
  },
  {
    norma: "Arts. 24, 30 d) y 36 c), e) y h)",
    regula:
      "Imponían a la administración titular convenios con la ANAPP y la intervención de esta en proyectos de entes con autonomía.",
    resultado: "Inconstitucionales",
    parametro: "Constitución arts. 55, 73, 84, 170 y 188: PANI, CCSS, universidades, municipalidades e instituciones autónomas.",
    fuente: "La Nación",
    inconstitucional: true,
  },
  {
    norma: "Art. 12 c)",
    regula: "Permitía crear por reglamento modalidades de APP distintas de las previstas en la ley.",
    resultado: "Inconstitucional",
    parametro: "Reserva de ley.",
    fuente: "Delfino",
    inconstitucional: true,
  },
  {
    norma: "Arts. 41, 43 c) y d) y 46 c)",
    regula: "Papel de la Setena y requisitos ambientales de los proyectos.",
    resultado: "Sin vicio",
    parametro: "Ambiente, Constitución art. 50.",
    fuente: "La Nación",
    inconstitucional: false,
  },
];

export function FalloSalaApp() {
  return (
    <figure className="gc-fig gc-fig-tabla" aria-labelledby="fig-fallo-app">
      <FigHead
        id="fig-fallo-app"
        n={1}
        kicker="El voto 2026-034680"
        title="Lo que declaró la Sala, norma por norma"
        lead="Mientras no se publique el texto íntegro, la última columna indica la fuente de cada dato: «Por tanto» es la parte dispositiva citada textualmente por la prensa; los demás son reseñas del voto."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Norma del proyecto</th>
                <th scope="col">Qué regulaba</th>
                <th scope="col">Resultado</th>
                <th scope="col">Dato</th>
              </tr>
            </thead>
            <tbody>
              {FILAS.map((f) => (
                <tr key={f.norma}>
                  <td className="gc-recurso">{f.norma}</td>
                  <td>{f.regula}</td>
                  <td className="gc-plazo">
                    <span>
                      <b>{f.resultado}</b>
                      {f.parametro}
                    </span>
                  </td>
                  <td>
                    <Ref>{f.fuente}</Ref>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        Según la prensa, la Sala declaró inevacuables otros puntos de la consulta y no se conoce todavía qué resolvió
        sobre el artículo 14 (límite de compromisos fiscales) ni sobre la delegación de potestades públicas.
      </p>
      <FigSource>
        Sala Constitucional, voto 2026-034680, del 9 de setiembre de 2026 (parte dispositiva citada por{" "}
        <a href="https://observador.cr/sala-iv-declara-inconstitucional-el-proyecto-sobre-alianzas-publico-privadas/" {...EXT}>
          El Observador
        </a>
        ); reseñas de{" "}
        <a href="https://www.nacion.com/politica/sala-constitucional-encuentra-vicios-en-12/56IRBGUSNNHHLDJ4OEA2QOXG2Y/story/" {...EXT}>
          La Nación
        </a>{" "}
        y{" "}
        <a href="https://delfino.cr/2026/09/sala-iv-encuentra-multiples-inconstitucionalidades-en-proyecto-de-alianzas-publico-privadas" {...EXT}>
          Delfino
        </a>
        ; redacción final del expediente 24.009, del 21 de mayo de 2026.
      </FigSource>
    </figure>
  );
}

/* ── Figura 2. Qué sigue en la Asamblea ─────────────────────────────── */

const PASOS: { quien: string; que: string; cuando: string; rama?: { cuando: string; que: string } }[] = [
  {
    quien: "Sala Constitucional",
    que: "Evacua la consulta y comunica el dictamen a la Asamblea. Mientras tanto, solo estaba suspendida la votación final del proyecto.",
    cuando: "9 de setiembre de 2026",
  },
  {
    quien: "Presidencia de la Asamblea",
    que: "Comunica la opinión al Plenario y, como hay objeciones, remite el expediente a la Comisión sobre Consultas de Constitucionalidad.",
    cuando: "De inmediato, al ser notificada",
  },
  {
    quien: "Comisión sobre Consultas de Constitucionalidad",
    que: "Puede pedir aclaración o adición a la Sala y dictamina. Sus cambios deben limitarse a lo que resulte de la opinión de la Sala.",
    cuando: "En el plazo que fije la Presidencia, prorrogable",
  },
  {
    quien: "Plenario",
    que: "Conoce el dictamen de la Comisión. Si el texto se modifica, el proyecto vuelve al primer lugar de Primeros Debates y puede consultarse de nuevo; si no, pasa a segundo debate.",
    cuando: "Sin plazo legal",
    rama: {
      cuando: "Si se aprueba sin corregir",
      que: "la Asamblea puede hacerlo, porque los vicios son de fondo, pero las normas quedan expuestas a una acción de inconstitucionalidad posterior.",
    },
  },
  {
    quien: "Poder Ejecutivo",
    que: "Aprobado en segundo debate, sanciona y publica la ley, que rige desde su publicación. Tiene doce meses para reglamentarla.",
    cuando: "12 meses para el reglamento",
  },
];

export function RutaLegislativaApp() {
  return (
    <figure className="gc-fig gc-fig-flujo" aria-labelledby="fig-ruta-app">
      <FigHead id="fig-ruta-app" n={2} kicker="Paso a paso" title="Qué sigue para el proyecto 24.009 en la Asamblea" />
      <ol className="gc-flujo">
        <li className="gc-flujo-cab" aria-hidden="true">
          <span />
          <span>Quién actúa</span>
          <span>Qué ocurre</span>
          <span>Cuándo</span>
        </li>
        {PASOS.map((p, i) => (
          <li key={i} className="gc-flujo-paso">
            <span className="gc-fig-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="gc-flujo-quien">{p.quien}</span>
            <span className="gc-flujo-que">{p.que}</span>
            <span className="gc-flujo-plazo">{p.cuando}</span>
            {p.rama && (
              <span className="gc-flujo-rama">
                <b>{p.rama.cuando}:</b> {p.rama.que}
              </span>
            )}
          </li>
        ))}
      </ol>
      <FigSource>
        Ley de la Jurisdicción Constitucional (Ley N.° 7135), arts. 96, 98, 100 y 101; Reglamento de la Asamblea
        Legislativa, art. 146; Sala Constitucional, votos <V n="2010-12026" /> y <V n="2002-1221" />; redacción final del
        proyecto 24.009, art. 62 y norma de vigencia.
      </FigSource>
    </figure>
  );
}

/* ── Figura 3. Qué régimen aplica a cada proyecto ───────────────────── */

const SITUACIONES: { situacion: string; hoy: string; siLey: React.ReactNode }[] = [
  {
    situacion: "Contrato de concesión firmado o en ejecución",
    hoy: "Ley 7762",
    siLey: <>Sigue bajo la Ley 7762, salvo que la Administración y el concesionario acuerden juntos aplicar la nueva ley. <Ref>Transitorio I</Ref></>,
  },
  {
    situacion: "Adjudicación en firme, sin contrato todavía",
    hoy: "Ley 7762",
    siLey: <>Igual que el caso anterior. <Ref>Transitorio I</Ref></>,
  },
  {
    situacion: "Licitación con ofertas presentadas o adjudicación no firme",
    hoy: "Ley 7762",
    siLey: <>La Administración decide, por acto motivado, si la concluye con la Ley 7762 o la adapta a la nueva ley. <Ref>Transitorio II</Ref></>,
  },
  {
    situacion: "Licitación iniciada, sin ofertas",
    hoy: "Ley 7762",
    siLey: <>Debe adaptarse a la nueva ley. <Ref>Transitorio II</Ref></>,
  },
  {
    situacion: "Iniciativa privada por presentar",
    hoy: "Ley 7762, art. 20: el proponente compite en las mismas condiciones y recupera sus costos si no gana",
    siLey: <>Art. 44 del proyecto, sin la ventaja en la evaluación del inciso i), que la Sala declaró inconstitucional. <Ref>Reseña de La Nación</Ref></>,
  },
];

export function RegimenProyectosApp() {
  return (
    <figure className="gc-fig gc-fig-tabla" aria-labelledby="fig-regimen-app">
      <FigHead
        id="fig-regimen-app"
        n={3}
        kicker="Transición"
        title="Qué régimen aplica a cada proyecto"
        lead="Hoy rige la Ley 7762 en todos los casos. La última columna muestra lo que dispondría el texto actual del proyecto si llegara a ser ley."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Situación del proyecto</th>
                <th scope="col">Hoy</th>
                <th scope="col">Si el 24.009 se aprueba como está</th>
              </tr>
            </thead>
            <tbody>
              {SITUACIONES.map((s) => (
                <tr key={s.situacion}>
                  <td className="gc-recurso">{s.situacion}</td>
                  <td>{s.hoy}</td>
                  <td>{s.siLey}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        Los transitorios encargan a la ANAPP las funciones del Consejo Nacional de Concesiones. Como la Sala objetó la
        creación de la agencia, esta parte del texto cambiará si la Asamblea la rediseña.
      </p>
      <FigSource>
        Ley General de Concesión de Obras Públicas con Servicios Públicos (Ley N.° 7762), arts. 5 y 20; redacción final del
        proyecto 24.009, arts. 44 y 61 y transitorios I y II.
      </FigSource>
    </figure>
  );
}

/* ── Fuentes ─────────────────────────────────────────────────────────── */

const PGR = (id: number) => `https://sinalevi.go.cr/ResultadosPronunciamiento/Informacion?param1=${id}&param2=1&param3=1`;

type Fuente = { titulo: string; detalle: string; href: string };
type Criterio = { numero: string; organo: string; fecha: string; tema: string; criterio: string; href: string };

const DOCUMENTOS: Fuente[] = [
  {
    titulo: "Proyecto de Ley Marco de las Asociaciones Público Privadas, redacción final",
    detalle: "Expediente legislativo N.° 24.009, 21 de mayo de 2026 (copia publicada por Delfino)",
    href: "https://d1qqtien6gys07.cloudfront.net/wp-content/uploads/2026/06/24009_Dictamen_REDACCION_FINAL.pdf",
  },
  {
    titulo: "Consulta facultativa de constitucionalidad",
    detalle: "Escrito de veinte diputados, presentado el 21 de mayo de 2026 (copia publicada por Delfino)",
    href: "https://d1qqtien6gys07.cloudfront.net/wp-content/uploads/2026/06/24.009-Consulta-Facultativa-de-Constitucionalidad-Asociaciones-Publico-Privadas.pdf",
  },
  {
    titulo: "Ficha del expediente 24.009",
    detalle: "Textos, votaciones y proponentes (Delfino)",
    href: "https://delfino.cr/asamblea/proyecto/24009",
  },
];

const NORMAS: Fuente[] = [
  { titulo: "Constitución Política", detalle: "Arts. 33, 50, 55, 73, 84, 170, 182, 183, 184, 188, 189, 191 y 192", href: SCIJ(871) },
  { titulo: "Ley de la Jurisdicción Constitucional", detalle: "Ley N.° 7135, arts. 96 a 101", href: SCIJ(38533) },
  { titulo: "Reglamento de la Asamblea Legislativa", detalle: "Art. 146, trámite de la opinión consultiva", href: SCIJ(46479) },
  { titulo: "Ley General de Concesión de Obras Públicas con Servicios Públicos", detalle: "Ley N.° 7762, arts. 1, 5, 19, 20 y 50", href: SCIJ(30464) },
  { titulo: "Ley Orgánica de la Contraloría General de la República", detalle: "Ley N.° 7428, arts. 18, 20 y 78", href: SCIJ(21629) },
  { titulo: "Ley de la Autoridad Reguladora de los Servicios Públicos", detalle: "Ley N.° 7593", href: SCIJ(26314) },
];

const JURISPRUDENCIA: Criterio[] = [
  { numero: "Voto 495-92", organo: "Sala Constitucional", fecha: "25-02-1992", tema: "Autonomía del PANI", criterio: "La ley no puede permitir que otros órganos, incluido el Poder Ejecutivo, intervengan en la independencia administrativa de una institución autónoma.", href: NEXUS(NEXUS_IDS["495-92"]) },
  { numero: "Voto 1696-92", organo: "Sala Constitucional", fecha: "23-08-1992", tema: "Empleo público", criterio: "Los artículos 191 y 192 fundan un régimen de empleo de Derecho Público para el sector público, con exclusión de quienes no participan de la gestión pública.", href: NEXUS(NEXUS_IDS["1696-92"]) },
  { numero: "Voto 3309-94", organo: "Sala Constitucional", fecha: "05-07-1994", tema: "Autonomía institucional", criterio: "Es inconstitucional someter la actuación concreta de una institución autónoma a autorización o aprobación previa de otra dependencia.", href: NEXUS(NEXUS_IDS["3309-94"]) },
  { numero: "Voto 998-98", organo: "Sala Constitucional", fecha: "16-02-1998", tema: "Principios de la contratación", criterio: "Del artículo 182 derivan la libre concurrencia, la igualdad de trato entre oferentes, la publicidad y la eficiencia.", href: NEXUS(NEXUS_IDS["998-98"]) },
  { numero: "Voto 2318-98", organo: "Sala Constitucional", fecha: "31-03-1998", tema: "Consulta sobre la Ley 7762", criterio: "No encontró vicios en las normas consultadas del proyecto de concesiones; trasladar un costo al usuario es decisión del legislador.", href: NEXUS(NEXUS_IDS["2318-98"]) },
  { numero: "Voto 5947-98", organo: "Sala Constitucional", fecha: "19-08-1998", tema: "Refrendo", criterio: "Anuló la norma que sacaba del refrendo contralor los contratos de los bancos del Estado.", href: NEXUS(NEXUS_IDS["5947-98"]) },
  { numero: "Voto 919-99", organo: "Sala Constitucional", fecha: "12-02-1999", tema: "Autonomía institucional", criterio: "Exigir a los entes descentralizados una constancia previa de la Autoridad Presupuestaria viola su autonomía.", href: NEXUS(NEXUS_IDS["919-99"]) },
  { numero: "Voto 5445-99", organo: "Sala Constitucional", fecha: "14-07-1999", tema: "Autonomía municipal", criterio: "Solo la coordinación voluntaria es compatible con la autonomía municipal; no caben formas imperativas de coordinación.", href: NEXUS(NEXUS_IDS["5445-99"]) },
  { numero: "Voto 9524-99", organo: "Sala Constitucional", fecha: "03-12-1999", tema: "Refrendo", criterio: "El refrendo es atribución exclusiva de la Contraloría, que puede modularlo según naturaleza, objeto y cuantía del contrato.", href: NEXUS(NEXUS_IDS["9524-99"]) },
  { numero: "Voto 9527-99", organo: "Sala Constitucional", fecha: "03-12-1999", tema: "Igualdad de oferentes", criterio: "Puntuar la condición previa del oferente solo se sostiene como medida transitoria; como norma permanente viola la igualdad y la libre concurrencia.", href: NEXUS(NEXUS_IDS["9527-99"]) },
  { numero: "Voto 8193-2000", organo: "Sala Constitucional", fecha: "13-09-2000", tema: "Tipicidad sancionatoria", criterio: "La ley debe predeterminar la conducta y también la graduación y escala de las sanciones administrativas.", href: NEXUS(NEXUS_IDS["8193-2000"]) },
  { numero: "Voto 2002-1221", organo: "Sala Constitucional", fecha: "06-02-2002", tema: "Efecto de la consulta", criterio: "Anuló una norma de la Ley de Hidrocarburos que la Asamblea aprobó pese a la objeción de fondo hecha en la consulta.", href: NEXUS(NEXUS_IDS["2002-1221"]) },
  { numero: "Voto 8675-2005", organo: "Sala Constitucional", fecha: "01-07-2005", tema: "Personalidad instrumental", criterio: "Dar personalidad jurídica instrumental a un órgano no exige los dos tercios del artículo 189, si la figura no se usa de forma abusiva.", href: NEXUS(NEXUS_IDS["8675-2005"]) },
  { numero: "Voto 2010-12026", organo: "Sala Constitucional", fecha: "09-07-2010", tema: "Trámite posterior a la consulta", criterio: "La Comisión de Consultas solo puede hacer los cambios que resulten de la opinión de la Sala.", href: NEXUS(NEXUS_IDS["2010-12026"]) },
  { numero: "Voto 2018-2396", organo: "Sala Constitucional", fecha: "14-02-2018", tema: "Refrendo", criterio: "El legislador no puede excluir totalmente a la Contraloría del refrendo de los contratos administrativos.", href: NEXUS(NEXUS_IDS["2018-2396"]) },
  { numero: "Voto 17098-2021", organo: "Sala Constitucional", fecha: "31-07-2021", tema: "Autonomía y empleo público", criterio: "Las universidades, la CCSS y las municipalidades no pueden quedar sujetas a la dirección del Ejecutivo; los entes públicos no estatales de base corporativa pueden quedar fuera del régimen general de empleo.", href: NEXUS(NEXUS_IDS["17098-2021"]) },
  { numero: "Voto 31179-2023", organo: "Sala Constitucional", fecha: "29-11-2023", tema: "Empleo público", criterio: "Anuló la remisión del personal del INA a la legislación laboral común: el régimen de base depende de las funciones del ente.", href: NEXUS(NEXUS_IDS["31179-2023"]) },
  { numero: "Voto 2024-21375", organo: "Sala Constitucional", fecha: "29-07-2024", tema: "Competencias de la Contraloría", criterio: "Las competencias de la Contraloría forman una reserva constitucional indisponible para el legislador cuando busca rebajarlas o suprimirlas.", href: NEXUS(NEXUS_IDS["2024-21375"]) },
  { numero: "Voto 2025-27397", organo: "Sala Constitucional", fecha: "27-08-2025", tema: "Multas en concesiones", criterio: "Validó la multa fija del artículo 50 de la Ley 7762, porque se impone tras un procedimiento previo con defensa.", href: NEXUS(NEXUS_IDS["2025-27397"]) },
  { numero: "Voto 2026-16432", organo: "Sala Constitucional", fecha: "07-05-2026", tema: "Consulta inevacuable", criterio: "La consulta sin motivos precisos y circunstanciados es inadmisible y no se evacua.", href: NEXUS(NEXUS_IDS["2026-16432"]) },
];

const ADMINISTRATIVOS: Criterio[] = [
  { numero: "Dictamen C-022-1995", organo: "Procuraduría General", fecha: "23-01-1995", tema: "Empleo en entes no estatales", criterio: "La naturaleza estatutaria del empleo no cambia porque la ley califique al ente de «no estatal».", href: PGR(3539) },
  { numero: "Opinión jurídica OJ-068-97", organo: "Procuraduría General", fecha: "18-11-1997", tema: "Iniciativa privada", criterio: "Sobre el proyecto de la Ley 7762, que entonces daba al proponente hasta un 10 % del puntaje; la ley aprobada lo suprimió.", href: PGR(9901) },
  { numero: "Opinión jurídica OJ-001-2001", organo: "Procuraduría General", fecha: "03-01-2001", tema: "Entes «no estatales»", criterio: "El legislador califica entes como no estatales, aunque por competencia, fondos y organización sean estatales, para eximirlos del Derecho Público.", href: PGR(10204) },
  { numero: "Oficio 19189 (DCP-0319)", organo: "Contraloría General", fecha: "12-11-2024", tema: "Proyecto 24.009", criterio: "Criterio sobre una versión anterior del proyecto: propuso remitir a su Reglamento de Refrendo la definición de qué contratos lo requieren.", href: "https://cgrfiles.cgr.go.cr/publico/docs_cgr/2024/SIGYD_D/SIGYD_D_2024022918.pdf" },
];

const PRENSA: Fuente[] = [
  {
    titulo: "Sala IV declara inconstitucional el proyecto sobre alianzas público-privadas",
    detalle: "El Observador, 9 de setiembre de 2026",
    href: "https://observador.cr/sala-iv-declara-inconstitucional-el-proyecto-sobre-alianzas-publico-privadas/",
  },
  {
    titulo: "Sala Constitucional encuentra vicios en 12 artículos del proyecto de APP",
    detalle: "La Nación, 9 de setiembre de 2026",
    href: "https://www.nacion.com/politica/sala-constitucional-encuentra-vicios-en-12/56IRBGUSNNHHLDJ4OEA2QOXG2Y/story/",
  },
  {
    titulo: "Sala IV encuentra múltiples inconstitucionalidades en proyecto de alianzas público-privadas",
    detalle: "Delfino, 9 de setiembre de 2026",
    href: "https://delfino.cr/2026/09/sala-iv-encuentra-multiples-inconstitucionalidades-en-proyecto-de-alianzas-publico-privadas",
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

function ListaCriterios({ titulo, items }: { titulo: string; items: Criterio[] }) {
  return (
    <section className="gc-juris-grupo">
      <span className="gc-fig-label">{titulo}</span>
      <ol>
        {items.map((c) => (
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
  );
}

export function FuentesLeyMarcoApp() {
  return (
    <div className="gc-fig gc-biblio">
      <Grupo titulo="Documentos del expediente" items={DOCUMENTOS} />
      <Grupo titulo="Normativa" items={NORMAS} />
      <ListaCriterios titulo="Jurisprudencia de la Sala Constitucional" items={JURISPRUDENCIA} />
      <ListaCriterios titulo="Criterios administrativos" items={ADMINISTRATIVOS} />
      <Grupo titulo="Prensa sobre el voto" items={PRENSA} />
      <p className="gc-fig-source">
        Textos normativos: SINALEVI, en su versión vigente. Jurisprudencia: Nexus del Poder Judicial. Dictámenes de la
        Procuraduría: SINALEVI. Criterio de la Contraloría: su repositorio de documentos. El voto 2026-034680 se enlazará
        cuando la Sala publique su texto íntegro.
      </p>
    </div>
  );
}
