/* Figuras de la guía sobre los umbrales de contratación pública. Mismo
   lenguaje editorial que las demás guías (.gc-fig de app/globals.css).
   Los montos salen de lib/umbrales.ts, cotejados el 19-11-2026 con las
   resoluciones anuales de la Contraloría (R-DC-00132-2022, R-DC-00123-2023,
   R-DC-00128-2024 y R-DC-00142-2025); las reglas de cada procedimiento, con
   los arts. 56, 61, 63, 95, 97 y 99 de la Ley 9986. */

import { RunningHead } from "@/components/ui/RunningHead";
import { UMBRALES, VIGENTE, LEY_9986, colones, NOMBRE_OBJETO, type Objeto, type Regimen } from "@/lib/umbrales";

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

const FILAS: { regimen: Regimen; objeto: Objeto }[] = [
  { regimen: "ordinario", objeto: "bienesServicios" },
  { regimen: "ordinario", objeto: "obras" },
  { regimen: "diferenciado", objeto: "bienesServicios" },
  { regimen: "diferenciado", objeto: "obras" },
];

/* ── Figura 1. Umbrales vigentes ──────────────────────────────────────── */

export function UmbralesVigentes() {
  const u = UMBRALES[VIGENTE];
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-umbrales-vigentes">
      <FigHead
        id="fig-umbrales-vigentes"
        n={1}
        kicker={`Umbrales ${VIGENTE}`}
        title={`Qué procedimiento corresponde según el monto estimado, del 1 de enero al 31 de diciembre de ${VIGENTE}`}
        lead="Los montos son en colones y se comparan con la estimación del contrato hecha en la decisión inicial."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Régimen y objeto</th>
                <th scope="col">Licitación mayor</th>
                <th scope="col">Licitación menor</th>
                <th scope="col">Licitación reducida</th>
              </tr>
            </thead>
            <tbody>
              {FILAS.map(({ regimen, objeto }) => {
                const p = u[regimen][objeto];
                return (
                  <tr key={regimen + objeto}>
                    <td className="gc-recurso">
                      {regimen === "ordinario" ? "Ordinario" : "Diferenciado"} · {NOMBRE_OBJETO[objeto]}
                    </td>
                    <td data-label="Licitación mayor">
                      <span className="gc-fig-ref" style={{ display: "block" }}>igual o más de</span>
                      <b style={{ fontVariantNumeric: "tabular-nums" }}>{colones(p.mayor)}</b>
                    </td>
                    <td data-label="Licitación menor">
                      <span className="gc-fig-ref" style={{ display: "block" }}>desde {colones(p.reducida)}</span>
                      <span style={{ fontVariantNumeric: "tabular-nums" }}>y menos de {colones(p.mayor)}</span>
                    </td>
                    <td data-label="Licitación reducida">
                      <span className="gc-fig-ref" style={{ display: "block" }}>menos de</span>
                      <b style={{ fontVariantNumeric: "tabular-nums" }}>{colones(p.reducida)}</b>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        Los sujetos privados que administran fondos públicos aplican la ley cuando la contratación supera {colones(u.privados.bienesServicios, true)} en bienes y servicios y {colones(u.privados.obras, true)} en obras.
      </p>
      <FigSource>
        Contraloría General de la República,{" "}
        <a href={u.href} target="_blank" rel="noopener noreferrer">
          resolución {u.resolucion}
        </a>{" "}
        del {u.fecha}
        {u.publicacion ? `, ${u.publicacion}` : ""}; Ley 9986, arts. 1 y 36.
      </FigSource>
    </figure>
  );
}

/* ── Figura 2. Evolución 2023-2026 ────────────────────────────────────── */

const ANIOS = [2023, 2024, 2025, 2026];
const SERIES: { regimen: Regimen; objeto: Objeto; tope: "mayor" | "reducida"; nombre: string }[] = [
  { regimen: "ordinario", objeto: "bienesServicios", tope: "mayor", nombre: "Ordinario, bienes y servicios: mayor desde" },
  { regimen: "ordinario", objeto: "bienesServicios", tope: "reducida", nombre: "Ordinario, bienes y servicios: reducida bajo" },
  { regimen: "ordinario", objeto: "obras", tope: "mayor", nombre: "Ordinario, obras: mayor desde" },
  { regimen: "diferenciado", objeto: "bienesServicios", tope: "mayor", nombre: "Diferenciado, bienes y servicios: mayor desde" },
];
const ATIPICO = (anio: number, i: number) => i === 0 && (anio === 2024 || anio === 2025);

export function EvolucionUmbrales() {
  const filas: { etiqueta: string; valor: (i: number) => number; anio?: number }[] = [
    { etiqueta: "Ley 9986 (2021)", valor: (i) => LEY_9986[SERIES[i].regimen][SERIES[i].objeto][SERIES[i].tope] },
    ...ANIOS.map((a) => ({ etiqueta: String(a), anio: a, valor: (i: number) => UMBRALES[a][SERIES[i].regimen][SERIES[i].objeto][SERIES[i].tope] })),
  ];
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-evolucion-umbrales">
      <FigHead
        id="fig-evolucion-umbrales"
        n={2}
        kicker="Cuatro años de umbrales"
        title="Los umbrales bajaron cada año con las unidades de desarrollo, salvo uno"
        lead="Los montos en negrita y color son los de 2024 y 2025 que quedaron por debajo de la fórmula del artículo 36; en 2026 el monto volvió a ella."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table style={{ fontSize: 13.5 }}>
            <thead>
              <tr>
                <th scope="col">Año</th>
                {SERIES.map((s) => (
                  <th scope="col" key={s.nombre} style={{ whiteSpace: "normal", minWidth: 120, verticalAlign: "bottom" }}>
                    {s.nombre}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filas.map((f) => (
                <tr key={f.etiqueta}>
                  <td className="gc-recurso">{f.etiqueta}</td>
                  {SERIES.map((s, i) => {
                    const raro = f.anio !== undefined && ATIPICO(f.anio, i);
                    return (
                      <td
                        key={s.nombre}
                        data-label={s.nombre}
                        style={{ fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap", ...(raro ? { fontWeight: 600, color: "var(--color-emphasis, #8B2252)" } : {}) }}
                      >
                        {colones(f.valor(i))}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        Con la fórmula de la Contraloría, el factor de actualización fue 1,11038 en 2023, 1,09552 en 2024, 1,08812 en 2025 y 1,08402 en 2026 para todos los montos. Los dos marcados equivalen a aplicar a la cifra de la ley la variación de las unidades de desarrollo desde diciembre de 2022 (factores 0,98661 y 0,97996). Es un cálculo propio sobre las cifras publicadas; las resoluciones no lo explican. Los montos de obra pública del régimen diferenciado siguieron la fórmula todos los años.
      </p>
      <FigSource>
        Resoluciones R-DC-00132-2022, R-DC-00123-2023, R-DC-00128-2024 y R-DC-00142-2025 de la Contraloría General; Ley 9986, art. 36.
      </FigSource>
    </figure>
  );
}

/* ── Figura 3. Qué cambia según el procedimiento ──────────────────────── */

const REGLAS: { aspecto: string; mayor: string; menor: string; reducida: string }[] = [
  { aspecto: "Invitación", mayor: "Abierta a todos los potenciales oferentes en el sistema digital unificado.", menor: "A todos los proveedores que consten en el sistema.", reducida: "A un mínimo de tres oferentes idóneos; puede invitar a todos." },
  { aspecto: "Plazo para recibir ofertas", mayor: "No menos de 15 días hábiles.", menor: "Entre 5 y 15 días hábiles, según la complejidad.", reducida: "Entre 3 y 5 días hábiles." },
  { aspecto: "Objeción al pliego", mayor: "Ante la Contraloría, dentro de 8 días hábiles desde la publicación.", menor: "Ante la Administración, dentro de 3 días hábiles.", reducida: "Ante la Administración." },
  { aspecto: "Recurso contra el acto final", mayor: "Apelación ante la Contraloría, dentro de 8 días hábiles.", menor: "Revocatoria ante la Administración, dentro de 5 días hábiles.", reducida: "Revocatoria ante la Administración, dentro de 2 días hábiles." },
  { aspecto: "Garantía de cumplimiento", mayor: "Obligatoria.", menor: "Según corresponda.", reducida: "La ley no la incluye entre los requisitos mínimos." },
];

export function ProcedimientosUmbrales() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-procedimientos-umbrales">
      <FigHead
        id="fig-procedimientos-umbrales"
        n={3}
        kicker="Lo que decide el umbral"
        title="El monto define quién compite, cuánto tiempo hay para ofertar y ante quién se reclama"
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Aspecto</th>
                <th scope="col">Licitación mayor</th>
                <th scope="col">Licitación menor</th>
                <th scope="col">Licitación reducida</th>
              </tr>
            </thead>
            <tbody>
              {REGLAS.map((r) => (
                <tr key={r.aspecto}>
                  <td className="gc-recurso">{r.aspecto}</td>
                  <td data-label="Licitación mayor">{r.mayor}</td>
                  <td data-label="Licitación menor">{r.menor}</td>
                  <td data-label="Licitación reducida">{r.reducida}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Ley 9986, arts. 56 (mayor), 61 (menor), 63 (reducida), 95 (objeción), 97 (apelación) y 99 (revocatoria).
      </FigSource>
    </figure>
  );
}
