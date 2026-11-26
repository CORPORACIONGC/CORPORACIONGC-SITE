import Link from "next/link";
import { RelatoPerfil, enlaceRelato as enlace } from "@/components/sections/RelatoPerfil";

/* Trayectoria de Katherine en prosa (D-06, 25-11-2026). Sustituye la línea
   de tiempo con tarjetas, la etiqueta «Posición actual» y las fichas de
   investigación con etiquetas. Datos de KATHERINE_PROFILE.career y
   .research. La asistencia académica figura como «2014 – Presente»; se dice
   solo cuándo empezó, para que la frase sea cierta aunque ya no la ejerza.
   Tercera persona por instrucción del usuario (25-11-2026). */
export function KatherineExperience() {
  return (
    <RelatoPerfil
      id="trayectoria"
      rotulo="Trayectoria"
      titulo={
        <>
          Experiencia e
          <br />
          <span className="text-burgundy-light">investigación</span>
        </>
      }
      apartados={[
        {
          titulo: "En Corporación GC",
          contenido: (
            <p>
              Katherine González entró a Corporación GC en enero de 2016 como asistente legal.
              Hasta marzo de 2019 apoyó la investigación jurídica, la redacción de escritos procesales y la gestión de
              expedientes en materia de derecho público. En 2019 pasó a ser abogada asociada, y
              desde entonces ejerce en litigio contencioso-administrativo, procedimientos
              administrativos y asesoría en derecho público.
            </p>
          ),
        },
        {
          titulo: "En las aulas",
          contenido: (
            <>
              <p>
                Su relación con la universidad empezó en la Escuela Libre de Derecho, donde de 2013
                a 2017 fue asistente del Departamento de Mercadeo y Vida Estudiantil, en
                actividades de extensión y comunicación institucional. En 2014 empezó a trabajar
                como asistente académica, en docencia e investigación en derecho público, en la
                Universidad de Costa Rica y en la Escuela Libre.
              </p>
              <p>
                Desde 2024 es profesora en la Universidad Escuela Libre de Derecho, donde imparte
                los cursos Principios del Derecho Público, Teoría del Estado y Derecho Procesal
                Administrativo. También integra tribunales examinadores en las pruebas de grado de
                la carrera de Derecho.
              </p>
            </>
          ),
        },
        {
          titulo: "Su investigación",
          contenido: (
            <>
              <p>
                Su investigación sigue dos líneas: el procedimiento expropiatorio y la
                responsabilidad patrimonial de la Administración. La primera empezó con su tesis de
                licenciatura en la Escuela Libre,{" "}
                <Link href="/articulos/tesis-procedimiento-expropiatorio-cr" className={enlace}>
                  <em>Transformación y perspectivas del procedimiento expropiatorio en Costa Rica</em>
                </Link>{" "}
                (2019), un estudio integral del procedimiento expropiatorio en sede administrativa
                y judicial.
              </p>
              <p>
                En 2026 volvió sobre el tema en{" "}
                <Link href="/articulos/procedimiento-expropiatorio-reformas-proyecto-24669" className={enlace}>
                  <em>
                    El procedimiento expropiatorio costarricense tras una década de reformas:
                    balance crítico y perspectivas ante el proyecto de ley 24.669
                  </em>
                </Link>
                , publicado en la <em>Revista Tribuna Libre</em> de la Universidad Escuela Libre de
                Derecho (vol. 21, n.º 1, pp. 89-101). Allí hace un balance de las reformas de 2014
                y 2017 a la Ley de Expropiaciones, del voto 2018-013705 de la Sala Constitucional y
                del proyecto de ley 24.669.
              </p>
              <p>
                La segunda línea es la de su trabajo final de investigación aplicada en la Maestría
                Profesional en Derecho Público de la Universidad de Costa Rica,{" "}
                <Link href="/articulos/tesis-dano-moral-indirecto" className={enlace}>
                  <em>
                    El daño moral indirecto familiar y social como responsabilidad patrimonial de la
                    Administración
                  </em>
                </Link>{" "}
                (2024), que analiza la responsabilidad patrimonial del Estado por el daño moral
                indirecto que sufren los familiares y la sociedad.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
