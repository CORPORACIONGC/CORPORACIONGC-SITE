import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PRACTICE_AREA_PAGES, FIRM } from "@/lib/constants";
import {
  ArrowLeft,
  Scales,
  Gavel,
  ShieldCheck,
  BookOpen,
} from "@phosphor-icons/react/dist/ssr";

export function generateStaticParams() {
  return PRACTICE_AREA_PAGES.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = PRACTICE_AREA_PAGES.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `${area.title} en Costa Rica | Abogados · Corporación GC`,
    description: `${area.description} Abogados especialistas en ${area.title} en Costa Rica.`,
    alternates: {
      canonical: `${FIRM.url}/areas/${area.slug}`,
    },
    openGraph: {
      title: `${area.title} en Costa Rica | Corporación GC`,
      description: `${area.description} Abogados especialistas en ${area.title} en Costa Rica.`,
      url: `${FIRM.url}/areas/${area.slug}`,
      siteName: FIRM.name,
      locale: FIRM.locale,
      type: "website",
    },
  };
}

/* ─── Componente para citar artículos legales ─── */
function LegalRef({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] tracking-wide bg-burgundy/[0.08] text-burgundy dark:text-burgundy-light font-medium">
      <BookOpen size={12} weight="duotone" className="shrink-0" />
      {children}
    </span>
  );
}

/* ─── Bloque de instrumento procesal ─── */
function Instrumento({
  titulo,
  fundamento,
  children,
}: {
  titulo: string;
  fundamento: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-8 border-b border-cream/[0.06] last:border-b-0">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <h3 className="font-display text-base md:text-lg text-cream font-medium">
          {titulo}
        </h3>
        <LegalRef>{fundamento}</LegalRef>
      </div>
      <div className="text-sm text-cream/60 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

/* ─── Contenido de cada área ─── */
const AREA_CONTENT: Record<string, React.ReactNode> = {
  "litigio-contencioso-administrativo": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          La jurisdicción contencioso-administrativa es el mecanismo mediante el cual los
          administrados pueden impugnar judicialmente las conductas de la Administración Pública.
          El Código Procesal Contencioso Administrativo (CPCA, Ley N.° 8508 del 28 de abril de
          2006) regula íntegramente este proceso y constituye el instrumento central de la práctica
          de Corporación GC. Nuestro director, el Dr. Óscar Eduardo González Camacho, participó
          en su redacción.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          El litigio contencioso-administrativo comprende distintos tipos de procesos y pretensiones,
          cada uno diseñado para una finalidad específica. A continuación se explican los
          instrumentos procesales que conforman esta jurisdicción.
        </p>
      </section>

      <Instrumento titulo="Demanda contencioso-administrativa" fundamento="CPCA, arts. 10 a 16">
        <p>
          La demanda contencioso-administrativa es el acto procesal mediante el cual una persona
          física o jurídica —o incluso una entidad pública— acude ante el Tribunal Contencioso
          Administrativo para impugnar una conducta administrativa que le causa un perjuicio. El
          artículo 10 del CPCA establece las pretensiones que pueden formularse: declaración de
          disconformidad de la conducta administrativa con el ordenamiento jurídico, anulación total
          o parcial de actos administrativos, reconocimiento de situaciones jurídicas
          individualizadas, constitución de nuevas situaciones jurídicas, y la condena a la
          Administración al pago de daños y perjuicios.
        </p>
        <p>
          El artículo 12 del CPCA detalla los requisitos formales de la demanda, incluyendo la
          identificación del demandante, la conducta impugnada, los hechos y fundamentos de
          derecho, y las pretensiones concretas. La demanda puede dirigirse contra el Estado, los
          entes públicos, las empresas públicas y los sujetos de derecho privado que ejerzan
          función administrativa (art. 1 CPCA).
        </p>
      </Instrumento>

      <Instrumento titulo="Proceso de plena jurisdicción" fundamento="CPCA, art. 10.1">
        <p>
          El proceso de plena jurisdicción permite al Tribunal no solo anular el acto administrativo
          impugnado, sino también restablecer la situación jurídica del administrado y condenar
          a la Administración a una prestación determinada —ya sea de hacer, no hacer o dar—,
          incluyendo el pago de daños y perjuicios. A diferencia del proceso de pura anulación,
          aquí el juez tiene facultades amplias para dictar sentencia condenatoria.
        </p>
        <p>
          El artículo 122 del CPCA establece que la sentencia estimatoria podrá declarar la
          disconformidad de la conducta administrativa, anular total o parcialmente el acto o
          disposición, reconocer o restablecer una situación jurídica individualizada, fijar la
          indemnización de daños y perjuicios, y establecer plazos para el cumplimiento de
          obligaciones específicas.
        </p>
      </Instrumento>

      <Instrumento titulo="Proceso de pura anulación" fundamento="CPCA, art. 10.1.a">
        <p>
          El proceso de pura anulación tiene por objeto exclusivo obtener la declaración de
          nulidad de un acto administrativo, una disposición de carácter general o una actuación
          material constitutiva de vía de hecho, sin que el demandante pretenda el reconocimiento
          de una situación jurídica individualizada ni una condena pecuniaria. Es la vía adecuada
          cuando el interés del administrado se satisface con la sola eliminación del acto del
          ordenamiento jurídico.
        </p>
      </Instrumento>

      <Instrumento titulo="Demanda de responsabilidad patrimonial del Estado" fundamento="Constitución, art. 41; CPCA, art. 2">
        <p>
          El artículo 41 de la Constitución Política establece que toda persona tiene derecho a
          obtener reparación por los daños que sufra en sus bienes, derechos o intereses. En
          materia administrativa, el artículo 190 de la Ley General de la Administración Pública
          dispone que la Administración responde por todos los daños causados por su funcionamiento
          legítimo o ilegítimo, normal o anormal. La demanda de responsabilidad patrimonial se
          interpone ante el Tribunal Contencioso Administrativo conforme al artículo 2 del CPCA,
          que atribuye a esta jurisdicción el conocimiento de las pretensiones indemnizatorias
          contra la Administración.
        </p>
        <p>
          Esta demanda procede tanto por funcionamiento anormal (error, negligencia, ilegalidad)
          como por funcionamiento normal cuando se produce un sacrificio especial al administrado
          que excede las cargas ordinarias de la vida en sociedad.
        </p>
      </Instrumento>

      <Instrumento titulo="Proceso ejecutivo" fundamento="CPCA, arts. 149 a 150">
        <p>
          El proceso ejecutivo regulado en los artículos 149 y 150 del CPCA permite la ejecución
          forzosa de sentencias dictadas contra la Administración Pública cuando esta incumple
          voluntariamente el fallo. Este proceso es particularmente relevante porque la ejecución
          de condenas contra el Estado presenta desafíos específicos: el principio de
          inembargabilidad de los bienes de dominio público, los plazos presupuestarios para el
          pago de indemnizaciones y la posibilidad de sustitución de la obligación original cuando
          su cumplimiento in natura resulte imposible.
        </p>
      </Instrumento>

      <Instrumento titulo="Legitimación y plazos" fundamento="CPCA, arts. 10.2 y 39">
        <p>
          Está legitimado para interponer una demanda contencioso-administrativa toda persona —
          física o jurídica— que invoque la lesión de un derecho subjetivo o de un interés
          legítimo (art. 10.2 CPCA). También puede accionar la Administración Pública contra
          sus propios actos cuando pretenda su revisión en vía jurisdiccional (proceso de lesividad).
          El plazo general de caducidad para interponer la demanda es de un año contado desde la
          notificación del acto o desde que se tuvo conocimiento efectivo de la conducta impugnada,
          según lo dispuesto por el artículo 39 del CPCA. En materia de responsabilidad patrimonial,
          el plazo es también de un año desde que se produjo el daño o desde que el afectado tuvo
          conocimiento efectivo de este.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre el litigio contencioso-administrativo
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo se demanda al Estado en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Para demandar al Estado o a cualquier ente público en Costa Rica se debe interponer
              una demanda contencioso-administrativa ante el Tribunal Contencioso Administrativo,
              conforme al Código Procesal Contencioso Administrativo (CPCA, Ley N.° 8508). La
              demanda debe identificar la conducta administrativa impugnada —ya sea un acto
              administrativo, una omisión o una actuación material—, exponer los hechos y
              fundamentos de derecho, y formular pretensiones concretas. Pueden demandarse la
              anulación del acto, el reconocimiento de derechos, la condena al pago de daños y
              perjuicios, y la orden de realizar o cesar una conducta. No siempre se requiere
              agotar la vía administrativa antes de demandar. El plazo general de caducidad es
              de un año desde la notificación del acto o desde que se tuvo conocimiento de la
              conducta lesiva (art. 39 CPCA). Corporación GC asesora en cada etapa de este proceso.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cuánto tiempo tengo para presentar una demanda contencioso-administrativa?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El plazo general para interponer una demanda contencioso-administrativa en Costa Rica
              es de un año, contado desde la notificación del acto administrativo o desde que el
              afectado tuvo conocimiento efectivo de la conducta impugnada, según el artículo 39
              del CPCA. En materia de responsabilidad patrimonial del Estado, el plazo también es
              de un año desde que se produjo el daño o desde que el perjudicado lo conoció. Es
              importante no confundir este plazo con el de los recursos administrativos previos, que
              tienen plazos más cortos. El vencimiento del plazo produce la caducidad del derecho a
              demandar, por lo que se recomienda actuar con prontitud. Existen excepciones: cuando
              la lesión es continuada o se trata de vías de hecho, los plazos pueden computarse de
              forma distinta. Es fundamental contar con asesoría legal especializada para evaluar
              la viabilidad temporal de la demanda antes de que el plazo transcurra.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué puede obtener un ciudadano en un proceso contencioso-administrativo?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El proceso contencioso-administrativo en Costa Rica permite obtener resultados amplios
              según el artículo 122 del CPCA. En un proceso de plena jurisdicción, el Tribunal puede:
              declarar la disconformidad de la conducta administrativa con el ordenamiento jurídico,
              anular total o parcialmente actos administrativos, reconocer o restablecer situaciones
              jurídicas individualizadas, condenar a la Administración al pago de daños y perjuicios
              (incluyendo daño moral), y ordenar a la Administración realizar una acción específica o
              cesar una conducta. En un proceso de pura anulación, el efecto se limita a eliminar el
              acto del ordenamiento jurídico. También pueden solicitarse medidas cautelares para
              proteger los derechos del demandante durante el proceso. El CPCA superó el sistema
              anterior, que era predominantemente anulatorio, para establecer una jurisdicción con
              poderes plenos de tutela de los derechos de los administrados frente al poder público.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Es necesario agotar la vía administrativa antes de demandar?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              No siempre. El CPCA flexibilizó sustancialmente el requisito de agotamiento de la vía
              administrativa. Aunque en muchos casos sigue siendo necesario interponer los recursos
              administrativos correspondientes (revocatoria, apelación) antes de acudir al Tribunal,
              existen importantes excepciones. El agotamiento no se exige cuando se impugnan vías de
              hecho, omisiones de la Administración o actuaciones materiales. Tampoco se requiere cuando
              opera el silencio administrativo positivo o cuando la propia ley dispensa expresamente
              el agotamiento. En materia de contratación pública, las reglas específicas de la Ley N.°
              9986 determinan cuándo se entiende agotada la vía. La determinación de si el agotamiento
              es necesario en cada caso concreto requiere un análisis jurídico especializado, pues un
              error en este punto puede resultar en la inadmisibilidad de la demanda. Corporación GC
              evalúa esta cuestión como parte del análisis estratégico previo a cualquier litigio.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "medidas-cautelares": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          Las medidas cautelares en la jurisdicción contencioso-administrativa son instrumentos de
          tutela urgente que permiten proteger los derechos del administrado mientras se resuelve
          el proceso principal. Están reguladas en los artículos 19 a 30 del CPCA y constituyen
          una de las innovaciones más significativas del código, pues superaron la limitación del
          sistema anterior que solo permitía la suspensión del acto administrativo.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Corporación GC cuenta con una práctica especializada en tutela cautelar, con particular
          énfasis en las medidas provisionalísimas que requieren actuación inmediata ante
          situaciones de urgencia extrema.
        </p>
      </section>

      <Instrumento titulo="Medida cautelar provisionalísima" fundamento="CPCA, art. 21">
        <p>
          La medida cautelar provisionalísima es el instrumento de tutela más urgente que contempla
          el ordenamiento contencioso-administrativo costarricense. El artículo 21 del CPCA faculta
          al juez tramitador a dictar una medida cautelar de forma inaudita parte —sin audiencia
          previa a la parte contraria— cuando concurra una situación de urgencia extrema que no
          admita la demora propia del trámite ordinario de las cautelares.
        </p>
        <p>
          Esta medida puede dictarse incluso antes de la interposición de la demanda, cuando la
          amenaza de daño es tan inminente que cualquier dilación podría tornar irreparable el
          perjuicio. Una vez dictada, el juez debe convocar a las partes a una audiencia oral
          dentro de las cuarenta y ocho horas siguientes para decidir sobre su mantenimiento,
          modificación o revocatoria. Si no se interpone la demanda dentro del plazo que fije el
          tribunal, la medida queda sin efecto.
        </p>
      </Instrumento>

      <Instrumento titulo="Medida cautelar ante causam" fundamento="CPCA, arts. 19 a 30">
        <p>
          La medida cautelar ante causam permite solicitar protección jurisdiccional antes de
          interponer la demanda principal. El CPCA faculta a cualquier persona que pretenda
          demandar ante la jurisdicción contencioso-administrativa a solicitar la adopción de
          medidas cautelares con carácter previo a la presentación de la demanda. El solicitante
          debe acreditar los presupuestos de urgencia y apariencia de buen derecho propios de
          toda medida cautelar.
        </p>
        <p>
          Si el juez concede la medida ante causam, fijará un plazo para que el solicitante
          interponga la demanda principal. Si la demanda no se interpone dentro de dicho plazo,
          la medida cautelar se levanta de pleno derecho y el solicitante responde por los daños
          y perjuicios que haya causado.
        </p>
      </Instrumento>

      <Instrumento titulo="Medida cautelar definitiva" fundamento="CPCA, arts. 19 y 20">
        <p>
          La medida cautelar definitiva se solicita dentro de un proceso contencioso-administrativo
          ya instaurado. El artículo 19 del CPCA establece un sistema abierto de medidas cautelares:
          el juez puede adoptar cualquier tipo de medida que considere adecuada y proporcionada
          para garantizar provisionalmente la efectividad de la sentencia de fondo. El catálogo
          incluye, entre otras, la suspensión de la ejecución del acto administrativo impugnado,
          la orden de hacer o no hacer dirigida a la Administración, y cualquier medida positiva
          o conservativa necesaria.
        </p>
        <p>
          El artículo 20 del CPCA exige la concurrencia de dos presupuestos: el periculum in mora
          (peligro de que el transcurso del proceso torne ineficaz la sentencia o cause un daño
          grave al solicitante) y el fumus boni iuris (apariencia de que la pretensión de fondo
          tiene visos de prosperar). El juez debe ponderar, además, que la medida no cause un
          perjuicio al interés público evidentemente superior al daño que se busca evitar.
        </p>
      </Instrumento>

      <Instrumento titulo="Suspensión del acto administrativo" fundamento="CPCA, art. 19.1">
        <p>
          La suspensión de los efectos del acto administrativo impugnado es la medida cautelar
          clásica del contencioso administrativo. Consiste en la paralización temporal de la
          eficacia del acto hasta que se dicte sentencia de fondo. Es procedente cuando la
          ejecución del acto podría causar daños de difícil o imposible reparación. El artículo
          19 del CPCA la incluye expresamente como una de las medidas que el juez puede dictar.
        </p>
        <p>
          En materia de contratación pública, la suspensión puede recaer sobre procedimientos de
          licitación en curso, adjudicaciones o la ejecución de contratos administrativos,
          impidiendo que se consoliden situaciones jurídicas que podrían resultar contrarias a
          derecho.
        </p>
      </Instrumento>

      <Instrumento titulo="Presupuestos de la tutela cautelar" fundamento="CPCA, art. 20">
        <p>
          El artículo 20 del CPCA establece los requisitos que debe acreditar quien solicita una
          medida cautelar. El periculum in mora exige demostrar que existe un peligro cierto de
          que la demora del proceso principal cause un perjuicio grave o irreparable al solicitante,
          o que haga ineficaz la sentencia estimatoria. El fumus boni iuris requiere que la
          pretensión de fondo tenga una apariencia razonable de fundamento jurídico, sin que el
          juez deba pronunciarse sobre el fondo del asunto.
        </p>
        <p>
          Además, el juez debe realizar una ponderación de intereses: la medida no debe causar
          al interés público un perjuicio evidentemente desproporcionado respecto del beneficio
          que obtiene el solicitante. Esta ponderación no es equivalente a la antigua prevalencia
          automática del interés público; el CPCA superó ese paradigma.
        </p>
      </Instrumento>

      <Instrumento titulo="Contracautela" fundamento="CPCA, art. 25">
        <p>
          El artículo 25 del CPCA faculta al juez a exigir al solicitante de la medida cautelar
          la constitución de una garantía —contracautela— para responder por los daños y
          perjuicios que la medida pueda causar a la parte contraria si la pretensión de fondo
          resulta desestimada. La contracautela no es obligatoria en todos los casos: el juez
          la dispone cuando lo considere proporcionado, atendiendo a la naturaleza de la medida
          y a la condición de las partes.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre medidas cautelares
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué es una medida cautelar provisionalísima en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La medida cautelar provisionalísima es el instrumento de protección más urgente del
              proceso contencioso-administrativo costarricense, regulado en el artículo 21 del CPCA
              (Ley N.° 8508). Permite al juez dictar una orden de protección de forma inmediata y sin
              audiencia previa a la parte contraria (inaudita parte) cuando existe una situación de
              urgencia extrema que no admite la demora del trámite ordinario. Lo excepcional de este
              instrumento es que puede solicitarse incluso antes de presentar la demanda, cuando la
              amenaza de daño es tan inminente que cualquier dilación haría irreparable el perjuicio.
              Una vez dictada, el juez convoca a las partes a una audiencia oral dentro de las 48 horas
              siguientes para decidir si la mantiene, modifica o revoca. Si no se interpone la demanda
              en el plazo que fije el tribunal, la medida queda sin efecto automáticamente.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cuáles son los requisitos para obtener una medida cautelar contra el Estado?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Para obtener una medida cautelar en la jurisdicción contencioso-administrativa
              costarricense se deben acreditar dos presupuestos fundamentales establecidos en el
              artículo 20 del CPCA. Primero, el periculum in mora: demostrar que existe un peligro
              cierto de que la demora del proceso principal cause un perjuicio grave o irreparable,
              o que haga ineficaz la eventual sentencia favorable. Segundo, el fumus boni iuris:
              evidenciar que la pretensión de fondo tiene una apariencia razonable de fundamento
              jurídico, sin que el juez deba pronunciarse sobre el mérito del caso. Además, el juez
              realiza una ponderación de intereses: la medida no debe causar al interés público un
              perjuicio evidentemente desproporcionado respecto del beneficio para el solicitante. El
              CPCA superó el paradigma anterior donde el interés público prevalecía automáticamente,
              estableciendo un sistema de balance proporcional entre los derechos del administrado y
              el interés general.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Se puede pedir una medida cautelar antes de presentar la demanda?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Sí. El CPCA permite solicitar medidas cautelares ante causam, es decir, antes de
              interponer la demanda contencioso-administrativa. Esta posibilidad es especialmente
              útil cuando la urgencia de la situación no permite esperar a la preparación completa
              de la demanda. El solicitante debe acreditar los mismos presupuestos de toda medida
              cautelar (peligro en la demora y apariencia de buen derecho) y el juez, al concederla,
              fijará un plazo para la interposición de la demanda principal. Si la demanda no se
              presenta dentro de ese plazo, la medida se levanta automáticamente y el solicitante
              responde por los daños y perjuicios que haya causado. En casos de urgencia extrema,
              puede solicitarse directamente una medida provisionalísima ante causam (art. 21 CPCA),
              que se dicta sin audiencia previa en cuestión de horas. Corporación GC tiene amplia
              experiencia en la obtención de este tipo de medidas de tutela urgente.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "casacion-sala-primera": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          El recurso de casación contencioso-administrativo es el medio de impugnación
          extraordinario que permite llevar ante la Sala Primera de la Corte Suprema de Justicia
          las sentencias dictadas por el Tribunal Contencioso Administrativo. Está regulado en
          los artículos 134 a 148 del CPCA y constituye la última instancia jurisdiccional en la
          vía ordinaria.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          El Dr. Óscar Eduardo González Camacho fue Magistrado de la Sala Primera durante doce
          años (2002–2014). Corporación GC concentra una práctica relevante en casación
          contencioso-administrativa, con dominio de la técnica casacional y los criterios
          jurisprudenciales vigentes.
        </p>
      </section>

      <Instrumento titulo="Naturaleza del recurso de casación" fundamento="CPCA, art. 134">
        <p>
          El recurso de casación es un medio de impugnación extraordinario que no constituye una
          tercera instancia. Su función no es revisar los hechos del caso, sino verificar que
          la sentencia impugnada fue dictada conforme a derecho. El artículo 134 del CPCA
          establece que son recurribles en casación las sentencias y los autos con carácter de
          sentencia dictados por el Tribunal Contencioso Administrativo en procesos de
          conocimiento. El recurso se interpone ante la Sala Primera de la Corte Suprema de
          Justicia, que es el órgano competente para conocerlo.
        </p>
        <p>
          El recurso de casación exige una técnica rigurosa: el recurrente debe identificar con
          precisión el motivo de casación invocado, la norma presuntamente infringida, y la
          forma en que la infracción incide en la parte dispositiva de la sentencia. Los
          defectos de técnica casacional conducen a la inadmisibilidad del recurso.
        </p>
      </Instrumento>

      <Instrumento titulo="Motivos de casación por razones procesales" fundamento="CPCA, art. 137.a">
        <p>
          El artículo 137, inciso a) del CPCA contempla los vicios procesales que justifican la
          casación. Estos incluyen la violación de normas del debido proceso, la indefensión de
          alguna de las partes, la incongruencia de la sentencia (cuando el juez resuelve sobre
          puntos no sometidos a su conocimiento o deja de resolver sobre pretensiones planteadas),
          la sentencia ultra petita (que concede más de lo pedido), la sentencia extra petita
          (que resuelve algo distinto de lo pedido) y la sentencia citra petita (que omite
          pronunciarse sobre alguna pretensión).
        </p>
        <p>
          También procede la casación cuando se ha incurrido en violación de las normas sobre
          formación de la sentencia, como la falta de fundamentación o la fundamentación
          contradictoria.
        </p>
      </Instrumento>

      <Instrumento titulo="Motivos de casación por razones de fondo" fundamento="CPCA, art. 137.b">
        <p>
          El artículo 137, inciso b) del CPCA permite la casación por violación de normas
          sustantivas, ya sea por violación directa o por violación indirecta. La violación
          directa ocurre cuando el juez aplica una norma que no corresponde, deja de aplicar la
          norma correcta, o interpreta erróneamente la norma aplicable. La violación indirecta
          se produce cuando el juez, como consecuencia de un error en la apreciación de los
          hechos o de la prueba, llega a aplicar incorrectamente la norma sustantiva.
        </p>
        <p>
          La distinción entre violación directa e indirecta es fundamental para la técnica
          casacional, pues determina el tratamiento que la Sala Primera dará al recurso y los
          alcances de su pronunciamiento respecto de los hechos del caso.
        </p>
      </Instrumento>

      <Instrumento titulo="Error de hecho y de derecho en la valoración probatoria" fundamento="CPCA, art. 137.c">
        <p>
          El artículo 137, inciso c) del CPCA habilita la casación cuando el Tribunal ha
          incurrido en error de hecho o de derecho en la valoración de la prueba. El error de
          hecho se configura cuando el juez ignora, distorsiona o altera el contenido de un
          elemento probatorio que consta en el expediente. El error de derecho se presenta cuando
          el juez infringe las reglas de valoración probatoria establecidas por ley —sana crítica
          racional, reglas de la lógica, la ciencia y la experiencia— al otorgar o negar
          credibilidad a determinado medio de prueba.
        </p>
        <p>
          Para que prospere el recurso por este motivo, el error debe ser determinante: debe
          demostrar que, de no haber incurrido en él, el Tribunal habría alcanzado una conclusión
          distinta en la parte dispositiva de la sentencia.
        </p>
      </Instrumento>

      <Instrumento titulo="Preterición de prueba" fundamento="CPCA, art. 137.d">
        <p>
          La preterición de prueba consiste en que el Tribunal omite considerar un elemento
          probatorio que fue debidamente aportado al proceso y que resulta decisivo para la
          resolución del caso. El artículo 137, inciso d) del CPCA la contempla como motivo
          autónomo de casación. No se trata de una mera discrepancia con la valoración del juez,
          sino de la ausencia total de análisis de una prueba que, de haber sido considerada,
          habría modificado el sentido del fallo.
        </p>
      </Instrumento>

      <Instrumento titulo="Casación por interés casacional" fundamento="CPCA, art. 134">
        <p>
          El CPCA introduce la figura del interés casacional como criterio de admisibilidad del
          recurso. La Sala Primera puede admitir el recurso cuando el asunto revista especial
          trascendencia para la unificación de la jurisprudencia, cuando exista contradicción
          entre resoluciones del Tribunal Contencioso Administrativo, o cuando se trate de una
          cuestión jurídica de importancia general que requiera pronunciamiento del máximo
          tribunal. Este mecanismo permite que la Sala Primera cumpla su función de unificación
          de la doctrina jurisprudencial.
        </p>
      </Instrumento>

      <Instrumento titulo="Plazo y legitimación" fundamento="CPCA, arts. 135 y 136">
        <p>
          El recurso de casación debe interponerse dentro de los quince días hábiles siguientes
          a la notificación de la sentencia impugnada, conforme al artículo 135 del CPCA. Están
          legitimados para recurrir las partes del proceso que resulten perjudicadas por la
          sentencia. El recurso se presenta ante el propio Tribunal Contencioso Administrativo,
          que verifica los requisitos de admisibilidad formales antes de elevarlo a la Sala
          Primera para su conocimiento y resolución.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre el recurso de casación ante Sala Primera
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cuáles son los motivos para interponer un recurso de casación contencioso-administrativo en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El artículo 137 del CPCA establece tres categorías de motivos para interponer casación
              ante la Sala Primera de la Corte Suprema de Justicia. Primero, motivos procesales
              (art. 137.a): violación del debido proceso, indefensión, incongruencia de la sentencia,
              resoluciones ultra petita, extra petita o citra petita, y falta de fundamentación.
              Segundo, motivos de fondo (art. 137.b): violación directa de normas sustantivas por
              aplicación indebida, falta de aplicación o interpretación errónea, y violación indirecta
              derivada de errores en la apreciación de hechos o prueba. Tercero, errores probatorios
              (art. 137.c y d): error de hecho o de derecho en la valoración de la prueba y preterición
              de prueba decisiva. Cada motivo exige una técnica casacional rigurosa: identificar la
              norma infringida, explicar la infracción y demostrar su incidencia en la parte dispositiva
              de la sentencia. Los defectos técnicos conducen a la inadmisibilidad del recurso.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cuál es el plazo para presentar casación contra una sentencia del Tribunal Contencioso Administrativo?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Conforme al artículo 135 del CPCA, el recurso de casación debe interponerse dentro de los
              quince días hábiles siguientes a la notificación de la sentencia impugnada. El recurso se
              presenta ante el propio Tribunal Contencioso Administrativo que dictó la sentencia, el cual
              verifica los requisitos de admisibilidad formales antes de elevarlo a la Sala Primera de la
              Corte Suprema de Justicia para su conocimiento y resolución. El artículo 136 del CPCA
              establece que están legitimados para recurrir las partes del proceso que resulten
              perjudicadas por la sentencia. Son recurribles en casación las sentencias y los autos con
              carácter de sentencia dictados en procesos de conocimiento (art. 134). El vencimiento del
              plazo produce la inadmisibilidad del recurso por extemporaneidad, por lo que es fundamental
              actuar con inmediatez. Corporación GC evalúa la viabilidad técnica del recurso desde la
              notificación misma de la sentencia para garantizar una interposición oportuna y fundada.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué es la preterición de prueba y cómo se alega en casación?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La preterición de prueba es un motivo autónomo de casación contemplado en el artículo
              137, inciso d) del CPCA. Consiste en que el Tribunal Contencioso Administrativo omite
              considerar un elemento probatorio que fue debidamente aportado al proceso y que resulta
              decisivo para la resolución del caso. No se trata de una discrepancia con la valoración
              del juez, sino de la ausencia total de análisis de una prueba que, de haber sido
              considerada, habría modificado el sentido del fallo. Para que prospere el recurso por
              este motivo, el recurrente debe demostrar ante la Sala Primera tres elementos: que la
              prueba consta en el expediente, que el Tribunal no la analizó en la sentencia, y que su
              consideración habría sido determinante para alcanzar una conclusión distinta en la parte
              dispositiva. El artículo 137, inciso c) del CPCA también permite alegar el error de hecho
              o de derecho en la valoración probatoria como motivo complementario de casación.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "asesoria-regulatoria": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          La potestad reglamentaria es la facultad que el ordenamiento jurídico otorga al Poder
          Ejecutivo y a los entes descentralizados para dictar normas de alcance general que
          desarrollen, complementen o ejecuten las leyes. En Costa Rica, esta potestad tiene
          rango constitucional (artículo 140, inciso 3 de la Constitución Política) y está
          regulada por la Ley General de la Administración Pública (LGAP, Ley N.° 6227).
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Corporación GC asesora a entes y órganos de la Administración Pública en la
          elaboración, revisión y perfeccionamiento de instrumentos normativos de alcance
          general. El conocimiento profundo del Derecho Administrativo sustantivo y del
          control jurisdiccional posterior permite diseñar normativa que cumpla con los
          principios de legalidad, proporcionalidad y razonabilidad exigidos por el ordenamiento.
        </p>
      </section>

      <Instrumento titulo="Reglamentos ejecutivos" fundamento="Constitución, art. 140.3; LGAP, art. 6">
        <p>
          El reglamento ejecutivo es la norma de alcance general que dicta el Poder Ejecutivo
          para desarrollar y facilitar la aplicación de una ley. El artículo 140, inciso 3 de
          la Constitución Política atribuye al Presidente de la República y al Ministro del ramo
          la potestad de reglamentar las leyes. El artículo 6 de la LGAP establece la jerarquía
          normativa: la ley prevalece sobre el reglamento, y este no puede contradecir, exceder
          ni restringir el alcance de la ley que desarrolla.
        </p>
        <p>
          La redacción de un reglamento ejecutivo exige un conocimiento preciso del marco legal
          que se pretende reglamentar, de los límites de la potestad reglamentaria y de la
          jurisprudencia constitucional sobre la reserva de ley. Un reglamento que exceda la ley
          o regule materia reservada al legislador es susceptible de ser anulado por la Sala
          Constitucional o por la jurisdicción contencioso-administrativa.
        </p>
      </Instrumento>

      <Instrumento titulo="Reglamentos autónomos de organización y servicio" fundamento="LGAP, arts. 103 y 104">
        <p>
          El reglamento autónomo es el instrumento mediante el cual un ente u órgano de la
          Administración Pública regula su organización interna y la prestación de los servicios
          a su cargo, sin necesidad de una ley previa que lo habilite. Los artículos 103 y 104
          de la LGAP reconocen esta potestad a los entes descentralizados —municipalidades,
          instituciones autónomas, universidades públicas— en el ámbito de sus competencias.
        </p>
        <p>
          A diferencia del reglamento ejecutivo, el reglamento autónomo no desarrolla una ley
          específica sino que regula materias propias de la organización administrativa. Sin
          embargo, tampoco puede contravenir la ley ni afectar derechos fundamentales de los
          administrados. Su elaboración requiere atención a los principios de competencia,
          jerarquía normativa y respeto al bloque de legalidad.
        </p>
      </Instrumento>

      <Instrumento titulo="Decretos ejecutivos" fundamento="Constitución, art. 140.3 y 140.18">
        <p>
          El decreto ejecutivo es el acto normativo que emite el Poder Ejecutivo —Presidente de
          la República con el Ministro del ramo o con el Consejo de Gobierno, según la materia—
          para establecer disposiciones de alcance general. El artículo 140, incisos 3 y 18 de
          la Constitución Política fundamentan esta potestad. Los decretos pueden ser
          reglamentarios (cuando desarrollan una ley) o de contenido propio (cuando regulan
          materias de competencia del Ejecutivo).
        </p>
        <p>
          La elaboración de un decreto ejecutivo implica cumplir con requisitos formales
          —refrendo ministerial, publicación en La Gaceta— y sustantivos —respeto a la jerarquía
          normativa, motivación, proporcionalidad—. Un decreto que carezca de estos elementos
          puede ser impugnado mediante acción de inconstitucionalidad (si vulnera la Constitución)
          o mediante demanda contencioso-administrativa (si contraviene la ley o el principio de
          legalidad).
        </p>
      </Instrumento>

      <Instrumento titulo="Directrices y circulares" fundamento="LGAP, arts. 99 y 100">
        <p>
          Las directrices son instrucciones de alcance general que un órgano superior dirige a
          los órganos o entes sujetos a su dirección para orientar el ejercicio de sus
          competencias. Los artículos 99 y 100 de la LGAP regulan la potestad de dirección y
          establecen que las directrices no pueden ordenar actos concretos sino fijar los fines
          y objetivos generales que deben perseguir los entes dirigidos. Las circulares, por su
          parte, son comunicaciones internas que interpretan o aclaran la aplicación de normas
          vigentes.
        </p>
        <p>
          La diferencia entre una directriz vinculante y una recomendación no vinculante tiene
          consecuencias jurídicas relevantes: el incumplimiento de una directriz vinculante
          puede generar responsabilidad administrativa del funcionario, mientras que su emisión
          fuera de los límites legales puede ser impugnada por el ente dirigido o por terceros
          afectados.
        </p>
      </Instrumento>

      <Instrumento titulo="Consulta pública y participación ciudadana" fundamento="Ley 8220, art. 12; Decreto 37045-MP-MEIC">
        <p>
          La elaboración de normativa de alcance general está sujeta, en muchos casos, al
          trámite de consulta pública. La Ley de Protección al Ciudadano del Exceso de
          Requisitos y Trámites Administrativos (Ley N.° 8220) y el Decreto Ejecutivo
          N.° 37045-MP-MEIC establecen la obligación de someter los proyectos de reglamentos
          y decretos a un período de consulta pública de diez días hábiles. Este trámite permite
          a los administrados y sectores interesados formular observaciones que la Administración
          debe considerar y responder motivadamente.
        </p>
        <p>
          La omisión del trámite de consulta pública cuando es obligatorio constituye un vicio
          del procedimiento que puede acarrear la nulidad del reglamento o decreto aprobado.
        </p>
      </Instrumento>

      <Instrumento titulo="Control de legalidad de la normativa administrativa" fundamento="CPCA, art. 10; Ley 7135, art. 73">
        <p>
          Toda normativa de alcance general dictada por la Administración Pública está sujeta a
          control jurisdiccional. El artículo 10 del CPCA permite impugnar ante el Tribunal
          Contencioso Administrativo los reglamentos, decretos y disposiciones generales que se
          consideren contrarios al ordenamiento jurídico. El artículo 73 de la Ley de la
          Jurisdicción Constitucional (Ley N.° 7135) habilita la acción de inconstitucionalidad
          contra normas reglamentarias que vulneren la Constitución.
        </p>
        <p>
          Este marco de control posterior es precisamente lo que hace indispensable una asesoría
          regulatoria rigurosa: una norma mal fundamentada, desproporcionada o que exceda la
          competencia del órgano emisor será anulada por los tribunales. La experiencia de
          Corporación GC en el litigio contencioso-administrativo y constitucional permite
          anticipar las objeciones que la normativa podría enfrentar y diseñarla para resistir
          ese escrutinio.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre asesoría regulatoria
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Quién puede emitir reglamentos en Costa Rica y cuáles son sus límites?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La potestad reglamentaria en Costa Rica corresponde al Poder Ejecutivo conforme al
              artículo 140, inciso 3 de la Constitución Política, que faculta al Presidente y al
              Ministro del ramo a reglamentar las leyes. Los entes descentralizados —municipalidades,
              instituciones autónomas, universidades públicas— pueden dictar reglamentos autónomos de
              organización y servicio conforme a los artículos 103 y 104 de la LGAP, sin necesidad de
              ley habilitante previa. El artículo 6 de la LGAP establece la jerarquía normativa: el
              reglamento no puede contradecir, exceder ni restringir el alcance de la ley que
              desarrolla. Un reglamento que regule materia reservada al legislador o que exceda la ley
              es susceptible de anulación por la Sala Constitucional (art. 73, Ley 7135) o por la
              jurisdicción contencioso-administrativa (art. 10, CPCA). La consulta pública previa,
              regulada en la Ley 8220 y el Decreto 37045-MP-MEIC, es obligatoria en muchos casos y
              su omisión puede acarrear la nulidad del instrumento normativo aprobado.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué diferencia hay entre un reglamento ejecutivo y un reglamento autónomo?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El reglamento ejecutivo es la norma que dicta el Poder Ejecutivo para desarrollar y
              facilitar la aplicación de una ley específica, con fundamento en el artículo 140, inciso
              3 de la Constitución Política. Su contenido está subordinado y vinculado a la ley que
              reglamenta; no puede crear obligaciones nuevas ni restringir derechos que la ley no haya
              previsto. El reglamento autónomo, regulado en los artículos 103 y 104 de la LGAP, es el
              instrumento mediante el cual un ente u órgano público regula su organización interna y la
              prestación de sus servicios sin necesidad de una ley previa habilitante. A diferencia del
              ejecutivo, el autónomo no desarrolla una ley específica sino que regula materias propias
              de la organización administrativa. Sin embargo, ambos tipos de reglamento están sometidos
              a la jerarquía normativa del artículo 6 de la LGAP: no pueden contravenir la ley ni
              afectar derechos fundamentales. Ambos son impugnables ante la jurisdicción
              contencioso-administrativa si contravienen el ordenamiento jurídico.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Se puede impugnar un decreto ejecutivo o un reglamento en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Sí. Toda normativa de alcance general dictada por la Administración Pública está sujeta a
              control jurisdiccional por dos vías. Primero, el artículo 10 del CPCA permite impugnar
              ante el Tribunal Contencioso Administrativo los reglamentos, decretos y disposiciones
              generales que se consideren contrarios al ordenamiento jurídico infraconstitucional; esta
              vía permite obtener la anulación del instrumento y la indemnización de los daños causados.
              Segundo, el artículo 73 de la Ley de la Jurisdicción Constitucional (Ley 7135) habilita
              la acción de inconstitucionalidad ante la Sala Constitucional contra normas reglamentarias
              que vulneren la Constitución; la declaratoria tiene efectos erga omnes y elimina la norma
              del ordenamiento. Los vicios más frecuentes incluyen la invasión de la reserva de ley, la
              desproporción, la falta de consulta pública obligatoria (Ley 8220, art. 12) y la ausencia
              de motivación. Corporación GC asesora tanto en la redacción preventiva de normativa como en
              su impugnación cuando resulte contraria a derecho.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "informes-juridicos-dictamenes": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          La Administración Pública costarricense opera bajo el principio de legalidad: solo
          puede hacer aquello que el ordenamiento jurídico le autoriza (artículo 11 de la
          Constitución Política y artículo 11 de la LGAP). Cada decisión administrativa —desde
          la adjudicación de un contrato hasta la imposición de una sanción— debe tener respaldo
          en una norma habilitante y respetar los procedimientos establecidos. Cuando una
          institución pública necesita certeza sobre la conformidad jurídica de una actuación
          antes de ejecutarla, acude a un informe jurídico o dictamen especializado.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          La Procuraduría General de la República (PGR) cumple esta función como órgano
          consultivo del Estado, pero sus dictámenes son vinculantes y sus tiempos de respuesta
          pueden no ajustarse a la urgencia institucional. Corporación GC ofrece a entes y
          órganos públicos un servicio análogo de consultoría jurídica externa: informes técnicos
          rigurosos, fundamentados en la legislación vigente y en la jurisprudencia actualizada,
          con la agilidad que requiere la gestión pública.
        </p>
      </section>

      <Instrumento titulo="Dictámenes sobre legalidad de actos administrativos" fundamento="LGAP, arts. 11, 128 a 133 y 158 a 174">
        <p>
          El acto administrativo —declaración unilateral de voluntad de la Administración que
          produce efectos jurídicos— debe reunir los elementos de validez que establece la LGAP:
          competencia del órgano emisor (art. 129), legitimación del sujeto (art. 130), motivo
          (art. 133), contenido lícito y determinado (art. 132), procedimiento debido y forma
          prescrita (art. 134). La ausencia o vicio de cualquiera de estos elementos puede
          generar la nulidad absoluta o relativa del acto conforme a los artículos 158 a 174
          de la LGAP.
        </p>
        <p>
          Un dictamen previo permite a la institución identificar estos vicios antes de que el
          acto sea impugnado, ya sea en sede administrativa o ante el Tribunal Contencioso
          Administrativo. El informe analiza la cadena de legalidad completa: la norma
          habilitante, la competencia del órgano, la suficiencia de la motivación, el respeto
          al debido proceso y la proporcionalidad de la decisión.
        </p>
      </Instrumento>

      <Instrumento titulo="Informes sobre procedimientos administrativos en curso" fundamento="LGAP, arts. 308 a 319 y 214 a 240">
        <p>
          Las instituciones públicas instruyen constantemente procedimientos administrativos
          ordinarios (artículos 308 a 319 de la LGAP) para dictar actos que afectan derechos
          de los administrados: sanciones disciplinarias, cobros, revocaciones de permisos,
          resoluciones contractuales. Cada fase del procedimiento —apertura, intimación,
          instrucción probatoria, audiencia oral, resolución final— debe cumplir garantías
          específicas del debido proceso.
        </p>
        <p>
          Un informe jurídico sobre un procedimiento en curso permite detectar vicios que
          podrían invalidar la resolución final: notificaciones defectuosas, plazos incumplidos,
          prueba obtenida ilegítimamente, falta de audiencia oral o insuficiencia de la
          fundamentación. El artículo 223 de la LGAP establece que la nulidad absoluta del acto
          dictado en un procedimiento viciado puede ser declarada incluso de oficio.
        </p>
      </Instrumento>

      <Instrumento titulo="Opiniones sobre contratación administrativa" fundamento="Ley 9986; LGAP, art. 182 Constitución">
        <p>
          La contratación administrativa es una de las áreas de mayor exposición jurídica para
          las instituciones públicas. El artículo 182 de la Constitución Política establece el
          principio de licitación pública, y la Ley General de Contratación Pública (Ley N.° 9986)
          regula exhaustivamente los procedimientos de selección, adjudicación y ejecución
          contractual. Los errores en la elaboración del cartel, la calificación de ofertas o la
          fundamentación de la adjudicación exponen a la institución a recursos de objeción,
          apelación y demandas ante el TCA.
        </p>
        <p>
          Los informes jurídicos en esta materia evalúan la legalidad de los pliegos de
          condiciones antes de su publicación, la conformidad del proceso de evaluación con los
          criterios del cartel, la suficiencia de la motivación del acto de adjudicación y los
          riesgos de impugnación. Este análisis preventivo reduce sustancialmente la exposición
          de la institución al litigio.
        </p>
      </Instrumento>

      <Instrumento titulo="Dictámenes sobre competencia y organización administrativa" fundamento="LGAP, arts. 59 a 90">
        <p>
          Las disputas de competencia entre órganos y entes públicos son frecuentes en la
          Administración costarricense. Los artículos 59 a 90 de la LGAP regulan la competencia
          administrativa: su atribución, delegación, avocación y los conflictos que pueden
          surgir entre órganos del mismo ente o entre entes distintos. Un dictamen sobre
          competencia determina qué órgano tiene la potestad legal para conocer un asunto,
          dictar un acto o ejercer una función.
        </p>
        <p>
          Este tipo de informe es especialmente relevante cuando una institución enfrenta
          reclamos de invasión de competencia por parte de otro ente, cuando necesita justificar
          la delegación de funciones a un inferior o cuando debe resolver si una materia
          corresponde a su ámbito o al de otra entidad del sector público.
        </p>
      </Instrumento>

      <Instrumento titulo="Análisis de riesgo jurídico y responsabilidad patrimonial" fundamento="LGAP, arts. 190 a 204">
        <p>
          Los artículos 190 a 204 de la LGAP regulan la responsabilidad patrimonial de la
          Administración Pública: el Estado responde por todos los daños que cause su
          funcionamiento, sea este legítimo o ilegítimo, normal o anormal. Esta responsabilidad
          objetiva implica que una actuación administrativa que cause un daño antijurídico —un
          sacrificio especial que el administrado no tiene el deber de soportar— genera la
          obligación de indemnizar, aunque la Administración haya actuado conforme a derecho.
        </p>
        <p>
          Un informe de riesgo jurídico evalúa las contingencias que una decisión administrativa
          puede generar en términos de responsabilidad patrimonial: cuánto podría costar una
          condena, qué probabilidad existe de que la actuación sea impugnada exitosamente y qué
          alternativas existen para mitigar la exposición. Este análisis permite a la institución
          tomar decisiones informadas y provisionarse adecuadamente.
        </p>
      </Instrumento>

      <Instrumento titulo="Diferencia con los dictámenes de la PGR" fundamento="Ley Orgánica de la PGR, Ley 6815, art. 2">
        <p>
          La Procuraduría General de la República, conforme al artículo 2 de su Ley Orgánica
          (Ley N.° 6815), es el órgano superior consultivo de la Administración Pública. Sus
          dictámenes son vinculantes para la Administración consultante, salvo que esta decida
          apartarse de ellos mediante acto debidamente motivado del jerarca. Los criterios
          emitidos por la PGR constituyen jurisprudencia administrativa.
        </p>
        <p>
          Los informes jurídicos de Corporación GC cumplen una función distinta: son opiniones
          técnicas externas, no vinculantes, que la institución puede utilizar como insumo para
          fundamentar sus decisiones. Su valor reside en la especialización en Derecho Público
          y en la perspectiva que aporta un equipo con experiencia tanto en la judicatura como
          en el litigio contencioso-administrativo — una visión que anticipa cómo los tribunales
          evaluarían la legalidad de la actuación consultada.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre informes jurídicos y dictámenes
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué elementos debe verificar un dictamen de legalidad de un acto administrativo?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Un dictamen de legalidad debe analizar la cadena completa de validez del acto
              administrativo conforme a la LGAP. Los artículos 128 a 133 establecen los elementos
              esenciales: competencia del órgano emisor (art. 129), legitimación del sujeto (art. 130),
              contenido lícito y determinado (art. 132), motivo o causa justificante (art. 133),
              procedimiento debido y forma prescrita (art. 134). El informe verifica además que la
              motivación sea suficiente y que la decisión respete los principios de proporcionalidad y
              razonabilidad. Los artículos 158 a 174 de la LGAP regulan las consecuencias de los vicios:
              la nulidad absoluta cuando falta un elemento esencial, y la nulidad relativa cuando el
              vicio es subsanable. Un dictamen previo permite identificar estos defectos antes de que el
              acto sea impugnado en sede administrativa o ante el Tribunal Contencioso Administrativo,
              reduciendo significativamente la exposición de la institución al litigio y a condenas
              patrimoniales derivadas de actos viciados.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿En qué se diferencia un informe jurídico externo de un dictamen de la Procuraduría General?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La Procuraduría General de la República (PGR), conforme al artículo 2 de su Ley Orgánica
              (Ley N.° 6815), es el órgano superior consultivo de la Administración Pública. Sus
              dictámenes son vinculantes para la Administración consultante —salvo que el jerarca
              decida apartarse mediante acto debidamente motivado— y constituyen jurisprudencia
              administrativa. Sin embargo, los tiempos de respuesta de la PGR pueden no ajustarse a la
              urgencia institucional. Los informes jurídicos de Corporación GC cumplen una función
              distinta: son opiniones técnicas externas, no vinculantes, que la institución utiliza
              como insumo para fundamentar sus decisiones. Su valor reside en la especialización en
              Derecho Público y en la perspectiva que aporta un equipo con experiencia en la judicatura
              y en el litigio contencioso-administrativo. Esta visión permite anticipar cómo los
              tribunales evaluarían la legalidad de la actuación consultada, complementando el criterio
              interno de las asesorías jurídicas institucionales con análisis de riesgo actualizados.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cuándo necesita una institución pública un informe sobre riesgo de responsabilidad patrimonial?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Los artículos 190 a 204 de la LGAP establecen que la Administración Pública responde por
              todos los daños causados por su funcionamiento, sea este legítimo o ilegítimo, normal o
              anormal. Esta responsabilidad objetiva implica que incluso una actuación conforme a derecho
              puede generar obligación de indemnizar si produce un sacrificio especial que el administrado
              no tiene el deber de soportar. Un informe de riesgo jurídico es necesario cuando la
              institución enfrenta decisiones de alto impacto: adjudicaciones de contratos significativos,
              revocatorias de permisos o concesiones, imposición de sanciones graves o cambios normativos
              que afecten derechos adquiridos. El informe evalúa las contingencias patrimoniales: la
              probabilidad de impugnación exitosa, el monto estimado de una eventual condena y las
              alternativas para mitigar la exposición. El principio de legalidad del artículo 11 de la
              LGAP exige que cada actuación tenga respaldo normativo, y el análisis preventivo permite
              tomar decisiones informadas antes de que se materialice el riesgo.
            </p>
          </div>
        </div>
      </section>
    </>
  ),
  "contratacion-publica": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          La contratación pública comprende todos los procedimientos mediante los cuales las
          instituciones del Estado adquieren bienes, contratan servicios o ejecutan obras públicas.
          La Ley General de Contratación Pública (Ley N.° 9986) y su Reglamento regulan estos
          procedimientos, estableciendo un sistema de control y de impugnación que permite a los
          oferentes y terceros interesados cuestionar las decisiones administrativas en cada fase
          del proceso de contratación.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Corporación GC asesora a entidades públicas y empresas privadas en todas las fases del
          ciclo de contratación: desde la formulación de ofertas y la participación en
          procedimientos de licitación hasta la impugnación de adjudicaciones y la defensa en
          procedimientos de resolución contractual.
        </p>
      </section>

      <Instrumento titulo="Recurso de objeción al cartel" fundamento="Ley 9986, art. 90">
        <p>
          El recurso de objeción al cartel permite impugnar las condiciones y especificaciones
          del pliego de condiciones de un procedimiento de contratación antes de que se reciban
          las ofertas. El artículo 90 de la Ley N.° 9986 establece que cualquier potencial
          oferente que considere que el cartel contiene disposiciones contrarias al ordenamiento
          jurídico, discriminatorias, desproporcionadas o que restrinjan indebidamente la
          participación puede interponer este recurso ante la Contraloría General de la República.
        </p>
        <p>
          La objeción debe presentarse dentro del primer tercio del plazo para recibir ofertas
          y su interposición no suspende el procedimiento de contratación, salvo que la
          Contraloría expresamente así lo disponga. La resolución de la Contraloría es vinculante
          para la entidad contratante.
        </p>
      </Instrumento>

      <Instrumento titulo="Recurso de apelación contra la adjudicación" fundamento="Ley 9986, art. 93">
        <p>
          El recurso de apelación contra el acto de adjudicación permite a cualquier oferente o
          tercero con interés legítimo impugnar la decisión de la Administración de adjudicar un
          contrato a un determinado oferente. El artículo 93 de la Ley N.° 9986 establece que
          este recurso se interpone ante la Contraloría General de la República dentro de los
          diez días hábiles siguientes a la comunicación del acto de adjudicación.
        </p>
        <p>
          La interposición del recurso suspende automáticamente los efectos del acto de
          adjudicación y la Administración no puede suscribir el contrato hasta que la Contraloría
          resuelva. La Contraloría puede confirmar, modificar o revocar la adjudicación, o
          declarar desierto el concurso.
        </p>
      </Instrumento>

      <Instrumento titulo="Recurso de revocatoria contra la adjudicación" fundamento="Ley 9986, art. 92">
        <p>
          El recurso de revocatoria es la vía para impugnar la adjudicación ante la propia
          entidad que la dictó, cuando la cuantía del procedimiento no alcanza el monto mínimo
          para acudir en apelación ante la Contraloría General de la República. El artículo 92
          de la Ley N.° 9986 establece su procedimiento y plazos. Este recurso es resuelto por
          el jerarca de la entidad contratante.
        </p>
      </Instrumento>

      <Instrumento titulo="Tipos de procedimientos de contratación" fundamento="Ley 9986, arts. 36 a 56">
        <p>
          La Ley N.° 9986 establece distintos procedimientos según la complejidad y cuantía de
          la contratación. La licitación pública es el procedimiento ordinario para contrataciones
          de mayor cuantía. La licitación abreviada se utiliza para montos intermedios con
          requisitos simplificados. La contratación directa procede en supuestos taxativos
          establecidos por la ley —único proveedor, urgencia, escasa cuantía, entre otros—.
          Cada procedimiento tiene reglas específicas sobre plazos, publicidad, recepción de
          ofertas y adjudicación.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre contratación pública
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo se impugna una adjudicación de licitación pública en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La Ley General de Contratación Pública (Ley N.° 9986) establece dos vías para impugnar
              el acto de adjudicación. El recurso de apelación, regulado en el artículo 93, se
              interpone ante la Contraloría General de la República dentro de los diez días hábiles
              siguientes a la comunicación del acto de adjudicación. Su interposición suspende
              automáticamente los efectos de la adjudicación y la Administración no puede suscribir el
              contrato hasta que la Contraloría resuelva. La Contraloría puede confirmar, modificar o
              revocar la adjudicación, o declarar desierto el concurso. Para procedimientos de menor
              cuantía que no alcanzan el monto mínimo para apelar ante la Contraloría, el artículo 92
              de la Ley 9986 establece el recurso de revocatoria ante la propia entidad contratante,
              que es resuelto por el jerarca institucional. Agotada la vía administrativa, procede la
              demanda contencioso-administrativa ante el TCA conforme al artículo 10 del CPCA.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué es el recurso de objeción al cartel y cuándo se presenta?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El recurso de objeción al cartel permite impugnar las condiciones y especificaciones del
              pliego de condiciones de un procedimiento de contratación antes de que se reciban las
              ofertas. El artículo 90 de la Ley N.° 9986 establece que cualquier potencial oferente que
              considere que el cartel contiene disposiciones contrarias al ordenamiento jurídico,
              discriminatorias, desproporcionadas o que restrinjan indebidamente la participación puede
              interponer este recurso ante la Contraloría General de la República. La objeción debe
              presentarse dentro del primer tercio del plazo para recibir ofertas. Su interposición no
              suspende automáticamente el procedimiento de contratación, salvo que la Contraloría
              expresamente así lo disponga. La resolución de la Contraloría es vinculante para la entidad
              contratante y puede ordenar la modificación del cartel o la eliminación de las cláusulas
              objetadas. Este recurso es estratégicamente importante porque permite corregir vicios del
              pliego antes de la adjudicación, evitando litigios posteriores más costosos y prolongados.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué tipos de procedimientos de contratación pública existen en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La Ley N.° 9986 establece distintos procedimientos según la complejidad y cuantía de la
              contratación, regulados en los artículos 36 a 56. La licitación pública es el procedimiento
              ordinario para contrataciones de mayor cuantía, conforme al principio constitucional del
              artículo 182 de la Constitución Política. La licitación abreviada se utiliza para montos
              intermedios con requisitos simplificados y plazos más breves. La contratación directa
              procede en supuestos taxativos establecidos por la ley: único proveedor, urgencia
              calificada, escasa cuantía, entre otros expresamente previstos. Cada procedimiento tiene
              reglas específicas sobre plazos de recepción de ofertas, publicidad, evaluación y
              adjudicación. En todos los casos, los oferentes y terceros con interés legítimo disponen
              de los recursos de objeción al cartel (art. 90) y apelación o revocatoria contra la
              adjudicación (arts. 92 y 93) para cuestionar las decisiones administrativas en cada fase
              del proceso de contratación.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "derecho-administrativo": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          El Derecho Administrativo regula la organización y el funcionamiento de la Administración
          Pública, así como las relaciones entre esta y los administrados. La Ley General de la
          Administración Pública (LGAP, Ley N.° 6227 del 2 de mayo de 1978) es el cuerpo
          normativo central de esta materia en Costa Rica. Establece los principios que rigen la
          actuación administrativa, los procedimientos para la emisión de actos administrativos,
          y los recursos que pueden interponer los administrados cuando consideren que sus derechos
          han sido afectados.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Corporación GC representa a personas físicas, empresas y entes públicos en procedimientos
          administrativos ante la Administración centralizada y descentralizada, y en la
          preparación de la vía administrativa como antesala del proceso contencioso.
        </p>
      </section>

      <Instrumento titulo="Recurso de revocatoria" fundamento="LGAP, arts. 342 a 345">
        <p>
          El recurso de revocatoria es el medio de impugnación ordinario que se interpone ante el
          mismo órgano que dictó el acto administrativo para solicitar su revocación, modificación
          o anulación. Los artículos 342 a 345 de la LGAP regulan su procedimiento. El recurso
          debe presentarse dentro de los tres días hábiles siguientes a la notificación del acto
          y el órgano tiene un plazo de ocho días para resolverlo.
        </p>
        <p>
          La revocatoria procede contra actos administrativos que el recurrente considere
          contrarios al ordenamiento jurídico o lesivos de sus derechos o intereses legítimos.
          El órgano puede confirmar, modificar o revocar total o parcialmente el acto impugnado.
        </p>
      </Instrumento>

      <Instrumento titulo="Recurso de apelación en subsidio" fundamento="LGAP, art. 343">
        <p>
          El recurso de apelación se interpone conjuntamente con la revocatoria y en forma
          subsidiaria —es decir, para el caso de que la revocatoria sea rechazada—. El artículo
          343 de la LGAP establece que la apelación se dirige al superior jerárquico del órgano
          que dictó el acto. Si la revocatoria es declarada sin lugar, el órgano debe elevar el
          expediente al superior para que resuelva la apelación.
        </p>
        <p>
          La interposición conjunta de revocatoria con apelación en subsidio es la fórmula
          estándar en el derecho administrativo costarricense para agotar la vía administrativa,
          requisito previo para acceder a la jurisdicción contencioso-administrativa.
        </p>
      </Instrumento>

      <Instrumento titulo="Procedimiento administrativo ordinario" fundamento="LGAP, arts. 308 a 319">
        <p>
          El procedimiento administrativo ordinario es el cauce formal que debe seguir la
          Administración Pública para la emisión de actos administrativos que afecten derechos
          subjetivos o intereses legítimos de los administrados. Los artículos 308 a 319 de la
          LGAP regulan sus fases: inicio, instrucción (recopilación de pruebas), audiencia oral
          y privada, alegatos y resolución final. El procedimiento garantiza el derecho de
          defensa, el acceso al expediente, la posibilidad de ofrecer prueba y el derecho a ser
          oído antes de la emisión del acto final.
        </p>
        <p>
          El artículo 308 de la LGAP establece que este procedimiento es obligatorio cuando el
          acto a dictar pueda causar perjuicio grave al administrado, cuando se trate de un
          procedimiento sancionatorio, o cuando así lo exija la ley especial aplicable.
        </p>
      </Instrumento>

      <Instrumento titulo="Procedimiento sancionatorio" fundamento="LGAP, art. 308 y concordantes">
        <p>
          El procedimiento sancionatorio es la modalidad del procedimiento administrativo
          ordinario que se instruye cuando la Administración pretende imponer una sanción a un
          administrado o a un servidor público. Está sujeto a las garantías reforzadas del
          debido proceso administrativo: presunción de inocencia, derecho de defensa, derecho a
          producir prueba, motivación de la resolución y proporcionalidad de la sanción. La
          Administración no puede imponer sanciones sin haber instruido previamente el
          procedimiento correspondiente.
        </p>
      </Instrumento>

      <Instrumento titulo="Agotamiento de la vía administrativa" fundamento="CPCA, art. 31">
        <p>
          El artículo 31 del CPCA establece que, como regla general, para acudir a la jurisdicción
          contencioso-administrativa es necesario haber agotado previamente la vía administrativa.
          Esto significa que el administrado debe haber interpuesto los recursos administrativos
          correspondientes (revocatoria con apelación en subsidio) contra el acto que pretende
          impugnar judicialmente. La vía administrativa se considera agotada cuando se ha resuelto
          el último recurso disponible o cuando ha operado el silencio administrativo negativo.
        </p>
        <p>
          Existen excepciones al agotamiento: no se exige cuando la conducta impugnada es una
          actuación material (vía de hecho), una omisión, la inactividad de la Administración,
          o en los demás casos expresamente previstos por el CPCA.
        </p>
      </Instrumento>

      <Instrumento titulo="Silencio administrativo" fundamento="LGAP, arts. 261 y 330">
        <p>
          El silencio administrativo opera cuando la Administración no resuelve un recurso o
          petición dentro del plazo legalmente establecido. La LGAP distingue dos modalidades:
          el silencio negativo, que opera como regla general conforme al artículo 261, según el
          cual transcurrido el plazo de dos meses sin resolución expresa se entiende denegada la
          gestión, habilitando al administrado para acudir a la siguiente instancia administrativa
          o a la vía jurisdiccional; y el silencio positivo, regulado en el artículo 330, que
          opera cuando se trate de solicitudes de permisos, licencias y autorizaciones, así como
          de aprobaciones en ejercicio de funciones de fiscalización y tutela, caso en el cual
          transcurrido un mes sin resolución expresa se entiende aprobada la gestión. El silencio
          positivo constituye una garantía para el administrado frente a la inactividad de la
          Administración en materia autorizatoria.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre derecho administrativo
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué recursos puedo interponer contra un acto administrativo en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La LGAP establece dos recursos administrativos ordinarios contra los actos de la
              Administración Pública. El recurso de revocatoria, regulado en los artículos 342 a 345,
              se interpone ante el mismo órgano que dictó el acto dentro de los tres días hábiles
              siguientes a su notificación; el órgano tiene ocho días para resolverlo y puede confirmar,
              modificar o revocar total o parcialmente el acto impugnado. El recurso de apelación,
              regulado en el artículo 343, se interpone conjuntamente con la revocatoria y en forma
              subsidiaria ante el superior jerárquico, para el caso de que la revocatoria sea rechazada.
              La interposición conjunta de revocatoria con apelación en subsidio es la fórmula estándar
              para agotar la vía administrativa, requisito previo para acceder a la jurisdicción
              contencioso-administrativa conforme al artículo 31 del CPCA. Agotada la vía administrativa,
              el administrado puede acudir al Tribunal Contencioso Administrativo para impugnar
              judicialmente el acto conforme al artículo 10 del CPCA.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué es el procedimiento administrativo ordinario y cuándo es obligatorio?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El procedimiento administrativo ordinario, regulado en los artículos 308 a 319 de la LGAP,
              es el cauce formal que la Administración Pública debe seguir para emitir actos que afecten
              derechos subjetivos o intereses legítimos de los administrados. El artículo 308 establece
              que este procedimiento es obligatorio cuando el acto pueda causar perjuicio grave al
              administrado, cuando se trate de un procedimiento sancionatorio, o cuando así lo exija una
              ley especial. Sus fases incluyen: inicio mediante auto de apertura, instrucción probatoria,
              audiencia oral y privada, alegatos y resolución final. El procedimiento garantiza el
              derecho de defensa, el acceso al expediente, la posibilidad de ofrecer prueba y el derecho
              a ser oído antes del acto final. La omisión del procedimiento ordinario cuando es obligatorio
              constituye un vicio de nulidad absoluta conforme al artículo 223 de la LGAP, que puede ser
              declarada incluso de oficio por la propia Administración o por los tribunales.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué ocurre si la Administración no responde un recurso dentro del plazo legal?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Cuando la Administración no resuelve un recurso o petición dentro del plazo legalmente
              establecido, opera el silencio administrativo. La LGAP distingue dos modalidades. El
              silencio negativo, regulado en el artículo 261, opera como regla general: transcurridos
              dos meses sin resolución expresa, se entiende denegada la gestión, habilitando al
              administrado para acudir a la siguiente instancia administrativa o a la vía jurisdiccional
              contencioso-administrativa. El silencio positivo, regulado en el artículo 330, opera en
              materia de permisos, licencias, autorizaciones y aprobaciones en ejercicio de funciones de
              fiscalización y tutela: transcurrido un mes sin resolución expresa, se entiende aprobada
              la gestión. El silencio positivo constituye una garantía frente a la inactividad
              administrativa en materia autorizatoria. Es fundamental identificar correctamente cuál
              modalidad aplica en cada caso, pues los efectos son opuestos. Corporación GC asesora en
              la determinación del régimen aplicable y en las acciones procedentes ante la inactividad.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "derecho-notarial": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          El Derecho Notarial regula la función del notario público como depositario de la fe
          pública: el profesional autorizado por el Estado para dar autenticidad y certeza
          jurídica a los actos y contratos que las personas celebran. En Costa Rica, el Código
          Notarial (Ley N.° 7764 del 17 de abril de 1998) regula íntegramente el ejercicio de
          la función notarial, los requisitos de los instrumentos públicos y el régimen
          disciplinario de los notarios.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Corporación GC cuenta con notarios públicos activos que brindan servicios notariales
          completos, con especial fortaleza en actos vinculados al Derecho Público: protocolización
          de acuerdos de órganos colegiados, constitución de fundaciones y asociaciones de interés
          público, y formalización de contratos administrativos.
        </p>
      </section>

      <Instrumento titulo="Escrituras públicas" fundamento="Código Notarial, arts. 99 a 117">
        <p>
          La escritura pública es el instrumento notarial por excelencia. Se otorga ante notario
          público, quien da fe de la identidad de los comparecientes, de su capacidad legal y de
          la libre manifestación de su voluntad. Los artículos 99 a 117 del Código Notarial
          regulan los requisitos formales de la escritura: encabezamiento, comparecencia,
          exposición, estipulaciones, otorgamiento y autorización del notario.
        </p>
        <p>
          Las escrituras públicas son el medio obligatorio para formalizar actos que requieren
          inscripción registral: compraventas de bienes inmuebles, constitución de hipotecas,
          donaciones de inmuebles, constitución y modificación de sociedades, y poderes generales.
          Una escritura defectuosa puede ser calificada negativamente por el Registro y rechazada
          su inscripción.
        </p>
      </Instrumento>

      <Instrumento titulo="Compraventas y traspasos de bienes inmuebles" fundamento="Código Notarial, art. 99; Código Civil, arts. 1049 a 1082">
        <p>
          La compraventa de bienes inmuebles debe formalizarse en escritura pública para su
          inscripción en el Registro Nacional. El notario verifica la titularidad del bien en
          el Registro Público, la ausencia de gravámenes o anotaciones que impidan la
          transmisión, la identidad y capacidad de las partes, y el cumplimiento de requisitos
          fiscales (impuesto de traspaso, timbres). El Código Civil regula el contrato de
          compraventa en sus artículos 1049 a 1082.
        </p>
        <p>
          La labor notarial incluye la redacción de la escritura, la verificación de estudios
          registrales, el cálculo y pago de impuestos y timbres, la presentación del documento
          ante el Registro Nacional y el seguimiento hasta su inscripción definitiva.
        </p>
      </Instrumento>

      <Instrumento titulo="Constitución de sociedades y personas jurídicas" fundamento="Código de Comercio, arts. 5 a 17; Ley de Asociaciones, Ley 218">
        <p>
          La constitución de una sociedad anónima, sociedad de responsabilidad limitada u otra
          forma societaria requiere escritura pública e inscripción en el Registro de Personas
          Jurídicas del Registro Nacional. El Código de Comercio (artículos 5 a 17) establece
          los requisitos del pacto constitutivo: denominación social, domicilio, objeto, capital
          social, representación legal, administración y plazo social.
        </p>
        <p>
          Las asociaciones civiles y fundaciones se constituyen conforme a la Ley de Asociaciones
          (Ley N.° 218) y la Ley de Fundaciones (Ley N.° 5338), respectivamente, y también
          requieren protocolización notarial del acta constitutiva e inscripción registral. En
          todos los casos, el notario asesora sobre la estructura más adecuada según los fines
          de la organización.
        </p>
      </Instrumento>

      <Instrumento titulo="Hipotecas y garantías reales" fundamento="Código Civil, arts. 409 a 457; Código Notarial, art. 99">
        <p>
          La constitución de hipotecas sobre bienes inmuebles —o de prendas sobre bienes
          muebles inscribibles— requiere escritura pública e inscripción registral para su
          oponibilidad frente a terceros. El Código Civil regula la hipoteca en los artículos
          409 a 457: su constitución, extensión, prelación, cancelación y ejecución.
        </p>
        <p>
          El notario redacta la escritura de hipoteca verificando que el bien esté libre de
          cargas preferentes, que el monto garantizado sea determinado o determinable, y que se
          cumplan los requisitos fiscales. En operaciones de crédito con instituciones
          financieras, el notario coordina con el acreedor los términos del gravamen y gestiona
          su inscripción registral.
        </p>
      </Instrumento>

      <Instrumento titulo="Protocolización de actas y documentos" fundamento="Código Notarial, arts. 118 a 122">
        <p>
          La protocolización es el acto notarial mediante el cual se incorpora al protocolo del
          notario un documento que originalmente no fue otorgado como escritura pública. Los
          artículos 118 a 122 del Código Notarial regulan este acto. Se protocolizan, entre
          otros: actas de asambleas de sociedades, acuerdos de juntas directivas, documentos
          extranjeros previamente apostillados, resoluciones judiciales y actas de órganos
          colegiados de la Administración Pública.
        </p>
        <p>
          La protocolización confiere al documento la misma fuerza probatoria que una escritura
          pública original y permite su inscripción registral cuando la ley así lo exige.
        </p>
      </Instrumento>

      <Instrumento titulo="Certificaciones y actas notariales" fundamento="Código Notarial, arts. 123 a 133">
        <p>
          El notario público está facultado para emitir certificaciones de hechos que presencie
          o que consten en su protocolo, así como para levantar actas notariales de hechos que
          le conste haber presenciado. Los artículos 123 a 133 del Código Notarial regulan estos
          instrumentos. Las certificaciones notariales incluyen: copias certificadas de
          escrituras, constancias de hechos, autenticación de firmas y certificaciones de
          documentos.
        </p>
        <p>
          Las actas notariales de hechos son especialmente relevantes en materia probatoria:
          permiten dejar constancia fehaciente de situaciones que podrían ser necesarias como
          prueba en un proceso judicial o administrativo posterior — por ejemplo, el estado de
          un inmueble, la celebración de una asamblea o la entrega de un bien.
        </p>
      </Instrumento>

      <Instrumento titulo="Gestión registral" fundamento="Ley de creación del Registro Nacional, Ley 5695">
        <p>
          La gestión registral comprende todos los trámites necesarios para inscribir, modificar
          o cancelar asientos en el Registro Nacional de Costa Rica: Registro de la Propiedad
          (bienes inmuebles y muebles), Registro de Personas Jurídicas (sociedades, asociaciones,
          fundaciones) y Registro de Bienes Muebles (vehículos, aeronaves, embarcaciones). La
          Ley N.° 5695 crea el Registro Nacional y establece su organización.
        </p>
        <p>
          El notario presenta los documentos ante el Registro, atiende las prevenciones del
          registrador cuando el documento es observado, y da seguimiento hasta la inscripción
          definitiva. Una gestión registral diligente evita demoras que pueden afectar la
          seguridad jurídica de las transacciones.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre derecho notarial
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué requisitos debe cumplir una escritura pública en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Los artículos 99 a 117 del Código Notarial (Ley N.° 7764) regulan los requisitos formales
              de la escritura pública. Debe contener un encabezamiento con el número de escritura, la
              hora, fecha y lugar del otorgamiento; la comparecencia con la identificación plena de los
              otorgantes, su capacidad legal y la libre manifestación de su voluntad; la exposición de
              los antecedentes del acto; las estipulaciones que contienen las cláusulas del negocio
              jurídico; y la autorización del notario con su firma y sello. El notario da fe de la
              identidad de los comparecientes y de que el acto se otorgó conforme a derecho. Las
              escrituras públicas son el medio obligatorio para formalizar actos que requieren inscripción
              registral: compraventas de inmuebles, constitución de hipotecas, donaciones de inmuebles,
              constitución de sociedades y poderes generales. Una escritura defectuosa puede ser
              calificada negativamente por el Registro Nacional y rechazada su inscripción, conforme
              a la Ley de creación del Registro Nacional (Ley N.° 5695).
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué trámites notariales se necesitan para comprar un inmueble en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La compraventa de bienes inmuebles debe formalizarse en escritura pública conforme al
              artículo 99 del Código Notarial y a los artículos 1049 a 1082 del Código Civil. El notario
              realiza un estudio registral para verificar la titularidad del bien en el Registro Público,
              la ausencia de gravámenes, anotaciones o limitaciones que impidan la transmisión. Verifica
              la identidad y capacidad de las partes y el cumplimiento de los requisitos fiscales:
              impuesto de traspaso y timbres correspondientes. La labor notarial incluye la redacción
              completa de la escritura de compraventa, la verificación de estudios registrales, el
              cálculo y pago de impuestos y timbres, la presentación del documento ante el Registro
              Nacional conforme a la Ley N.° 5695 y el seguimiento hasta su inscripción definitiva.
              Cuando la operación involucra financiamiento bancario, el notario coordina además la
              constitución de la hipoteca (arts. 409 a 457 del Código Civil) y la inscripción del
              gravamen. Una gestión registral diligente evita demoras que afecten la seguridad jurídica.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué es la protocolización de documentos y cuándo se necesita?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La protocolización es el acto notarial mediante el cual se incorpora al protocolo del
              notario un documento que originalmente no fue otorgado como escritura pública. Los artículos
              118 a 122 del Código Notarial regulan este acto y establecen sus requisitos formales. Se
              protocolizan, entre otros: actas de asambleas de sociedades, acuerdos de juntas directivas,
              documentos extranjeros previamente apostillados, resoluciones judiciales y actas de órganos
              colegiados de la Administración Pública. La protocolización confiere al documento la misma
              fuerza probatoria que una escritura pública original y permite su inscripción registral
              cuando la ley así lo exige. Es indispensable para la constitución de sociedades (arts. 5 a
              17 del Código de Comercio), la modificación de estatutos sociales, la inscripción de
              poderes y la formalización de actos que requieren publicidad registral conforme a la Ley
              N.° 5695 del Registro Nacional. El notario verifica la autenticidad del documento y su
              conformidad con el ordenamiento jurídico antes de incorporarlo a su protocolo.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "recursos-de-amparo": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          El recurso de amparo es la garantía constitucional que permite a toda persona
          obtener la protección inmediata de sus derechos fundamentales cuando estos son
          amenazados o vulnerados por órganos públicos o sujetos de derecho privado. La
          Ley de la Jurisdicción Constitucional (Ley N.° 7135) regula este proceso en
          sus artículos 29 a 56, estableciendo un procedimiento sumario, informal y de
          tramitación preferente ante la Sala Constitucional de la Corte Suprema de Justicia.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Corporación GC cuenta con amplia experiencia en la interposición de recursos de
          amparo para la defensa de derechos fundamentales de personas físicas y jurídicas
          frente a actuaciones u omisiones de la Administración Pública. A continuación se
          describen los instrumentos que integran este mecanismo de tutela constitucional.
        </p>
      </section>

      <Instrumento titulo="Amparo contra órganos y servidores públicos" fundamento="Ley 7135, art. 29">
        <p>
          El artículo 29 de la Ley de la Jurisdicción Constitucional establece que el recurso
          de amparo procede contra toda disposición, acuerdo o resolución, así como contra toda
          acción, omisión o simple actuación material no fundada en un acto administrativo eficaz,
          de los servidores y órganos públicos que haya violado, viole o amenace violar cualquiera
          de los derechos fundamentales consagrados en la Constitución Política y en los instrumentos
          internacionales de derechos humanos vigentes en Costa Rica.
        </p>
        <p>
          Esta modalidad abarca cualquier conducta del poder público —acciones positivas, omisiones
          o amenazas— que afecte derechos fundamentales, sin que se exija al recurrente el
          agotamiento previo de la vía administrativa.
        </p>
      </Instrumento>

      <Instrumento titulo="Amparo contra sujetos de derecho privado" fundamento="Ley 7135, art. 30">
        <p>
          El artículo 30 de la Ley N.° 7135 extiende la protección del amparo a los casos en
          que la violación de derechos fundamentales proviene de sujetos de derecho privado,
          siempre que estos actúen o deban actuar en ejercicio de funciones o potestades públicas,
          o se encuentren en una posición de poder frente al recurrente de la cual se derive la
          posibilidad de lesionar sus derechos fundamentales.
        </p>
        <p>
          Este instrumento resulta especialmente relevante frente a entidades privadas que
          prestan servicios públicos, concesionarios, empresas en posición de dominio o
          cualquier sujeto particular que, por su posición fáctica o jurídica, pueda afectar
          derechos fundamentales de terceros.
        </p>
      </Instrumento>

      <Instrumento titulo="Legitimación para interponer el amparo" fundamento="Ley 7135, art. 33">
        <p>
          El artículo 33 de la Ley N.° 7135 consagra una legitimación amplísima: cualquier persona
          puede interponer el recurso de amparo, incluso en favor de un tercero, sin necesidad de
          poder especial ni de demostrar un interés directo. Esta legitimación universal refleja
          la naturaleza del amparo como instrumento de tutela objetiva de los derechos fundamentales
          y permite que organizaciones, defensores de derechos humanos o cualquier ciudadano actúen
          en defensa del orden constitucional.
        </p>
      </Instrumento>

      <Instrumento titulo="Plazo para la interposición del amparo" fundamento="Ley 7135, art. 35">
        <p>
          Conforme al artículo 35 de la Ley N.° 7135, el recurso de amparo puede interponerse en
          cualquier tiempo mientras subsista la violación, amenaza, perturbación o restricción del
          derecho fundamental. No existe un plazo de caducidad cuando la lesión es continuada. Si
          se trata de una actuación consumada, el recurso deberá plantearse dentro de los dos meses
          siguientes a la fecha en que el perjudicado tuvo noticia fehaciente de la actuación u
          omisión lesiva.
        </p>
      </Instrumento>

      <Instrumento titulo="Medidas cautelares en el amparo" fundamento="Ley 7135, arts. 43-44">
        <p>
          Los artículos 43 y 44 de la Ley N.° 7135 facultan a la Sala Constitucional para adoptar
          medidas cautelares desde el momento mismo de la interposición del recurso de amparo. Estas
          medidas pueden consistir en la suspensión de la ejecución del acto o conducta impugnada,
          así como en cualquier otra disposición de conservación o seguridad que el Tribunal estime
          necesaria para evitar que la lesión al derecho fundamental se torne irreparable.
        </p>
        <p>
          La adopción de medidas cautelares no requiere rendición de garantía y se dicta inaudita
          altera parte, sin perjuicio de la posibilidad de la autoridad recurrida de solicitar su
          revocación o modificación.
        </p>
      </Instrumento>

      <Instrumento titulo="Sentencia y efectos restitutorios" fundamento="Ley 7135, arts. 49, 51">
        <p>
          El artículo 49 de la Ley N.° 7135 establece que la sentencia que declare con lugar el
          recurso de amparo deberá indicar el derecho lesionado, la conducta que lo lesiona,
          la orden de restitución al agraviado en el pleno goce de su derecho y la condena en
          abstracto al pago de daños, perjuicios y costas. El artículo 51 dispone que la
          sentencia tiene efectos declarativos y retroactivos a la fecha de la interposición
          del recurso, sin perjuicio de que la Sala pueda dimensionar sus efectos temporales
          según las circunstancias del caso.
        </p>
      </Instrumento>

      <Instrumento titulo="Ejecución e indemnización en vía contencioso-administrativa" fundamento="Ley 7135, art. 56">
        <p>
          El artículo 56 de la Ley N.° 7135 establece que la condena en abstracto al pago de
          daños, perjuicios y costas dictada en la sentencia de amparo se liquidará en la vía
          contencioso-administrativa mediante el proceso de ejecución correspondiente. Esta
          disposición conecta la tutela constitucional con la jurisdicción contencioso-administrativa,
          de modo que el amparado puede obtener la cuantificación y cobro efectivo de los daños
          sufridos como consecuencia de la violación de sus derechos fundamentales.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre el recurso de amparo
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué es un recurso de amparo en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El recurso de amparo es la garantía constitucional que permite a toda persona obtener
              la protección inmediata de sus derechos fundamentales cuando estos son amenazados o
              vulnerados por un órgano público o, en ciertos casos, por sujetos privados. Está
              regulado en los artículos 29 a 56 de la Ley de la Jurisdicción Constitucional (Ley N.°
              7135) y se tramita ante la Sala Constitucional de la Corte Suprema de Justicia. El
              procedimiento es sumario, informal y de tramitación preferente: no requiere patrocinio
              letrado obligatorio, no exige formalidades especiales y puede presentarse por escrito o
              incluso verbalmente. El amparo protege todos los derechos consagrados en la Constitución
              Política y en los instrumentos internacionales de derechos humanos vigentes en Costa Rica.
              Es el mecanismo de tutela de derechos fundamentales más utilizado en el sistema jurídico
              costarricense, con miles de recursos resueltos anualmente por la Sala Constitucional.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Quién puede presentar un recurso de amparo?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Cualquier persona puede interponer un recurso de amparo en Costa Rica, incluso en favor
              de un tercero y sin necesidad de poder especial ni de demostrar un interés directo. El
              artículo 33 de la Ley N.° 7135 consagra una legitimación universal: personas físicas,
              personas jurídicas, organizaciones de la sociedad civil, defensores de derechos humanos
              o cualquier ciudadano pueden actuar en defensa del orden constitucional. Esta amplitud
              refleja la naturaleza del amparo como instrumento de tutela objetiva de los derechos
              fundamentales. El recurso procede contra cualquier disposición, acuerdo, resolución,
              acción, omisión o actuación material de servidores y órganos públicos que viole o amenace
              derechos fundamentales (art. 29). También procede contra sujetos de derecho privado cuando
              estos actúen en ejercicio de funciones públicas o se encuentren en posición de poder frente
              al recurrente (art. 30). No se exige el agotamiento previo de la vía administrativa.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cuál es el plazo para presentar un recurso de amparo?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El plazo para interponer un recurso de amparo depende de la naturaleza de la lesión.
              Conforme al artículo 35 de la Ley N.° 7135, cuando la violación al derecho fundamental
              es continuada —es decir, subsiste en el tiempo—, el recurso puede presentarse en
              cualquier momento mientras dure la lesión, sin plazo de caducidad alguno. Si se trata de
              una actuación consumada (que ya ocurrió y cesó), el recurso debe plantearse dentro de los
              dos meses siguientes a la fecha en que el perjudicado tuvo noticia fehaciente de la
              actuación u omisión lesiva. Es importante distinguir entre ambos supuestos, pues muchas
              violaciones que parecen consumadas son en realidad continuadas (por ejemplo, la denegación
              de un permiso que sigue surtiendo efectos). La Sala Constitucional puede adoptar medidas
              cautelares desde el momento mismo de la interposición, incluyendo la suspensión del acto
              impugnado, sin necesidad de rendir garantía (arts. 43-44).
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué se obtiene si se gana un recurso de amparo?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La sentencia que declara con lugar un recurso de amparo produce efectos amplios y
              restitutorios. Según el artículo 49 de la Ley N.° 7135, la Sala Constitucional debe
              indicar el derecho lesionado, identificar la conducta que lo lesiona, ordenar la
              restitución al agraviado en el pleno goce de su derecho, y condenar en abstracto al
              pago de daños, perjuicios y costas. Los efectos de la sentencia son declarativos y
              retroactivos a la fecha de interposición del recurso (art. 51), aunque la Sala puede
              dimensionar los efectos temporales según las circunstancias del caso. La condena
              económica se liquida posteriormente en la vía contencioso-administrativa mediante el
              proceso de ejecución (art. 56), lo que conecta la tutela constitucional con la
              jurisdicción contencioso-administrativa. Corporación GC asesora tanto en la fase
              constitucional como en la posterior ejecución y cuantificación de daños ante el
              Tribunal Contencioso Administrativo.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "acciones-de-inconstitucionalidad": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          La acción de inconstitucionalidad es el instrumento mediante el cual se solicita a la
          Sala Constitucional la declaración de inconstitucionalidad de leyes, decretos
          ejecutivos, reglamentos, disposiciones de alcance general y actos sujetos al derecho
          público que vulneren normas o principios constitucionales. La Ley de la Jurisdicción
          Constitucional (Ley N.° 7135) regula esta acción en sus artículos 73 a 95.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Corporación GC asesora y representa a personas físicas y jurídicas en la interposición
          de acciones de inconstitucionalidad, tanto por vía incidental —derivada de un asunto
          pendiente de resolución judicial o administrativa— como por legitimación directa en
          defensa de intereses difusos o colectivos. A continuación se describen los instrumentos
          procesales que conforman esta garantía constitucional.
        </p>
      </section>

      <Instrumento titulo="Acción de inconstitucionalidad" fundamento="Ley 7135, art. 73">
        <p>
          El artículo 73 de la Ley N.° 7135 establece que la acción de inconstitucionalidad
          procede contra las leyes y demás disposiciones generales, incluyendo los actos de
          autoridad no legislativa que infrinjan por acción u omisión alguna norma o principio
          constitucional. Puede dirigirse contra leyes formales aprobadas por la Asamblea
          Legislativa, decretos ejecutivos, reglamentos autónomos, reglamentos ejecutivos y
          cualquier disposición de alcance general emanada de un órgano público.
        </p>
        <p>
          También procede contra las acciones u omisiones del poder público que vulneren
          derechos constitucionales, así como contra la aprobación legislativa de convenios
          o tratados internacionales.
        </p>
      </Instrumento>

      <Instrumento titulo="Legitimación incidental" fundamento="Ley 7135, art. 75, párr. 1">
        <p>
          El párrafo primero del artículo 75 de la Ley N.° 7135 establece que cualquier persona
          que sea parte en un proceso judicial o procedimiento administrativo pendiente puede
          interponer la acción de inconstitucionalidad cuando considere que la norma que se le
          aplica es contraria a la Constitución. En este caso, el accionante debe invocar la
          inconstitucionalidad como medio razonable de amparar el derecho o interés que estima
          lesionado.
        </p>
        <p>
          La acción incidental requiere demostrar la existencia de un asunto previo pendiente
          de resolución en sede judicial o administrativa en el cual la norma impugnada resulte
          aplicable y relevante para la decisión del caso.
        </p>
      </Instrumento>

      <Instrumento titulo="Legitimación directa por intereses difusos" fundamento="Ley 7135, art. 75, párr. 2">
        <p>
          El párrafo segundo del artículo 75 de la Ley N.° 7135 establece que no será necesario
          un asunto pendiente de resolución cuando la acción se fundamente en la defensa de
          intereses difusos o que atañen a la colectividad en su conjunto. Esta modalidad de
          legitimación permite que cualquier persona accione directamente ante la Sala
          Constitucional sin necesidad de un proceso previo, siempre que la norma impugnada
          afecte intereses colectivos como el medio ambiente, el patrimonio público, la
          competencia económica o los derechos de los consumidores.
        </p>
      </Instrumento>

      <Instrumento titulo="Audiencia a la Procuraduría General de la República" fundamento="Ley 7135, art. 79">
        <p>
          El artículo 79 de la Ley N.° 7135 dispone que, admitida la acción de
          inconstitucionalidad, la Sala Constitucional conferirá audiencia a la Procuraduría
          General de la República por un plazo de quince días hábiles. La Procuraduría actúa
          como órgano consultivo y defensor de la constitucionalidad del ordenamiento jurídico,
          emitiendo un dictamen técnico-jurídico sobre la conformidad o disconformidad de la
          norma impugnada con el texto constitucional.
        </p>
        <p>
          Adicionalmente, se confiere audiencia al órgano o ente que emitió la norma impugnada,
          a fin de que ejerza su derecho de defensa dentro del mismo plazo.
        </p>
      </Instrumento>

      <Instrumento titulo="Efectos de la sentencia de inconstitucionalidad" fundamento="Ley 7135, arts. 82-87">
        <p>
          Los artículos 82 a 87 de la Ley N.° 7135 regulan los efectos de la sentencia que
          declara la inconstitucionalidad de una norma. La declaratoria tiene efectos erga omnes
          —es decir, generales y obligatorios— y produce la anulación de la norma impugnada con
          efectos declarativos y retroactivos a la fecha de vigencia de la norma, salvo que la
          Sala disponga un dimensionamiento temporal diferente en resguardo de la seguridad
          jurídica o de derechos adquiridos de buena fe.
        </p>
        <p>
          La sentencia estimatoria elimina la norma del ordenamiento jurídico y vincula a todos
          los poderes del Estado, los órganos públicos y los particulares. Las resoluciones de
          la Sala Constitucional son vinculantes erga omnes, salvo para sí misma.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre acciones de inconstitucionalidad
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Quién puede interponer una acción de inconstitucionalidad en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La legitimación para interponer una acción de inconstitucionalidad depende de la modalidad
              utilizada. La legitimación incidental, regulada en el párrafo primero del artículo 75 de
              la Ley N.° 7135, permite que cualquier persona que sea parte en un proceso judicial o
              procedimiento administrativo pendiente interponga la acción cuando considere que la norma
              que se le aplica es contraria a la Constitución. Se exige demostrar la existencia del
              asunto previo y que la norma impugnada resulte aplicable y relevante para la decisión del
              caso. La legitimación directa, contemplada en el párrafo segundo del artículo 75, permite
              que cualquier persona accione sin necesidad de un proceso previo cuando la acción se
              fundamente en la defensa de intereses difusos o que atañen a la colectividad en su
              conjunto: medio ambiente, patrimonio público, competencia económica o derechos de los
              consumidores. Esta modalidad amplía significativamente el acceso a la justicia
              constitucional al no requerir un asunto pendiente para cuestionar la validez de una norma.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Contra qué normas procede la acción de inconstitucionalidad?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El artículo 73 de la Ley N.° 7135 establece que la acción de inconstitucionalidad procede
              contra las leyes y demás disposiciones generales que infrinjan por acción u omisión alguna
              norma o principio constitucional. Esto incluye leyes formales aprobadas por la Asamblea
              Legislativa, decretos ejecutivos dictados por el Poder Ejecutivo conforme al artículo 140
              de la Constitución, reglamentos autónomos de entes descentralizados, reglamentos ejecutivos
              y cualquier disposición de alcance general emanada de un órgano público. También procede
              contra la aprobación legislativa de convenios o tratados internacionales y contra las
              acciones u omisiones del poder público que vulneren derechos constitucionales. La acción
              se presenta ante la Sala Constitucional de la Corte Suprema de Justicia, que una vez
              admitida confiere audiencia a la Procuraduría General de la República por quince días
              hábiles (art. 79) y al órgano emisor de la norma impugnada para que ejerzan su derecho
              de defensa antes del pronunciamiento de fondo.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué efectos tiene la sentencia que declara inconstitucional una ley en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Los artículos 82 a 87 de la Ley N.° 7135 regulan los efectos de la sentencia estimatoria.
              La declaratoria de inconstitucionalidad tiene efectos erga omnes, es decir, generales y
              obligatorios para todos. La sentencia produce la anulación de la norma impugnada con
              efectos declarativos y retroactivos a la fecha de vigencia de la norma, eliminándola del
              ordenamiento jurídico. Sin embargo, la Sala Constitucional puede disponer un
              dimensionamiento temporal diferente de los efectos en resguardo de la seguridad jurídica
              o de derechos adquiridos de buena fe. La sentencia estimatoria vincula a todos los poderes
              del Estado, los órganos públicos y los particulares. Las resoluciones de la Sala
              Constitucional son vinculantes erga omnes, salvo para sí misma, lo que le permite
              evolucionar su jurisprudencia. Este control concentrado de constitucionalidad convierte a
              la Sala en el garante último de la supremacía constitucional frente a las normas del
              ordenamiento infraconstitucional costarricense.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "procedimientos-sancionatorios": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          Los procedimientos sancionatorios administrativos son los procesos mediante los cuales
          la Administración Pública investiga, determina y sanciona conductas contrarias al
          ordenamiento jurídico cometidas por administrados o por sus propios servidores. La Ley
          General de la Administración Pública (LGAP) regula el procedimiento administrativo
          ordinario en sus artículos 308 a 319 y el procedimiento sumario en los artículos 320 a
          326, mientras que los artículos 39 y 41 de la Constitución Política garantizan el debido
          proceso y la defensa efectiva.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Corporación GC asesora y representa a personas físicas y jurídicas sometidas a
          procedimientos sancionatorios administrativos, garantizando el respeto de las garantías
          constitucionales del debido proceso en todas las etapas del procedimiento. A continuación
          se describen los instrumentos que integran esta materia.
        </p>
      </section>

      <Instrumento titulo="Procedimiento administrativo ordinario sancionatorio" fundamento="LGAP, arts. 308-319">
        <p>
          Los artículos 308 a 319 de la Ley General de la Administración Pública regulan el
          procedimiento administrativo ordinario, que resulta obligatorio cuando el acto final
          pueda causar perjuicio grave al administrado al suprimir o limitar sus derechos
          subjetivos, o cuando la naturaleza de la sanción lo exija. Este procedimiento garantiza
          la comparecencia oral y privada, el derecho a ofrecer prueba, formular alegatos y
          ejercer la defensa técnica.
        </p>
        <p>
          El procedimiento ordinario se inicia mediante un auto de apertura que debe indicar con
          precisión los hechos investigados, la normativa presuntamente infringida y las posibles
          consecuencias sancionatorias, a fin de garantizar el derecho de defensa del administrado.
        </p>
      </Instrumento>

      <Instrumento titulo="Procedimiento sumario" fundamento="LGAP, arts. 320-326">
        <p>
          Los artículos 320 a 326 de la LGAP regulan el procedimiento sumario, aplicable cuando
          el acto final no pueda causar perjuicio grave al administrado ni suprimir o limitar
          sus derechos subjetivos. Este procedimiento se caracteriza por plazos más breves y una
          tramitación simplificada, aunque debe respetar igualmente las garantías esenciales del
          debido proceso: notificación, acceso al expediente, derecho de audiencia y posibilidad
          de recurrir.
        </p>
        <p>
          La distinción entre procedimiento ordinario y sumario es fundamental, pues la aplicación
          indebida de un procedimiento sumario cuando correspondía el ordinario constituye un vicio
          de nulidad absoluta del acto sancionatorio resultante.
        </p>
      </Instrumento>

      <Instrumento titulo="Garantías del debido proceso administrativo" fundamento="Constitución, arts. 39, 41">
        <p>
          Los artículos 39 y 41 de la Constitución Política consagran las garantías fundamentales
          del debido proceso, aplicables a todo procedimiento sancionatorio administrativo. Estas
          garantías comprenden: la notificación al investigado del inicio del procedimiento y de
          los cargos formulados, el acceso irrestricto al expediente administrativo, el derecho
          de audiencia previa a la imposición de cualquier sanción, el derecho a la defensa
          técnica mediante abogado, el principio de tipicidad, el principio de culpabilidad, la
          presunción de inocencia y la prohibición de doble sanción por los mismos hechos.
        </p>
      </Instrumento>

      <Instrumento titulo="Órgano director del procedimiento" fundamento="LGAP, art. 309">
        <p>
          El artículo 309 de la LGAP establece que el procedimiento administrativo ordinario será
          instruido por un órgano director del procedimiento, que puede ser unipersonal o colegiado.
          El órgano director es responsable de tramitar el expediente, citar a las partes, recibir
          la prueba, celebrar la comparecencia oral y privada, y emitir la recomendación o informe
          final al órgano decisor. La independencia funcional del órgano director respecto del
          órgano que dictará el acto final constituye una garantía esencial de imparcialidad.
        </p>
      </Instrumento>

      <Instrumento titulo="Recursos contra el acto sancionatorio" fundamento="LGAP, arts. 342-352">
        <p>
          Los artículos 342 a 352 de la LGAP regulan los recursos administrativos contra los
          actos sancionatorios: el recurso de revocatoria —interpuesto ante el mismo órgano que
          dictó el acto— y el recurso de apelación —interpuesto ante el superior jerárquico—.
          Ambos recursos deben interponerse dentro de los plazos legales y permiten la revisión
          integral del acto impugnado, tanto en sus aspectos de legalidad como de oportunidad.
        </p>
        <p>
          El agotamiento de la vía administrativa mediante la interposición de los recursos
          correspondientes constituye, como regla general, un presupuesto procesal para acceder
          a la jurisdicción contencioso-administrativa.
        </p>
      </Instrumento>

      <Instrumento titulo="Impugnación ante la jurisdicción contencioso-administrativa" fundamento="CPCA, arts. 1-2">
        <p>
          Agotada la vía administrativa, el administrado puede impugnar el acto sancionatorio
          definitivo ante el Tribunal Contencioso Administrativo conforme al Código Procesal
          Contencioso Administrativo (CPCA). Los artículos 1 y 2 del CPCA atribuyen a esta
          jurisdicción el conocimiento de las pretensiones contra las conductas de la
          Administración Pública, incluyendo la anulación de actos sancionatorios dictados
          con vicios de nulidad, la restitución de derechos y la indemnización de daños y
          perjuicios causados por sanciones ilegítimas.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre procedimientos sancionatorios
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué derechos tiene una persona sometida a un procedimiento sancionatorio administrativo?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Los artículos 39 y 41 de la Constitución Política consagran las garantías fundamentales
              del debido proceso aplicables a todo procedimiento sancionatorio. Estas incluyen: la
              notificación del inicio del procedimiento y de los cargos formulados, el acceso irrestricto
              al expediente administrativo, el derecho de audiencia previa a la imposición de cualquier
              sanción, el derecho a la defensa técnica mediante abogado, el principio de tipicidad
              (solo pueden sancionarse conductas previamente descritas en la norma), el principio de
              culpabilidad, la presunción de inocencia y la prohibición de doble sanción por los mismos
              hechos (non bis in idem). Cuando el acto final pueda causar perjuicio grave o suprimir
              derechos, la LGAP exige el procedimiento ordinario de los artículos 308 a 319 con
              comparecencia oral y privada. El artículo 309 garantiza que un órgano director imparcial
              instruya el expediente. La violación de cualquiera de estas garantías constituye un vicio
              de nulidad absoluta impugnable ante la jurisdicción contencioso-administrativa.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cuál es la diferencia entre el procedimiento ordinario y el sumario en materia sancionatoria?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La LGAP establece dos tipos de procedimiento administrativo para la imposición de
              sanciones. El procedimiento ordinario, regulado en los artículos 308 a 319, es obligatorio
              cuando el acto final pueda causar perjuicio grave al administrado al suprimir o limitar
              sus derechos subjetivos. Garantiza la comparecencia oral y privada ante un órgano director
              (art. 309), el derecho a ofrecer prueba de descargo, formular alegatos y ejercer defensa
              técnica. El procedimiento sumario, regulado en los artículos 320 a 326, se aplica cuando
              el acto final no pueda causar perjuicio grave ni suprimir derechos subjetivos; se
              caracteriza por plazos más breves y tramitación simplificada, aunque debe respetar
              igualmente las garantías esenciales del debido proceso. La distinción es fundamental porque
              la aplicación indebida de un procedimiento sumario cuando correspondía el ordinario
              constituye un vicio de nulidad absoluta del acto sancionatorio resultante (art. 223 LGAP),
              que puede ser declarada incluso de oficio. Corporación GC verifica la correcta elección
              del procedimiento como primera línea de defensa en casos sancionatorios.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo se impugna una sanción administrativa en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Las sanciones administrativas pueden impugnarse en dos instancias sucesivas. En vía
              administrativa, los artículos 342 a 352 de la LGAP regulan los recursos procedentes: el
              recurso de revocatoria se interpone ante el mismo órgano que dictó la sanción dentro de
              tres días hábiles, y el recurso de apelación se presenta subsidiariamente ante el superior
              jerárquico. Ambos recursos permiten la revisión integral del acto, tanto en sus aspectos
              de legalidad como de oportunidad. El agotamiento de estos recursos constituye, como regla
              general, un presupuesto procesal para acceder a la jurisdicción contencioso-administrativa
              conforme al artículo 31 del CPCA. Una vez agotada la vía administrativa, el sancionado
              puede demandar ante el Tribunal Contencioso Administrativo conforme a los artículos 1 y 2
              del CPCA, solicitando la anulación del acto sancionatorio, la restitución de derechos y la
              indemnización de daños y perjuicios. Durante el proceso jurisdiccional pueden solicitarse
              medidas cautelares (arts. 19-30 CPCA) para suspender los efectos de la sanción impugnada.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "empleo-publico": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          El empleo público en Costa Rica se rige por un conjunto de normas que regulan el
          ingreso, la permanencia, el régimen disciplinario y la salida de los servidores
          públicos. El Estatuto de Servicio Civil (Ley N.° 1581), la Ley Marco de Empleo
          Público (Ley N.° 10159) y la Ley General de la Administración Pública constituyen
          los cuerpos normativos fundamentales que disciplinan las relaciones de empleo público
          y los procedimientos sancionatorios aplicables a los funcionarios del Estado.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Corporación GC asesora y representa a servidores públicos y entidades estatales en
          asuntos de empleo público, incluyendo procedimientos disciplinarios, impugnaciones
          ante el Tribunal de Servicio Civil y demandas ante la jurisdicción
          contencioso-administrativa. A continuación se describen los instrumentos jurídicos
          que integran esta área de práctica.
        </p>
      </section>

      <Instrumento titulo="Régimen disciplinario del Estatuto de Servicio Civil" fundamento="Ley 1581, arts. 59-82">
        <p>
          Los artículos 59 a 82 del Estatuto de Servicio Civil establecen el régimen disciplinario
          aplicable a los servidores del Poder Ejecutivo cubiertos por el Servicio Civil. Este
          régimen contempla cuatro tipos de sanciones: la amonestación verbal, la amonestación
          escrita, la suspensión sin goce de salario y el despido. La imposición de cada sanción
          se rige por criterios de proporcionalidad y gravedad de la falta, debiendo la
          Administración observar el procedimiento que corresponda según la naturaleza de la
          sanción.
        </p>
      </Instrumento>

      <Instrumento titulo="Procedimiento ordinario obligatorio para sanciones graves" fundamento="LGAP, arts. 308-319">
        <p>
          Para la imposición de sanciones graves —suspensión sin goce de salario y despido—, la
          Administración debe tramitar el procedimiento administrativo ordinario regulado en los
          artículos 308 a 319 de la Ley General de la Administración Pública. Este procedimiento
          garantiza al servidor investigado el derecho a conocer los cargos formulados, a acceder
          al expediente administrativo, a ofrecer prueba de descargo, a participar en la
          comparecencia oral y privada, y a contar con asistencia letrada durante todas las
          etapas del procedimiento.
        </p>
        <p>
          La omisión del procedimiento ordinario o la violación de cualquiera de sus garantías
          esenciales constituye un vicio de nulidad absoluta que puede ser impugnado en sede
          administrativa y jurisdiccional.
        </p>
      </Instrumento>

      <Instrumento titulo="Ley Marco de Empleo Público" fundamento="Ley 10159">
        <p>
          La Ley N.° 10159, Ley Marco de Empleo Público, establece un régimen unificado de
          empleo público aplicable a la generalidad de las instituciones del Estado. Esta ley
          regula las condiciones de ingreso, la clasificación de puestos, el sistema de
          remuneraciones, la evaluación del desempeño, la movilidad laboral y el régimen
          disciplinario de los servidores públicos, buscando armonizar las distintas normativas
          sectoriales que históricamente regularon el empleo público de manera fragmentaria.
        </p>
        <p>
          La Ley Marco introduce un régimen disciplinario propio con tipificación de faltas
          leves, graves y gravísimas, así como un procedimiento sancionatorio que debe respetar
          las garantías del debido proceso administrativo.
        </p>
      </Instrumento>

      <Instrumento titulo="Tribunal de Servicio Civil" fundamento="Ley 1581, arts. 7-14">
        <p>
          Los artículos 7 a 14 del Estatuto de Servicio Civil regulan el Tribunal de Servicio
          Civil, órgano especializado competente para conocer en alzada de los reclamos de los
          servidores públicos cubiertos por el régimen de Servicio Civil contra las decisiones
          de despido dictadas por la Administración. El Tribunal tiene la potestad de confirmar,
          revocar o modificar la decisión impugnada, y su resolución agota la vía administrativa
          para efectos de la impugnación jurisdiccional posterior.
        </p>
      </Instrumento>

      <Instrumento titulo="Impugnación ante la jurisdicción contencioso-administrativa" fundamento="CPCA, arts. 1-2">
        <p>
          Agotada la vía administrativa —ya sea ante el superior jerárquico o ante el Tribunal
          de Servicio Civil—, el servidor público puede impugnar el acto sancionatorio ante la
          jurisdicción contencioso-administrativa conforme al Código Procesal Contencioso
          Administrativo. Esta vía permite solicitar la anulación del acto de despido o sanción,
          el reconocimiento de salarios dejados de percibir, la reinstalación en el cargo y la
          indemnización de los daños y perjuicios causados.
        </p>
      </Instrumento>

      <Instrumento titulo="Suspensión provisional durante investigación" fundamento="LGAP, art. 309; Ley 1581, art. 67">
        <p>
          La Administración puede disponer la suspensión provisional del servidor público durante
          la tramitación del procedimiento disciplinario, como medida cautelar y no como sanción.
          El artículo 67 del Estatuto de Servicio Civil contempla la suspensión provisional con
          goce de salario, mientras que la LGAP permite la adopción de medidas cautelares en el
          marco del procedimiento ordinario. Esta suspensión debe ser proporcionada, debidamente
          motivada y temporal, y no implica pronunciamiento alguno sobre la culpabilidad del
          servidor investigado.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre empleo público
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué procedimiento debe seguirse para despedir a un servidor público en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Para despedir a un servidor público cubierto por el régimen de Servicio Civil, la
              Administración debe tramitar obligatoriamente el procedimiento administrativo ordinario
              regulado en los artículos 308 a 319 de la LGAP. Este procedimiento garantiza al servidor
              investigado el derecho a conocer los cargos formulados, acceder al expediente
              administrativo, ofrecer prueba de descargo, participar en la comparecencia oral y privada,
              y contar con asistencia letrada. El artículo 309 exige que un órgano director imparcial
              instruya el procedimiento. El régimen disciplinario del Estatuto de Servicio Civil
              (Ley N.° 1581, arts. 59-82) establece las causales y tipos de sanción: amonestación
              verbal, amonestación escrita, suspensión sin goce de salario y despido. La Ley Marco de
              Empleo Público (Ley N.° 10159) introduce además un régimen disciplinario propio con
              tipificación de faltas leves, graves y gravísimas. La omisión del procedimiento o la
              violación de cualquiera de sus garantías esenciales constituye nulidad absoluta impugnable.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo se impugna un despido en el sector público costarricense?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El servidor público despedido cuenta con varias vías de impugnación. En primera instancia,
              puede acudir al Tribunal de Servicio Civil, regulado en los artículos 7 a 14 del Estatuto
              de Servicio Civil (Ley N.° 1581), que es el órgano especializado competente para conocer
              en alzada de los reclamos contra decisiones de despido. El Tribunal puede confirmar,
              revocar o modificar la decisión impugnada, y su resolución agota la vía administrativa.
              Posteriormente, agotada la vía administrativa, el servidor puede demandar ante la
              jurisdicción contencioso-administrativa conforme a los artículos 1 y 2 del CPCA,
              solicitando la anulación del acto de despido, el reconocimiento de salarios dejados de
              percibir, la reinstalación en el cargo y la indemnización de daños y perjuicios causados.
              Durante la tramitación del procedimiento disciplinario, la Administración puede disponer la
              suspensión provisional del servidor con goce de salario (art. 67 del Estatuto), como medida
              cautelar que no constituye sanción ni implica pronunciamiento sobre culpabilidad.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué cambió la Ley Marco de Empleo Público para los servidores del Estado?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La Ley N.° 10159, Ley Marco de Empleo Público, estableció un régimen unificado aplicable
              a la generalidad de las instituciones del Estado, buscando armonizar las distintas
              normativas sectoriales que regulaban el empleo público de manera fragmentaria. La ley
              regula las condiciones de ingreso al servicio público, la clasificación de puestos, el
              sistema de remuneraciones basado en salario global, la evaluación del desempeño como
              requisito para la permanencia, la movilidad laboral entre instituciones y un régimen
              disciplinario propio con tipificación de faltas leves, graves y gravísimas. El régimen
              disciplinario de la Ley Marco establece sanciones específicas y un procedimiento
              sancionatorio que debe respetar las garantías del debido proceso consagradas en los
              artículos 39 y 41 de la Constitución Política y desarrolladas en los artículos 308 a 319
              de la LGAP. La ley coexiste con el Estatuto de Servicio Civil (Ley N.° 1581) y su
              articulación requiere un análisis especializado para determinar cuál normativa prevalece
              en cada caso concreto según la institución y el tipo de servidor involucrado.
            </p>
          </div>
        </div>
      </section>
    </>
  ),
  "servicio-publico": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          La regulación de los servicios públicos en Costa Rica se articula
          principalmente a través de la Ley de la Autoridad Reguladora de los
          Servicios Públicos (Ley N.° 7593 del 9 de agosto de 1996), que creó la
          ARESEP como ente encargado de fijar tarifas y fiscalizar la prestación
          de servicios públicos esenciales: energía eléctrica, telecomunicaciones,
          agua potable, combustibles y transporte público, entre otros. Los
          operadores y usuarios disponen de una serie de instrumentos legales para
          participar en los procedimientos regulatorios, impugnar las resoluciones
          tarifarias y defender sus derechos ante esta jurisdicción especializada.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          La materia regulatoria de servicios públicos comprende tanto los
          procedimientos administrativos ante ARESEP y SUTEL como la vía
          jurisdiccional contencioso-administrativa para la impugnación de las
          resoluciones que de ellos deriven.
        </p>
      </section>

      <Instrumento titulo="Fijación tarifaria ordinaria" fundamento="Ley 7593, arts. 30 a 32">
        <p>
          La fijación tarifaria ordinaria es el procedimiento mediante el cual la
          ARESEP establece las tarifas que los prestadores de servicios públicos
          pueden cobrar a los usuarios. El artículo 30 de la Ley 7593 dispone que
          para fijar las tarifas, la Autoridad Reguladora debe tomar en cuenta
          los criterios de equidad social, sostenibilidad ambiental, conservación
          de energía y eficiencia económica. El artículo 31 establece que las
          tarifas deben contemplar únicamente los costos necesarios para prestar
          el servicio, incluyendo una retribución competitiva que permita la
          adecuada expansión del servicio.
        </p>
        <p>
          El artículo 32 faculta tanto al prestador del servicio como a la
          ARESEP, de oficio, a iniciar el procedimiento de fijación tarifaria.
          Las solicitudes tarifarias deben acompañarse de los estudios técnicos
          y financieros que justifiquen el ajuste solicitado. La resolución
          tarifaria constituye un acto administrativo de alcance general,
          impugnable mediante los recursos que la propia Ley 7593 establece.
        </p>
      </Instrumento>

      <Instrumento titulo="Fijación tarifaria extraordinaria" fundamento="Ley 7593, art. 31">
        <p>
          La fijación tarifaria extraordinaria procede cuando circunstancias
          sobrevenidas e imprevistas alteran sustancialmente la estructura de
          costos del servicio público y hacen necesario un ajuste fuera del ciclo
          ordinario. Estas circunstancias pueden incluir variaciones abruptas en
          el tipo de cambio, incrementos significativos en el precio de insumos
          esenciales o eventos de fuerza mayor que impacten la prestación del
          servicio. El artículo 31 de la Ley 7593 establece que las tarifas deben
          reflejar los costos necesarios para la prestación eficiente del servicio,
          lo que fundamenta la posibilidad de revisiones extraordinarias cuando
          las condiciones originales de la fijación se han modificado
          sustancialmente.
        </p>
      </Instrumento>

      <Instrumento titulo="Audiencia pública ante ARESEP" fundamento="Ley 7593, art. 36">
        <p>
          El artículo 36 de la Ley 7593 establece que antes de dictar la
          resolución tarifaria, la ARESEP debe convocar a una audiencia pública
          en la que los usuarios, los prestadores del servicio y cualquier
          interesado pueden presentar su posición respecto de la propuesta
          tarifaria. La audiencia pública constituye un requisito esencial del
          debido proceso regulatorio y su omisión puede generar la nulidad del
          acto tarifario. Los interesados pueden presentar oposiciones técnicas
          y jurídicas que la Autoridad Reguladora está obligada a considerar y
          resolver motivadamente en la resolución final.
        </p>
      </Instrumento>

      <Instrumento titulo="Recursos de revocatoria y apelación contra resoluciones tarifarias" fundamento="Ley 7593, art. 53">
        <p>
          El artículo 53 de la Ley 7593 establece los recursos administrativos
          procedentes contra las resoluciones de la ARESEP. El recurso de
          revocatoria se interpone ante el mismo órgano que dictó la resolución
          y tiene por objeto que este reconsidere su decisión a la luz de los
          argumentos del recurrente. El recurso de apelación se interpone de
          forma subsidiaria ante la Junta Directiva de la ARESEP, como órgano
          superior jerárquico. Ambos recursos deben interponerse dentro del plazo
          de cinco días hábiles contados desde la notificación de la resolución
          impugnada. La interposición de estos recursos es requisito previo para
          acudir a la vía contencioso-administrativa, conforme a la regla de
          agotamiento de la vía administrativa.
        </p>
      </Instrumento>

      <Instrumento titulo="Impugnación de sanciones y revocatoria de concesiones" fundamento="Ley 7593, arts. 38 a 41">
        <p>
          Los artículos 38 a 41 de la Ley 7593 regulan el régimen sancionatorio
          aplicable a los prestadores de servicios públicos. El artículo 38
          tipifica las infracciones, que incluyen la prestación del servicio sin
          autorización, el incumplimiento de las normas de calidad y la
          obstrucción de la labor fiscalizadora de la ARESEP. El artículo 39
          establece las sanciones aplicables, que van desde multas hasta la
          revocatoria de la concesión o el permiso de operación. La revocatoria
          de la concesión, regulada en los artículos 40 y 41, procede ante
          incumplimientos graves y reiterados del prestador. Contra estas
          sanciones proceden los recursos administrativos previstos en el artículo
          53 de la Ley.
        </p>
      </Instrumento>

      <Instrumento titulo="Litigio contencioso-administrativo contra resoluciones de ARESEP" fundamento="CPCA, arts. 1 y 36; Ley 7593, art. 53">
        <p>
          Agotada la vía administrativa mediante la interposición de los recursos
          de revocatoria y apelación, el administrado puede acudir a la
          jurisdicción contencioso-administrativa para impugnar las resoluciones
          de la ARESEP que considere contrarias al ordenamiento jurídico. El
          artículo 1 del CPCA atribuye a esta jurisdicción el conocimiento de
          los litigios contra los entes públicos, incluidas las autoridades
          reguladoras. El Tribunal Contencioso Administrativo puede revisar tanto
          la legalidad formal del procedimiento regulatorio como la razonabilidad
          técnica de las resoluciones tarifarias, verificando que se hayan
          respetado los criterios establecidos en la Ley 7593.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre regulación de servicios públicos
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo se fijan las tarifas de los servicios públicos en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Las tarifas de los servicios públicos son fijadas por la Autoridad Reguladora de los
              Servicios Públicos (ARESEP) conforme a la Ley N.° 7593. El artículo 30 establece que
              para fijar tarifas la ARESEP debe considerar criterios de equidad social, sostenibilidad
              ambiental, conservación de energía y eficiencia económica. El artículo 31 dispone que las
              tarifas deben contemplar únicamente los costos necesarios para prestar el servicio,
              incluyendo una retribución competitiva que permita su adecuada expansión. El procedimiento
              de fijación tarifaria puede ser iniciado por el prestador del servicio o de oficio por la
              ARESEP (art. 32), y las solicitudes deben acompañarse de estudios técnicos y financieros
              justificativos. Antes de dictar la resolución tarifaria, el artículo 36 exige la
              celebración de una audiencia pública en la que usuarios, prestadores y cualquier interesado
              pueden presentar oposiciones técnicas y jurídicas que la Autoridad debe considerar y
              resolver motivadamente. La omisión de la audiencia genera nulidad del acto tarifario.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué recursos existen contra una resolución tarifaria de ARESEP?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El artículo 53 de la Ley 7593 establece los recursos administrativos procedentes contra
              las resoluciones de la ARESEP. El recurso de revocatoria se interpone ante el mismo órgano
              que dictó la resolución para que reconsidere su decisión. El recurso de apelación se
              interpone subsidiariamente ante la Junta Directiva de la ARESEP como superior jerárquico.
              Ambos recursos deben presentarse dentro de los cinco días hábiles siguientes a la
              notificación de la resolución impugnada. Su interposición constituye requisito previo para
              acudir a la vía contencioso-administrativa conforme a la regla de agotamiento de la vía
              administrativa. Agotados los recursos, el administrado puede demandar ante el Tribunal
              Contencioso Administrativo conforme al artículo 1 del CPCA, que puede revisar tanto la
              legalidad formal del procedimiento regulatorio como la razonabilidad técnica de las
              resoluciones tarifarias. El TCA verifica que se hayan respetado los criterios de equidad
              social, eficiencia y sostenibilidad establecidos en los artículos 30 a 32 de la Ley 7593.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué sanciones puede imponer ARESEP a los prestadores de servicios públicos?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Los artículos 38 a 41 de la Ley 7593 regulan el régimen sancionatorio aplicable a los
              prestadores de servicios públicos. El artículo 38 tipifica las infracciones, que incluyen
              la prestación del servicio sin autorización, el incumplimiento de las normas de calidad y
              la obstrucción de la labor fiscalizadora de la ARESEP. El artículo 39 establece las
              sanciones aplicables, que van desde multas hasta la revocatoria de la concesión o el
              permiso de operación. La revocatoria de la concesión, regulada en los artículos 40 y 41,
              procede ante incumplimientos graves y reiterados del prestador y constituye la sanción más
              severa del régimen. Contra estas sanciones proceden los recursos administrativos previstos
              en el artículo 53 de la Ley: revocatoria y apelación dentro de cinco días hábiles.
              Agotada la vía administrativa, las resoluciones sancionatorias son impugnables ante la
              jurisdicción contencioso-administrativa conforme al CPCA, donde puede solicitarse la
              anulación de la sanción, la restitución de derechos y la indemnización de daños causados.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "materia-municipal": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          El derecho municipal costarricense se sustenta en la autonomía que la
          Constitución Política reconoce a las municipalidades en sus artículos
          168 a 175 y que el Código Municipal (Ley N.° 7794 del 30 de abril de
          1998) desarrolla. Las municipalidades son corporaciones de derecho
          público dotadas de personalidad jurídica y patrimonio propio, con
          potestad para administrar los intereses y servicios locales de cada
          cantón. Esta autonomía comprende las potestades normativa, tributaria,
          administrativa y de gobierno que el ordenamiento les confiere.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          La práctica en derecho municipal abarca tanto la asesoría a
          municipalidades y administrados en el ejercicio de las potestades
          municipales, como la impugnación de los actos y resoluciones que de
          ellas emanen, en vía administrativa y jurisdiccional.
        </p>
      </section>

      <Instrumento titulo="Autonomía municipal y competencias" fundamento="Constitución, arts. 168-175; Código Municipal, art. 4">
        <p>
          El artículo 170 de la Constitución Política establece que las
          corporaciones municipales son autónomas y que la ley determinará las
          competencias que se les trasladarán del Poder Ejecutivo. El artículo 4
          del Código Municipal desarrolla esta autonomía, señalando que la
          municipalidad posee la autonomía política, administrativa y financiera
          que le confiere la Constitución. Esta autonomía le permite dictar
          reglamentos autónomos de organización y de servicio, crear tributos
          locales conforme a la ley, administrar y prestar los servicios públicos
          municipales, y ejercer las competencias que el ordenamiento le atribuye
          en materia de planificación urbana, control de construcciones y
          protección del ambiente a nivel local.
        </p>
      </Instrumento>

      <Instrumento titulo="Licencias municipales y patentes comerciales" fundamento="Código Municipal, arts. 68 a 74">
        <p>
          Los artículos 68 a 74 del Código Municipal regulan el régimen de
          licencias municipales. El artículo 68 establece que para ejercer
          cualquier actividad lucrativa en el cantón se requiere contar con la
          licencia municipal respectiva. El artículo 69 dispone que la
          municipalidad, mediante acuerdo del Concejo, fijará las condiciones y
          requisitos para el otorgamiento de las licencias. El artículo 70 prevé
          las causales de denegación de la licencia, y el artículo 74 regula las
          tasas y precios que las municipalidades cobran por los servicios que
          prestan, los cuales se fijarán tomando en consideración el costo
          efectivo más un diez por ciento de utilidad para su desarrollo. La
          suspensión y cancelación de la patente por incumplimiento de las
          obligaciones tributarias se regula en el artículo 81 bis del Código
          Municipal. La patente municipal constituye un tributo cuyo hecho
          generador es el ejercicio de la actividad lucrativa autorizada.
        </p>
      </Instrumento>

      <Instrumento titulo="Tributos municipales e impuesto de bienes inmuebles" fundamento="Código Municipal, art. 68; Ley 7509, arts. 1 a 8">
        <p>
          Las municipalidades poseen potestad tributaria propia, reconocida
          constitucionalmente y desarrollada en el Código Municipal y leyes
          especiales. El impuesto sobre bienes inmuebles, regulado por la Ley de
          Impuesto sobre Bienes Inmuebles (Ley N.° 7509 del 9 de mayo de 1995),
          constituye el tributo municipal más relevante. El artículo 1 de la Ley
          7509 establece un impuesto anual sobre los bienes inmuebles situados en
          cada cantón, cuya administración corresponde a la municipalidad
          respectiva. Los artículos 2 a 8 regulan el sujeto pasivo, la base
          imponible (valor del inmueble inscrito en la plataforma de valores),
          la tarifa aplicable y las exenciones. Los contribuyentes pueden
          impugnar las valoraciones y los cobros municipales mediante los recursos
          administrativos que establece el Código Municipal.
        </p>
      </Instrumento>

      <Instrumento titulo="Recursos de revocatoria ante el Alcalde y apelación ante el Concejo" fundamento="Código Municipal, arts. 142 a 161">
        <p>
          Los artículos 142 a 161 del Código Municipal regulan los recursos
          administrativos procedentes contra los actos de la municipalidad. El
          recurso de revocatoria se interpone ante el Alcalde Municipal —como
          administrador general y jefe de las dependencias municipales— contra
          los actos que este haya dictado. El recurso de apelación se interpone
          de forma subsidiaria ante el Concejo Municipal, como órgano superior.
          Contra los acuerdos del Concejo Municipal cabe el recurso de
          revocatoria ante el propio Concejo. Estos recursos deben interponerse
          dentro de los cinco días hábiles siguientes a la notificación del acto
          y constituyen el mecanismo de agotamiento de la vía administrativa
          previo a la impugnación jurisdiccional.
        </p>
      </Instrumento>

      <Instrumento titulo="Impugnación de acuerdos del Concejo Municipal" fundamento="Código Municipal, arts. 153-161; CPCA, art. 31">
        <p>
          Los acuerdos del Concejo Municipal son actos administrativos
          susceptibles de impugnación tanto en vía administrativa como
          jurisdiccional. En vía administrativa, procede el recurso de
          revocatoria ante el propio Concejo, conforme a los artículos 153 a 161
          del Código Municipal. Agotada la vía administrativa, el administrado
          puede acudir al Tribunal Contencioso Administrativo para impugnar el
          acuerdo municipal. El artículo 31 del CPCA establece las reglas de
          agotamiento preceptivo de la vía administrativa como condición de
          admisibilidad de la demanda contencioso-administrativa. La jurisdicción
          contenciosa puede revisar la legalidad del acuerdo, su conformidad con
          el plan regulador y el ordenamiento urbanístico, así como la eventual
          lesión de derechos subjetivos o intereses legítimos del administrado.
        </p>
      </Instrumento>

      <Instrumento titulo="Litigio contencioso-administrativo contra la municipalidad" fundamento="CPCA, arts. 1, 10 y 36">
        <p>
          El CPCA atribuye a la jurisdicción contencioso-administrativa el
          conocimiento de los litigios contra las municipalidades. El artículo 1
          incluye expresamente a los entes públicos —entre ellos las
          corporaciones municipales— como sujetos pasivos del proceso
          contencioso. El artículo 10 establece las pretensiones que pueden
          formularse: anulación de actos municipales, reconocimiento de
          situaciones jurídicas individualizadas, condena al pago de daños y
          perjuicios, y cualquier otra pretensión fundada en derecho
          administrativo. El artículo 36 regula las medidas cautelares que pueden
          solicitarse para proteger los derechos del administrado mientras se
          resuelve el proceso contra la municipalidad.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre materia municipal
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo se impugna una decisión de la municipalidad en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Los artículos 142 a 161 del Código Municipal (Ley N.° 7794) regulan los recursos
              administrativos contra los actos municipales. El recurso de revocatoria se interpone ante
              el Alcalde Municipal contra los actos que este haya dictado, y el recurso de apelación se
              presenta subsidiariamente ante el Concejo Municipal como órgano superior. Contra los
              acuerdos del propio Concejo cabe revocatoria ante el mismo cuerpo colegiado. Estos
              recursos deben interponerse dentro de los cinco días hábiles siguientes a la notificación
              del acto y constituyen el mecanismo de agotamiento de la vía administrativa previo a la
              impugnación jurisdiccional. Agotada la vía administrativa conforme al artículo 31 del
              CPCA, el administrado puede demandar ante el Tribunal Contencioso Administrativo conforme
              a los artículos 1 y 10 del CPCA, solicitando la anulación del acto municipal, el
              reconocimiento de situaciones jurídicas individualizadas y la condena al pago de daños y
              perjuicios. También pueden solicitarse medidas cautelares para proteger derechos durante
              el proceso (arts. 19-30 CPCA).
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué requisitos exige una municipalidad para otorgar una patente comercial?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Los artículos 68 a 74 del Código Municipal regulan el régimen de licencias municipales.
              El artículo 68 establece que para ejercer cualquier actividad lucrativa en el cantón se
              requiere contar con la licencia municipal respectiva (patente comercial). El artículo 69
              dispone que la municipalidad, mediante acuerdo del Concejo, fija las condiciones y
              requisitos para su otorgamiento, que generalmente incluyen: uso de suelo conforme al plan
              regulador, permiso sanitario, póliza de riesgos del trabajo, estar al día con las
              obligaciones tributarias municipales y cumplir los requisitos específicos según la actividad.
              El artículo 70 prevé las causales de denegación de la licencia. La patente municipal
              constituye un tributo cuyo hecho generador es el ejercicio de la actividad lucrativa
              autorizada (art. 74). El artículo 81 bis regula la suspensión y cancelación de la patente
              por incumplimiento de obligaciones tributarias. La denegación injustificada puede
              impugnarse mediante los recursos de los artículos 142 a 161 del Código Municipal.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué alcance tiene la autonomía municipal frente al Gobierno Central?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La autonomía municipal tiene rango constitucional. El artículo 170 de la Constitución
              Política establece que las corporaciones municipales son autónomas, y el artículo 4 del
              Código Municipal (Ley N.° 7794) desarrolla esta autonomía señalando que la municipalidad
              posee autonomía política, administrativa y financiera. Esta autonomía comprende potestades
              significativas: dictar reglamentos autónomos de organización y servicio, crear tributos
              locales conforme a la ley (arts. 68-74), administrar y prestar servicios públicos
              municipales, y ejercer competencias en materia de planificación urbana y control de
              construcciones. Los artículos 168 a 175 de la Constitución delimitan el marco
              constitucional de esta autonomía. Sin embargo, la autonomía no es absoluta: las
              municipalidades están sujetas al principio de legalidad (art. 11 LGAP), sus actos son
              fiscalizables por la Contraloría General de la República en materia presupuestaria
              (art. 184 de la Constitución), y sus resoluciones son impugnables ante la jurisdicción
              contencioso-administrativa conforme al CPCA.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "dominio-publico": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          El dominio público comprende el conjunto de bienes que, por su
          naturaleza o por disposición legal, están destinados al uso público o a
          la prestación de un servicio público y se encuentran sujetos a un
          régimen jurídico especial de derecho público. En Costa Rica, los bienes
          demaniales están protegidos por los principios de inalienabilidad,
          imprescriptibilidad e inembargabilidad, consagrados en los artículos 261
          y 262 del Código Civil y desarrollados por la Ley General de la
          Administración Pública y la legislación sectorial aplicable.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          La práctica en materia de dominio público abarca la obtención,
          mantenimiento y defensa de concesiones y permisos de uso sobre bienes
          demaniales, así como la impugnación de los actos administrativos que
          afecten los derechos de los concesionarios y usuarios.
        </p>
      </section>

      <Instrumento titulo="Principios del régimen demanial" fundamento="Código Civil, arts. 261-262">
        <p>
          Los bienes de dominio público están sujetos a un régimen de protección
          reforzada que los distingue de los bienes patrimoniales de la
          Administración. El artículo 261 del Código Civil establece que los
          bienes de dominio público son aquellos que por ley están destinados de
          un modo permanente a cualquier servicio de utilidad general. El artículo
          262 dispone que estos bienes son inalienables y no pueden adquirirse
          por prescripción. La jurisprudencia constitucional ha reiterado que los
          principios de inalienabilidad, imprescriptibilidad e inembargabilidad
          constituyen el núcleo esencial del régimen demanial y se aplican a
          todos los bienes de dominio público, con independencia de su naturaleza
          específica.
        </p>
      </Instrumento>

      <Instrumento titulo="Concesiones de uso sobre bienes demaniales" fundamento="LGAP, arts. 154-160; Ley 6043, arts. 38-56">
        <p>
          La concesión de uso es el título jurídico mediante el cual la
          Administración otorga a un particular el derecho de utilizar un bien de
          dominio público de manera exclusiva durante un plazo determinado,
          sujeto a las condiciones que establezca el acto concesional. Los
          artículos 154 a 160 de la Ley General de la Administración Pública
          regulan el régimen general de las concesiones administrativas. La
          concesión no transfiere la propiedad del bien, sino que otorga un
          derecho de uso que coexiste con la titularidad demanial del Estado. El
          concesionario adquiere un derecho subjetivo cuya estabilidad depende
          del cumplimiento de las obligaciones establecidas en el acto concesional
          y de la subsistencia del interés público que motivó su otorgamiento.
        </p>
      </Instrumento>

      <Instrumento titulo="Permisos de uso precarios" fundamento="LGAP, art. 154; Código Municipal, art. 62">
        <p>
          El permiso de uso es un acto administrativo unilateral mediante el cual
          la Administración autoriza a un particular a utilizar un bien de dominio
          público de forma temporal y precaria. A diferencia de la concesión, el
          permiso de uso no genera un derecho subjetivo en favor del
          permisionario, sino una situación de tolerancia administrativa que
          puede ser revocada en cualquier momento por razones de interés público,
          sin que proceda indemnización alguna. El artículo 154 de la Ley General
          de la Administración Pública y el artículo 62 del Código Municipal
          regulan estos permisos. La precariedad del título implica que la
          Administración conserva en todo momento la potestad de revocar el
          permiso cuando así lo exija el interés público.
        </p>
      </Instrumento>

      <Instrumento titulo="Revocatoria y caducidad de concesiones" fundamento="LGAP, arts. 154-160; Ley 6043, art. 48">
        <p>
          La revocatoria de una concesión demanial es el acto administrativo
          mediante el cual la Administración extingue el derecho del
          concesionario antes del vencimiento del plazo originalmente establecido.
          La revocatoria puede fundarse en razones de interés público
          sobrevenido o en el incumplimiento de las obligaciones del
          concesionario. La caducidad, por su parte, opera como consecuencia
          automática del incumplimiento grave de las condiciones del acto
          concesional. Los artículos 154 a 160 de la LGAP establecen el marco
          general de extinción de las concesiones. Cuando la revocatoria obedece
          a razones de interés público y no a incumplimiento del concesionario,
          este tiene derecho a una indemnización integral conforme al artículo
          48 de la Ley 6043 y la jurisprudencia constitucional aplicable.
        </p>
      </Instrumento>

      <Instrumento titulo="Desalojos administrativos de bienes demaniales" fundamento="Ley 6043, arts. 13 y 57; Código Municipal, art. 8">
        <p>
          La Administración titular del dominio público está facultada para
          ordenar y ejecutar el desalojo de quienes ocupen bienes demaniales sin
          título legítimo. El artículo 8 del Código Municipal otorga a las
          municipalidades la potestad de recuperar administrativamente los bienes
          de dominio público que se encuentren en posesión indebida de
          particulares. En materia de zona marítimo terrestre, el artículo 13 de
          la Ley 6043 dispone que las autoridades deben impedir las ocupaciones
          ilegales, y el artículo 57 establece las sanciones aplicables a
          quienes ocupen o construyan en la zona pública sin autorización. El
          desalojo administrativo debe respetar el debido proceso y puede ser
          impugnado ante la jurisdicción contencioso-administrativa.
        </p>
      </Instrumento>

      <Instrumento titulo="Indemnizaciones por revocatoria de concesiones" fundamento="Constitución, art. 45; LGAP, arts. 190-194">
        <p>
          Cuando la Administración revoca una concesión demanial por razones de
          interés público —no por incumplimiento del concesionario—, surge el
          derecho a una indemnización integral en favor del concesionario
          afectado. El artículo 45 de la Constitución Política establece el
          derecho a la propiedad, del cual la jurisprudencia ha derivado la
          protección de los derechos patrimoniales adquiridos al amparo de una
          concesión legítima. Los artículos 190 a 194 de la Ley General de la
          Administración Pública regulan la responsabilidad patrimonial de la
          Administración por su funcionamiento legítimo, que comprende la
          obligación de indemnizar cuando se produce un sacrificio especial del
          administrado en beneficio del interés público. La indemnización debe
          cubrir el daño efectivamente causado, incluyendo el daño emergente y
          el lucro cesante demostrados.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre dominio público
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué son los bienes de dominio público y qué protección especial tienen?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Los bienes de dominio público son aquellos que por ley están destinados de un modo
              permanente a cualquier servicio de utilidad general, conforme al artículo 261 del Código
              Civil. Están sujetos a un régimen de protección reforzada basado en tres principios
              fundamentales: inalienabilidad (no pueden venderse ni enajenarse), imprescriptibilidad (no
              pueden adquirirse por prescripción o usucapión) e inembargabilidad (no pueden ser objeto
              de embargo). El artículo 262 del Código Civil consagra expresamente los dos primeros
              principios. La jurisprudencia constitucional ha reiterado que estos principios constituyen
              el núcleo esencial del régimen demanial y se aplican a todos los bienes de dominio público
              con independencia de su naturaleza: playas, ríos, carreteras, plazas, edificios públicos,
              entre otros. Los particulares pueden acceder al uso de estos bienes mediante concesiones
              (arts. 154-160 LGAP) o permisos de uso precarios (art. 154 LGAP, art. 62 del Código
              Municipal), pero nunca adquirir su propiedad.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué diferencia hay entre una concesión y un permiso de uso sobre bienes del Estado?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La concesión de uso, regulada en los artículos 154 a 160 de la LGAP, otorga al particular
              un derecho subjetivo de utilizar un bien de dominio público de manera exclusiva durante un
              plazo determinado. El concesionario adquiere un derecho cuya estabilidad depende del
              cumplimiento de las obligaciones del acto concesional y de la subsistencia del interés
              público. Si la Administración revoca la concesión por razones de interés público y no por
              incumplimiento, el concesionario tiene derecho a indemnización integral conforme a los
              artículos 190 a 194 de la LGAP y al artículo 45 de la Constitución. El permiso de uso, en
              cambio, es un acto administrativo unilateral que autoriza el uso temporal y precario del
              bien (art. 154 LGAP, art. 62 del Código Municipal). No genera un derecho subjetivo sino
              una situación de tolerancia administrativa revocable en cualquier momento por razones de
              interés público, sin que proceda indemnización alguna. Esta distinción es fundamental para
              determinar los derechos del particular frente a la Administración.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Puede la Administración desalojar a quien ocupa un bien de dominio público sin autorización?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Sí. La Administración titular del dominio público está facultada para ordenar y ejecutar
              el desalojo de quienes ocupen bienes demaniales sin título legítimo. El artículo 8 del
              Código Municipal (Ley N.° 7794) otorga a las municipalidades la potestad de recuperar
              administrativamente los bienes de dominio público que se encuentren en posesión indebida
              de particulares. En materia de zona marítimo terrestre, el artículo 13 de la Ley 6043
              dispone que las autoridades deben impedir las ocupaciones ilegales, y el artículo 57
              establece sanciones que incluyen la demolición de obras a costa del infractor. El desalojo
              administrativo debe respetar el debido proceso conforme a los artículos 308 a 319 de la
              LGAP, garantizando la notificación, el derecho de audiencia y la posibilidad de recurrir.
              Las resoluciones que ordenen desalojos son impugnables ante la jurisdicción
              contencioso-administrativa conforme al artículo 10 del CPCA. Los ocupantes no pueden
              alegar derechos posesorios sobre bienes demaniales dada su imprescriptibilidad
              constitucional (art. 262 del Código Civil).
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "zona-maritimo-terrestre": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          La zona marítimo terrestre (ZMT) constituye un régimen especial de
          dominio público regulado por la Ley sobre la Zona Marítimo Terrestre
          (Ley N.° 6043 del 2 de marzo de 1977) y su Reglamento. La ZMT
          comprende una franja de doscientos metros de ancho a lo largo de los
          litorales atlántico y pacífico, medidos horizontalmente a partir de la
          línea de la pleamar ordinaria, y se divide en zona pública (los
          primeros cincuenta metros) y zona restringida (los ciento cincuenta
          metros restantes). Los bienes situados en la ZMT son inalienables e
          imprescriptibles, y su uso por particulares requiere concesión otorgada
          conforme a los procedimientos que la Ley 6043 establece.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          La práctica en materia de ZMT comprende la obtención y defensa de
          concesiones, la impugnación de sanciones administrativas y la
          intervención ante los órganos competentes —municipalidades, ICT e
          INDER— en los procedimientos que regulan el uso de esta franja
          costera.
        </p>
      </section>

      <Instrumento titulo="Definición y delimitación de la ZMT" fundamento="Ley 6043, arts. 1 a 9">
        <p>
          Los artículos 1 a 9 de la Ley 6043 definen la zona marítimo terrestre
          como la franja de doscientos metros de ancho a lo largo de los
          litorales de la República, medida horizontalmente a partir de la línea
          de la pleamar ordinaria. El artículo 9 establece la división en zona
          pública —los primeros cincuenta metros contados desde la pleamar
          ordinaria— y zona restringida —los ciento cincuenta metros
          restantes—. La zona pública es de libre tránsito y no puede ser
          objeto de concesión ni ocupación bajo ningún título. La zona
          restringida puede ser dada en concesión a particulares conforme al
          procedimiento establecido en la ley. Los artículos 6 a 8 definen las
          áreas especiales: las islas, los manglares, los esteros y los terrenos
          adyacentes a las desembocaduras de ríos están sujetos a regulaciones
          adicionales.
        </p>
      </Instrumento>

      <Instrumento titulo="Concesiones en zona restringida" fundamento="Ley 6043, arts. 38 a 56">
        <p>
          Los artículos 38 a 56 de la Ley 6043 regulan el régimen de concesiones
          en la zona restringida. El artículo 39 establece que las concesiones se
          otorgan por acuerdo del Concejo Municipal, previo cumplimiento de los
          requisitos legales y con la aprobación del Instituto Costarricense de
          Turismo (ICT) o del Instituto de Desarrollo Rural (INDER), según
          corresponda. Los plazos de concesión no pueden exceder de veinte años,
          prorrogables por períodos iguales (art. 48). El artículo 42 establece
          las prioridades para el otorgamiento de concesiones, favoreciendo a
          los ocupantes censados y a quienes desarrollen actividades turísticas
          o productivas. El concesionario queda obligado al pago del canon fijado
          por la municipalidad y al cumplimiento de las condiciones establecidas
          en el acto concesional.
        </p>
      </Instrumento>

      <Instrumento titulo="Funciones municipales en la ZMT" fundamento="Ley 6043, arts. 27 a 37">
        <p>
          Los artículos 27 a 37 de la Ley 6043 asignan a las municipalidades
          costeras un papel central en la administración de la ZMT. El artículo
          27 dispone que la zona marítimo terrestre constituye patrimonio nacional
          cuya custodia corresponde a la municipalidad del cantón respectivo. El
          artículo 28 establece que la municipalidad debe velar por el
          cumplimiento de la ley, controlar las ocupaciones y construcciones en
          la ZMT, y tramitar las solicitudes de concesión. Los artículos 29 a 37
          regulan las obligaciones municipales en materia de demarcación, cobro
          de cánones, fiscalización de concesionarios y elaboración de los planes
          reguladores costeros necesarios para el otorgamiento de nuevas
          concesiones.
        </p>
      </Instrumento>

      <Instrumento titulo="Funciones del ICT y del INDER" fundamento="Ley 6043, arts. 18 a 26">
        <p>
          Los artículos 18 a 26 de la Ley 6043 distribuyen competencias entre el
          Instituto Costarricense de Turismo (ICT) y el Instituto de Desarrollo
          Rural (INDER) en relación con la ZMT. El ICT tiene competencia sobre
          las áreas declaradas como zonas turísticas, donde le corresponde
          aprobar los planes reguladores costeros y autorizar las concesiones
          destinadas a actividades turísticas. El INDER tiene competencia sobre
          las áreas no declaradas turísticas, donde ejerce funciones similares
          respecto de las concesiones destinadas a actividades agropecuarias,
          pesqueras o habitacionales. Ambas instituciones deben emitir su
          criterio vinculante antes de que la municipalidad pueda otorgar una
          concesión en la zona restringida.
        </p>
      </Instrumento>

      <Instrumento titulo="Sanciones por construcciones ilegales en la ZMT" fundamento="Ley 6043, arts. 57 a 65">
        <p>
          Los artículos 57 a 65 de la Ley 6043 establecen el régimen
          sancionatorio aplicable a quienes realicen construcciones u ocupaciones
          ilegales en la ZMT. El artículo 57 dispone que quien construya, realice
          obras o se instale en la zona marítimo terrestre sin la debida
          autorización será sancionado con la demolición de las obras a su costa,
          sin perjuicio de las sanciones penales que correspondan. El artículo 60
          establece que las autoridades municipales están obligadas a ordenar la
          paralización inmediata de las obras no autorizadas y a denunciar los
          hechos ante el Ministerio Público. Las resoluciones que ordenen la
          demolición o el desalojo son impugnables ante la jurisdicción
          contencioso-administrativa.
        </p>
      </Instrumento>

      <Instrumento titulo="Planes reguladores costeros e impugnación ante el TCA" fundamento="Ley 6043, arts. 27-38; CPCA, arts. 1 y 10">
        <p>
          El plan regulador costero es el instrumento de planificación que ordena
          el uso del suelo en la zona restringida y constituye requisito previo
          indispensable para el otorgamiento de concesiones, conforme al artículo
          38 de la Ley 6043. Su elaboración corresponde a la municipalidad con
          la aprobación del ICT o del INDER, según la zona. Los planes
          reguladores costeros definen la zonificación, los usos permitidos, las
          densidades y las restricciones ambientales aplicables a cada sector de
          la zona restringida. Las resoluciones que aprueban, modifican o
          deniegan planes reguladores costeros constituyen actos administrativos
          impugnables ante el Tribunal Contencioso Administrativo conforme a los
          artículos 1 y 10 del CPCA.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre zona marítimo terrestre
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué es la zona marítimo terrestre y qué restricciones tiene?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La zona marítimo terrestre (ZMT) es una franja de doscientos metros de ancho a lo largo
              de los litorales atlántico y pacífico de Costa Rica, medida horizontalmente a partir de
              la línea de la pleamar ordinaria, conforme a los artículos 1 a 9 de la Ley N.° 6043. Se
              divide en dos franjas: la zona pública (los primeros cincuenta metros desde la pleamar),
              que es de libre tránsito y no puede ser objeto de concesión ni ocupación bajo ningún
              título (art. 9), y la zona restringida (los ciento cincuenta metros restantes), que puede
              darse en concesión a particulares conforme al procedimiento legal. Los bienes situados en
              la ZMT son inalienables e imprescriptibles, es decir, no pueden venderse ni adquirirse
              por prescripción. Los artículos 6 a 8 establecen regulaciones adicionales para islas,
              manglares, esteros y terrenos adyacentes a desembocaduras de ríos. Las construcciones u
              ocupaciones sin autorización son sancionadas con demolición a costa del infractor (art. 57)
              y las autoridades municipales deben ordenar la paralización inmediata de obras no
              autorizadas (art. 60).
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo se obtiene una concesión en la zona restringida de la ZMT?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Las concesiones en la zona restringida están reguladas en los artículos 38 a 56 de la Ley
              6043. El artículo 39 establece que las concesiones se otorgan por acuerdo del Concejo
              Municipal, previo cumplimiento de los requisitos legales y con la aprobación del Instituto
              Costarricense de Turismo (ICT) o del Instituto de Desarrollo Rural (INDER), según
              corresponda conforme a los artículos 18 a 26. El requisito previo indispensable es la
              existencia de un plan regulador costero aprobado para la zona (art. 38), cuya elaboración
              corresponde a la municipalidad con la aprobación del ICT o INDER. Los plazos de concesión
              no pueden exceder de veinte años, prorrogables por períodos iguales (art. 48). El artículo
              42 establece prioridades para el otorgamiento, favoreciendo a ocupantes censados y a
              quienes desarrollen actividades turísticas o productivas. El concesionario queda obligado
              al pago del canon fijado por la municipalidad y al cumplimiento de las condiciones del
              acto concesional. El incumplimiento grave puede resultar en la caducidad de la concesión.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué consecuencias tiene construir sin permiso en la zona marítimo terrestre?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Los artículos 57 a 65 de la Ley 6043 establecen un régimen sancionatorio severo para las
              construcciones y ocupaciones ilegales en la ZMT. El artículo 57 dispone que quien
              construya, realice obras o se instale sin la debida autorización será sancionado con la
              demolición de las obras a su costa, sin perjuicio de las sanciones penales que correspondan.
              El artículo 60 obliga a las autoridades municipales a ordenar la paralización inmediata de
              las obras no autorizadas y a denunciar los hechos ante el Ministerio Público. La
              municipalidad, como custodia de la ZMT conforme al artículo 27, tiene la potestad y el
              deber de impedir las ocupaciones ilegales y de iniciar los procedimientos sancionatorios
              correspondientes. Las resoluciones que ordenen la demolición o el desalojo son impugnables
              ante la jurisdicción contencioso-administrativa conforme a los artículos 1 y 10 del CPCA.
              El infractor no puede alegar derechos posesorios ni adquirir propiedad sobre bienes
              demaniales dada su imprescriptibilidad constitucional. Corporación GC asesora tanto en la
              defensa como en la impugnación de estas resoluciones.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "derecho-urbanistico": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          El derecho urbanístico costarricense regula la planificación, el
          ordenamiento territorial y el control del desarrollo urbano. Sus
          fuentes principales son la Ley de Planificación Urbana (Ley N.° 4240
          del 15 de noviembre de 1968) y la Ley de Construcciones (Ley N.° 833
          del 2 de noviembre de 1949), complementadas por los planes reguladores
          cantonales que cada municipalidad adopta en ejercicio de su autonomía.
          Esta rama del derecho administrativo incide directamente sobre el
          derecho de propiedad, al establecer las limitaciones y condiciones bajo
          las cuales los propietarios pueden desarrollar sus inmuebles.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          La práctica en derecho urbanístico abarca la tramitación de permisos de
          construcción, la impugnación de restricciones urbanísticas y la defensa
          de los derechos de los propietarios frente a las decisiones de las
          autoridades de planificación.
        </p>
      </section>

      <Instrumento titulo="Plan regulador cantonal" fundamento="Ley 4240, arts. 23 a 38">
        <p>
          El plan regulador cantonal es el instrumento técnico-jurídico que
          define la política de desarrollo urbano del cantón y establece la
          zonificación, los usos del suelo permitidos, las densidades de
          construcción y los requisitos de infraestructura aplicables a cada zona.
          Los artículos 23 a 38 de la Ley de Planificación Urbana regulan el
          contenido, la elaboración y la aprobación de los planes reguladores. El
          artículo 23 establece que el plan regulador es el instrumento de
          planificación local que define el desarrollo urbano del cantón. Los
          artículos 24 a 28 detallan los componentes del plan: zonificación del
          uso del suelo, reglamento de fraccionamiento, reglamento de mapa
          oficial, reglamento de construcciones y reglamento de renovación urbana.
          Su aprobación corresponde al Concejo Municipal, previo dictamen del
          Instituto Nacional de Vivienda y Urbanismo (INVU).
        </p>
      </Instrumento>

      <Instrumento titulo="Permisos de construcción" fundamento="Ley 4240, arts. 65 a 76; Ley 833, arts. 74-87">
        <p>
          El permiso de construcción es el acto administrativo mediante el cual
          la municipalidad autoriza la ejecución de obras de edificación en un
          inmueble determinado, verificando su conformidad con el plan regulador,
          las normas de zonificación y los reglamentos de construcción aplicables.
          Los artículos 65 a 76 de la Ley de Planificación Urbana y los artículos
          74 a 87 de la Ley de Construcciones regulan los requisitos, el
          procedimiento y las condiciones para el otorgamiento de estos permisos.
          La municipalidad debe resolver la solicitud dentro del plazo legal, y
          su denegación debe ser motivada, indicando las normas urbanísticas o
          constructivas que el proyecto incumple. El silencio administrativo
          positivo puede operar conforme a las reglas generales cuando la
          Administración no resuelve dentro del plazo establecido.
        </p>
      </Instrumento>

      <Instrumento titulo="Zonificación y uso del suelo" fundamento="Ley 4240, arts. 24 a 28">
        <p>
          La zonificación es el instrumento urbanístico mediante el cual el plan
          regulador divide el territorio del cantón en zonas con usos del suelo
          diferenciados: residencial, comercial, industrial, agrícola, de
          protección ambiental, entre otros. Los artículos 24 a 28 de la Ley de
          Planificación Urbana establecen que el reglamento de zonificación debe
          definir para cada zona los usos permitidos, los usos condicionales, los
          usos prohibidos, la cobertura máxima del lote, la altura máxima de las
          edificaciones, los retiros mínimos y la densidad de población
          permitida. La zonificación constituye una limitación de interés social
          al derecho de propiedad, cuya constitucionalidad ha sido reconocida
          por la Sala Constitucional, siempre que sea razonable y proporcionada.
        </p>
      </Instrumento>

      <Instrumento titulo="Fraccionamiento y urbanización" fundamento="Ley 4240, arts. 39 a 50">
        <p>
          Los artículos 39 a 50 de la Ley de Planificación Urbana regulan el
          régimen de fraccionamiento y urbanización de terrenos. El
          fraccionamiento es la división de un inmueble en dos o más lotes que
          requiere la aprobación municipal conforme al reglamento de
          fraccionamiento del plan regulador. La urbanización es el proceso por
          el cual se habilitan terrenos para el desarrollo urbano mediante la
          instalación de infraestructura vial, de servicios públicos y de áreas
          comunales. El artículo 40 establece que todo fraccionamiento debe
          contar con la visación municipal, que verifica la conformidad del
          proyecto con el plan regulador. El artículo 44 dispone que el
          urbanizador está obligado a ceder las áreas destinadas a calles,
          parques y facilidades comunales conforme a los porcentajes que la ley
          y el plan regulador establecen.
        </p>
      </Instrumento>

      <Instrumento titulo="Impugnación de denegatorias de permisos" fundamento="Código Municipal, arts. 142-161; CPCA, arts. 1 y 10">
        <p>
          Cuando la municipalidad deniega un permiso de construcción o impone
          condiciones que el solicitante estima ilegales o desproporcionadas,
          este puede impugnar la resolución mediante los recursos administrativos
          previstos en los artículos 142 a 161 del Código Municipal: revocatoria
          ante el Alcalde y apelación ante el Concejo Municipal. Agotada la vía
          administrativa, procede la demanda contencioso-administrativa conforme
          a los artículos 1 y 10 del CPCA, mediante la cual el Tribunal puede
          anular la denegación ilegal, ordenar el otorgamiento del permiso y
          condenar a la municipalidad al pago de los daños y perjuicios causados
          por la demora o la denegación injustificada.
        </p>
      </Instrumento>

      <Instrumento titulo="Litigio contra restricciones urbanísticas" fundamento="Constitución, art. 45; Ley 4240, art. 37; CPCA, art. 10">
        <p>
          Las restricciones urbanísticas que limitan el derecho de propiedad más
          allá de lo razonable pueden ser impugnadas por el propietario afectado.
          El artículo 45 de la Constitución Política garantiza la inviolabilidad
          de la propiedad, admitiendo limitaciones de interés social únicamente
          cuando sean proporcionales y no vacíen de contenido el derecho. El
          artículo 37 de la Ley 4240 establece que el plan regulador puede
          imponer restricciones al uso de la propiedad, pero estas deben ser
          razonables y compensadas cuando constituyan una privación singular que
          exceda las cargas normales de la propiedad. El artículo 10 del CPCA
          permite al propietario demandar ante el Tribunal Contencioso
          Administrativo la anulación de las restricciones ilegales y la
          indemnización por los daños sufridos.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre derecho urbanístico
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué es un plan regulador cantonal y cómo afecta mi propiedad?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El plan regulador cantonal es el instrumento técnico-jurídico que define la política de
              desarrollo urbano del cantón, regulado en los artículos 23 a 38 de la Ley de Planificación
              Urbana (Ley N.° 4240). El artículo 23 establece que el plan regulador define el desarrollo
              urbano del cantón mediante la zonificación del uso del suelo: residencial, comercial,
              industrial, agrícola o de protección ambiental. Los artículos 24 a 28 detallan sus
              componentes: reglamento de zonificación, reglamento de fraccionamiento, reglamento de mapa
              oficial, reglamento de construcciones y reglamento de renovación urbana. El plan establece
              para cada zona los usos permitidos, la cobertura máxima del lote, la altura máxima de las
              edificaciones, los retiros mínimos y la densidad de población. Su aprobación corresponde al
              Concejo Municipal previo dictamen del INVU. Las restricciones urbanísticas constituyen
              limitaciones de interés social al derecho de propiedad cuya constitucionalidad ha sido
              reconocida por la Sala Constitucional, siempre que sean razonables y proporcionadas
              conforme al artículo 45 de la Constitución Política.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué hago si la municipalidad me deniega un permiso de construcción?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Si la municipalidad deniega un permiso de construcción o impone condiciones que se estiman
              ilegales o desproporcionadas, el solicitante puede impugnar la resolución mediante los
              recursos administrativos previstos en los artículos 142 a 161 del Código Municipal (Ley
              N.° 7794): recurso de revocatoria ante el Alcalde y recurso de apelación subsidiario ante
              el Concejo Municipal, dentro de cinco días hábiles. La denegación debe ser motivada,
              indicando las normas urbanísticas o constructivas incumplidas conforme a los artículos 65
              a 76 de la Ley 4240 y los artículos 74 a 87 de la Ley de Construcciones (Ley N.° 833).
              Agotada la vía administrativa, procede la demanda contencioso-administrativa conforme a los
              artículos 1 y 10 del CPCA, mediante la cual el Tribunal puede anular la denegación ilegal,
              ordenar el otorgamiento del permiso y condenar a la municipalidad al pago de daños y
              perjuicios causados por la demora o denegación injustificada. Si la Administración no
              resuelve dentro del plazo legal, puede operar el silencio administrativo positivo conforme
              al artículo 330 de la LGAP en materia autorizatoria.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Se puede demandar a la municipalidad por restricciones urbanísticas excesivas?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Sí. Las restricciones urbanísticas que limitan el derecho de propiedad más allá de lo
              razonable pueden ser impugnadas por el propietario afectado. El artículo 45 de la
              Constitución Política garantiza la inviolabilidad de la propiedad, admitiendo limitaciones
              de interés social únicamente cuando sean proporcionales y no vacíen de contenido el
              derecho. El artículo 37 de la Ley 4240 establece que el plan regulador puede imponer
              restricciones al uso de la propiedad, pero estas deben ser razonables y compensadas cuando
              constituyan una privación singular que exceda las cargas normales de la propiedad. El
              artículo 10 del CPCA permite al propietario demandar ante el Tribunal Contencioso
              Administrativo la anulación de las restricciones ilegales y la indemnización por los daños
              sufridos. Cuando la restricción equivale a una expropiación de hecho, el propietario puede
              invocar el artículo 45 constitucional para exigir indemnización previa y justa. La Sala
              Constitucional ha establecido que las limitaciones urbanísticas deben respetar un balance
              entre el interés público y los derechos del propietario conforme al principio de
              proporcionalidad.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "materia-presupuestaria": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          El derecho presupuestario costarricense regula la formulación,
          aprobación, ejecución y control del presupuesto público. Sus fuentes
          principales son la Constitución Política (artículos 176 a 187), la Ley
          de la Administración Financiera de la República y Presupuestos Públicos
          (Ley N.° 8131 del 18 de septiembre de 2001) y la Ley Orgánica de la
          Contraloría General de la República (Ley N.° 7428 del 7 de septiembre
          de 1994). Este marco normativo establece los principios de legalidad
          presupuestaria, universalidad, unidad de caja y equilibrio
          presupuestario que rigen la hacienda pública costarricense.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          La práctica en materia presupuestaria abarca la asesoría en la
          formulación y ejecución presupuestaria de entes públicos, la
          impugnación de resoluciones de la Contraloría General de la República y
          la defensa en procedimientos de responsabilidad fiscal.
        </p>
      </section>

      <Instrumento titulo="Presupuesto ordinario y extraordinario de la República" fundamento="Constitución, arts. 176 a 187; Ley 8131, arts. 1 a 10">
        <p>
          Los artículos 176 a 187 de la Constitución Política regulan el
          presupuesto de la República. El artículo 176 establece que el
          presupuesto ordinario comprende todos los ingresos probables y todos
          los gastos autorizados de la Administración Pública durante el año
          económico. El artículo 177 dispone que la preparación del proyecto de
          presupuesto corresponde al Poder Ejecutivo y su aprobación a la
          Asamblea Legislativa. Los artículos 178 a 181 regulan los presupuestos
          extraordinarios y las modificaciones presupuestarias. La Ley 8131, en
          sus artículos 1 a 10, desarrolla los principios constitucionales y
          establece el marco técnico para la formulación, aprobación, ejecución
          y evaluación del presupuesto público.
        </p>
      </Instrumento>

      <Instrumento titulo="Control presupuestario de la Contraloría General" fundamento="Constitución, arts. 183-184; Ley 7428, arts. 1 a 12">
        <p>
          La Contraloría General de la República es el órgano constitucional
          encargado de la fiscalización superior de la Hacienda Pública. El
          artículo 183 de la Constitución establece que la Contraloría es una
          institución auxiliar de la Asamblea Legislativa en la vigilancia de la
          Hacienda Pública. El artículo 184 le atribuye las funciones de
          fiscalizar la ejecución y liquidación de los presupuestos ordinarios y
          extraordinarios, examinar y aprobar los presupuestos de las
          municipalidades e instituciones autónomas, y enviar anualmente a la
          Asamblea una memoria sobre el movimiento de los fondos públicos. La Ley
          7428, en sus artículos 1 a 12, desarrolla la organización, competencias
          y procedimientos de la Contraloría, otorgándole independencia funcional
          y administrativa en el ejercicio de sus atribuciones fiscalizadoras.
        </p>
      </Instrumento>

      <Instrumento titulo="Aprobación presupuestaria de entes descentralizados" fundamento="Ley 8131, arts. 75 a 81">
        <p>
          Los artículos 75 a 81 de la Ley 8131 regulan el régimen presupuestario
          de las instituciones autónomas, semiautónomas y empresas públicas. El
          artículo 75 establece que los presupuestos de estas entidades deben ser
          aprobados por la Contraloría General de la República, quien verifica su
          conformidad con el ordenamiento jurídico, los planes nacionales de
          desarrollo y las directrices de política presupuestaria emitidas por la
          Autoridad Presupuestaria. El artículo 77 dispone que la Contraloría
          puede improbar total o parcialmente un presupuesto cuando contenga
          partidas que contravengan disposiciones legales o cuando el ente no
          haya cumplido con los requisitos de formulación establecidos. Contra la
          resolución de improbación proceden los recursos que la Ley Orgánica de
          la Contraloría establece.
        </p>
      </Instrumento>

      <Instrumento titulo="Impugnación de resoluciones de la Contraloría General" fundamento="Ley 7428, arts. 67 a 72; CPCA, arts. 1 y 10">
        <p>
          Las resoluciones de la Contraloría General de la República son
          impugnables mediante los mecanismos que establece su Ley Orgánica. Los
          artículos 67 a 72 de la Ley 7428 regulan los recursos procedentes
          contra los actos del órgano contralor. El recurso de revocatoria se
          interpone ante el Despacho Contralor y el recurso de apelación ante la
          División correspondiente. Agotada la vía administrativa, las
          resoluciones de la Contraloría pueden ser impugnadas ante la
          jurisdicción contencioso-administrativa conforme a los artículos 1 y 10
          del CPCA. El Tribunal Contencioso Administrativo puede revisar la
          legalidad de los actos del órgano contralor, incluyendo las
          resoluciones de aprobación o improbación presupuestaria y las
          disposiciones emitidas en el ejercicio de sus funciones fiscalizadoras.
        </p>
      </Instrumento>

      <Instrumento titulo="Procedimientos de responsabilidad fiscal" fundamento="Ley 7428, arts. 68-73; Ley 8131, arts. 107-114">
        <p>
          Los procedimientos de responsabilidad fiscal permiten determinar la
          responsabilidad patrimonial de los funcionarios y exfuncionarios
          públicos por el manejo irregular de fondos públicos. Los artículos 68
          a 73 de la Ley 7428 facultan a la Contraloría General para instruir
          procedimientos administrativos tendientes a determinar la
          responsabilidad disciplinaria y patrimonial de quienes administren
          fondos públicos. Los artículos 107 a 114 de la Ley 8131 regulan el
          régimen de responsabilidad en la administración financiera, estableciendo
          que los funcionarios responden personal y pecuniariamente por los
          daños que causen a la Hacienda Pública por dolo, culpa grave o
          incumplimiento de sus deberes. Las resoluciones que impongan
          responsabilidad fiscal son impugnables en vía administrativa y,
          posteriormente, ante la jurisdicción contencioso-administrativa.
        </p>
      </Instrumento>

      <Instrumento titulo="Acciones de inconstitucionalidad contra leyes presupuestarias" fundamento="Constitución, art. 10; Ley 7135, arts. 73 a 79">
        <p>
          Las leyes de presupuesto y sus modificaciones están sujetas al control
          de constitucionalidad que ejerce la Sala Constitucional. El artículo 10
          de la Constitución Política establece que corresponde a la Sala
          Constitucional declarar la inconstitucionalidad de las normas de
          cualquier naturaleza y de los actos sujetos al derecho público. Los
          artículos 73 a 79 de la Ley de la Jurisdicción Constitucional (Ley N.°
          7135) regulan el procedimiento de la acción de inconstitucionalidad,
          que puede interponerse contra las disposiciones presupuestarias que
          contravengan normas o principios constitucionales, incluyendo la
          violación de los principios de legalidad presupuestaria, equilibrio
          financiero, destino específico de rentas y universalidad del
          presupuesto.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre materia presupuestaria
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué papel tiene la Contraloría General en el control del presupuesto público?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La Contraloría General de la República es el órgano constitucional encargado de la
              fiscalización superior de la Hacienda Pública. El artículo 183 de la Constitución
              Política la establece como institución auxiliar de la Asamblea Legislativa en la vigilancia
              de la Hacienda Pública. El artículo 184 le atribuye funciones fundamentales: fiscalizar la
              ejecución y liquidación de los presupuestos ordinarios y extraordinarios, examinar y
              aprobar los presupuestos de las municipalidades e instituciones autónomas, y enviar
              anualmente a la Asamblea una memoria sobre el movimiento de fondos públicos. La Ley
              Orgánica de la Contraloría (Ley N.° 7428), en sus artículos 1 a 12, desarrolla su
              organización, competencias y procedimientos, otorgándole independencia funcional y
              administrativa. El artículo 75 de la Ley 8131 establece que los presupuestos de entes
              descentralizados deben ser aprobados por la Contraloría, que puede improbar total o
              parcialmente un presupuesto cuando contenga partidas que contravengan disposiciones legales
              (art. 77). Sus resoluciones son impugnables conforme a los artículos 67 a 72 de la Ley 7428.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo se impugna una resolución de la Contraloría General de la República?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Las resoluciones de la Contraloría son impugnables mediante los mecanismos que establece
              su Ley Orgánica (Ley N.° 7428). Los artículos 67 a 72 regulan los recursos procedentes:
              el recurso de revocatoria se interpone ante el Despacho Contralor que dictó la resolución
              y el recurso de apelación se presenta ante la División correspondiente. Agotada la vía
              administrativa, las resoluciones de la Contraloría pueden impugnarse ante la jurisdicción
              contencioso-administrativa conforme a los artículos 1 y 10 del CPCA. El Tribunal
              Contencioso Administrativo puede revisar la legalidad de los actos del órgano contralor,
              incluyendo las resoluciones de aprobación o improbación presupuestaria y las disposiciones
              emitidas en ejercicio de sus funciones fiscalizadoras. Esta vía jurisdiccional permite
              solicitar la anulación de resoluciones que el administrado considere contrarias al
              ordenamiento jurídico, así como la indemnización de daños y perjuicios causados. La
              impugnación requiere un análisis especializado del marco presupuestario constitucional
              (arts. 176-187) y de la Ley 8131.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué es un procedimiento de responsabilidad fiscal y qué consecuencias tiene?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Los procedimientos de responsabilidad fiscal permiten determinar la responsabilidad
              patrimonial de funcionarios y exfuncionarios públicos por el manejo irregular de fondos
              públicos. Los artículos 68 a 73 de la Ley N.° 7428 facultan a la Contraloría General
              para instruir procedimientos administrativos tendientes a determinar responsabilidad
              disciplinaria y patrimonial de quienes administren fondos públicos. Los artículos 107 a
              114 de la Ley 8131 regulan el régimen de responsabilidad en la administración financiera,
              estableciendo que los funcionarios responden personal y pecuniariamente por los daños que
              causen a la Hacienda Pública por dolo, culpa grave o incumplimiento de sus deberes. Las
              consecuencias incluyen la obligación de resarcir el daño patrimonial causado al erario
              público, sanciones disciplinarias y la inhabilitación para el ejercicio de cargos públicos
              en casos graves. Las resoluciones que impongan responsabilidad fiscal son impugnables en
              vía administrativa y, posteriormente, ante la jurisdicción contencioso-administrativa
              conforme al CPCA. Corporación GC defiende a funcionarios investigados en estos
              procedimientos.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "comercio-internacional": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          El comercio internacional en Costa Rica se rige por un marco normativo
          que incluye la Ley de Creación del Ministerio de Comercio Exterior y de la
          Promotora del Comercio Exterior de Costa Rica (Ley N.° 7638 del
          30 de octubre de 1996), la Ley de Promoción de la Competencia y Defensa Efectiva del
          Consumidor (Ley N.° 7472 del 20 de diciembre de 1994)
          y la Ley de Ejecución de los Acuerdos de la Ronda Uruguay de
          Negociaciones Comerciales Multilaterales (Ley N.° 7473 del 20 de
          diciembre de 1994), además de los
          tratados multilaterales de la Organización Mundial del Comercio (OMC) y
          los tratados de libre comercio (TLC) suscritos por el país.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          La práctica en comercio internacional abarca las investigaciones por
          prácticas desleales de comercio, las medidas de defensa comercial, la
          solución de controversias ante organismos internacionales y la
          regulación de la competencia en el mercado interno vinculada al
          comercio exterior.
        </p>
      </section>

      <Instrumento titulo="Investigaciones antidumping ante COMEX" fundamento="Ley 7638, arts. 1-5; Acuerdo Antidumping OMC, arts. 1-15">
        <p>
          Las investigaciones antidumping tienen por objeto determinar si las
          importaciones de un producto se realizan a precios inferiores a su
          valor normal en el país de origen (dumping) y si dicha práctica causa
          un daño importante a la producción nacional. La Ley 7638 atribuye al
          Ministerio de Comercio Exterior (COMEX) la competencia para conducir
          las investigaciones de prácticas desleales de comercio internacional.
          El procedimiento se rige por el Acuerdo relativo a la Aplicación del
          Artículo VI del GATT de 1994 (Acuerdo Antidumping de la OMC), cuyos
          artículos 1 a 15 establecen los requisitos de inicio, los métodos de
          determinación del dumping y del daño, las medidas provisionales y los
          derechos definitivos aplicables. La solicitud de investigación puede
          ser presentada por la rama de producción nacional afectada o iniciarse
          de oficio.
        </p>
      </Instrumento>

      <Instrumento titulo="Medidas de salvaguardia" fundamento="Ley 7473, arts. 1 a 18; Acuerdo sobre Salvaguardias OMC">
        <p>
          Las medidas de salvaguardia son instrumentos de defensa comercial que
          permiten restringir temporalmente las importaciones de un producto
          cuando estas se incrementan en cantidades tales que causan o amenazan
          causar un daño grave a la producción nacional. La Ley 7473 regula el
          procedimiento para la aplicación de medidas de salvaguardia en Costa
          Rica, conforme al Acuerdo sobre Salvaguardias de la OMC. Los artículos
          1 a 18 de la Ley 7473 establecen los requisitos de inicio de la
          investigación, los criterios para la determinación del daño grave, las
          medidas provisionales de urgencia y las medidas definitivas que pueden
          consistir en la elevación de aranceles o la imposición de contingentes
          cuantitativos por un período que no exceda de cuatro años, prorrogable
          en circunstancias excepcionales.
        </p>
      </Instrumento>

      <Instrumento titulo="Solución de controversias ante la OMC y TLCs" fundamento="Entendimiento sobre Solución de Diferencias OMC; TLC DR-CAFTA, Capítulo 20">
        <p>
          La solución de controversias comerciales internacionales se canaliza a
          través de los mecanismos institucionales establecidos en los acuerdos
          multilaterales y bilaterales. El Entendimiento relativo a las Normas y
          Procedimientos por los que se rige la Solución de Diferencias de la OMC
          establece un sistema vinculante de paneles y apelación para resolver
          las disputas entre Estados miembros sobre la interpretación y aplicación
          de los acuerdos comerciales multilaterales. En el ámbito regional, el
          Capítulo 20 del Tratado de Libre Comercio entre República Dominicana,
          Centroamérica y los Estados Unidos (DR-CAFTA) establece un mecanismo
          de consultas y paneles arbitrales para resolver las controversias entre
          las partes sobre la aplicación del tratado.
        </p>
      </Instrumento>

      <Instrumento titulo="Competencia y prácticas monopolísticas" fundamento="Ley 7472, arts. 11 a 28; COPROCOM">
        <p>
          La Ley 7472 regula la promoción de la competencia y la represión de
          las prácticas monopolísticas en el mercado costarricense. Los artículos
          11 a 28 establecen el régimen de prohibiciones de prácticas
          anticompetitivas, distinguiendo entre prácticas monopolísticas
          absolutas (art. 11) —como la fijación concertada de precios y la
          repartición de mercados— y prácticas monopolísticas relativas (art.
          12) —como el abuso de posición dominante. La Comisión para Promover
          la Competencia (COPROCOM) es el órgano encargado de investigar y
          sancionar las prácticas anticompetitivas. Sus resoluciones pueden
          imponer multas y ordenar la cesación de las conductas
          anticompetitivas. Contra las resoluciones de COPROCOM proceden los
          recursos administrativos y, posteriormente, la impugnación ante la
          jurisdicción contencioso-administrativa.
        </p>
      </Instrumento>

      <Instrumento titulo="Medidas sanitarias y fitosanitarias" fundamento="Acuerdo MSF OMC; Ley 8495 (SENASA); Ley 7664 (SFE)">
        <p>
          Las medidas sanitarias y fitosanitarias son regulaciones que los
          Estados aplican para proteger la vida y salud de las personas, los
          animales y los vegetales frente a los riesgos derivados de las
          importaciones. El Acuerdo sobre la Aplicación de Medidas Sanitarias y
          Fitosanitarias de la OMC establece que estas medidas deben basarse en
          principios científicos y no constituir restricciones encubiertas al
          comercio internacional. En Costa Rica, el Servicio Nacional de Salud
          Animal (SENASA), creado por la Ley 8495, y el Servicio Fitosanitario
          del Estado (SFE), regulado por la Ley 7664, son los órganos
          competentes para emitir los requisitos sanitarios y fitosanitarios
          aplicables a las importaciones y exportaciones de productos de origen
          animal y vegetal, respectivamente.
        </p>
      </Instrumento>

      <Instrumento titulo="Valoración aduanera y clasificación arancelaria" fundamento="Ley 7557 (Ley General de Aduanas), arts. 230-256; Acuerdo de Valoración OMC">
        <p>
          La valoración aduanera es el procedimiento mediante el cual se
          determina el valor en aduana de las mercancías importadas para efectos
          del cálculo de los derechos arancelarios. La Ley General de Aduanas
          (Ley N.° 7557) regula en sus artículos 230 a 256 los métodos de
          valoración aduanera, adoptando el sistema del Acuerdo relativo a la
          Aplicación del Artículo VII del GATT de 1994 (Acuerdo de Valoración de
          la OMC). El método principal es el valor de transacción, y
          subsidiariamente se aplican los métodos alternativos que el Acuerdo
          establece. La clasificación arancelaria, por su parte, consiste en la
          determinación de la partida y subpartida del Sistema Armonizado de
          Designación y Codificación de Mercancías que corresponde al producto
          importado, lo cual determina la tarifa arancelaria aplicable. Las
          resoluciones de valoración y clasificación son impugnables ante la
          autoridad aduanera y, agotada la vía administrativa, ante la
          jurisdicción contencioso-administrativa.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre comercio internacional
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué es una investigación antidumping y cómo se inicia en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Las investigaciones antidumping tienen por objeto determinar si las importaciones de un
              producto se realizan a precios inferiores a su valor normal en el país de origen (dumping)
              y si dicha práctica causa daño importante a la producción nacional. La Ley N.° 7638
              atribuye al Ministerio de Comercio Exterior (COMEX) la competencia para conducir estas
              investigaciones conforme al Acuerdo relativo a la Aplicación del Artículo VI del GATT de
              1994 (Acuerdo Antidumping de la OMC). Los artículos 1 a 15 del Acuerdo establecen los
              requisitos de inicio, los métodos de determinación del dumping y del daño, las medidas
              provisionales y los derechos definitivos aplicables. La solicitud puede ser presentada por
              la rama de producción nacional afectada, que debe acreditar que representa al menos el
              veinticinco por ciento de la producción total del producto similar, o iniciarse de oficio
              por la autoridad investigadora. Si se determina la existencia de dumping y daño, COMEX
              puede imponer derechos antidumping que neutralicen el margen de dumping calculado.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué son las medidas de salvaguardia y cuándo se aplican?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Las medidas de salvaguardia son instrumentos de defensa comercial que permiten restringir
              temporalmente las importaciones de un producto cuando estas se incrementan en cantidades
              tales que causan o amenazan causar un daño grave a la producción nacional. La Ley de
              Ejecución de los Acuerdos de la Ronda Uruguay (Ley N.° 7473) regula el procedimiento en
              Costa Rica, conforme al Acuerdo sobre Salvaguardias de la OMC. Los artículos 1 a 18 de la
              Ley 7473 establecen los requisitos de inicio de la investigación, los criterios para
              determinar el daño grave, las medidas provisionales de urgencia y las medidas definitivas
              que pueden consistir en elevación de aranceles o imposición de contingentes cuantitativos
              por un período máximo de cuatro años, prorrogable en circunstancias excepcionales. A
              diferencia de las medidas antidumping, las salvaguardias no requieren demostrar una
              práctica desleal sino un incremento súbito de importaciones que cause daño a la industria
              nacional. Las resoluciones que impongan estas medidas son impugnables ante la jurisdicción
              contencioso-administrativa y ante los mecanismos de solución de controversias de la OMC.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo se resuelven las disputas comerciales internacionales en que participa Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Las controversias comerciales internacionales se canalizan a través de mecanismos
              institucionales establecidos en los acuerdos multilaterales y bilaterales. El Entendimiento
              relativo a las Normas y Procedimientos por los que se rige la Solución de Diferencias de
              la OMC establece un sistema vinculante de paneles y apelación para resolver disputas entre
              Estados miembros sobre la interpretación y aplicación de los acuerdos comerciales. En el
              ámbito regional, el Capítulo 20 del DR-CAFTA establece un mecanismo de consultas y paneles
              arbitrales para resolver controversias sobre la aplicación del tratado. La Ley N.° 7472
              (Ley de Promoción de la Competencia) regula internamente las prácticas monopolísticas: los
              artículos 11 a 28 prohíben las prácticas absolutas (fijación de precios, repartición de
              mercados, art. 11) y las relativas (abuso de posición dominante, art. 12). La Comisión
              para Promover la Competencia (COPROCOM) investiga y sanciona estas conductas. Sus
              resoluciones son impugnables ante la jurisdicción contencioso-administrativa del CPCA.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "derecho-civil": (
  <>
    <section className="mb-12">
      <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
        El Derecho Civil regula las relaciones jurídicas entre particulares: obligaciones,
        contratos, responsabilidad por daños, derechos reales, sucesiones y familia patrimonial.
        En Costa Rica, el Código Civil (Ley N.° 63 del 28 de septiembre de 1887) y el Código
        Procesal Civil (Ley N.° 9342 del 3 de febrero de 2016) constituyen el marco normativo
        central. La Ley 9342 instauró un sistema procesal oral e inmediato que transformó la
        litigación civil en el país.
      </p>
      <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
        Si bien el núcleo de Corporación GC es el Derecho Público, la firma brinda cobertura
        en materia civil para clientes que requieren un acompañamiento jurídico integral. A
        continuación se describen los principales instrumentos procesales que se emplean en
        esta área de práctica.
      </p>
    </section>

    <Instrumento titulo="Responsabilidad civil contractual y extracontractual" fundamento="Código Civil, arts. 1022 a 1048; arts. 1045 a 1048">
      <p>
        La responsabilidad civil contractual surge del incumplimiento de una obligación
        pactada entre las partes (arts. 1022 y ss. del Código Civil), mientras que la
        responsabilidad extracontractual o aquiliana nace de un hecho ilícito que causa daño
        a un tercero sin que exista vínculo obligacional previo (art. 1045). El artículo 1045
        establece que todo aquel que por dolo, falta, negligencia o imprudencia causa un daño
        a otro está obligado a repararlo junto con los perjuicios. El artículo 1048 extiende
        la responsabilidad al propietario de un edificio por los daños que cause su ruina, y al
        dueño de un animal por los perjuicios que este ocasione.
      </p>
      <p>
        La demanda de responsabilidad civil se tramita por la vía del proceso ordinario civil
        y exige acreditar el hecho generador, el daño, el nexo causal y el factor de
        atribución (dolo o culpa). En materia contractual, el incumplimiento se presume
        imputable al deudor salvo prueba de caso fortuito o fuerza mayor.
      </p>
    </Instrumento>

    <Instrumento titulo="Proceso ordinario civil" fundamento="Ley 9342, arts. 35 a 51">
      <p>
        El proceso ordinario civil es la vía procesal para controversias de mayor cuantía y
        complejidad. La Ley 9342 (Código Procesal Civil) estructuró este proceso bajo los
        principios de oralidad, inmediación, concentración y publicidad (art. 2). La demanda
        se presenta por escrito (art. 35) y, una vez admitida y contestada, el tribunal
        convoca a una audiencia preliminar (art. 41) para sanear el proceso, fijar el objeto
        del debate y admitir prueba. Posteriormente se celebra la audiencia complementaria
        (art. 47) en la que se evacua la prueba y las partes formulan conclusiones orales.
      </p>
      <p>
        La sentencia se dicta dentro del plazo de quince días hábiles posteriores a la
        audiencia complementaria (art. 51). Esta estructura procesal concentra la actividad
        en dos audiencias y reduce significativamente la duración de los procesos civiles
        respecto del régimen escrito anterior.
      </p>
    </Instrumento>

    <Instrumento titulo="Proceso monitorio (cobro judicial)" fundamento="Ley 9342, arts. 100 a 107">
      <p>
        El proceso monitorio es el instrumento procesal diseñado para el cobro de obligaciones
        dinerarias líquidas, exigibles y de plazo vencido cuando se sustenten en un documento
        que constituya prueba del crédito. Los artículos 100 a 107 de la Ley 9342 regulan este
        proceso. El acreedor presenta la demanda acompañada del título (letras de cambio,
        pagarés, facturas, contratos de préstamo, certificaciones contables) y el tribunal
        dicta una resolución intimatoria que ordena al deudor el pago o la oposición
        fundamentada dentro de quince días.
      </p>
      <p>
        Si el deudor no se opone, la resolución intimatoria adquiere firmeza y carácter de
        título ejecutivo. Si formula oposición, el proceso se reconvierte en ordinario o
        sumario según la cuantía. El monitorio es especialmente eficaz para la recuperación
        de créditos documentados.
      </p>
    </Instrumento>

    <Instrumento titulo="Desahucio y procesos arrendaticios" fundamento="Ley General de Arrendamientos, Ley 7527; Ley 9342, arts. 108 a 113">
      <p>
        La Ley General de Arrendamientos Urbanos y Suburbanos (Ley N.° 7527 del 10 de julio
        de 1995) regula los contratos de arrendamiento de inmuebles destinados a vivienda y
        comercio. El juicio de desahucio procede cuando el arrendatario incumple sus
        obligaciones contractuales —especialmente el pago de la renta— o cuando el plazo del
        arrendamiento ha vencido y el inquilino no desocupa el inmueble. Los artículos 108 a
        113 de la Ley 9342 regulan el proceso sumario, que es la vía para tramitar los
        desahucios y las controversias derivadas de contratos de arrendamiento.
      </p>
      <p>
        El proceso sumario se caracteriza por su celeridad: audiencia única, prueba concentrada
        y sentencia en un plazo reducido. La demanda de desahucio debe acreditar la existencia
        del contrato de arrendamiento, la causal invocada y el requerimiento previo al
        arrendatario cuando la ley lo exige.
      </p>
    </Instrumento>

    <Instrumento titulo="Procesos reivindicatorios y posesorios" fundamento="Código Civil, arts. 279 a 332; Ley 9342, arts. 35 y 108">
      <p>
        La acción reivindicatoria es el instrumento procesal mediante el cual el propietario de
        un bien reclama su restitución frente a quien lo posee sin título legítimo (Código
        Civil, arts. 316 a 332). Se tramita como proceso ordinario civil y exige que el
        demandante acredite su derecho de dominio, la identificación del bien y la posesión
        ilegítima del demandado.
      </p>
      <p>
        Los interdictos posesorios protegen la posesión como situación de hecho, independiente-
        mente de la titularidad dominical. El Código Civil (arts. 279 a 315) regula la posesión,
        y la Ley 9342 tramita estas acciones por la vía sumaria (art. 108). Los interdictos de
        amparo de posesión y de restitución permiten al poseedor recuperar la tenencia del bien
        o cesar las perturbaciones sin necesidad de acreditar propiedad.
      </p>
    </Instrumento>

    <Instrumento titulo="Sucesiones y particiones" fundamento="Código Civil, arts. 520 a 635; Ley 9342, arts. 114 a 129">
      <p>
        El proceso sucesorio regula la transmisión del patrimonio de una persona fallecida a
        sus herederos y legatarios. El Código Civil (arts. 520 a 635) distingue entre sucesión
        testamentaria —cuando existe testamento válido— y sucesión legítima o intestada —cuando
        no lo hay—. Los artículos 114 a 129 de la Ley 9342 regulan el procedimiento del
        proceso sucesorio, incluyendo la apertura, la declaratoria de herederos, el inventario
        y avalúo de bienes, la rendición de cuentas y la partición.
      </p>
      <p>
        La partición de bienes puede ser voluntaria —cuando los herederos acuerdan la
        distribución— o judicial —cuando existe desacuerdo—. En ambos casos, el proceso
        concluye con la adjudicación formal de los bienes a los herederos mediante escritura
        pública inscribible en el Registro Nacional.
      </p>
    </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre derecho civil
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo funciona una demanda por responsabilidad civil en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La responsabilidad civil en Costa Rica se fundamenta en el Código Civil. La responsabilidad
              contractual surge del incumplimiento de una obligación pactada (arts. 1022 y ss.), mientras
              que la extracontractual o aquiliana nace de un hecho ilícito que causa daño sin vínculo
              obligacional previo. El artículo 1045 del Código Civil establece que todo aquel que por
              dolo, falta, negligencia o imprudencia causa un daño a otro está obligado a repararlo junto
              con los perjuicios. El artículo 1048 extiende la responsabilidad al propietario de un
              edificio por los daños que cause su ruina. La demanda se tramita como proceso ordinario
              civil conforme a los artículos 35 a 51 de la Ley 9342 (Código Procesal Civil), bajo los
              principios de oralidad, inmediación y concentración. El demandante debe acreditar cuatro
              elementos: el hecho generador, el daño efectivamente sufrido, el nexo causal entre ambos
              y el factor de atribución (dolo o culpa). En materia contractual, el incumplimiento se
              presume imputable al deudor salvo prueba de caso fortuito o fuerza mayor.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué es el proceso monitorio y cómo sirve para cobrar deudas judicialmente?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El proceso monitorio es el instrumento procesal diseñado para el cobro de obligaciones
              dinerarias líquidas, exigibles y de plazo vencido, regulado en los artículos 100 a 107
              de la Ley 9342 (Código Procesal Civil). El acreedor presenta la demanda acompañada del
              título que constituya prueba del crédito: letras de cambio, pagarés, facturas, contratos
              de préstamo o certificaciones contables. El tribunal dicta una resolución intimatoria que
              ordena al deudor el pago o la formulación de oposición fundamentada dentro de quince días.
              Si el deudor no se opone, la resolución intimatoria adquiere firmeza y carácter de título
              ejecutivo, permitiendo el embargo y remate de bienes del deudor para satisfacer la
              obligación. Si formula oposición, el proceso se reconvierte en ordinario o sumario según
              la cuantía, conforme a los artículos 35 y 108 de la Ley 9342. El monitorio es
              especialmente eficaz para la recuperación de créditos documentados y constituye la vía
              más expedita del sistema procesal civil costarricense para el cobro judicial de deudas.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo se tramita un proceso sucesorio en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El proceso sucesorio regula la transmisión del patrimonio de una persona fallecida a sus
              herederos y legatarios. El Código Civil (arts. 520 a 635) distingue entre sucesión
              testamentaria, cuando existe testamento válido, y sucesión legítima o intestada, cuando
              no lo hay. Los artículos 114 a 129 de la Ley 9342 regulan el procedimiento: apertura del
              proceso ante el Juzgado Civil competente, declaratoria de herederos conforme al testamento
              o al orden de sucesión legal, inventario y avalúo de los bienes del causante, rendición de
              cuentas por el albacea o administrador, y partición de los bienes entre los herederos. La
              partición puede ser voluntaria, cuando los herederos acuerdan la distribución, o judicial,
              cuando existe desacuerdo. En ambos casos, el proceso concluye con la adjudicación formal de
              los bienes mediante escritura pública inscribible en el Registro Nacional conforme a la Ley
              N.° 5695. Los conflictos entre herederos sobre la validez del testamento, la calidad de
              heredero o la valoración de bienes se resuelven dentro del mismo proceso sucesorio o
              mediante procesos incidentales según la naturaleza de la controversia.
            </p>
          </div>
        </div>
      </section>
  </>
),



"derecho-de-familia": (
  <>
    <section className="mb-12">
      <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
        El Derecho de Familia regula las relaciones jurídicas que nacen del matrimonio, la
        unión de hecho, la filiación, la patria potestad y la obligación alimentaria. En Costa
        Rica, el Código de Familia (Ley N.° 5476 del 21 de diciembre de 1973) y la Ley de
        Pensiones Alimentarias (Ley N.° 7654 del 19 de diciembre de 1996) constituyen el
        marco normativo principal. La Ley contra la Violencia Doméstica (Ley N.° 7586 del 10
        de abril de 1996) complementa la protección en situaciones de violencia intrafamiliar.
      </p>
      <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
        Aunque la especialidad central de Corporación GC es el Derecho Público, la firma
        ofrece representación en materia de familia para clientes que necesitan un
        acompañamiento jurídico integral. A continuación se detallan los principales
        instrumentos procesales en esta área.
      </p>
    </section>

    <Instrumento titulo="Divorcio contencioso y por mutuo consentimiento" fundamento="Código de Familia, arts. 48 a 65">
      <p>
        El Código de Familia regula la disolución del vínculo matrimonial en sus artículos 48
        a 65. El divorcio por mutuo consentimiento (art. 48.7) procede cuando ambos cónyuges
        acuerdan la separación y presentan un convenio que regula la guarda de los hijos, el
        régimen de visitas, la pensión alimentaria y la liquidación del patrimonio conyugal. El
        juez homologa el convenio siempre que no vulnere los derechos de los menores de edad.
      </p>
      <p>
        El divorcio contencioso procede por las causales taxativas del artículo 48: adulterio,
        atentado contra la vida del cónyuge o los hijos, sevicia, separación judicial por más
        de un año, y ausencia legalmente declarada. El artículo 58 establece que la sentencia
        que declara el divorcio disuelve el vínculo y habilita la liquidación del régimen
        patrimonial. El proceso se ventila ante los Juzgados de Familia.
      </p>
    </Instrumento>

    <Instrumento titulo="Pensión alimentaria" fundamento="Ley 7654, arts. 1 a 57">
      <p>
        La Ley de Pensiones Alimentarias (Ley N.° 7654) regula la obligación alimentaria como
        un deber recíproco entre cónyuges, ascendientes y descendientes. El artículo 1 define
        los alimentos como las prestaciones que permiten satisfacer las necesidades de
        sustento, habitación, vestido, asistencia médica, educación y recreación. El artículo
        27 establece que el monto de la pensión se fija considerando las necesidades del
        beneficiario, las posibilidades económicas del obligado y el nivel de vida
        acostumbrado.
      </p>
      <p>
        El proceso alimentario se tramita ante los Juzgados de Pensiones Alimentarias con un
        procedimiento expedito. El artículo 17 permite la fijación de una pensión provisional
        desde la interposición de la demanda. El incumplimiento de la obligación alimentaria
        puede dar lugar al apremio corporal del deudor (art. 24), que constituye una medida
        coercitiva de arresto hasta por seis meses.
      </p>
    </Instrumento>

    <Instrumento titulo="Guarda, crianza y régimen de visitas" fundamento="Código de Familia, arts. 140 a 159">
      <p>
        Los artículos 140 a 159 del Código de Familia regulan la patria potestad, la guarda,
        la crianza y la educación de los hijos menores de edad. La patria potestad corresponde
        a ambos progenitores conjuntamente (art. 140), y su ejercicio comprende la custodia
        del menor, su representación legal y la administración de sus bienes. Cuando los
        padres se separan, el juez determina a cuál de ellos corresponde la guarda atendiendo
        al interés superior del niño (art. 2 del Código de la Niñez y la Adolescencia).
      </p>
      <p>
        El régimen de visitas garantiza el derecho del progenitor no custodio a mantener
        contacto regular con sus hijos (art. 143). El juez fija los días, horarios y
        condiciones de las visitas. El incumplimiento del régimen puede dar lugar a medidas
        de apremio. Asimismo, el artículo 158 establece que la patria potestad puede
        suspenderse o extinguirse por las causales previstas en la ley.
      </p>
    </Instrumento>

    <Instrumento titulo="Filiación y reconocimiento de paternidad" fundamento="Código de Familia, arts. 68 a 92; Ley 8101">
      <p>
        La filiación es el vínculo jurídico que une a los hijos con sus progenitores. El
        Código de Familia (arts. 68 a 92) regula la filiación matrimonial y extramatrimonial.
        El reconocimiento de paternidad puede ser voluntario —mediante declaración ante el
        Registro Civil, en escritura pública o en testamento (art. 84)— o forzoso mediante
        proceso judicial de investigación de paternidad.
      </p>
      <p>
        La Ley de Paternidad Responsable (Ley N.° 8101 del 16 de abril de 2001) introdujo un
        procedimiento administrativo mediante el cual la madre puede señalar al presunto padre
        ante el Registro Civil, que le notifica para que se realice la prueba de marcadores
        genéticos (ADN). Si el señalado no comparece o se niega a la prueba, se inscribe la
        paternidad por presunción. La impugnación de la paternidad se tramita ante los
        Juzgados de Familia.
      </p>
    </Instrumento>

    <Instrumento titulo="Régimen patrimonial y liquidación de bienes gananciales" fundamento="Código de Familia, arts. 37 a 52">
      <p>
        El régimen patrimonial del matrimonio costarricense es el de participación diferida en
        las ganancias (arts. 37 a 52 del Código de Familia). Durante el matrimonio, cada
        cónyuge administra y dispone libremente de sus propios bienes (art. 40). Al disolverse
        el vínculo, se liquidan los bienes gananciales: cada cónyuge tiene derecho a participar
        en el cincuenta por ciento del valor neto de los bienes adquiridos durante el
        matrimonio por el otro cónyuge (art. 41 del Código de Familia).
      </p>
      <p>
        La liquidación puede realizarse por acuerdo de partes o mediante proceso judicial. El
        artículo 98 establece que se consideran bienes gananciales todos los adquiridos a
        título oneroso durante el matrimonio por cualquiera de los cónyuges, salvo los que
        tengan carácter personalísimo. El artículo 105 dispone que la liquidación debe
        realizarse dentro de los dos años siguientes a la disolución del vínculo.
      </p>
    </Instrumento>

    <Instrumento titulo="Violencia doméstica (medidas de protección)" fundamento="Ley 7586, arts. 1 a 25">
      <p>
        La Ley contra la Violencia Doméstica (Ley N.° 7586) establece un procedimiento
        especial y expedito para la protección de las víctimas de violencia intrafamiliar. El
        artículo 2 define las manifestaciones de violencia: física, psicológica, sexual y
        patrimonial. El juez puede dictar medidas de protección de oficio o a solicitud de
        parte (art. 3), incluyendo: orden de desalojo del agresor del domicilio común, fijación
        de una pensión alimentaria provisional, prohibición de acercamiento al domicilio o
        lugar de trabajo de la víctima, y decomiso de armas.
      </p>
      <p>
        Las medidas de protección se dictan inaudita parte (sin audiencia previa del agresor)
        en casos de peligro inminente (art. 7) y tienen una duración de hasta seis meses
        prorrogables. La solicitud se presenta ante los Juzgados de Violencia Doméstica y
        no requiere patrocinio letrado obligatorio, aunque la representación profesional
        fortalece significativamente la posición procesal de la víctima.
      </p>
    </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre derecho de familia
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cuáles son las causales de divorcio en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El Código de Familia regula la disolución del vínculo matrimonial en los artículos 48 a
              65. Existen dos vías principales. El divorcio por mutuo consentimiento (art. 48.7) procede
              cuando ambos cónyuges acuerdan la separación y presentan un convenio que regula la guarda
              de los hijos, el régimen de visitas, la pensión alimentaria y la liquidación del patrimonio
              conyugal; el juez homologa el convenio siempre que no vulnere los derechos de los menores.
              El divorcio contencioso procede por las causales taxativas del artículo 48: adulterio,
              atentado contra la vida del cónyuge o los hijos, sevicia, separación judicial por más de
              un año y ausencia legalmente declarada. El artículo 58 establece que la sentencia de
              divorcio disuelve el vínculo matrimonial y habilita la liquidación del régimen patrimonial
              conforme a los artículos 37 a 52 del Código de Familia. El proceso se ventila ante los
              Juzgados de Familia. En la liquidación, cada cónyuge tiene derecho al cincuenta por ciento
              del valor neto de los bienes gananciales adquiridos durante el matrimonio (art. 41).
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo se fija una pensión alimentaria y qué pasa si no se paga?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La Ley de Pensiones Alimentarias (Ley N.° 7654) regula la obligación alimentaria como un
              deber recíproco entre cónyuges, ascendientes y descendientes. El artículo 1 define los
              alimentos como las prestaciones para satisfacer necesidades de sustento, habitación,
              vestido, asistencia médica, educación y recreación. El artículo 27 establece que el monto
              se fija considerando las necesidades del beneficiario, las posibilidades económicas del
              obligado y el nivel de vida acostumbrado. El proceso se tramita ante los Juzgados de
              Pensiones Alimentarias con un procedimiento expedito, y el artículo 17 permite la fijación
              de una pensión provisional desde la interposición de la demanda. El incumplimiento de la
              obligación alimentaria tiene consecuencias severas: el artículo 24 de la Ley 7654 faculta
              al juez a decretar el apremio corporal del deudor, que constituye una medida coercitiva de
              arresto hasta por seis meses. Esta medida puede reiterarse mientras subsista el
              incumplimiento. Corporación GC asesora tanto a beneficiarios como a obligados alimentarios
              en la determinación justa del monto y en los procedimientos de modificación.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo se determina la guarda de los hijos menores cuando los padres se separan?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Los artículos 140 a 159 del Código de Familia regulan la patria potestad, la guarda, la
              crianza y la educación de los hijos menores. La patria potestad corresponde a ambos
              progenitores conjuntamente (art. 140) y comprende la custodia del menor, su representación
              legal y la administración de sus bienes. Cuando los padres se separan, el juez determina
              a cuál corresponde la guarda atendiendo al interés superior del niño, principio rector
              consagrado en el artículo 2 del Código de la Niñez y la Adolescencia. El progenitor no
              custodio conserva el derecho a un régimen de visitas que garantice el contacto regular con
              sus hijos (art. 143), cuyas condiciones, días y horarios fija el juez. El incumplimiento
              del régimen puede dar lugar a medidas de apremio. El artículo 158 establece que la patria
              potestad puede suspenderse o extinguirse por causales como abandono, maltrato o conducta
              que ponga en peligro la salud, seguridad o moralidad del menor. El proceso se ventila ante
              los Juzgados de Familia y las medidas de protección pueden solicitarse de forma urgente.
            </p>
          </div>
        </div>
      </section>
  </>
),



"derecho-laboral": (
  <>
    <section className="mb-12">
      <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
        El Derecho Laboral regula las relaciones entre empleadores y trabajadores, la
        resolución de conflictos individuales y colectivos de trabajo, y la protección de los
        derechos laborales fundamentales. En Costa Rica, el Código de Trabajo (Ley N.° 2 del
        27 de agosto de 1943), reformado sustancialmente por la Ley de Reforma Procesal Laboral
        (Ley N.° 9343 del 14 de diciembre de 2015), constituye el cuerpo normativo central. La
        Ley 9343 instauró un proceso oral, concentrado y por audiencias que modernizó la
        jurisdicción laboral.
      </p>
      <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
        Si bien la especialidad principal de Corporación GC es el Derecho Público, la firma
        ofrece representación en litigios laborales para clientes que requieren cobertura
        jurídica integral. A continuación se describen los instrumentos procesales más
        relevantes de esta jurisdicción.
      </p>
    </section>

    <Instrumento titulo="Despido injustificado y cobro de prestaciones laborales" fundamento="Código de Trabajo, arts. 28 a 35, 80 a 82, 153 a 162">
      <p>
        El despido sin justa causa genera el derecho del trabajador al pago de preaviso
        (art. 28), auxilio de cesantía (art. 29), vacaciones proporcionales (art. 153),
        aguinaldo proporcional (art. 87 bis) y cualquier otro extremo laboral adeudado. El
        artículo 82 del Código de Trabajo enumera las causas justas de despido; si el
        empleador no logra acreditar la causal invocada, el despido se reputa injustificado y
        procede la condena al pago íntegro de prestaciones.
      </p>
      <p>
        La demanda de cobro de prestaciones laborales se tramita ante los Juzgados de Trabajo
        mediante el proceso ordinario laboral oral. El artículo 35 establece el plazo de
        prescripción de los derechos laborales: un año contado desde la fecha del despido
        para el reclamo de preaviso, cesantía y demás prestaciones derivadas de la terminación
        de la relación laboral.
      </p>
    </Instrumento>

    <Instrumento titulo="Proceso ordinario laboral oral" fundamento="Código de Trabajo reformado, arts. 422 a 457">
      <p>
        La Ley 9343 de Reforma Procesal Laboral transformó el proceso laboral costarricense
        de un sistema escrito a uno oral, concentrado y por audiencias. Los artículos 422 a
        457 del Código de Trabajo reformado regulan el proceso ordinario laboral. La demanda
        se presenta por escrito (art. 424), y el tribunal convoca a una audiencia preliminar
        (art. 434) para intentar la conciliación, sanear el proceso, fijar los hechos
        controvertidos y admitir la prueba.
      </p>
      <p>
        La audiencia de juicio (art. 444) constituye el momento central del proceso: se evacúa
        la prueba testimonial, pericial y documental, y las partes formulan alegatos orales.
        La sentencia se dicta en forma oral al concluir la audiencia o dentro de los cinco
        días siguientes (art. 451). Los principios de oralidad, inmediación, concentración,
        celeridad y búsqueda de la verdad real (art. 422) rigen todo el procedimiento.
      </p>
    </Instrumento>

    <Instrumento titulo="Riesgos del trabajo" fundamento="Código de Trabajo, arts. 193 a 331; Ley 6727">
      <p>
        El régimen de riesgos del trabajo regulado en el Título IV del Código de Trabajo
        (arts. 193 a 331) y en la Ley sobre Riesgos del Trabajo (Ley N.° 6727 del 9 de
        marzo de 1982) establece la responsabilidad objetiva del empleador por los accidentes
        y enfermedades laborales que sufran sus trabajadores. El artículo 193 define el
        riesgo del trabajo como el accidente o la enfermedad que ocurra con ocasión o por
        consecuencia del trabajo.
      </p>
      <p>
        El trabajador accidentado tiene derecho a asistencia médico-quirúrgica, rehabilitación,
        prótesis, salarios caídos durante la incapacidad e indemnización por discapacidad
        permanente (arts. 218 a 240). Cuando el Instituto Nacional de Seguros (INS) deniega
        o subvalúa las prestaciones, el trabajador puede impugnar la resolución ante los
        Juzgados de Trabajo. El proceso de riesgos del trabajo se tramita conforme al
        procedimiento ordinario laboral oral.
      </p>
    </Instrumento>

    <Instrumento titulo="Fuero sindical y protección contra actos antisindicales" fundamento="Código de Trabajo reformado, arts. 363 a 383">
      <p>
        La Ley 9343 de Reforma Procesal Laboral fortaleció significativamente la protección
        de la libertad sindical. Los artículos 363 a 383 del Código de Trabajo reformado
        regulan el fuero sindical, que protege a los trabajadores sindicalizados —especialmente
        a los dirigentes— contra represalias del empleador. El artículo 367 establece que el
        despido de un trabajador aforado requiere autorización judicial previa, y que el
        despido realizado sin dicha autorización es nulo.
      </p>
      <p>
        El proceso de calificación de despido se tramita ante los Juzgados de Trabajo con
        carácter preferente. Además, el artículo 371 prohíbe expresamente los actos
        antisindicales: injerencia del empleador en la organización sindical, discriminación
        por afiliación sindical y represalias contra trabajadores que participen en actividades
        sindicales lícitas. La tutela incluye la reinstalación del trabajador despedido y el
        pago de salarios caídos.
      </p>
    </Instrumento>

    <Instrumento titulo="Discriminación laboral" fundamento="Código de Trabajo reformado, arts. 404 a 410">
      <p>
        La Ley 9343 incorporó un procedimiento especial para la tutela contra actos
        discriminatorios en el ámbito laboral (arts. 404 a 410 del Código de Trabajo
        reformado). Se prohíbe toda discriminación por razones de edad, etnia, sexo,
        religión, orientación sexual, estado civil, opinión política, ascendencia nacional,
        origen social, filiación, discapacidad, afiliación sindical, situación económica o
        cualquier otra forma análoga de discriminación (art. 404).
      </p>
      <p>
        El proceso de tutela contra discriminación se tramita con carácter preferente y el
        artículo 408 establece una inversión de la carga probatoria: corresponde al empleador
        demostrar que la medida cuestionada obedece a motivos razonables y objetivos, no
        discriminatorios. La sentencia puede ordenar la cesación de la conducta
        discriminatoria, la reinstalación del trabajador, el pago de daños y perjuicios y la
        indemnización por daño moral.
      </p>
    </Instrumento>

    <Instrumento titulo="Recursos de apelación y casación laboral" fundamento="Código de Trabajo reformado, arts. 476 a 492">
      <p>
        El régimen recursivo laboral comprende el recurso de apelación ante los Tribunales de
        Apelación de Trabajo (art. 476) y el recurso de casación ante la Sala Segunda de la
        Corte Suprema de Justicia (arts. 483 a 492). La apelación procede contra sentencias
        definitivas y ciertas resoluciones interlocutorias expresamente previstas. El recurso
        debe interponerse dentro de los tres días hábiles siguientes a la notificación del
        fallo (art. 476).
      </p>
      <p>
        El recurso de casación laboral procede por razones procesales (quebrantos de debido
        proceso) y por razones de fondo (errónea aplicación del derecho sustantivo o
        valoración probatoria). El artículo 487 establece que la Sala puede anular la
        sentencia impugnada y resolver el fondo del asunto sin reenvío. Los artículos 489 a
        492 regulan el procedimiento de admisibilidad, que incluye un análisis de relevancia
        del asunto para la jurisprudencia laboral.
      </p>
    </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre derecho laboral
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué derechos tiene un trabajador despedido sin justa causa en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El despido sin justa causa genera el derecho del trabajador al pago de varias prestaciones
              conforme al Código de Trabajo. El preaviso (art. 28) corresponde según la antigüedad del
              trabajador; el auxilio de cesantía (art. 29) se calcula con base en el promedio salarial
              de los últimos seis meses y puede alcanzar hasta veinte días por año trabajado; las
              vacaciones proporcionales (art. 153) y el aguinaldo proporcional (art. 87 bis) se calculan
              sobre el tiempo laborado sin disfrutar. El artículo 82 enumera las causas justas de
              despido; si el empleador no logra acreditar la causal invocada en juicio, el despido se
              reputa injustificado y procede la condena al pago íntegro de prestaciones. La demanda de
              cobro se tramita ante los Juzgados de Trabajo mediante el proceso ordinario laboral oral
              (arts. 422-457). El artículo 35 establece un plazo de prescripción de un año desde la
              fecha del despido para reclamar preaviso, cesantía y demás prestaciones derivadas de la
              terminación de la relación laboral. Actuar con prontitud es fundamental para preservar los
              derechos.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo funciona el proceso laboral oral en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La Ley N.° 9343 de Reforma Procesal Laboral transformó el proceso laboral de un sistema
              escrito a uno oral, concentrado y por audiencias. Los artículos 422 a 457 del Código de
              Trabajo reformado regulan el proceso ordinario. Los principios rectores son oralidad,
              inmediación, concentración, celeridad y búsqueda de la verdad real (art. 422). La demanda
              se presenta por escrito (art. 424) y el tribunal convoca a una audiencia preliminar
              (art. 434) para intentar la conciliación, sanear el proceso, fijar los hechos
              controvertidos y admitir la prueba. La audiencia de juicio (art. 444) es el momento
              central: se evacúa la prueba testimonial, pericial y documental, y las partes formulan
              alegatos orales. La sentencia se dicta oralmente al concluir la audiencia o dentro de los
              cinco días siguientes (art. 451). Contra la sentencia procede el recurso de apelación ante
              los Tribunales de Apelación de Trabajo (art. 476) dentro de tres días hábiles, y el
              recurso de casación ante la Sala Segunda de la Corte Suprema de Justicia (arts. 483-492)
              por vicios procesales o de fondo.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué protección existe contra la discriminación laboral en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La Ley N.° 9343 de Reforma Procesal Laboral incorporó un procedimiento especial de tutela
              contra actos discriminatorios en el ámbito laboral, regulado en los artículos 404 a 410
              del Código de Trabajo reformado. El artículo 404 prohíbe toda discriminación por razones
              de edad, etnia, sexo, religión, orientación sexual, estado civil, opinión política,
              ascendencia nacional, origen social, filiación, discapacidad, afiliación sindical,
              situación económica o cualquier forma análoga. El proceso de tutela se tramita con carácter
              preferente ante los Juzgados de Trabajo y el artículo 408 establece una inversión de la
              carga probatoria: corresponde al empleador demostrar que la medida cuestionada obedece a
              motivos razonables y objetivos, no discriminatorios. La sentencia puede ordenar la cesación
              de la conducta discriminatoria, la reinstalación del trabajador afectado, el pago de daños
              y perjuicios y la indemnización por daño moral. Adicionalmente, los artículos 363 a 383
              regulan el fuero sindical, que protege a los dirigentes sindicales contra represalias y
              exige autorización judicial previa para su despido (art. 367).
            </p>
          </div>
        </div>
      </section>
  </>
),


};

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = PRACTICE_AREA_PAGES.find((a) => a.slug === slug);
  if (!area) notFound();

  const content = AREA_CONTENT[slug];
  if (!content) notFound();

  /* JSON-LD Service schema */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: area.title,
    description: area.description,
    url: `https://www.corporaciongc.com/areas/${area.slug}`,
    provider: {
      "@id": "https://www.corporaciongc.com/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "Costa Rica",
    },
    serviceType: "Legal Service",
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.corporaciongc.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Áreas de Práctica",
        item: "https://www.corporaciongc.com/areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.title,
        item: `https://www.corporaciongc.com/areas/${area.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Navbar />
      <main className="bg-surface min-h-[100dvh]">
        <div className="pt-28 md:pt-36 pb-20 md:pb-32">
          <div className="max-w-[800px] mx-auto px-6 md:px-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-cream/35 mb-8">
              <Link href="/" className="hover:text-gold transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/areas" className="hover:text-gold transition-colors">
                Áreas
              </Link>
              <span>/</span>
              <span className="text-cream/55">{area.title}</span>
            </div>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-cream/35 font-medium">
                {area.priority === "primary" ? "Área Principal" : "Área de Práctica"}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream mb-4">
              {area.title}
            </h1>
            <p className="text-sm text-cream/45 leading-relaxed max-w-[55ch]">
              {area.subtitle}
            </p>

            <div className="h-px bg-cream/[0.06] mt-10 mb-2" />

            {/* Content */}
            {content}

            {/* CTA */}
            <div className="mt-16 p-8 rounded-xl border border-burgundy/15 bg-burgundy/[0.04]">
              <p className="font-display text-lg text-cream mb-2">
                ¿Necesita asistencia en {area.title.toLowerCase()}?
              </p>
              <p className="text-sm text-cream/50 mb-6 max-w-[50ch]">
                Nuestro equipo puede evaluar su caso y orientarle sobre las vías
                procesales disponibles.
              </p>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-b from-burgundy via-[#5A1730] to-[#4A0E27] text-white text-sm tracking-wide font-medium hover:from-burgundy-light hover:via-burgundy hover:to-[#5A1730] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-burgundy/20"
              >
                Contactar a Corporación GC
              </Link>
            </div>

            {/* Bottom nav */}
            <div className="mt-10 pt-8 border-t border-cream/[0.06] flex items-center justify-between">
              <Link
                href="/areas"
                className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-gold transition-colors duration-300"
              >
                <ArrowLeft size={14} weight="regular" />
                Todas las áreas
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
