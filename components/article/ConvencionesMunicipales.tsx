/* Figuras de la guía «Convenciones colectivas municipales ante la Sala
   Constitucional: la acción contra Desamparados». Mismo lenguaje editorial
   que las demás guías (.gc-fig de app/globals.css).
   Fuentes, cotejadas el 26-11-2026 en el texto íntegro de cada voto de la
   Sala Constitucional (parte dispositiva incluida); de Talamanca
   (2023-010798) solo se dispuso del resumen oficial. */

import { RunningHead } from "@/components/ui/RunningHead";

const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;
const NEXUS = (id: string) => `https://nexuspj.poder-judicial.go.cr/document/${id}`;

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

function Voto({ n, id }: { n: string; id?: string }) {
  return id ? (
    <a href={NEXUS(id)} {...EXT}>
      {n}
    </a>
  ) : (
    <>{n}</>
  );
}

/* ── Figura 1. La cesantía por renuncia, anulada ──────────────────────── */

const CESANTIA: { voto: string; id?: string; fecha: string; donde: string; anulo: string }[] = [
  { voto: "2014-005798", id: "sen-1-0007-614509", fecha: "30-04-2014", donde: "Municipalidad de Santa Ana", anulo: "Preaviso y cesantía por renuncia; la cesantía «sin límite de años»." },
  { voto: "2018-007690", id: "sen-1-0007-746088", fecha: "15-05-2018", donde: "SINART", anulo: "Preaviso y cesantía por renuncia (art. 20 d)." },
  { voto: "2020-001338", fecha: "22-01-2020", donde: "Municipalidad de Goicoechea", anulo: "Cesantía por renuncia y lo que exceda doce años." },
  { voto: "2020-011170", fecha: "17-06-2020", donde: "Municipalidad de Curridabat", anulo: "Cesantía por renuncia (art. 51) y lo que exceda doce años (art. 50)." },
  { voto: "2020-021330", fecha: "04-11-2020", donde: "Municipalidad de Nicoya", anulo: "Cesantía por renuncia o «cuando el trabajador lo acepte»; lo que exceda doce años." },
  { voto: "2021-015419", id: "sen-1-0007-1039739", fecha: "07-07-2021", donde: "Municipalidad de Puntarenas", anulo: "Compensación por renuncia de hasta quince años (art. 48); el tope de veinte años del art. 47." },
  { voto: "2022-016287", id: "sen-1-0007-1178343", fecha: "13-07-2022", donde: "Municipalidad de Cartago", anulo: "Cesantía por renuncia (art. 8 d) y el tramo de quince meses para más de 25 años." },
  { voto: "2022-027954", fecha: "23-11-2022", donde: "Municipalidad de Pérez Zeledón", anulo: "Cesantía por renuncia y los topes de 14, 18 y 20 años." },
  { voto: "2023-001055", id: "sen-1-0007-1170742", fecha: "18-01-2023", donde: "ICE (Estatuto de Personal)", anulo: "Cesantía por renuncia; el tope se interpreta en doce años." },
  { voto: "2023-012087", id: "sen-1-0007-1260734", fecha: "24-05-2023", donde: "Municipalidad de Escazú", anulo: "Cesantía por renuncia y lo que exceda doce años." },
  { voto: "2023-017097", id: "sen-1-0007-1180689", fecha: "12-07-2023", donde: "Municipalidad de Matina", anulo: "Cesantía por renuncia (art. 40.1); los topes de veinte años." },
  { voto: "2023-031748", id: "sen-1-0007-1228141", fecha: "06-12-2023", donde: "Municipalidad de Limón", anulo: "Cesantía por renuncia (art. 42.1); el límite de veinte años." },
  { voto: "2024-018683", id: "sen-1-0007-1239333", fecha: "03-07-2024", donde: "Municipalidad de Vásquez de Coronado", anulo: "El art. 30, sobre cesantía por renuncia." },
  { voto: "2024-037678", id: "sen-1-0007-1277187", fecha: "18-12-2024", donde: "Municipalidad de Garabito", anulo: "Cesantía al 100 % por renuncia y los veinte años; omisión del tope de doce." },
  { voto: "2025-039346", id: "sen-1-0007-1367045", fecha: "26-11-2025", donde: "Municipalidad de Paraíso", anulo: "Cesantía «por renuncia injustificada» y lo que exceda doce años." },
];

export function LineaCesantiaConvenciones() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-linea-cesantia">
      <FigHead
        id="fig-linea-cesantia"
        n={1}
        kicker="Cesantía por renuncia"
        title="Quince sentencias que anularon la cesantía por renuncia"
        lead="Convenciones y estatutos del sector público en que la Sala Constitucional declaró inconstitucional pagar cesantía al trabajador que renuncia, casi siempre junto con el tope de doce años."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Voto</th>
                <th scope="col">Convención o estatuto</th>
                <th scope="col">Qué anuló</th>
              </tr>
            </thead>
            <tbody>
              {CESANTIA.map((c) => (
                <tr key={c.voto}>
                  <td className="gc-recurso">
                    <Voto n={c.voto} id={c.id} />
                    <br />
                    <span className="text-xs font-normal opacity-70">{c.fecha}</span>
                  </td>
                  <td data-label="Convención">{c.donde}</td>
                  <td data-label="Qué anuló">{c.anulo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>Parte dispositiva de cada voto de la Sala Constitucional. Los números enlazados abren el texto en Nexus PJ.</FigSource>
    </figure>
  );
}

/* ── Figura 2. Convenciones municipales en la Sala ───────────────────── */

const MUNICIPALES: { muni: string; voto: string; id?: string; quien: string; resultado: string }[] = [
  { muni: "San José", voto: "2013-011087", quien: "Contraloría", resultado: "Anula la cesantía «sin límite de tiempo» y «sin límite de años»." },
  { muni: "Santa Ana", voto: "2014-005798 y 2020-020308", id: "sen-1-0007-614509", quien: "Particulares", resultado: "Cesantía por renuncia y sin tope; en 2020, lo que exceda doce años." },
  { muni: "Moravia", voto: "2019-021859", id: "sen-1-0007-1008965", quien: "Particulares", resultado: "Cesantía sin tope y por renuncia, útiles escolares y becas para hijos, partida para actividades." },
  { muni: "Limón", voto: "2019-016791 y 2023-031748", id: "sen-1-0007-1228141", quien: "Alcaldía", resultado: "Pago quincenal adicional (2019); cesantía por renuncia, becas para hijos, bonificaciones y fondos para el sindicato (2023)." },
  { muni: "Goicoechea", voto: "2020-001338", quien: "Particular", resultado: "Cesantía por renuncia y lo que exceda doce años; válida por jubilación." },
  { muni: "Curridabat", voto: "2020-011170", quien: "Particular", resultado: "Cesantía por renuncia y lo que exceda doce años; válida por supresión, jubilación y fallecimiento." },
  { muni: "Nicoya", voto: "2020-021330", quien: "Particulares", resultado: "Cesantía por renuncia o por aceptación del trabajador; tope de doce años en todos los supuestos." },
  { muni: "Heredia", voto: "2021-001157", id: "sen-1-0007-1039405", quien: "Alcaldía", resultado: "Sin lugar: el aporte a un fondo de préstamos de vivienda es constitucional." },
  { muni: "Puntarenas", voto: "2021-015419", id: "sen-1-0007-1039739", quien: "Particular", resultado: "Compensación por renuncia; tope de veinte años reducido a doce." },
  { muni: "Desamparados", voto: "2021-026520", id: "sen-1-0007-1161589", quien: "Particular", resultado: "Partidas del art. 38, arts. 42 b) y 96 c); cesantía mayor de doce años (arts. 103 y 105)." },
  { muni: "Cartago", voto: "2022-016287", id: "sen-1-0007-1178343", quien: "Particular y regidores", resultado: "Becas para hijos, cesantía por renuncia, anualidades y aumento por quinquenio." },
  { muni: "Pérez Zeledón", voto: "2022-027954", quien: "Alcaldía", resultado: "Cesantía por renuncia y topes superiores a doce años." },
  { muni: "Talamanca", voto: "2023-010798", quien: "Alcaldía", resultado: "Bono vacacional, indemnización adicional, becas para hijos y otros beneficios; efectos solo hacia el futuro." },
  { muni: "Escazú", voto: "2023-012087", id: "sen-1-0007-1260734", quien: "Particular", resultado: "Cesantía por renuncia y sin tope; plus de antigüedad al nuevo ingreso." },
  { muni: "Matina", voto: "2023-017097", id: "sen-1-0007-1180689", quien: "Alcaldía", resultado: "Cesantía por renuncia, topes de veinte años, anualidad adicional y pago quincenal." },
  { muni: "Turrialba", voto: "2024-017869", id: "sen-1-0007-1243387", quien: "Contraloría", resultado: "Ayudas a perjudicados por eventos y otros beneficios; varios artículos se mantienen." },
  { muni: "Vásquez de Coronado", voto: "2024-018683", id: "sen-1-0007-1239333", quien: "Alcaldía", resultado: "Cesantía por renuncia." },
  { muni: "Garabito", voto: "2024-037678", id: "sen-1-0007-1277187", quien: "Contraloría", resultado: "Cesantía por renuncia y sin tope; gastos de entierro de familiares." },
  { muni: "Paraíso", voto: "2025-039346", id: "sen-1-0007-1367045", quien: "Contraloría", resultado: "Cesantía por renuncia, becas y ayudas a familiares, ayuda por pérdida de vivienda, incentivo al ahorro." },
  { muni: "Aserrí", voto: "2026-026812", id: "sen-1-0007-1425778", quien: "Particular", resultado: "Canastilla por nacimiento de cada hijo." },
  { muni: "Desamparados", voto: "Exp. 26-039508-0007-CO", id: "sen-1-0007-1438447", quien: "Contraloría", resultado: "En trámite: ayuda por catástrofes, becas para hijos y cesantía por renuncia." },
];

export function ConvencionesMunicipalesSala() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-convenciones-municipales">
      <FigHead
        id="fig-convenciones-municipales"
        n={2}
        kicker="Convenciones municipales"
        title="Las convenciones municipales que han pasado por la Sala"
        lead="Sentencias de fondo localizadas desde 2013, por municipalidad. Varias acciones las plantearon las propias alcaldías."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Municipalidad</th>
                <th scope="col">Voto</th>
                <th scope="col">Accionó</th>
                <th scope="col">Qué anuló o resolvió</th>
              </tr>
            </thead>
            <tbody>
              {MUNICIPALES.map((c) => (
                <tr key={c.muni + c.voto}>
                  <td className="gc-recurso">{c.muni}</td>
                  <td data-label="Voto">
                    <Voto n={c.voto} id={c.id} />
                  </td>
                  <td data-label="Accionó">{c.quien}</td>
                  <td data-label="Resultado">{c.resultado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Parte dispositiva de cada voto de la Sala Constitucional; de Talamanca, resumen oficial. Cuando una fila tiene dos votos, el enlace abre
        el que está disponible en Nexus PJ. La fila de la acción en trámite enlaza la resolución de curso del 4 de noviembre de 2026.
      </FigSource>
    </figure>
  );
}
