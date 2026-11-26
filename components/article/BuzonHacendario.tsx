/* Figuras de la guía sobre el buzón hacendario (Ley 10982, «Hacienda
   Digital»). Mismo lenguaje editorial que las demás guías (.gc-fig de
   app/globals.css). Textos cotejados el 26-11-2026: el nuevo texto de los
   artículos 134 y 137 del Código de Normas y Procedimientos Tributarios en
   el Alcance 153 a La Gaceta 218 del 17-11-2026, y el texto anterior de los
   artículos 134, 137, 137 bis, 139, 145, 150 y 156 en SINALEVI. Las fechas
   de la figura 1 son un cálculo de ejemplo. */

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

/* ── Figura 1. Del depósito al último día para recurrir ─────────────── */

const PASOS: { n: string; q: string; a: string; ref: string }[] = [
  {
    n: "01",
    q: "Lunes 11 de enero: el depósito",
    a: "La Administración Tributaria deposita la resolución en el buzón hacendario. El sistema debe dejar constancia de la fecha y la hora del depósito y de que el contenido íntegro quedó a disposición. Una alerta por mensaje de texto o correo avisa del depósito, con carácter informativo.",
    ref: "art. 134",
  },
  {
    n: "02",
    q: "Martes 12 de enero: queda notificada",
    a: "La persona se tiene por notificada el día hábil siguiente al depósito, aunque no haya abierto el buzón. La ley pone a su cargo el deber de revisar periódicamente los mensajes depositados.",
    ref: "art. 134",
  },
  {
    n: "03",
    q: "Miércoles 13 de enero: día 1 del plazo",
    a: "Cualquier plazo empieza a contarse el día hábil siguiente a aquel en que la persona quedó notificada. Los plazos por días del Código son de días hábiles.",
    ref: "arts. 134 y 10",
  },
];

export function PlazosBuzonHacendario() {
  return (
    <figure className="gc-fig" aria-labelledby="fig-plazos-buzon-hacendario">
      <FigHead
        id="fig-plazos-buzon-hacendario"
        n={1}
        kicker="El cómputo"
        title="Del depósito en el buzón al último día para recurrir"
        lead="Ejemplo calculado con una resolución depositada el lunes 11 de enero de 2027, en semanas sin feriados."
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
            <span className="gc-fig-num">04</span>
            El último día
          </div>
          <div className="gc-fig-step-a">
            <div className="gc-fig-trio">
              <div>
                <span className="gc-fig-label">5 días hábiles</span>
                <p>Martes 19 de enero. Es el plazo de la revocatoria contra la sanción por incumplir deberes formales. <Ref>art. 150</Ref></p>
              </div>
              <div className="gc-fig-hl">
                <span className="gc-fig-label">30 días hábiles</span>
                <p>Martes 23 de febrero. Es el plazo de la revocatoria contra la liquidación de oficio y de la apelación ante el Tribunal Fiscal Administrativo. <Ref>arts. 145 y 156</Ref></p>
              </div>
              <div>
                <span className="gc-fig-label">Con la regla anterior</span>
                <p>En el buzón, la notificación se tenía por hecha el quinto día hábil: el lunes 18 de enero. Los 30 días hábiles habrían vencido el lunes 1 de marzo. <Ref>antiguo art. 137, inciso b</Ref></p>
              </div>
            </div>
            <p className="gc-fig-note">
              Es un cálculo de ejemplo. Un feriado o un día inhábil para la Administración Tributaria corre las fechas, y el plazo que vence en día inhábil se extiende al primer día hábil siguiente. <Ref>art. 10</Ref>
            </p>
          </div>
        </section>
      </div>
      <FigSource>
        Código de Normas y Procedimientos Tributarios, artículo 134 según la Ley 10982 (Alcance 153 a La Gaceta 218 del 17 de noviembre de 2026) y artículos 10, 145, 150 y 156; artículo 137 en su texto anterior (SINALEVI).
      </FigSource>
    </figure>
  );
}

/* ── Figura 2. Qué cambia el 1 de enero de 2027 ──────────────────────── */

const CAMBIOS: { tema: string; antes: string; ahora: string }[] = [
  {
    tema: "Medio para notificar",
    antes: "El contribuyente debía señalar un medio: un lugar dentro del perímetro que definiera la Administración, un correo electrónico, fax, buzón electrónico u otro medio electrónico (art. 134).",
    ahora: "El buzón hacendario es el único medio que usa la Administración para notificar y comunicar, en todos los procedimientos y gestiones. Lo asigna la propia Administración a cada obligado tributario (art. 134).",
  },
  {
    tema: "Primera notificación",
    antes: "El acto de inicio se notificaba en el domicilio fiscal o en el correo electrónico registrado (art. 134).",
    ahora: "El acto de inicio de cada procedimiento se notifica en el buzón hacendario (art. 134).",
  },
  {
    tema: "Uso del buzón",
    antes: "Para notificar en el buzón electrónico, el interesado debía haberlo señalado como medio preferente o consentido, salvo que un reglamento lo hiciera obligatorio (art. 137, inciso b).",
    ahora: "Obligatorio, con un sistema de alertas informativas por mensaje de texto o correo. Es deber del obligado tributario revisar los mensajes depositados (art. 134).",
  },
  {
    tema: "Cuándo queda hecha",
    antes: "En el buzón, al quinto día hábil siguiente al depósito (art. 137, inciso b).",
    ahora: "El día hábil siguiente al depósito en el buzón o al envío del correo; el plazo corre desde el día hábil siguiente (art. 134).",
  },
  {
    tema: "Correo electrónico",
    antes: "Medio que el contribuyente podía señalar para cualquier procedimiento; podía indicar dos medios electrónicos y escoger el principal (art. 134).",
    ahora: "Solo en procedimientos determinativos o sancionadores, gestiones del art. 43 y sus recursos, y solo para futuras notificaciones de ese procedimiento (art. 134).",
  },
  {
    tema: "Si el correo falla",
    antes: "Tres intentos, dos el primer día y uno el tercero; si fallaban, notificación con el solo transcurso de 24 horas (art. 134).",
    ahora: "Si el correo devuelve un aviso de que no pudo entregarse, se notifica en el buzón hacendario (art. 134).",
  },
  {
    tema: "Otras formas",
    antes: "Personal en las oficinas, correo o medios electrónicos, carta entregada en el domicilio y edicto en el diario oficial o en un diario privado de mayor circulación (art. 137).",
    ahora: "Solo para quien no esté inscrito, no tenga buzón ni correo registrado: notificación personal o un edicto en el diario oficial (art. 137).",
  },
  {
    tema: "Otras normas",
    antes: "El Código remitía a los principios de la Ley de Notificaciones Judiciales para el correo electrónico (art. 137, inciso b).",
    ahora: "Las formas de los arts. 134 y 137 son las únicas; no se aplica supletoriamente ninguna otra normativa sobre la materia (art. 137).",
  },
];

export function CambiosBuzonHacendario() {
  return (
    <figure className="gc-fig gc-fig-tabla gc-fig-tabla--apilada" aria-labelledby="fig-cambios-buzon-hacendario">
      <FigHead
        id="fig-cambios-buzon-hacendario"
        n={2}
        kicker="Antes y después"
        title="Las notificaciones de Hacienda, antes y después del 1 de enero de 2027"
      />
      <div className="gc-comparativa">
        <div className="gc-table-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Hasta el 31 de diciembre de 2026</th>
                <th scope="col">Desde el 1 de enero de 2027</th>
              </tr>
            </thead>
            <tbody>
              {CAMBIOS.map((c) => (
                <tr key={c.tema}>
                  <td className="gc-recurso">{c.tema}</td>
                  <td data-label="Hasta el 31 de diciembre de 2026">{c.antes}</td>
                  <td data-label="Desde el 1 de enero de 2027">{c.ahora}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FigSource>
        Código de Normas y Procedimientos Tributarios: artículos 134 y 137 en el texto de la Ley 9416 (SINALEVI) y en el de la Ley 10982 (Alcance 153 a La Gaceta 218 del 17 de noviembre de 2026).
      </FigSource>
    </figure>
  );
}
