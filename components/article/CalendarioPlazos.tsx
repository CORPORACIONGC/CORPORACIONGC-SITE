/* Calendarios del cómputo de plazos: cuándo queda notificada una persona,
   cuándo empieza a correr el plazo y cuándo vence. Se dibujan con fechas
   reales y cada figura repite en texto lo que muestra, para lectores de
   pantalla y para quien imprime. Las reglas y sus fuentes están en la guía
   «Plazos para demandar al Estado en Costa Rica». */

import { RunningHead } from "@/components/ui/RunningHead";

export type Marca = "envio" | "notificado" | "inicio" | "corre" | "vence" | "inhabil" | "prorroga";

const ROTULO: Record<Marca, string> = {
  envio: "Transmisión",
  notificado: "Queda notificada",
  inicio: "Empieza el plazo",
  corre: "Día del plazo",
  vence: "Vencimiento de fecha a fecha",
  inhabil: "Inhábil",
  prorroga: "Vencimiento prorrogado",
};

const DIAS = ["L", "K", "M", "J", "V", "S", "D"];
const DIAS_LARGOS = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "setiembre", "octubre", "noviembre", "diciembre",
];

/** Día de la semana con el lunes como 0. */
function diaSemana(iso: string) {
  const [a, m, d] = iso.split("-").map(Number);
  return (new Date(Date.UTC(a, m - 1, d)).getUTCDay() + 6) % 7;
}
function fechaLarga(iso: string) {
  const [a, m, d] = iso.split("-").map(Number);
  return `${DIAS_LARGOS[diaSemana(iso)]} ${d} de ${MESES[m - 1]} de ${a}`;
}

/** Un mes completo, con las marcas que tocan a sus días. */
function Mes({ anio, mes, marcas, numeros }: { anio: number; mes: number; marcas: Record<string, Marca>; numeros?: Record<string, number> }) {
  const primero = `${anio}-${String(mes).padStart(2, "0")}-01`;
  const desfase = diaSemana(primero);
  const total = new Date(Date.UTC(anio, mes, 0)).getUTCDate();
  const celdas: (string | null)[] = [
    ...Array(desfase).fill(null),
    ...Array.from({ length: total }, (_, i) => `${anio}-${String(mes).padStart(2, "0")}-${String(i + 1).padStart(2, "0")}`),
  ];
  return (
    <div className="gc-cal-mes">
      <p className="gc-cal-mes-titulo">
        {MESES[mes - 1]} {anio}
      </p>
      <div className="gc-cal-grid" role="presentation">
        {DIAS.map((d, i) => (
          <span key={d + i} className="gc-cal-dow" aria-hidden="true">
            {d}
          </span>
        ))}
        {celdas.map((iso, i) =>
          iso ? (
            <span
              key={iso}
              className={`gc-cal-dia${marcas[iso] ? ` gc-cal-dia--${marcas[iso]}` : ""}${diaSemana(iso) > 4 ? " gc-cal-dia--finde" : ""}`}
              title={marcas[iso] ? `${fechaLarga(iso)}: ${ROTULO[marcas[iso]]}` : undefined}
            >
              {Number(iso.slice(8))}
              {numeros?.[iso] !== undefined && <small className="gc-cal-n">{numeros[iso]}</small>}
            </span>
          ) : (
            <span key={`v${i}`} className="gc-cal-vacio" aria-hidden="true" />
          ),
        )}
      </div>
    </div>
  );
}

function Leyenda({ tipos }: { tipos: Marca[] }) {
  return (
    <ul className="gc-cal-leyenda" aria-hidden="true">
      {tipos.map((t) => (
        <li key={t}>
          <span className={`gc-cal-muestra gc-cal-dia--${t}`} />
          {ROTULO[t]}
        </li>
      ))}
    </ul>
  );
}

export type Escenario = {
  titulo: string;
  meses: [number, number][];
  marcas: Record<string, Marca>;
  /** Número de día del plazo (1, 2, 3…) para los plazos en días hábiles. */
  numeros?: Record<string, number>;
  /** La secuencia contada en texto, paso por paso. */
  pasos: string[];
};

export function CalendarioPlazo({
  id,
  locator,
  titulo,
  lead,
  escenarios,
  nota,
  fuente,
}: {
  id: string;
  locator: string;
  titulo: string;
  lead: string;
  escenarios: Escenario[];
  nota?: string;
  fuente: string;
}) {
  const tipos = [...new Set(escenarios.flatMap((e) => Object.values(e.marcas)))] as Marca[];
  return (
    <figure className="gc-fig gc-cal" aria-labelledby={id}>
      <header className="gc-fig-head">
        <RunningHead title="Cómputo" locator={locator} />
        <p id={id} className="gc-fig-title">
          {titulo}
        </p>
        <p className="gc-fig-lead">{lead}</p>
      </header>
      <Leyenda tipos={tipos} />
      {escenarios.map((e) => (
        <section key={e.titulo} className="gc-cal-escenario">
          <p className="gc-fig-label">{e.titulo}</p>
          <div className="gc-cal-meses">
            {e.meses.map(([a, m]) => (
              <Mes key={`${a}-${m}`} anio={a} mes={m} marcas={e.marcas} numeros={e.numeros} />
            ))}
          </div>
          <ol className="gc-cal-pasos">
            {e.pasos.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>
        </section>
      ))}
      {nota && <p className="gc-fig-note">{nota}</p>}
      <p className="gc-fig-source">
        <span>Fuente:</span> {fuente}
      </p>
    </figure>
  );
}

/* ── Las dos figuras de la guía de plazos ─────────────────────────── */

/** Artículo 38 de la Ley de Notificaciones Judiciales, con el caso real
 *  del voto 70-F-TC-2022 y el ejemplo de la Circular 042-2011. */
export function CalendarioNotificacion() {
  return (
    <CalendarioPlazo
      id="fig-calendario-notificacion"
      locator="Figura 3"
      titulo="Cuándo queda notificada la persona y cuándo empieza a correr el plazo"
      lead="Con correo electrónico, fax o casillero, la notificación se tiene por hecha el día hábil siguiente a la transmisión, y el plazo empieza el día hábil siguiente a esa notificación."
      escenarios={[
        {
          titulo: "Transmisión un viernes: el caso del voto 70-F-TC-2022",
          meses: [[2017, 12]],
          marcas: { "2017-12-15": "envio", "2017-12-16": "inhabil", "2017-12-17": "inhabil", "2017-12-18": "notificado", "2017-12-19": "inicio" },
          pasos: [
            "Viernes 15 de diciembre de 2017: la Administración transmite el acto por correo electrónico.",
            "Sábado 16 y domingo 17: días inhábiles, no cuentan.",
            "Lunes 18: el acto se tiene por notificado, el día hábil siguiente a la transmisión.",
            "Martes 19: empieza a correr el año de caducidad. La demanda presentada el 17 de diciembre de 2018 estaba en plazo.",
          ],
        },
        {
          titulo: "Transmisión un jueves: el ejemplo de la Corte Plena, aplicado en el voto 191-F-TC-2022",
          meses: [[2016, 10]],
          marcas: { "2016-10-06": "envio", "2016-10-07": "notificado", "2016-10-08": "inhabil", "2016-10-09": "inhabil", "2016-10-10": "inicio" },
          pasos: [
            "Jueves 6 de octubre de 2016: el acto se transmite por fax, a cualquier hora, incluso de noche.",
            "Viernes 7: la persona se tiene por notificada.",
            "Lunes 10: empieza a correr el año, que vence el martes 10 de octubre de 2017.",
          ],
        },
        {
          titulo: "Con un feriado en medio: el caso del voto 90-F-TC-2021",
          meses: [[2017, 4], [2017, 5]],
          marcas: { "2017-04-27": "envio", "2017-04-28": "notificado", "2017-04-29": "inhabil", "2017-04-30": "inhabil", "2017-05-01": "inhabil", "2017-05-02": "inicio" },
          pasos: [
            "Jueves 27 de abril de 2017: el acto se transmite por correo electrónico.",
            "Viernes 28: la persona se tiene por notificada.",
            "Sábado 29, domingo 30 y lunes 1 de mayo, feriado: días inhábiles.",
            "Martes 2 de mayo: empieza a correr el año, que vence el 2 de mayo de 2018.",
          ],
        },
      ]}
      fuente="Ley de Notificaciones Judiciales, artículo 38; Corte Plena, sesión 6-11, artículo XXV (Circular 042-2011); Tribunal de Casación Contencioso-Administrativo, sentencias 70-F-TC-2022, 191-F-TC-2022 y 90-F-TC-2021."
    />
  );
}

/** El año de caducidad de fecha a fecha y su prórroga, con el caso real del
 *  voto 167-F-TC-2022. */
export function CalendarioAnioCaducidad() {
  return (
    <CalendarioPlazo
      id="fig-calendario-anio"
      locator="Figura 4"
      titulo="El año de caducidad, de fecha a fecha"
      lead="El año vence en la misma fecha del año siguiente a aquella en que empezó a correr; si ese día es inhábil, el vencimiento pasa al día hábil siguiente."
      escenarios={[
        {
          titulo: "El caso del voto 167-F-TC-2022",
          meses: [[2017, 6], [2018, 6]],
          marcas: {
            "2017-06-15": "notificado",
            "2017-06-16": "inicio",
            "2018-06-16": "vence",
            "2018-06-17": "inhabil",
            "2018-06-18": "prorroga",
          },
          pasos: [
            "Jueves 15 de junio de 2017: se notifica el acto final.",
            "Viernes 16 de junio de 2017: el año empieza a correr el día siguiente.",
            "Sábado 16 de junio de 2018: el año se cumpliría de fecha a fecha, pero el día es inhábil.",
            "Lunes 18 de junio de 2018: el vencimiento se prorroga al día hábil siguiente. La demanda presentada ese día estaba en plazo.",
          ],
        },
      ]}
      nota="El mismo cómputo de fecha a fecha rige los cuatro años de la prescripción y los demás plazos fijados en meses o años. Los plazos fijados en días se cuentan en días hábiles."
      fuente="Código Procesal Civil, artículo 30.5, aplicable por el artículo 220 del CPCA; Código Civil, artículo 15; Tribunal de Casación Contencioso-Administrativo, sentencias 167-F-TC-2022 y 181-F-TC-2024."
    />
  );
}
