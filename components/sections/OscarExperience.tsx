import { RelatoPerfil } from "@/components/sections/RelatoPerfil";

/* Trayectoria del Director en prosa (D-06, 25-11-2026). Sustituye la línea
   de tiempo con tarjetas y la etiqueta «Posición actual». Datos de
   OSCAR_PROFILE.career; la suplencia desde 1999 está verificada (Acuerdo
   N.º 4080 de Corte Plena, 26-05-1999). Las conferencias y los idiomas
   pasaron al bloque «Perfil». */
export function OscarExperience() {
  return (
    <RelatoPerfil
      id="trayectoria"
      rotulo="Trayectoria"
      titulo={
        <>
          Del juzgado
          <br />
          a la <span className="text-burgundy-light">Corte Suprema</span>
        </>
      }
      apartados={[
        {
          titulo: "En la judicatura",
          contenido: (
            <p>
              Entró al Poder Judicial en 1984, en el Juzgado Primero Contencioso Administrativo, y
              de 1986 a 1992 fue juez de primera instancia en esa materia. De 1996 a 2002 fue juez
              superior del Tribunal Contencioso Administrativo, donde contribuyó directamente al
              desarrollo de la jurisprudencia administrativa costarricense, y desde 1999 fue
              también magistrado suplente de la Corte Suprema de Justicia.
            </p>
          ),
        },
        {
          titulo: "En la Sala Primera",
          contenido: (
            <p>
              Fue magistrado de la Sala Primera de la Corte Suprema de Justicia de 2002 a 2014. En
              esos años coordinó la comisión redactora del Código Procesal Contencioso
              Administrativo, coordinó la Jurisdicción Contencioso-Administrativa de 2003 a 2010 y
              en 2012, y coordinó la Comisión de Asuntos Ambientales del Poder Judicial de 2008 a
              2014.
            </p>
          ),
        },
        {
          titulo: "En el litigio",
          contenido: (
            <p>
              Desde 2015 dirige Corporación GC y litiga ante el Tribunal Contencioso
              Administrativo, la Sala Primera, la Sala Constitucional y distintas instancias
              administrativas. Además de llevar los casos, dirige la estrategia del bufete y la
              formación de su equipo de abogados en derecho público.
            </p>
          ),
        },
      ]}
    />
  );
}
