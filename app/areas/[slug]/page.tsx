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
    title: `${area.title} | Corporación GC`,
    description: area.description,
    alternates: {
      canonical: `${FIRM.url}/areas/${area.slug}`,
    },
    openGraph: {
      title: `${area.title} | Corporación GC`,
      description: area.description,
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
    </>
  ),

  "derecho-constitucional": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          El Derecho Constitucional es la rama del ordenamiento jurídico que regula los derechos
          fundamentales, la organización del Estado y los mecanismos para garantizar la supremacía
          de la Constitución Política. En Costa Rica, la Sala Constitucional de la Corte Suprema
          de Justicia (Sala IV) es el órgano encargado de la jurisdicción constitucional, creada
          por la Ley de la Jurisdicción Constitucional (Ley N.° 7135 del 11 de octubre de 1989).
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Corporación GC asesora y litiga en materia constitucional cuando la defensa de los
          derechos del administrado requiere acudir ante la Sala IV, especialmente en casos que
          involucran actuaciones de la Administración Pública contrarias a derechos fundamentales.
        </p>
      </section>

      <Instrumento titulo="Acción de inconstitucionalidad" fundamento="Ley 7135, arts. 73 a 95">
        <p>
          La acción de inconstitucionalidad es el instrumento mediante el cual se impugnan normas
          de cualquier naturaleza y actos sujetos al derecho público que se consideren contrarios
          a la Constitución Política. Los artículos 73 a 95 de la Ley N.° 7135 regulan su
          procedimiento. A diferencia del recurso de amparo, la acción de inconstitucionalidad
          tiene efectos generales (erga omnes): si la Sala Constitucional declara inconstitucional
          una norma, esta queda eliminada del ordenamiento jurídico.
        </p>
        <p>
          La legitimación para interponer esta acción requiere, como regla general, la existencia
          de un asunto pendiente en sede judicial o administrativa en el que la norma cuestionada
          se aplique o pueda aplicarse. Sin embargo, en ciertos supuestos —como cuando se impugnan
          normas que afectan intereses difusos— la acción puede plantearse sin ese requisito
          previo (art. 75, párrafo segundo, Ley 7135).
        </p>
      </Instrumento>

      <Instrumento titulo="Recurso de amparo" fundamento="Ley 7135, arts. 29 a 56">
        <p>
          El recurso de amparo es el mecanismo de tutela más accesible del ordenamiento
          costarricense. Protege a toda persona contra las amenazas, perturbaciones o
          restricciones a sus derechos fundamentales —salvo la libertad personal, que se tutela
          mediante habeas corpus— provenientes de actos u omisiones de sujetos de derecho
          público o, en ciertos supuestos, de particulares. Los artículos 29 a 56 de la Ley
          N.° 7135 regulan su procedimiento.
        </p>
        <p>
          El recurso de amparo se interpone directamente ante la Sala Constitucional, sin
          necesidad de agotamiento previo de la vía administrativa, no requiere patrocinio
          letrado y puede interponerse incluso por medios informales. La Sala debe resolver
          dentro de los plazos establecidos, otorgando audiencia a la autoridad recurrida.
          La sentencia estimatoria declara la violación del derecho fundamental, ordena el
          restablecimiento de la situación y puede condenar al pago de daños y perjuicios.
        </p>
      </Instrumento>

      <Instrumento titulo="Habeas corpus" fundamento="Ley 7135, arts. 15 a 28">
        <p>
          El habeas corpus protege la libertad personal e integridad física de las personas
          contra detenciones, arrestos o restricciones de libertad ilegales o arbitrarias. Los
          artículos 15 a 28 de la Ley N.° 7135 regulan su procedimiento. Puede interponerse
          por cualquier persona a favor de quien se encuentre ilegalmente privado de su libertad,
          amenazado de serlo, o sometido a restricciones ilegítimas a su libertad de tránsito.
        </p>
        <p>
          En la práctica de un bufete de Derecho Público, el habeas corpus es relevante cuando
          actuaciones de la Administración Pública —por ejemplo, órdenes sanitarias restrictivas,
          restricciones migratorias o detenciones administrativas— afectan la libertad personal
          del administrado sin fundamento legal suficiente.
        </p>
      </Instrumento>
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

      <Instrumento titulo="Tipos de procedimientos de contratación" fundamento="Ley 9986, arts. 38 a 56">
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

      <Instrumento titulo="Silencio administrativo" fundamento="LGAP, art. 330">
        <p>
          El silencio administrativo opera cuando la Administración no resuelve un recurso o
          petición dentro del plazo legalmente establecido. El artículo 330 de la LGAP establece
          que, transcurrido el plazo sin resolución expresa, se entiende que el recurso ha sido
          rechazado (silencio negativo), lo cual habilita al administrado para acudir a la
          siguiente instancia administrativa o, en su caso, a la vía jurisdiccional. El silencio
          administrativo negativo no es una sanción a la Administración sino una garantía para
          el administrado de que la falta de respuesta no le impida continuar con la defensa de
          sus derechos.
        </p>
      </Instrumento>
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
