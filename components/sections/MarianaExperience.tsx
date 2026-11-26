import Link from "next/link";
import { RelatoPerfil, enlaceRelato as enlace } from "@/components/sections/RelatoPerfil";

/* Trayectoria de Mariana en prosa (D-06, 25-11-2026). Sustituye la línea de
   tiempo con tarjetas, la etiqueta «Posición actual», el recuadro de
   investigación con etiquetas y la lista de presencia mediática. Datos de
   MARIANA_PROFILE.career, .research y .mediaAppearances, en tercera
   persona como el resto del perfil. */
export function MarianaExperience() {
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
          titulo: "En la Procuraduría",
          contenido: (
            <p>
              Su primera experiencia en derecho público fue en la Procuraduría General de la
              República, donde fue asistente meritoria de marzo de 2017 a junio de 2018. Allí
              redactó escritos y manejó expedientes en sede contencioso-administrativa.
            </p>
          ),
        },
        {
          titulo: "En Corporación GC",
          contenido: (
            <>
              <p>
                Mariana Montero entró a Corporación GC en agosto de 2018 como asistente jurídica en
                derecho público. Hasta 2022 apoyó el litigio en sede contencioso-administrativa y
                constitucional, con la redacción de escritos y el manejo de expedientes. En 2021,
                de enero a diciembre, fue también consultora de la Asociación Gerontológica
                Costarricense (AGECO) en violencia patrimonial contra personas adultas mayores.
              </p>
              <p>
                Desde 2022 es abogada asociada de la firma. Ejerce en litigio
                contencioso-administrativo, procedimientos administrativos y asesoría en derecho
                público, con énfasis en malpraxis médica, iatrogenia y responsabilidad patrimonial
                del Estado, en colaboración directa con el Dr. Óscar Eduardo González Camacho.
              </p>
            </>
          ),
        },
        {
          titulo: "Su investigación",
          contenido: (
            <p>
              Su tesis de licenciatura,{" "}
              <Link href="/articulos/tesis-iatrogenia-responsabilidad-administrativa" className={enlace}>
                <em>
                  La iatrogenia en la responsabilidad administrativa: una aproximación a los
                  verdaderos criterios de aplicación en el ordenamiento jurídico costarricense
                </em>
              </Link>{" "}
              (Universidad de Costa Rica, 2022), fue aprobada con distinción. En ella examina si la
              iatrogenia puede categorizarse como una conducta lícita y normal con resultado
              anormal, y la descarta como eximente de responsabilidad para la Administración
              Pública.
            </p>
          ),
        },
        {
          titulo: "En foros y en televisión",
          contenido: (
            <p>
              Ha sido panelista invitada en varios segmentos del programa Buen Día, en televisión
              nacional, sobre malpraxis médica, iatrogenia y derecho a la salud. En mayo de 2020 fue
              ponente en la I Jornada Jurídica Internacional Juvenil del CIIJUS, en Chiapas,
              México, y en 2018 fue oradora en la XI edición de la Competencia Internacional de
              Arbitraje de la Universidad del Rosario, en Bogotá, Colombia.
            </p>
          ),
        },
      ]}
    />
  );
}
