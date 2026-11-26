import Link from "next/link";
import { RelatoPerfil, enlaceRelato as enlace } from "@/components/sections/RelatoPerfil";

/* Perfil de Mariana en prosa (D-06, 25-11-2026), solo con datos que el
   sitio ya publicaba en MARIANA_PROFILE y MARIANA_PRACTICE_AREAS. Sustituye
   las tarjetas de áreas con icono, el recuadro de formación y el de la
   distinción. Va en tercera persona, como los demás relatos. Las cifras de
   la franja (mejor promedio del posgrado, años en la firma, idiomas)
   quedan dentro del relato. */
export function MarianaAbout() {
  return (
    <RelatoPerfil
      id="perfil"
      alterno
      rotulo="Perfil profesional"
      titulo={
        <>
          Malpraxis médica y
          <br />
          <span className="text-burgundy-light">derecho a la salud</span>
        </>
      }
      entrada={
        <>
          <p>
            La Licda. Mariana Montero Acuña es abogada asociada de Corporación GC, donde trabaja
            desde agosto de 2018. Su práctica se concentra en el litigio contencioso-administrativo
            por daños derivados de la actividad sanitaria, pública y privada, con énfasis en
            malpraxis médica, iatrogenia y responsabilidad patrimonial del Estado.
          </p>
          <p>
            Es licenciada en Derecho con mención en Derechos Humanos y egresada de la Maestría
            Profesional en Derecho Público, ambas de la Universidad de Costa Rica. En la firma
            trabaja en colaboración directa con el{" "}
            <Link href="/abogados/oscar-gonzalez" className={enlace}>
              Dr. Óscar Eduardo González Camacho
            </Link>
            .
          </p>
        </>
      }
      apartados={[
        {
          titulo: "En el litigio",
          contenido: (
            <>
              <p>
                Lleva demandas contra el Estado y los entes públicos ante el Tribunal Contencioso
                Administrativo, dentro del área de{" "}
                <Link href="/areas/litigio-contencioso-administrativo" className={enlace}>
                  litigio contencioso administrativo
                </Link>{" "}
                de la firma. En esos procesos trabaja sobre todo la responsabilidad patrimonial
                derivada de la actividad administrativa, y en particular los daños ocurridos en la
                atención sanitaria por malpraxis médica o iatrogenia.
              </p>
              <p>
                Asesora y litiga también en la protección del derecho fundamental a la salud frente
                a la Administración Pública y a los prestadores de servicios sanitarios. Atiende,
                además, procedimientos administrativos y consultas de derecho público.
              </p>
            </>
          ),
        },
        {
          titulo: "Su formación",
          contenido: (
            <p>
              Mariana Montero estudió Derecho en la Universidad de Costa Rica, donde obtuvo el
              bachillerato (2015-2019) y la licenciatura con mención en Derechos Humanos
              (2019-2022), aprobada con distinción. En la misma universidad es egresada de la
              Maestría Profesional en Derecho Público, y en 2024 la UCR le otorgó el Diploma de
              Excelencia Académica por el mejor promedio de ese posgrado. Habla español, inglés y
              francés.
            </p>
          ),
        },
      ]}
    />
  );
}
