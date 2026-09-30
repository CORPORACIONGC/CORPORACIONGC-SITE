/* Figuras y fuentes de la guía «Plazos para demandar al Estado en Costa
   Rica». Normas verificadas en el texto vigente (SINALEVI y bases GC) y votos
   cotejados en Nexus el 30-09-2026. */

import { RunningHead } from "@/components/ui/RunningHead";

const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;
const NEXUS = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;
const CPCA_TEXTO = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1";
const LGAP = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=13231&param2=150737&param3=1";

type Fila = { que: string; plazo: string; tipo: string; desde: string; norma: string };

const FILAS: Fila[] = [
  { que: "Impugnar un acto administrativo", plazo: "Un año", tipo: "Caducidad", desde: "Desde el día siguiente a la notificación, o a la única o última publicación.", norma: "CPCA, art. 39.1.a-b" },
  { que: "Impugnar una actuación material", plazo: "Un año", tipo: "Caducidad", desde: "Desde el día siguiente al cese de sus efectos.", norma: "CPCA, art. 39.1.c" },
  { que: "Impugnar un acto que se recurrió en sede administrativa", plazo: "Un año", tipo: "Caducidad", desde: "Desde la notificación de la resolución expresa del recurso.", norma: "CPCA, arts. 31.7 y 39" },
  { que: "Impugnar un acto absolutamente nulo de efectos continuados", plazo: "Mientras subsistan sus efectos", tipo: "Caducidad", desde: "El año corre desde que cesan; la anulación vale solo hacia el futuro.", norma: "CPCA, art. 40; LGAP, art. 175" },
  { que: "Reclamar daños y perjuicios a la Administración", plazo: "Cuatro años", tipo: "Prescripción", desde: "Desde el hecho que motiva la responsabilidad, conocido por la víctima; si el daño es a una persona menor de edad, desde su mayoría de edad.", norma: "CPCA, art. 41; LGAP, art. 198" },
  { que: "Reclamar extremos de un contrato con la Administración", plazo: "Cinco años", tipo: "Prescripción", desde: "Desde el acaecimiento del hecho; diez años por vicios ocultos de una obra pública, desde su entrega definitiva.", norma: "Ley General de Contratación Pública, art. 107" },
  { que: "Discutir un tributo", plazo: "El de prescripción del tributo", tipo: "Prescripción", desde: "Cuatro años para que la Administración determine y cobre (diez en supuestos agravados); cuatro para pedir la devolución de lo pagado.", norma: "CPCA, art. 41.2; CNPT, arts. 43 y 51" },
  { que: "Reclamar derechos laborales al Estado", plazo: "Un año", tipo: "Prescripción", desde: "Desde la extinción de la relación de servicio; no corre mientras se trabaje para el mismo patrono.", norma: "Código de Trabajo, art. 413" },
  { que: "Presentar un recurso de amparo", plazo: "Mientras subsista la violación y dos meses más", tipo: "Plazo de interposición", desde: "Dos meses desde el cese de sus efectos; si el derecho es patrimonial o consentible, dos meses desde la noticia fehaciente.", norma: "Ley de la Jurisdicción Constitucional, art. 35" },
  { que: "Demanda de lesividad de la Administración", plazo: "Un año", tipo: "Caducidad", desde: "Declaratoria de lesividad dentro del año del acto (o mientras perduren sus efectos si la nulidad es absoluta); demanda dentro del año siguiente a la firmeza de esa declaratoria.", norma: "CPCA, arts. 34 y 39.1.e" },
];

export function TablaPlazos() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-tabla-plazos">
      <header className="gc-fig-head">
        <RunningHead title="Plazos" locator="Figura 1" />
        <p id="fig-tabla-plazos" className="gc-fig-title">
          Los plazos para demandar al Estado, según lo que se pida
        </p>
        <p className="gc-fig-lead">El plazo lo determinan lo que se pide y la materia en discusión.</p>
      </header>
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Qué se pide</th>
                <th scope="col">Plazo, naturaleza y cómputo</th>
              </tr>
            </thead>
            <tbody>
              {FILAS.map((f) => (
                <tr key={f.que}>
                  <td className="gc-recurso">{f.que}</td>
                  <td>
                    <strong>{f.plazo}</strong> ({f.tipo.toLowerCase()}). {f.desde}{" "}
                    <span className="gc-fig-ref">{f.norma}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        Si la demanda viene precedida de una medida cautelar anticipada, debe presentarse dentro de los quince días
        siguientes a la notificación del auto que la acoge (artículo 26.2 del CPCA), sin que la cautelar detenga el año de
        caducidad.
      </p>
      <p className="gc-fig-source">
        <span>Fuente:</span> Código Procesal Contencioso-Administrativo (
        <a href={CPCA_TEXTO} {...EXT}>
          SINALEVI
        </a>
        ), Ley General de la Administración Pública (
        <a href={LGAP} {...EXT}>
          SINALEVI
        </a>
        ), Ley General de Contratación Pública, Código de Normas y Procedimientos Tributarios, Código de Trabajo y Ley de
        la Jurisdicción Constitucional, textos vigentes.
      </p>
    </figure>
  );
}

type Rasgo = { rasgo: string; caducidad: string; prescripcion: string };

const RASGOS: Rasgo[] = [
  { rasgo: "Qué extingue", caducidad: "La posibilidad de impugnar la conducta administrativa.", prescripcion: "El derecho de fondo, como el derecho a la indemnización." },
  { rasgo: "Dónde rige", caducidad: "Impugnación de actos y conductas en ejercicio de potestades públicas (arts. 39 y 40 del CPCA).", prescripcion: "Materia civil de Hacienda y tributaria (art. 41 del CPCA): daños, contratos, tributos." },
  { rasgo: "¿Se interrumpe o se suspende?", caducidad: "No. Corre sin interrupción, aunque se pida una cautelar o se tramite un proceso penal paralelo.", prescripcion: "Sí. La interrumpen el reclamo administrativo, las gestiones de cobro y la demanda notificada." },
  { rasgo: "¿La declara el juez de oficio?", caducidad: "Sí, puede y debe declararla aunque nadie la alegue.", prescripcion: "No. Debe alegarla quien se beneficia de ella, y puede renunciarse." },
];

export function CaducidadPrescripcion() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-caducidad-prescripcion">
      <header className="gc-fig-head">
        <RunningHead title="Caducidad y prescripción" locator="Figura 2" />
        <p id="fig-caducidad-prescripcion" className="gc-fig-title">
          Caducidad y prescripción, rasgo por rasgo
        </p>
        <p className="gc-fig-lead">Las dos extinguen por el paso del tiempo, con reglas opuestas.</p>
      </header>
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Rasgo</th>
                <th scope="col">Caducidad</th>
                <th scope="col">Prescripción</th>
              </tr>
            </thead>
            <tbody>
              {RASGOS.map((r) => (
                <tr key={r.rasgo}>
                  <td className="gc-recurso">{r.rasgo}</td>
                  <td>{r.caducidad}</td>
                  <td>{r.prescripcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-source">
        <span>Fuente:</span> Tribunal de Casación Contencioso-Administrativo, sentencia 249-F-TC-2021; Sala Primera,
        votos 1426-F-S1-2012, 1261-F-S1-2011 y 2077-F-S1-2020.
      </p>
    </figure>
  );
}

type Fuente = { titulo: string; detalle: string; href?: string };
type Criterio = { numero: string; organo: string; fecha: string; tema: string; criterio: string; href: string; gc?: boolean };

const NORMAS: Fuente[] = [
  { titulo: "Código Procesal Contencioso-Administrativo", detalle: "Ley N.° 8508, arts. 26, 31, 34, 37, 39 a 41, 112 bis y 112 ter", href: CPCA_TEXTO },
  { titulo: "Ley General de la Administración Pública", detalle: "Ley N.° 6227, arts. 175 y 198", href: LGAP },
  { titulo: "Ley General de Contratación Pública", detalle: "Ley N.° 9986, art. 107" },
  { titulo: "Código de Normas y Procedimientos Tributarios", detalle: "Ley N.° 4755, arts. 43 y 51" },
  { titulo: "Código de Trabajo", detalle: "Art. 413 (Reforma Procesal Laboral, Ley N.° 9343)" },
  { titulo: "Ley de la Jurisdicción Constitucional", detalle: "Ley N.° 7135, art. 35" },
  { titulo: "Código Procesal Civil", detalle: "Ley N.° 9342, art. 30.5" },
];

const S1 = "Sala Primera";
const TC = "Tribunal de Casación Contencioso-Administrativo";

const JURISPRUDENCIA: Criterio[] = [
  { numero: "Voto 654-F-S1-2008", organo: S1, fecha: "26-09-2008", tema: "Interrupción", criterio: "El reclamo administrativo interrumpe la prescripción; el plazo corre de nuevo desde que se notifica su rechazo.", href: NEXUS("sen-1-0004-764867"), gc: true },
  { numero: "Voto 615-F-S1-2010", organo: S1, fecha: "20-05-2010", tema: "Inicio del plazo", criterio: "El plazo corre desde que la víctima conoce el daño o puede invocar su derecho.", href: NEXUS("sen-1-0004-765501") },
  { numero: "Voto 1261-F-S1-2011", organo: S1, fecha: "27-09-2011", tema: "Daño continuado", criterio: "En el acto lesivo continuado, la prescripción corre desde su cese; la caducidad alcanza solo a la nulidad.", href: NEXUS("sen-1-0004-766718") },
  { numero: "Voto 1426-F-S1-2012", organo: S1, fecha: "23-10-2012", tema: "Efectos continuados", criterio: "Define el acto de efectos continuados; la caducidad se examina de oficio.", href: NEXUS("sen-1-0004-767786"), gc: true },
  { numero: "Voto 8-F-S1-2013", organo: S1, fecha: "17-01-2013", tema: "Inicio del plazo", criterio: "El inicio del art. 198 exige el hecho lesivo y su conocimiento; la sentencia penal firme puede fijarlo.", href: NEXUS("sen-1-0004-767649"), gc: true },
  { numero: "Voto 972-F-S1-2014", organo: S1, fecha: "24-07-2014", tema: "Materia tributaria", criterio: "La discusión tributaria se rige por la prescripción del CNPT y no por el año del art. 39.", href: NEXUS("sen-1-0004-768813") },
  { numero: "Voto 510-F-S1-2014", organo: S1, fecha: "10-04-2014", tema: "Daño continuado", criterio: "El daño continuado depende de la acción que lo produce, no de la permanencia de la lesión.", href: NEXUS("sen-1-0004-768601") },
  { numero: "Voto 27-F-S1-2018", organo: S1, fecha: "18-01-2018", tema: "Reglamentos", criterio: "Un reglamento se impugna dentro del año posterior a su publicación; después, solo sus actos de aplicación.", href: NEXUS("sen-1-0004-952466") },
  { numero: "Sentencia 105-F-TC-2020", organo: TC, fecha: "09-07-2020", tema: "Actuaciones materiales", criterio: "Un proceso penal paralelo no suspende la caducidad; la ejecución de un acto instantáneo no lo vuelve continuado.", href: NEXUS("sen-1-1011-999186") },
  { numero: "Voto 2077-F-S1-2020", organo: S1, fecha: "23-07-2020", tema: "Caducidad de oficio", criterio: "La caducidad puede declararse de oficio; la prescripción es renunciable.", href: NEXUS("sen-1-0004-1016452") },
  { numero: "Resolución 1778-A-S1-2021", organo: S1, fecha: "12-10-2021", tema: "Pretensión indemnizatoria", criterio: "La pretensión solo resarcitoria se rige por la prescripción (art. 41 CPCA y 198 LGAP), no por la caducidad.", href: NEXUS("sen-1-0004-1060850") },
  { numero: "Sentencia 249-F-TC-2021", organo: TC, fecha: "16-12-2021", tema: "Cautelar y caducidad", criterio: "La cautelar anticipada no detiene el año del art. 39; la caducidad no admite interrupción ni suspensión.", href: NEXUS("sen-1-1011-1073421") },
  { numero: "Sentencia 70-F-TC-2022", organo: TC, fecha: "22-03-2022", tema: "Cómputo", criterio: "El año arranca el día hábil siguiente a la notificación del acto.", href: NEXUS("sen-1-1011-1101973") },
  { numero: "Voto 2022-002031", organo: "Sala Segunda", fecha: "27-07-2022", tema: "Materia laboral", criterio: "Los reclamos laborales contra el Estado prescriben en un año desde la extinción del contrato; no se aplica la caducidad del CPCA.", href: NEXUS("sen-1-0005-1105907") },
  { numero: "Sentencia 167-F-TC-2022", organo: TC, fecha: "12-08-2022", tema: "Cómputo", criterio: "El año corre de fecha a fecha y, si vence en día inhábil, se prorroga al siguiente hábil.", href: NEXUS("sen-1-1011-1141729") },
  { numero: "Voto 2022-002827", organo: "Sala Segunda", fecha: "07-10-2022", tema: "Estado como patrono único", criterio: "Una interrupción de más de un mes entre nombramientos hace correr la prescripción.", href: NEXUS("sen-1-0005-1120711") },
  { numero: "Voto 36-F-S1-2025", organo: S1, fecha: "16-01-2025", tema: "Contratos", criterio: "El cobro derivado de un contrato administrativo prescribe en cinco años.", href: NEXUS("sen-1-0004-1273368") },
  { numero: "Voto 2026-003645", organo: "Sala Constitucional", fecha: "30-01-2026", tema: "Amparo", criterio: "Superados los dos meses del art. 35 LJC, el amparo es extemporáneo.", href: NEXUS("sen-1-0007-1369958") },
  { numero: "Voto 1050-S1-2026", organo: S1, fecha: "22-07-2026", tema: "Honorarios", criterio: "Los honorarios profesionales prescriben en tres años; una demanda ante una vía incompetente no interrumpe.", href: NEXUS("sen-1-0004-1416782") },
];

const ANTECEDENTES: Fuente[] = [
  { titulo: "CPCA, exposición de motivos del proyecto (expediente 15.134)", detalle: "El plazo de un año y la nulidad absoluta de efectos continuados" },
  { titulo: "CPCA, subcomisión del expediente 15.134, acta n.º 14", detalle: "30-03-2005, folios 941 a 954 · Arts. 40 y 41: caducidad frente a prescripción del derecho de fondo" },
  { titulo: "CPCA, Comisión Permanente de Asuntos Jurídicos, sesión n.º 20", detalle: "30-08-2005 · El plazo anual y la nulidad absoluta" },
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

export function FuentesPlazos() {
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
      <Grupo titulo="Antecedentes legislativos" items={ANTECEDENTES} />
      <p className="gc-fig-source">
        Textos normativos: SINALEVI y bases normativas de Corporación GC, en su versión vigente. Jurisprudencia: Nexus del
        Poder Judicial. Actas: expediente legislativo 15.134 de la Asamblea Legislativa.
      </p>
    </div>
  );
}
