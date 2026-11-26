import { RelatoPerfil } from "@/components/sections/RelatoPerfil";

/* Trayectoria de Khevin Sánchez en prosa (D-06, 25-11-2026), en tercera
   persona. Sustituye la línea de tiempo con tarjetas; datos de EXPERIENCE
   en lib/constants.ts. */
export function Experience() {
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
              Empezó en diciembre de 2017 como meritorio de la Sala Constitucional, en el despacho
              del magistrado Paul Rueda Leal. Hasta diciembre de 2018 investigó y analizó casos
              constitucionales, estudió jurisprudencia y apoyó la preparación de proyectos de
              resolución.
            </p>
          ),
        },
        {
          titulo: "En la universidad",
          contenido: (
            <p>
              Durante la carrera fue procurador estudiantil universitario de la FEUCR, de enero de
              2018 a enero de 2019: defendió derechos estudiantiles ante las autoridades
              universitarias y organizó talleres sobre normativa universitaria. De agosto de 2020 a
              agosto de 2022 fue representante estudiantil de la Facultad de Derecho ante la
              Asamblea Plebiscitaria y la Asamblea de Facultad, donde participó en decisiones
              institucionales y propuso mejoras curriculares.
            </p>
          ),
        },
        {
          titulo: "En Corporación GC",
          contenido: (
            <>
              <p>
                Llegó a la firma en mayo de 2019, todavía estudiante, como asistente del Dr. Óscar
                Eduardo González Camacho. Desde 2020 trabajó en el fondo de sus litigios: bajo su
                dirección, revisión y firma preparó proyectos de demandas
                contencioso-administrativas, medidas cautelares, recursos de casación, amparos y
                acciones de inconstitucionalidad, y guías de audiencia e interrogatorios para
                juicios orales.
              </p>
              <p>
                Desde noviembre de 2025 es abogado asociado. Litiga en colaboración directa con el
                Dr. González Camacho ante el Tribunal Contencioso Administrativo y Civil de Hacienda,
                desde la medida cautelar hasta la casación ante la Sala Primera, asesora a empresas
                en contratación pública ante la Contraloría y la Administración, y defiende a
                clientes en procedimientos sancionatorios.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
