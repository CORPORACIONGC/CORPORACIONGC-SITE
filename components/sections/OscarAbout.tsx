import Link from "next/link";
import { RelatoPerfil, CitaRelato, enlaceRelato as enlace } from "@/components/sections/RelatoPerfil";

/* Perfil del Director en prosa (D-06, 25-11-2026), solo con datos que el
   sitio ya publicaba en OSCAR_PROFILE. Precisiones de la verificación del
   20-09-2026: la magistratura se dice «de 2002 a 2014» (fueron once años y
   siete meses) y el tomo I de La justicia administrativa es de 2001. */
export function OscarAbout() {
  return (
    <RelatoPerfil
      id="perfil"
      alterno
      rotulo="Perfil profesional"
      titulo={
        <>
          Desde la judicatura
          <br />
          al <span className="text-burgundy-light">litigio privado</span>
        </>
      }
      entrada={
        <>
          <p>
            El Dr. Óscar Eduardo González Camacho lleva más de 38 años en el derecho público.
            Fue magistrado de la Sala Primera de la Corte Suprema de Justicia de 2002 a 2014 y
            coordinó la comisión redactora del Código Procesal Contencioso Administrativo, la
            Ley N.° 8508, que desde 2008 rige la jurisdicción contencioso-administrativa del
            país.
          </p>
          <p>
            Desde 2015 dirige Corporación GC. Litiga ante el Tribunal Contencioso
            Administrativo, la Sala Primera y la Sala Constitucional, y forma a un equipo de
            abogados dedicados al derecho público.
          </p>
          {/* La fuente primaria de que coordinó la comisión: lo dice por
              escrito el propio Poder Judicial. La cita se corta donde la nota
              sigue con otros nombres, y los puntos suspensivos lo advierten. */}
          <CitaRelato
            pie={
              <>
                <a
                  href="https://actualidadjudicial.poder-judicial.go.cr/vol35/noticias_judiciales/notjud01.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={enlace}
                >
                  Actualidad Judicial N.º 35
                </a>
                , Poder Judicial de Costa Rica. El{" "}
                <a
                  href="https://www.asamblea.go.cr/sd/SiteAssets/Lists/Consultas%20Biblioteca/EditForm/Proyecto%2015134%20ley%20Codigo%20Procesal.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={enlace}
                >
                  expediente legislativo 15.134
                </a>{" "}
                lo consigna en la Comisión Redactora y en la Comisión Revisora del proyecto, y el
                Código está hoy en el{" "}
                <a
                  href="https://sinalevi.go.cr/ResultadosNormativa/Informacion?param1=57436&param2=146091&param3=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={enlace}
                >
                  texto vigente de la Ley 8508
                </a>
                .
              </>
            }
          >
            «Para la redacción de dicho código la Corte Suprema de Justicia integró una comisión
            redactora{" "}
            <strong className="font-semibold text-cream">coordinada por el magistrado Oscar González Camacho</strong>,
            integrante de la Sala Primera…».
          </CitaRelato>
        </>
      }
      apartados={[
        {
          titulo: "En las aulas",
          contenido: (
            <>
              <p>
                Enseña derecho público, constitucional y administrativo en la licenciatura, la
                maestría y el doctorado de la Universidad de Costa Rica y de la Universidad
                Escuela Libre de Derecho. La Escuela Libre lo nombró catedrático, la máxima
                distinción que otorga por trayectoria docente. En la UCR es profesor asociado,
                enseña en el posgrado desde 2000 y ha coordinado la Maestría en Derecho Público.
              </p>
              <p>
                Fue instructor de la Escuela Judicial del Poder Judicial, donde formó a jueces y
                operadores jurídicos, y ha dictado conferencias en Colombia, Bolivia, Ecuador,
                Argentina, Alemania, Portugal, España y Estados Unidos.
              </p>
            </>
          ),
        },
        {
          titulo: "Su obra",
          contenido: (
            <>
              <p>
                Su tesis doctoral en la Universidad de Alcalá,{" "}
                <em>La justicia administrativa frente a la inactividad material de la Administración Pública</em>{" "}
                (1998), dio origen a{" "}
                <Link href="/articulos/libro-justicia-administrativa" className={enlace}>
                  <em>La justicia administrativa</em>
                </Link>
                , publicada en tres tomos por la Editorial Investigaciones Jurídicas desde 2001.
              </p>
              <p>
                Tras la aprobación del Código escribió en{" "}
                <Link href="/articulos/libro-nuevo-proceso-contencioso" className={enlace}>
                  <em>El nuevo proceso contencioso administrativo</em>
                </Link>{" "}
                (Poder Judicial, 2006), la obra colectiva sobre su puesta en marcha. Antes, en 1995,
                la Escuela Judicial había publicado sus{" "}
                <Link href="/articulos/libro-proceso-ejecutivo" className={enlace}>
                  <em>Consideraciones prácticas en torno al proceso ejecutivo</em>
                </Link>
                , sobre el proceso ejecutivo en materia civil de hacienda.
              </p>
            </>
          ),
        },
        {
          titulo: "Su formación",
          contenido: (
            <p>
              Es licenciado en Derecho y notario público por la Universidad de Costa Rica
              (1980-1986), donde se especializó después en derecho público con graduación de honor
              (1990-1992). En España se doctoró en la Universidad de Alcalá de Henares con la
              calificación de sobresaliente cum laude y cursó la especialidad en derecho
              constitucional y ciencia política del Centro de Estudios Políticos y
              Constitucionales (1995-1998). Habla español y francés.
            </p>
          ),
        },
      ]}
    />
  );
}
