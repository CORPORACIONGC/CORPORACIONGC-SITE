/* Figuras del artículo sobre la Sala Primera y el uso de ChatGPT e inteligencia
   artificial en las resoluciones judiciales. Mismo lenguaje editorial que las
   demás guías (.gc-fig de app/globals.css). Datos cotejados el 23-11-2026:
   circular 31-2026 del Consejo Superior (SINALEVI y acta 12-2026, art. LIII);
   constancias de uso leídas en las resoluciones publicadas hasta fines de
   octubre de 2026 (conteos propios); actas del Consejo Superior y de la
   Corte Plena. */

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

/* Lo entrecomillado va en cursiva, como en el texto de las guías. */
function conCursivas(t: string): React.ReactNode {
  return t.split(/(«[^»]+»)/g).map((parte, i) => (parte.startsWith("«") ? <em key={i}>{parte}</em> : parte));
}

/* ── Figura 3. Qué permite, exige y prohíbe la circular 31-2026 ───────── */

const CIRCULAR: { tema: string; regla: string; lineamiento: string }[] = [
  { tema: "Qué permite", regla: "Usar IA generativa como apoyo: resúmenes de textos voluminosos, corrección de estilo, estructuración de ideas. No excluye ninguna tarea en particular.", lineamiento: "3.6 y disposición general" },
  { tema: "Quién responde", regla: "La persona que firma, en exclusiva, por todo el contenido de la resolución. La herramienta «no tiene fe pública, ni autoridad jurisdiccional, ni administrativa».", lineamiento: "1.1 y 1.2" },
  { tema: "Qué verificar", regla: "Toda información, cita legal o jurisprudencia que genere la herramienta. Las «alucinaciones» no detectadas generan responsabilidad disciplinaria y legal.", lineamiento: "1.2 y 1.3" },
  { tema: "Qué datos no ingresar", regla: "Información sensible, confidencial o datos personales, salvo que la herramienta permita desactivar el uso de los datos para entrenamiento.", lineamiento: "2.1 y 2.3 (Ley 8968, art. 6.4)" },
  { tema: "Qué declarar", regla: "En el expediente, documento o decisión: herramienta, modelo y empresa, fecha de uso y para qué se empleó, con una nota al final.", lineamiento: "3.9" },
  { tema: "Quién decide", regla: "Siempre la persona: supervisión total y directa de todo borrador, resumen o texto generado.", lineamiento: "3.8" },
];

export function CircularIA() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-circular-ia">
      <FigHead
        id="fig-circular-ia"
        n={3}
        kicker="La regla"
        title="La circular 31-2026 permite usar la IA generativa y pone la responsabilidad en quien firma"
        lead="Reglas y lineamientos éticos del Consejo Superior para las personas servidoras judiciales, vigentes desde el 26 de febrero de 2026."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Qué dispone</th>
                <th scope="col">Lineamiento</th>
              </tr>
            </thead>
            <tbody>
              {CIRCULAR.map((c) => (
                <tr key={c.tema}>
                  <td className="gc-recurso">{c.tema}</td>
                  <td data-label="Qué dispone">{conCursivas(c.regla)}</td>
                  <td data-label="Lineamiento">{c.lineamiento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Consejo Superior del Poder Judicial, sesión 12-2026 del 12 de febrero de 2026, art. LIII; circular 31-2026 del 20 de febrero de 2026, Boletín Judicial 39 del 26 de febrero de 2026.
      </FigSource>
    </figure>
  );
}

/* ── Figura 5. Cómo lo declaran los tribunales ────────────────────────── */

const DECLARACIONES: { tribunal: string; votos: string; herramienta: string; uso: string; hl?: boolean }[] = [
  { tribunal: "Sala Primera", votos: "20 votos, del 4 de junio al 29 de octubre", herramienta: "ChatGPT 5.2, 5.5 y 5.6; NotebookLM PRO; Gemini 3.5 Flash; Gemini gratuito", uso: "Resumen del recurso de casación y revisión de redacción; en algunos votos, también revisión de documentos del expediente y análisis de posturas jurídicas", hl: true },
  { tribunal: "Tribunal de Apelación de Trabajo de San José", votos: "57 sentencias, desde marzo", herramienta: "M365 Copilot (GPT-5 Chat)", uso: "Reorganizar y sintetizar los argumentos del apelante, sin datos personales del expediente" },
  { tribunal: "Tribunal de Apelación Civil y Trabajo de Alajuela", votos: "6 sentencias, desde mayo", herramienta: "M365 Copilot (GPT-5 Chat)", uso: "La misma fórmula del tribunal de trabajo de San José" },
  { tribunal: "Sala Tercera", votos: "1 voto (29 de octubre)", herramienta: "M365 Copilot institucional", uso: "Resumen del recurso, dentro del primer considerando" },
  { tribunal: "Tribunal de Apelación de Sentencia Penal, II Circuito de San José", votos: "3 sentencias", herramienta: "ChatGPT y otras herramientas", uso: "Imágenes ilustrativas, reconstrucción de un croquis y, en un caso, búsqueda de derecho comparado y apoyo en segmentos dogmáticos" },
];

export function DeclaracionesIA() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-declaraciones-ia">
      <FigHead
        id="fig-declaraciones-ia"
        n={5}
        kicker="La práctica"
        title="Al menos 87 resoluciones de cinco tribunales declaran para qué usaron la IA"
        lead="Constancias de uso propio en resoluciones de 2026. La fila marcada es la de la Sala Primera, la única cámara de casación donde la práctica está extendida."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Tribunal</th>
                <th scope="col">Resoluciones con constancia</th>
                <th scope="col">Herramienta declarada</th>
                <th scope="col">Uso declarado</th>
              </tr>
            </thead>
            <tbody>
              {DECLARACIONES.map((d) => (
                <tr key={d.tribunal} className={d.hl ? "gc-fig-hl" : undefined}>
                  <td className="gc-recurso">{d.tribunal}</td>
                  <td data-label="Resoluciones con constancia">{d.votos}</td>
                  <td data-label="Herramienta declarada">{d.herramienta}</td>
                  <td data-label="Uso declarado">{conCursivas(d.uso)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Constancias leídas en el texto íntegro de cada resolución, publicadas en Nexus del Poder Judicial, con sentencias hasta fines de octubre de 2026. Los conteos son un mínimo: puede haber resoluciones posteriores o no publicadas.
      </FigSource>
    </figure>
  );
}

/* ── Barra horizontal a escala ────────────────────────────────────────── */

function Barra({ valor, max, fuerte }: { valor: number; max: number; fuerte?: boolean }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span aria-hidden="true" style={{ flex: "1 1 auto", maxWidth: 180, height: 14, borderRadius: 8, background: "var(--chart-track)" }}>
        {valor > 0 && (
          <span
            style={{
              display: "block",
              height: "100%",
              width: `${Math.max(3, Math.round((valor / max) * 100))}%`,
              borderRadius: 8,
              background: fuerte ? "var(--chart-1)" : "var(--chart-2)",
            }}
          />
        )}
      </span>
      <b style={{ fontVariantNumeric: "tabular-nums", minWidth: 24, textAlign: "right" }}>{valor}</b>
    </span>
  );
}

/* ── Figura 1. Resoluciones con constancia, por mes ───────────────────── */

const MESES: { mes: string; sala: number; todos: number }[] = [
  { mes: "Marzo", sala: 0, todos: 4 },
  { mes: "Abril", sala: 0, todos: 4 },
  { mes: "Mayo", sala: 0, todos: 6 },
  { mes: "Junio", sala: 3, todos: 7 },
  { mes: "Julio", sala: 0, todos: 8 },
  { mes: "Agosto", sala: 2, todos: 13 },
  { mes: "Setiembre", sala: 6, todos: 35 },
  { mes: "Octubre", sala: 9, todos: 10 },
];

export function ConstanciasPorMes() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-constancias-mes">
      <FigHead
        id="fig-constancias-mes"
        n={1}
        kicker="La curva"
        title="En la Sala Primera, de 3 votos con constancia en junio a 9 en octubre"
        lead="Resoluciones de 2026 que declaran el uso de inteligencia artificial, por mes de dictado. La circular rige desde el 26 de febrero."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Mes</th>
                <th scope="col">Sala Primera</th>
                <th scope="col">Todos los tribunales</th>
              </tr>
            </thead>
            <tbody>
              {MESES.map((m) => (
                <tr key={m.mes}>
                  <td className="gc-recurso">{m.mes}</td>
                  <td data-label="Sala Primera">
                    <Barra valor={m.sala} max={9} fuerte={m.sala === 9} />
                  </td>
                  <td data-label="Todos los tribunales">
                    <Barra valor={m.todos} max={35} fuerte={m.todos === 35} />
                  </td>
                </tr>
              ))}
              <tr>
                <td className="gc-recurso">Total</td>
                <td data-label="Sala Primera">
                  <b style={{ fontVariantNumeric: "tabular-nums" }}>20</b>
                </td>
                <td data-label="Todos los tribunales">
                  <b style={{ fontVariantNumeric: "tabular-nums" }}>87</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        Cada columna tiene su propia escala. Los conteos son un mínimo: solo incluyen las resoluciones publicadas hasta fines de octubre de 2026.
      </p>
      <FigSource>Constancias leídas en el texto de cada resolución publicada en Nexus del Poder Judicial; conteo propio.</FigSource>
    </figure>
  );
}

/* ── Figura 2. Herramientas declaradas ────────────────────────────────── */

const HERRAMIENTAS: { nombre: string; sala: number; todos: number }[] = [
  { nombre: "Microsoft 365 Copilot", sala: 0, todos: 64 },
  { nombre: "ChatGPT", sala: 8, todos: 10 },
  { nombre: "Gemini", sala: 8, todos: 8 },
  { nombre: "NotebookLM", sala: 4, todos: 4 },
  { nombre: "Sin identificar", sala: 0, todos: 1 },
];

export function HerramientasIA() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-herramientas-ia">
      <FigHead
        id="fig-herramientas-ia"
        n={2}
        kicker="Las herramientas"
        title="La Sala Primera usa ChatGPT, Gemini y NotebookLM; los demás tribunales, casi siempre Copilot"
        lead="Herramienta declarada en cada resolución. En la Sala Primera, los ocho votos con Gemini se reparten entre Gemini 3.5 Flash y la versión gratuita, cuatro y cuatro."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Herramienta</th>
                <th scope="col">Sala Primera (20 votos)</th>
                <th scope="col">Todos los tribunales (87)</th>
              </tr>
            </thead>
            <tbody>
              {HERRAMIENTAS.map((h) => (
                <tr key={h.nombre}>
                  <td className="gc-recurso">{h.nombre}</td>
                  <td data-label="Sala Primera (20 votos)">
                    <Barra valor={h.sala} max={8} fuerte={h.sala === 8} />
                  </td>
                  <td data-label="Todos los tribunales (87)">
                    <Barra valor={h.todos} max={64} fuerte={h.todos === 64} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        Cada columna tiene su propia escala. Copilot es la herramienta asociada a las cuentas institucionales de Microsoft del Poder Judicial.
      </p>
      <FigSource>Constancias de las resoluciones publicadas en Nexus, marzo a octubre de 2026; conteo propio.</FigSource>
    </figure>
  );
}

/* ── Figura 4. Cronología ─────────────────────────────────────────────── */

const HITOS: { quien: string; que: string; plazo: string; hl?: boolean }[] = [
  { quien: "Consejo Superior", que: "Autoriza el inicio del uso regulado de la inteligencia artificial generativa en la institución.", plazo: "6 de noviembre de 2025 · sesión 102-2025" },
  { quien: "Consejo Superior", que: "Aprueba la circular 31-2026, que se publica el 26 de febrero.", plazo: "12 de febrero de 2026 · sesión 12-2026", hl: true },
  { quien: "Tribunal de Apelación de Trabajo de San José", que: "Primeras sentencias con la nota de uso de Copilot.", plazo: "12 de marzo de 2026" },
  { quien: "Corte Plena", que: "Un magistrado de la Sala Primera explica que sus letrados usan ChatGPT para armar los proyectos de resolución.", plazo: "25 de mayo de 2026 · sesión 23-2026" },
  { quien: "Sala Primera", que: "Primer voto con constancia de uso de ChatGPT.", plazo: "4 de junio de 2026 · voto 704", hl: true },
  { quien: "Consejo Superior", que: "Mantiene el deber de declarar el uso y adjudica 270 licencias de Gemini Enterprise por US$104.055,15.", plazo: "28 de julio de 2026 · sesión 63-2026" },
  { quien: "Auditoría Interna", que: "Constata que solo existen los lineamientos de la circular; el Consejo ordena formalizar una política institucional.", plazo: "13 de agosto de 2026 · sesión 68-2026" },
  { quien: "Sala Primera y Sala Tercera", que: "La Sala Primera dicta nueve votos con constancia en el mes y la Sala Tercera, el primero.", plazo: "Octubre de 2026" },
];

export function CronologiaIA() {
  return (
    <figure className="gc-fig gc-fig-flujo" aria-labelledby="fig-cronologia-ia">
      <FigHead
        id="fig-cronologia-ia"
        n={4}
        kicker="La cronología"
        title="Un año de reglas: de la autorización a la práctica"
        lead="Las filas marcadas son la circular y el primer voto de la Sala Primera que la aplica."
      />
      <ol className="gc-flujo">
        <li className="gc-flujo-cab" aria-hidden="true">
          <span />
          <span>Quién</span>
          <span>Qué ocurre</span>
          <span>Fecha</span>
        </li>
        {HITOS.map((h, i) => (
          <li key={i} className={`gc-flujo-paso${h.hl ? " gc-fig-hl" : ""}`}>
            <span className="gc-fig-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="gc-flujo-quien">{h.quien}</span>
            <span className="gc-flujo-que">{h.que}</span>
            <span className="gc-flujo-plazo">{h.plazo}</span>
          </li>
        ))}
      </ol>
      <FigSource>Actas del Consejo Superior y de la Corte Plena y resoluciones publicadas en Nexus del Poder Judicial.</FigSource>
    </figure>
  );
}
