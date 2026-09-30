/* Figuras y fuentes del artículo «Uber y el seguro del carro en Costa Rica».
   Cada voto se leyó completo en la base local y se cotejó con su texto en
   Nexus el 29-09-2026; las normas, en la base normativa local y en SINALEVI.
   Los casos se describen sin nombres de las partes. */

import { RunningHead } from "@/components/ui/RunningHead";

const NEXUS = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;
const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;
const LRCS = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=71064&param2=131138&param3=1";
const LRMS = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=63749&param2=128066&param3=1";

type Caso = { voto: string; href: string; fecha: string; redacta: string; hechos: string; resolvio: string };

const CASOS: Caso[] = [
  {
    voto: "1102-F-S1-2023",
    href: NEXUS("sen-1-0004-1176099"),
    fecha: "05-07-2023",
    redacta: "Jiménez Ramírez",
    hechos:
      "Declaró uso particular al comprar el carro con crédito prendario y lo usó en Uber desde entonces; dijo haber dejado la plataforma tres meses antes del choque.",
    resolvio:
      "La declaración inexacta del riesgo (art. 32 LRCS) impide reclamar, aun si faltó información sobre las exclusiones. La adición y aclaración se rechazó en la resolución 1579-A-S1-2024.",
  },
  {
    voto: "283-F-S1-2026",
    href: NEXUS("sen-1-0004-1367494"),
    fecha: "19-02-2026",
    redacta: "Leiva Poveda",
    hechos:
      "Se inscribió en Uber a inicios de 2018 sin avisar a la aseguradora; el vuelco ocurrió en diciembre de ese año y no probó haberse dado de baja.",
    resolvio:
      "La inscripción agrava el riesgo y activa las exclusiones por uso distinto y por transporte remunerado, preste o no el servicio en el momento del siniestro.",
  },
  {
    voto: "285-F-S1-2026",
    href: NEXUS("sen-1-0004-1366985"),
    fecha: "19-02-2026",
    redacta: "Rivas Loáiciga",
    hechos:
      "Firmó un formulario prellenado con uso personal y lo destinó a Uber desde la compra; alegó que no recibió las condiciones de la póliza.",
    resolvio:
      "La firma con el «recibido conforme» acredita la información; la remisión a un sitio web no infringe por sí sola el deber de informar.",
  },
  {
    voto: "610-S1-2026",
    href: NEXUS("sen-1-0004-1386367"),
    fecha: "30-04-2026",
    redacta: "Rojas Morales",
    hechos:
      "Admitió ante el investigador que inscribió el carro desde que lo adquirió y lo usó «por ratitos»; el día del choque no prestaba el servicio.",
    resolvio:
      "La agravación depende del cambio de destino, cualquiera que sea la frecuencia del uso; la confesión extrajudicial basta como prueba.",
  },
];

export function CasosUberSeguros() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-casos-uber">
      <header className="gc-fig-head">
        <RunningHead title="Jurisprudencia" locator="Figura 1" />
        <p id="fig-casos-uber" className="gc-fig-title">
          Cuatro casos, un mismo resultado
        </p>
        <p className="gc-fig-lead">
          Las sentencias de fondo de la Sala Primera sobre carros asegurados para uso particular y destinados a Uber.
          En todas, la aseguradora era Mapfre y la póliza era colectiva, con el banco que financió la compra como tomador.
        </p>
      </header>
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Sentencia</th>
                <th scope="col">Hechos y criterio</th>
              </tr>
            </thead>
            <tbody>
              {CASOS.map((c) => (
                <tr key={c.voto}>
                  <td className="gc-recurso">
                    <a href={c.href} {...EXT}>
                      {c.voto}
                    </a>
                    <span className="gc-fig-ref">
                      {c.fecha} · Redacta {c.redacta}
                    </span>
                  </td>
                  <td>
                    {c.hechos} <strong>{c.resolvio}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        En los cuatro casos la Sala rechazó el recurso de casación del asegurado y le impuso las costas.
      </p>
      <p className="gc-fig-source">
        <span>Fuente:</span> Sala Primera de la Corte Suprema de Justicia, textos íntegros en Nexus del Poder
        Judicial.
      </p>
    </figure>
  );
}

type Regla = { supuesto: string; norma: string; efecto: string };

const REGLAS: Regla[] = [
  {
    supuesto: "Al contratar se declaró un uso distinto del real",
    norma: "LRCS, arts. 31 a 33",
    efecto:
      "La reticencia o la falsedad intencional produce la nulidad relativa o absoluta del contrato, según corresponda. Ante un siniestro, la aseguradora paga completo si el vicio no puede reprocharse al tomador; si le es atribuible, paga en proporción a la prima cobrada frente a la debida, y queda liberada si demuestra que no habría consentido el seguro.",
  },
  {
    supuesto: "El uso cambió después de contratar y no se avisó",
    norma: "LRCS, arts. 52, 53 y 55",
    efecto:
      "El aviso debe darse por escrito con diez días hábiles de antelación si el cambio depende del asegurado. Sin aviso, la indemnización puede reducirse en proporción a la prima; la aseguradora queda liberada si las nuevas condiciones habrían impedido el aseguramiento o si la omisión fue dolosa o gravemente culposa.",
  },
];

export function ReglasUberSeguros() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-reglas-uber">
      <header className="gc-fig-head">
        <RunningHead title="Ley 8956" locator="Figura 2" />
        <p id="fig-reglas-uber" className="gc-fig-title">
          Declaración inicial y agravación posterior
        </p>
        <p className="gc-fig-lead">
          La Ley Reguladora del Contrato de Seguros trata por separado el riesgo mal declarado al contratar y el riesgo
          que se agrava durante la vigencia de la póliza.
        </p>
      </header>
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Supuesto</th>
                <th scope="col">Consecuencia legal</th>
              </tr>
            </thead>
            <tbody>
              {REGLAS.map((r) => (
                <tr key={r.supuesto}>
                  <td className="gc-recurso">{r.supuesto}</td>
                  <td>
                    {r.efecto}{" "}
                    <span className="gc-fig-ref">
                      <a href={LRCS} {...EXT}>
                        {r.norma}
                      </a>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        En los votos 1102-F-S1-2023 y 285-F-S1-2026 constó que la aseguradora no ofrece pólizas para vehículos
        destinados al transporte remunerado de personas mediante plataformas. En los cuatro casos la Sala confirmó el
        rechazo total del reclamo.
      </p>
      <p className="gc-fig-source">
        <span>Fuente:</span> Ley Reguladora del Contrato de Seguros, N.° 8956, texto vigente en{" "}
        <a href={LRCS} {...EXT}>
          SINALEVI
        </a>
        .
      </p>
    </figure>
  );
}

type Fuente = { titulo: string; detalle: string; href?: string };
type Criterio = { numero: string; organo: string; fecha: string; tema: string; criterio: string; href: string };

const NORMAS: Fuente[] = [
  { titulo: "Ley Reguladora del Contrato de Seguros", detalle: "Ley N.° 8956, arts. 7, 12, 17, 31 a 33 y 52 a 55", href: LRCS },
  { titulo: "Ley Reguladora del Mercado de Seguros", detalle: "Ley N.° 8653, arts. 4 y 6", href: LRMS },
  { titulo: "Ley de Promoción de la Competencia y Defensa Efectiva del Consumidor", detalle: "Ley N.° 7472, art. 42" },
  { titulo: "Ley de Tránsito por Vías Públicas Terrestres y Seguridad Vial", detalle: "Ley N.° 9078, arts. 56, 57 y 64" },
  { titulo: "Código Civil", detalle: "Arts. 21, 692, 1022, 1023 y 1025" },
];

const S1 = "Sala Primera";

const JURISPRUDENCIA: Criterio[] = [
  { numero: "Voto 1102-F-S1-2023", organo: S1, fecha: "05-07-2023", tema: "Declaración del riesgo", criterio: "Quien declara uso particular y destina el carro a Uber no puede exigir la cobertura, aunque alegue falta de información sobre las exclusiones.", href: NEXUS("sen-1-0004-1176099") },
  { numero: "Resolución 1579-A-S1-2024", organo: S1, fecha: "07-11-2024", tema: "Adición y aclaración", criterio: "Rechaza la gestión contra el voto 1102-F-S1-2023 por buscar variar sus considerandos.", href: NEXUS("sen-1-0004-1262683") },
  { numero: "Voto 283-F-S1-2026", organo: S1, fecha: "19-02-2026", tema: "Inscripción en la plataforma", criterio: "La inscripción es el requisito para prestar el servicio y basta para agravar el riesgo y activar la exclusión.", href: NEXUS("sen-1-0004-1367494") },
  { numero: "Voto 285-F-S1-2026", organo: S1, fecha: "19-02-2026", tema: "Deber de información", criterio: "La firma del formulario y del «recibido conforme» acredita la información; el tomador informa el cambio de uso si el asegurado se lo comunica.", href: NEXUS("sen-1-0004-1366985") },
  { numero: "Voto 610-S1-2026", organo: S1, fecha: "30-04-2026", tema: "Uso ocasional", criterio: "La agravación depende del cambio de destino, cualquiera que sea la frecuencia del uso; la confesión extrajudicial prueba el uso.", href: NEXUS("sen-1-0004-1386367") },
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

export function FuentesUberSeguros() {
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
              </span>
            </li>
          ))}
        </ol>
      </section>
      <Grupo
        titulo="Doctrina"
        items={[{ titulo: "Breedy Arguedas, S. El contrato de seguros", detalle: "Editorial Investigaciones Jurídicas, 1.ª ed., pp. 80 y 81 (citado en el voto 285-F-S1-2026)" }]}
      />
      <Grupo
        titulo="Otras fuentes"
        items={[{ titulo: "Uber Costa Rica, «ASSA y Uber, respaldo en todos tus viajes en Costa Rica»", detalle: "Blog de Uber, 1 de setiembre de 2025 · Resumen de las coberturas del seguro de los viajes", href: "https://www.uber.com/cr/es/blog/assa-y-uber-respaldo-en-viajes-costa-rica/" }]}
      />
      <p className="gc-fig-source">
        Textos normativos: SINALEVI y bases normativas de Corporación GC, en su versión vigente. Jurisprudencia: Nexus
        del Poder Judicial.
      </p>
    </div>
  );
}
