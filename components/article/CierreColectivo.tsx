/* Figuras de la guía «Cierre colectivo del Poder Judicial 2026-2027: fechas
   y cómo corren los plazos». Usan el calendario de CalendarioPlazos: cada
   figura dibuja las fechas reales y repite en texto lo que muestra. Las
   fechas salen del acuerdo del Consejo Superior (sesión 70-2026, artículo
   XXII) y los casos, de los votos que cita la guía. */

import { CalendarioPlazo, type Marca } from "@/components/article/CalendarioPlazos";

/** Marca cada día entre dos fechas ISO, ambas inclusive. */
function rango(desde: string, hasta: string, marca: Marca): Record<string, Marca> {
  const salida: Record<string, Marca> = {};
  const fin = new Date(`${hasta}T00:00:00Z`).getTime();
  for (let t = new Date(`${desde}T00:00:00Z`).getTime(); t <= fin; t += 86_400_000) {
    salida[new Date(t).toISOString().slice(0, 10)] = marca;
  }
  return salida;
}

/** Numera los días hábiles (lunes a viernes) de una lista ya depurada. */
function numerar(dias: string[]): Record<string, number> {
  return Object.fromEntries(dias.map((d, i) => [d, i + 1]));
}

export function CalendarioCierre20262027() {
  return (
    <CalendarioPlazo
      id="fig-cierre-fechas"
      locator="Figura 1"
      titulo="Los días del cierre colectivo 2026-2027"
      lead="Los despachos que no hacen apertura efectiva cierran del 21 de diciembre de 2026 al 1 de enero de 2027 y en tres días de Semana Santa. Con los feriados y los fines de semana, los primeros días hábiles son el 4 de enero y el 29 de marzo de 2027."
      escenarios={[
        {
          titulo: "Fin y principio de año",
          meses: [
            [2026, 12],
            [2027, 1],
          ],
          marcas: rango("2026-12-21", "2027-01-03", "inhabil"),
          pasos: [
            "Viernes 18 de diciembre de 2026: último día hábil del año en los despachos que cierran.",
            "Del lunes 21 de diciembre al viernes 1 de enero: cierre colectivo. El 25 de diciembre y el 1 de enero son, además, feriados de ley.",
            "Sábado 2 y domingo 3 de enero: fin de semana.",
            "Lunes 4 de enero de 2027: reabren los despachos. Es el primer día hábil.",
          ],
        },
        {
          titulo: "Semana Santa",
          meses: [[2027, 3]],
          marcas: rango("2027-03-22", "2027-03-28", "inhabil"),
          pasos: [
            "Viernes 19 de marzo de 2027: último día hábil antes de Semana Santa.",
            "Lunes 22, martes 23 y miércoles 24 de marzo: cierre colectivo.",
            "Jueves 25 y viernes 26 de marzo: Jueves y Viernes Santo, feriados de ley. Sábado 27 y domingo 28: fin de semana.",
            "Lunes 29 de marzo de 2027: primer día hábil.",
          ],
        },
      ]}
      nota="Los despachos con apertura efectiva (materia penal, penal juvenil, violencia doméstica y pensiones alimentarias, entre otros) trabajan los días hábiles del cierre, de 8:00 a 12:00 y de 13:00 a 16:00."
      fuente="Consejo Superior, sesión 70-2026, artículo XXII; Secretaría General de la Corte, Circular 159-2026 y Aviso 17-2026; Código de Trabajo, artículo 148."
    />
  );
}

const HABILES_ENERO_2026 = [
  "2026-01-05", "2026-01-06", "2026-01-07", "2026-01-08", "2026-01-09",
  "2026-01-12", "2026-01-13", "2026-01-14", "2026-01-15", "2026-01-16",
  "2026-01-19", "2026-01-20", "2026-01-21", "2026-01-22", "2026-01-23",
];

export function CalendarioPlazoDiasCierre() {
  const corre = Object.fromEntries(HABILES_ENERO_2026.slice(1, -1).map((d) => [d, "corre" as Marca]));
  return (
    <CalendarioPlazo
      id="fig-cierre-dias-habiles"
      locator="Figura 2"
      titulo="Un plazo en días hábiles salta el cierre"
      lead="Los días del cierre no se cuentan: el plazo se detiene el último día hábil anterior y sigue el primer día hábil posterior. La notificación electrónica se tiene por hecha el día hábil siguiente a la transmisión, que puede caer después del cierre."
      escenarios={[
        {
          titulo: "El caso del voto 1415-2026 de la Sala Primera (cierre 2025-2026)",
          meses: [
            [2025, 12],
            [2026, 1],
          ],
          marcas: {
            "2025-12-18": "envio",
            "2025-12-19": "notificado",
            ...rango("2025-12-20", "2026-01-04", "inhabil"),
            "2026-01-05": "inicio",
            ...corre,
            "2026-01-23": "ultimo",
          },
          numeros: numerar(HABILES_ENERO_2026),
          pasos: [
            "Jueves 18 de diciembre de 2025: la sentencia se transmite a las partes por los medios electrónicos señalados.",
            "Viernes 19 de diciembre: las partes quedan notificadas, el último día hábil de 2025.",
            "Del lunes 22 de diciembre al viernes 2 de enero: cierre colectivo. Esos días no se cuentan.",
            "Lunes 5 de enero de 2026: empieza a correr el plazo de quince días hábiles de la casación.",
            "Viernes 23 de enero de 2026: último día. El recurso subido al expediente electrónico a las 22:13 de ese día se presentó en tiempo.",
          ],
        },
        {
          titulo: "Las mismas reglas con las fechas de 2026-2027: transmisión el viernes 18 de diciembre",
          meses: [
            [2026, 12],
            [2027, 1],
          ],
          marcas: {
            "2026-12-18": "envio",
            ...rango("2026-12-19", "2027-01-03", "inhabil"),
            "2027-01-04": "notificado",
            "2027-01-05": "inicio",
          },
          pasos: [
            "Viernes 18 de diciembre de 2026: la resolución se transmite por correo electrónico.",
            "Del sábado 19 de diciembre al domingo 3 de enero no hay un solo día hábil: fin de semana, cierre colectivo y feriados.",
            "Lunes 4 de enero de 2027: la persona se tiene por notificada, el día hábil siguiente a la transmisión.",
            "Martes 5 de enero de 2027: empieza a correr el plazo.",
          ],
        },
      ]}
      nota="El segundo calendario aplica a las fechas de este año el artículo 38 de la Ley de Notificaciones Judiciales y el cómputo del primero. Si la transmisión hubiera sido el jueves 17 de diciembre, la notificación quedaría hecha el viernes 18 y el plazo empezaría el lunes 4 de enero."
      fuente="Ley de Notificaciones Judiciales, artículo 38; Código Procesal Civil, artículo 30.5; Sala Primera, voto 1415-2026."
    />
  );
}

export function CalendarioVencimientoCierre() {
  return (
    <CalendarioPlazo
      id="fig-cierre-meses-anios"
      locator="Figura 3"
      titulo="Un plazo de meses o años que se cumple durante el cierre"
      lead="Los plazos fijados en meses o años, y los de prescripción y caducidad de fondo, corren también durante el cierre. Solo se mueve el último día: si cae en el cierre, el vencimiento pasa al primer día hábil siguiente."
      escenarios={[
        {
          titulo: "Un plazo anual que se cumple, de fecha a fecha, el miércoles 23 de diciembre de 2026",
          meses: [
            [2026, 12],
            [2027, 1],
          ],
          marcas: {
            "2026-12-21": "corre",
            "2026-12-22": "corre",
            "2026-12-23": "vence",
            ...rango("2026-12-24", "2027-01-03", "inhabil"),
            "2027-01-04": "prorroga",
          },
          pasos: [
            "Lunes 21 y martes 22 de diciembre: aunque son días del cierre, el plazo sigue corriendo, porque se cuenta según el calendario.",
            "Miércoles 23 de diciembre de 2026: el plazo se cumple de fecha a fecha, pero ese día los despachos están cerrados.",
            "Lunes 4 de enero de 2027: el vencimiento se prorroga al primer día hábil siguiente. Por medios electrónicos, el escrito puede presentarse hasta el final de ese día.",
          ],
        },
      ]}
      nota="Así lo resolvió la Sala Segunda para un año de prescripción laboral que se cumplía durante el cierre 2017-2018 (voto 738-2023). Si el plazo se cumple el viernes 18 de diciembre o antes, el cierre no lo mueve. Para el año de caducidad del artículo 39 del Código Procesal Contencioso-Administrativo, ningún voto de la Sala Primera ni del Tribunal Contencioso ha resuelto todavía un vencimiento dentro del cierre."
      fuente="Código Procesal Civil, artículo 30.5; Código Civil, artículo 16; Sala Segunda, voto 738-2023; Tribunal de Apelación de Trabajo, voto 379-2024."
    />
  );
}
