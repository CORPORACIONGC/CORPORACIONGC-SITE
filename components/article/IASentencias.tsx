/* Figuras del artículo sobre la Sala Primera y el uso de ChatGPT e inteligencia
   artificial en las resoluciones judiciales. Mismo lenguaje editorial que las
   demás guías (.gc-fig de app/globals.css). Datos cotejados el 23-11-2026:
   circular 31-2026 del Consejo Superior (SINALEVI y acta 12-2026, art. LIII);
   constancias de uso en los votos de la base GC (sentencias hasta fines de
   octubre de 2026); marco comparado leído en sus fuentes oficiales. */

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

/* ── Figura 1. Qué permite, exige y prohíbe la circular 31-2026 ───────── */

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
        n={1}
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

/* ── Figura 2. Cómo lo declaran los tribunales ────────────────────────── */

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
        n={2}
        kicker="La práctica"
        title="Desde la circular, varios tribunales declaran en sus resoluciones para qué usaron la IA"
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

/* ── Figura 3. El marco comparado ─────────────────────────────────────── */

const COMPARADO: { donde: string; norma: string; href: string; declarar: string; anulacion: string }[] = [
  { donde: "Costa Rica", norma: "Circular 31-2026 del Consejo Superior (2026)", href: "https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=106387&param2=149838&param3=1", declarar: "Obligatorio: herramienta, modelo, fecha y uso", anulacion: "Sin precedente que anule una sentencia por el uso de IA" },
  { donde: "Colombia", norma: "Corte Constitucional, T-323 de 2024; Acuerdo PCSJA24-12243 (2024)", href: "https://www.corteconstitucional.gov.co/relatoria/2024/T-323-24.htm", declarar: "Obligatorio, con herramienta, fecha e instrucciones usadas", anulacion: "La T-323 declaró un uso indebido por falta de transparencia y no anuló el fallo" },
  { donde: "Unión Europea", norma: "Reglamento de IA 2024/1689; Reglamento 2026/1744", href: "https://eur-lex.europa.eu/legal-content/ES/TXT/HTML/?uri=CELEX:32024R1689", declarar: "La IA para la justicia es de alto riesgo; las obligaciones se aplazaron al 2 de diciembre de 2027", anulacion: "—" },
  { donde: "España", norma: "CGPJ, Instrucción 2/2026", href: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2205", declarar: "Solo herramientas institucionales; nunca datos judiciales en herramientas externas", anulacion: "El incumplimiento puede acarrear responsabilidad disciplinaria" },
  { donde: "Brasil", norma: "CNJ, Resolución 615/2025", href: "https://atos.cnj.jus.br/atos/detalhar/6001", declarar: "A criterio del juez; el sistema del tribunal registra el uso", anulacion: "Prohíbe usar la IA como instrumento autónomo de decisión" },
  { donde: "Reino Unido", norma: "Guía judicial sobre IA (octubre de 2025)", href: "https://www.judiciary.uk/guidance-and-resources/artificial-intelligence-ai-judicial-guidance-october-2025/", declarar: "No se exige en general; el juez responde personalmente de lo que firma", anulacion: "—" },
  { donde: "Argentina (Chubut)", norma: "Superior Tribunal de Justicia (marzo de 2026)", href: "https://www.pensamientopenal.com.ar/index.php/fallos/91880-superior-tribunal-justicia-chubut-incidencia-ia-resoluciones-judiciales", declarar: "—", anulacion: "Revocó la nulidad de una condena: se controla la fundamentación escrita, no la herramienta" },
];

export function ComparadoIA() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-comparado-ia">
      <FigHead
        id="fig-comparado-ia"
        n={3}
        kicker="Fuera del país"
        title="Todos exigen supervisión humana; difieren en si declarar es obligatorio y en qué pasa con la sentencia"
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Dónde</th>
                <th scope="col">Norma o precedente</th>
                <th scope="col">Declarar el uso</th>
                <th scope="col">Efecto sobre la resolución</th>
              </tr>
            </thead>
            <tbody>
              {COMPARADO.map((c) => (
                <tr key={c.donde}>
                  <td className="gc-recurso">{c.donde}</td>
                  <td data-label="Norma o precedente">
                    <a href={c.href} target="_blank" rel="noopener noreferrer">
                      {c.norma}
                    </a>
                  </td>
                  <td data-label="Declarar el uso">{c.declarar}</td>
                  <td data-label="Efecto sobre la resolución">{c.anulacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Textos oficiales de cada norma y precedente; el caso de Chubut, según la reseña de Pensamiento Penal, porque la publicación oficial no estaba disponible. El detalle y los enlaces están en el bloque de fuentes.
      </FigSource>
    </figure>
  );
}
