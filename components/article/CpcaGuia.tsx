/* Figuras de la guía «CPCA de Costa Rica: texto vigente, artículos clave y
   jurisprudencia». Mismo lenguaje editorial que las demás guías (bloque
   .gc-fig de app/globals.css). Los textos del Código se cotejaron con
   SINALEVI el 25-09-2026; las sentencias, con la base local de
   jurisprudencia (expedientes y extractos en
   ~/PAGINA GC/cluster-contencioso-2026-09-25/cpca-investigacion). */

import { RunningHead } from "@/components/ui/RunningHead";

const NEXUS = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;
const SINALEVI_CPCA =
  "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1";
const ART = (n: string) => `#art-${n}`;

const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;

/* Sin kicker, la figura abre directamente con su título, sin encabezado corrido. */
function FigHead({ id, n, kicker, title, lead }: { id: string; n?: number; kicker?: string; title: string; lead?: string }) {
  return (
    <header className="gc-fig-head">
      {kicker && <RunningHead title={kicker} locator={n ? `Figura ${n}` : undefined} />}
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

/* ── Las reformas del Código (sin encabezado corrido) ───────────────────────────────── */

const REFORMAS: { norma: string; fecha: string; que: string; arts: string }[] = [
  {
    norma: "Ley N.° 8508",
    fecha: "28-04-2006",
    que: "Texto original: 222 artículos y cinco transitorios. Publicado en el Alcance N.° 38 a La Gaceta N.° 120 del 22 de junio de 2006; rige desde el 1.° de enero de 2008.",
    arts: "art. 222",
  },
  {
    norma: "Ley N.° 8773",
    fecha: "01-09-2009",
    que: "Deroga los incisos 1, 6 y 7 del artículo 202, que reformaban el Código Municipal.",
    arts: "art. 202",
  },
  {
    norma: "Sala Constitucional, voto 9928-2010",
    fecha: "09-06-2010",
    que: "Anula el inciso a) del artículo 3, que excluía de la jurisdicción las relaciones de empleo público.",
    arts: "art. 3",
  },
  {
    norma: "Ley N.° 9212",
    fecha: "25-02-2014",
    que: "Reforma el artículo 111: la sentencia se dicta oralmente al terminar el juicio.",
    arts: "art. 111",
  },
  {
    norma: "Ley N.° 9762",
    fecha: "29-10-2019",
    que: "Adiciona los artículos 112 bis y 112 ter: caducidad del proceso por seis meses de inactividad imputable al actor y caducidad de las medidas cautelares.",
    arts: "arts. 112 bis y 112 ter",
  },
  {
    norma: "Ley N.° 9784",
    fecha: "12-11-2019",
    que: "Nueva redacción del artículo 111: el dictado tardío de la sentencia sin causa justificada es falta grave, y la repetición del juicio queda restringida.",
    arts: "art. 111",
  },
  {
    norma: "Ley N.° 10702",
    fecha: "06-05-2025",
    que: "Reforma el artículo 179: prescripción de cuatro años para la demanda que ejecuta las indemnizaciones ordenadas en amparos y hábeas corpus. Rige desde el 30 de mayo de 2025.",
    arts: "art. 179",
  },
];

export function ReformasCpca() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-reformas-cpca">
      <FigHead
        id="fig-reformas-cpca"
        title="Las reformas del Código desde 2006"
        lead="En casi veinte años de vigencia, el Código ha cambiado en siete artículos. El texto que se publica en esta página las incorpora todas."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Norma</th>
                <th scope="col">Qué cambió</th>
              </tr>
            </thead>
            <tbody>
              {REFORMAS.map((r) => (
                <tr key={r.norma}>
                  <td className="gc-recurso">
                    {r.norma}
                    <span className="gc-fig-ref">{r.fecha}</span>
                  </td>
                  <td>
                    {r.que} <span className="gc-fig-ref">{r.arts}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        Ninguna ley posterior al 30 de mayo de 2025 ha reformado el Código. Cotejo con SINALEVI del 25 de setiembre de
        2026.
      </p>
      <FigSource>
        <a href={SINALEVI_CPCA} {...EXT}>
          SINALEVI, Ley N.° 8508
        </a>
        , historial de versiones y normativa que la afectó; Sala Constitucional,{" "}
        <a href={NEXUS("sen-1-0007-473953")} {...EXT}>
          voto 9928-2010
        </a>
        .
      </FigSource>
    </figure>
  );
}

/* ── Figura 1. Los plazos del Código ─────────────────────────────────── */

const PLAZOS: { que: string; plazo: string; arts: string[] }[] = [
  {
    que: "Demandar la nulidad de un acto o impugnar una actuación material",
    plazo: "Un año desde el día siguiente a la notificación, a la última publicación o al cese de los efectos de la actuación material.",
    arts: ["39"],
  },
  {
    que: "Actos absolutamente nulos y conductas omisivas de efectos continuados",
    plazo: "Mientras subsistan sus efectos, y un año desde que cesan. La nulidad solo opera hacia el futuro.",
    arts: ["40"],
  },
  {
    que: "Reclamos de materia civil de Hacienda y tributaria",
    plazo: "El de prescripción del derecho de fondo. Para la indemnización pura, cuatro años (art. 198 de la LGAP).",
    arts: ["41"],
  },
  {
    que: "Declaratoria de lesividad de la propia Administración",
    plazo: "Un año desde el dictado del acto; con nulidad absoluta, mientras perduren sus efectos. Sin plazo si tutela bienes de dominio público.",
    arts: ["34"],
  },
  {
    que: "Revisión de la conducta cuando se demanda al Estado sin agotar la vía",
    plazo: "Ocho días hábiles para el jerarca supremo, antes de que corra el plazo de contestación.",
    arts: ["31"],
  },
  {
    que: "Requerimiento previo frente a una omisión",
    plazo: "Quince días para que la Administración adopte la conducta debida, si el interesado opta por requerirla.",
    arts: ["35"],
  },
  {
    que: "Presentar la demanda después de una cautelar anterior al proceso",
    plazo: "Quince días desde la notificación del auto que la acoge. El Tribunal de Apelación aplica un mes desde su ejecución (art. 112 ter); los quince días cumplen ambas lecturas. Si no se presenta, la medida se levanta y el solicitante paga los daños.",
    arts: ["26", "112ter"],
  },
  {
    que: "Apelar el auto que resuelve una medida cautelar",
    plazo: "Tres días hábiles, con efecto devolutivo.",
    arts: ["30"],
  },
  {
    que: "Contestar la demanda",
    plazo: "Quince días hábiles si se aportó copia certificada del expediente administrativo; treinta días hábiles si no.",
    arts: ["63"],
  },
  {
    que: "Caducidad del proceso",
    plazo: "Más de seis meses sin impulso imputable a la parte actora, antes de la sentencia de primera instancia.",
    arts: ["112bis"],
  },
  {
    que: "Recurso de casación",
    plazo: "Quince días hábiles desde el día hábil siguiente a la notificación a todas las partes.",
    arts: ["139"],
  },
  {
    que: "Extender a otros la jurisprudencia de casación",
    plazo: "Un año desde la firmeza del segundo fallo; si la Administración calla quince días hábiles o deniega, se acude a casación.",
    arts: ["185"],
  },
  {
    que: "Cobrar las indemnizaciones de un amparo o un hábeas corpus",
    plazo: "Cuatro años desde la firmeza de la sentencia constitucional.",
    arts: ["179"],
  },
];

const etiqueta = (a: string) => a.replace("bis", " bis").replace("ter", " ter");

export function PlazosCpca() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-plazos-cpca">
      <FigHead
        id="fig-plazos-cpca"
        n={1}
        kicker="Plazos"
        title="Los plazos del Código que deciden un caso"
        lead="Cada artículo enlaza con su texto vigente en esta misma página."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Qué</th>
                <th scope="col">Plazo</th>
              </tr>
            </thead>
            <tbody>
              {PLAZOS.map((p) => (
                <tr key={p.que}>
                  <td className="gc-recurso">{p.que}</td>
                  <td>
                    {p.plazo}{" "}
                    <span className="gc-fig-ref">
                      {p.arts.map((a, i) => (
                        <span key={a}>
                          {i > 0 && ", "}
                          <a href={ART(a)}>art. {etiqueta(a)}</a>
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
        La caducidad del artículo 39 la examina el juez aunque nadie la alegue. Cuando el Código no dice «hábiles», el
        cómputo merece revisión caso por caso.
      </p>
      <FigSource>
        Código Procesal Contencioso-Administrativo (Ley N.° 8508), texto vigente en{" "}
        <a href={SINALEVI_CPCA} {...EXT}>
          SINALEVI
        </a>
        ; Ley General de la Administración Pública, art. 198.
      </FigSource>
    </figure>
  );
}

/* ── Fuentes ─────────────────────────────────────────────────────────── */

const SCIJ = (id: number) =>
  `https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=${id}`;
const PGR = (id: number) => `https://sinalevi.go.cr/ResultadosPronunciamiento/Informacion?param1=${id}&param2=1&param3=1`;

type Fuente = { titulo: string; detalle: string; href?: string };
type Criterio = { numero: string; organo: string; fecha: string; tema: string; criterio: string; href?: string };

const NORMAS: Fuente[] = [
  {
    titulo: "Código Procesal Contencioso-Administrativo",
    detalle: "Ley N.° 8508, texto consolidado (última reforma: Ley N.° 10702)",
    href: SINALEVI_CPCA,
  },
  { titulo: "Constitución Política", detalle: "Arts. 49, 173 y 182", href: SCIJ(871) },
  { titulo: "Ley General de la Administración Pública", detalle: "Ley N.° 6227, arts. 173 y 198", href: SCIJ(13231) },
];

/* Enlaces oficiales verificados el 26-09-2026. La Gaceta tiene dirección
   directa; el SIL no ofrece enlaces permanentes por documento, así que se
   enlaza su consulta y el detalle indica cómo llegar al documento. El
   expediente digital de la Asamblea (folios 446 a 1701, actas de la
   subcomisión) no devolvía documentos ese día y queda sin enlace. */
const SIL_PROYECTOS = "https://consultassil3.asamblea.go.cr/frmConsultaProyectos.aspx";
const SIL_ACTAS_COMISIONES = "https://consultassil3.asamblea.go.cr/frmConsultaActasComisiones.aspx";

const ANTECEDENTES: Fuente[] = [
  {
    titulo: "Exposición de motivos del proyecto",
    detalle: "Poder Ejecutivo. Expediente legislativo 15.134, La Gaceta n.º 41 del 27 de febrero de 2003",
    href: "https://www.imprentanacional.go.cr/pub/2003/02/27/COMP_27_02_2003.pdf#page=17",
  },
  {
    titulo: "Actas de la Subcomisión del expediente 15.134",
    detalle:
      "Comisión Permanente de Asuntos Jurídicos. Actas n.º 02 (13-10-2004), 03 (20-10-2004), 04 (27-10-2004), 05 (03-11-2004), 07 (24-11-2004), 08 (16-02-2005), 10 (10-03-2005), 13 y 14 (30-03-2005), 15 (06-04-2005), 22 (18-05-2005) y 29 (15-06-2005). Expediente legislativo, folios 446 a 1701",
  },
  {
    titulo: "Dictamen afirmativo unánime",
    detalle:
      "Comisión Permanente de Asuntos Jurídicos, 14 de setiembre de 2005. En el Sistema de Información Legislativo, expediente 15.134, apartado de dictámenes",
    href: SIL_PROYECTOS,
  },
  {
    titulo: "Acta de la sesión n.º 38",
    detalle:
      "Comisión Permanente de Asuntos Jurídicos, 21 de marzo de 2006. En el Sistema de Información Legislativo, actas de las comisiones permanentes ordinarias, legislatura 2005-2006",
    href: SIL_ACTAS_COMISIONES,
  },
];

const OBRAS: Fuente[] = [
  {
    titulo: "Código Procesal Contencioso-Administrativo Comentado",
    detalle: "Procuraduría General de la República, 3 de setiembre de 2026, 468 págs.",
    href: "https://www.pgr.go.cr/publicaciones/codigo-procesal-contencioso-administrativo-comentado/",
  },
  {
    titulo: "Revolución en los juicios contra el Estado",
    detalle: "Óscar Eduardo González Camacho. Observatorio Judicial, vol. 44, julio de 2006",
    href: "https://actualidadjudicial.poder-judicial.go.cr/vol44/comentarios/com01.htm",
  },
  {
    titulo: "El nuevo proceso contencioso-administrativo",
    detalle: "Óscar Eduardo González Camacho y otros. Escuela Judicial y Editorial Jurídica Continental, 2006",
    href: "/articulos/libro-nuevo-proceso-contencioso",
  },
];

const PGR_PRONUNCIAMIENTOS: Fuente[] = [
  { titulo: "Dictamen C-066-2008", detalle: "Agotamiento facultativo y audiencia de ocho días (art. 31)", href: PGR(15063) },
  { titulo: "Dictamen C-193-2009", detalle: "Órgano con personalidad jurídica instrumental: paga con su presupuesto (art. 12)", href: PGR(15944) },
  { titulo: "Dictamen C-270-2009", detalle: "Bienes inembargables de la Administración (arts. 169 y 170)", href: PGR(16053) },
  {
    titulo: "Dictamen C-259-2016",
    detalle: "Lesividad sin procedimiento previo; en la municipalidad la declara el concejo (art. 34)",
    href: "http://www.pgrweb.go.cr/scij/Busqueda/Normativa/Pronunciamiento/pro_ficha.aspx?Param1=PRD&nDictamen=20090&strTipM=T",
  },
  { titulo: "Dictamen C-013-2022", detalle: "Los dos plazos de la lesividad (arts. 34 y 39)", href: PGR(23133) },
  { titulo: "Dictamen C-018-2023", detalle: "La falta de contenido presupuestario no condiciona la ejecución", href: PGR(23775) },
];

const JURISPRUDENCIA: Criterio[] = [
  {
    numero: "1360-F-S1-2010",
    organo: "Sala Primera",
    fecha: "11-11-2010",
    tema: "Art. 12",
    criterio: "El órgano con personalidad jurídica instrumental es centro último de imputación de su conducta; el Estado no responde por ella.",
    href: "/jurisprudencia-destacada/legitimacion-pasiva-del-organo-persona",
  },
  {
    numero: "557-F-S1-2010",
    organo: "Sala Primera",
    fecha: "06-05-2010",
    tema: "Ejecución",
    criterio: "El juez ejecutor tiene los poderes necesarios para la plena eficacia del fallo, incluido reconocer intereses por la demora.",
    href: NEXUS("ext-1-0034-136900"),
  },
  {
    numero: "358-F-S1-2011",
    organo: "Sala Primera",
    fecha: "31-03-2011",
    tema: "Casación",
    criterio: "Casación menos rigurosa en la admisibilidad, sin abandonar el tecnicismo que le es propio.",
    href: NEXUS("ext-1-0004-166777"),
  },
  {
    numero: "896-F-S1-2012",
    organo: "Sala Primera",
    fecha: "26-07-2012",
    tema: "Art. 10",
    criterio: "El interés colectivo comprende el difuso; impugnación directa de un reglamento sin acto de aplicación.",
    href: NEXUS("ext-1-0034-146317"),
  },
  {
    numero: "1426-F-S1-2012",
    organo: "Sala Primera",
    fecha: "23-10-2012",
    tema: "Arts. 39 y 40",
    criterio: "Qué es un acto de efectos continuados; la caducidad se examina de oficio.",
    href: "/jurisprudencia-destacada/caducidad-de-la-accion",
  },
  {
    numero: "1692-F-S1-2012",
    organo: "Sala Primera",
    fecha: "13-12-2012",
    tema: "Costas",
    criterio: "El motivo bastante para litigar exige datos objetivos del proceso.",
    href: NEXUS("ext-1-0034-145850"),
  },
  {
    numero: "294-F-S1-2013",
    organo: "Sala Primera",
    fecha: "14-03-2013",
    tema: "Art. 1",
    criterio: "El control de juridicidad abarca la conformidad sustancial de la conducta y su finalidad real.",
    href: NEXUS("ext-1-0034-147065"),
  },
  {
    numero: "1879-F-S1-2024",
    organo: "Sala Primera",
    fecha: "19-12-2024",
    tema: "Art. 40",
    criterio: "Por mayoría, el acto que reconoce un pago periódico es de efectos continuados.",
    href: NEXUS("sen-1-0004-1270828"),
  },
  {
    numero: "8-F-S1-2026",
    organo: "Sala Primera",
    fecha: "15-01-2026",
    tema: "Art. 31",
    criterio: "En contratación, el agotamiento se exige cuando se discute la validez de un acto.",
    href: NEXUS("sen-1-0004-1363077"),
  },
  {
    numero: "124-F-TC-2008",
    organo: "Tribunal de Casación",
    fecha: "03-10-2008",
    tema: "Cautelares",
    criterio: "Peligro en la demora, apariencia de buen derecho y ponderación de intereses.",
  },
  {
    numero: "154-F-TC-2021",
    organo: "Tribunal de Casación",
    fecha: "17-08-2021",
    tema: "Art. 31",
    criterio: "En materia municipal, el agotamiento es preceptivo y previo a la demanda.",
    href: NEXUS("sen-1-1011-1073362"),
  },
  {
    numero: "234-2020-I",
    organo: "Tribunal de Apelación",
    fecha: "24-04-2020",
    tema: "Art. 26",
    criterio: "El art. 112 ter reformó tácitamente el plazo para demandar tras la cautelar anticipada.",
    href: NEXUS("sen-1-0034-1051033"),
  },
  {
    numero: "2012-017737",
    organo: "Sala Constitucional",
    fecha: "12-12-2012",
    tema: "Art. 31",
    criterio: "El agotamiento municipal es constitucional y la Administración debe alegarlo al inicio.",
    href: NEXUS("ext-1-0007-264354"),
  },
  {
    numero: "2017-015945",
    organo: "Sala Constitucional",
    fecha: "04-10-2017",
    tema: "Arts. 34 y 40",
    criterio: "La nulidad absoluta impugnable mientras duran sus efectos, solo hacia el futuro, es constitucional.",
    href: NEXUS("ext-1-0007-264366"),
  },
  {
    numero: "2019-022474",
    organo: "Sala Constitucional",
    fecha: "13-11-2019",
    tema: "Arts. 189 y 190",
    criterio: "La apelación municipal ante el Tribunal Contencioso es indisponible para el legislador.",
    href: NEXUS("ext-1-0007-275894"),
  },
  {
    numero: "2026-016889",
    organo: "Sala Constitucional",
    fecha: "13-05-2026",
    tema: "Art. 185",
    criterio: "Es constitucional exigir al menos dos fallos de casación para extender la jurisprudencia.",
    href: NEXUS("sen-1-0007-1410990"),
  },
];

function Enlace({ href, children }: { href?: string; children: React.ReactNode }) {
  if (!href) return <>{children}</>;
  return href.startsWith("/") ? (
    <a href={href}>{children}</a>
  ) : (
    <a href={href} {...EXT}>
      {children}
    </a>
  );
}

function Grupo({ titulo, items }: { titulo: string; items: Fuente[] }) {
  return (
    <section className="gc-juris-grupo">
      <span className="gc-fig-label">{titulo}</span>
      <ol>
        {items.map((f) => (
          <li key={f.titulo} className="gc-juris-item gc-juris-item--simple">
            <span className="gc-juris-id">
              <b>
                <Enlace href={f.href}>{f.titulo}</Enlace>
              </b>
              <span className="gc-juris-org">{f.detalle}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function FuentesCpca() {
  return (
    <div className="gc-fig gc-biblio">
      <Grupo titulo="Normativa" items={NORMAS} />
      <Grupo titulo="Antecedentes legislativos" items={ANTECEDENTES} />
      <section className="gc-juris-grupo">
        <span className="gc-fig-label">Jurisprudencia</span>
        <ol>
          {JURISPRUDENCIA.map((c) => (
            <li key={c.numero} className="gc-juris-item">
              <span className="gc-juris-id">
                <b>
                  <Enlace href={c.href}>{c.numero}</Enlace>
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
      <Grupo titulo="Procuraduría General de la República" items={PGR_PRONUNCIAMIENTOS} />
      <Grupo titulo="Obras de consulta" items={OBRAS} />
      <p className="gc-fig-source">
        Textos normativos: SINALEVI, versión vigente al 25 de setiembre de 2026. Antecedentes: expediente legislativo
        15.134 de la Asamblea Legislativa. Jurisprudencia: Nexus del Poder Judicial. Pronunciamientos: Sistema
        Costarricense de Información Normativa.
      </p>
    </div>
  );
}
