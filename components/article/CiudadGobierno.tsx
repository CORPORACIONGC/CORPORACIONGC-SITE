/* Figuras de la guía sobre el proyecto de ley de Ciudad Gobierno
   (expediente 25.725). Mismo lenguaje editorial que las demás guías (.gc-fig
   de app/globals.css). Textos cotejados el 25-11-2026: el original en el
   Alcance 114 a La Gaceta 163 del 28-08-2026 y el texto dictaminado en el
   dictamen afirmativo de mayoría de la Comisión de Gobierno y Administración
   del 10-11-2026, descargado del SIL. */

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

function Ref({ children }: { children: React.ReactNode }) {
  return <span className="gc-fig-ref">{children}</span>;
}

/* ── Figura 1. La estructura del arreglo ─────────────────────────────── */

const PASOS: { n: string; q: string; a: string; ref: string }[] = [
  {
    n: "01",
    q: "El terreno",
    a: "Si la propuesta aprobada por el Consejo de Gobierno ubica el complejo en terrenos públicos, sus titulares otorgan al BCIE un derecho de uso mediante convenio específico, por un plazo no mayor a 50 años. La ley no permite traspasar al Banco ni a terceros la propiedad de esos terrenos.",
    ref: "art. 10, inciso e",
  },
  {
    n: "02",
    q: "El contrato",
    a: "El Ministerio de Hacienda queda autorizado para firmar con el BCIE, sin concurso, un arrendamiento de bienes por construir. Antes debe dejar constancia de la razonabilidad del precio con un avalúo preliminar, hecho sobre el anteproyecto del Banco. El refrendo de la Contraloría se exige en la medida en que lo pida su reglamento.",
    ref: "arts. 9 y 10, incisos a, b y d",
  },
  {
    n: "03",
    q: "La construcción",
    a: "El diseño y la construcción son por cuenta y riesgo del BCIE, que contrata a las empresas por licitación abierta según sus propias políticas de adquisiciones. Hacienda puede participar para verificar que se cumplan los requerimientos del proyecto.",
    ref: "art. 10, incisos c y f",
  },
  {
    n: "04",
    q: "El alquiler",
    a: "Con el edificio construido, Hacienda hace el avalúo definitivo y da la orden de inicio de la fase operativa. El Estado paga la cuota de arrendamiento durante un plazo inicial de hasta 30 años.",
    ref: "art. 10, inciso d; art. 11",
  },
];

export function EstructuraCiudadGobierno() {
  return (
    <figure className="gc-fig" aria-labelledby="fig-estructura-ciudad-gobierno">
      <FigHead
        id="fig-estructura-ciudad-gobierno"
        n={1}
        kicker="La estructura"
        title="Terreno público, edificio del BCIE y alquiler del Estado"
        lead="Lo que autorizaría el texto dictaminado, en el orden en que ocurriría."
      />
      <div className="gc-fig-steps">
        {PASOS.map((p) => (
          <section key={p.n} className="gc-fig-step">
            <div className="gc-fig-step-q">
              <span className="gc-fig-num">{p.n}</span>
              {p.q}
            </div>
            <div className="gc-fig-step-a">
              <p>
                {p.a} <Ref>{p.ref}</Ref>
              </p>
            </div>
          </section>
        ))}
        <section className="gc-fig-step gc-fig-step--end">
          <div className="gc-fig-step-q">
            <span className="gc-fig-num">05</span>
            Al vencer el plazo inicial
          </div>
          <div className="gc-fig-step-a">
            <div className="gc-fig-trio">
              <div>
                <span className="gc-fig-label">a) Traslado</span>
                <p>La propiedad de las obras, las instalaciones y el equipamiento pasa al Estado.</p>
              </div>
              <div>
                <span className="gc-fig-label">b) Prórroga</span>
                <p>El alquiler sigue hasta un total de 50 años, con nuevo precio. Al terminar la última prórroga, el BCIE debe trasladar las obras al Estado.</p>
              </div>
              <div className="gc-fig-hl">
                <span className="gc-fig-label">c) Terceros</span>
                <p>El BCIE alquila los espacios a terceros por lo que reste de los 50 años y paga al titular del terreno un canon igual a los ingresos netos. El inciso no dice qué ocurre con las obras al final.</p>
              </div>
            </div>
            <p className="gc-fig-note">
              Ninguna alternativa es automática: cada una requiere una decisión posterior y fundada de Hacienda y el acuerdo del BCIE; la prórroga y el alquiler a terceros, además, la aprobación previa del Directorio del Banco. <Ref>art. 11</Ref>
            </p>
          </div>
        </section>
      </div>
      <FigSource>
        Expediente legislativo 25.725, texto dictaminado por la Comisión Permanente Ordinaria de Gobierno y Administración el 10 de noviembre de 2026, artículos 9, 10 y 11.
      </FigSource>
    </figure>
  );
}

/* ── Figura 2. Qué cambió en la comisión ─────────────────────────────── */

const CAMBIOS: { tema: string; original: string; dictaminado: string }[] = [
  {
    tema: "Al vencer los 30 años",
    original: "Prórrogas hasta 50 años. Si Hacienda no prorroga, el BCIE puede alquilar a terceros durante lo que reste del derecho de uso, con un canon para el titular del terreno, o Hacienda puede pedirle el traslado de las obras (art. 10, inciso g).",
    dictaminado: "Artículo propio con tres alternativas negociables: traslado, prórroga hasta 50 años con traslado obligatorio al final, o alquiler a terceros con un canon igual a los ingresos netos. Se aclara que ninguna es un derecho adquirido (art. 11).",
  },
  {
    tema: "El lote junto al Liceo de Costa Rica",
    original: "Deroga la Ley 5570 de 1974 y ordena a la Junta del Liceo reintegrar al MOPT, en 30 días, el inmueble del artículo 1 de esa ley.",
    dictaminado: "Traspasa al MOPT la finca 1-45513-000, de 10.010 m², a título gratuito y de forma obligatoria, sin aceptación de la Junta. La Notaría del Estado otorga la escritura en 30 días (art. 12 y transitorio).",
  },
  {
    tema: "Calles",
    original: "No había norma.",
    dictaminado: "Desafecta los tramos de las calles 7 y 9 entre las avenidas 20 y 22, que pasan al patrimonio disponible del Estado, con un estudio de impacto vial previo al cierre (art. 13).",
  },
  {
    tema: "Inversión pública y seguimiento",
    original: "Inscripción en el Banco de Proyectos de Inversión Pública de Mideplan.",
    dictaminado: "Además, cumplir las fases de preinversión, inversión y posinversión de la Ley 10441, y seguimiento periódico de entregables por la comisión coordinadora (arts. 5 y 8).",
  },
  {
    tema: "Lo que no cambió",
    original: "Contrato directo con el BCIE, figura de arrendamiento de bien por construir, avalúo en dos fases, refrendo condicionado al reglamento contralor y derecho de uso de hasta 50 años.",
    dictaminado: "Igual. El texto no incorporó la autorización de endeudamiento del artículo 121, inciso 15, de la Constitución que recomendó la Contraloría.",
  },
];

export function CambiosCiudadGobierno() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-cambios-ciudad-gobierno">
      <FigHead
        id="fig-cambios-ciudad-gobierno"
        n={2}
        kicker="El texto sustitutivo"
        title="La comisión cambió el final del contrato y los terrenos; el núcleo quedó igual"
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Texto presentado (agosto)</th>
                <th scope="col">Texto dictaminado (noviembre)</th>
              </tr>
            </thead>
            <tbody>
              {CAMBIOS.map((c) => (
                <tr key={c.tema}>
                  <td className="gc-recurso">{c.tema}</td>
                  <td data-label="Texto presentado (agosto)">{c.original}</td>
                  <td data-label="Texto dictaminado (noviembre)">{c.dictaminado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Proyecto de ley publicado en el Alcance 114 a La Gaceta 163 del 28 de agosto de 2026; dictamen afirmativo de mayoría del 10 de noviembre de 2026; Contraloría General de la República, oficio 13483 (DCP-0205) del 6 de octubre de 2026.
      </FigSource>
    </figure>
  );
}
