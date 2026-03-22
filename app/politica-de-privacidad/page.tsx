import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { FIRM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidad | Corporación GC",
  description:
    "Política de privacidad y protección de datos personales de Corporación GC, bufete de abogados especializado en Derecho Público en Costa Rica.",
  alternates: {
    canonical: `${FIRM.url}/politica-de-privacidad`,
  },
};

export default function PoliticaDePrivacidad() {
  return (
    <>
      <Navbar />
      <main className="bg-surface min-h-[100dvh]">
        <div className="pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="max-w-[800px] mx-auto px-6 md:px-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-cream/40 hover:text-gold transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={14} weight="regular" />
              Volver al inicio
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-cream/35 font-medium">
                Aviso Legal
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.05] text-cream mb-12">
              Política de{" "}
              <span className="text-burgundy">Privacidad</span>
            </h1>

            <article className="prose-legal space-y-8 text-sm text-cream/70 leading-relaxed">
              <p className="text-cream/50 text-xs">
                Última actualización: marzo 2026
              </p>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">
                  1. Responsable del tratamiento
                </h2>
                <p>
                  Corporación GC, con domicilio en OFIDENT, Barrio Dent, Montes
                  de Oca, San José, Costa Rica, código postal 11501, es
                  responsable del tratamiento de los datos personales recabados a
                  través de este sitio web. Para cualquier consulta relacionada
                  con la protección de sus datos puede escribirnos a{" "}
                  <a
                    href="mailto:info@corporaciongc.com"
                    className="text-gold hover:underline"
                  >
                    info@corporaciongc.com
                  </a>{" "}
                  o llamar al{" "}
                  <a
                    href="tel:+50683179564"
                    className="text-gold hover:underline"
                  >
                    +506 8317-9564
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">
                  2. Datos que recopilamos
                </h2>
                <p>
                  Recopilamos únicamente los datos personales que usted nos
                  proporciona voluntariamente a través del formulario de contacto
                  de este sitio web:
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                  <li>Nombre completo</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono (opcional)</li>
                  <li>Descripción de su consulta jurídica</li>
                </ul>
                <p className="mt-3">
                  No recopilamos datos de navegación, no utilizamos cookies de
                  rastreo y no empleamos herramientas de analítica de terceros.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">
                  3. Finalidad del tratamiento
                </h2>
                <p>
                  Los datos recabados se utilizan exclusivamente para:
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                  <li>
                    Responder a su consulta o solicitud de asesoría jurídica.
                  </li>
                  <li>
                    Evaluar la viabilidad de una eventual relación profesional
                    abogado-cliente.
                  </li>
                  <li>
                    Dar seguimiento a comunicaciones previamente iniciadas por
                    usted.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">
                  4. Base legal
                </h2>
                <p>
                  El tratamiento de sus datos se fundamenta en su consentimiento
                  expreso al enviar el formulario de contacto, de conformidad con
                  la Ley N.° 8968, Ley de Protección de la Persona frente al
                  Tratamiento de sus Datos Personales, y su Reglamento (Decreto
                  Ejecutivo N.° 37554-JP).
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">
                  5. Conservación de datos
                </h2>
                <p>
                  Sus datos personales se conservarán únicamente durante el
                  tiempo necesario para atender su consulta. Si no se establece
                  una relación profesional, los datos se eliminarán en un plazo
                  máximo de seis (6) meses desde la última comunicación.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">
                  6. Compartición de datos
                </h2>
                <p>
                  Sus datos personales no se comparten, venden ni transfieren a
                  terceros bajo ninguna circunstancia. El envío del formulario de
                  contacto se realiza a través de un servicio de correo
                  electrónico seguro (Resend) que actúa como encargado del
                  tratamiento y cumple con estándares de seguridad de la
                  industria.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">
                  7. Seguridad
                </h2>
                <p>
                  Este sitio web implementa medidas de seguridad técnicas que
                  incluyen cifrado HTTPS con HSTS, política de seguridad de
                  contenido (CSP), y protecciones contra ataques de inyección y
                  clickjacking. La comunicación entre su navegador y nuestro
                  servidor se encuentra cifrada en todo momento.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">
                  8. Derechos del titular
                </h2>
                <p>
                  De conformidad con la Ley N.° 8968, usted tiene derecho a:
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-3">
                  <li>
                    <strong className="text-cream/90">Acceso:</strong> Conocer
                    qué datos personales suyos están en nuestro poder.
                  </li>
                  <li>
                    <strong className="text-cream/90">Rectificación:</strong>{" "}
                    Solicitar la corrección de datos inexactos o incompletos.
                  </li>
                  <li>
                    <strong className="text-cream/90">Supresión:</strong>{" "}
                    Solicitar la eliminación de sus datos personales.
                  </li>
                  <li>
                    <strong className="text-cream/90">
                      Revocación del consentimiento:
                    </strong>{" "}
                    Retirar su consentimiento en cualquier momento.
                  </li>
                </ul>
                <p className="mt-3">
                  Para ejercer cualquiera de estos derechos, escriba a{" "}
                  <a
                    href="mailto:info@corporaciongc.com"
                    className="text-gold hover:underline"
                  >
                    info@corporaciongc.com
                  </a>{" "}
                  indicando su nombre completo y el derecho que desea ejercer.
                  Responderemos en un plazo máximo de cinco (5) días hábiles.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">
                  9. Confidencialidad profesional
                </h2>
                <p>
                  Todos los abogados de Corporación GC son miembros activos del
                  Colegio de Abogados y Abogadas de Costa Rica y están sujetos
                  al deber de confidencialidad profesional. La información
                  compartida a través de este sitio se trata con el mismo nivel
                  de reserva que cualquier comunicación abogado-cliente.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">
                  10. Descargo de responsabilidad
                </h2>
                <p>
                  La información contenida en este sitio web tiene carácter
                  informativo y no constituye asesoría legal. La consulta de
                  contenido en este sitio no crea una relación abogado-cliente.
                  Para obtener asesoría sobre su caso particular, le invitamos a
                  contactarnos directamente.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg text-cream mb-3">
                  11. Modificaciones
                </h2>
                <p>
                  Corporación GC se reserva el derecho de actualizar esta
                  política de privacidad en cualquier momento. Las modificaciones
                  entrarán en vigor desde su publicación en esta página. La fecha
                  de última actualización se indica al inicio del documento.
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
