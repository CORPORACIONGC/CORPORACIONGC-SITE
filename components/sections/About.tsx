import Link from "next/link";
import { RelatoPerfil, RankingUcr, enlaceRelato as enlace } from "@/components/sections/RelatoPerfil";
import { CONFERENCES } from "@/lib/constants";

/* Perfil de Khevin Sánchez en prosa (D-06, 25-11-2026), en tercera persona
   (indicación del 25-11). Sustituye las tarjetas de áreas con icono, los recuadros de
   formación, distinción, investigación y conferencias, y absorbe la franja
   de cifras («8+ / UCR / 3er»): cada dato va en una frase con su fuente.
   Solo datos que el sitio ya publicaba en lib/constants.ts. */
export function About() {
  const [bogota, sanJose] = CONFERENCES;
  return (
    <RelatoPerfil
      id="perfil"
      alterno
      rotulo="Perfil profesional"
      titulo={
        <>
          Derecho público en litigio,
          <br />
          <span className="text-burgundy-light">del acto administrativo a la Sala Primera</span>
        </>
      }
      entrada={
        <>
          <p>
            El Lic. Khevin Alberto Sánchez Zamora litiga contra el Estado y los entes públicos
            ante el Tribunal Contencioso Administrativo, la Sala Primera, la Sala Constitucional y
            la Contraloría General de la República. Atiende el{" "}
            <Link href="/areas/litigio-contencioso-administrativo" className={enlace}>proceso contencioso</Link>{" "}
            en todas sus fases:{" "}
            <Link href="/areas/medidas-cautelares" className={enlace}>medidas cautelares</Link>{" "}
            provisionalísimas y ante causam, demandas de nulidad y de responsabilidad patrimonial,
            audiencias preliminares, juicios orales y{" "}
            <Link href="/areas/casacion-sala-primera" className={enlace}>recursos de casación</Link>.
          </p>
          <p>
            En{" "}
            <Link href="/areas/contratacion-publica" className={enlace}>contratación pública</Link>{" "}
            asesora a empresas oferentes y contratistas, con recursos de objeción, apelación y
            revocatoria ante la Contraloría y la Administración, y lleva al Tribunal la
            impugnación cuando la vía administrativa se agota. Prepara también{" "}
            <Link href="/areas/recursos-de-amparo" className={enlace}>recursos de amparo</Link> y{" "}
            <Link href="/areas/acciones-de-inconstitucionalidad" className={enlace}>acciones de inconstitucionalidad</Link>,
            y defiende a personas y empresas en{" "}
            <Link href="/areas/procedimientos-sancionatorios" className={enlace}>procedimientos sancionatorios</Link>{" "}
            y{" "}
            <Link href="/areas/expropiaciones" className={enlace}>expropiaciones</Link>. Su práctica
            atraviesa sectores muy diversos: telecomunicaciones, energía, mercado de valores, banca,
            salud, turismo y empleo público, entre otros.
          </p>
        </>
      }
      apartados={[
        {
          titulo: "Investigación",
          contenido: (
            <>
              <p>
                Investiga la aplicación de la inteligencia artificial a la justicia y a la
                contratación estatal, y la usa a diario como herramienta de trabajo en el
                despacho. Su trabajo final de graduación,{" "}
                <Link href="/articulos/tesis-ia-justicia" className={enlace}>
                  <em>Hacia la implementación de sistemas automatizados de decisión basados en inteligencia artificial en la administración de justicia costarricense</em>
                </Link>{" "}
                (UCR, 2025), dirigido por el Dr. Óscar Eduardo González Camacho, analiza su
                integración en el ámbito judicial desde el marco normativo de la Unión Europea, el
                Reglamento de Inteligencia Artificial, y propone una hoja de ruta para adoptarla
                con seguridad en Costa Rica.
              </p>
              <p>
                Ha publicado{" "}
                <Link href="/articulos/personalidad-juridica-instrumental" className={enlace}>
                  <em>La personalidad jurídica instrumental como técnica de organización administrativa</em>
                </Link>{" "}
                en la <em>Revista El Foro</em> del Colegio de Abogados y Abogadas de Costa Rica
                (n.° 32, pp. 7-22) y, con la Licda. Mariana Montero Acuña,{" "}
                <Link href="/articulos/hermeneutica-ia-contratacion-publica" className={enlace}>
                  <em>Administración Pública aumentada: inteligencia artificial en la contratación estatal costarricense</em>
                </Link>{" "}
                en la <em>Revista Estudiantil Hermenéutica</em> de la Facultad de Derecho de la UCR
                (ed. XXVI, 2025, pp. 75-144).
              </p>
              <p>
                Ha expuesto estos temas como panelista en el Global Summit de Legal Hackers. En San
                José, el {sanJose.date}, en el Colegio de Abogados y Abogadas, participó en el panel
                «{sanJose.panel}». En Bogotá, el {bogota.date}, en la Universidad Javeriana,
                participó en «{bogota.panel}».
              </p>
            </>
          ),
        },
        {
          titulo: "Formación",
          contenido: (
            <p>
              Es licenciado en Derecho, con mención en Derecho Tributario, por la Universidad de
              Costa Rica, <RankingUcr />. En la II convocatoria de 2025 del Examen de Excelencia Académica del
              Colegio de Abogados y Abogadas de Costa Rica obtuvo el tercer mejor promedio. La
              Comisión del Programa de Posgrado en Derecho de la UCR lo admitió en la Maestría
              Profesional en Derecho Público (sesión 144-2026), que empieza en el I semestre de
              2027. Cursa además el bachillerato en Historia en la misma universidad, como
              formación complementaria para los casos con componente histórico-registral.
            </p>
          ),
        },
      ]}
    />
  );
}
