import Link from "next/link";
import { RelatoPerfil, enlaceRelato as enlace } from "@/components/sections/RelatoPerfil";

/* Trayectoria de Esteban Pérez en prosa (D-06, 25-11-2026). Sustituye la
   línea de tiempo con tarjetas, la etiqueta «Posición actual» y el
   recuadro «Investigación destacada». Datos de ESTEBAN_PROFILE.career y
   .research; el título y el año de la tesis siguen su ficha
   (/articulos/potestad-discrecional-municipalidades-urbanismo), que
   también consigna la dirección del Dr. González Camacho. */
export function EstebanExperience() {
  return (
    <RelatoPerfil
      id="trayectoria"
      rotulo="Trayectoria"
      titulo={
        <>
          Experiencia
          <br />
          <span className="text-burgundy-light">comprobada</span>
        </>
      }
      apartados={[
        {
          titulo: "En la Sala Constitucional",
          contenido: (
            <p>
              Empezó en la Sala Constitucional de la Corte Suprema de Justicia, donde de 2017 a 2018
              fue asistente jurídico y apoyó directamente a las letradas en la redacción y la
              revisión de proyectos de sentencia.
            </p>
          ),
        },
        {
          titulo: "En Corporación GC",
          contenido: (
            <>
              <p>
                En 2018 entró a Corporación GC como asistente jurídico. Hasta 2023 trabajó en
                derecho público, procedimientos administrativos y litigio
                contencioso-administrativo: elaboró escritos procesales, hizo investigaciones
                jurídicas y analizó expedientes.
              </p>
              <p>
                Desde 2023 es abogado asociado del bufete. Ejerce en el litigio
                contencioso-administrativo, los procesos constitucionales y los procedimientos
                administrativos; participa en audiencias orales, redacta demandas y{" "}
                <Link href="/areas/casacion-sala-primera" className={enlace}>
                  recursos de casación
                </Link>{" "}
                y lleva asuntos de contratación pública y de materia urbanística, en colaboración
                directa con el Dr. Óscar Eduardo González Camacho.
              </p>
            </>
          ),
        },
        {
          titulo: "Lo que ha publicado",
          contenido: (
            <>
              <p>
                Su tesis de licenciatura en la Universidad de Costa Rica,{" "}
                <Link href="/articulos/potestad-discrecional-municipalidades-urbanismo" className={enlace}>
                  <em>La potestad discrecional de la Administración Municipal en la regulación urbanística</em>
                </Link>{" "}
                (2022), dirigida por el Dr. Óscar Eduardo González Camacho, analiza los alcances y
                los límites de la discrecionalidad de los gobiernos locales en la regulación
                urbanística costarricense. Su registro está en{" "}
                <a
                  href="https://kerwa.ucr.ac.cr/handle/10669/94871"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={enlace}
                >
                  el repositorio institucional de la UCR
                </a>
                .
              </p>
              <p>
                Para este sitio ha escrito sobre expropiaciones, el proceso de lesividad, el
                silencio positivo en los permisos municipales, la impugnación del avalúo municipal
                y la reforma de 2026 al Reglamento de Contratación Pública. Esos artículos se
                reúnen más abajo.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
