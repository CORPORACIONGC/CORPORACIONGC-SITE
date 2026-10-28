/* Figuras de la guía «Ley 6043 de Zona Marítimo Terrestre: zona pública,
   zona restringida y concesiones». Mismo lenguaje editorial que la guía de
   la LGAP (bloque .gc-fig de app/globals.css). Las cifras salen del texto
   vigente de la ley y de su Reglamento (Decreto Ejecutivo 7841-P),
   cotejados con SINALEVI el 28-10-2026; la investigación está en
   ~/PAGINA GC/guia-zmt-2026-10-28. */

import { RunningHead } from "@/components/ui/RunningHead";
import { LEY6043_CONEXAS, LEY6043_FICHA, LEY6043_REFORMAS } from "@/lib/ley6043";

const ART = (n: string) => `#art-${n}`;
const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;
const REGLAMENTO = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=18579&param2=93916&param3=1";

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

const nombreNorma = (n: string) => n.replace(/^Ley /, "Ley N.° ");

/* ── Las reformas de la ley ─────────────────────────────────────────── */

export function ReformasLey6043() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-reformas-6043">
      <FigHead
        id="fig-reformas-6043"
        title="Las reformas de la ley desde 1977"
        lead="Leyes que reformaron, adicionaron o interpretaron la Ley 6043, y los dos votos de la Sala Constitucional que tocaron su texto. El articulado que se publica en esta página las incorpora todas."
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
              {LEY6043_REFORMAS.map((r) => (
                <tr key={r.norma}>
                  <td className="gc-recurso">
                    {r.href ? (
                      <a href={r.href} {...EXT}>
                        {nombreNorma(r.norma)}
                      </a>
                    ) : (
                      nombreNorma(r.norma)
                    )}
                    <span className="gc-fig-ref">{r.fecha}</span>
                  </td>
                  <td>
                    {r.cambio} <span className="gc-fig-ref">{r.donde}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        La última reforma es la Ley N.° 10236, de 5 de abril de 2022, sobre Caldera. La versión vigente en SINALEVI es la
        9 de 9. Cotejo del 28 de octubre de 2026.
      </p>
      <FigSource>
        <a href={LEY6043_FICHA.sinalevi} {...EXT}>
          SINALEVI, Ley N.° 6043
        </a>
        , historial de versiones y normativa que la afectó; Sistema de Información Legislativa.
      </FigSource>
    </figure>
  );
}

/* ── Las leyes conexas ──────────────────────────────────────────────── */

export function LeyesConexas6043() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-conexas-6043">
      <FigHead
        id="fig-conexas-6043"
        title="El reglamento y las leyes que completan la Ley 6043"
        lead="Qué regula cada una y en qué estado está al 28 de octubre de 2026."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Norma</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              {LEY6043_CONEXAS.map((c) => (
                <tr key={c.norma}>
                  <td className="gc-recurso">
                    {c.href ? (
                      <a href={c.href} {...EXT}>
                        {nombreNorma(c.norma)}
                      </a>
                    ) : (
                      nombreNorma(c.norma)
                    )}
                    <span className="gc-fig-ref">{c.nombre}</span>
                  </td>
                  <td>{c.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>SINALEVI, fichas de cada norma; Nexus del Poder Judicial; Procuraduría General de la República.</FigSource>
    </figure>
  );
}

/* ── Plazos y cifras ────────────────────────────────────────────────── */

type Base = { ley?: string[]; reglamento?: string[] };

const CIFRAS: { que: string; cifra: string; base: Base }[] = [
  {
    que: "Ancho de la zona marítimo terrestre",
    cifra: "200 metros a todo lo largo de los litorales, medidos horizontalmente a partir de la línea de la pleamar ordinaria, más los terrenos y rocas que el mar deja al descubierto en la marea baja.",
    base: { ley: ["9"] },
  },
  {
    que: "Zona pública",
    cifra: "Los primeros 50 metros desde la pleamar ordinaria y las áreas que quedan al descubierto en la marea baja. Los manglares y esteros son zona pública sea cual fuere su extensión.",
    base: { ley: ["10", "11"] },
  },
  {
    que: "Zona restringida",
    cifra: "Los 150 metros restantes, o los demás terrenos en el caso de las islas. Solo en ella caben concesiones.",
    base: { ley: ["10", "39"] },
  },
  {
    que: "Plazo de la concesión",
    cifra: "No menor de 5 ni mayor de 20 años.",
    base: { ley: ["48"] },
  },
  {
    que: "Prórroga",
    cifra: "Sucesiva, cada vez por un plazo no mayor de 20 años. Se pide dentro de los 3 meses siguientes al aviso municipal de vencimiento; la solicitud extemporánea se tiene como nueva solicitud de concesión.",
    base: { ley: ["50"] },
  },
  {
    que: "Aviso de vencimiento y solicitud sin aviso",
    cifra: "La municipalidad avisa con no menos de 6 meses ni más de 1 año de anticipación. Sin aviso, la prórroga se pide dentro de los 6 meses anteriores al vencimiento. El instituto resuelve en 30 días naturales y la municipalidad en otros 30.",
    base: { reglamento: ["53"] },
  },
  {
    que: "Prórroga anticipada",
    cifra: "Cuando haya transcurrido al menos la mitad del plazo, y solo para usar la concesión como garantía de nuevas inversiones o mejoras, o para readecuar o refinanciar créditos de la actividad.",
    base: { ley: ["50"] },
  },
  {
    que: "Extranjeros",
    cifra: "No se otorgan concesiones a extranjeros con menos de 5 años de residencia en el país (continua, según el Reglamento), ni a entidades con más del 50 % de su capital en manos de extranjeros.",
    base: { ley: ["47"], reglamento: ["25"] },
  },
  {
    que: "Canon anual",
    cifra: "Un porcentaje del avalúo que fija el reglamento municipal: uso agropecuario hasta 2 %; habitacional hasta 3 %; hotelero turístico o recreativo hasta 4 %; comercial, industrial, minero o extractivo hasta 5 %. Ningún canon puede ser menor al 0,25 % del avalúo.",
    base: { reglamento: ["49"] },
  },
  {
    que: "Avalúo",
    cifra: "Lo hace la municipalidad y vale 5 años. Se notifica, y los recursos contra él se presentan dentro de 15 días hábiles. No se avalúan la zona pública ni los humedales, esteros y riscos.",
    base: { reglamento: ["50", "51"] },
  },
  {
    que: "Pago del canon",
    cifra: "Por anualidades adelantadas, que pueden fraccionarse trimestralmente. El cobro prescribe en 5 años.",
    base: { reglamento: ["51 bis"] },
  },
  {
    que: "Rebaja para vivienda",
    cifra: "Hasta 0,25 % del avalúo para personas residentes de escasos recursos, cuando se trata de vivienda.",
    base: { reglamento: ["52"] },
  },
  {
    que: "Destino de lo cobrado",
    cifra: "20 % para un fondo de pago de mejoras; 40 % para obras en las zonas turísticas, incluidas las unidades de guardavidas; 40 % para obras del cantón.",
    base: { ley: ["59"] },
  },
  {
    que: "Trámite de la solicitud",
    cifra: "30 días calendario para corregir lo prevenido; desistimiento tras 6 meses sin movimiento imputable al interesado; 30 días hábiles para oposiciones desde el edicto; 30 días hábiles para el proyecto de resolución del Alcalde y otros 30 para firmar el contrato y pagar la primera anualidad; 30 días naturales para la aprobación del instituto.",
    base: { reglamento: ["30", "33", "38", "40", "42", "44", "46"] },
  },
  {
    que: "Pobladores",
    cifra: "Costarricenses por nacimiento con más de 10 años de residencia en la zona pueden continuar en su lote si es su única propiedad, sujetos a la planificación y respetando la zona pública.",
    base: { ley: ["70"] },
  },
  {
    que: "Penas",
    cifra: "Explotar flora o fauna sin autorización: 6 meses a 4 años de prisión. Construir o desarrollar contra la ley: 1 mes a 3 años. El funcionario que otorga o aprueba contra la ley: 3 meses a 2 años y despido.",
    base: { ley: ["61", "62", "63"] },
  },
];

function Referencias({ base }: { base: Base }) {
  const partes: React.ReactNode[] = [];
  base.ley?.forEach((a) =>
    partes.push(
      <a key={`l${a}`} href={ART(a)}>
        art. {a}
      </a>,
    ),
  );
  if (base.reglamento?.length) {
    partes.push(
      <a key="reg" href={REGLAMENTO} {...EXT}>
        Reglamento, {base.reglamento.length === 1 ? "art." : "arts."} {base.reglamento.join(", ")}
      </a>,
    );
  }
  return (
    <span className="gc-fig-ref">
      {partes.map((p, i) => (
        <span key={i}>
          {i > 0 && ", "}
          {p}
        </span>
      ))}
    </span>
  );
}

export function PlazosLey6043() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-plazos-6043">
      <FigHead
        id="fig-plazos-6043"
        n={1}
        kicker="Plazos y cifras"
        title="Las medidas, los plazos y el canon de la zona marítimo terrestre"
        lead="Cada artículo de la ley enlaza con su texto vigente en esta misma página; los del Reglamento, con SINALEVI."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Qué</th>
                <th scope="col">Medida o plazo</th>
              </tr>
            </thead>
            <tbody>
              {CIFRAS.map((c) => (
                <tr key={c.que}>
                  <td className="gc-recurso">{c.que}</td>
                  <td>
                    {c.cifra} <Referencias base={c.base} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        Mientras una municipalidad no dicte el reglamento de cánones previsto en el artículo 49 del Reglamento, aplica los
        porcentajes anteriores a la reforma de 2013, según su transitorio único. En las zonas urbanas litorales el canon lo
        fija cada municipalidad con la plataforma de valores por zonas homogéneas del Ministerio de Hacienda (art. 19 de la
        Ley 9221).
      </p>
      <FigSource>
        Ley N.° 6043 y su Reglamento (Decreto Ejecutivo 7841-P), textos vigentes en{" "}
        <a href={LEY6043_FICHA.sinalevi} {...EXT}>
          SINALEVI
        </a>
        .
      </FigSource>
    </figure>
  );
}
