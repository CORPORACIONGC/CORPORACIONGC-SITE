import Link from "next/link";
import { RelatoPerfil, RankingUcr, enlaceRelato as enlace } from "@/components/sections/RelatoPerfil";

/* Perfil de Katherine en prosa (D-06, 25-11-2026), solo con datos que el
   sitio ya publicaba en KATHERINE_PROFILE y KATHERINE_PRACTICE_AREAS.
   Sustituye las tarjetas de áreas con icono, el recuadro de formación y la
   línea de idiomas; los datos de la franja de cifras (credentials) quedan
   en «Su formación». Va en tercera persona por instrucción del usuario (25-11-2026). «Derecho
   Público» no tiene página de área propia y se nombra sin enlace. */
export function KatherineAbout() {
  return (
    <RelatoPerfil
      id="perfil"
      alterno
      rotulo="Perfil profesional"
      titulo={
        <>
          Derecho Público con
          <br />
          <span className="text-burgundy-light">rigor académico</span>
        </>
      }
      entrada={
        <>
          <p>
            La MSc. Katherine González Coto es abogada y notaria pública. Su práctica se
            concentra en el derecho administrativo, el derecho expropiatorio y la
            responsabilidad patrimonial de la Administración. Combina el ejercicio profesional
            con la docencia y la investigación en derecho público.
          </p>
          <p>
            Desde 2019 es abogada asociada de Corporación GC, donde ejerce con énfasis en el
            litigio contencioso-administrativo, los procedimientos expropiatorios y la
            responsabilidad patrimonial del Estado, en colaboración directa con el{" "}
            <Link href="/abogados/oscar-gonzalez" className={enlace}>
              Dr. Óscar Eduardo González Camacho
            </Link>
            . Desde 2024 es también profesora en la Universidad Escuela Libre de Derecho.
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
                asesora y defiende a sus clientes en procedimientos ante la Administración Pública
                y en los recursos ordinarios y extraordinarios. En{" "}
                <Link href="/areas/expropiaciones" className={enlace}>
                  derecho expropiatorio
                </Link>{" "}
                asesora y litiga en procedimientos expropiatorios, en la discusión de los avalúos y
                en la determinación del justo precio.
              </p>
              <p>
                Dentro del derecho público, otra parte de su trabajo es la responsabilidad
                patrimonial del Estado, que se discute en el{" "}
                <Link href="/areas/litigio-contencioso-administrativo" className={enlace}>
                  litigio contencioso-administrativo
                </Link>
                . Como notaria pública atiende además asuntos de{" "}
                <Link href="/areas/otras-materias#notarial" className={enlace}>
                  derecho notarial
                </Link>
                : autenticaciones, protocolizaciones y constitución de sociedades.
              </p>
            </>
          ),
        },
        {
          titulo: "Su formación",
          contenido: (
            <p>
              Katherine González estudió Derecho en la Universidad Escuela Libre de Derecho, donde cursó el
              bachillerato de 2013 a 2016, la licenciatura de 2015 a 2019 y el notariado público
              de 2017 a 2020. De 2020 a 2024 hizo la Maestría Profesional en Derecho Público en la
              Universidad de Costa Rica, <RankingUcr />. Es, así, máster en Derecho Público por la Universidad de
              Costa Rica desde 2024 y notaria pública formada en la Escuela Libre de Derecho, y
              habla cuatro idiomas: español, inglés, francés e italiano.
            </p>
          ),
        },
      ]}
    />
  );
}
