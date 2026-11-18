/* Figuras de la guía «Reducción forzosa: cuándo puede el Estado cesar a un
   servidor público por falta de fondos o reorganización». Mismo lenguaje
   editorial que las demás guías (.gc-fig de app/globals.css). Textos
   cotejados el 18-11-2026 con SINALEVI: Ley 10159, art. 20 e); Estatuto de
   Servicio Civil, art. 47; Reglamento del Estatuto, art. 14; Código de
   Trabajo, arts. 28, 29 y 686; Ley 2166, art. 39; Código Municipal, art.
   155 b), y la circular MIDEPLAN-DM-CIRC-0016-2026 (La Gaceta 179 del
   23-09-2026, págs. 5 a 7). */

import { RunningHead } from "@/components/ui/RunningHead";

const GACETA_179 = "https://www.imprentanacional.go.cr/pub/2026/09/23/COMP_23_09_2026.pdf";
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

/* ── Figura 1. Las dos normas, lado a lado ─────────────────────────────── */

const FILAS: { aspecto: string; lmep: string; esc: string }[] = [
  {
    aspecto: "A quién se aplica",
    lmep: "Las instituciones del artículo 2 de la Ley 10159: Poderes de la República, TSE, autónomas y semiautónomas, universidades, CCSS, empresas públicas estatales y municipalidades.",
    esc: "Los servidores cubiertos por el Régimen de Servicio Civil. La circular de MIDEPLAN ordena aplicarlo «adicionalmente».",
  },
  {
    aspecto: "Falta de fondos",
    lmep: "«Reducción forzosa de servicios o de labores por falta de fondos».",
    esc: "«Reducción forzosa de servicios o de trabajos por falta absoluta de fondos».",
  },
  {
    aspecto: "Reorganización",
    lmep: "Debe afectar «por lo menos al cincuenta por ciento (50%) de los empleados de la respectiva dependencia pública».",
    esc: "Debe afectar «por lo menos al sesenta por ciento de los empleados de la respectiva dependencia».",
  },
  {
    aspecto: "Antes de decidir",
    lmep: "«Una rigurosa justificación técnica que fundamente la decisión de la autoridad jerárquica».",
    esc: "Consulta al Tribunal de Servicio Civil, que debe estimar que el caso cabe en una de las dos excepciones.",
  },
  {
    aspecto: "A quién se cesa",
    lmep: "La ley no fija criterios. La circular exige identificar a las personas afectadas y explicar por qué.",
    esc: "Según «la eficiencia, la antigüedad, el carácter, la conducta, las aptitudes» y la calificación de servicios.",
  },
  {
    aspecto: "Pago",
    lmep: "«Previo pago de las prestaciones y de la indemnización que puedan corresponder».",
    esc: "«Previo pago de las prestaciones que pudieran corresponderles».",
  },
  {
    aspecto: "Después del cese",
    lmep: "Registros y comunicaciones a cargo de recursos humanos (circular, punto 6).",
    esc: "La nómina de cesados va a la Dirección General de Servicio Civil «para su inscripción preferente entre los candidatos a empleo».",
  },
];

export function DosNormasReduccion() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-dos-normas">
      <FigHead
        id="fig-dos-normas"
        n={1}
        kicker="Dos normas para el mismo cese"
        title="La Ley Marco de Empleo Público y el Estatuto de Servicio Civil, lado a lado"
        lead="Las dos describen las mismas causales con exigencias distintas. Para el personal del Servicio Civil, la circular de MIDEPLAN manda cumplir ambas."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Aspecto</th>
                <th scope="col">Ley Marco de Empleo Público, art. 20 e)</th>
                <th scope="col">Estatuto de Servicio Civil, art. 47</th>
              </tr>
            </thead>
            <tbody>
              {FILAS.map((f) => (
                <tr key={f.aspecto}>
                  <td className="gc-recurso">{f.aspecto}</td>
                  <td data-label="Ley Marco, art. 20 e)">{f.lmep}</td>
                  <td data-label="Estatuto, art. 47">{f.esc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Ley 10159, artículos 2 y 20 e); Ley 1581, artículo 47; circular MIDEPLAN-DM-CIRC-0016-2026, puntos 1 y 6 (
        <a href={GACETA_179} {...EXT}>
          La Gaceta 179
        </a>
        , 23-09-2026).
      </FigSource>
    </figure>
  );
}

/* ── Figura 2. El recorrido que exige la circular ─────────────────────── */

const PASOS: { quien: string; que: string; norma: string }[] = [
  {
    quien: "La institución",
    que: "Conforma un expediente con la causal y sus hechos, los estudios financieros, presupuestarios, organizacionales o funcionales, las personas y los puestos afectados, el porcentaje si se invoca una reorganización, la relación entre la medida y la supresión de puestos, el impacto en el servicio, las alternativas menos lesivas y el costo de los extremos laborales con su disponibilidad presupuestaria.",
    norma: "Punto 2",
  },
  {
    quien: "La institución",
    que: "Valora y documenta las alternativas al cese: reubicaciones, traslados, reconversión o capacitación, redistribución de funciones, congelar o no sustituir plazas vacantes, jubilación voluntaria y movilidad entre instituciones. Si las descarta, deja las razones en el expediente.",
    norma: "Punto 3",
  },
  {
    quien: "El ministro (Servicio Civil)",
    que: "Consulta antes al Tribunal de Servicio Civil si el caso cabe en una de las dos excepciones del Estatuto.",
    norma: "ESC, art. 47",
  },
  {
    quien: "La autoridad competente",
    que: "Tramita la medida con las garantías del régimen aplicable, los mecanismos de comunicación e impugnación, y verifica fueros y protecciones especiales.",
    norma: "Punto 4",
  },
  {
    quien: "La autoridad competente",
    que: "Decide en un acto motivado que indica la causal, su fundamento técnico y jurídico, las personas y los puestos afectados, los extremos laborales e indemnizaciones, la fecha de ejecución y los recursos que caben.",
    norma: "Punto 4",
  },
  {
    quien: "La institución",
    que: "Paga las prestaciones y la indemnización. Solo entonces el cese puede hacerse efectivo, salvo que la persona se haya acogido antes a una movilidad laboral.",
    norma: "Punto 5",
  },
  {
    quien: "Recursos humanos",
    que: "Hace los registros y las comunicaciones del régimen aplicable y conserva en el expediente la prueba de que se cumplió todo.",
    norma: "Punto 6",
  },
];

export function RecorridoReduccion() {
  return (
    <figure className="gc-fig gc-fig-flujo" aria-labelledby="fig-recorrido-reduccion">
      <FigHead
        id="fig-recorrido-reduccion"
        n={2}
        kicker="La circular MIDEPLAN-DM-CIRC-0016-2026"
        title="Siete pasos antes de que un cese por reducción forzosa sea efectivo"
        lead="El orden lo fija la circular. El tercer paso se suma cuando la persona pertenece al Régimen de Servicio Civil."
      />
      <ol className="gc-flujo">
        <li className="gc-flujo-cab" aria-hidden="true">
          <span />
          <span>Quién</span>
          <span>Qué hace</span>
          <span>Norma</span>
        </li>
        {PASOS.map((p, i) => (
          <li key={i} className="gc-flujo-paso">
            <span className="gc-fig-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="gc-flujo-quien">{p.quien}</span>
            <span className="gc-flujo-que">{p.que}</span>
            <span className="gc-flujo-plazo">{p.norma}</span>
          </li>
        ))}
      </ol>
      <FigSource>
        Circular MIDEPLAN-DM-CIRC-0016-2026, del 28-08-2026,{" "}
        <a href={GACETA_179} {...EXT}>
          La Gaceta 179
        </a>{" "}
        del 23-09-2026, págs. 5 a 7; Ley 1581, artículo 47.
      </FigSource>
    </figure>
  );
}

/* ── Figura 3. Qué se paga y qué limita después ───────────────────────── */

const RUBROS: { rubro: string; regla: string; fuente: string }[] = [
  {
    rubro: "Auxilio de cesantía",
    regla: "Días de salario por año laborado según la tabla del Código de Trabajo (de 19,5 a 22 días). Nunca más de los últimos 8 años.",
    fuente: "Código de Trabajo, art. 29; Ley 2166, art. 39",
  },
  {
    rubro: "Con convención colectiva vigente",
    regla: "Según la Procuraduría, hasta 12 años de cesantía mientras rija el instrumento.",
    fuente: "PGR, C-086-2019 y C-054-2021",
  },
  {
    rubro: "Indemnización del Estatuto",
    regla: "El mes de sueldo por año servido del antiguo artículo 37 f) desapareció el 4 de diciembre de 2018. El artículo 27 c) del Reglamento del Estatuto lo repite, pero cede ante la ley.",
    fuente: "Ley 9635; PGR, C-086-2019; Sala Segunda, 3611-2024",
  },
  {
    rubro: "Preaviso",
    regla: "Una semana, quince días o un mes según la antigüedad, o su pago en dinero.",
    fuente: "Código de Trabajo, art. 28; Reglamento de la Ley 10159, art. 24",
  },
  {
    rubro: "Momento del pago",
    regla: "Antes de que el cese sea efectivo, salvo que la persona haya aceptado antes una movilidad laboral.",
    fuente: "Ley 10159, art. 20 e); circular, punto 5",
  },
  {
    rubro: "Volver al Estado",
    regla: "Quien recibe cesantía no puede ocupar un cargo remunerado en el Estado durante el tiempo que esa suma representa, salvo que la reintegre.",
    fuente: "Código de Trabajo, art. 686; PGR, C-158-2026",
  },
  {
    rubro: "Volver a la municipalidad",
    regla: "Quien fue cesado por esta causa no puede regresar a la misma municipalidad antes de un año.",
    fuente: "Código Municipal, art. 155 b)",
  },
  {
    rubro: "Reingreso al Servicio Civil",
    regla: "Con al menos cinco años de servicio eficiente, puede reingresar sin concurso a la misma clase de puesto dentro de los diez años siguientes.",
    fuente: "Reglamento del Estatuto, art. 14",
  },
];

export function PagoReduccion() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-pago-reduccion">
      <FigHead
        id="fig-pago-reduccion"
        n={3}
        kicker="Lo que se paga"
        title="La liquidación de un cese por reducción forzosa y sus límites"
        lead="A estos rubros se suman los demás extremos que la legislación vigente reconoce al terminar la relación."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Rubro</th>
                <th scope="col">Regla</th>
                <th scope="col">Fuente</th>
              </tr>
            </thead>
            <tbody>
              {RUBROS.map((r) => (
                <tr key={r.rubro}>
                  <td className="gc-recurso">{r.rubro}</td>
                  <td>{r.regla}</td>
                  <td data-label="Fuente">{r.fuente}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Código de Trabajo, arts. 28, 29 y 686; Ley de Salarios de la Administración Pública, art. 39; Código Municipal, art. 155 b);
        Reglamento del Estatuto de Servicio Civil, arts. 14 y 27 c); Reglamento de la Ley 10159, art. 24; dictámenes C-086-2019, C-054-2021 y
        C-158-2026 de la Procuraduría General de la República.
      </FigSource>
    </figure>
  );
}
