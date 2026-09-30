/* Figuras y fuentes de la guía «Nulidad absoluta y relativa del acto
   administrativo en Costa Rica». Cada regla se verificó contra el texto
   vigente de la LGAP y del CPCA en SINALEVI y en las bases de Corporación GC
   el 29-09-2026. */

import { RunningHead } from "@/components/ui/RunningHead";

const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;
export const LGAP = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1";
const CPCA = "/articulos/que-es-el-cpca-costa-rica";

type Fila = { rasgo: string; absoluta: string; relativa: string; norma: string };

const FILAS: Fila[] = [
  {
    rasgo: "Qué la produce",
    absoluta: "Falta total, real o jurídica, de uno o varios elementos del acto, o una imperfección que impide realizar su fin.",
    relativa: "Un elemento imperfecto, siempre que la imperfección permita alcanzar el fin.",
    norma: "Arts. 166 y 167",
  },
  {
    rasgo: "Presunción de legitimidad",
    absoluta: "No se presume legítimo y no puede ordenarse su ejecución.",
    relativa: "Se presume legítimo mientras no se anule en firme en la vía jurisdiccional, y se le debe obediencia.",
    norma: "Arts. 169 y 176",
  },
  {
    rasgo: "Responsabilidad si se ejecuta",
    absoluta: "Civil de la Administración y civil, administrativa y eventualmente penal del servidor.",
    relativa: "Civil de la Administración; el servidor responde solo con dolo o culpa grave.",
    norma: "Arts. 170 y 177",
  },
  {
    rasgo: "Efectos de la anulación",
    absoluta: "Declarativos y retroactivos a la fecha del acto, sin perjuicio de derechos adquiridos de buena fe.",
    relativa: "Solo hacia el futuro, salvo que la retroactividad sea necesaria para evitar daños.",
    norma: "Arts. 171 y 178",
  },
  {
    rasgo: "¿Se puede corregir?",
    absoluta: "No admite saneamiento ni convalidación; solo la conversión en otro acto válido.",
    relativa: "Admite convalidación, saneamiento y conversión.",
    norma: "Arts. 172, 187 a 189",
  },
  {
    rasgo: "Anulación de oficio",
    absoluta: "Obligatoria, dentro de los límites de la ley.",
    relativa: "Discrecional y justificada por un motivo de oportunidad específico y actual.",
    norma: "Art. 174",
  },
  {
    rasgo: "Plazo para impugnarlo ante el juez",
    absoluta: "Un año desde la comunicación; si sus efectos son continuados, mientras subsistan, y el año corre desde que cesan (solo para su anulación e inaplicabilidad futura).",
    relativa: "Un año desde la notificación o la publicación.",
    norma: "CPCA, arts. 39 y 40; LGAP, art. 175",
  },
];

export function ComparativaNulidad() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-comparativa-nulidad">
      <header className="gc-fig-head">
        <RunningHead title="LGAP" locator="Figura 1" />
        <p id="fig-comparativa-nulidad" className="gc-fig-title">
          Nulidad absoluta y nulidad relativa, rasgo por rasgo
        </p>
        <p className="gc-fig-lead">
          Lo que la Ley General de la Administración Pública atribuye a cada grado de invalidez.
        </p>
      </header>
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Rasgo</th>
                <th scope="col">Nulidad absoluta</th>
                <th scope="col">Nulidad relativa</th>
              </tr>
            </thead>
            <tbody>
              {FILAS.map((f) => (
                <tr key={f.rasgo}>
                  <td className="gc-recurso">
                    {f.rasgo}
                    <span className="gc-fig-ref">
                      {f.norma.startsWith("CPCA") ? (
                        <a href={`${CPCA}#art-39`}>{f.norma}</a>
                      ) : (
                        <a href={LGAP} {...EXT}>
                          LGAP, {f.norma.toLowerCase()}
                        </a>
                      )}
                    </span>
                  </td>
                  <td>{f.absoluta}</td>
                  <td>{f.relativa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        En caso de duda sobre la existencia, la calificación o la importancia del vicio, la ley ordena estar a la
        consecuencia más favorable a la conservación del acto (art. 168).
      </p>
      <p className="gc-fig-source">
        <span>Fuente:</span> Ley General de la Administración Pública, arts. 166 a 189, y Código Procesal
        Contencioso-Administrativo, arts. 39 y 40, textos vigentes en{" "}
        <a href={LGAP} {...EXT}>
          SINALEVI
        </a>
        .
      </p>
    </figure>
  );
}

type Via = { supuesto: string; via: string; requisitos: string; norma: string };

const VIAS: Via[] = [
  {
    supuesto: "Acto que declara derechos, con nulidad absoluta evidente y manifiesta",
    via: "Anulación en vía administrativa",
    requisitos:
      "Procedimiento ordinario con audiencia, dictamen favorable y vinculante de la Procuraduría (o de la Contraloría en presupuesto y contratación) y declaración del ministro o del órgano superior supremo. Caduca en un año desde la adopción del acto, salvo que sus efectos perduren.",
    norma: "LGAP, art. 173",
  },
  {
    supuesto: "Acto que declara derechos, con nulidad absoluta no evidente o con nulidad relativa",
    via: "Proceso de lesividad",
    requisitos:
      "Declaratoria de lesividad del superior jerárquico supremo dentro del año siguiente al acto, o mientras perduren sus efectos si la nulidad es absoluta; luego, demanda ante el Tribunal Contencioso dentro del año siguiente a la firmeza de esa declaratoria.",
    norma: "LGAP, art. 183.3; CPCA, arts. 34 y 39",
  },
  {
    supuesto: "Acto que no declara derechos, o anulación en beneficio del administrado",
    via: "Anulación de oficio",
    requisitos:
      "El acto absolutamente nulo debe anularse; el relativamente nulo puede anularse por un motivo de oportunidad. Si la revisión favorece al administrado cuando ya caducaron sus recursos, requiere dictamen vinculante de la Procuraduría y no está sujeta a caducidad.",
    norma: "LGAP, arts. 174 y 183.1-2",
  },
  {
    supuesto: "Acto válido que ya no conviene al interés público",
    via: "Revocación",
    requisitos:
      "Extingue un acto válido por razones de oportunidad, conveniencia o mérito, cuando hay divergencia grave entre sus efectos y el interés público.",
    norma: "LGAP, arts. 152 y 153",
  },
];

export function ViasAnulacion() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-vias-anulacion">
      <header className="gc-fig-head">
        <RunningHead title="Anulación" locator="Figura 2" />
        <p id="fig-vias-anulacion" className="gc-fig-title">
          Cómo puede la Administración dejar sin efecto su propio acto
        </p>
        <p className="gc-fig-lead">
          La vía depende de si el acto declara derechos y de la clase de vicio que lo afecta.
        </p>
      </header>
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Supuesto</th>
                <th scope="col">Vía y requisitos</th>
              </tr>
            </thead>
            <tbody>
              {VIAS.map((v) => (
                <tr key={v.via}>
                  <td className="gc-recurso">{v.supuesto}</td>
                  <td>
                    <strong>{v.via}.</strong> {v.requisitos}{" "}
                    <span className="gc-fig-ref">{v.norma}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-source">
        <span>Fuente:</span> Ley General de la Administración Pública, arts. 152, 173, 174 y 183, y Código Procesal
        Contencioso-Administrativo, arts. 34 y 39, textos vigentes en{" "}
        <a href={LGAP} {...EXT}>
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
type Criterio = { numero: string; organo: string; fecha: string; tema: string; criterio: string; href: string; gc?: boolean };

const NORMAS: Fuente[] = [
  { titulo: "Ley General de la Administración Pública", detalle: "Ley N.° 6227, arts. 9, 128 a 136, 152, 153 y 158 a 189", href: LGAP },
  { titulo: "Código Procesal Contencioso-Administrativo", detalle: "Ley N.° 8508, arts. 10.5, 34, 37 a 40", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1" },
  { titulo: "Código Civil", detalle: "Ley N.° 30, arts. 835 a 841" },
];

const S1 = "Sala Primera";
const SC = "Sala Constitucional";

const JURISPRUDENCIA: Criterio[] = [
  { numero: "Voto 1991-1563", organo: SC, fecha: "14-08-1991", tema: "Artículo 173", criterio: "La anulación administrativa exige una nulidad absoluta perceptible fácilmente y un criterio experto y externo al órgano que decide.", href: NEXUS("sen-1-0007-252523") },
  { numero: "Voto 2006-4716", organo: SC, fecha: "31-03-2006", tema: "Evidente y manifiesta", criterio: "Define lo evidente y manifiesto; la anulación sin dictamen, con dictamen desfavorable o sin procedimiento es absolutamente nula.", href: NEXUS("sen-1-0007-342267") },
  { numero: "Voto 928-F-S1-2010", organo: S1, fecha: "05-08-2010", tema: "Motivo en el acto reglado", criterio: "La falta del motivo en un acto reglado es ausencia de un elemento y produce nulidad absoluta.", href: NEXUS("sen-1-0004-886937"), gc: true },
  { numero: "Voto 1426-F-S1-2012", organo: S1, fecha: "23-10-2012", tema: "Efectos continuados", criterio: "Define el acto de efectos continuados; el de efecto instantáneo queda sujeto al plazo ordinario.", href: NEXUS("sen-1-0004-767786"), gc: true },
  { numero: "Voto 1489-F-S1-2017", organo: S1, fecha: "30-11-2017", tema: "Incompetencia", criterio: "La incompetencia de grado genera nulidad relativa y admite convalidación.", href: NEXUS("sen-1-0004-771541") },
  { numero: "Voto 1967-F-S1-2020", organo: S1, fecha: "03-06-2020", tema: "Lesividad", criterio: "Caducidad de la declaratoria de lesividad dictada fuera del año (por mayoría).", href: NEXUS("sen-1-0004-983215") },
  { numero: "Voto 591-F-S1-2022", organo: S1, fecha: "10-03-2022", tema: "Lesividad", criterio: "Si la Procuraduría no dictamina porque el vicio no es evidente, la nulidad sigue siendo absoluta y se tramita por lesividad.", href: NEXUS("sen-1-0004-1078667") },
  { numero: "Voto 1485-F-S1-2024", organo: S1, fecha: "24-10-2024", tema: "Grados de nulidad", criterio: "Distingue la nulidad absoluta y la relativa; el motivo falso o inexistente produce nulidad absoluta.", href: NEXUS("sen-1-0004-1258762") },
  { numero: "Voto 507-F-S1-2025", organo: S1, fecha: "13-03-2025", tema: "Conservación del acto", criterio: "Regla favor acti; la lesividad declarada fuera del año solo anula hacia el futuro (por mayoría).", href: NEXUS("sen-1-0004-1288080") },
  { numero: "Voto 702-F-S1-2026", organo: S1, fecha: "04-06-2026", tema: "Actos generales", criterio: "Los actos de alcance general no son de efectos continuados.", href: NEXUS("sen-1-0004-1402615") },
  { numero: "Voto 2026-24773", organo: SC, fecha: "02-07-2026", tema: "Derechos consolidados", criterio: "Determinar si existe un derecho adquirido y si puede revertirse es materia de legalidad ordinaria.", href: NEXUS("sen-1-0007-1411810") },
  { numero: "Voto 2026-30947", organo: SC, fecha: "13-08-2026", tema: "Intangibilidad", criterio: "Acoge el amparo contra la reversión unilateral de un derecho y remite al procedimiento del art. 173 si hay dudas de validez.", href: NEXUS("sen-1-0007-1420887") },
  { numero: "Voto 1294-F-S1-2026", organo: S1, fecha: "26-08-2026", tema: "Vicios subsanados", criterio: "No se decreta la nulidad por la nulidad misma si el vicio fue subsanado sin indefensión.", href: NEXUS("sen-1-0004-1423175") },
];

const PROCURADURIA: Fuente[] = [
  { titulo: "Dictamen C-155-2012", detalle: "21-06-2012 · Requisitos y momento de la solicitud del dictamen", href: PGR(17208) },
  { titulo: "Dictamen C-270-2018", detalle: "30-10-2018 · Nulidad evidente por la sola confrontación con la norma", href: PGR(20704) },
  { titulo: "Dictamen C-013-2022", detalle: "18-01-2022 · Caducidad en actos de efecto inmediato y continuado", href: PGR(23133) },
  { titulo: "Dictamen C-169-2024", detalle: "05-08-2024 · Abstención por caducidad", href: PGR(24584) },
  { titulo: "Dictamen C-141-2025", detalle: "02-07-2025 · Carácter vinculante del dictamen; competencia del concejo municipal", href: PGR(25038) },
  { titulo: "Dictamen C-023-2026", detalle: "28-01-2026 · Actos no declaratorios de derechos; criterio adelantado", href: PGR(25292) },
  { titulo: "Dictamen C-141-2026", detalle: "17-08-2026 · Prueba de la nulidad sin margen de duda; mapa de las vías", href: PGR(25551) },
];

const ACTAS: Fuente[] = [
  { titulo: "LGAP, expediente 4118: exposición de motivos", detalle: "Proyecto del Poder Ejecutivo de 01-12-1969, párrafo 23.d" },
  { titulo: "LGAP, Comisión de Gobierno y Administración, acta n.º 102", detalle: "01-04-1970 · Grados de nulidad, conservación del acto y efecto retroactivo (Ortiz Ortiz)" },
  { titulo: "LGAP, Comisión de Gobierno y Administración, sesión n.º 103", detalle: "1970 · Origen de la nulidad evidente y manifiesta y de la lesividad (Ortiz Ortiz, Piza Escalante)" },
  { titulo: "CPCA, subcomisión del expediente 15.134, acta n.º 14", detalle: "30-03-2005, folio 941 · Redacción del artículo 40 (González Camacho)" },
  { titulo: "CPCA, Comisión Permanente de Asuntos Jurídicos, sesión n.º 20", detalle: "30-08-2005 · Artículos 34 y 40 (González Camacho)" },
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

export function FuentesNulidad() {
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
      <Grupo titulo="Antecedentes legislativos" items={ACTAS} />
      <p className="gc-fig-source">
        Textos normativos: SINALEVI, en su versión vigente. Jurisprudencia: Nexus del Poder Judicial. Dictámenes:
        SINALEVI. Actas: expedientes legislativos 4118 y 5716 (LGAP) y 15.134 (CPCA) de la Asamblea Legislativa.
      </p>
    </div>
  );
}
