/* Figuras de la guía sobre el Plan Regulador de Santa Ana de 2026. Mismo
   lenguaje editorial que las demás guías (.gc-fig de app/globals.css).
   Datos cotejados el 19-11-2026 con el Alcance 133 a La Gaceta 187 del
   05-10-2026 (578 págs.): acuerdo del Concejo (p. 2), Cuadro 6 del
   Reglamento de Zonificación (págs. 80-82, cotejado sobre la imagen),
   transitorios de Generalidades (p. 17) y de Construcciones (p. 404) y
   art. 52 de Renovación Urbana (p. 511). */

import { RunningHead } from "@/components/ui/RunningHead";

const ALCANCE = "https://www.imprentanacional.go.cr/pub/2026/10/05/ALCA133_05_10_2026.pdf";
const SINALEVI = (p1: number, p2: number) =>
  `https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=${p1}&param2=${p2}&param3=1`;

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

/* ── Figura 1. Los siete reglamentos ──────────────────────────────────── */

const REGLAMENTOS: { nombre: string; regula: string; paginas: string; href: string }[] = [
  { nombre: "Generalidades y Sanciones", regula: "A quién obliga el plan, normativa supletoria del INVU, sanciones, recursos y la Junta Estratégica de Planificación Territorial con sus Fiscales Territoriales.", paginas: "4–17", href: SINALEVI(107995, 152603) },
  { nombre: "Zonificación y Uso del Suelo", regula: "Zonas urbanas y no urbanas, usos permitidos por zona, certificado de uso del suelo, usos no conformes, lote mínimo, cobertura, retiros, alturas e incentivos.", paginas: "18–113", href: SINALEVI(108009, 152626) },
  { nombre: "Vialidad", regula: "Clasificación y derechos de vía, vías proyectadas, alineamientos, estacionamientos, aceras y ciclovías.", paginas: "114–167", href: SINALEVI(108012, 152632) },
  { nombre: "Fraccionamientos, Urbanizaciones y Condominios", regula: "Visado, fraccionamiento simple y con fines urbanísticos, acceso excepcional, cesión de áreas públicas, condominios y desarrollos de interés social.", paginas: "168–238", href: SINALEVI(108015, 152636) },
  { nombre: "Construcciones", regula: "Normas de edificación, retención pluvial, licencia de construcción y su vigencia, certificado de cumplimiento urbanístico y los dos transitorios sobre permisos y proyectos en trámite.", paginas: "239–483", href: SINALEVI(108018, 152792) },
  { nombre: "Renovación Urbana", regula: "Cuatro subzonas de renovación, restricciones del art. 52 de la Ley 4240, zonas receptoras y reconfiguración predial.", paginas: "484–536", href: SINALEVI(108050, 152690) },
  { nombre: "Mapa Oficial", regula: "Inventario de 325 propiedades municipales y vías cantonales, con el efecto del art. 44 de la Ley 4240 sobre el dominio público.", paginas: "537–551", href: SINALEVI(108127, 152808) },
];

export function ReglamentosSantaAna() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-reglamentos-santa-ana">
      <FigHead
        id="fig-reglamentos-santa-ana"
        n={1}
        kicker="Qué contiene el plan"
        title="Siete reglamentos donde antes había uno"
        lead="El plan de 1991 era un reglamento de zonificación con su mapa. El de 2026 trae los cinco reglamentos que enumera el artículo 21 de la Ley de Planificación Urbana y dos más."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Reglamento</th>
                <th scope="col">Qué regula</th>
                <th scope="col">Págs. del Alcance</th>
              </tr>
            </thead>
            <tbody>
              {REGLAMENTOS.map((r) => (
                <tr key={r.nombre}>
                  <td className="gc-recurso">
                    <a href={r.href} target="_blank" rel="noopener noreferrer">
                      {r.nombre}
                    </a>
                  </td>
                  <td data-label="Qué regula">{r.regula}</td>
                  <td data-label="Págs. del Alcance" className="gc-plazo">
                    <span className="gc-fig-plazo">{r.paginas}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        <a href={ALCANCE} target="_blank" rel="noopener noreferrer">
          Alcance 133 a La Gaceta 187
        </a>
        , 05-10-2026, págs. 2 a 551; fichas de cada reglamento en SINALEVI (Reglamento Municipal 121 del 25-08-2026).
      </FigSource>
    </figure>
  );
}

/* ── Figura 2. Restricciones de algunas zonas ─────────────────────────── */

const ZONAS: { zona: string; lote: string; cobertura: string; altura: string; nota?: string }[] = [
  { zona: "Residencial Tipo 1", lote: "180 m² · 8 m", cobertura: "75 % / 85 %", altura: "4 pisos o 16 m" },
  { zona: "Residencial Tipo 2", lote: "300 m² · 10 m", cobertura: "70 % / 80 %", altura: "4 pisos o 16 m" },
  { zona: "Residencial Salitral", lote: "450 m² · 12 m", cobertura: "60 % / 60 %", altura: "2 pisos o 9 m" },
  { zona: "Comercial y Mixta", lote: "180 m² · 9 m", cobertura: "75 % / 85 %", altura: "4 pisos o 16 m", nota: "con incentivos de altura" },
  { zona: "Comercial y logística", lote: "5.000 m² · 30 m", cobertura: "75 % / 85 %", altura: "8 pisos o 34 m", nota: "con incentivos de altura" },
  { zona: "Expansión Pozos, Brasil y Santa Ana", lote: "1.500 m² · 15 m", cobertura: "70 % / 80 %", altura: "Pozos: 6 pisos o 26 m; Brasil y Santa Ana: 5 pisos o 20 m" },
  { zona: "Intensidad moderada", lote: "600 m² · 12 m", cobertura: "40 % / 50 % (o 240 / 300 m² en lotes de hasta 600 m²)", altura: "3 pisos o 12 m" },
  { zona: "Montañosa de intervención muy baja", lote: "20.000 m² · 65 m", cobertura: "8 % / 10 % (con escalas por tamaño)", altura: "2 pisos o 9 m", nota: "14 unidades por hectárea" },
];

export function ZonasSantaAna() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-zonas-santa-ana">
      <FigHead
        id="fig-zonas-santa-ana"
        n={2}
        kicker="Restricciones urbanísticas"
        title="Lote mínimo, cobertura y altura en ocho de las zonas del plan"
        lead="La cobertura se da para uso habitacional y no habitacional. El lote y el frente mínimos rigen para los fraccionamientos nuevos; los lotes ya inscritos que no los cumplen tienen reglas propias."
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Zona</th>
                <th scope="col">Lote y frente mínimos</th>
                <th scope="col">Cobertura máxima</th>
                <th scope="col">Altura máxima</th>
              </tr>
            </thead>
            <tbody>
              {ZONAS.map((z) => (
                <tr key={z.zona}>
                  <td className="gc-recurso">{z.zona}</td>
                  <td data-label="Lote y frente mínimos">{z.lote}</td>
                  <td data-label="Cobertura máxima">{z.cobertura}</td>
                  <td data-label="Altura máxima">
                    {z.altura}
                    {z.nota && (
                      <span className="gc-fig-ref" style={{ display: "block" }}>
                        {z.nota}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="gc-fig-note">
        Las edificaciones de 4 y 5 pisos necesitan un lote de al menos 600 m² y 15 m de frente; las de 6 y 7 pisos, 2.000 m² y 20 m; las de 8 o más, 2.500 m² y 22 m. Las de 5 pisos deben dar a una calle con derecho de vía de 14 m, y las de 6 o más, a una de 20 m. Cerca del aeropuerto, lo que supere 2 pisos o 9 m necesita el aval de Aviación Civil.
      </p>
      <FigSource>
        Reglamento de Zonificación y Uso del Suelo, Cuadro 6 (
        <a href={ALCANCE} target="_blank" rel="noopener noreferrer">
          Alcance 133
        </a>
        , págs. 80 a 82) y arts. 99, 101, 102 y 106 a 108.
      </FigSource>
    </figure>
  );
}

/* ── Figura 3. Calendario de la transición ────────────────────────────── */

const HITOS: { fecha: string; que: string; hl?: boolean }[] = [
  { fecha: "25-08-2026", que: "El Concejo adopta el plan en la sesión ordinaria 121 (artículo IV, acuerdo 16), con siete votos, y deja sin eficacia los artículos 28 y 29 del Reglamento de Fraccionamiento." },
  { fecha: "05-10-2026", que: "Se publica en el Alcance 133 a La Gaceta 187. Ese día empieza a regir y queda derogado el plan de 1991.", hl: true },
  { fecha: "Mediados de octubre de 2026", que: "Cierra el registro de proyectos en trámite del Transitorio II: diez días hábiles desde la publicación, según el acuerdo del Concejo (el texto del transitorio habla también de quince)." },
  { fecha: "Hacia el 5-12-2026", que: "Vence el plazo de dos meses para designar a los funcionarios municipales de la Junta Estratégica de Planificación Territorial; luego tienen un mes para elegir a los seis representantes de los distritos." },
  { fecha: "Segunda quincena de abril de 2027", que: "Vence el plazo de seis meses para que los proyectos inscritos pidan su permiso de construcción con las normas del plan de 1991.", hl: true },
  { fecha: "Octubre de 2027", que: "Vencen los doce meses para que la Municipalidad emita el reglamento de incentivos y reconfiguración predial de la renovación urbana." },
  { fecha: "Inicios de octubre de 2027", que: "Vence el año para impugnar el plan de forma directa ante el Tribunal Contencioso Administrativo. Después solo cabe atacarlo junto con un acto que lo aplique.", hl: true },
];

export function CalendarioSantaAna() {
  return (
    <figure className="gc-fig gc-fig-flujo" aria-labelledby="fig-calendario-santa-ana">
      <FigHead
        id="fig-calendario-santa-ana"
        n={3}
        kicker="Calendario de la transición"
        title="Las fechas que deja el nuevo plan"
        lead="Las filas marcadas son los plazos que no se recuperan. Salvo la adopción y la publicación, las fechas son cálculos propios a partir de los plazos del plan y del Código Procesal Contencioso-Administrativo."
      />
      <ol className="gc-flujo">
        <li className="gc-flujo-cab" aria-hidden="true">
          <span />
          <span>Fecha</span>
          <span>Qué ocurre</span>
          <span />
        </li>
        {HITOS.map((h, i) => (
          <li key={i} className={`gc-flujo-paso${h.hl ? " gc-fig-hl" : ""}`}>
            <span className="gc-fig-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="gc-flujo-quien">{h.fecha}</span>
            <span className="gc-flujo-que">{h.que}</span>
            <span className="gc-flujo-plazo" />
          </li>
        ))}
      </ol>
      <FigSource>
        Acuerdo del Concejo y plan publicado en el{" "}
        <a href={ALCANCE} target="_blank" rel="noopener noreferrer">
          Alcance 133
        </a>
        : p. 2; Generalidades, transitorios primero y segundo (p. 17); Construcciones, Transitorio II (p. 404); Renovación Urbana, art. 52 (p. 511); Código Procesal Contencioso-Administrativo, art. 39.1 b).
      </FigSource>
    </figure>
  );
}
