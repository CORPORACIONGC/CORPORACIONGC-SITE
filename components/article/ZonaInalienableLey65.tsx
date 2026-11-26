/* Figura de la guía sobre la zona inalienable de la Ley 65 de 1888 y la
   resolución R-732-2026-MINAE. Mismo lenguaje editorial que las demás guías
   (.gc-fig de app/globals.css). Texto cotejado el 26-11-2026 contra el
   apartado SÉTIMO del por tanto de la resolución, publicada en el Alcance
   154 a La Gaceta 220 del 19-11-2026. */

import { RunningHead } from "@/components/ui/RunningHead";

function Ref({ children }: { children: React.ReactNode }) {
  return <span className="gc-fig-ref">{children}</span>;
}

const PASOS: { n: string; q: string; a: string; ref: string }[] = [
  {
    n: "01",
    q: "Un informe técnico-jurídico",
    a: "Debe ser circunstanciado y demostrar «de manera fehaciente, mediante trazabilidad histórica y registral indubitada», que el terreno estatal protegido y el inmueble particular se superponen materialmente.",
    ref: "apartado sétimo, inciso a",
  },
  {
    n: "02",
    q: "Audiencia a los titulares",
    a: "Audiencia formal, por el plazo legal correspondiente, a los titulares registrales, propietarios y legítimos interesados, para que aporten la prueba de descargo que a su derecho convenga, con garantía del contradictorio.",
    ref: "apartado sétimo, inciso b",
  },
  {
    n: "03",
    q: "Los recursos ordinarios",
    a: "Agotar la fase recursiva ordinaria conforme a la Ley General de la Administración Pública.",
    ref: "apartado sétimo, inciso c",
  },
];

export function PasosAfectacionLey65() {
  return (
    <figure className="gc-fig" aria-labelledby="fig-pasos-ley-65">
      <header className="gc-fig-head">
        <RunningHead title="El procedimiento" locator="Figura 1" />
        <p id="fig-pasos-ley-65" className="gc-fig-title">
          Lo que exige la resolución antes de afectar una finca inscrita
        </p>
        <p className="gc-fig-lead">
          Requisitos que el SINAC y su Área de Conservación Central deben cumplir antes de emitir cualquier acto que
          pretenda afectar, limitar o desconocer la propiedad privada bajo el régimen de la Ley 65 de 1888.
        </p>
      </header>
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
            <span className="gc-fig-num">04</span>
            Si se cuestiona el título
          </div>
          <div className="gc-fig-step-a">
            <p>
              Cuando la Administración determine que un título o una inscripción adolece de nulidades absolutas,
              evidentes y manifiestas que lesionen el dominio público, debe remitir el expediente instruido a la
              Procuraduría General de la República para que valore la lesividad, o iniciar las acciones judiciales
              ante la jurisdicción contencioso-administrativa. La resolución la llama «la única vía autorizada para
              declarar la nulidad de los títulos inscritos». <Ref>apartado sétimo, inciso d</Ref>
            </p>
            <p className="gc-fig-note">
              Sin ese procedimiento previo, el apartado sexto ordena al MINAE y al SINAC abstenerse de declarar de
              forma automática la integración al Patrimonio Natural del Estado de inmuebles con inscripción registral
              individualizada y títulos válidos previos o coetáneos.
            </p>
          </div>
        </section>
      </div>
      <p className="gc-fig-source">
        <span>Fuente:</span> Resolución R-732-2026-MINAE de 18 de noviembre de 2026, por tanto, apartados sexto y
        sétimo (Alcance 154 a La Gaceta 220 del 19 de noviembre de 2026).
      </p>
    </figure>
  );
}
