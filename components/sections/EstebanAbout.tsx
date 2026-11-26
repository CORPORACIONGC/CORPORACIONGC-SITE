import Link from "next/link";
import { RelatoPerfil, enlaceRelato as enlace } from "@/components/sections/RelatoPerfil";

/* Perfil de Esteban Pérez en prosa (D-06, 25-11-2026), solo con datos que
   el sitio ya publicaba en ESTEBAN_PROFILE y ESTEBAN_PRACTICE_AREAS.
   Sustituye las tarjetas con icono de las áreas y absorbe la franja de
   cifras: el inicio en diciembre de 2017 y la maestría con la tesis en
   desarrollo (la mención del ranking QS de la UCR se omite, como en el
   perfil de Khevin Sánchez). Las
   áreas enlazan a su página en /areas. */
export function EstebanAbout() {
  return (
    <RelatoPerfil
      id="perfil"
      alterno
      rotulo="Perfil profesional"
      titulo={
        <>
          Litigio en derecho público.
          <br />
          <span className="text-burgundy-light">Estrategia y acompañamiento real.</span>
        </>
      }
      entrada={
        <>
          <p>
            El Lic. Esteban Pérez Herrera es abogado litigante y notario público, y trabaja en
            derecho administrativo, contencioso administrativo, contratación pública y derecho
            constitucional. Se dedica al derecho público desde diciembre de 2017: primero en la
            Sala Constitucional y, desde 2018, en Corporación GC, donde hoy es abogado asociado.
          </p>
          <p>
            Su práctica gira alrededor del litigio contra el Estado y de los procedimientos ante
            la Administración. Participa en audiencias orales, redacta demandas y recursos de
            casación y atiende asuntos de contratación pública y de materia urbanística, en
            colaboración directa con el Dr. Óscar Eduardo González Camacho, coordinador de la
            comisión redactora del Código Procesal Contencioso Administrativo.
          </p>
        </>
      }
      apartados={[
        {
          titulo: "Su práctica",
          contenido: (
            <>
              <p>
                En{" "}
                <Link href="/areas/derecho-administrativo" className={enlace}>
                  derecho administrativo
                </Link>{" "}
                asesora y defiende a sus clientes en los procedimientos ante la Administración
                Pública y en los recursos ordinarios y extraordinarios. En lo{" "}
                <Link href="/areas/litigio-contencioso-administrativo" className={enlace}>
                  contencioso administrativo
                </Link>{" "}
                litiga ante el Tribunal Contencioso Administrativo las demandas contra el Estado,
                y ante la Sala Constitucional tramita{" "}
                <Link href="/areas/recursos-de-amparo" className={enlace}>
                  recursos de amparo
                </Link>
                ,{" "}
                <Link href="/areas/acciones-de-inconstitucionalidad" className={enlace}>
                  acciones de inconstitucionalidad
                </Link>{" "}
                y habeas corpus.
              </p>
              <p>
                En{" "}
                <Link href="/areas/contratacion-publica" className={enlace}>
                  contratación pública
                </Link>{" "}
                asesora y litiga en licitaciones, concursos públicos y contratos administrativos.
                En{" "}
                <Link href="/areas/derecho-urbanistico" className={enlace}>
                  derecho urbanístico
                </Link>{" "}
                atiende asuntos de uso del suelo, permisos de construcción y planificación urbana,
                la materia a la que dedicó su tesis de licenciatura.
              </p>
            </>
          ),
        },
        {
          titulo: "Su formación",
          contenido: (
            <p>
              Es licenciado en Derecho por la Universidad de Costa Rica. Cursó la especialidad en Derecho Notarial y Registral en la Universidad Fidélitas y es
              egresado de la Maestría en Derecho Público de la UCR, donde tiene la tesis en
              desarrollo. Habla español e inglés.
            </p>
          ),
        },
      ]}
    />
  );
}
