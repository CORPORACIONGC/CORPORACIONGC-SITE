import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CapacitacionEleinmsa } from "@/components/article/CapacitacionEleinmsa";
import { PRACTICE_AREA_PAGES, FIRM, FIRM_CONTACT, getRelatedAreas } from "@/lib/constants";
import { AREA_COMMERCIAL } from "@/lib/area-commercial";
import { generateAreaMetadata } from "@/lib/page-metadata";
import {
  ArrowLeft,
  ArrowRight,
  Scales,
  Gavel,
  ShieldCheck,
  BookOpen,
  WhatsappLogo,
  Warning,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";

// Slugs inexistentes devuelven un 404 real (no un soft-404 con estado 200),
// evitando que Google los archive como "rastreada, sin indexar".
export const dynamicParams = false;

export function generateStaticParams() {
  return PRACTICE_AREA_PAGES.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const base = await generateAreaMetadata({ params });
  const { slug } = await params;
  return {
    ...base,
    alternates: {
      canonical: `${FIRM.url}/areas/${slug}`,
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
  "expropiaciones": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          La expropiación forzosa es la privación de la propiedad o de derechos patrimoniales
          legítimos por causa de interés público legalmente comprobado, mediante el pago previo
          de una indemnización que represente el precio justo de lo expropiado (artículo 1 de la
          Ley de Expropiaciones, Ley N.° 7495, reformada por las leyes N.° 9286 y N.° 9462). El
          procedimiento combina una fase administrativa —declaratoria de interés público, avalúo
          y oposición— y una fase judicial ante el Juzgado Contencioso-Administrativo y Civil de
          Hacienda.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Como abogados especialistas en expropiaciones en Costa Rica, en Corporación GC
          defendemos al propietario y al titular de derechos en todas las etapas: desde la
          oposición al avalúo administrativo hasta la fijación del justo precio y la indemnización
          en sede judicial. El caso se decide casi siempre en la oposición al avalúo: lo que no se
          controvierte ahí difícilmente se recupera después.
        </p>
      </section>

      <Instrumento titulo="Declaratoria de interés público" fundamento="Ley 7495, arts. 18 y 20">
        <p>
          Para expropiar un bien es indispensable un acto motivado que lo declare de interés
          público, firmado por el ministro del ramo o por el jerarca del ente expropiador, que
          debe notificarse al interesado y publicarse en el diario oficial La Gaceta (art. 18).
          Esa declaratoria se anota provisionalmente en el Registro Nacional; la anotación caduca
          y se cancela de oficio si, dentro del año siguiente, no se presenta el mandamiento de
          anotación definitiva expedido por el Juzgado Contencioso-Administrativo y Civil de
          Hacienda (art. 20).
        </p>
      </Instrumento>

      <Instrumento titulo="Avalúo administrativo y plazo de oposición" fundamento="Ley 7495, arts. 21 y 25">
        <p>
          La Administración debe solicitar a la dependencia especializada —o, en su defecto, a la
          Dirección General de Tributación— el avalúo administrativo, que debe rendirse en un
          plazo máximo de un mes (art. 21). El avalúo se notifica al propietario, quien cuenta con
          cinco días hábiles para manifestar su conformidad o disconformidad con el precio. Si
          guarda silencio, la ley tiene el avalúo por aceptado y queda firme, sin posibilidad de
          oposición posterior en ninguna etapa del proceso (art. 25). Por eso este plazo es la
          decisión más importante de todo el procedimiento.
        </p>
      </Instrumento>

      <Instrumento titulo="Determinación del justo precio" fundamento="Ley 7495, art. 22">
        <p>
          El artículo 22 obliga a que el avalúo indique todos los datos necesarios para valorar el
          bien y describa el método empleado. Tratándose de inmuebles, debe contemplar de forma
          obligatoria: la descripción topográfica del terreno, el estado y uso de las
          construcciones, los derechos de los inquilinos y arrendatarios (inciso d), las licencias
          o derechos comerciales —incluidos costos de producción, impuestos y seguros— (inciso e),
          los permisos y concesiones de explotación (inciso f), el precio de las propiedades
          colindantes (inciso g), los gravámenes (inciso h) y cualesquiera otros elementos o
          derechos susceptibles de valoración e indemnización (inciso i). Esta última cláusula,
          leída junto con la jurisprudencia de la Sala Primera, sustenta el reconocimiento del
          lucro cesante y del daño emergente.
        </p>
      </Instrumento>

      <Instrumento titulo="Proceso especial de expropiación" fundamento="Ley 7495, arts. 27-30">
        <p>
          Ante la disconformidad oportuna del expropiado —u otros supuestos del artículo 27—, la
          Administración dicta el acuerdo de expropiación e inicia el proceso especial ante el
          Juzgado Contencioso-Administrativo y Civil de Hacienda, donde debe depositar el monto del
          avalúo como requisito indispensable y previo a la entrada en posesión del bien (art. 28).
          En ese proceso solo se discute la revisión del avalúo para fijar la indemnización
          definitiva (art. 29). El juez nombra, de una lista rotativa de los colegios
          profesionales, un perito idóneo e independiente que revisa la valoración; a partir de la
          resolución inicial corren los plazos de desalojo: quince días hábiles, o dos meses cuando
          se trata de vivienda familiar (art. 30).
        </p>
      </Instrumento>

      <Instrumento titulo="Indemnización: intereses, indexación y sentencia" fundamento="Ley 7495, arts. 11, 23 y 39">
        <p>
          La Administración debe reconocer intereses de oficio, a la tasa legal vigente, desde la
          desposesión del bien hasta el pago efectivo; cuando existe un depósito del avalúo, se
          calculan sobre la diferencia con el justiprecio (art. 11). Si el propietario aceptó el
          avalúo y transcurren más de seis meses sin pago, puede pedir que el valor se actualice
          conforme a los índices de inflación del Banco Central de Costa Rica (art. 23). Tras el
          reconocimiento judicial del inmueble y la valoración de la prueba según la sana crítica,
          el juez dicta la resolución final dentro de los quince días hábiles siguientes; el monto
          de la indemnización no puede exceder la suma mayor estimada en los avalúos (art. 39).
        </p>
      </Instrumento>

      <Instrumento titulo="Expropiación parcial y derecho de restitución" fundamento="Ley 7495, arts. 17 y 16">
        <p>
          Cuando la expropiación es parcial y la parte que no se expropia resulta inadecuada para
          su uso o explotación racional, el expropiado puede exigir la expropiación de la totalidad
          del inmueble; en terrenos urbanos se consideran sobrantes inadecuados los que queden con
          frente, fondo o superficie inferiores a lo autorizado para edificar (art. 17).
        </p>
        <p>
          Además, transcurridos diez años desde la inscripción del inmueble a nombre del Estado, el
          expropiado o sus causahabientes pueden solicitar la restitución de las propiedades o
          partes sobrantes no utilizadas para el fin declarado, cubriendo su valor actual y dentro
          de los tres años siguientes (art. 16).
        </p>
      </Instrumento>

      <Instrumento titulo="Recurso de apelación" fundamento="Ley 7495, art. 41">
        <p>
          La parte disconforme con la resolución final puede apelar ante el Tribunal de Casación de
          lo Contencioso-Administrativo y Civil de Hacienda dentro de los cinco días hábiles
          siguientes a la notificación; presentada la apelación y vencido el plazo, el juzgado
          eleva los autos de inmediato (art. 41).
        </p>
      </Instrumento>
    </>
  ),

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
          El litigio contencioso-administrativo se gana o se pierde en la combinación correcta de
          pretensiones, medidas cautelares y plazos. La elección estratégica de cada herramienta
          procesal define la verdadera capacidad de impugnar la conducta administrativa.
        </p>
      </section>

      <Instrumento titulo="Demanda contencioso-administrativa" fundamento="CPCA, arts. 10 a 16">
        <p>
          La demanda contencioso-administrativa es el acto procesal mediante el cual una persona
          física o jurídica —o incluso una entidad pública— acude ante el Tribunal Contencioso
          Administrativo para impugnar una conducta administrativa que le causa un perjuicio. El
          artículo 42 del CPCA establece las pretensiones que pueden formularse: declaración de
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
          los artículos 134 a 152 del CPCA y constituye la última instancia jurisdiccional en la
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

      <Instrumento titulo="Motivos de casación por razones procesales" fundamento="CPCA, art. 137">
        <p>
          El artículo 137 del CPCA enumera los vicios procesales que justifican la casación: la
          falta de emplazamiento o su notificación defectuosa, la indefensión de la parte no
          imputable a ella, la falta de determinación clara y precisa de los hechos acreditados,
          la falta de motivación de la sentencia, la incompetencia alegada oportunamente, el
          dictado de la sentencia por un número de jueces menor al exigido o por un juez ausente
          en el juicio oral, y la inobservancia de las reglas de deliberación y de redacción del
          fallo.
        </p>
        <p>
          También proceden por esta vía la violación de normas cuya inobservancia se sanciona con
          nulidad absoluta y la contradicción con la cosa juzgada. Estos motivos solo puede
          alegarlos la parte perjudicada por el vicio, y exigen haber gestionado antes su
          rectificación cuando ello era posible (art. 137, párrafo 2).
        </p>
      </Instrumento>

      <Instrumento titulo="Motivos de casación por razones de fondo" fundamento="CPCA, art. 138">
        <p>
          El artículo 138 del CPCA permite la casación por violación de normas sustantivas del
          ordenamiento jurídico en cuatro supuestos: cuando se atribuye a la prueba una indebida
          valoración o se le pretiere; cuando se tienen por demostrados o indemostrados hechos en
          contradicción con la prueba que consta en el proceso; cuando se aplica o interpreta
          indebidamente una norma jurídica, o se deja de aplicar la que correspondía; y cuando la
          sentencia viola las normas o los principios del Derecho constitucional, entre otros la
          razonabilidad, la proporcionalidad, la seguridad jurídica y la igualdad.
        </p>
        <p>
          Identificar con precisión el supuesto del artículo 138 es decisivo para la técnica
          casacional, pues delimita el alcance del pronunciamiento que hará la Sala Primera o el
          Tribunal de Casación sobre el fondo del asunto.
        </p>
      </Instrumento>

      <Instrumento titulo="Plazo, interposición y competencia" fundamento="CPCA, arts. 139, 135 y 136">
        <p>
          El recurso debe interponerse dentro de los quince días hábiles siguientes al día hábil
          posterior a la notificación de la resolución a todas las partes (art. 139, párrafo 1).
          Se presenta directamente ante la Sala Primera de la Corte Suprema de Justicia o ante el
          Tribunal de Casación de lo Contencioso-Administrativo, según el órgano del que emane la
          conducta impugnada: la Sala Primera conoce los recursos contra el Poder Ejecutivo, los
          ministerios, las instituciones descentralizadas, los reglamentos y la materia tributaria
          (art. 135); el Tribunal de Casación, los de colegios profesionales, entes públicos no
          estatales y las sanciones disciplinarias, multas y condenas en sede administrativa
          (art. 136).
        </p>
        <p>
          El recurso se rechaza de plano si la resolución no es casable, si se presenta fuera de
          plazo o si carece de fundamentación (art. 140). Si adolece de defectos formales
          subsanables, se previene su corrección dentro de tercero día (art. 141).
        </p>
      </Instrumento>

    </>
  ),

  "asesoria-regulatoria": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          Municipalidades, colegios profesionales, instituciones autónomas y ministerios nos
          consultan constantemente para que les ayudemos a redactar reglamentos, reformar
          cuerpos normativos completos y emitir dictámenes sobre la conformidad jurídica de un
          proyecto antes de aprobarlo. El marco habilitante combina la potestad reglamentaria
          del Poder Ejecutivo (art. 140 incisos 3 y 18 de la Constitución), la autonomía
          municipal (arts. 169 y 170 de la Constitución), la autonomía institucional de los
          entes descentralizados (art. 188 de la Constitución) y la jerarquía de fuentes del
          artículo 6 de la LGAP, que ubica a los reglamentos por debajo de la Constitución, los
          tratados y la ley, y reconoce expresamente los reglamentos autónomos del Poder
          Ejecutivo y de los entes descentralizados.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          En Corporación GC redactamos el reglamento de principio a fin, acompañamos el
          proceso de aprobación —consulta pública, audiencia a entidades, publicación— y, si
          después es impugnado, lo defendemos. Conocer qué hace caer un reglamento ante la
          jurisdicción contencioso-administrativa y ante la Sala Constitucional es lo que nos
          permite diseñarlo para resistir ese escrutinio desde la primera versión.
        </p>
      </section>

      <Instrumento titulo="Tipos de actos normativos: decretos, reglamentos, acuerdos y resoluciones" fundamento="LGAP, arts. 6 y 121">
        <p>
          El artículo 121 de la LGAP distingue con precisión las categorías. Los actos de la
          Administración se llaman decretos cuando son de alcance general y acuerdos cuando son
          concretos; los decretos de alcance normativo se llaman también reglamentos o decretos
          reglamentarios; y los acuerdos que deciden un recurso o reclamo administrativo se
          llaman resoluciones. Esa precisión técnica es decisiva en la redacción: la elección
          equivocada del nombre y del vehículo jurídico puede arrastrar consecuencias formales y
          de publicidad que terminen en nulidad.
        </p>
        <p>
          La jerarquía del artículo 6 de la LGAP fija el orden: Constitución, tratados, leyes y
          actos con valor de ley, decretos del Poder Ejecutivo que reglamentan las leyes,
          demás reglamentos del Poder Ejecutivo y reglamentos de los entes descentralizados, y
          finalmente las demás normas subordinadas. Los reglamentos autónomos del Poder
          Ejecutivo y de los entes descentralizados están subordinados entre sí dentro de sus
          respectivos campos de vigencia, y en lo no dispuesto expresamente quedan sujetos a las
          reglas y principios que regulan los actos administrativos.
        </p>
      </Instrumento>

      <Instrumento titulo="Reglamentos autónomos: hasta dónde se puede regular sin habilitación legal" fundamento="LGAP, arts. 6.2, 19.2, 59.2 y 124">
        <p>
          El reglamento autónomo es la herramienta de los entes y órganos con autonomía
          institucional o territorial para regular su organización interna y la prestación de
          los servicios a su cargo sin necesidad de una ley específica que lo habilite. La LGAP
          fija expresamente sus dos límites técnicos. Primero, el artículo 19 reserva a la ley
          el régimen jurídico de los derechos constitucionales y prohíbe los reglamentos
          autónomos en esa materia. Segundo, el artículo 124 prohíbe que los reglamentos, las
          circulares, las instrucciones y demás disposiciones administrativas de carácter
          general establezcan penas o impongan exacciones, tasas, multas u otras cargas
          similares: lo tributario y lo sancionador exigen ley formal.
        </p>
        <p>
          El artículo 59 acota el ámbito propio del reglamento autónomo: la distribución interna
          de competencias y la creación de servicios sin potestades de imperio. Toda regulación
          que pretenda atribuir potestades de imperio frente al particular —fiscalizar, ordenar,
          sancionar, gravar— exige cobertura legal. Saber dibujar esa frontera entre lo que se
          puede y lo que no se puede regular por reglamento autónomo es la diferencia entre una
          norma que se sostiene y otra que cae al primer recurso.
        </p>
      </Instrumento>

      <Instrumento titulo="Reglamentos municipales: autonomía cantonal y rango del reglamento autónomo" fundamento="Constitución, arts. 169 y 170; Código Municipal, Ley 7794">
        <p>
          La autonomía municipal del artículo 170 de la Constitución es una de las más fuertes
          del derecho costarricense: las municipalidades son autónomas en lo político, en lo
          administrativo y en lo financiero. Sobre esa base, los reglamentos municipales son
          reglamentos autónomos del ente descentralizado territorial, con cobertura constitucional
          propia. Lo que se reglamenta es el gobierno de los intereses y servicios locales del
          cantón (art. 169 de la Constitución y art. 4 del Código Municipal), no el ejercicio de
          la potestad reglamentaria ejecutiva del Poder Ejecutivo.
        </p>
        <p>
          La redacción rigurosa de un reglamento municipal exige resolver tres preguntas
          recurrentes que hemos visto fallar en la práctica: cuáles son las competencias propias
          del Concejo y cuáles las del alcalde, qué materias requieren ley formal y, por tanto,
          no caben en el reglamento autónomo (sanciones, tributos, restricciones a derechos
          constitucionales), y cómo se articula el reglamento con los planes reguladores
          urbanísticos vigentes. Trabajar mal cualquiera de las tres convierte el reglamento en
          objetivo fácil de la jurisdicción contencioso-administrativa.
        </p>
      </Instrumento>

      <Instrumento titulo="Procedimiento de elaboración: audiencias, plazo de diez días e información pública" fundamento="LGAP, arts. 361, 362 y 363">
        <p>
          El Título IX de la LGAP regula el procedimiento especial para la elaboración de
          disposiciones de carácter general. El artículo 361 ordena tres pasos. Primero, dar
          audiencia a las entidades descentralizadas sobre los proyectos de disposiciones
          generales que puedan afectarlas. Segundo, conceder a las entidades representativas de
          intereses de carácter general o corporativo afectados por la disposición la oportunidad
          de exponer su parecer, dentro del plazo de diez días, salvo cuando se opongan a ello
          razones de interés público o de urgencia debidamente consignadas en el anteproyecto.
          Tercero, cuando la naturaleza de la disposición lo aconseje, someter el anteproyecto a
          información pública por el plazo que en cada caso se señale.
        </p>
        <p>
          El artículo 362 obliga a consignar expresamente, en la disposición general, las normas
          anteriores que quedan total o parcialmente reformadas o derogadas: una exigencia
          formal que con frecuencia se omite y que abre flanco para impugnaciones por
          desorganización del ordenamiento. El artículo 363 establece que los proyectos que
          deban someterse a la aprobación del Consejo de Gobierno se remiten con ocho días de
          antelación a los demás Ministros para que formulen observaciones, salvo casos de
          urgencia apreciada por el propio Consejo. La omisión de cualquiera de estos trámites,
          cuando es obligatorio, constituye un vicio de procedimiento susceptible de acarrear la
          nulidad de la disposición.
        </p>
      </Instrumento>

      <Instrumento titulo="Reglamentos de colegios profesionales y de entes públicos no estatales" fundamento="Jurisprudencia constitucional sobre colegios profesionales; LGAP supletoria">
        <p>
          Los colegios profesionales son entes públicos no estatales reconocidos por la
          jurisprudencia constitucional con potestad reglamentaria sobre el ejercicio de la
          profesión, el régimen disciplinario interno, los procedimientos electorales del
          colegio, los aranceles de servicios y la gobernanza de juntas directivas. Cada colegio
          actúa al amparo de su propia ley orgánica, pero el procedimiento general de
          elaboración de sus disposiciones se rige supletoriamente por la LGAP cuando la ley
          orgánica no contempla un procedimiento especial: audiencia a sectores interesados,
          consulta y publicación.
        </p>
        <p>
          Asesoramos a colegios profesionales en la redacción de códigos de ética, reglamentos
          de procedimiento disciplinario, reglamentos electorales y reglamentos arancelarios,
          con atención a tres puntos críticos: la reserva de ley para sanciones (art. 124 de la
          LGAP), las garantías de debido proceso en el procedimiento disciplinario interno
          (arts. 39 y 41 de la Constitución), y la articulación con la jurisdicción
          contencioso-administrativa, que es la que conoce de la impugnación de los actos del
          colegio.
        </p>
      </Instrumento>

      <Instrumento titulo="Control posterior del reglamento: impugnación directa, acción de inconstitucionalidad y nulidad por vicios" fundamento="CPCA, art. 10.2; Ley 7135, arts. 73 a 95; LGAP, arts. 158 y 166">
        <p>
          Una vez publicado, el reglamento queda expuesto a tres frentes. El primero, la
          impugnación directa ante la jurisdicción contencioso-administrativa: el artículo 10.2
          del CPCA legitima a impugnar las disposiciones de carácter general que deban ser
          cumplidas directamente por los administrados sin necesidad de un previo acto de
          requerimiento o sujeción individual. El segundo, la acción de inconstitucionalidad
          (arts. 73 a 95 de la Ley 7135) cuando el reglamento, decreto o disposición de alcance
          general vulnera normas o principios constitucionales. El tercero, la impugnación
          incidental, en el marco de un caso concreto, alegando los vicios de invalidez de los
          artículos 158 y 166 de la LGAP.
        </p>
        <p>
          Defendemos al ente emisor en cualquiera de los tres frentes: contestación de demandas
          contencioso-administrativas contra el reglamento, informe ante la Sala Constitucional
          en la acción de inconstitucionalidad y oposición a la pretensión de inaplicación en
          casos concretos. La estrategia parte de un análisis de vicios riguroso —competencia,
          forma, contenido, motivo, fin, procedimiento— y de la jurisprudencia sobre el alcance
          de la potestad reglamentaria del órgano que lo dictó.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre asesoría regulatoria y redacción de reglamentos
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Puede una municipalidad o un colegio profesional contratar a un despacho privado para que le redacte un reglamento?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Sí. La redacción de un reglamento es una asistencia técnica especializada que se
              contrata bajo el régimen de la Ley General de Contratación Pública (Ley N.° 9986).
              El acto formal de aprobación —el acuerdo del Concejo Municipal en el caso del
              reglamento municipal, el acuerdo de Junta Directiva en el caso del colegio
              profesional o el decreto ejecutivo del Poder Ejecutivo— sigue siendo competencia
              exclusiva del órgano competente; lo que se contrata es el trabajo profesional de
              diseño, redacción y acompañamiento del procedimiento. El producto final es del
              ente contratante.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cuánto tiempo dura el trámite de consulta pública obligatoria de un proyecto de reglamento?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El artículo 361 de la LGAP establece el procedimiento general. Se concede audiencia
              a las entidades descentralizadas afectadas y, separadamente, a las entidades
              representativas de intereses de carácter general o corporativo afectados, las
              cuales pueden exponer su parecer dentro del plazo de diez días, salvo cuando se
              opongan a ello razones de interés público o de urgencia debidamente consignadas en
              el anteproyecto. Si la naturaleza de la disposición lo aconseja, el anteproyecto
              se somete adicionalmente a información pública por el plazo que en cada caso se
              señale. La omisión del trámite cuando es obligatorio es un vicio de procedimiento
              que puede acarrear la nulidad de la disposición.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué materias NO puede regular un reglamento autónomo —ni municipal ni de un colegio profesional?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Dos límites técnicos derivados de la LGAP cierran la puerta. Primero, el artículo
              19 reserva a la ley el régimen jurídico de los derechos constitucionales y prohíbe
              expresamente los reglamentos autónomos en esa materia. Segundo, el artículo 124
              prohíbe que los reglamentos, las circulares, las instrucciones y demás
              disposiciones administrativas de carácter general establezcan penas o impongan
              exacciones, tasas, multas u otras cargas similares. Resultado práctico: sanciones,
              tributos y restricciones a derechos fundamentales requieren ley formal y no caben
              en un reglamento autónomo. El artículo 59 confirma que la atribución de potestades
              de imperio queda fuera de su alcance.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo se redacta un reglamento que resista una impugnación judicial?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Hay cuatro frentes técnicos que decidir bien en la fase de diseño. El primero,
              competencia: identificar con precisión el órgano que legalmente puede dictar la
              norma y la fuente de su potestad (ejecutiva, autónoma, municipal o de colegio
              profesional). El segundo, contenido: respetar la jerarquía del artículo 6 de la
              LGAP y los límites del artículo 124, sin invadir reserva de ley ni regular en
              contra de la ley superior. El tercero, motivación: explicar en el considerando
              por qué la norma es necesaria, proporcionada y razonable. El cuarto,
              procedimiento: cumplir las audiencias y la consulta del artículo 361 y la
              identificación expresa de las normas reformadas o derogadas (art. 362). Cuando
              esos cuatro frentes están bien trabajados, la impugnación directa en el contencioso
              (CPCA art. 10.2) y la acción de inconstitucionalidad (Ley 7135, arts. 73 a 95)
              quedan sin asideros.
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
          Municipalidades, instituciones autónomas, empresas públicas, ministerios y colegios
          profesionales nos consultan permanentemente para que les emitamos dictámenes jurídicos
          externos sobre la legalidad de actos, contratos, reglamentos y procedimientos de alto
          impacto. La Administración costarricense actúa bajo el principio de legalidad (art. 11
          de la Constitución y art. 11 de la LGAP) y cada decisión debe poder defenderse ante
          la Contraloría, los tribunales contencioso-administrativos y la Sala Constitucional.
          El dictamen externo se ha convertido en una herramienta estándar de gobernanza
          institucional para reducir el riesgo de nulidad, las contingencias patrimoniales y
          la responsabilidad personal de los jerarcas.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Como abogados en dictámenes jurídicos en Costa Rica, en Corporación GC complementamos a
          la asesoría legal interna del ente y a la consulta vinculante de la Procuraduría
          General de la República con un análisis externo, rápido y especializado. Lo que nos
          distingue es la doble lectura: redactamos cada dictamen sabiendo cómo lo van a leer
          después la Contraloría, el TCA y la Sala IV; ese ángulo de defensa anticipada es lo
          que vuelve útil un dictamen, no solo correcto.
        </p>
      </section>

      <Instrumento titulo="Dictámenes sobre legalidad de actos administrativos" fundamento="LGAP, arts. 11, 128 a 136 y 158 a 189">
        <p>
          El acto administrativo es válido solo si su contenido se conforma sustancialmente con
          el ordenamiento jurídico (art. 128). La LGAP detalla cada elemento: el órgano
          competente actuando por servidor regular y previo cumplimiento de los trámites
          sustanciales (art. 129); voluntad libre y consciente, no afectada por vicios de error,
          dolo o violencia (art. 130); fin público sin desviación de poder (art. 131); contenido
          lícito, posible, claro y preciso (art. 132); motivo cierto, con fundamento en los
          hechos y el derecho aplicable (art. 133); forma escrita u oral según corresponda, con
          motivación, fecha y firma del titular (arts. 134 y 135); y comunicación por
          publicación o notificación válida (art. 136).
        </p>
        <p>
          Los vicios en cualquiera de esos elementos generan nulidad absoluta cuando falta
          totalmente un elemento (art. 166) o nulidad relativa cuando hay imperfección
          subsanable (art. 167); todo el régimen está en los arts. 158 a 189. El dictamen previo
          de legalidad revisa la cadena completa y advierte el riesgo antes de que el acto se
          dicte; el dictamen de revisión, una vez dictado el acto, evalúa si procede la
          declaratoria de lesividad —previa a la demanda de anulación en sede contenciosa— o si
          se trata de un caso de nulidad evidente y manifiesta del artículo 173, donde la
          Administración puede anular en sede administrativa con dictamen favorable y previo
          de la Procuraduría General de la República o de la Contraloría.
        </p>
      </Instrumento>

      <Instrumento titulo="Dictámenes sobre contratación administrativa: cartel, adjudicación, refrendo y modificaciones" fundamento="Constitución, art. 182; Ley 9986; LOCGR (Ley 7428), arts. 20 y 21">
        <p>
          La contratación pública es la zona de mayor exposición jurídica del sector público.
          Tres puntos del ciclo concentran el riesgo y por lo tanto la demanda de dictamen
          externo: la elaboración del cartel —donde un requisito mal redactado activa el recurso
          de objeción y puede arrastrar el procedimiento entero—, la motivación del acto de
          adjudicación —cuya insuficiencia genera el recurso de apelación ante la Contraloría—,
          y el refrendo del contrato y de sus modificaciones por la propia Contraloría conforme
          al artículo 20 de su Ley Orgánica y al procedimiento del artículo 21.
        </p>
        <p>
          Nuestros dictámenes anticipan los argumentos de los oferentes y de la Contraloría:
          legalidad del cartel y del sistema de evaluación, ajuste del procedimiento al tipo de
          contratación, motivación del acto de adjudicación frente a las objeciones de las
          ofertas no adjudicatarias, viabilidad de modificaciones contractuales dentro de los
          topes y supuestos de la Ley 9986, riesgos del cierre del contrato y de la liquidación
          final.
        </p>
      </Instrumento>

      <Instrumento titulo="Dictámenes en procedimientos administrativos: vicios procesales y régimen disciplinario" fundamento="LGAP, arts. 214 a 229 y 308 a 319; arts. 211 a 213; CPCA, art. 31">
        <p>
          El procedimiento administrativo ordinario (arts. 308 a 319) se activa toda vez que se
          afecten derechos del administrado: sanciones disciplinarias, despidos en empleo
          público, revocatorias de permisos, declaratorias de incumplimiento, cobros relevantes.
          Cada etapa tiene exigencias propias y plazos cortos: el traslado de cargos, la
          comparecencia oral del artículo 309, la prueba, los alegatos finales, el plazo de
          quince días para el acto final del artículo 319. La omisión de formalidades
          sustanciales causa nulidad del procedimiento por aplicación del artículo 223. Los
          principios generales del Título I del libro segundo (arts. 214 a 229) ordenan toda
          la actuación.
        </p>
        <p>
          El régimen disciplinario tiene reglas propias: la responsabilidad disciplinaria del
          servidor existe independientemente de las responsabilidades civiles y penales (arts.
          211, 212 y 213). En estos casos, el dictamen previo identifica los riesgos de
          notificación defectuosa, prueba mal incorporada, falta de comparecencia oral cuando
          es exigible, motivación insuficiente del acto sancionador o sanción desproporcionada,
          puntos que después atacarán los recursos administrativos y la demanda contenciosa
          (CPCA art. 31: agotamiento facultativo de la vía administrativa).
        </p>
      </Instrumento>

      <Instrumento titulo="Dictámenes en materia presupuestaria y de Hacienda Pública: criterios vinculantes de la CGR" fundamento="LOCGR (Ley 7428), arts. 12, 18, 27 y 34; Ley 8131">
        <p>
          La Contraloría es órgano constitucional fundamental, rector del sistema de
          fiscalización y control de la Hacienda Pública (art. 1 de la Ley 7428). Sus criterios
          y disposiciones son de acatamiento obligatorio para los sujetos pasivos y prevalecen
          sobre cualquier disposición en contrario (art. 12). Esta vinculatoriedad reorganiza
          toda la consultoría pública: ningún dictamen jurídico útil puede ignorar el filtro de
          la Contraloría.
        </p>
        <p>
          Atendemos consultas sobre aprobación e improbación presupuestaria (art. 18),
          dictámenes sobre proyectos de presupuesto y contratos sujetos a refrendo (art. 27),
          impugnabilidad de los actos finales de la Contraloría —que se discuten directamente
          en sede contencioso-administrativa por la vía del artículo 34, sin recursos
          administrativos previos—, y la articulación con la Ley de Administración Financiera
          (Ley 8131) en lo relativo al gasto público, ejecución y liquidación presupuestaria.
        </p>
      </Instrumento>

      <Instrumento titulo="Dictámenes sobre potestad reglamentaria y conformidad jurídica de la normativa propia" fundamento="Constitución, arts. 140 y 169-170; LGAP, arts. 6, 121, 124 y 361 a 363">
        <p>
          Las municipalidades, instituciones autónomas, colegios profesionales y ministerios
          dictan reglamentos con frecuencia, y antes de aprobarlos suele convenirles un dictamen
          externo que evalúe la conformidad del proyecto con la jerarquía normativa, los
          límites de la potestad reglamentaria del órgano que va a emitirlo, el cumplimiento
          del procedimiento de elaboración del Título IX de la LGAP (audiencias del artículo
          361, consulta de diez días a entidades representativas de intereses afectados,
          consignación expresa de normas derogadas conforme al artículo 362) y la ausencia de
          invasión de reserva de ley.
        </p>
        <p>
          El artículo 124 de la LGAP es el límite estructural: reglamentos, circulares,
          instrucciones y demás disposiciones administrativas de carácter general no pueden
          establecer penas ni imponer exacciones, tasas, multas u otras cargas similares. Un
          dictamen oportuno permite reescribir el proyecto antes de la votación y evita la
          impugnación directa por la vía del artículo 10.2 del CPCA y la acción de
          inconstitucionalidad de la Ley 7135.
        </p>
      </Instrumento>

      <Instrumento titulo="Dictámenes de riesgo patrimonial y responsabilidad personal del jerarca" fundamento="LGAP, arts. 190 a 198 (Administración) y 199 a 213 (servidor); LOCGR, arts. 71 y 72">
        <p>
          La Administración responde por su funcionamiento legítimo o ilegítimo, normal o
          anormal (art. 190 de la LGAP); también lo hace por conducta ilícita (art. 191), por
          funcionamiento anormal en régimen objetivo (art. 192) y por sacrificio especial
          derivado de conducta lícita (art. 194), aunque este último excluye el lucro cesante.
          La responsabilidad del servidor es personal cuando media dolo o culpa grave (art.
          199), y la Administración puede repetir contra el servidor en los términos de los
          artículos 203 a 209.
        </p>
        <p>
          A los jerarcas y demás funcionarios sometidos al régimen de Hacienda Pública les
          aplica además el régimen sancionador de la Ley Orgánica de la CGR (responsabilidad
          administrativa de los arts. 68 y siguientes; prescripción del art. 71). El dictamen
          de riesgo dimensiona la exposición patrimonial de la institución, identifica los
          escenarios en que la responsabilidad puede recaer en lo personal y propone los pasos
          de mitigación: motivación reforzada, dictámenes previos, expedientes técnicos, votos
          razonados.
        </p>
      </Instrumento>

      {/* ── Preguntas Frecuentes ── */}
      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre dictámenes jurídicos para el sector público
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cuándo conviene encargar un dictamen externo si la institución ya tiene asesoría jurídica interna?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El dictamen externo no sustituye a la asesoría jurídica interna; la complementa
              cuando la decisión es de alto impacto, cuando hay riesgo de responsabilidad personal
              del jerarca, cuando un órgano de control —Contraloría, Defensoría, Asamblea
              Legislativa— está observando el expediente, cuando hay un litigio en marcha o
              previsible, o cuando la propia asesoría interna emite un criterio que la junta o
              concejo quiere contrastar con una opinión externa. Una segunda opinión
              especializada en derecho público aporta dos cosas: una lectura desde fuera del
              marco institucional, libre de inercias, y un análisis de cómo se va a ver la
              decisión cuando llegue al contencioso o a la Sala IV.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué diferencia hay entre nuestro dictamen externo y un dictamen vinculante de la Procuraduría General de la República?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La Procuraduría General es el órgano superior consultivo técnico-jurídico de la
              Administración Pública y sus dictámenes son de acatamiento obligatorio para la
              Administración consultante, conforme a su Ley Orgánica. Es la primera opción para
              consultas sobre interpretación general del ordenamiento. Sin embargo, sus plazos
              de respuesta no siempre coinciden con la urgencia operativa, y solo el jerarca
              está legitimado para consultarla. El dictamen externo privado es no vinculante,
              ágil, dirigido al caso concreto y puede ser solicitado por cualquier órgano del
              ente: una junta directiva, un concejo municipal, un comité técnico, una auditoría
              interna. Es, en la práctica, el insumo que prepara la decisión, mientras la
              consulta a la Procuraduría es la consulta que la blinda institucionalmente cuando
              el asunto lo amerita.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿El dictamen externo sirve como respaldo si después la Contraloría o un juez cuestionan la decisión?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Sí, y este es uno de los usos centrales del dictamen externo. Aunque no es
              vinculante, el dictamen incorporado al expediente administrativo refuerza la
              motivación del acto y ayuda a romper la imputación de culpa grave del artículo
              199 de la LGAP, que es presupuesto para el repetir contra el servidor. Cuando un
              jerarca actúa con base en un dictamen jurídico fundado y de buena fe, el régimen
              de responsabilidad personal se mueve hacia atrás: queda la responsabilidad de la
              Administración —que se asegura con el patrimonio público— y se aleja la
              responsabilidad patrimonial directa del funcionario. En sede contencioso-administrativa,
              el dictamen integra el expediente y opera como prueba documental del análisis
              técnico que respalda la decisión impugnada.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Pueden las municipalidades, las instituciones autónomas y los entes descentralizados contratar dictámenes externos?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Sí. La contratación de asesoría profesional especializada es un servicio que se
              adquiere bajo el régimen de la Ley General de Contratación Pública (Ley N.° 9986),
              en alguna de sus modalidades según el monto y el objeto. Cuando se trata de un
              servicio especializado, la institución puede acudir a la modalidad correspondiente
              dentro de los procedimientos previstos en esa Ley y reglamentariamente. Los
              dictámenes que emitimos no implican delegación de la potestad pública: la decisión
              sigue siendo del órgano competente del ente, y el dictamen es un insumo técnico que
              integra el expediente administrativo. Trabajamos rutinariamente bajo esta figura
              con municipalidades, instituciones autónomas, empresas públicas, colegios
              profesionales y ministerios.
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
          Como abogados especializados en contratación pública en Costa Rica, en Corporación GC
          asesoramos a entidades públicas y empresas privadas en todas las fases del ciclo de
          contratación: desde la formulación de ofertas y la participación en procedimientos de
          licitación hasta la impugnación de adjudicaciones y la defensa en procedimientos de
          resolución contractual.
        </p>
      </section>

      <Instrumento titulo="Recurso de objeción al pliego de condiciones" fundamento="Ley 9986, arts. 95-96">
        <p>
          El recurso de objeción permite impugnar el pliego de condiciones (cartel) de una
          licitación antes de la apertura de ofertas. Conforme al artículo 95 de la Ley N.° 9986,
          puede objetar todo potencial oferente o cualquier organización legalmente constituida
          para velar por los intereses de la comunidad donde se ejecutará la contratación. El
          órgano competente y el plazo dependen del tipo de procedimiento: en la licitación mayor
          conoce la Contraloría General de la República y el recurso debe interponerse dentro de
          los ocho días hábiles siguientes a la publicación del pliego; en la licitación menor
          conoce la propia Administración y el plazo es de tres días hábiles.
        </p>
        <p>
          De acuerdo con el artículo 96, la interposición oportuna del recurso suspende
          automáticamente la etapa de recepción de ofertas y el acto de apertura. La resolución
          que se pronuncia por el fondo da por agotada la vía administrativa y debe ser acatada
          por la Administración en todos sus extremos; cuando ordena modificar el pliego, las
          enmiendas deben comunicarse por los mismos medios de la invitación original.
        </p>
      </Instrumento>

      <Instrumento titulo="Recurso de apelación contra la adjudicación" fundamento="Ley 9986, arts. 97-98">
        <p>
          El recurso de apelación procede contra el acto de adjudicación —y contra el que declara
          desierta o infructuosa— de una licitación mayor. Conforme al artículo 97 de la Ley
          N.° 9986, quien haya participado en el procedimiento puede interponerlo ante la
          Contraloría General de la República dentro de los ocho días hábiles siguientes a la
          comunicación del acto final. La Contraloría lo tramita en una etapa de admisibilidad y
          una de fondo, con audiencias a la Administración, al adjudicatario y a los participantes
          con mejor posición en el sistema de evaluación sobre los que se formulen alegatos.
        </p>
        <p>
          Según el artículo 98, la interposición del recurso suspende automáticamente todos los
          efectos del acto final recurrido. La resolución que lo declara sin lugar confirma el
          acto y agota la vía administrativa; la que lo declara con lugar anula el acto en el
          tanto correspondiente y también agota la vía administrativa.
        </p>
      </Instrumento>

      <Instrumento titulo="Recurso de revocatoria contra el acto final" fundamento="Ley 9986, art. 99">
        <p>
          El recurso de revocatoria procede contra el acto final de la licitación menor y, de
          igual manera, contra el de la subasta inversa electrónica y el de las nuevas
          adjudicaciones en suministros, servicios y obra. Conforme al artículo 99 de la Ley
          N.° 9986, debe interponerse dentro de los cinco días hábiles siguientes a la
          comunicación del acto final y lo conoce el órgano que lo emitió; cuando ese órgano no
          es el jerarca de la Administración, el recurrente puede solicitar que su gestión sea
          resuelta por el jerarca. En todos los casos hay una única instancia y al recurso le
          resultan aplicables, en lo pertinente, las reglas del recurso de apelación.
        </p>
      </Instrumento>

      <Instrumento titulo="Tipos de procedimientos de contratación" fundamento="Ley 9986, arts. 36, 55-65">
        <p>
          La Ley N.° 9986 sustituyó la nomenclatura de la anterior Ley de Contratación
          Administrativa. Los procedimientos ordinarios son ahora la licitación mayor (arts.
          55-59), la licitación menor (arts. 60-61) y la licitación reducida (arts. 62-63); el
          procedimiento aplicable se determina según el umbral del artículo 36, que depende del
          monto estimado y del objeto —bienes, servicios u obra— y que la Contraloría General de
          la República actualiza cada año. A mayor cuantía, mayor es el grado de control y
          publicidad exigido al procedimiento.
        </p>
        <p>
          Junto a los ordinarios, la ley regula procedimientos extraordinarios —el remate (art.
          64) y la subasta inversa electrónica (art. 65)— y procedimientos especiales (arts.
          66-70), como la contratación de urgencia y la de bienes inmuebles. Cada procedimiento
          tiene reglas propias de plazos, publicidad, recepción de ofertas y régimen recursivo.
        </p>
      </Instrumento>

      <CapacitacionEleinmsa />
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
          Como abogados en derecho administrativo en Costa Rica, en Corporación GC representamos a
          personas físicas, empresas y entes públicos en procedimientos administrativos ante la
          Administración centralizada y descentralizada, y en la preparación de la vía
          administrativa como antesala del proceso contencioso.
        </p>
      </section>

      <Instrumento titulo="Recurso de revocatoria" fundamento="LGAP, arts. 342-352">
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

      <Instrumento titulo="Recurso de apelación en subsidio" fundamento="LGAP, arts. 343, 347 y 349">
        <p>
          El recurso de apelación es un recurso ordinario (art. 343) que puede interponerse de
          forma conjunta con la revocatoria y en subsidio —para el caso de que la revocatoria sea
          rechazada—; es potestativo del administrado usar uno solo o ambos recursos (art. 347).
          Se interpone ante el órgano director del procedimiento, que emplaza a las partes y eleva
          el expediente al superior jerárquico para que resuelva la alzada (art. 349).
        </p>
        <p>
          La interposición conjunta de revocatoria con apelación en subsidio es la fórmula estándar
          para agotar la vía administrativa cuando el administrado opta por ella; conviene precisar
          que ese agotamiento es facultativo (art. 31 del CPCA), de modo que también puede acudirse
          directamente a la jurisdicción contencioso-administrativa.
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
          El artículo 31 del Código Procesal Contencioso-Administrativo establece que el agotamiento
          de la vía administrativa es facultativo, salvo en los supuestos de los artículos 173 y 182
          de la Constitución Política (materia municipal y contratación administrativa). Esto
          significa que el administrado puede optar por interponer los recursos administrativos
          —revocatoria y apelación— o acudir directamente a la jurisdicción contencioso-administrativa,
          según le convenga.
        </p>
        <p>
          Cuando se opta por la vía administrativa, esta se agota con la resolución del recurso de
          alzada —que constituye la única instancia jerárquica (art. 350 de la LGAP)— o cuando opera
          el silencio negativo por no resolverse dentro del plazo de ley (art. 261 de la LGAP).
        </p>
      </Instrumento>

      <Instrumento titulo="Silencio administrativo" fundamento="LGAP, arts. 261, 330 y 331">
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
          El recurso de amparo es la garantía constitucional que protege los derechos
          fundamentales frente a la autoridad pública o sujetos privados en posición de
          poder. Se tramita ante la Sala Constitucional bajo un procedimiento sumario y
          preferente, regulado en la Ley de la Jurisdicción Constitucional (Ley N.° 7135).
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Como abogados en recursos de amparo en Costa Rica, en Corporación GC representamos
          a personas físicas y jurídicas en la interposición y litigio del amparo, así como
          en la posterior ejecución e indemnización en vía contencioso-administrativa.{" "}
          <Link
            href="/articulos/recurso-amparo-costa-rica"
            className="text-burgundy hover:text-gold transition-colors duration-300 underline-offset-4 hover:underline"
          >
            Lea nuestra guía completa sobre el recurso de amparo en Costa Rica
          </Link>{" "}
          para conocer plazos, requisitos y trámite con detalle.
        </p>
      </section>

      <Instrumento titulo="Amparo contra órganos y servidores públicos" fundamento="Ley 7135, art. 29">
        <p>
          Procede contra toda acción, omisión o vía de hecho de la Administración Pública
          que vulnere o amenace derechos fundamentales: denegación de servicios, listas de
          espera prolongadas en la CCSS, sanciones sin debido proceso, silencio de la
          autoridad, traslados arbitrarios y ejecuciones materiales sin acto firme.
        </p>
      </Instrumento>

      <Instrumento titulo="Amparo contra sujetos de derecho privado" fundamento="Ley 7135, art. 57">
        <p>
          Procede contra hospitales privados, universidades, colegios privados,
          asociaciones, colegios profesionales y demás sujetos privados que actúen en
          posición de poder frente al recurrente, cuando el régimen ordinario sea
          insuficiente o tardío para garantizar el derecho.
        </p>
      </Instrumento>

      <Instrumento titulo="Medidas cautelares y suspensión del acto" fundamento="Ley 7135, art. 41">
        <p>
          Al admitirse el amparo, la aplicación al recurrente del acto concreto impugnado
          queda suspendida de pleno derecho, sin necesidad de garantía ni de audiencia
          previa (art. 41). Solo en casos de excepcional gravedad la Sala puede autorizar
          la ejecución —a solicitud de la Administración o de oficio— cuando la suspensión
          amenace causar daños ciertos e inminentes al interés público, mayores que los que
          la ejecución causaría al agraviado. Además, el Presidente o el magistrado instructor
          pueden dictar cualquier medida de conservación o seguridad que prevenga daños
          mientras se resuelve. Es la herramienta más efectiva para detener un perjuicio en
          cuestión de días.
        </p>
      </Instrumento>

      <Instrumento titulo="Ejecución e indemnización en vía contenciosa" fundamento="Ley 7135, arts. 51 y 56; CPCA">
        <p>
          La sentencia estimatoria condena en abstracto al pago de daños, perjuicios y
          costas. La cuantificación se realiza posteriormente ante el Tribunal Contencioso
          Administrativo mediante proceso de ejecución. Acompañamos al cliente en ambas
          fases: la constitucional ante la Sala y la posterior liquidación contenciosa.
        </p>
      </Instrumento>

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
          defensa de intereses difusos o colectivos. La legitimación es la primera batalla del
          caso: una acción mal anclada en un asunto previo o sin un interés cualificado se rechaza
          sin entrar al fondo.
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

      <Instrumento titulo="Audiencia a la Procuraduría General de la República" fundamento="Ley 7135, art. 81">
        <p>
          El artículo 81 de la Ley N.° 7135 dispone que, una vez que el Presidente de la Sala
          tiene por cumplidos los requisitos, conferirá audiencia a la Procuraduría General de
          la República y a la contraparte que figure en el asunto principal por un plazo de
          quince días. La Procuraduría actúa como defensora de la constitucionalidad del
          ordenamiento jurídico, emitiendo su criterio técnico-jurídico sobre la norma impugnada.
        </p>
        <p>
          Al mismo tiempo, la Sala ordena al tribunal u órgano que conoce del asunto principal
          que no dicte la resolución final hasta que ella se pronuncie sobre la acción, y dispone
          publicar un aviso en el Boletín Judicial por tres veces consecutivas.
        </p>
      </Instrumento>

      <Instrumento titulo="Efectos de la sentencia de inconstitucionalidad" fundamento="Ley 7135, arts. 88-91">
        <p>
          Los artículos 88 a 91 de la Ley N.° 7135 regulan los efectos de la sentencia que
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
          Como abogados en procedimientos administrativos sancionatorios en Costa Rica, en
          Corporación GC asesoramos y representamos a personas físicas y jurídicas sometidas a
          estos procedimientos, garantizando el respeto de las garantías constitucionales del
          debido proceso en todas las etapas. La defensa se diseña desde el primer traslado de
          cargos: lo que no se alega y prueba ante el órgano director difícilmente se rescata
          después en el recurso o en sede contenciosa.
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

      <Instrumento titulo="Órgano director del procedimiento" fundamento="LGAP, arts. 314, 319">
        <p>
          El artículo 314 de la LGAP dispone que el órgano que dirige el procedimiento es el
          encargado de dirigir la comparecencia oral y que, cuando se trate de un órgano colegiado,
          la comparecencia será dirigida por su Presidente o por el miembro designado al efecto. A
          lo largo del procedimiento ordinario, este órgano director instruye el expediente: cita a
          las partes a la comparecencia con quince días de anticipación (art. 311) y evacúa la
          prueba ofrecida (art. 315). El acto final, en cambio, lo dicta el órgano competente dentro
          de los quince días siguientes a la comparecencia (art. 319). La distinción entre el órgano
          que instruye el procedimiento y el que dicta la decisión final constituye una garantía de
          imparcialidad.
        </p>
      </Instrumento>

      <Instrumento titulo="Recursos contra el acto sancionatorio" fundamento="LGAP, arts. 342-352">
        <p>
          Los artículos 342 a 352 de la LGAP regulan los recursos ordinarios contra el acto final
          del procedimiento: la revocatoria y la apelación (art. 343), que proceden por motivos de
          legalidad o de oportunidad (art. 342). Ambos se interponen ante el órgano director del
          procedimiento dentro del plazo de tres días hábiles tratándose del acto final (arts. 346
          y 349), y es potestativo del interesado usar uno solo o ambos recursos (art. 347). La
          apelación la resuelve el superior jerárquico, que constituye la única instancia de alzada
          y agota la vía administrativa (art. 350).
        </p>
        <p>
          Conviene precisar que, conforme al artículo 31 del Código Procesal Contencioso-Administrativo,
          el agotamiento de la vía administrativa es facultativo —salvo los supuestos de los
          artículos 173 y 182 de la Constitución Política—, de modo que el administrado puede acudir
          directamente a la jurisdicción contencioso-administrativa sin necesidad de interponer
          previamente los recursos administrativos, o bien interponerlos si lo considera conveniente.
        </p>
      </Instrumento>

      <Instrumento titulo="Impugnación ante la jurisdicción contencioso-administrativa" fundamento="CPCA, arts. 1-2">
        <p>
          El administrado puede impugnar el acto sancionatorio definitivo ante el Tribunal
          Contencioso Administrativo conforme al Código Procesal Contencioso Administrativo (CPCA).
          Los artículos 1 y 2 del CPCA atribuyen a esta
          jurisdicción el conocimiento de las pretensiones contra las conductas de la
          Administración Pública, incluyendo la anulación de actos sancionatorios dictados
          con vicios de nulidad, la restitución de derechos y la indemnización de daños y
          perjuicios causados por sanciones ilegítimas.
        </p>
      </Instrumento>
    </>
  ),

  "empleo-publico": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          El empleo público en Costa Rica es una relación de derecho público —no un contrato
          laboral común— y goza de una garantía constitucional de estabilidad: el servidor solo
          puede ser removido por una causal de despido justificado o por reducción forzosa de
          servicios (art. 192 de la Constitución Política). Esa relación se rige por el Estatuto
          de Servicio Civil (Ley N.° 1581), la Ley Marco de Empleo Público (Ley N.° 10159) —que
          unificó el régimen y reguló el procedimiento de despido— y, supletoriamente, la Ley
          General de la Administración Pública y el Código de Trabajo.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Como abogados en empleo público en Costa Rica, en Corporación GC representamos a
          servidores públicos frente a despidos, suspensiones y sanciones, y asesoramos a
          instituciones del Estado en la tramitación correcta de sus procedimientos. Los plazos
          para impugnar son perentorios y muy cortos: lo que no se ataca dentro del plazo se
          consolida y se pierde para siempre.
        </p>
      </section>

      <Instrumento titulo="Estabilidad del servidor público" fundamento="Constitución, art. 192; Ley 1581, art. 37">
        <p>
          La estabilidad es la primera garantía del servidor público. El artículo 192 de la
          Constitución Política dispone que los servidores públicos son nombrados a base de
          idoneidad comprobada y solo pueden ser removidos por las causales de despido justificado
          que exprese la legislación de trabajo, o en el caso de reducción forzosa de servicios por
          falta de fondos o para conseguir una mejor organización. El artículo 37, inciso a), del
          Estatuto de Servicio Civil reitera esa protección: el servidor no puede ser despedido a
          menos que incurra en una causal de despido o medie una reducción forzosa de servicios.
        </p>
        <p>
          Por eso, todo despido de un funcionario regular exige una causa legal y un procedimiento
          previo. Un despido sin causa acreditada, o sin el procedimiento debido, es impugnable.
        </p>
      </Instrumento>

      <Instrumento titulo="Procedimiento administrativo de despido" fundamento="Ley 10159, art. 21">
        <p>
          El artículo 21 de la Ley Marco de Empleo Público (Ley N.° 10159) establece un único
          procedimiento administrativo especial de despido, aplicable a toda persona servidora
          pública, que debe concluir por acto final en el plazo de dos meses desde su inicio. Este
          procedimiento sustituyó a los artículos 43 y 44 del Estatuto de Servicio Civil, derogados
          por el artículo 50 de la propia Ley N.° 10159.
        </p>
        <p>
          El jerarca institucional nombra un órgano director que formula los cargos por escrito y da
          traslado al servidor por quince días para presentar sus descargos y ofrecer prueba, la
          cual se evacúa en una comparecencia oral y privada. Si el jerarca concluye que la falta
          existe pero no amerita el despido, puede ordenar una amonestación oral, una advertencia
          escrita o una suspensión sin goce de salario hasta por un mes. En lo no previsto, el
          procedimiento se rige supletoriamente por la Ley General de la Administración Pública
          (arts. 308 y 309).
        </p>
      </Instrumento>

      <Instrumento titulo="Fase recursiva y Tribunal de Servicio Civil" fundamento="Ley 10159, art. 22">
        <p>
          Contra la resolución de despido, el servidor dispone de un plazo improrrogable de cinco
          días hábiles para interponer el recurso de revocatoria y, en subsidio, el de apelación. En
          las instituciones cubiertas por el Estatuto de Servicio Civil, la apelación se concede en
          ambos efectos ante el Tribunal de Servicio Civil, cuya resolución agota la vía
          administrativa y es vinculante para el jerarca.
        </p>
        <p>
          Si el Tribunal de Servicio Civil revoca el despido, dicta un nuevo fallo y resuelve si
          procede la restitución del servidor en su puesto, con pleno goce de sus derechos y el pago
          de los salarios caídos. Es la pieza central de la defensa de un funcionario despedido.
        </p>
      </Instrumento>

      <Instrumento titulo="Causas de cese y reducción forzosa" fundamento="Ley 10159, art. 20">
        <p>
          El artículo 20 de la Ley N.° 10159 enumera las causas de cese del empleo público: la
          renuncia, la jubilación, la sanción firme de despido, la inhabilitación firme para la
          función pública y, en casos muy calificados, la reducción forzosa de servicios —por falta
          de fondos o por una reorganización que afecte al menos al cincuenta por ciento de los
          empleados de la dependencia—.
        </p>
        <p>
          La reducción forzosa no es discrecional: debe estar precedida de una rigurosa
          justificación técnica y procede previo pago de las prestaciones y de la indemnización que
          correspondan. Cuando esos requisitos se incumplen, el cese es impugnable.
        </p>
      </Instrumento>

      <Instrumento titulo="Suspensión provisional durante el procedimiento" fundamento="Ley 10159, art. 21 inciso d); LGAP, art. 309">
        <p>
          Durante el procedimiento de despido, el jerarca puede decretar —en resolución motivada— la
          suspensión provisional del servidor cuando el cargo implique responsabilidad penal, cuando
          sea necesario para el buen éxito del procedimiento o para salvaguardar el decoro de la
          Administración. Se trata de una medida cautelar, no de una sanción: no implica
          pronunciamiento alguno sobre la culpabilidad y debe ser proporcionada y temporal.
        </p>
      </Instrumento>

      <Instrumento titulo="La vía judicial: jurisdicción laboral o contencioso-administrativa" fundamento="Código de Trabajo, art. 420; Sala Constitucional, voto 9928-2010">
        <p>
          Agotada la vía administrativa —que es facultativa (art. 460 del Código de Trabajo)—, el
          servidor puede acudir a la vía judicial. Determinar la jurisdicción competente es uno de
          los puntos más técnicos del empleo público, y un error de competencia puede costar el
          caso. Tras la Reforma Procesal Laboral, el artículo 420 del Código de Trabajo atribuye a
          la jurisdicción laboral las impugnaciones y nulidades de actos relativos al empleo público
          “cuando por su contenido material o sustancial y el régimen jurídico aplicable” deban
          ventilarse en esa sede.
        </p>
        <p>
          La Sala Constitucional, en el voto N.° 9928-2010, fijó dos criterios de deslinde: el
          régimen jurídico aplicable y el contenido material de la pretensión. Como regla, las
          pretensiones laborales y patrimoniales derivadas de la relación —salarios caídos,
          prestaciones, reinstalación— y la tutela de fueros especiales y del debido proceso (vía
          sumarísima del art. 540 del Código de Trabajo) se ventilan en la jurisdicción laboral,
          mientras que las que cuestionan la validez de una manifestación de la función
          administrativa pueden corresponder a la contencioso-administrativa. La frontera sigue
          siendo objeto de jurisprudencia cambiante, por lo que la vía correcta debe definirse caso
          por caso.
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
              ¿Pueden despedir a un servidor público en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Sí, pero solo con causa legal y procedimiento previo. El artículo 192 de la
              Constitución Política y el artículo 37 del Estatuto de Servicio Civil garantizan la
              estabilidad: el servidor nombrado por idoneidad comprobada solo puede ser removido por
              una causal de despido justificado de la legislación laboral o por reducción forzosa de
              servicios. Antes del despido, la Administración debe tramitar el procedimiento especial
              del artículo 21 de la Ley Marco de Empleo Público (Ley N.° 10159), con órgano director,
              traslado de cargos y comparecencia oral. Un despido sin causa o sin ese procedimiento
              es impugnable.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué procedimiento debe seguir la Administración para despedir a un funcionario?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El artículo 21 de la Ley N.° 10159 establece un único procedimiento administrativo
              especial de despido que debe concluir en dos meses. El jerarca nombra un órgano
              director que formula los cargos por escrito y da traslado al servidor por quince días
              para presentar descargos y ofrecer prueba, la cual se evacúa en una comparecencia oral
              y privada. Si la falta existe pero no amerita el despido, puede imponerse una
              amonestación, una advertencia escrita o una suspensión sin goce de salario hasta por un
              mes. En lo no previsto rige supletoriamente la Ley General de la Administración Pública
              (arts. 308 y 309). La omisión del procedimiento o de sus garantías esenciales causa
              nulidad.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué es el Tribunal de Servicio Civil y puede ordenar la reinstalación?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El Tribunal de Servicio Civil conoce, en alzada, la apelación contra el despido de los
              servidores cubiertos por el Estatuto de Servicio Civil. Conforme al artículo 22 de la
              Ley N.° 10159, la apelación se le remite en ambos efectos y su resolución agota la vía
              administrativa. Si el Tribunal revoca el despido, dicta un nuevo fallo y resuelve si
              procede la restitución del servidor en su puesto, con pleno goce de sus derechos y el
              pago de los salarios caídos. Por eso la apelación dentro del plazo de cinco días
              hábiles es decisiva.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Ante qué jurisdicción se impugna un despido en el sector público?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Depende del contenido de la pretensión. Tras la Reforma Procesal Laboral, el artículo
              420 del Código de Trabajo atribuye a la jurisdicción laboral las impugnaciones
              relativas al empleo público según su contenido material y el régimen jurídico
              aplicable, criterios de deslinde fijados por la Sala Constitucional en el voto
              N.° 9928-2010. Como regla, las pretensiones patrimoniales (salarios caídos,
              prestaciones, reinstalación) y la tutela de fueros y del debido proceso (vía sumarísima
              del art. 540 del Código de Trabajo) se ventilan en la jurisdicción laboral, mientras
              que las que cuestionan la validez de un acto administrativo pueden corresponder a la
              contencioso-administrativa. La frontera es objeto de jurisprudencia cambiante y debe
              evaluarse caso por caso. Además, el agotamiento de la vía administrativa es facultativo
              (art. 460 del Código de Trabajo).
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
          La regulación de los servicios públicos costarricenses se articula a través de dos cuerpos
          normativos centrales: la Ley de la Autoridad Reguladora de los Servicios Públicos
          (Ley N.° 7593) y la Ley General de Telecomunicaciones (Ley N.° 8642). La ARESEP fija
          precios y tarifas y vigila la calidad de los servicios definidos en el artículo 5 de la
          Ley 7593: electricidad, agua y alcantarillado, combustibles, riego, transporte público
          remunerado, puertos, ferrocarril y residuos. La SUTEL es un órgano de la ARESEP, encargado
          específicamente de regular, supervisar, vigilar y controlar el ordenamiento jurídico de
          las telecomunicaciones (art. 6, inciso 27, de la Ley 8642).
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Como abogados ante ARESEP y SUTEL en Costa Rica, en Corporación GC representamos a
          prestadores de servicios públicos —cooperativas de electrificación, operadores de
          telecomunicaciones, concesionarios de transporte y otros— en solicitudes tarifarias,
          audiencias públicas, recursos administrativos y litigio contencioso contra el regulador.
          En materia tarifaria todo se juega en el expediente y en los plazos de la audiencia
          pública: ahí se construye la prueba económica que después se defiende en el contencioso.
        </p>
      </section>

      <Instrumento titulo="Servicios públicos regulados por ARESEP y SUTEL" fundamento="Ley 7593, arts. 3 y 5; Ley 8642, arts. 1 y 6">
        <p>
          La Ley 7593 califica como servicio público el que «por su importancia para el desarrollo
          sostenible del país sea calificado como tal por la Asamblea Legislativa» (art. 3.a) y lista
          en el artículo 5 los servicios sujetos a la ARESEP: electricidad (generación, trasmisión,
          distribución y comercialización); telecomunicaciones autorizadas por ley; agua y
          alcantarillado; combustibles derivados de hidrocarburos; riego y avenamiento; transporte
          público remunerado de personas (salvo el aéreo); servicios marítimos y aéreos en los
          puertos; transporte de carga por ferrocarril; y recolección y tratamiento de residuos.
          Para prestar cualquiera de estos servicios se requiere concesión o permiso del ente
          competente (art. 9).
        </p>
        <p>
          En el sector telecomunicaciones, la Ley General de Telecomunicaciones (Ley 8642) creó la
          SUTEL como un órgano de la ARESEP encargado de regular, supervisar, aplicar, vigilar y
          controlar el ordenamiento jurídico de las telecomunicaciones (art. 6, inciso 27).
        </p>
      </Instrumento>

      <Instrumento titulo="Servicio al costo y fijación tarifaria ordinaria" fundamento="Ley 7593, arts. 3.b, 30 y 31">
        <p>
          El principio de servicio al costo —definido en el artículo 3.b de la Ley 7593— ordena que
          las tarifas contemplen únicamente los costos necesarios para prestar el servicio,
          permitan una retribución competitiva y garanticen el desarrollo adecuado de la actividad.
          Las fijaciones ordinarias contemplan factores de costo e inversión, y los prestatarios
          deben presentar, al menos una vez al año, un estudio ordinario (art. 30).
        </p>
        <p>
          Para fijar precios, tarifas y tasas, la ARESEP toma en cuenta las estructuras productivas
          modelo, la tecnología, las posibilidades del servicio y el tamaño de las empresas (art.
          31). Los criterios de equidad social, sostenibilidad ambiental, conservación de energía y
          eficiencia económica son elementos centrales. El propio artículo 31 cierra con una regla
          clave para la defensa del prestador: «No se permitirán fijaciones que atenten contra el
          equilibrio financiero de las entidades prestatarias del servicio público.»
        </p>
      </Instrumento>

      <Instrumento titulo="Fijación tarifaria extraordinaria (de oficio)" fundamento="Ley 7593, art. 30 párrafo final">
        <p>
          A diferencia de la ordinaria, las fijaciones extraordinarias se hacen «de oficio» por la
          ARESEP cuando consideren variaciones importantes en el entorno económico, por caso
          fortuito o fuerza mayor, o cuando se cumplan las condiciones de los modelos automáticos
          de ajuste (art. 30, párrafo final).
        </p>
        <p>
          La distinción importa: el prestador no «solicita» una extraordinaria, sino que gestiona
          ante la ARESEP la activación de los modelos automáticos o sustenta técnicamente las
          circunstancias que justifiquen una revisión de oficio. Una petición planteada con la
          categoría procesal equivocada puede ser desestimada sin entrar al fondo.
        </p>
      </Instrumento>

      <Instrumento titulo="Audiencia pública y plazo de resolución" fundamento="Ley 7593, arts. 36 y 37">
        <p>
          Antes de resolver las solicitudes de fijación ordinaria de tarifas, las autorizaciones de
          generación eléctrica (Ley 7200), la formulación o revisión de normas técnicas y los
          modelos de fijación, la ARESEP debe convocar a una audiencia pública —publicación en La
          Gaceta y en dos periódicos de circulación nacional, audiencia dentro de los treinta días
          naturales siguientes para presentar oposiciones por escrito y sustentarlas oralmente
          (art. 36)—. Las oposiciones deben fundarse en estudios técnicos: una intervención técnica
          sólida en audiencia es a menudo el punto de quiebre del expediente.
        </p>
        <p>
          La ARESEP debe resolver en definitiva la solicitud ordinaria dentro de los treinta días
          naturales posteriores a la audiencia (art. 37); el incumplimiento del plazo acarrea
          sanciones disciplinarias contra el Regulador General.
        </p>
      </Instrumento>

      <Instrumento titulo="Régimen sancionatorio y revocatoria de concesión" fundamento="Ley 7593, arts. 38 y 41; Ley 8642, arts. 67 y 68">
        <p>
          La ARESEP sanciona al prestador con multa de cinco a diez veces el valor del daño causado
          —o, cuando no se pueda estimar, con cinco a veinte salarios base— por las conductas del
          artículo 38: cobro de precios distintos de los autorizados, mantenimiento inadecuado de
          equipos, uso fraudulento, prestación sin autorización, levantamiento no autorizado de
          instalaciones y omisión de afiliación a la CCSS. La reincidencia y otras causales
          calificadas conducen a la revocatoria de la concesión o el permiso (art. 41).
        </p>
        <p>
          En telecomunicaciones, la Ley 8642 trae un régimen propio (arts. 67 y 68). Las
          infracciones se clasifican en graves y muy graves, y la multa se calcula como porcentaje
          de los ingresos brutos del operador: de 0,025% a 0,5% para las graves y de 0,5% a 1%
          para las muy graves; en gravedad particular, la SUTEL puede imponer hasta un 10% de los
          ingresos brutos o del valor de los activos del infractor. La diferencia entre una y otra
          calificación se traduce en cifras de impacto significativo.
        </p>
      </Instrumento>

      <Instrumento titulo="Recursos y litigio contencioso-administrativo regulatorio" fundamento="Ley 7593, art. 53; LGAP, art. 346; CPCA, arts. 31 y 42">
        <p>
          Contra las resoluciones del Regulador General proceden los recursos ordinarios de
          revocatoria y apelación: la Junta Directiva de la ARESEP conoce en alzada y, al hacerlo,
          agota la vía administrativa (art. 53, incisos b y k, de la Ley 7593). La Ley 7593 no fija
          plazos especiales, por lo que rige la LGAP en forma supletoria: tres días hábiles para
          impugnar el acto final (art. 346 de la LGAP).
        </p>
        <p>
          En materia regulatoria, el agotamiento de la vía administrativa es facultativo (art. 31
          del CPCA): el prestador puede optar entre agotar los recursos ante la Junta Directiva o
          acudir directamente a la jurisdicción contencioso-administrativa. Allí caben las
          pretensiones del artículo 42 del CPCA —anulación, restablecimiento del derecho,
          indemnización— y, cuando una resolución pone en riesgo la operación, medidas cautelares
          de urgencia para suspender sus efectos mientras se resuelve el fondo (art. 19 del CPCA).
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
              Las tarifas las fija la ARESEP bajo el principio de servicio al costo (arts. 3.b y 31
              de la Ley 7593): deben contemplar únicamente los costos necesarios para prestar el
              servicio y permitir una retribución competitiva, sin atentar contra el equilibrio
              financiero del prestador. Las fijaciones ordinarias contemplan factores de costo e
              inversión y los prestatarios deben presentar, al menos una vez al año, un estudio
              ordinario (art. 30). Las fijaciones extraordinarias se hacen «de oficio» por la
              ARESEP cuando consideren variaciones importantes en el entorno económico, caso fortuito
              o fuerza mayor, o cuando se cumplan las condiciones de los modelos automáticos de
              ajuste (art. 30, párrafo final). Antes de resolver la solicitud ordinaria, el
              artículo 36 exige una audiencia pública convocada por La Gaceta y dos periódicos de
              circulación nacional, dentro de los treinta días naturales siguientes; su omisión vicia
              el acto. La resolución debe dictarse en los treinta días naturales posteriores a la
              audiencia (art. 37).
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué recursos existen contra una resolución de ARESEP o SUTEL?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Contra las resoluciones del Regulador General proceden la revocatoria y la apelación;
              la Junta Directiva de la ARESEP las resuelve en alzada y agota la vía administrativa
              (art. 53, incisos b y k, de la Ley 7593). La Ley 7593 no fija plazos especiales, por
              lo que rige la LGAP en forma supletoria: tres días hábiles para impugnar el acto final
              (art. 346 de la LGAP). En materia regulatoria, el agotamiento de la vía administrativa
              es facultativo (art. 31 del CPCA, ya que no es uno de los supuestos preceptivos de los
              artículos 173 y 182 de la Constitución): el prestador puede agotar los recursos
              internos o acudir directamente al contencioso. Allí caben las pretensiones del artículo
              42 del CPCA —anulación, restablecimiento, indemnización— y, cuando el acto pone en
              riesgo la operación, medidas cautelares de urgencia (art. 19 del CPCA) para suspenderlo
              mientras se resuelve el fondo.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué sanciones puede imponer ARESEP o SUTEL a un prestador?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              En servicios regulados por la ARESEP, el artículo 38 de la Ley 7593 prevé multas de
              cinco a diez veces el valor del daño causado —o de cinco a veinte salarios base cuando
              no se pueda estimar— por conductas como el cobro de precios distintos de los
              autorizados, el mantenimiento inadecuado de equipos, el uso fraudulento, la prestación
              sin autorización o el levantamiento no autorizado de instalaciones. La reincidencia y
              otras causales calificadas conducen a la revocatoria de la concesión o permiso (art.
              41). En telecomunicaciones, la Ley 8642 trae un régimen propio (arts. 67 y 68): las
              infracciones se clasifican en graves y muy graves, y la multa se calcula como
              porcentaje de los ingresos brutos del operador —de 0,025% a 0,5% en graves y de 0,5%
              a 1% en muy graves—; en casos de gravedad particular, la SUTEL puede imponer hasta un
              10% de los ingresos brutos o del valor de los activos. La calificación correcta de la
              infracción es decisiva: cambia la cifra por uno o dos órdenes de magnitud.
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
          El derecho municipal se sustenta en la autonomía que la Constitución Política reconoce a
          las municipalidades en sus artículos 168 a 175 y que desarrolla el Código Municipal
          (Ley N.° 7794). La municipalidad es una persona jurídica estatal, con patrimonio propio y
          autonomía política, administrativa y financiera (art. 4 del Código Municipal): administra
          los intereses y servicios de su cantón, fija las tasas y los precios de sus servicios y
          propone sus tributos a la Asamblea Legislativa.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Como abogados en derecho municipal en Costa Rica, en Corporación GC impugnamos los actos y
          acuerdos municipales que lesionan a vecinos y empresas —patentes denegadas, cobros de
          tributos, clausuras, acuerdos del Concejo— y asesoramos a las propias municipalidades. La
          impugnación municipal exige conocer la doble vía del Código Municipal: revocatoria ante el
          alcalde y apelación ante el TCA, dentro de plazos cortos que abren o cierran el acceso al
          contencioso.
        </p>
      </section>

      <Instrumento titulo="Autonomía municipal y competencias" fundamento="Constitución, arts. 168-175; Código Municipal, art. 4">
        <p>
          El artículo 170 de la Constitución Política reconoce a las municipalidades una autonomía
          que el artículo 4 del Código Municipal concreta en tres planos: político, administrativo y
          financiero. En su ejercicio, la municipalidad dicta reglamentos autónomos de organización y
          de servicio, acuerda y ejecuta su presupuesto, administra y presta los servicios públicos
          locales, aprueba las tasas, los precios y las contribuciones municipales, y propone sus
          proyectos de tributos a la Asamblea Legislativa. Esa autonomía no es ilimitada: la
          municipalidad está sujeta al principio de legalidad y sus conductas son fiscalizables e
          impugnables.
        </p>
      </Instrumento>

      <Instrumento titulo="Licencias y patentes municipales" fundamento="Código Municipal, arts. 88-92">
        <p>
          Para ejercer cualquier actividad lucrativa en el cantón se requiere la licencia municipal,
          que se obtiene mediante el pago de un impuesto de patente (art. 88). La municipalidad debe
          resolver la solicitud en un plazo máximo de treinta días naturales; vencido ese plazo y
          cumplidos los requisitos sin respuesta, el solicitante puede establecer su actividad
          —silencio positivo (art. 89)—.
        </p>
        <p>
          La licencia solo puede denegarse cuando la actividad sea contraria a la ley, la moral o las
          buenas costumbres, cuando no se cumplan los requisitos legales o cuando la ubicación no esté
          permitida por los reglamentos municipales (art. 90). Se suspende por falta de pago de dos o
          más trimestres y, en caso de reincidencia, puede revocarse previo debido proceso (art. 90
          bis). El impuesto de patentes y la licencia de licores se rigen, además, por leyes
          especiales (art. 92).
        </p>
      </Instrumento>

      <Instrumento titulo="Tributos, tasas y precios municipales" fundamento="Código Municipal, arts. 77, 77 bis, 82 y 83">
        <p>
          La municipalidad acuerda su presupuesto, propone sus tributos a la Asamblea Legislativa y
          fija las tasas y los precios de los servicios municipales (art. 77). Como administración
          tributaria, ejerce la fiscalización y el cobro de los tributos a su cargo con las facultades
          del Código de Normas y Procedimientos Tributarios (art. 77 bis). Las tasas y precios se
          fijan tomando en cuenta el costo del servicio más un diez por ciento de utilidad para
          desarrollarlo (art. 83).
        </p>
        <p>
          Los tributos municipales prescriben en cinco años (art. 82) y las certificaciones del
          contador municipal sobre deudas constituyen título ejecutivo, en cuyo cobro solo caben las
          excepciones de pago o prescripción (art. 80). Por eso conviene revisar a tiempo la legalidad
          de un cobro o de una valoración antes de que venza el plazo para impugnarlo.
        </p>
      </Instrumento>

      <Instrumento titulo="Recursos contra los acuerdos del Concejo" fundamento="Código Municipal, arts. 162, 163 y 165">
        <p>
          Contra los acuerdos del Concejo Municipal, los interesados disponen de los recursos
          ordinarios de revocatoria y de apelación, que deben interponerse —en memorial razonado—
          dentro del quinto día (arts. 162 y 165). La revocatoria la conoce el propio Concejo; la
          apelación la resuelve el Tribunal Contencioso-Administrativo, que actúa como jerarca
          impropio. La apelación procede solo por ilegalidad, mientras que la revocatoria puede
          fundarse también en la inoportunidad del acuerdo (art. 165).
        </p>
        <p>
          No todos los acuerdos admiten estos recursos: quedan excluidos los no aprobados
          definitivamente, los de mero trámite o ejecución, los presupuestarios y los reglamentarios
          (art. 163). Frente a esos y demás conductas, la vía es la jurisdiccional.
        </p>
      </Instrumento>

      <Instrumento titulo="Recursos contra los demás actos municipales y veto del alcalde" fundamento="Código Municipal, arts. 167, 170 y 171">
        <p>
          Contra las decisiones de los funcionarios que dependen directamente del Concejo caben
          revocatoria ante el órgano que las dictó y apelación ante el Concejo Municipal, dentro del
          quinto día (art. 170). Cuando se trata de funcionarios bajo la alcaldía, la apelación sube a
          la alcaldía; y contra las decisiones de la propia alcaldía, la apelación se interpone, en el
          mismo plazo, ante el Tribunal Contencioso-Administrativo (art. 171).
        </p>
        <p>
          A ello se suma el veto: el alcalde puede vetar los acuerdos del Concejo por motivos de
          legalidad u oportunidad dentro del quinto día hábil; si el Concejo lo rechaza, el asunto se
          eleva en alzada al Tribunal Contencioso-Administrativo (art. 167).
        </p>
      </Instrumento>

      <Instrumento titulo="Agotamiento preceptivo y litigio contencioso-administrativo" fundamento="CPCA, arts. 31 y 42">
        <p>
          La materia municipal es una de las excepciones en que el agotamiento de la vía
          administrativa es preceptivo: el artículo 31 del CPCA exige agotarla en los supuestos del
          artículo 173 de la Constitución, de modo que —a diferencia de la regla general— aquí sí hay
          que cumplir los recursos del Código Municipal antes de demandar. El jerarca impropio debe
          resolver la apelación en el plazo máximo de un mes.
        </p>
        <p>
          Agotada esa vía, el conflicto se lleva a la jurisdicción contencioso-administrativa, donde
          puede pretenderse la anulación total o parcial del acto o acuerdo municipal, el
          reconocimiento o restablecimiento de la situación jurídica, la condena de la municipalidad a
          una conducta específica y la indemnización de los daños (art. 42 del CPCA). Mientras se
          resuelve, pueden solicitarse medidas cautelares para proteger los derechos del administrado
          (art. 19 del CPCA).
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
              Depende del órgano que la dictó. Contra los acuerdos del Concejo Municipal caben
              revocatoria —ante el propio Concejo— y apelación —ante el Tribunal Contencioso-
              Administrativo, que actúa como jerarca impropio—, dentro del quinto día (arts. 162 y 165
              del Código Municipal). Contra los actos de funcionarios bajo la alcaldía, la apelación
              sube a la alcaldía y, contra las decisiones de la alcaldía, al Tribunal Contencioso-
              Administrativo (art. 171). En materia municipal el agotamiento de la vía administrativa
              es preceptivo (art. 31 del CPCA, supuesto del art. 173 de la Constitución), por lo que
              hay que cumplir esos recursos antes de demandar. Agotada la vía, se acude a la
              jurisdicción contencioso-administrativa con las pretensiones del artículo 42 del CPCA
              (anulación, restablecimiento, daños) y, si procede, medidas cautelares (art. 19).
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué pasa si me deniegan o suspenden la patente comercial?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Para ejercer una actividad lucrativa se requiere la licencia municipal, que se obtiene
              pagando el impuesto de patente (art. 88 del Código Municipal). La municipalidad debe
              resolver la solicitud en treinta días naturales; si no responde y los requisitos están
              cumplidos, opera el silencio positivo y el solicitante puede operar (art. 89). La
              licencia solo puede denegarse por las causales del artículo 90 (actividad contraria a la
              ley, requisitos incumplidos o ubicación no permitida) y se suspende por falta de pago de
              dos o más trimestres, con eventual revocación por reincidencia y previo debido proceso
              (art. 90 bis). Una denegación o suspensión sin fundamento es impugnable con los recursos
              del Código Municipal.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué alcance tiene la autonomía municipal frente al Gobierno Central?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La autonomía municipal tiene rango constitucional. El artículo 170 de la Constitución
              reconoce a las corporaciones municipales como autónomas, y el artículo 4 del Código
              Municipal (Ley N.° 7794) la concreta en autonomía política, administrativa y financiera:
              dictar reglamentos autónomos, acordar el presupuesto, administrar los servicios locales,
              aprobar tasas y precios y proponer sus tributos a la Asamblea Legislativa. Los artículos
              168 a 175 de la Constitución delimitan ese marco. Pero la autonomía no es absoluta: la
              municipalidad está sujeta al principio de legalidad, sus presupuestos los fiscaliza la
              Contraloría General de la República y sus actos son impugnables ante la jurisdicción
              contencioso-administrativa.
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
          El régimen demanial costarricense se construye sobre dos artículos del Código Civil. El
          artículo 261 define como «cosas públicas» tanto las que por ley están destinadas de modo
          permanente a un servicio de utilidad general como aquellas «de que todos pueden aprovecharse
          por estar entregadas al uso público». El artículo 262 dispone que esas cosas «están fuera
          del comercio» —de ahí la doctrina y la jurisprudencia derivan los principios de
          inalienabilidad, imprescriptibilidad e inembargabilidad—. Solo una desafectación legal puede
          devolverlas al tráfico jurídico privado.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Como abogados en dominio público en Costa Rica, en Corporación GC defendemos a
          concesionarios, permisionarios y administrados frente a revocatorias y caducidades de
          concesiones, desalojos administrativos y denegatorias de permisos de uso sobre bienes del
          Estado. La primera batalla técnica es la de la afectación: definir si el bien es
          demanial o de dominio privado del Estado decide casi todo el régimen aplicable y, con él,
          el resultado del caso.
        </p>
      </section>

      <Instrumento titulo="Cosas públicas: definición y régimen demanial" fundamento="Código Civil, arts. 261 y 262">
        <p>
          El artículo 261 del Código Civil define las cosas públicas en dos categorías: (i) las que
          por ley están destinadas de modo permanente a cualquier servicio de utilidad general y
          (ii) aquellas «de que todos pueden aprovecharse por estar entregadas al uso público».
          Quedan así dentro del dominio público las plazas, calles, parques, playas, ríos,
          carreteras y los edificios afectos a un servicio público. El propio artículo aclara que
          los demás bienes son privados, aunque pertenezcan al Estado o a los municipios: la mera
          titularidad estatal no convierte un bien en demanial.
        </p>
        <p>
          El artículo 262 dispone que las cosas públicas «están fuera del comercio», de donde la
          doctrina y la jurisprudencia derivan los principios de inalienabilidad, imprescriptibilidad
          e inembargabilidad. Esa exclusión cede únicamente cuando la propia ley desafecta el bien y
          lo separa del uso público al que estaba destinado.
        </p>
      </Instrumento>

      <Instrumento titulo="Permisos de uso del dominio público" fundamento="LGAP, art. 154">
        <p>
          El artículo 154 de la Ley General de la Administración Pública regula los permisos de uso
          del dominio público y los demás actos que otorgan a un administrado un derecho a título
          precario. La Administración puede revocarlos «por razones de oportunidad o conveniencia,
          sin responsabilidad de la Administración», pero el propio artículo aclara que la revocación
          «no deberá ser intempestiva ni arbitraria» y exige otorgar un plazo prudencial para el
          cumplimiento del acto de revocación.
        </p>
        <p>
          De esa precariedad nace una zona gris donde una revocación apresurada o sin motivación
          adecuada es revisable, aun cuando el título sea precario.
        </p>
      </Instrumento>

      <Instrumento titulo="Concesiones demaniales y revocación con indemnización" fundamento="LGAP, art. 155; Constitución, art. 121, inciso 14">
        <p>
          Las concesiones sobre bienes del dominio público se rigen por las leyes sectoriales —zona
          marítimo terrestre, aguas, caminos, obra pública, telecomunicaciones, electricidad—, en
          desarrollo de la reserva legal del artículo 121, inciso 14, de la Constitución, según el
          cual le corresponde a la Asamblea Legislativa decretar la enajenación o la aplicación a
          usos públicos de los bienes propios de la Nación.
        </p>
        <p>
          Cuando la Administración pretende revocar una concesión —que es un acto declaratorio de
          derechos subjetivos—, el artículo 155 de la LGAP impone un régimen estricto: la revocación
          la dicta el jerarca del ente respectivo, previo dictamen favorable de la Contraloría
          General de la República, y debe contener simultáneamente el reconocimiento —y, si es
          posible, el cálculo— de la indemnización completa de los daños y perjuicios, so pena de
          nulidad absoluta. La liquidación corresponde a la Administración en el mes posterior a la
          solicitud o recurso del administrado.
        </p>
      </Instrumento>

      <Instrumento titulo="Responsabilidad de la Administración por sacrificio especial" fundamento="LGAP, arts. 190, 191 y 194">
        <p>
          La Administración responde por todos los daños causados por su funcionamiento legítimo o
          ilegítimo, normal o anormal, salvo fuerza mayor, culpa de la víctima o hecho de un tercero
          (art. 190 de la LGAP). Cuando el daño proviene de la falta de un servidor en el ejercicio
          del cargo —conducta ilícita—, la reparación alcanza al daño emergente y al lucro cesante
          (art. 191).
        </p>
        <p>
          Distinta es la responsabilidad por conducta lícita o funcionamiento normal —típicamente, la
          revocatoria de una concesión por interés público sobrevenido—. El artículo 194 reconoce
          esa responsabilidad por «sacrificio especial», pero limita la indemnización: «la
          indemnización deberá cubrir el valor de los daños al momento de su pago, pero no el lucro
          cesante». Encuadrar correctamente la causa de la revocatoria define el alcance económico
          del reclamo.
        </p>
      </Instrumento>

      <Instrumento titulo="Desalojo administrativo y autotutela demanial" fundamento="LGAP, arts. 308 y 309; principio de autotutela administrativa">
        <p>
          La Administración titular del dominio público está facultada para recuperar de oficio los
          bienes demaniales ocupados sin título legítimo, en ejercicio de la autotutela
          administrativa. El desalojo debe respetar el debido proceso del procedimiento ordinario
          regulado en los artículos 308 y 309 de la LGAP —con traslado de cargos, comparecencia oral
          y privada y derecho de defensa—; su omisión causa nulidad.
        </p>
        <p>
          En materia de zona marítimo terrestre, la Ley N.° 6043 establece reglas específicas de
          sanciones y desalojo de ocupantes, que se tratan en el área específica de Zona Marítimo
          Terrestre.
        </p>
      </Instrumento>

      <Instrumento titulo="Impugnación: vía administrativa y contencioso-administrativa" fundamento="CPCA, arts. 1, 31 y 42">
        <p>
          Las decisiones de la Administración sobre bienes demaniales —denegatoria de permiso o
          concesión, revocatoria, caducidad, orden de desalojo, sanción por ocupación— son
          impugnables. Los actos municipales se recurren con los recursos del Código Municipal
          (revocatoria y apelación dentro del quinto día, esta última ante el Tribunal
          Contencioso-Administrativo como jerarca impropio); los demás actos, con los recursos
          ordinarios de la LGAP. En materia municipal el agotamiento de la vía administrativa es
          preceptivo (art. 31 del CPCA, supuesto del art. 173 de la Constitución).
        </p>
        <p>
          Agotada la vía, la jurisdicción contencioso-administrativa puede anular el acto,
          restablecer al concesionario en su derecho y condenar al Estado al pago de la
          indemnización (art. 42 del CPCA). Cuando el desalojo o la revocatoria es inminente,
          conviene pedir medidas cautelares de urgencia para suspender los efectos del acto mientras
          se resuelve el fondo (art. 19 del CPCA).
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
              ¿Qué es una «cosa pública» y por qué no puede venderse ni embargarse?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El artículo 261 del Código Civil define las cosas públicas como las que «por ley, están
              destinadas de modo permanente a cualquier servicio de utilidad general» y aquellas «de
              que todos pueden aprovecharse por estar entregadas al uso público»: plazas, calles,
              parques, playas, ríos, carreteras y los edificios afectos a un servicio público entran
              en esa categoría. El artículo 262 las pone «fuera del comercio», y de ahí la doctrina y
              la jurisprudencia derivan los principios de inalienabilidad (no pueden venderse),
              imprescriptibilidad (no se adquieren por usucapión) e inembargabilidad (no pueden ser
              embargadas). Esa exclusión solo cede si una ley desafecta el bien y lo separa del uso
              público al que estaba destinado. La sola titularidad estatal o municipal no convierte
              un bien en demanial: los demás bienes del Estado son privados.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué diferencia hay entre una concesión y un permiso de uso?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El permiso de uso es un título precario regulado por el artículo 154 de la LGAP: la
              Administración puede revocarlo por razones de oportunidad o conveniencia «sin
              responsabilidad», aunque la propia norma exige que la revocación «no sea intempestiva
              ni arbitraria» y otorgue un plazo prudencial. La concesión, en cambio, otorga al
              concesionario un derecho subjetivo y se rige por las leyes sectoriales y la reserva
              legal del artículo 121, inciso 14, de la Constitución. Su revocación es un acto que
              extingue derechos subjetivos: el artículo 155 de la LGAP exige que la dicte el jerarca
              del ente respectivo, con dictamen favorable de la Contraloría General de la República y
              el reconocimiento simultáneo de la indemnización completa, so pena de nulidad absoluta.
              Esa distinción cambia por completo lo que el administrado puede reclamar.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Puede la Administración desalojar a quien ocupa un bien demanial sin permiso?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Sí, en virtud de la autotutela administrativa, pero con debido proceso. El procedimiento
              ordinario de los artículos 308 y 309 de la LGAP exige notificación, traslado de cargos,
              comparecencia oral y privada y derecho de defensa; su omisión causa nulidad. La orden de
              desalojo es impugnable: en sede administrativa, con los recursos del Código Municipal
              (cuando es municipal) o los recursos ordinarios de la LGAP; en sede judicial, mediante
              demanda contencioso-administrativa con las pretensiones del artículo 42 del CPCA y, si
              hay urgencia, medidas cautelares para suspender el desalojo (art. 19 del CPCA). Por la
              imprescriptibilidad del dominio público derivada del artículo 262 del Código Civil, el
              ocupante no puede alegar derechos posesorios ni adquirir el bien por el paso del
              tiempo.
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
          impugnables ante el Tribunal Contencioso Administrativo conforme al
          artículo 1 del CPCA.
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
              ante la jurisdicción contencioso-administrativa conforme al artículo 1 del CPCA.
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
          El derecho urbanístico regula la planificación del territorio y el control del desarrollo
          urbano. Sus fuentes principales son la Ley de Planificación Urbana (Ley N.° 4240) y la Ley
          de Construcciones (Ley N.° 833), que cada municipalidad aplica a través de su plan regulador
          y de los reglamentos de desarrollo urbano. La propia Ley de Planificación Urbana reconoce la
          competencia de los gobiernos municipales para planificar y controlar el desarrollo urbano de
          su cantón (art. 15), en desarrollo del artículo 169 de la Constitución Política.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Como abogados en derecho urbanístico en Costa Rica, en Corporación GC defendemos a
          propietarios y desarrolladores frente a denegatorias de permisos de construcción, negativas
          de uso del suelo, clausuras, restricciones de zonificación y cargas en fraccionamientos y
          urbanizaciones. El éxito del caso se construye sobre el control técnico del plan
          regulador y los reglamentos de desarrollo urbano: cuando esa lectura es sólida, las
          decisiones municipales se vuelven impugnables; cuando es débil, no hay caso.
        </p>
      </section>

      <Instrumento titulo="El plan regulador y su procedimiento de adopción" fundamento="Ley 4240, arts. 15, 16, 17 y 21">
        <p>
          El plan regulador es el instrumento de planificación local que define la zonificación, los
          usos del suelo, la circulación, los servicios y la vivienda del cantón (art. 16). Su
          adopción —y también su modificación, suspensión o derogatoria— exige un procedimiento
          reglado (art. 17): una audiencia pública convocada por La Gaceta con al menos quince días
          hábiles de antelación, la aprobación de la Dirección de Urbanismo del INVU, la adopción
          formal por mayoría absoluta del Concejo y la publicación del aviso en La Gaceta.
        </p>
        <p>
          El plan se desarrolla mediante cinco reglamentos: zonificación; fraccionamiento y
          urbanización; mapa oficial; renovación urbana; y construcciones (art. 21). La omisión de la
          audiencia pública o de cualquiera de esos requisitos vicia la adopción del plan y abre la
          vía de impugnación.
        </p>
      </Instrumento>

      <Instrumento titulo="Zonificación, uso del suelo y patente" fundamento="Ley 4240, arts. 24, 28 y 29">
        <p>
          El reglamento de zonificación divide el área urbana en zonas de uso y fija, para cada una,
          los usos permitidos, las alturas, las dimensiones de los lotes, los retiros y los espacios
          de estacionamiento (art. 24). Está prohibido dedicar un terreno o un edificio a un uso
          incompatible con la zonificación, por lo que el propietario debe obtener un certificado
          municipal de uso del suelo (art. 28).
        </p>
        <p>
          Ese certificado de uso del suelo es determinante para la actividad económica: sin él no se
          conceden patentes para establecimientos comerciales o industriales y, en caso de
          contravención, se procede a la clausura del local (art. 29). Por eso un uso del suelo mal
          denegado puede frenar un negocio entero, y es impugnable.
        </p>
      </Instrumento>

      <Instrumento titulo="Fraccionamiento, urbanización y cesión de áreas" fundamento="Ley 4240, arts. 33, 34, 38 y 40">
        <p>
          Para fraccionar un terreno en distritos urbanos es indispensable el visado municipal del
          plano; sin él, el Registro Público suspende la inscripción y las oficinas públicas tienen el
          fraccionamiento por inexistente (arts. 33 y 34). La urbanización —apertura de calles y
          dotación de servicios— exige un permiso que la municipalidad niega si el proyecto no cumple
          las normas mínimas, no cuenta con la aprobación de la Dirección de Urbanismo y del AyA, o no
          garantiza las obras (art. 38).
        </p>
        <p>
          El urbanizador debe ceder gratuitamente al uso público las áreas de vías, parques y
          facilidades comunales: entre un cinco y un veinte por ciento del terreno según el tamaño de
          los lotes, sin que el total supere el cuarenta y cinco por ciento (art. 40). El alcance de
          esa cesión es uno de los puntos que con más frecuencia se discute con la municipalidad.
        </p>
      </Instrumento>

      <Instrumento titulo="Permiso de construcción y control de obras" fundamento="Ley 833, arts. 74, 83, 83 bis y 87; Ley 4240, art. 58">
        <p>
          Toda obra de construcción requiere licencia de la municipalidad (art. 74 de la Ley de
          Construcciones), que solicita un profesional responsable —ingeniero o arquitecto incorporado
          al CFIA (art. 83)—. Las obras menores que no superen el equivalente a diez salarios base no
          requieren ese profesional, pero sí la licencia municipal (art. 83 bis). La municipalidad
          ejerce la vigilancia y el control constructivo de las obras de su cantón (art. 87).
        </p>
        <p>
          El permiso debe negarse cuando la obra no guarda conformidad con la zonificación, cuando el
          predio proviene de un fraccionamiento sin visado o cuando el lote carece de acceso o de
          servicios (art. 58 de la Ley de Planificación Urbana). Una denegatoria que se aparte de esas
          causales —o que se demore sin justificación— es revisable.
        </p>
      </Instrumento>

      <Instrumento titulo="Construcción sin permiso: sanciones y clausura" fundamento="Ley 833, arts. 88, 89, 93 y 96">
        <p>
          Construir sin licencia, con licencia vencida o apartándose del proyecto aprobado es una
          infracción a la Ley de Construcciones (arts. 88 y 89). Ante una obra terminada sin licencia,
          la municipalidad levanta una información y fija un plazo improrrogable de treinta días para
          regularizarla, presentando el proyecto y la solicitud de licencia (art. 93).
        </p>
        <p>
          Si el propietario no regulariza, la municipalidad puede ordenar la destrucción de las partes
          defectuosas, negar el uso de la construcción y disponer su desocupación y clausura (art. 96).
          Frente a una orden de clausura o demolición conviene actuar de inmediato: una defensa técnica
          a tiempo puede evitar la pérdida de la obra.
        </p>
      </Instrumento>

      <Instrumento titulo="Vías de impugnación: municipalidad, INVU y contencioso" fundamento="Ley 4240, art. 13; Código Municipal, arts. 165 y 171; CPCA, arts. 31 y 42">
        <p>
          La impugnación depende del órgano que dictó el acto. Contra los actos urbanísticos
          municipales —denegatoria de uso del suelo, de patente o de permiso de construcción,
          clausura— proceden los recursos del Código Municipal: revocatoria y apelación dentro del
          quinto día, que se elevan al Tribunal Contencioso-Administrativo como jerarca impropio
          (arts. 165 y 171). Contra las decisiones de la Dirección de Urbanismo del INVU cabe revisión
          ante su Junta Directiva y, luego, recurso ante el Poder Ejecutivo dentro de quince días
          hábiles, con lo que se agota la vía administrativa (art. 13 de la Ley de Planificación
          Urbana).
        </p>
        <p>
          En materia municipal el agotamiento de la vía administrativa es preceptivo (art. 31 del
          CPCA). Agotada, el conflicto se lleva a la jurisdicción contencioso-administrativa, donde
          puede pedirse la anulación del acto, el otorgamiento del permiso o del uso del suelo, el
          restablecimiento del derecho y la indemnización de los daños (art. 42 del CPCA), con medidas
          cautelares cuando hay urgencia (art. 19).
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
              ¿Qué es un plan regulador y cómo afecta mi propiedad?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El plan regulador es el instrumento de planificación local que define la zonificación y
              los usos del suelo del cantón —residencial, comercial, industrial, de protección— junto
              con alturas, lotes, retiros y densidades (arts. 16 y 24 de la Ley de Planificación Urbana,
              Ley N.° 4240). Se desarrolla mediante cinco reglamentos: zonificación, fraccionamiento y
              urbanización, mapa oficial, renovación urbana y construcciones (art. 21). Su adopción o
              modificación exige audiencia pública con al menos quince días hábiles de aviso, la
              aprobación de la Dirección de Urbanismo del INVU, la votación por mayoría absoluta del
              Concejo y la publicación en La Gaceta (art. 17). Las restricciones de zonificación son
              limitaciones de interés social al derecho de propiedad (art. 45 de la Constitución):
              válidas si son razonables y proporcionadas, e impugnables cuando no lo son.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué hago si la municipalidad me deniega un permiso de construcción o un uso del suelo?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La denegatoria debe ser motivada y ajustarse a las causales legales (art. 58 de la Ley de
              Planificación Urbana; art. 74 de la Ley de Construcciones, Ley N.° 833). Se impugna con los
              recursos del Código Municipal: revocatoria y apelación dentro del quinto día, que se elevan
              al Tribunal Contencioso-Administrativo como jerarca impropio (arts. 165 y 171). En materia
              municipal el agotamiento de la vía administrativa es preceptivo (art. 31 del CPCA, supuesto
              del art. 173 de la Constitución); agotada, se demanda ante la jurisdicción contencioso-
              administrativa para que se anule la denegatoria, se ordene el permiso o el uso del suelo y
              se indemnicen los daños (art. 42 del CPCA), con medidas cautelares cuando hay urgencia
              (art. 19). Recuerde que sin certificado de uso del suelo no se otorgan patentes y procede
              la clausura del local (art. 29 de la Ley de Planificación Urbana).
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Pueden restringir o reservar mi terreno para uso público sin pagarme?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El artículo 45 de la Constitución protege la propiedad: solo puede privarse de ella por
              interés público legalmente comprobado y previa indemnización. Al urbanizar o fraccionar
              fuera del cuadrante hay un deber de ceder gratuitamente áreas de uso público —entre un 5%
              y un 20%, con tope del 45% (art. 40 de la Ley de Planificación Urbana)—, pero más allá de
              eso la carga no es gratuita: cuando se niega el permiso porque la finca, o una parte que
              excede esa cesión, queda reservada a uso público, la municipalidad, el Estado o la
              institución deben negociar la compra o iniciar la expropiación dentro del año siguiente
              (art. 48). La reserva no puede mantenerse indefinidamente sin pagar, y una restricción que
              vacíe de contenido la propiedad es impugnable.
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
          La materia presupuestaria y de hacienda pública se articula sobre tres cuerpos normativos:
          la Constitución Política (arts. 176 a 187 y 183-184), la Ley Orgánica de la Contraloría
          General de la República (Ley N.° 7428) y la Ley de Administración Financiera de la
          República y Presupuestos Públicos (Ley N.° 8131). La CGR es órgano constitucional
          fundamental y rector del sistema de fiscalización de la Hacienda Pública (art. 1 de la
          Ley 7428); sus criterios y disposiciones son de acatamiento obligatorio para los sujetos
          pasivos y prevalecen sobre cualquier disposición en contrario (art. 12).
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Como abogados ante la Contraloría en Costa Rica, en Corporación GC defendemos a
          funcionarios, jerarcas, regidores, instituciones y contratistas frente a procedimientos
          sancionatorios, improbaciones presupuestarias, negativas de refrendo, declaratorias de
          nulidad, cancelaciones de credencial y resoluciones de reintegro. Conocer el filtro de
          la CGR es decisivo: sus criterios son vinculantes y prevalecen sobre cualquier disposición
          en contrario, y sus actos solo se impugnan en sede contencioso-administrativa.
        </p>
      </section>

      <Instrumento titulo="La Contraloría y el ordenamiento de fiscalización superior" fundamento="Constitución, arts. 183-184; Ley 7428, arts. 1, 8 y 12">
        <p>
          El artículo 183 de la Constitución crea a la Contraloría General de la República como
          institución auxiliar de la Asamblea Legislativa en la vigilancia de la Hacienda Pública;
          el 184 le atribuye las funciones de fiscalizar la ejecución y liquidación de los
          presupuestos, examinar y aprobar los presupuestos de las municipalidades e instituciones
          autónomas y rendir memoria anual a la Asamblea. La Ley 7428 confirma su carácter de
          órgano constitucional fundamental (art. 1) y rector del ordenamiento de fiscalización
          (art. 12), cuyas disposiciones, normas, políticas y directrices son de acatamiento
          obligatorio y prevalecen sobre cualquier disposición que se les oponga.
        </p>
        <p>
          La Hacienda Pública —concepto que el artículo 8 de la Ley 7428 define— comprende los
          fondos públicos, las potestades para manejarlos y las normas relativas al proceso
          presupuestario, la contratación administrativa, el control interno y externo y la
          responsabilidad de los funcionarios.
        </p>
      </Instrumento>

      <Instrumento titulo="Fiscalización presupuestaria: aprobación e improbación" fundamento="Ley 7428, arts. 18 y 19; Ley 8131, art. 53">
        <p>
          El artículo 18 de la Ley 7428 ordena a la Contraloría examinar, para su aprobación o
          improbación total o parcial, los presupuestos de los entes del artículo 184 de la
          Constitución, así como los de la Administración descentralizada, las instituciones
          semiautónomas y las empresas públicas. Los entes públicos no estatales cumplen este
          requisito cuando una ley especial lo exija.
        </p>
        <p>
          Si un presupuesto es improbado, rige el del año inmediato anterior; si la improbación es
          parcial, el del año anterior rige solamente en cuanto a lo improbado, hasta que se
          corrijan las deficiencias. Los presupuestos se presentan a más tardar el 30 de setiembre
          y las liquidaciones el 16 de febrero (art. 19), y los entes sujetos a aprobación CGR
          deben atender las normas técnicas que ella dicta (Ley 8131, art. 53).
        </p>
      </Instrumento>

      <Instrumento titulo="Refrendo de actos y contratos" fundamento="Ley 7428, arts. 20 y 30">
        <p>
          La Contraloría aprueba —dentro de un plazo que no excede de treinta días hábiles— los
          contratos que celebre el Estado y los demás que por ley especial deban cumplir con este
          requisito; no se aplica a los contratos de trabajo ni a los que constituyan actividad
          ordinaria (art. 20). La administración obligada debe gestionar y obtener el refrendo
          antes de dar la orden de inicio; sin el refrendo el acto o contrato no surte efectos
          jurídicos y su ejecución queda prohibida, so pena de nulidad absoluta.
        </p>
        <p>
          La falta de pronunciamiento dentro del plazo da lugar al silencio positivo. El artículo
          30 lo confirma: en autorizaciones, refrendo de contratos y aprobación de modificaciones
          presupuestarias opera el silencio positivo y la Administración puede ejecutar válidamente
          el acto. Esa misma norma permite que la adjudicación en licitaciones se tenga por válida
          y eficaz si la CGR no resuelve la apelación en el plazo legal.
        </p>
      </Instrumento>

      <Instrumento titulo="Potestad sancionatoria: criterio técnico vinculante" fundamento="Ley 7428, arts. 67, 68 y 71; Ley 8131, arts. 110 y 113">
        <p>
          Frente a infracciones del ordenamiento de fiscalización o lesiones a la Hacienda Pública,
          la Contraloría recomienda al órgano competente la sanción aplicable mediante criterio
          técnico vinculante (art. 68 de la Ley 7428). La autoridad del sujeto pasivo debe cumplir
          la recomendación en el plazo que la Contraloría fije, salvo que dentro de ocho días
          hábiles interponga una gestión de revisión motivada; resuelta esta, el incumplimiento
          configura el delito de desobediencia. La potestad de la Contraloría prescribe en dos años
          desde el inicio del expediente.
        </p>
        <p>
          Los hechos generadores de responsabilidad administrativa están en el artículo 110 de la
          Ley 8131 (lista extensa: omisiones de control, uso indebido de fondos, daño al patrimonio,
          contrataciones sin procedimiento, entre otros). El artículo 113 enumera las sanciones:
          amonestación escrita, amonestación escrita publicada en La Gaceta, suspensión sin goce de
          salario de ocho a treinta días y destitución sin responsabilidad. La responsabilidad
          disciplinaria prescribe en cinco años desde el hecho o desde el informe (art. 71 de la
          Ley 7428).
        </p>
      </Instrumento>

      <Instrumento titulo="Responsabilidad civil y reintegro por daño económico" fundamento="Ley 7428, arts. 74, 75 y 76; Ley 8131, arts. 114, 116 y 118">
        <p>
          Todo servidor público responde civilmente, por dolo o culpa grave, frente al ente
          afectado y a terceros (Ley 7428 art. 74; Ley 8131 art. 114). Cuando varios responsables
          intervienen, la responsabilidad es solidaria (Ley 8131 art. 116); no efectuar
          oportunamente las acciones de cobro es, además, falta grave del funcionario competente
          (Ley 7428 art. 75).
        </p>
        <p>
          La pieza clave del reintegro está en el artículo 76 de la Ley 7428: cuando hay daño
          contra los fondos públicos «proveniente de una ilegalidad flagrante y manifiesta» y el
          monto es líquido o liquidable con vista de documentos, la Contraloría dicta resolución
          razonada que declara la responsabilidad y su monto pecuniario, previa formación de
          expediente y audiencia. La certificación de esa resolución constituye **título
          ejecutivo** contra el responsable, y el sujeto pasivo afectado debe iniciar de inmediato
          el cobro judicial (también art. 118 de la Ley 8131).
        </p>
      </Instrumento>

      <Instrumento titulo="Impugnación: vía contenciosa directa en presupuestos, refrendo y contratación" fundamento="Ley 7428, arts. 33 y 34; CPCA, arts. 31 y 42">
        <p>
          Los actos definitivos de la Contraloría están sujetos al régimen común de impugnación
          (LGAP y CPCA) cuando lesionen derechos subjetivos o intereses legítimos (art. 33 de la
          Ley 7428). Pero el artículo 34 exceptúa expresamente —y los hace firmes desde que se
          dictan, sin recurso administrativo— tres categorías de actos: los dictados en
          procedimientos de contratación administrativa, los de aprobación de contratos
          administrativos (refrendos) y los relacionados con la materia presupuestaria.
        </p>
        <p>
          Esto significa que contra una improbación presupuestaria, una negativa de refrendo o un
          acto de contratación administrativa **no hay recurso administrativo**: la impugnación se
          lleva directamente a la jurisdicción contencioso-administrativa. El agotamiento de la vía
          administrativa es facultativo (art. 31 del CPCA, pues estos no son supuestos preceptivos
          de los arts. 173 ni 182 de la Constitución). Allí caben las pretensiones del artículo 42
          del CPCA —anulación, restablecimiento del derecho, indemnización— y, cuando hay urgencia,
          medidas cautelares (art. 19 del CPCA) para suspender los efectos del acto.
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
              ¿Qué pasa si la Contraloría me improba el presupuesto o me niega un refrendo?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              En la improbación, rige el presupuesto del año inmediato anterior; si la improbación es
              parcial, el del año anterior rige solamente en cuanto a lo improbado, hasta que se
              corrijan las deficiencias (art. 18 de la Ley 7428). En el refrendo, la Contraloría tiene
              treinta días hábiles para aprobar; si no se pronuncia, opera el silencio positivo y la
              Administración puede ejecutar el acto (arts. 20 y 30). Sin refrendo, el acto o contrato
              no surte efectos jurídicos. Ambas categorías de actos —improbación presupuestaria y
              negativa de refrendo— tienen una particularidad clave: el artículo 34 de la Ley 7428 los
              declara firmes desde que se dictan, sin recurso administrativo. La impugnación va
              directamente a la jurisdicción contencioso-administrativa.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cuáles son las sanciones que puede imponer la Contraloría a un funcionario?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La Contraloría no impone la sanción directamente: la recomienda al órgano competente con
              criterio técnico vinculante, y este debe cumplirla en el plazo que ella fije (art. 68 de
              la Ley 7428). El catálogo de sanciones está en el artículo 113 de la Ley 8131: amonestación
              escrita; amonestación escrita publicada en La Gaceta; suspensión sin goce de salario de
              ocho a treinta días; y destitución sin responsabilidad. Los hechos que las generan están
              en el artículo 110 (lista extensa: uso indebido de fondos, omisión de control,
              contrataciones sin procedimiento, daño al patrimonio, entre otros). La responsabilidad
              disciplinaria prescribe en cinco años (art. 71). Además, si los hechos configuran daño
              líquido o fácilmente liquidable, la Contraloría dicta resolución de reintegro cuya
              certificación es título ejecutivo (art. 76 de la Ley 7428).
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo se impugna un acto de la Contraloría?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Depende del acto. Los actos definitivos que lesionen derechos subjetivos o intereses
              legítimos están sujetos al régimen común de impugnación: LGAP en sede administrativa y
              CPCA en sede judicial (art. 33 de la Ley 7428). Pero el artículo 34 exceptúa expresamente
              tres categorías: los actos en procedimientos de contratación administrativa, los de
              refrendo de contratos y los de materia presupuestaria; estos quedan firmes desde que se
              dictan, sin recurso administrativo, y se impugnan directamente ante la jurisdicción
              contencioso-administrativa. El agotamiento de la vía administrativa es facultativo
              (art. 31 del CPCA). Allí caben las pretensiones del artículo 42 del CPCA —anulación,
              restablecimiento, indemnización— y, cuando hay urgencia, medidas cautelares (art. 19) para
              suspender los efectos del acto mientras se resuelve el fondo.
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
        jurídica integral, con énfasis en empleo público y en las interfaces entre la
        jurisdicción laboral y la contencioso-administrativa.
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


  /* ═══════════════════════════════════════════════════════════════
     ÁREAS EMERGENTES Y REGULATORIAS
     ═══════════════════════════════════════════════════════════════ */

  "compliance-publico-anticorrupcion": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          La Ley contra la Corrupción y el Enriquecimiento Ilícito en la Función Pública (Ley
          N.° 8422) construyó en Costa Rica un régimen articulado en tres planos: un régimen
          preventivo (prohibiciones, incompatibilidades, declaración jurada de bienes), un
          régimen sancionatorio administrativo que se tramita ante la Contraloría y la propia
          Administración, y un régimen penal específico con delitos contra los deberes de la
          función pública. Sobre ese armazón, las reformas recientes han endurecido la
          persecución: la Ley N.° 10437 (2024) protege a quienes denuncian; la Ley N.° 10523
          (2024) reforzó la verificación de las declaraciones cruzando información del Banco
          Central sobre beneficiarios finales; la Ley N.° 10691 (2025) reforzó el régimen de
          prescripción; y la Ley N.° 10373 (2023, OCDE) incorporó todo un capítulo nuevo de
          medidas cautelares inmediatas, decomiso y destino del dinero decomisado.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Como abogados anticorrupción en Costa Rica, en Corporación GC asesoramos a funcionarios
          públicos sujetos a declaración jurada e incompatibilidades, a empresas y consorcios que
          contratan con el Estado, y a quienes resultan investigados o denunciados —en sede
          administrativa ante la CGR o en sede penal ante el Ministerio Público— por delitos contra
          los deberes de la función pública. Los plazos cortos del capítulo VI —veinticuatro horas
          la UIF, diez días hábiles el Ministerio Público, cinco días hábiles el juez— abren o
          cierran puertas procesales, y la defensa eficaz se diseña dentro de esa ventana.
        </p>
      </section>

      <Instrumento titulo="Deber de probidad, prohibiciones e incompatibilidades" fundamento="Ley 8422, arts. 2, 3, 4, 14, 17, 18 y 19">
        <p>
          La Ley 8422 considera servidor público a toda persona que presta servicios en órganos y
          entes de la Administración Pública, estatal y no estatal —en virtud de un acto de
          investidura y con independencia del carácter remunerado o permanente de la actividad—,
          y extiende sus disposiciones a apoderados, administradores, gerentes y representantes
          legales de personas jurídicas que custodien, administren o exploten fondos, bienes o
          servicios de la Administración Pública, por cualquier título o modalidad de gestión
          (art. 2). El deber de probidad obliga a orientar la gestión a la satisfacción del
          interés público, con rectitud, buena fe e imparcialidad (art. 3); su infracción es
          justa causa para la separación del cargo sin responsabilidad patronal (art. 4).
        </p>
        <p>
          El régimen preventivo establece tres anillos. Primero, la prohibición de ejercer
          profesiones liberales para una lista de altos funcionarios y jefaturas técnicas
          (art. 14), con su compensación económica (art. 15). Segundo, la prohibición de
          desempeñar simultáneamente más de un cargo público remunerado (art. 17), con las
          salvedades de docencia, sesiones de junta directiva sin superposición horaria y
          autorización de la CGR para más de tres puestos colegiados. Tercero, las
          incompatibilidades del artículo 18 —cargos directivos en empresas privadas,
          representación, apoderamiento y participación accionaria en entidades que compitan
          con la institución o que reciban recursos del Estado—, levantables solo de manera
          fundada por la CGR (art. 19).
        </p>
      </Instrumento>

      <Instrumento titulo="Declaración jurada de bienes y su verificación cruzada con beneficiarios finales" fundamento="Ley 8422, arts. 21, 22, 29, 34 y 36">
        <p>
          La obligación de declarar la situación patrimonial alcanza a un universo amplio:
          presidente y vicepresidentes; diputados; ministros y viceministros; magistrados,
          jueces y fiscales; contralor y subcontralor; defensor de los habitantes; procurador
          general; regulador general; superintendentes e intendentes de SUGEF, SUGEVAL,
          SUGESE y SUPEN; presidentes ejecutivos, gerentes, subgerentes y auditores internos
          de toda la Administración Pública y empresas públicas; alcaldes y regidores
          municipales; y, por el reglamento, todos los empleados que custodien, administren,
          fiscalicen o recauden fondos públicos, los que aprueben erogaciones, los empleados
          de aduanas y quienes tramitan licitaciones (art. 21). La declaración inicial se
          presenta dentro de los treinta días hábiles del nombramiento; la anual, en los
          primeros quince días hábiles de mayo; y la final, en los treinta días hábiles
          posteriores al cese (art. 22). Su contenido se detalla en el artículo 29: inmuebles
          y muebles con sus citas registrales, participaciones societarias, bonos, certificados,
          cuentas, fondos de pensión, salarios y rentas, activos intangibles, pasivos y todo
          otro interés patrimonial.
        </p>
        <p>
          La Ley N.° 10523 de 2024 reformó el artículo 34 para reforzar la verificación: la
          CGR informa al Banco Central, al menos una vez al año, los nombres y las cédulas de
          todos los funcionarios obligados; el Banco Central, en quince días hábiles, debe
          remitir un informe que detalle las personas o estructuras jurídicas en las que esos
          funcionarios aparezcan como accionistas o beneficiarios finales —con fechas de inicio
          y de fin—, a partir del Registro de Transparencia y Beneficiarios Finales. Esa
          información es confidencial frente a terceros, pero permite a la Contraloría
          contrastar la realidad patrimonial con lo declarado y detectar simulación (art. 32).
          Quien tenga una declaración jurada pendiente no puede acceder a un nuevo cargo público
          (art. 36).
        </p>
      </Instrumento>

      <Instrumento titulo="Régimen de obsequios, puerta giratoria y prohibiciones tras el cese del cargo" fundamento="Ley 8422, arts. 20 y 53">
        <p>
          Los obsequios recibidos por un funcionario público como gesto de cortesía o costumbre
          diplomática son bienes de la Nación cuando su valor supera un salario base, según la
          definición de la Ley N.° 7337; se exceptúan condecoraciones y premios honoríficos,
          culturales, académicos o científicos (art. 20). La apropiación o retención de
          obsequios que el funcionario debió entregar al Estado es delito y se sanciona con
          prisión de uno a dos años (art. 54).
        </p>
        <p>
          El artículo 53 regula la conocida «puerta giratoria»: dentro del año siguiente a la
          celebración de un contrato administrativo mayor o igual que el límite para la
          licitación pública en la entidad donde sirvió, el funcionario no puede aceptar empleo
          remunerado ni participación accionaria con la persona física o jurídica favorecida si
          tuvo participación en alguna fase del diseño, las especificaciones técnicas, los
          planos, la selección, la adjudicación, los recursos administrativos o la fiscalización
          de la ejecución. La sanción es de cien a ciento cincuenta días multa.
        </p>
      </Instrumento>

      <Instrumento titulo="Responsabilidad administrativa y competencia vinculante de la CGR" fundamento="Ley 8422, arts. 38, 39, 40, 41, 43 y 44">
        <p>
          Las causales de responsabilidad administrativa se enumeran en el artículo 38: incumplir
          prohibiciones e incompatibilidades; desplegar actividades que comprometan la
          imparcialidad o generen conflicto de intereses; favorecer al cónyuge o pariente
          hasta el tercer grado; debilitar el control interno; infringir el régimen de
          obsequios; asesorar con inexcusable negligencia; no presentar declaración jurada
          previo apercibimiento; faltar a la veracidad o simular en la declaración; violar la
          confidencialidad de las declaraciones; percibir retribuciones indebidas; incumplir la
          prohibición del artículo 17, entre otras. Las sanciones son tres: amonestación escrita
          publicada en La Gaceta, suspensión sin goce de salario de quince a treinta días y
          separación del cargo sin responsabilidad patronal o cancelación de credencial cuando
          corresponda (art. 39).
        </p>
        <p>
          La potestad disciplinaria la ejerce el órgano competente en cada entidad, pero la
          Contraloría también puede tramitar el procedimiento y, en materia de Hacienda Pública,
          requerir vinculantemente a la entidad la aplicación de la sanción que determine
          (art. 40). Las infracciones requieren dolo o culpa grave; se ponderan la lesión a los
          intereses económicos, el resultado obtenido por el autor, el impacto en el servicio
          público, la reincidencia en los cuatro años anteriores y el rango y funciones del
          servidor (art. 41). Cuando la infracción se atribuye a un miembro de los Supremos
          Poderes, la CGR informa al órgano que constitucionalmente puede sancionarlo (art. 43).
          La prescripción remite al artículo 43 de la Ley General de Control Interno y al
          artículo 71 de la Ley Orgánica de la CGR (art. 44).
        </p>
      </Instrumento>

      <Instrumento titulo="Delitos contra los deberes de la función pública" fundamento="Ley 8422, arts. 45 a 60">
        <p>
          El capítulo V tipifica el núcleo penal especial de la corrupción en Costa Rica:
          enriquecimiento ilícito, con prisión de tres a seis años (art. 45); falsedad en la
          declaración jurada, de seis meses a un año (art. 46); legislación o administración en
          provecho propio, de uno a ocho años (art. 48); sobreprecio irregular en la adquisición,
          enajenación o concesión de bienes, obras o servicios, de tres a diez años (art. 49);
          falsedad en la recepción de bienes y servicios contratados, de dos a ocho años, con
          agravante de un tercio cuando se entorpece el servicio (art. 50); pago irregular de
          contratos administrativos, de uno a tres años (art. 51); y tráfico de influencias,
          de dos a cinco años, con agravante de un tercio cuando la influencia proviene del
          presidente, vicepresidentes, ministros, contralor, fiscal general, defensor o
          dirigentes nacionales de partidos políticos (art. 52).
        </p>
        <p>
          Completan el catálogo el reconocimiento ilegal de beneficios laborales (art. 56), la
          influencia en contra de la Hacienda Pública (art. 57, de dos a ocho años), el fraude
          de ley en la función administrativa (art. 58, de uno a cinco años) y el soborno
          transnacional (art. 55, de cuatro a doce años, hasta catorce cuando el funcionario
          extranjero ejecuta un acto contrario a sus deberes, con multa de hasta quince veces
          el valor del beneficio cuando el autor es persona física). Como pena accesoria, el
          juez puede imponer inhabilitación para empleo o cargo público de uno a diez años
          (art. 59). La violación de la privacidad de las declaraciones juradas se sanciona
          con prisión de tres a cinco años (art. 60).
        </p>
      </Instrumento>

      <Instrumento titulo="Persecución penal moderna: medidas cautelares inmediatas, decomiso y prescripción reforzada" fundamento="Ley 8422, arts. 62, 63, 65, 67, 68 y 70 (adicionados por la Ley 10373/2023 OCDE; reformados por la Ley 10691/2025)">
        <p>
          La Ley N.° 10373 de 2023 adicionó a la Ley 8422 todo un capítulo VI sobre persecución
          penal moderna. El Ministerio Público puede usar la inteligencia financiera de la
          Unidad de Inteligencia Financiera del Instituto Costarricense sobre Drogas como fuente
          de información, con todas las facultades de la Ley N.° 7786 (art. 63), y solicitar al
          juez —en cualquier momento, sin notificación ni audiencia previas— medidas cautelares
          para preservar bienes, productos o instrumentos relacionados con el eventual comiso
          (art. 65). El artículo 67 estableció el resguardo cautelar inmediato: cuando la UIF lo
          comunica formalmente, las entidades financieras y el Registro Nacional deben congelar
          o inmovilizar productos, dinero, activos y bienes muebles o inmuebles vinculados a la
          investigación, e informar a la UIF en veinticuatro horas; el Ministerio Público tiene
          diez días hábiles para solicitar al juez la medida formal, que se resuelve en cinco
          días hábiles. El decomiso opera sobre todo bien o instrumento utilizado o proveniente
          del delito, incluidas acciones, aportes de capital y patrimonio de personas jurídicas
          vinculadas (art. 68).
        </p>
        <p>
          El destino del dinero decomisado (art. 70) está redistribuido para fortalecer la
          persecución: el Instituto Costarricense sobre Drogas administra los fondos y
          transfiere el 30% al Ministerio Público para investigación y combate de la corrupción,
          30% a la sección especializada del OIJ, 15% al propio ICD y 25% al Área de Procuraduría
          de Ética Pública. La Ley N.° 10691 de 2025 reformó el artículo 62 de la Ley 8422: la
          interrupción de la prescripción reinicia íntegros los plazos del CPP, sin reducción;
          se añaden causales de interrupción —declaratoria de ilegalidad de la función
          administrativa y anulación de actos y contratos vinculados—; se suspende el plazo
          mientras dure una asistencia legal internacional; y el plazo de prescripción de los
          delitos del título XV del Código Penal y del capítulo V de la Ley 8422 remite al
          inciso d) del artículo 31 del CPP.
        </p>
      </Instrumento>

      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre compliance público y anticorrupción
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Quiénes están obligados a presentar la declaración jurada de bienes ante la Contraloría?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El artículo 21 de la Ley 8422 obliga a un universo amplio: presidente y
              vicepresidentes, diputados, ministros y viceministros, magistrados, jueces y
              fiscales, contralor y subcontralor, defensor, procurador general, regulador
              general, superintendentes e intendentes de SUGEF, SUGEVAL, SUGESE y SUPEN,
              presidentes ejecutivos, gerentes, subgerentes, auditores internos, alcaldes y
              regidores municipales. Adicionalmente, el reglamento extiende la obligación a
              quienes custodien, administren, fiscalicen o recauden fondos públicos, aprueben
              erogaciones, trabajen en aduanas o tramiten licitaciones; y a apoderados,
              gerentes y representantes de personas jurídicas privadas que administren, custodien
              o sean concesionarios de fondos, bienes o servicios públicos (art. 2, párrafo 2).
              Quien tenga una declaración pendiente no puede acceder a un nuevo cargo público
              (art. 36).
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Puede la Contraloría obligar a un funcionario a declarar aun sin estar en la lista del artículo 21?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Sí. El artículo 23 de la Ley 8422 autoriza a la Contraloría —y al Ministerio
              Público, por medio del fiscal general— a exigir, por orden singular y en cualquier
              momento, la declaración jurada a todo funcionario público que administre o custodie
              fondos públicos. Desde la fecha de la orden, el funcionario queda sujeto a los
              plazos, términos y sanciones de la ley. Esto es decisivo cuando hay denuncia o
              indicios de enriquecimiento que no encajan con la lista cerrada del artículo 21.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Pueden congelar las cuentas y bienes de una empresa o un funcionario antes del juicio?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Sí. Desde la Ley N.° 10373 de 2023, el artículo 67 de la Ley 8422 obliga a las
              entidades financieras y al Registro Nacional —cuando la UIF lo comunica
              formalmente— a congelar o inmovilizar de inmediato productos financieros, dinero,
              activos y bienes muebles o inmuebles vinculados a la investigación, e informar a
              la UIF en veinticuatro horas. El Ministerio Público tiene diez días hábiles para
              solicitar la medida cautelar judicial, y el juez resuelve en cinco días hábiles
              (art. 67). La defensa oportuna en ese plazo —para impugnar la causa de la medida o
              ajustar su alcance— es la diferencia entre conservar liquidez operativa y verla
              paralizada por meses.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿En qué se diferencia el procedimiento ante la CGR del procedimiento penal?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              El procedimiento ante la CGR es administrativo: declara responsabilidad
              administrativa con sanciones del artículo 39 (amonestación, suspensión de quince a
              treinta días, separación del cargo o cancelación de credencial), aplica el régimen
              de la Ley General de la Administración Pública y exige dolo o culpa grave (art. 41).
              El procedimiento penal lo lleva el Ministerio Público y se funda en los delitos del
              capítulo V de la Ley 8422 (arts. 45 a 60) y del título XV del Código Penal, con
              penas de prisión que llegan hasta catorce años en soborno transnacional agravado
              (art. 55) y diez años en sobreprecio irregular (art. 49); puede imponerse
              inhabilitación de uno a diez años (art. 59). Las dos vías pueden tramitarse en
              paralelo y la CGR está obligada a denunciar ante las autoridades judiciales los
              hechos que considere delito (art. 40, párrafo final).
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "gobierno-digital-inteligencia-artificial-datos": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          La transformación digital del Estado costarricense y la implementación de inteligencia
          artificial en la administración pública plantean desafíos jurídicos sin precedentes en
          materia de legalidad, debido proceso y protección de datos personales. La Estrategia
          Nacional de Inteligencia Artificial 2024-2027 (ENIA), lanzada en octubre 2024 como la
          primera de su tipo en Centroamérica, junto con tres proyectos de ley de IA en trámite
          legislativo, configuran un marco regulatorio emergente que requiere asesoría jurídica
          especializada.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Corporación GC es la única firma en Costa Rica que combina experiencia profunda en
          derecho administrativo constitucional con especialización en gobernanza de IA,
          transparencia algorítmica y cumplimiento de protección de datos en el sector público.
        </p>
      </section>

      <Instrumento titulo="Protección de datos personales ante PRODHAB" fundamento="Ley N.° 8968; Decreto N.° 37554-JP">
        <p>
          La Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales
          (Ley N.° 8968, 2011) y su Reglamento (Decreto N.° 37554-JP) establecen las obligaciones
          de las instituciones públicas y empresas privadas que tratan datos personales. La PRODHAB
          (Agencia de Protección de Datos de los Habitantes) es la autoridad de enforcement con
          potestad sancionatoria.
        </p>
        <p>
          Asesoramos en el registro de bases de datos ante PRODHAB, la implementación de protocolos
          de consentimiento informado, la gestión de derechos ARCO (acceso, rectificación, cancelación
          y oposición), y la defensa en procedimientos sancionatorios por incumplimiento. También
          asesoramos sobre el Proyecto N.° 23.097 que busca alinear la Ley N.° 8968 con el estándar
          RGPD europeo.
        </p>
      </Instrumento>

      <Instrumento titulo="Gobernanza de IA en la administración pública" fundamento="ENIA 2024-2027; Exps. 23.771, 23.919, 24.484">
        <p>
          La ENIA contempla la implementación de IA en más de 78 instituciones públicas, con más
          de 400 aplicaciones proyectadas por programa de capacitación. Tres proyectos de ley
          regulan distintos aspectos: el Expediente N.° 23.771 (regulación general de IA), el
          Expediente N.° 23.919 (promoción responsable de IA con la Comisión Interinstitucional
          CIDIA), y el Expediente N.° 24.484 (enfoque basado en riesgo similar al EU AI Act).
        </p>
        <p>
          Asesoramos a instituciones públicas en el diseño de marcos de gobernanza algorítmica
          que cumplan con los principios de legalidad (art. 11 CP), debido proceso (art. 39 CP),
          motivación del acto administrativo (art. 136 LGAP) y rendición de cuentas (art. 11 LGAP),
          asegurando que las decisiones administrativas automatizadas sean impugnables y
          transparentes.
        </p>
      </Instrumento>

      <Instrumento titulo="Impugnación de decisiones algorítmicas" fundamento="Arts. 11, 39 y 41 CP; CPCA">
        <p>
          Cuando una decisión administrativa automatizada vulnera derechos fundamentales — ya sea
          por sesgo algorítmico, opacidad en el proceso decisorio o ausencia de motivación — el
          afectado tiene derecho a impugnarla. El artículo 39 de la Constitución Política garantiza
          el debido proceso, y el artículo 136 de la LGAP exige la motivación de los actos
          administrativos, lo cual incluye la explicabilidad de las decisiones algorítmicas.
        </p>
        <p>
          Litigamos impugnaciones constitucionales (recursos de amparo ante Sala IV) y
          contencioso-administrativas (demandas ante el TCA conforme al CPCA) contra decisiones
          algorítmicas que carezcan de transparencia, que discriminen o que vulneren el derecho
          a la tutela judicial efectiva.
        </p>
      </Instrumento>

      <Instrumento titulo="Gobierno digital y Ley 9943" fundamento="Ley N.° 9943">
        <p>
          La Ley de la Agencia Nacional de Gobierno Digital (Ley N.° 9943, 2021) establece el
          marco institucional para la transformación digital del Estado. La Agencia coordina la
          implementación de servicios digitales, interoperabilidad de datos entre instituciones
          y estándares de ciberseguridad pública. La presión de la OCDE para modernizar PRODHAB
          y fortalecer la protección de datos acentúa la urgencia de cumplimiento.
        </p>
        <p>
          Asesoramos a empresas de BPO, servicios compartidos, fintechs y healthtechs que
          procesan datos públicos en el cumplimiento de las obligaciones derivadas de la
          Ley N.° 9943 y la Ley N.° 8968, y representamos ante PRODHAB en investigaciones
          por tratamiento indebido de datos.
        </p>
      </Instrumento>

      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre IA y protección de datos
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Puede una institución pública tomar decisiones automatizadas con IA?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Sí, pero debe cumplir con los principios constitucionales de legalidad (art. 11 CP),
              debido proceso (art. 39 CP) y motivación del acto administrativo (art. 136 LGAP).
              Esto implica que la decisión algorítmica debe ser explicable, impugnable y no
              discriminatoria. La ENIA 2024-2027 promueve la implementación de IA en instituciones
              públicas, pero el marco constitucional vigente exige que toda decisión administrativa
              que afecte derechos tenga fundamento jurídico identificable y sea susceptible de
              control jurisdiccional.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué sanciones impone PRODHAB por incumplimiento?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La PRODHAB puede imponer sanciones que incluyen apercibimiento, suspensión de
              operaciones de tratamiento de datos y multas conforme a la Ley N.° 8968. Los
              procedimientos sancionatorios de PRODHAB son procedimientos administrativos
              sujetos a las garantías de la LGAP y susceptibles de impugnación ante el TCA.
              Corporación GC defiende a empresas e instituciones en estos procedimientos.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "defensa-regulatoria-sectorial": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          Las autoridades reguladoras económicas del país ejercen potestades sancionatorias y de
          intervención sobre amplios sectores de la actividad económica. Cada una se rige por su
          propia ley orgánica y por un régimen disciplinario propio, con tipos de infracción,
          plazos, criterios de graduación de la sanción y procedimientos especiales: la Comisión
          para Promover la Competencia (Coprocom) bajo la Ley 7472 reformada por la Ley 9736 de
          Fortalecimiento de las Autoridades de Competencia, las cuatro superintendencias del
          sistema financiero —SUGEF, SUGEVAL, SUGESE y SUPEN— bajo la dirección del Consejo
          Nacional de Supervisión del Sistema Financiero (Conassif), el Ministerio de Salud bajo
          la Ley General de Salud (Ley 5395), el Servicio Nacional de Salud Animal (Senasa, Ley
          8495) y el Servicio Fitosanitario del Estado (SFE, Ley 7664).
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Como abogados en defensa regulatoria sectorial, en Corporación GC representamos a
          empresas y a sus directivos en cada fase del procedimiento sancionatorio: respuesta al
          traslado de cargos, evacuación de la prueba, alegatos finales, recursos administrativos,
          amparo ante medidas cautelares desproporcionadas y litigio contencioso contra el acto
          final firme. La diferencia se construye en el primer escrito: cada sector tiene su
          propio régimen de plazos cortos y de cargas de la prueba que, mal manejados, cierran la
          puerta de la defensa.
        </p>
      </section>

      <Instrumento titulo="Sector competencia: defensa ante la Comisión para Promover la Competencia (Coprocom)" fundamento="Ley 7472, arts. 11, 12, 13, 14, 15 y 21; Ley 9736 de Fortalecimiento de las Autoridades de Competencia">
        <p>
          La Coprocom es órgano de máxima desconcentración adscrito al Ministerio de Economía,
          Industria y Comercio, con independencia administrativa, presupuestaria y funcional
          (art. 21 de la Ley 7472). Investiga y sanciona dos grandes categorías de prácticas: las
          monopolísticas absolutas del artículo 11 —acuerdos entre competidores para fijar precios,
          limitar producción, dividir mercados, coordinar ofertas en licitaciones o intercambiar
          información con esos fines, todos nulos de pleno derecho— y las monopolísticas relativas
          del artículo 12 —ventas atadas, fijación de precios de reventa, depredación, descuentos
          discriminatorios, subsidios cruzados, estrangulamiento de márgenes, entre otras—, que
          requieren acreditar poder sustancial en el mercado relevante (arts. 13, 14 y 15).
        </p>
        <p>
          La Ley 9736 reorganizó el régimen de procedimiento y sanción de la Coprocom, incorporó
          el programa de clemencia y reforzó las potestades de investigación. La defensa eficaz
          ante la Coprocom se diseña sobre tres ejes: la delimitación correcta del mercado
          relevante y la prueba del poder sustancial, la valoración técnica de los efectos
          procompetitivos o de eficiencia que admite el último párrafo del artículo 12, y la
          ponderación oportuna del acogimiento al programa de clemencia cuando proceda.
        </p>
      </Instrumento>

      <Instrumento titulo="Sector financiero: defensa ante SUGEF y el Conassif" fundamento="Ley 7558, arts. 115, 116, 119, 131, 135, 136, 139, 155, 155 bis, 155 ter y 155 quinquies">
        <p>
          La Superintendencia General de Entidades Financieras es órgano de desconcentración
          máxima del Banco Central (art. 115 de la Ley 7558) y supervisa toda actividad de
          intermediación financiera definida en el artículo 116. El régimen de irregularidad
          financiera del artículo 136 distingue tres grados: el grado uno (inestabilidad leve,
          corregible con medidas de corto plazo), el grado dos (que exige plan de saneamiento
          aprobado por la Superintendencia conforme al artículo 139.b) y el grado tres
          (intervención de la entidad por el Conassif, según el artículo 139.c y los supuestos
          del artículo 136.d, incluida la operación fraudulenta o ilegal, la suspensión de pagos,
          el incumplimiento de suficiencia patrimonial o la pérdida de más de la mitad del
          patrimonio).
        </p>
        <p>
          El régimen sancionatorio del artículo 155 escalona las multas: muy graves del uno al
          dos por ciento del patrimonio contable, graves del cero coma cinco al uno por ciento,
          y leves hasta el cero coma cinco por ciento. El artículo 155 bis permite sancionar
          directamente a los miembros del órgano de dirección, gerentes, subgerentes,
          representantes legales y auditores internos hasta con cien salarios base e inhabilitar
          a los responsables hasta por tres años; el 155 ter alcanza a los auditores externos
          con multas de hasta doscientos salarios base y suspensión del registro hasta por cinco
          años. La responsabilidad administrativa prescribe en cuatro años (art. 155 quinquies)
          y el procedimiento sancionador no podrá superar dos años.
        </p>
      </Instrumento>

      <Instrumento titulo="Sector valores: defensa ante SUGEVAL" fundamento="Ley 7732, arts. 3, 102, 103, 157, 158, 159, 160, 163 y 167">
        <p>
          La Superintendencia General de Valores es órgano de máxima desconcentración del Banco
          Central (art. 3 de la Ley 7732) y vela por la transparencia de los mercados, la correcta
          formación de precios y la protección de los inversionistas. Los regímenes más
          fiscalizados son el de información privilegiada (arts. 102 y 103) —que prohíbe a quienes
          tengan acceso a información concreta no pública susceptible de afectar precios,
          operarla por sí o por interpósita persona— y el de normas de conducta de los puestos
          de bolsa, sociedades administradoras de fondos y demás intermediarios (arts. 106 a 114).
        </p>
        <p>
          Las infracciones se gradúan en muy graves, graves y leves (arts. 157, 159 y 161). Las
          muy graves se sancionan con multas que pueden alcanzar el cinco por ciento del patrimonio
          de la sociedad, doscientos salarios base, suspensión de actividades por cinco años o
          revocación de la autorización (art. 158); las graves, multas de hasta el dos por ciento
          del patrimonio o cien salarios base (art. 160). El artículo 163 permite sancionar
          adicionalmente a directivos, personeros y empleados con suspensión, separación del
          cargo e inhabilitación de hasta cinco años. El procedimiento se rige por la Ley 7558
          y supletoriamente por la LGAP (art. 167).
        </p>
      </Instrumento>

      <Instrumento titulo="Sector seguros: defensa ante SUGESE" fundamento="Ley 8653, arts. 28, 29, 30, 32, 35, 36, 37, 38, 39, 41, 42 y 44">
        <p>
          La Superintendencia General de Seguros es órgano de máxima desconcentración del Banco
          Central (art. 28 de la Ley 8653) y vela por la estabilidad y el eficiente funcionamiento
          del mercado de seguros. El sancionador tiene un régimen propio: infracciones muy graves
          con multas hasta del cinco por ciento del patrimonio o de cuatrocientos salarios base
          según el sujeto, suspensión de actividades por hasta dos años y cancelación de la
          autorización por hasta cinco años (arts. 36 y 37); graves con multas hasta del dos por
          ciento del patrimonio o doscientos salarios base, suspensión de hasta dos años (arts.
          38 y 39). Las sanciones adicionales a miembros de órgano de dirección y funcionarios
          se gradúan según dolo o culpa (art. 41).
        </p>
        <p>
          La oferta pública de seguros sin autorización tiene un régimen sancionador especial:
          multa hasta de mil veces el salario base por cada infracción (art. 42). La cancelación
          de la autorización y la liquidación se rigen por los artículos 32 y siguientes; los
          casos de quiebra, por el artículo 34. La responsabilidad administrativa prescribe en
          cuatro años (art. 44) y el procedimiento sancionador no puede superar dos años.
        </p>
      </Instrumento>

      <Instrumento titulo="Sector pensiones: defensa ante SUPEN" fundamento="Ley 7983, arts. 33 a 60">
        <p>
          La Superintendencia de Pensiones es órgano de máxima desconcentración del Banco Central
          (art. 33 de la Ley 7983) y supervisa al Régimen Obligatorio y Voluntario de Pensiones
          Complementarias, al Régimen de Invalidez, Vejez y Muerte de la CCSS, a los regímenes
          especiales con leyes propias y a los Fondos de Capitalización Laboral. Su régimen
          sancionador clasifica las infracciones en muy graves, graves y leves (arts. 46, 48 y
          50), con multas que llegan hasta cinco veces el beneficio patrimonial obtenido, el
          cinco por ciento del patrimonio o doscientos salarios base, y suspensión o revocatoria
          de la autorización de funcionamiento (art. 47).
        </p>
        <p>
          La normativa contempla además medidas precautorias específicas —corrección, plan de
          saneamiento e intervención administrativa— escalonadas según el grado de irregularidad
          financiera de la entidad (arts. 41 y 42). La defensa eficaz exige conocer la zona
          intermedia entre el ámbito SUPEN y el ámbito SUGEF para las entidades que integran
          grupos financieros y para los regímenes que comparten estructura institucional con
          otras superintendencias.
        </p>
      </Instrumento>

      <Instrumento titulo="Otros sectores: salud humana, salud animal y fitosanitaria" fundamento="Ley General de Salud (5395) arts. 358, 359, 363 y 378; Ley del Senasa (8495) arts. 78 a 80; Ley 7664 arts. 75 a 77">
        <p>
          El Ministerio de Salud ejerce potestades de policía sanitaria ordenando medidas
          especiales como retención, decomiso, desnaturalización, destrucción de bienes, clausura
          de establecimientos, cancelación de permisos, aislamiento de personas y sacrificio de
          animales (arts. 356 a 366 de la Ley 5395), además del régimen de multas del artículo
          378 modulado por salarios base y de los delitos contra la salud de los artículos 370
          a 384. El Senasa cuenta con su propio Tribunal de Procedimiento Administrativo
          Sancionador (arts. 99 a 104 de la Ley 8495) y un régimen de multas escalonado de uno
          a cincuenta salarios base de un profesional licenciado universitario (art. 80), con
          medidas sanitarias que incluyen el cierre de establecimientos, decomiso, cuarentena
          y sacrificio (art. 89).
        </p>
        <p>
          El Servicio Fitosanitario del Estado tipifica contravenciones específicas —obstrucción
          a las autoridades (art. 75), falta de inscripción y registro de sustancias (art. 76),
          falta de autorización para reenvasar o reempacar (art. 77)— y delitos contra la sanidad
          vegetal (arts. 68 a 73). La defensa ante estos reguladores requiere actuar dentro de
          plazos cortos de los procedimientos sumarios y conocer las particularidades de la
          policía sanitaria, distinta del procedimiento ordinario de la LGAP.
        </p>
      </Instrumento>

      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre defensa regulatoria sectorial
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo es realmente el procedimiento sancionatorio ante una superintendencia financiera?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Comienza con un acto de apertura del procedimiento donde la Superintendencia
              traslada los cargos al investigado, le otorga un plazo para defenderse, ofrecer
              prueba y acceder al expediente. Aplican supletoriamente las reglas del libro
              segundo de la LGAP. La sanción del superintendente tiene recurso de revocatoria
              ante el propio órgano y de apelación ante el Conassif (artículos 152 y 153 de la
              Ley 7558 para SUGEF y normas paralelas en las demás superintendencias). La
              responsabilidad administrativa prescribe en cuatro años (art. 155 quinquies de la
              Ley 7558 para el sector financiero, art. 155 quinquies de la 7732 para valores,
              art. 44 de la Ley 8653 para seguros), y el procedimiento sancionador no puede
              superar dos años.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué pasa si la Coprocom investiga a mi empresa por un acuerdo con competidores?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Si los hechos investigados configuran alguno de los supuestos del artículo 11 de
              la Ley 7472 —fijación concertada de precios, limitación de producción, división
              del mercado, coordinación en licitaciones, abstención coordinada de comprar o
              vender, o intercambio de información con esos fines—, la conducta es una práctica
              monopolística absoluta, declarada nula de pleno derecho y sancionable conforme al
              régimen reorganizado por la Ley 9736. Tres escenarios deben evaluarse en las
              primeras setenta y dos horas: la viabilidad del acogimiento al programa de
              clemencia incorporado por la Ley 9736, la solidez probatoria del expediente
              administrativo y la posibilidad de demostrar efectos procompetitivos o eficiencias
              que requieran abandonar la calificación de absoluta para entrar al análisis de
              relativas, donde sí cabe defensa por mercado relevante y poder sustancial.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Pueden sancionar directamente a los directivos de mi empresa, además de la sociedad?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Sí, y es una de las características más subestimadas del régimen regulatorio
              costarricense. El artículo 155 bis de la Ley 7558 permite sancionar a miembros del
              órgano de dirección, gerente, subgerentes, representantes legales y auditor interno
              de las entidades supervisadas por SUGEF, con multas de hasta cien salarios base e
              inhabilitación hasta de tres años. El artículo 163 de la Ley 7732 prevé en valores
              suspensión de hasta un año, separación del cargo e inhabilitación de hasta cinco
              años. El artículo 41 de la Ley 8653 hace lo propio en seguros, con inhabilitación
              de hasta cinco años. Cuando se trata de hechos culposos las penas son distintas de
              las dolosas, y por eso una defensa técnicamente correcta debe disociar desde el
              inicio la conducta de la entidad de la conducta de cada directivo.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿La sanción del regulador pone fin al asunto o se puede llevar al contencioso?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La sanción firme del regulador agota la vía administrativa, pero se impugna ante
              la jurisdicción contencioso-administrativa con las pretensiones del artículo 42 del
              CPCA (anulación, restablecimiento de la situación jurídica, indemnización por daños
              y perjuicios) y, cuando hay urgencia y peligro de daño irreparable, con medidas
              cautelares del artículo 19. Adicionalmente, cuando la sanción vulnera derechos
              fundamentales —debido proceso, derecho de defensa, principio de proporcionalidad,
              non bis in idem—, procede el recurso de amparo ante la Sala Constitucional (Ley
              7135, arts. 29 a 56). El ejercicio de la potestad sancionatoria es independiente
              de las demás acciones civiles o penales (art. 168 de la Ley 7732), por lo que un
              mismo hecho puede generar procesos paralelos que deben coordinarse en una
              estrategia única.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "regulacion-ambiental-mercados-carbono": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          El derecho ambiental administrativo costarricense se sustenta en el artículo 50 de la
          Constitución Política, que reconoce el derecho a un ambiente sano y ecológicamente
          equilibrado, la Ley Orgánica del Ambiente (Ley N.° 7554) y la Ley Forestal
          (Ley N.° 7575). La Sala Constitucional ha intensificado su activismo ambiental,
          y la evaluación de impacto ambiental ante SETENA se ha convertido en un procedimiento
          administrativo de alta complejidad.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Paralelamente, el Plan Nacional de Descarbonización 2019-2050 y los mercados de carbono
          administrados por FONAFIFO abren oportunidades para empresas que buscan estructurar
          créditos de carbono y cumplir con el Mecanismo de Ajuste en Frontera por Carbono (CBAM)
          de la Unión Europea.
        </p>
      </section>

      <Instrumento titulo="Evaluación de impacto ambiental ante SETENA" fundamento="Ley N.° 7554, arts. 17-18; Decreto 31849-MINAE-S-MOPT-MAG-MEIC">
        <p>
          La Secretaría Técnica Nacional Ambiental (SETENA) evalúa el impacto ambiental de
          actividades, obras y proyectos conforme a los artículos 17 y 18 de la Ley N.° 7554
          y el Reglamento General sobre los Procedimientos de Evaluación de Impacto Ambiental
          (Decreto 31849). Todo proyecto que pueda alterar o destruir elementos del ambiente
          requiere viabilidad ambiental de SETENA antes de obtener permisos de construcción.
        </p>
        <p>
          Representamos a desarrolladores inmobiliarios, empresas agroindustriales e inversionistas
          en el trámite de viabilidad ambiental, la impugnación de resoluciones denegatorias de
          SETENA en vía administrativa y contencioso-administrativa, y la defensa ante denuncias
          ambientales presentadas por terceros o por el propio MINAE.
        </p>
      </Instrumento>

      <Instrumento titulo="Litigio ambiental constitucional" fundamento="Art. 50 CP; Ley N.° 7135">
        <p>
          La Sala Constitucional ha desarrollado una jurisprudencia robusta en materia ambiental
          con base en el artículo 50 constitucional y los principios precautorio, preventivo y
          de no regresión. Los recursos de amparo ambientales constituyen una herramienta
          frecuente tanto para la defensa del ambiente como para la impugnación de restricciones
          desproporcionadas a la actividad económica justificadas en motivos ambientales.
        </p>
        <p>
          Litigamos ante la Sala IV tanto la defensa de empresas afectadas por resoluciones
          ambientales desproporcionadas como la impugnación de omisiones regulatorias de SETENA
          y MINAE que retrasen indebidamente el otorgamiento de viabilidades ambientales.
        </p>
      </Instrumento>

      <Instrumento titulo="Mercados de carbono y Programa PSA" fundamento="Ley N.° 7575; FONAFIFO; NDC 2020">
        <p>
          Costa Rica administra el Programa de Pago por Servicios Ambientales (PSA) a través
          de FONAFIFO conforme a la Ley Forestal (Ley N.° 7575). Las Unidades Costarricenses
          de Compensación (UCC) permiten a empresas compensar sus emisiones de carbono
          (1 crédito = 1 tCO2e, ~$320/hectárea). En 2022, FONAFIFO firmó 953 contratos PSA
          cubriendo 51,546 hectáreas.
        </p>
        <p>
          Asesoramos en la negociación y estructuración de contratos PSA con FONAFIFO, la
          participación en proyectos REDD+, el cumplimiento de la NDC actualizada 2020
          (meta: 9.11 millones tCO2e para 2030), y la adaptación al Mecanismo de Ajuste en
          Frontera por Carbono (CBAM) de la UE para empresas exportadoras costarricenses.
        </p>
      </Instrumento>

      <Instrumento titulo="Defensa ante MINAE y SINAC" fundamento="Ley N.° 7554; Ley N.° 7575; Ley N.° 7317">
        <p>
          El Ministerio de Ambiente y Energía (MINAE) y el Sistema Nacional de Áreas de
          Conservación (SINAC) ejercen potestades de fiscalización y sanción en materia de
          recursos naturales, áreas protegidas, vida silvestre y recursos forestales. Los
          procedimientos sancionatorios ambientales se rigen por la LGAP y las garantías
          constitucionales del debido proceso.
        </p>
        <p>
          Representamos a empresas en procedimientos administrativos de MINAE y SINAC por
          presuntas infracciones ambientales, impugnamos resoluciones que restrinjan
          indebidamente derechos de propiedad o de explotación, y litigamos ante el TCA
          la nulidad de actos administrativos ambientales desproporcionados.
        </p>
      </Instrumento>

      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre regulación ambiental
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué hago si SETENA deniega la viabilidad ambiental de mi proyecto?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La resolución denegatoria de SETENA es un acto administrativo impugnable.
              Puede interponerse un recurso de revocatoria con apelación en subsidio en vía
              administrativa, y si se confirma la denegatoria, una demanda contencioso-administrativa
              ante el TCA conforme al CPCA (Ley N.° 8508). Si la denegatoria vulnera derechos
              fundamentales (propiedad, libertad de empresa), también procede un recurso de amparo
              ante la Sala IV. Corporación GC evalúa la estrategia más efectiva según las
              circunstancias de cada caso.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "alianzas-publico-privadas-infraestructura": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          Costa Rica vive un momento de transición en infraestructura. La Ley General de Concesión
          de Obras Públicas con Servicios Públicos (Ley N.° 7762 de 1998, reformada por las leyes
          N.° 8643 de 2008 y N.° 9701 de 2019) sigue siendo el régimen vigente para los contratos
          de concesión de obra pública, de obra con servicio público y de optimización de activos
          de infraestructura. Paralelamente, el expediente N.° 24.009, Ley Marco de las
          Asociaciones Público-Privadas, fue aprobado en primer debate el 19 de mayo de 2026, pero
          fue suspendido por una consulta facultativa de constitucionalidad presentada ante la
          Sala Constitucional; cuando entre en vigor —a partir de su reglamentación— derogará la
          Ley 7762 y sustituirá al Consejo Nacional de Concesiones (CNC) por la Agencia Nacional
          de Asociaciones Público-Privadas (ANAPP).
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Como abogados en concesiones y APP en Costa Rica, en Corporación GC asesoramos a
          concesionarios, consorcios, inversionistas y al sector público en la estructuración de
          proyectos, el refrendo de contratos, la objeción de carteles, la apelación de
          adjudicaciones ante la Contraloría y el litigio contencioso-administrativo contra los
          actos del CNC, MOPT y CGR que afecten el contrato. La doble lectura del régimen vigente
          y del régimen entrante es una ventaja decisiva: lo que se firma o se impugna hoy bajo la
          Ley 7762 puede tener consecuencias bajo la Ley Marco APP cuando entre en vigor.
        </p>
      </section>

      <Instrumento titulo="Las tres modalidades vigentes: concesión de obra, de obra con servicio público y optimización de activos" fundamento="Ley 7762, art. 1">
        <p>
          La Ley 7762 regula hoy tres figuras contractuales (art. 1, reformado por la Ley 9701):
          la concesión de obra pública, en la que la Administración encarga a un tercero el diseño,
          la planificación, el financiamiento, la construcción, la conservación, ampliación o
          reparación de un inmueble público, a cambio de contraprestaciones cobradas a los
          usuarios, a los beneficiarios o pagadas por la propia Administración; la concesión de
          obra con servicio público, que agrega a lo anterior la explotación del servicio; y la
          optimización de activos de infraestructura —incorporada por la Ley 9701 de 2019—, en la
          que se entrega un bien inmueble público preexistente para su operación, mantenimiento,
          ampliación o reparación, con explotación, y a cambio de un pago inicial o diferido del
          concesionario que la Administración debe invertir en proyectos de obra pública y
          servicios conexos.
        </p>
      </Instrumento>

      <Instrumento titulo="Estructura institucional vigente: Consejo Nacional de Concesiones (CNC)" fundamento="Ley 7762, arts. 5, 6, 8 y 9">
        <p>
          En el régimen actual, la Administración concedente es el Poder Ejecutivo, las empresas
          públicas y el sector descentralizado territorial e institucional (art. 5). Cuando la
          concesión está dentro del ámbito del Poder Ejecutivo, el Consejo Nacional de Concesiones
          (CNC) —órgano con desconcentración máxima adscrito al MOPT (art. 6)— actúa como entidad
          técnica competente en la contratación y, cuando se requiera, durante la ejecución. El
          contrato lo suscriben el ministro del ramo, el ministro de Hacienda, el presidente de la
          República y el CNC.
        </p>
        <p>
          La Secretaría Técnica del CNC (arts. 8 y 9) prepara los actos preparatorios, contrata los
          estudios, confecciona el cartel, vigila el cumplimiento del concesionario, impone las
          sanciones del régimen sancionatorio y ejecuta los trámites previos a la expropiación
          conforme a la Ley N.° 7495.
        </p>
      </Instrumento>

      <Instrumento titulo="Procedimiento concursal, contrato y refrendo" fundamento="Ley 7762, arts. 21, 23, 28, 30 y 64.1.b">
        <p>
          La adjudicación se hace por licitación pública (art. 23), guiada por los principios de
          eficiencia, publicidad, igualdad y libre competencia. La Secretaría Técnica del CNC
          realiza los estudios y eleva el cartel (art. 21) para aprobación del Consejo. La
          selección se hace por uno o varios factores del artículo 28 (valor presente de ingresos,
          tarifa, plazo, monto de subsidio, pagos al Estado, ingresos mínimos garantizados,
          puntaje técnico, reducciones por rentabilidad excesiva).
        </p>
        <p>
          Firme la adjudicación, el adjudicatario constituye en noventa días naturales la sociedad
          anónima nacional con la que se firma el contrato (art. 31), que debe ser refrendado por
          la Contraloría General de la República (art. 30). La Ley 7762 excluye expresamente al
          CNC de la aplicación del artículo 20 de la Ley Orgánica de la CGR (art. 64.1.b), por lo
          que el refrendo en concesiones tiene un régimen propio dentro del marco general.
        </p>
      </Instrumento>

      <Instrumento titulo="Recursos: objeción al cartel y apelación de la adjudicación" fundamento="Ley 7762, arts. 34 y 35">
        <p>
          Contra el cartel cabe recurso de objeción ante la Contraloría General de la República,
          dentro del primer tercio del plazo para presentar ofertas; la CGR debe resolver dentro
          de los treinta días naturales siguientes y, si no resuelve, la objeción se tiene por
          acogida favorablemente en los términos del recurrente (art. 34). Quien pudiendo recurrir
          no lo hiciere no podrá luego usar esos argumentos en la apelación.
        </p>
        <p>
          Contra el acto de adjudicación cabe recurso de apelación ante la CGR dentro de los diez
          días hábiles siguientes a la publicación del acuerdo en La Gaceta. Se resuelve en
          cuarenta días hábiles desde el auto inicial de traslado, prorrogables hasta por quince
          más en casos calificados; vencido el plazo sin resolución, se tiene por confirmado el
          acto de adjudicación recurrido (art. 35). La resolución agota la vía administrativa, y
          el acto final es impugnable sin efecto suspensivo ante la jurisdicción
          contencioso-administrativa.
        </p>
      </Instrumento>

      <Instrumento titulo="Litigio contencioso-administrativo y equilibrio económico-financiero del contrato" fundamento="Ley 7762; CPCA, arts. 19 y 42; LGAP, arts. 190 a 194">
        <p>
          Las controversias derivadas del contrato de concesión y los actos del Consejo Nacional
          de Concesiones, del MOPT o de la Contraloría que afecten su ejecución se discuten en
          sede contencioso-administrativa. La demanda admite las pretensiones del artículo 42 del
          CPCA —anulación del acto, restablecimiento de la situación jurídica, indemnización
          por daños y perjuicios—, y la urgencia se atiende con las medidas cautelares del
          artículo 19 del mismo Código.
        </p>
        <p>
          En lo patrimonial es la vía natural para reclamar el restablecimiento del equilibrio
          económico-financiero del contrato y las indemnizaciones derivadas del hecho del
          príncipe, de la fuerza mayor o de decisiones de la Administración que sacrifican
          especialmente al concesionario. Aplica el régimen de responsabilidad de la
          Administración de la LGAP (arts. 190 a 194), con sus reglas sobre conducta lícita e
          ilícita, daño cierto y efectivo y los límites del artículo 194 sobre lucro cesante en
          la conducta lícita.
        </p>
      </Instrumento>

      <Instrumento titulo="La transición: expediente 24.009 (Ley Marco APP)" fundamento="Expediente N.° 24.009; transitorios I y II">
        <p>
          El expediente N.° 24.009, Ley Marco de las Asociaciones Público-Privadas, fue aprobado
          en primer debate el 19 de mayo de 2026; veinte diputados presentaron una consulta
          facultativa de constitucionalidad ante la Sala Constitucional, lo que suspende el trámite
          legislativo y bloquea el segundo debate hasta que la Sala se pronuncie. Aun cuando supere
          ese tamiz y se publique, la propia ley rige a partir de su reglamentación, que el Poder
          Ejecutivo tiene hasta doce meses para emitir.
        </p>
        <p>
          Cuando entre en vigor, derogará la Ley 7762, sustituirá al CNC por la Agencia Nacional de
          Asociaciones Público-Privadas (ANAPP) —con personalidad jurídica instrumental y
          patrimonio propio, junto con una Dirección General de APP (DGAPP)—, reordenará el ciclo
          de vida del proyecto en fases de preinversión, inversión y postinversión integradas al
          Sistema Nacional de Inversión Pública (Ley N.° 10.441), e introducirá expresamente el
          principio de «valor por el dinero» y un régimen de compromisos firmes y contingentes con
          tope plurianual a cargo del Ministerio de Hacienda. La adjudicación se hará por
          licitación mayor con invitación internacional según la Ley General de Contratación
          Pública (Ley N.° 9986). Los transitorios resguardan los contratos vigentes bajo la Ley
          7762: los ya formalizados o en ejecución continúan bajo ese régimen, salvo acuerdo
          conjunto de las partes para migrar.
        </p>
      </Instrumento>

      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre concesiones y APP
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿La Ley 7762 sigue vigente o ya rige la nueva Ley Marco APP?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              La Ley 7762 sigue siendo el régimen vigente. El expediente 24.009 (Ley Marco APP) fue
              aprobado en primer debate el 19 de mayo de 2026, pero veinte diputados presentaron
              una consulta facultativa de constitucionalidad ante la Sala Constitucional, lo que
              suspende el segundo debate hasta que la Sala se pronuncie. Aun cuando supere ese
              tamiz, la propia ley rige a partir de su reglamentación, que el Poder Ejecutivo tiene
              hasta doce meses para emitir. Mientras tanto, todos los contratos de concesión de
              obra pública, de obra con servicio público y de optimización de activos se rigen por
              la Ley 7762; los contratos ya adjudicados continuarán bajo ese régimen aun después de
              la nueva ley, salvo acuerdo mutuo en contrario (transitorios I y II del expediente
              24.009).
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cómo se impugnan los actos del CNC, MOPT o CGR que afectan un contrato de concesión vigente?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Se impugnan en sede contencioso-administrativa contra los actos del Consejo Nacional
              de Concesiones, del MOPT o de la Contraloría que afecten el contrato o su ejecución.
              La demanda se rige por el CPCA: pretensiones del artículo 42 —anulación,
              restablecimiento de la situación jurídica, indemnización por daños y perjuicios— y,
              cuando hay urgencia y peligro de daño irreparable, medidas cautelares del artículo
              19. En lo patrimonial aplica además el régimen de responsabilidad de la
              Administración de la LGAP (arts. 190 a 194), incluyendo el restablecimiento del
              equilibrio económico-financiero del contrato.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Cuáles serán los cambios principales cuando entre en vigor la Ley Marco APP?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Tres cambios estructurales destacables: (i) crea la Agencia Nacional de Asociaciones
              Público-Privadas (ANAPP), órgano con personalidad jurídica instrumental, que
              sustituye al Consejo Nacional de Concesiones; (ii) reordena el ciclo de vida del
              proyecto en fases de preinversión, inversión y postinversión, integradas al Sistema
              Nacional de Inversión Pública (Ley N.° 10.441); y (iii) introduce expresamente el
              principio de «valor por el dinero» y un régimen de compromisos firmes y contingentes
              con tope plurianual fijado por el Ministerio de Hacienda. La adjudicación se rige por
              la Ley General de Contratación Pública (Ley N.° 9986) bajo la modalidad de licitación
              mayor con invitación internacional. Los contratos vigentes bajo la Ley 7762 se
              mantienen bajo ese régimen, salvo acuerdo expreso de las partes para migrar.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "regulacion-fintech-criptoactivos": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          Costa Rica experimenta un crecimiento acelerado del ecosistema fintech: 61 empresas
          operando en la región de Centroamérica y el Caribe, la expansión de SINPE Móvil como
          infraestructura de pagos, y la inminente aprobación del Proyecto de Ley N.° 22.837 de
          Registro de VASP que obligará a todas las empresas de criptoactivos a registrarse ante
          la SUGEF. Los procedimientos de enforcement de SUGEF y CONASSIF son procedimientos
          administrativos — territorio natural de Corporación GC.
        </p>
      </section>

      <Instrumento titulo="Registro VASP ante SUGEF" fundamento="Proyecto N.° 22.837; Ley N.° 7558, art. 15 Bis">
        <p>
          El Proyecto de Ley N.° 22.837 (Registro de VASP), aprobado en primer debate, establecerá
          el registro obligatorio ante SUGEF para proveedores de servicios de activos virtuales,
          con debida diligencia reforzada y multas de 2 a 100 salarios base por incumplimiento.
          Actualmente, la SUGEF supervisa estas actividades bajo la Ley N.° 7558 (art. 15 Bis).
        </p>
        <p>
          Asesoramos a fintechs, exchanges, custodios de cripto y plataformas de tokenización
          en la preparación para el registro VASP obligatorio: diagnóstico de readiness, diseño
          de estructura corporativa conforme a requisitos regulatorios, implementación de
          controles AML/CFT, y representación ante SUGEF durante el proceso de registro.
        </p>
      </Instrumento>

      <Instrumento titulo="Cumplimiento AML/CFT" fundamento="Ley N.° 8204; Acuerdos SUGEF 13-19">
        <p>
          La Ley sobre Estupefacientes, Sustancias Psicotrópicas, Drogas de Uso no Autorizado,
          Actividades Conexas, Legitimación de Capitales y Financiamiento al Terrorismo
          (Ley N.° 8204) y los Acuerdos SUGEF 13-19 establecen las obligaciones de prevención
          de legitimación de capitales aplicables a todas las entidades supervisadas, incluyendo
          fintechs y proveedores de servicios de criptoactivos.
        </p>
        <p>
          Diseñamos programas de cumplimiento AML/CFT adaptados a empresas fintech: políticas
          de conocimiento del cliente (KYC), monitoreo de transacciones, reporte de operaciones
          sospechosas, y capacitación del personal conforme a los estándares GAFI/GAFILAT y
          la normativa SUGEF vigente.
        </p>
      </Instrumento>

      <Instrumento titulo="Defensa en procedimientos sancionatorios de SUGEF" fundamento="Ley N.° 7558, arts. 115-117; LGAP">
        <p>
          Los procedimientos sancionatorios de SUGEF contra entidades financieras y fintechs
          son procedimientos administrativos sujetos a las garantías de la LGAP y los artículos
          39 y 41 de la Constitución Política. Las sanciones incluyen multas, intervención,
          suspensión de operaciones y liquidación forzosa.
        </p>
        <p>
          Representamos a fintechs y entidades financieras en procedimientos sancionatorios
          de SUGEF, garantizando el respeto del debido proceso, e impugnamos resoluciones
          sancionatorias ante el TCA conforme al CPCA cuando existan vicios de legalidad,
          proporcionalidad o motivación.
        </p>
      </Instrumento>

      <Instrumento titulo="Estructuración regulatoria y límites de plataformas" fundamento="Opinión PGR C-196-2024; Ley N.° 7558">
        <p>
          La Opinión de la Procuraduría General de la República C-196-2024 definió los límites
          regulatorios de las plataformas fintech en Costa Rica, delimitando las actividades
          que requieren autorización de SUGEF de las que operan en un marco no regulado.
          La implementación de los estándares CARF de la OCDE para intercambio fiscal automático
          de criptoactivos está proyectada para 2028.
        </p>
        <p>
          Asesoramos en la estructuración regulatoria de plataformas fintech — determinando
          si la actividad requiere autorización, registro o puede operar bajo régimen general —,
          y en el cumplimiento anticipado de los estándares CARF para evitar sanciones futuras.
        </p>
      </Instrumento>

      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre regulación fintech
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Mi empresa de criptoactivos necesita registrarse ante SUGEF?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Con la aprobación inminente del Proyecto N.° 22.837, todas las empresas que ofrezcan
              servicios de activos virtuales (exchanges, custodios, wallets, plataformas de
              tokenización) deberán registrarse obligatoriamente ante SUGEF. El incumplimiento
              generará multas de 2 a 100 salarios base. Recomendamos iniciar la preparación
              antes de la aprobación definitiva para cumplir con los requisitos desde el día uno
              de vigencia.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "derecho-electoral-financiamiento-politico": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          El derecho electoral costarricense está regulado por el Código Electoral (Ley N.° 8765),
          la nueva Ley de Fortalecimiento del Financiamiento Político (Ley N.° 10755, septiembre
          2025) y la jurisdicción exclusiva del Tribunal Supremo de Elecciones (TSE) como tribunal
          independiente con rango constitucional (arts. 99-104 CP). Con 20 partidos nacionales
          que participaron en las elecciones de febrero 2026 y las próximas elecciones municipales
          en febrero 2028, la demanda de asesoría electoral es creciente.
        </p>
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch] mt-4">
          Corporación GC es la primera firma en Costa Rica con práctica dedicada al derecho
          electoral desde la perspectiva del derecho público constitucional.
        </p>
      </section>

      <Instrumento titulo="Cumplimiento de financiamiento político" fundamento="Ley N.° 10755; Código Electoral, Ley N.° 8765">
        <p>
          La nueva Ley de Fortalecimiento del Financiamiento Político (Ley N.° 10755, septiembre
          2025) refuerza las obligaciones de transparencia, rendición de cuentas y control del
          financiamiento de los partidos políticos. El artículo 96 constitucional establece la
          contribución estatal para partidos que superen el 4% de los votos (0.19% del PIB).
        </p>
        <p>
          Asesoramos a partidos políticos en el cumplimiento de las nuevas obligaciones de la
          Ley N.° 10755: registro de donaciones, control de gastos, límites de contribución,
          informes financieros periódicos ante el TSE, y diseño de estructuras internas de
          cumplimiento electoral.
        </p>
      </Instrumento>

      <Instrumento titulo="Liquidación de deuda política" fundamento="Código Electoral, arts. 96-102; Ley N.° 10755">
        <p>
          La liquidación de deuda política es el proceso mediante el cual los partidos que
          alcanzaron el umbral electoral (4% de los votos) reclaman la contribución estatal para
          reembolsar los gastos autorizados de campaña. Este proceso requiere documentación
          exhaustiva y cumplimiento de plazos estrictos ante el TSE.
        </p>
        <p>
          Representamos a partidos políticos en el proceso completo de liquidación: preparación
          de la documentación contable, presentación de la liquidación ante el TSE, respuesta a
          observaciones y objeciones del Departamento de Financiamiento de Partidos Políticos,
          y defensa en procedimientos derivados de irregularidades detectadas.
        </p>
      </Instrumento>

      <Instrumento titulo="Disputas electorales ante el TSE" fundamento="Código Electoral, Ley N.° 8765; arts. 99-104 CP">
        <p>
          El TSE tiene jurisdicción exclusiva e independiente en materia electoral conforme a los
          artículos 99 a 104 de la Constitución Política. Sus resoluciones en materia electoral
          no son revisables por ningún otro tribunal, salvo la acción de inconstitucionalidad
          ante la Sala IV en casos de vulneración de derechos fundamentales.
        </p>
        <p>
          Representamos a partidos, candidatos y organizaciones en disputas electorales:
          impugnación de resultados, recursos contra resoluciones del TSE, cancelación de
          credenciales, y controversias sobre inscripción de candidaturas y alianzas.
        </p>
      </Instrumento>

      <Instrumento titulo="Asesoría a candidatos municipales" fundamento="Código Municipal, Ley N.° 7794; Código Electoral">
        <p>
          Las próximas elecciones municipales (febrero 2028) generan demanda de asesoría
          integral para candidatos a alcaldías, concejos municipales y concejos de distrito.
          El marco normativo combina el Código Electoral (Ley N.° 8765) con el Código Municipal
          (Ley N.° 7794) y la legislación de financiamiento político.
        </p>
        <p>
          Asesoramos a candidatos municipales en cumplimiento electoral, financiamiento de
          campaña, obligaciones de transparencia, inscripción de candidaturas y defensa
          ante impugnaciones.
        </p>
      </Instrumento>

      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre derecho electoral
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Puede mi partido político obtener la contribución estatal?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Sí, conforme al artículo 96 constitucional, los partidos que superen el 4% de los
              votos válidos emitidos tienen derecho a la contribución estatal (0.19% del PIB).
              La liquidación debe presentarse ante el TSE con documentación contable completa de
              los gastos de campaña autorizados conforme al Código Electoral y la Ley N.° 10755.
              Corporación GC asesora en todo el proceso de liquidación.
            </p>
          </div>
        </div>
      </section>
    </>
  ),

  "telecomunicaciones-espectro-5g": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          El sector de telecomunicaciones costarricense atraviesa una transformación histórica
          con la subasta 5G de enero 2025 (bandas 700, 2300, 3500, 26 y 28 GHz), que adjudicó
          espectro a 7 operadores con $310M en inversión comprometida y obligación de desplegar
          3,373 torres en 134 distritos. SUTEL y MICITT regulan este sector conforme a la Ley
          General de Telecomunicaciones (Ley N.° 8642), con ARESEP como regulador tarifario.
        </p>
      </section>

      <Instrumento titulo="Concesiones de espectro y obligaciones 5G" fundamento="Ley N.° 8642; Concesiones SUTEL 2025">
        <p>
          La Ley General de Telecomunicaciones (Ley N.° 8642) establece el régimen de concesiones
          de frecuencias del espectro radioeléctrico. SUTEL otorga y administra las concesiones
          conforme a los principios de uso eficiente, no discriminación y promoción de la
          competencia. Tras la subasta 5G, los 7 concesionarios (Claro, Liberty, Coopealfaroruiz,
          Coopeguanacaste, Coopelesca, Coopesantos, Ring Centrales) deben cumplir obligaciones
          de cobertura, inversión y calidad de servicio.
        </p>
        <p>
          Asesoramos a concesionarios en el cumplimiento de las condiciones de la concesión,
          negociación de extensiones de espectro, renegociación de condiciones ante SUTEL, y
          defensa en procedimientos por incumplimiento de obligaciones de despliegue.
        </p>
      </Instrumento>

      <Instrumento titulo="Permisos municipales para torres" fundamento="Art. 170 CP; Ley N.° 8642; Código Municipal">
        <p>
          El despliegue de infraestructura de telecomunicaciones (torres, antenas, fibra óptica)
          requiere permisos municipales que intersectan la autonomía municipal (art. 170 CP) con
          la regulación sectorial de SUTEL (Ley N.° 8642). El 90% del valor del espectro se paga
          vía despliegue de infraestructura, lo que hace del permiso municipal un elemento crítico.
        </p>
        <p>
          Representamos a operadores y empresas de torres en la obtención de permisos municipales,
          la impugnación de denegatorias o restricciones desproporcionadas al despliegue de
          infraestructura, y la resolución de conflictos entre la regulación sectorial y la
          normativa urbanística local.
        </p>
      </Instrumento>

      <Instrumento titulo="Compartición de infraestructura e interconexión" fundamento="Ley N.° 8642, arts. 58-64">
        <p>
          La Ley N.° 8642 regula la compartición de infraestructura (arts. 58-60) y la
          interconexión de redes (arts. 61-64) entre operadores de telecomunicaciones. SUTEL
          tiene potestad para ordenar la compartición cuando sea técnicamente factible y
          resolver controversias de interconexión.
        </p>
        <p>
          Asesoramos en la negociación de acuerdos de compartición de infraestructura y de
          interconexión, representamos ante SUTEL en procedimientos de resolución de controversias,
          e impugnamos resoluciones de SUTEL que impongan condiciones de acceso desproporcionadas.
        </p>
      </Instrumento>

      <Instrumento titulo="Operadores satelitales y nuevas tecnologías" fundamento="Ley N.° 8642; UIT">
        <p>
          La concesión de Starlink (julio 2023) y el interés de otros operadores satelitales
          (OneWeb) abren un nuevo frente regulatorio en telecomunicaciones. La regulación de
          internet satelital se rige por la Ley N.° 8642 y los acuerdos internacionales del
          Reglamento de Radiocomunicaciones de la UIT, con SUTEL como autoridad de asignación
          de frecuencias.
        </p>
        <p>
          Asesoramos a operadores satelitales en trámites de concesión ante SUTEL, cumplimiento
          de obligaciones regulatorias, y resolución de disputas de espectro con operadores
          terrestres. También asesoramos sobre la regulación emergente de internet de las cosas
          (IoT) y comunicaciones máquina a máquina (M2M).
        </p>
      </Instrumento>

      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre telecomunicaciones
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Qué pasa si un concesionario 5G no cumple con las obligaciones de despliegue?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              SUTEL puede iniciar un procedimiento sancionatorio por incumplimiento de condiciones
              de concesión conforme a la Ley N.° 8642. Las sanciones pueden incluir multas,
              reducción del plazo de concesión o revocatoria en casos graves. El procedimiento
              sancionatorio es un procedimiento administrativo sujeto a las garantías de la LGAP
              y susceptible de impugnación ante el TCA. Corporación GC defiende a concesionarios
              en estos procedimientos.
            </p>
          </div>
        </div>
      </section>
    </>
  ),


  "energia-renovable-transicion-energetica": (
    <>
      <section className="mb-12">
        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
          Costa Rica genera más del 98% de su electricidad con fuentes renovables, pero el marco
          regulatorio de generación privada, comercialización de energía y transición energética
          plantea desafíos jurídicos complejos. Con $539 millones en proyectos renovables ICE
          2025-2026, el Plan Nacional de Energía 2025-2035 y el Plan Nacional de Descarbonización
          2050, la regulación de energía renovable intersecta el derecho administrativo, el derecho
          ambiental y la contratación pública.
        </p>
      </section>

      <Instrumento titulo="Generación privada de energía" fundamento="Ley N.° 7200; Ley N.° 7508">
        <p>
          La Ley de Generación Autónoma o Paralela (Ley N.° 7200) y su reforma (Ley N.° 7508)
          regulan la generación privada de electricidad en Costa Rica, estableciendo límites de
          capacidad para generadores autónomos y paralelos, y las condiciones bajo las cuales
          pueden vender energía al ICE. El ICE actúa como rector del sistema eléctrico nacional
          y comprador principal de energía.
        </p>
        <p>
          Asesoramos a desarrolladores de proyectos solares, eólicos, hidroeléctricos y de
          biomasa en la obtención de permisos de generación conforme a los límites de la
          Ley N.° 7200, la negociación de contratos de compra de energía (PPA) con ICE y
          distribuidoras, y la defensa ante denegatorias o restricciones de ARESEP.
        </p>
      </Instrumento>

      <Instrumento titulo="Regulación tarifaria ante ARESEP" fundamento="Ley N.° 7593">
        <p>
          La Autoridad Reguladora de los Servicios Públicos (ARESEP) fija las tarifas del servicio
          de electricidad conforme al principio de servicio al costo establecido en la Ley N.° 7593.
          Las fijaciones tarifarias afectan directamente la viabilidad económica de los proyectos
          de generación renovable y la rentabilidad de los contratos PPA.
        </p>
        <p>
          Impugnamos fijaciones tarifarias que no respeten el principio de servicio al costo o
          que impongan cargas desproporcionadas a los generadores privados, mediante recursos
          administrativos ante ARESEP y demandas contencioso-administrativas ante el TCA.
        </p>
      </Instrumento>

      <Instrumento titulo="Permisos ambientales para proyectos renovables" fundamento="Ley N.° 7554; SETENA">
        <p>
          Los proyectos de generación renovable requieren viabilidad ambiental de SETENA conforme
          a la Ley N.° 7554 y el Reglamento de Evaluación de Impacto Ambiental. Proyectos
          hidroeléctricos, eólicos y solares de mediana y gran escala están sujetos a evaluación
          de impacto ambiental que puede incluir estudios de impacto ambiental (EsIA) completos.
        </p>
        <p>
          Representamos a desarrolladores en el trámite de viabilidad ambiental ante SETENA,
          la defensa ante oposiciones de comunidades o grupos ambientalistas, y la impugnación
          de denegatorias o condicionamientos desproporcionados a la viabilidad ambiental.
        </p>
      </Instrumento>

      <Instrumento titulo="Mercado Eléctrico Regional (MER) y SIEPAC" fundamento="Tratado Marco del MER; SIEPAC">
        <p>
          El Sistema de Interconexión Eléctrica de los Países de América Central (SIEPAC) y el
          Mercado Eléctrico Regional (MER) permiten la comercialización transfronteriza de
          energía. En 2024 se comercializaron más de 3,700 GWh con un valor de ~US$350M y más
          de 300 agentes participantes. La Empresa Propietaria de la Red (EPR), con sede en
          San José, opera la infraestructura regional.
        </p>
        <p>
          Asesoramos a generadores y comercializadores en la participación en el MER, el
          cumplimiento del Tratado Marco y sus protocolos, la resolución de disputas
          transfronterizas, y la regulación emergente del hidrógeno verde y almacenamiento
          en baterías.
        </p>
      </Instrumento>

      <section className="mt-16 pt-12 border-t border-cream/[0.06]">
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-10 tracking-tight">
          Preguntas frecuentes sobre energía renovable
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-base font-semibold text-cream/90 mb-3">
              ¿Puedo generar y vender energía renovable como empresa privada en Costa Rica?
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
              Sí, conforme a la Ley N.° 7200 de Generación Autónoma o Paralela, empresas privadas
              pueden generar electricidad con fuentes renovables y vender excedentes al ICE bajo
              contratos de compra de energía (PPA). Existen límites de capacidad establecidos por
              la ley que deben respetarse. La obtención del permiso de generación requiere
              cumplimiento ante ARESEP, SETENA y el ICE. Corporación GC asesora en todo el proceso
              regulatorio.
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

  const commercial = AREA_COMMERCIAL[slug];
  const whatsappUrl = commercial
    ? `https://wa.me/${FIRM_CONTACT.phoneRaw}?text=${encodeURIComponent(commercial.whatsappMessage)}`
    : null;

  const relatedAreas = getRelatedAreas(slug);

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
    serviceType: `Abogados especializados en ${area.title} en Costa Rica`,
  };

  const jsonLdFaq = commercial && commercial.commercialFaq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://www.corporaciongc.com/areas/${area.slug}#faq`,
    mainEntity: commercial.commercialFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

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
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}
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

            {/* ─── COMMERCIAL LANDING (above the fold) ─── */}
            {commercial && whatsappUrl && (
              <>
                {/* Hook + WhatsApp CTA */}
                <div className="mt-12 p-7 md:p-9 rounded-2xl border border-burgundy/25 bg-gradient-to-b from-burgundy/[0.07] to-burgundy/[0.02]">
                  <div className="flex items-center gap-2 mb-3">
                    <Warning size={16} weight="duotone" className="text-burgundy-light" />
                    <span className="text-[10px] tracking-[0.25em] uppercase text-burgundy-light font-medium">
                      Consulta Urgente
                    </span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl text-cream tracking-tight leading-tight mb-3 max-w-[40ch]">
                    {commercial.hookHeadline}
                  </h2>
                  <p className="text-sm text-cream/65 leading-relaxed max-w-[60ch] mb-6">
                    {commercial.hookSubtext}
                  </p>
                  <MagneticButton
                    href={whatsappUrl}
                    variant="primary"
                    contactTarget={`area-${slug}`}
                  >
                    <WhatsappLogo size={18} weight="fill" />
                    Escribir por WhatsApp
                  </MagneticButton>
                </div>

                {/* Trigger scenarios */}
                <section className="mt-14">
                  <h2 className="font-display text-xl md:text-2xl text-cream tracking-tight mb-2">
                    {commercial.scenariosTitle}
                  </h2>
                  <p className="text-xs text-cream/45 mb-6 max-w-[60ch]">
                    Si su situación corresponde a alguno de estos escenarios, el tiempo es crítico.
                  </p>
                  <ul className="space-y-3">
                    {commercial.triggerScenarios.map((scenario, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-lg border border-cream/[0.08] bg-cream/[0.02]"
                      >
                        <CheckCircle size={18} weight="duotone" className="text-gold mt-0.5 shrink-0" />
                        <span className="text-sm text-cream/75 leading-relaxed">{scenario}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* What we do */}
                <section className="mt-14">
                  <h2 className="font-display text-xl md:text-2xl text-cream tracking-tight mb-2">
                    Qué hace Corporación GC en estos casos
                  </h2>
                  <p className="text-xs text-cream/45 mb-6 max-w-[60ch]">
                    Acompañamos su caso en cada etapa, con el rigor técnico que exige la materia.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {commercial.services.map((service, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.02]"
                      >
                        <h3 className="text-sm font-semibold text-cream mb-2">{service.title}</h3>
                        <p className="text-xs text-cream/55 leading-relaxed">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Commercial FAQ */}
                <section className="mt-14">
                  <h2 className="font-display text-xl md:text-2xl text-cream tracking-tight mb-8">
                    Preguntas prácticas
                  </h2>
                  <div className="space-y-6">
                    {commercial.commercialFaq.map((item, i) => (
                      <div key={i} className="pb-6 border-b border-cream/[0.06] last:border-b-0">
                        <h3 className="text-sm font-semibold text-cream mb-2">{item.question}</h3>
                        <p className="text-sm text-cream/60 leading-relaxed max-w-[65ch]">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Secondary WhatsApp CTA */}
                <div className="mt-14 p-7 rounded-xl border border-burgundy/15 bg-burgundy/[0.04] text-center">
                  <p className="text-sm text-cream/70 mb-4 max-w-[50ch] mx-auto">
                    ¿Su situación es urgente? Escríbanos por WhatsApp para coordinar una evaluación inmediata.
                  </p>
                  <MagneticButton
                    href={whatsappUrl}
                    variant="primary"
                    contactTarget={`area-${slug}-secondary`}
                  >
                    <WhatsappLogo size={18} weight="fill" />
                    Coordinar consulta
                  </MagneticButton>
                </div>

                {/* Related article */}
                {commercial.relatedArticleSlug && (
                  <Link
                    href={`/articulos/${commercial.relatedArticleSlug}`}
                    className="group mt-10 flex items-center justify-between gap-4 p-5 rounded-xl border border-cream/[0.10] hover:border-gold/30 transition-all duration-300"
                  >
                    <div>
                      <div className="text-[10px] tracking-[0.25em] uppercase text-cream/40 font-medium mb-1">
                        Profundizar
                      </div>
                      <div className="text-sm text-cream/80 group-hover:text-gold transition-colors duration-300">
                        {commercial.relatedArticleLabel ?? "Artículo relacionado"}
                      </div>
                    </div>
                    <ArrowRight size={16} weight="bold" className="text-cream/40 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                  </Link>
                )}

                {/* Divider before legal depth content */}
                <div className="mt-16 pt-10 border-t border-cream/[0.08]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-px w-8 bg-cream/20" />
                    <span className="text-[10px] tracking-[0.25em] uppercase text-cream/35 font-medium">
                      Análisis Jurídico Detallado
                    </span>
                  </div>
                </div>
              </>
            )}

            <div className="h-px bg-cream/[0.06] mt-10 mb-2" />

            {/* Content (legal depth) */}
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

            {/* Áreas relacionadas — cross-linking interno para descubrimiento
                de crawlers y navegación temática del usuario hacia materias
                adyacentes (afinidad procesal, sustantiva o sectorial). */}
            {relatedAreas.length > 0 && (
              <nav
                aria-label="Áreas relacionadas"
                className="mt-16 pt-10 border-t border-cream/[0.08]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-gold" />
                  <span className="text-[10px] tracking-[0.25em] uppercase text-cream/45 font-medium">
                    Áreas relacionadas
                  </span>
                </div>
                <h2 className="font-display text-xl md:text-2xl text-cream tracking-tight mb-8 max-w-[50ch]">
                  Materias afines a {area.title.toLowerCase()}
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {relatedAreas.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/areas/${r.slug}`}
                        className="group flex items-start justify-between gap-4 p-5 rounded-xl border border-cream/[0.08] bg-cream/[0.02] hover:border-burgundy/25 hover:bg-cream/[0.04] transition-all duration-300"
                      >
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-cream group-hover:text-gold transition-colors duration-300">
                            {r.title}
                          </div>
                          <div className="mt-1 text-xs text-cream/50 leading-relaxed line-clamp-2">
                            {r.subtitle}
                          </div>
                        </div>
                        <ArrowRight
                          size={14}
                          weight="bold"
                          className="mt-1 text-cream/30 group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-300 shrink-0"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/areas"
                    className="inline-flex items-center gap-1.5 text-xs text-cream/45 hover:text-gold transition-colors duration-300"
                  >
                    Ver todas las áreas de práctica
                    <ArrowRight size={12} weight="bold" />
                  </Link>
                </div>
              </nav>
            )}

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
