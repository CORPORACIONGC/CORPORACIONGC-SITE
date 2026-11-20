/* Figuras de la guía sobre las expropiaciones del corredor San José–San
   Ramón. Mismo lenguaje editorial que las demás guías (.gc-fig de
   app/globals.css). Datos cotejados el 19-11-2026: predios pendientes por
   tramo según el cartel de agrimensura de CONAVI recogido por La Nación
   (29-06-2025); etapas y plazos según la Ley de Expropiaciones (Ley 7495,
   texto de SINALEVI, versión 6 de 6). */

import { RunningHead } from "@/components/ui/RunningHead";

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

/* ── Figura 1. Predios pendientes por tramo ───────────────────────────── */

const TRAMOS: { tramo: string; km: string; predios: number }[] = [
  { tramo: "La Sabana – Hospital México", km: "2,95 km", predios: 16 },
  { tramo: "Hospital México – Cariari", km: "5,50 km", predios: 22 },
  { tramo: "Cariari – Aeropuerto", km: "7,12 km", predios: 58 },
  { tramo: "Aeropuerto – Manolos", km: "10,12 km", predios: 56 },
  { tramo: "Radial Río Segundo", km: "4,45 km", predios: 46 },
  { tramo: "Manolos – Naranjo", km: "11,96 km", predios: 64 },
  { tramo: "Naranjo – San Ramón", km: "17,95 km", predios: 241 },
];
const MAX = 241;

export function PrediosSanRamon() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-predios-sjsr">
      <FigHead
        id="fig-predios-sjsr"
        n={1}
        kicker="Expropiaciones pendientes"
        title="Casi la mitad de los predios por adquirir está entre Naranjo y San Ramón"
        lead="503 terrenos pendientes en siete tramos, según el conteo de CONAVI de mediados de 2025. Es la cifra que el Mideplán repitió ante los diputados en febrero de 2026."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Tramo</th>
                <th scope="col">Longitud</th>
                <th scope="col">Predios pendientes</th>
              </tr>
            </thead>
            <tbody>
              {TRAMOS.map((t) => (
                <tr key={t.tramo}>
                  <td className="gc-recurso">{t.tramo}</td>
                  <td data-label="Longitud">{t.km}</td>
                  <td data-label="Predios pendientes">
                    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span
                        aria-hidden="true"
                        style={{ flex: "1 1 auto", maxWidth: 160, height: 14, borderRadius: 8, background: "var(--chart-track)" }}
                      >
                        <span
                          style={{
                            display: "block",
                            height: "100%",
                            width: `${Math.max(4, Math.round((t.predios / MAX) * 100))}%`,
                            borderRadius: 8,
                            background: t.predios === MAX ? "var(--chart-1)" : "var(--chart-2)",
                          }}
                        />
                      </span>
                      <b style={{ fontVariantNumeric: "tabular-nums", minWidth: 28, textAlign: "right" }}>{t.predios}</b>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        Las cifras son anteriores al diseño final, que hará el contratista: el pliego le permite proponer ajustes y, por excepción, pedir terreno adicional fuera del derecho de vía definido.
      </p>
      <FigSource>
        CONAVI, licitación 2025LY-000013-0006000001 de servicios de agrimensura, según{" "}
        <a href="https://www.nacion.com/el-pais/conavi-busca-empresa-para-agilizar-mas-de-500/VAJN4I3KVRCRBGFKKQKZXIRHLM/story/" target="_blank" rel="noopener noreferrer">
          La Nación, 29-06-2025
        </a>
        ; Mideplán ante la Comisión de Hacendarios, según{" "}
        <a href="https://crhoy.com/nacionales/mopt-promete-acabar-expropiaciones-de-ruta-a-san-ramon-en-6-anos-con-presupuesto-propio-diputados-dudan-de-plan/" target="_blank" rel="noopener noreferrer">
          CRHoy, 23-02-2026
        </a>
        .
      </FigSource>
    </figure>
  );
}

/* ── Figura 2. Etapas de la expropiación ──────────────────────────────── */

const ETAPAS: { quien: string; que: string; plazo: string; hl?: boolean }[] = [
  { quien: "MOPT y CONAVI", que: "Estudios en la finca: topografía, planos y avalúo. El propietario no puede oponerse, pero deben avisarle por escrito la fecha, la hora y el tipo de estudio.", plazo: "Art. 3" },
  { quien: "Ministro de Obras Públicas", que: "Declaratoria de interés público: acto motivado que se notifica al propietario y se publica en La Gaceta.", plazo: "Art. 18" },
  { quien: "Registro Nacional", que: "Anotación provisional en la finca. Caduca si en un año no llega el mandamiento de anotación definitiva del juzgado.", plazo: "Art. 20 · un año" },
  { quien: "Dependencia de avalúos", que: "Avalúo administrativo con todos los datos del inmueble y de la actividad comercial, y el método empleado.", plazo: "Arts. 21 y 22 · un mes" },
  { quien: "Propietario", que: "Acepta o rechaza el avalúo. Si guarda silencio, se tiene por aceptado y queda firme en vía administrativa.", plazo: "Art. 25 · cinco días hábiles", hl: true },
  { quien: "Notaría del Estado", que: "Si acepta: escritura de traspaso y pago, sin otro trámite.", plazo: "Art. 25" },
  { quien: "MOPT y Juzgado", que: "Si rechaza: acuerdo de expropiación, proceso especial ante el Juzgado de lo Contencioso Administrativo y depósito del avalúo, requisito previo para entrar en posesión.", plazo: "Arts. 27 y 28" },
  { quien: "Juzgado", que: "Resolución inicial: anotación definitiva, nombramiento del perito y orden de desalojo. No tiene recurso.", plazo: "Art. 30 · cinco días hábiles" },
  { quien: "Propietario", que: "Desaloja el inmueble y puede retirar el monto depositado sin perder su derecho a discutir el precio.", plazo: "Arts. 30, 32 y 33 · quince días hábiles; dos meses si es vivienda", hl: true },
  { quien: "Perito y Juzgado", que: "Peritaje que revisa el avalúo, audiencia a las partes, reconocimiento judicial del inmueble y sentencia.", plazo: "Arts. 35, 38 y 39 · un mes, diez días y quince días" },
  { quien: "Partes", que: "Apelación de la sentencia.", plazo: "Art. 41 · cinco días hábiles", hl: true },
  { quien: "MOPT", que: "Pago de la diferencia con el avalúo, con intereses a la tasa legal desde la desposesión.", plazo: "Arts. 11 y 45" },
];

export function EtapasExpropiacionSanRamon() {
  return (
    <figure className="gc-fig gc-fig-flujo" aria-labelledby="fig-etapas-sjsr">
      <FigHead
        id="fig-etapas-sjsr"
        n={2}
        kicker="El procedimiento"
        title="De la visita del topógrafo al pago del justo precio"
        lead="Las filas marcadas son los plazos del propietario que no se recuperan. Los artículos son de la Ley de Expropiaciones (Ley 7495)."
      />
      <ol className="gc-flujo">
        <li className="gc-flujo-cab" aria-hidden="true">
          <span />
          <span>Quién</span>
          <span>Qué ocurre</span>
          <span>Norma y plazo</span>
        </li>
        {ETAPAS.map((e, i) => (
          <li key={i} className={`gc-flujo-paso${e.hl ? " gc-fig-hl" : ""}`}>
            <span className="gc-fig-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="gc-flujo-quien">{e.quien}</span>
            <span className="gc-flujo-que">{e.que}</span>
            <span className="gc-flujo-plazo">{e.plazo}</span>
          </li>
        ))}
      </ol>
      <FigSource>
        Ley de Expropiaciones, Ley 7495, reformada por las leyes 9286 (2014) y 9462 (2017), con el texto de los arts. 40 a 43 que dejó vigente la Sala Constitucional en el voto 2018-013705 (
        <a href="https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=24321&param2=119048&param3=1" target="_blank" rel="noopener noreferrer">
          SINALEVI
        </a>
        ).
      </FigSource>
    </figure>
  );
}
