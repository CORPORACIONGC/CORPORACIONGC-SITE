"use client";

import { AnimatedEntry } from "@/components/ui/AnimatedEntry";
import { VideoCamera } from "@phosphor-icons/react";
import { LiteYouTube } from "@/components/ui/LiteYouTube";
import { RunningHead } from "@/components/ui/RunningHead";

type Video = {
  id: string;
  /** Fecha real de publicación en YouTube, comprobada vídeo por vídeo. Las
   *  ocho declaraban «2023-01-01», que era relleno: la más antigua es de
   *  2013 y la más reciente de 2025, y un `VideoObject` con fecha inventada
   *  es dato estructurado incorrecto. */
  fecha: string;
  title: string;
  event: string;
  organizer: string;
  description: string;
  /** Tramo del video en que habla el Director, en segundos [inicio, fin]. */
  intervencion: [number, number];
  /** Resumen de su intervención, hecho sobre la transcripción completa del
   *  audio (24-11-2026). Es paráfrasis: no lleva citas textuales. */
  resumen: string;
};

const VIDEOS: Video[] = [
  {
    id: "K5YjYwaqAGU",
    fecha: "2013-10-15",
    title: "Recurso de casación y oralidad",
    event: "I Seminario de Litigación Oral y Contencioso Administrativo",
    organizer: "Colegio de Abogados y Abogadas de Costa Rica",
    description:
      "Conferencia del Dr. Óscar Eduardo González Camacho sobre el recurso de casación y la oralidad en el proceso contencioso-administrativo, en el I Seminario de Litigación Oral y Contencioso Administrativo del Colegio de Abogados y Abogadas de Costa Rica (10 y 11 de octubre de 2013).",
    intervencion: [0, 1919],
    resumen:
      "El Dr. González Camacho abre con una serie de fórmulas de inadmisibilidad que, según indica, se repiten en las resoluciones de casación, para mostrar el peso del formalismo. Recuerda los fines clásicos del recurso, a saber, el control objetivo de legalidad, la nomofilaquia y la unificación de la jurisprudencia, y plantea la pregunta central: qué modelo recursivo corresponde a un proceso por audiencias orales. Responde que el modelo de casación vigente resulta inadecuado, porque está lleno de obstáculos formales que permiten eludir el fondo del asunto. Sostiene que las dificultades de la sentencia oral, del registro audiovisual y de la revisión del expediente administrativo son problemas de gestión de la información, del régimen probatorio o de eficiencia del sistema, ajenos a la oralidad misma. Afirma que el código contencioso tomó partido por la búsqueda de la verdad. Justifica las formas solo en cuanto sirven al contradictorio, al debido proceso y al buen desarrollo del proceso. Propone una casación con revisión plena, abierta a la prueba documental, a audiencias, a reconocimientos judiciales y a poderes oficiosos razonables, en contacto con los justiciables. Concluye que la transformación depende sobre todo de la formación y la mentalidad de los operadores, y que el proceso debe acercarse lo más posible a la verdad y a la justicia.",
  },
  {
    id: "95hHm6MiLOQ",
    fecha: "2017-09-22",
    title: "El control de la discrecionalidad en la jurisprudencia contencioso-administrativa",
    event: "Seminario Internacional de Derecho Administrativo",
    organizer: "Colegio de Abogados y Abogadas de Costa Rica",
    description:
      "Intervención del Dr. Óscar Eduardo González Camacho en la mesa redonda «El control de la discrecionalidad en la jurisprudencia contencioso administrativa costarricense: análisis crítico», dentro del Seminario Internacional de Derecho Administrativo.",
    intervencion: [0, 2002],
    resumen:
      "El Dr. González Camacho concibe la discrecionalidad administrativa, en términos prácticos, como la elección ponderada entre varias alternativas frente a un motivo dado, y la sitúa dentro de una discrecionalidad pública que comprende también la legislativa y la jurisdiccional; señala esta última, presente en la ponderación de medidas cautelares, costas o incumplimientos contractuales, como tema pendiente. Defiende la discrecionalidad como imprescindible para administrar, siempre que no degenere en arbitrariedad. Declara haber cambiado de criterio: hoy sostiene que los conceptos jurídicos indeterminados generan márgenes de discrecionalidad y que la tesis de la solución única choca con la realidad; agrega que los fines secundarios del acto también dejan margen. Considera que los límites de la discrecionalidad no forman una lista cerrada y critica el artículo 16 de la Ley General de la Administración Pública por limitarla con criterios metajurídicos que el juez debe aplicar como si fueran jurídicos, lo que a su juicio podría plantear dudas de constitucionalidad. Distingue la oportunidad, ligada al tiempo, de la conveniencia, ligada a los efectos sobre medios y fines, y ubica ambas en el núcleo que el juez no puede controlar. Señala como retos el control en el derecho de la regulación, en especial de tarifas y fórmulas tarifarias, las medidas cautelares positivas, la fijación de límites concretos en sentencia, las omisiones y la discrecionalidad técnica.",
  },
  {
    id: "o5TwVynhOY8",
    fecha: "2020-06-14",
    title: "Efectos jurídicos de la contratación administrativa en la época de la pandemia",
    event: "Ciclo de videoconferencias sobre los efectos jurídicos de la pandemia COVID-19",
    organizer: "Universidad Escuela Libre de Derecho",
    description:
      "Seminario web del ciclo de videoconferencias de la Universidad Escuela Libre de Derecho sobre los efectos jurídicos de la pandemia COVID-19. Al empezar, el Dr. Óscar Eduardo González Camacho propuso titular su exposición «El régimen jurídico en períodos excepcionales».",
    intervencion: [115, 4595],
    resumen:
      "El Dr. González Camacho propone titular su exposición como el régimen jurídico en períodos excepcionales. Define la urgencia como una circunstancia de hecho, previsible o imprevisible, humana o natural, que pone en peligro bienes esenciales de la colectividad y obliga a actuar con reglas distintas de las ordinarias. Sostiene que esa ruptura del esquema normal la autoriza el propio ordenamiento, por lo que carece de antijuridicidad, e implica una flexibilización normativa y un reacomodo en la escala de los principios. Distingue urgencias tipificadas y no tipificadas, y medidas procedimentales y sustantivas. Fija como límites infranqueables los derechos humanos, los derechos constitucionales, salvo suspensión de garantías por los cauces constitucionales, y los principios generales del derecho, con control previo de la Contraloría y control jurisdiccional posterior, que según el artículo 226 de la Ley General de la Administración Pública alcanza la gravedad y la proporcionalidad de la medida. En contratación administrativa explica que la urgencia permite prescindir de formalidades o crear procedimientos sustitutivos con autorización previa, sin suprimir la probidad ni la selección de la mejor oferta, deberes que a su juicio se intensifican. Repasa además el presupuesto, las licencias, los servicios públicos y los arrendamientos. En la ronda de preguntas critica el sistema vigente de contratación y aboga por un derecho simple y flexible al servicio del interés público.",
  },
  {
    id: "LrT-ofnCZoE",
    fecha: "2024-06-17",
    title: "Diálogo entre jueces y litigantes sobre las medidas cautelares",
    event: "Seminario «Medidas cautelares en el contencioso administrativo», día 1",
    organizer: "Colegio de Abogados y Abogadas de Costa Rica",
    description:
      "Participación del Dr. Óscar Eduardo González Camacho en el panel de diálogo entre jueces y litigantes sobre el impacto y la eficacia de las medidas cautelares, en el primer día del seminario «Medidas cautelares en el contencioso administrativo» del Colegio de Abogados y Abogadas de Costa Rica.",
    intervencion: [5605, 7025],
    resumen:
      "En el segundo panel de la jornada, un diálogo entre jueces y litigantes sobre la eficacia de las medidas cautelares, el Dr. González Camacho sostiene que el capítulo cautelar del Código Procesal Contencioso-Administrativo es de los mejores del texto y requiere pocos ajustes, que los institutos medulares del Código funcionan y que los problemas principales están en el procedimiento, la organización y la gestión. Ante la idea de un uso excesivo de las cautelares, prefiere ese riesgo a una restricción previa y confía al juez la tarea de filtrarlas. Defiende la contracautela y critica su aplicación inadecuada, a la vez que advierte sobre cautelares que causan daños a terceros. Reconoce aciertos de la jurisprudencia del Tribunal de Apelaciones y formula críticas: la invocación genérica del interés público para denegar, la confusión entre la apariencia de buen derecho y el requisito legal de que la demanda no sea temeraria, la práctica de no resolver la cautelar cuando se opone una excepción de incompetencia, el rigor probatorio impropio de un conocimiento sumario, el tratamiento deficiente de las cautelares preventivas frente a la amenaza de daño y el escaso uso de las cautelares positivas. Propone plazos de audiencia más cortos en casos urgentes y recuerda que en la Sala Primera llegaron a darse audiencias de pocas horas.",
  },
  {
    id: "704meiyKlOY",
    fecha: "2015-09-29",
    title: "El control de las conductas omisivas conforme al CPCA",
    event: "Seminario «El aporte sustancial del Código Procesal Contencioso Administrativo»",
    organizer: "Colegio de Abogados y Abogadas de Costa Rica",
    description:
      "Intervención del Dr. Óscar Eduardo González Camacho en la mesa redonda «Experiencias en el control de las conductas omisivas conforme al Código Procesal Contencioso Administrativo», dentro del seminario «El aporte sustancial del Código Procesal Contencioso Administrativo» (Colegio de Abogados y Abogadas de Costa Rica, 24 de setiembre de 2015).",
    intervencion: [0, 1869],
    resumen:
      "El Dr. González Camacho precisa el concepto de inactividad administrativa: la vincula al incumplimiento de obligaciones, la separa de la simple dilación y de la eficacia, y considera inexacto encuadrarla solo como funcionamiento anormal. Identifica como elementos la obligación, la inercia administrativa y la eventual lesión, y deja abierta la discusión sobre el control de la inactividad sin lesión directa a una situación jurídica subjetiva. Agrega como posible origen el incumplimiento de pronunciamientos jurisdiccionales internacionales. Distingue la inactividad formal, equivalente al silencio, de la material, que subdivide en jurídica y fáctica, y añade la diferencia entre inactividad originaria y sobrevenida. Recorre la omisión frente a la discrecionalidad, la potestad reglamentaria, el agotamiento de la vía en materia municipal y de contratación, las medidas cautelares, la legalidad presupuestaria y la responsabilidad patrimonial. Propone que el juez, ante el incumplimiento persistente de una orden judicial, pueda dictar disposiciones temporales, y lamenta la timidez frente a las cautelares positivas. Alerta sobre la inactividad de los órganos de regulación y fiscalización. Al final expresa preocupación por la ampliación de la apelación mediante remisión al proceso civil, la caducidad del proceso aplicada por analogía, el rigor de casación exigido en apelaciones de procesos de la ley anterior y el uso de la incompetencia para frenar las medidas cautelares.",
  },
  {
    id: "nREXX_oROBY",
    fecha: "2023-07-20",
    title: "Conversatorio sobre el contencioso administrativo",
    event: "Conversatorio con el Dr. Jaime Rodríguez-Arana Muñoz",
    organizer: "Universidad Escuela Libre de Derecho",
    description:
      "Conversatorio de la Universidad Escuela Libre de Derecho sobre el contencioso administrativo con el Dr. Jaime Rodríguez-Arana Muñoz, catedrático de la Universidad de La Coruña, y el Dr. Óscar Eduardo González Camacho, que expone en la segunda mitad sobre los aportes, las deficiencias y las reformas pendientes de la jurisdicción costarricense.",
    intervencion: [3138, 6180],
    resumen:
      "En un conversatorio compartido con el profesor Jaime Rodríguez-Arana Muñoz, el Dr. González Camacho expone que el derecho es un instrumento para el orden, la paz y la justicia, y que la jurisdicción contencioso-administrativa equilibra potestades y derechos y sirve de valladar frente al abuso del poder. Sostiene que la Sala Constitucional, al remitir asuntos a vías de legalidad, ha ido permitiendo en la práctica un control difuso de constitucionalidad, lo que aumenta el peso del contencioso. Repasa los aportes del Código Procesal Contencioso-Administrativo: control universal de la conducta administrativa, incluidas las omisiones; legitimación por interés legítimo; cautelares atípicas; pretensiones amplias; oralidad y ejecución de sentencia reforzada. Señala institutos que no han funcionado, como el proceso unificado, el consensuado, el preferente, la extensión de jurisprudencia y la casación en interés de la ley, y considera necesaria una reforma sobre el plazo para dictar sentencia, la prueba pericial, los jueces unipersonales, la incompetencia frente a las cautelares, la apelación y el amparo de legalidad. Propone aplicar el principio de unidad jurisdiccional para importar figuras como los procesos de fueros laborales y reclama los tribunales regionales que el Código ya autoriza. Advierte que la reforma legal es insuficiente sin gestión, liderazgo y formación, y relaciona con esas carencias la mora judicial y el conservadurismo de algunos jueces.",
  },
  {
    id: "0ZKzZrXZiKY",
    fecha: "2025-10-03",
    title: "Mesa redonda: el nuevo régimen del servicio público",
    event: "Mesa redonda del 50.º aniversario del Instituto de Investigaciones Jurídicas",
    organizer: "Instituto de Investigaciones Jurídicas, UCR",
    description:
      "Participación del Dr. Óscar Eduardo González Camacho en la mesa redonda sobre el nuevo régimen del servicio público, organizada por el Instituto de Investigaciones Jurídicas de la Universidad de Costa Rica en su 50.º aniversario, con el MSc. Daniel Castro Acuña y el Dr. José Roberto Garita Navarro y la moderación del Dr. Alex Rojas Ortega.",
    intervencion: [1610, 3235],
    resumen:
      "El Dr. González Camacho propone desligar la noción de servicio público de la publicatio y de la presencia de la Administración como titular, y reconstruirla sobre la actividad y desde la perspectiva del usuario. Ilustra su planteamiento con la diferencia de trato entre la educación y la salud públicas y las privadas, actividades que considera equivalentes que hoy se rigen por reglas muy distintas según quién las presta. Indica que en Europa la noción funcional ya está aceptada. Expone sus consecuencias prácticas: los privados que presten la actividad quedarían sujetos a regulación sectorial; su título podría ser la autorización o la licencia; la relación podría regirse por el derecho público y conocerse en lo contencioso-administrativo; y cabría la responsabilidad de la Administración por autorizar o licenciar. Apoya la tesis en los artículos 2 y 3 de la Ley contra la Corrupción y el Enriquecimiento Ilícito en la Función Pública y en el artículo 4 de la Ley General de la Administración Pública. Sostiene que el artículo 5 de la Ley de la ARESEP se limita a habilitar la regulación y el control de las actividades que enumera, sin definir qué es servicio público, y critica la figura del servicio público impropio adoptada por la Sala Constitucional. Concluye que el concepto debe liberarse de posiciones ideológicas y partir del usuario.",
  },
  {
    id: "nEXbbcEQoP8",
    fecha: "2026-09-22",
    title: "La reforma a la jurisdicción contencioso-administrativa",
    event: "VII Jornadas de Investigación del Instituto de Investigaciones Jurídicas",
    organizer: "Instituto de Investigaciones Jurídicas, UCR",
    description:
      "Exposición del Dr. Óscar Eduardo González Camacho en las Séptimas Jornadas de Investigación del Instituto de Investigaciones Jurídicas de la Universidad de Costa Rica, con la primera fase, de diagnóstico, del proyecto C5-287 sobre la reforma a la jurisdicción contencioso-administrativa y una ronda de preguntas al final.",
    intervencion: [25, 4850],
    resumen:
      "El Dr. González Camacho presenta la primera fase del proyecto C5-287 del Instituto de Investigaciones Jurídicas, un diagnóstico de la jurisdicción contencioso-administrativa basado en el Informe Estado de la Nación, en estadísticas del Poder Judicial y en la revisión propia de miles de resoluciones de todas las instancias. Concluye que el ingreso de procesos ordinarios se ha mantenido estable y que la dilación obedece al peso creciente del amparo de legalidad y a los tiempos muertos que el Código dejó sin plazo. Advierte que la ejecución de sentencia llega a durar más que el proceso de conocimiento y que, descontada la inflación, el presupuesto de la jurisdicción se redujo. Matiza su crítica previa sobre un sesgo favorable a la Administración: las demandas de particulares prosperan en una proporción baja y las de la Administración en una mucho mayor, con reservas sobre su lectura. Señala la dispersión de criterios en materia cautelar desde que se distribuyó entre todos los jueces y la menor dotación frente a la jurisdicción civil, y critica el acuerdo de Corte Plena que prioriza asuntos de funcionarios judiciales, por afectar la igualdad y la independencia judicial. Califica el problema de multicausal; en las preguntas señala la mora judicial como el problema central y echa de menos un proceso breve para asuntos de poca cuantía.",
  },
  {
    id: "uyj9G96ib4s",
    fecha: "2013-11-20",
    title: "El principio de no regresión",
    event: "Congreso de Derecho Ambiental 2013",
    organizer: "Colegio de Abogados y Abogadas de Costa Rica",
    description:
      "Intervención del Dr. Óscar Eduardo González Camacho en la mesa redonda «El principio de No Regresión», en el Congreso de Derecho Ambiental 2013: La Legislación Actual y la que Requiere el País para Garantizar la Sostenibilidad (20 de noviembre de 2013).",
    intervencion: [0, 1539],
    resumen:
      "El Dr. González Camacho se declara partidario del principio de no regresión y se propone delimitar sus contornos. Plantea que la dificultad central es medir cuándo existe una disminución efectiva, y advierte que le preocupa más la regresión encubierta y progresiva, amparada en criterios técnicos, que la derogatoria abierta. Cuestiona si se trata de un principio o de una regla y defiende que los principios ocupan la base del ordenamiento y cumplen una función más amplia que la supletoria. Califica la no regresión como un límite a la obligación de hacer y la distingue de una obligación de no hacer, de la inaplicación de normas y de la omisión legislativa o administrativa. La fundamenta en la protección de derechos del colectivo y de la humanidad, incluidas las generaciones futuras, y señala que alcanza a los derechos humanos en general. Plantea interrogantes sobre la soberanía del legislador, la sujeción de la jurisprudencia y la del poder constituyente derivado, supuesto en el que hablaría de normas pétreas de carácter evolutivo. Critica la idea del juez como perito de peritos en el control de la discrecionalidad técnica y comenta una disposición de la legislación forestal como ejemplo de actos administrativos con refuerzo de ley. Concluye que el Estado de derecho moderno ha alcanzado estados jurídicos individuales y colectivos que no admiten retroceso.",
  },
];

/* De la más reciente a la más antigua: quien llega al perfil quiere ver
   primero lo último que dijo. */
const EN_ORDEN = [...VIDEOS].sort((a, b) => b.fecha.localeCompare(a.fecha));

/* Duración de cada video en YouTube (ISO 8601), tomada del propio video el
   31-10-2026. */
/* 5618 → «1:33:38»; 1610 → «26:50». */
function minutos(seg: number) {
  const h = Math.floor(seg / 3600);
  const m = Math.floor((seg % 3600) / 60);
  const s = String(seg % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${s}` : `${m}:${s}`;
}

const DURACION: Record<string, string> = {"K5YjYwaqAGU": "PT32M0S", "95hHm6MiLOQ": "PT33M22S", "o5TwVynhOY8": "PT1H17M34S", "LrT-ofnCZoE": "PT2H8M14S", "704meiyKlOY": "PT31M10S", "nREXX_oROBY": "PT1H44M52S", "0ZKzZrXZiKY": "PT1H46M35S", "nEXbbcEQoP8": "PT1H21M27S", "uyj9G96ib4s": "PT25M40S"};

export function OscarConferencias() {
  return (
    <section className="relative bg-surface py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream/[0.08] to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <AnimatedEntry>
          <RunningHead title="Conferencias y ponencias" />
        </AnimatedEntry>

        <AnimatedEntry delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl tracking-tighter leading-[1.05] text-cream mb-12">
            En{" "}
            <span className="text-burgundy-light">video</span>
          </h2>
        </AnimatedEntry>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EN_ORDEN.map((video) => (
            <AnimatedEntry key={video.id} delay={0.2}>
              <div className="rounded-xl border border-cream/[0.06] bg-cream/[0.02] overflow-hidden">
                {/* Lite YouTube — thumbnail until click */}
                <LiteYouTube
                  id={video.id}
                  title={video.title}
                  start={video.intervencion[0] >= 60 ? video.intervencion[0] : undefined}
                />
                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <VideoCamera
                      size={16}
                      weight="duotone"
                      className="text-burgundy-light shrink-0"
                    />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-cream/65">
                      {video.organizer} · {video.fecha.slice(0, 4)}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-cream">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream/65 leading-relaxed">
                    {video.description}
                  </p>
                  <details className="group mt-4 border-t border-cream/[0.06] pt-4">
                    <summary className="cursor-pointer list-none text-[13px] font-medium text-cream/85 hover:text-cream transition-colors [&::-webkit-details-marker]:hidden">
                      Resumen de su intervenci&oacute;n
                      <span className="ml-1.5 font-normal text-cream/65">
                        ({minutos(video.intervencion[0])}&ndash;{minutos(video.intervencion[1])})
                      </span>
                      <span aria-hidden="true" className="ml-1.5 inline-block text-burgundy-light transition-transform group-open:rotate-90">&rsaquo;</span>
                    </summary>
                    <p className="mt-3 text-sm text-cream/75 leading-relaxed">
                      {video.resumen}
                    </p>
                  </details>
                </div>
              </div>
            </AnimatedEntry>
          ))}
        </div>
      </div>

      {/* JSON-LD VideoObject — para que Google e IA indexen los videos */}
      {EN_ORDEN.map((video) => (
        <script
          key={video.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: video.title,
              description: `${video.description} ${video.resumen}`,
              thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
              /* Con zona horaria, como pide Google (B-S2). */
              uploadDate: video.fecha.includes("T") ? video.fecha : `${video.fecha}T08:00:00-06:00`,
              embedUrl: `https://www.youtube.com/embed/${video.id}`,
              duration: DURACION[video.id],
              publisher: {
                "@type": "Organization",
                name: video.organizer,
              },
              contributor: {
                "@type": "Person",
                name: "Óscar Eduardo González Camacho",
                honorificPrefix: "Dr.",
                "@id": "https://www.corporaciongc.com/abogados/oscar-gonzalez#person",
              },
              hasPart: {
                "@type": "Clip",
                name: "Intervención del Dr. Óscar Eduardo González Camacho",
                startOffset: video.intervencion[0],
                endOffset: video.intervencion[1],
                url: `https://www.youtube.com/watch?v=${video.id}&t=${video.intervencion[0]}`,
              },
            }),
          }}
        />
      ))}
    </section>
  );
}
