/* Figuras de la guía «Acuerdo SUGEF 13-19 y activos virtuales». Mismo
   lenguaje editorial que las demás guías (.gc-fig de app/globals.css).
   Fuentes: texto consultado (CONASSIF, sesión 2053-2026, art. 9, Alcance
   134 a La Gaceta 187 del 05-10-2026) y texto aprobado (CONASSIF, sesión
   2064-2026, art. 12, del 09-11-2026, Alcance 149 a La Gaceta 214 del
   11-11-2026, págs. 545 a 555), cotejados el 18-11-2026; estado de la
   inscripción y fechas revisados el 26-11-2026. */

import { RunningHead } from "@/components/ui/RunningHead";

const ALCANCE_134 = "https://www.imprentanacional.go.cr/pub/2026/10/05/ALCA134_05_10_2026.pdf";
const ALCANCE_149 = "https://www.imprentanacional.go.cr/pub/2026/11/11/ALCA149_11_11_2026.pdf";
const ALCANCE_78 = "https://www.imprentanacional.go.cr/pub/2026/06/19/ALCA78_19_06_2026.pdf";
const ALCANCE_148 = "https://www.imprentanacional.go.cr/pub/2026/11/09/ALCA148_09_11_2026.pdf";
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

/* ── Figura 1. Cronología ──────────────────────────────────────────────── */

const HITOS: { fecha: string; que: string; fuente: { texto: string; href: string } }[] = [
  { fecha: "19-06-2026", que: "Se publica la Ley 10961, que adiciona el artículo 15 quater a la Ley 7786 y convierte a los proveedores de servicios de activos virtuales en sujetos obligados.", fuente: { texto: "Alcance 78", href: ALCANCE_78 } },
  { fecha: "19-09-2026", que: "La ley entra en vigor. Su artículo 4 había dado «un plazo de hasta tres meses» para reglamentarla.", fuente: { texto: "Ley 10961, art. 4", href: ALCANCE_78 } },
  { fecha: "05-10-2026", que: "El CONASSIF somete a consulta pública, por diez días hábiles, la reforma del Acuerdo SUGEF 13-19.", fuente: { texto: "Alcance 134", href: ALCANCE_134 } },
  { fecha: "09-11-2026", que: "El CONASSIF aprueba el texto definitivo «por unanimidad y en firme». El mismo día se publica la reforma del Acuerdo SUGEF 11-18, sin los proveedores de activos virtuales.", fuente: { texto: "Alcance 148", href: ALCANCE_148 } },
  { fecha: "11-11-2026", que: "Se publica la reforma del 13-19 y entra en vigor. Empieza a correr el plazo de seis meses de adecuación.", fuente: { texto: "Alcance 149", href: ALCANCE_149 } },
  { fecha: "19-12-2026", que: "Vence el plazo de reglamentación del artículo 4 si se cuenta desde la vigencia de la ley; contado desde la publicación, venció el 19-09-2026. Cálculo propio.", fuente: { texto: "Ley 10961, art. 4", href: ALCANCE_78 } },
  { fecha: "11-05-2027", que: "Vence la adecuación: seis meses contados desde el día siguiente a la entrada en vigor (12-05-2027 si se computa de fecha a fecha). Cálculo propio.", fuente: { texto: "Transitorio único", href: ALCANCE_149 } },
];

export function CronologiaPsav() {
  return (
    <figure className="gc-fig gc-fig-flujo" aria-labelledby="fig-cronologia-psav">
      <FigHead
        id="fig-cronologia-psav"
        n={1}
        kicker="Cronología"
        title="De la Ley 10961 al reglamento de prevención"
        lead="Las obligaciones ya tienen reglamento; el trámite de inscripción todavía no."
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
              <a href={h.fuente.href} {...EXT}>
                {h.fuente.texto}
              </a>
            </span>
          </li>
        ))}
      </ol>
      <FigSource>La Gaceta (Imprenta Nacional), alcances 78, 134, 148 y 149 de 2026. Las fechas del 19-12-2026 y el 11-05-2027 son cálculo propio.</FigSource>
    </figure>
  );
}

/* ── Figura 2. Lo que cambia, artículo por artículo ───────────────────── */

const CAMBIOS: { articulo: string; que: string }[] = [
  { articulo: "Título y art. 2", que: "El reglamento se aplica también a los sujetos del artículo 15 quater de la Ley 7786." },
  { articulo: "Art. 3", que: "Define «activo virtual» y «PSAV» con las cuatro actividades de la ley: intercambio, transferencia, custodia o administración, y servicios financieros ligados a la emisión, oferta o venta de activos virtuales." },
  { articulo: "Art. 5", que: "La gestión del riesgo debe considerar el tipo de activo, las billeteras autoalojadas o no custodiadas, las herramientas que dificultan la trazabilidad, las direcciones incluidas en listas de organismos internacionales y los activos vinculados con delitos." },
  { articulo: "Art. 6", que: "Antes de incorporar un activo, servicio o tecnología, una evaluación de riesgo que considere, entre otros factores, el anonimato, lo transfronterizo y los mecanismos de custodia; se revisa ante cambios relevantes." },
  { articulo: "Arts. 7 y 9", que: "Identificación del cliente habitual y del beneficiario final; al ocasional, desde US$1.000 en una operación o acumulados en un mes calendario. El umbral no exime ante sospechas, dudas o fraccionamiento. Prohibidos los clientes anónimos." },
  { articulo: "Art. 10", que: "La información del cliente debe permitir asociar sus direcciones, cuentas o billeteras con la identidad verificada." },
  { articulo: "Art. 20 bis (nuevo)", que: "Registros completos y verificables con siete datos mínimos por operación; bajo el umbral, la información necesaria para su trazabilidad; criterios para detectar operaciones fraccionadas." },
  { articulo: "Art. 21 bis (nuevo)", que: "Regla de viaje: nombre, número de referencia, dirección, país, identificación y, para personas físicas, fecha y lugar de nacimiento; completa desde US$1.000. Procedimientos para billeteras autoalojadas." },
  { articulo: "Arts. 24 y 25", que: "La SUGEF decidirá, según el riesgo, si exige un oficial de cumplimiento o autoriza una estructura diferenciada con una persona responsable ante ella y ante la UIF." },
  { articulo: "Art. 36", que: "Monitoreo con señales de alerta propias de los activos virtuales: billeteras de terceros sin justificación, jurisdicciones de riesgo, fraccionamiento y vínculos con listas internacionales." },
  { articulo: "Art. 40", que: "Informar las cuentas, billeteras, custodios y demás mecanismos que usa el proveedor, y separar los recursos propios de los de sus clientes." },
  { articulo: "Art. 43", que: "El congelamiento inmediato de bienes de personas designadas por el Consejo de Seguridad de la ONU incluye los activos virtuales." },
  { articulo: "Transitorio y disposición final", que: "Rige desde su publicación, con seis meses para adecuar políticas, procedimientos, controles y sistemas de monitoreo." },
];

export function CambiosReforma1319() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-cambios-1319">
      <FigHead
        id="fig-cambios-1319"
        n={2}
        kicker="El texto aprobado"
        title="Lo que cambia en el Acuerdo SUGEF 13-19, artículo por artículo"
        lead="Veinte puntos de reforma que agregan reglas propias para los proveedores de activos virtuales a un reglamento que ya regía para otros sujetos obligados."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Artículo</th>
                <th scope="col">Qué establece</th>
              </tr>
            </thead>
            <tbody>
              {CAMBIOS.map((c) => (
                <tr key={c.articulo}>
                  <td className="gc-recurso">{c.articulo}</td>
                  <td>{c.que}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        CONASSIF, artículo 12 del acta de la sesión 2064-2026, del 9 de noviembre de 2026,{" "}
        <a href={ALCANCE_149} {...EXT}>
          Alcance 149 a La Gaceta 214
        </a>
        , 11 de noviembre de 2026, págs. 545 a 555.
      </FigSource>
    </figure>
  );
}

/* ── Figura 3. Consulta frente a texto final ───────────────────────────── */

const DIFERENCIAS: { tema: string; consulta: string; final: string }[] = [
  { tema: "Umbral de US$1.000", consulta: "Por operación única u operaciones múltiples.", final: "Por operación única o acumulado durante un mes calendario, con el tipo de cambio de referencia del BCCR." },
  { tema: "Por debajo del umbral", consulta: "Nada expreso en la identificación del cliente.", final: "El umbral no exime ante sospechas, dudas sobre la información o indicios de fraccionamiento." },
  { tema: "Regla de viaje", consulta: "Remitía a los lineamientos generales.", final: "Enumera los datos del originador y del beneficiario que deben viajar con la transferencia." },
  { tema: "Registros", consulta: "Solo para las operaciones sujetas al umbral.", final: "También bajo el umbral, la información necesaria para identificar la operación y asegurar su trazabilidad." },
  { tema: "Listas", consulta: "«Listas de sanciones internacionales».", final: "«Listas emitidas por organismos internacionales en materia de LC/FT/FPADM»." },
  { tema: "Transitorio", consulta: "Agregaba un segundo transitorio.", final: "Deroga el transitorio anterior y deja uno solo: seis meses de adecuación." },
];

export function ConsultaVsFinal1319() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-consulta-final">
      <FigHead
        id="fig-consulta-final"
        n={3}
        kicker="Consulta y texto final"
        title="Lo que cambió entre la consulta de octubre y el texto aprobado"
        lead="El CONASSIF endureció el umbral y precisó la regla de viaje. La definición de proveedor, el oficial de cumplimiento y el congelamiento quedaron como se consultaron."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Texto consultado (5-10)</th>
                <th scope="col">Texto aprobado (11-11)</th>
              </tr>
            </thead>
            <tbody>
              {DIFERENCIAS.map((d) => (
                <tr key={d.tema}>
                  <td className="gc-recurso">{d.tema}</td>
                  <td>{d.consulta}</td>
                  <td>{d.final}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Cotejo propio de los textos publicados en el{" "}
        <a href={ALCANCE_134} {...EXT}>
          Alcance 134
        </a>{" "}
        (5 de octubre de 2026) y el{" "}
        <a href={ALCANCE_149} {...EXT}>
          Alcance 149
        </a>{" "}
        (11 de noviembre de 2026).
      </FigSource>
    </figure>
  );
}

/* ── Figura 4. Lo que falta ────────────────────────────────────────────── */

const PENDIENTES: { que: string; estado: string }[] = [
  { que: "La regla del trámite de inscripción", estado: "El Acuerdo SUGEF 11-18 se reformó el 2 de noviembre sin los proveedores de activos virtuales. La SUGEF respondió en la consulta que el artículo 15 quater «será considerado en otra reforma». Sin propuesta en consulta al 26 de noviembre de 2026." },
  { que: "Plataforma, formularios y fecha de apertura", estado: "Sin anuncio de la SUGEF al 26 de noviembre de 2026." },
  { que: "Los lineamientos generales", estado: "El artículo 5 reformado remite a ellos; no se han emitido para estos proveedores." },
  { que: "El canon de supervisión", estado: "La ley obliga a contribuir al costo de la supervisión; ninguna norma fija todavía el monto." },
  { que: "Antecedentes de socios y beneficiarios finales", estado: "La ley ordena a la SUGEF establecer medidas para comprobarlos; la reforma no las incluye." },
  { que: "Registro único y listas publicadas", estado: "Previstos en el artículo 15 quater, sin desarrollo reglamentario." },
  { que: "La matriz de observaciones de la consulta", estado: "No publicada ni localizada al 26 de noviembre de 2026." },
];

export function PendientesPsav() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-pendientes-psav">
      <FigHead
        id="fig-pendientes-psav"
        n={4}
        kicker="Lo que falta"
        title="Las piezas que el régimen todavía no tiene"
        lead="Verificado el 26 de noviembre de 2026 en La Gaceta y sus alcances y en el portal de normativa, comunicados y circulares de la SUGEF."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Pieza</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              {PENDIENTES.map((p) => (
                <tr key={p.que}>
                  <td className="gc-recurso">{p.que}</td>
                  <td>{p.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Alcances 148 y 149 a La Gaceta (9 y 11 de noviembre de 2026; respuesta de la SUGEF a las observaciones 40 y 41
        de la consulta del Acuerdo 11-18, pág. 468 del Alcance 149); sitio de la SUGEF.
      </FigSource>
    </figure>
  );
}
