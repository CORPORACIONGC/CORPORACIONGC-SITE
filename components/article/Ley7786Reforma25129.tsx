/* Figuras de la nota «Ley 7786 reformada: sanciones personales para
   directores de sujetos obligados» (expediente 25.129). Mismo lenguaje
   editorial que las demás guías (.gc-fig de app/globals.css).
   Fuentes, cotejadas el 26-11-2026: redacción final del expediente 25.129
   (Comisión de Redacción, 19-11-2026); Ley 7786, arts. 15 bis y 81 en la
   versión 14 de 14 de SINALEVI, con la reforma de la Ley 10961; resolución
   motivada y matriz de observaciones de la reforma del Acuerdo SUGEF 11-18
   (CONASSIF, sesión 2062-2026, art. 8), Alcance 149 a La Gaceta 214 del
   11-11-2026, págs. 427 a 468. */

import { RunningHead } from "@/components/ui/RunningHead";

const SIL_25129 = "https://consultassil3.asamblea.go.cr/frmConsultaProyectos.aspx";
const SINALEVI_7786 = "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=29254&param2=152427&param3=1";
const ALCANCE_149 = "https://www.imprentanacional.go.cr/pub/2026/11/11/ALCA149_11_11_2026.pdf";
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

/* ── Figura 2. El artículo 81 vigente frente al aprobado ──────────────── */

const COMPARADO: { tema: string; vigente: string; aprobado: string }[] = [
  {
    tema: "Entidades financieras del artículo 14",
    vigente: "Multa del 0,5 % al 2 % del patrimonio, sin mínimo ni máximo expresados en salarios base.",
    aprobado: "Se sancionan «previo apercibimiento». La multa sobre el patrimonio se mantiene, con un mínimo de tres y un máximo de cien salarios base.",
  },
  {
    tema: "Sujetos de los artículos 15, 15 bis, 15 ter y 15 quater (incluye a los PSAV)",
    vigente: "Multa del 5 % al 50 % de la transacción o de dos a cien salarios base, según la falta, en el texto de la Ley 10961.",
    aprobado: "Las mismas faltas y los mismos rangos. Los cambios son de redacción.",
  },
  {
    tema: "Directores y altos cargos",
    vigente: "El artículo no los menciona: las sanciones recaen sobre la entidad o la persona obligada.",
    aprobado: "Bloque nuevo: siete faltas, cinco tipos de sanción y la exigencia de dolo o culpa acreditados de forma individual.",
  },
  {
    tema: "Organizaciones sin fines de lucro",
    vigente: "Están en el inciso d) del 15 bis y quedan en el régimen general de ese artículo.",
    aprobado: "Régimen propio para las del 15 quinquies: cuatro conductas, prevención escrita y multas de dos a diez salarios base, sin responsabilidad objetiva.",
  },
  {
    tema: "Destino de las multas",
    vigente: "Una cuenta especial a nombre del Instituto Costarricense sobre Drogas.",
    aprobado: "Las cuentas del Sistema de Cuentas del Sector Público, con comprobante a la Tesorería Nacional y copia al ICD.",
  },
  {
    tema: "Lista pública de sanciones firmes",
    vigente: "Se mantiene la lista de sanciones firmes de personas físicas y jurídicas, «utilizándose su publicación».",
    aprobado: "La misma lista, «autorizándose su publicación» por los medios que estimen pertinentes los supervisores.",
  },
];

export function Art81Comparado() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-art81-comparado">
      <FigHead
        id="fig-art81-comparado"
        n={2}
        kicker="Artículo 81"
        title="El artículo 81 vigente frente al texto aprobado"
        lead="La reforma conserva las multas a las entidades y a los demás sujetos obligados, y agrega dos bloques: uno para las personas que los dirigen y otro para las organizaciones sin fines de lucro."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Vigente (Ley 10961)</th>
                <th scope="col">Aprobado (exp. 25.129)</th>
              </tr>
            </thead>
            <tbody>
              {COMPARADO.map((c) => (
                <tr key={c.tema}>
                  <td className="gc-recurso">{c.tema}</td>
                  <td data-label="Vigente">{c.vigente}</td>
                  <td data-label="Aprobado">{c.aprobado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Cotejo propio del{" "}
        <a href={SINALEVI_7786} {...EXT}>
          artículo 81 de la Ley 7786
        </a>{" "}
        reformado por la Ley 10961 y de la redacción final del expediente 25.129, del 19 de noviembre de 2026 (
        <a href={SIL_25129} {...EXT}>
          SIL
        </a>
        ).
      </FigSource>
    </figure>
  );
}

/* ── Figura 1. Las sanciones personales ───────────────────────────────── */

const SANCIONES: { sancion: string; alcance: string }[] = [
  {
    sancion: "a) Multa proporcional",
    alcance: "Del 5 % al 50 % del monto de la transacción determinada como irregular o vinculada a una actividad ilícita, con un mínimo de dos y un máximo de cincuenta salarios base.",
  },
  { sancion: "b) Multa fija", alcance: "De diez a cien salarios base. No se combina con la multa del inciso a)." },
  { sancion: "c) Suspensión", alcance: "Del cargo, hasta por noventa días." },
  { sancion: "d) Recomendación de destitución", alcance: "Del cargo, dirigida «a la entidad respectiva»." },
  { sancion: "e) Inhabilitación", alcance: "Permanente, para ejercer cargos similares en instituciones financieras." },
];

export function SancionesDirectores() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-sanciones-directores">
      <FigHead
        id="fig-sanciones-directores"
        n={1}
        kicker="Sanciones personales"
        title="Lo que puede imponerse a un director o alto cargo"
        lead="Una o varias a la vez, salvo las dos multas entre sí. Se gradúan según la gravedad de la falta, la magnitud del daño, la reincidencia, los indicios de la intencionalidad y la duración de la conducta."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Sanción</th>
                <th scope="col">Alcance</th>
              </tr>
            </thead>
            <tbody>
              {SANCIONES.map((s) => (
                <tr key={s.sancion}>
                  <td className="gc-recurso">{s.sancion}</td>
                  <td>{s.alcance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Expediente 25.129, redacción final del 19 de noviembre de 2026, artículo 1, nuevo texto del artículo 81 de la Ley
        7786. Texto aprobado y pendiente de sanción.
      </FigSource>
    </figure>
  );
}

/* ── Figura 3. Las OSFL en tres textos ────────────────────────────────── */

const OSFL: { texto: string; supuesto: string; condicion: string }[] = [
  {
    texto: "Ley 7786 vigente, art. 15 bis d)",
    supuesto:
      "La ley describe el supuesto: las organizaciones que envíen o reciban dinero de jurisdicciones catalogadas de riesgo, o que tengan matrices, sucursales o filiales en ellas.",
    condicion: "Sujeto obligado del 15 bis, con inscripción ante la SUGEF y el régimen sancionatorio del tercer bloque del artículo 81.",
  },
  {
    texto: "Acuerdo SUGEF 11-18 reformado (2-11-2026)",
    supuesto:
      "A partir del inciso d), las que en doce meses envíen o reciban una o más transferencias con jurisdicciones de riesgo alto o muy alto según el Índice Global de Terrorismo, o tengan esas relaciones.",
    condicion: "OSFL registrada y sujeta a monitoreo, distinta del sujeto inscrito. El registro puede suspenderse, cancelarse o revocarse.",
  },
  {
    texto: "Expediente 25.129, art. 15 quinquies",
    supuesto:
      "El CONASSIF define, con un enfoque basado en riesgos, el subsector más expuesto al financiamiento del terrorismo.",
    condicion: "Registro ante la SUGEF, sin ser sujeto obligado ni entidad reportante. Régimen propio en el artículo 81: prevención escrita y multas de dos a diez salarios base.",
  },
];

export function OsflTresTextos() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-osfl-tres-textos">
      <FigHead
        id="fig-osfl-tres-textos"
        n={3}
        kicker="Organizaciones sin fines de lucro"
        title="La ley vigente, el reglamento de noviembre y el texto aprobado"
        lead="El Acuerdo SUGEF 11-18 reformado el 2 de noviembre se apoya en un inciso que el expediente 25.129 traslada a otro artículo y redefine."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Texto</th>
                <th scope="col">Qué organizaciones</th>
                <th scope="col">Condición y consecuencias</th>
              </tr>
            </thead>
            <tbody>
              {OSFL.map((o) => (
                <tr key={o.texto}>
                  <td className="gc-recurso">{o.texto}</td>
                  <td data-label="Qué organizaciones">{o.supuesto}</td>
                  <td data-label="Condición">{o.condicion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Ley 7786, art. 15 bis d), versión de SINALEVI; resolución motivada y matriz de observaciones de la reforma del
        Acuerdo SUGEF 11-18 (CONASSIF, sesión 2062-2026, art. 8),{" "}
        <a href={ALCANCE_149} {...EXT}>
          Alcance 149 a La Gaceta 214
        </a>
        , 11 de noviembre de 2026, págs. 427 a 455; expediente 25.129, redacción final.
      </FigSource>
    </figure>
  );
}
