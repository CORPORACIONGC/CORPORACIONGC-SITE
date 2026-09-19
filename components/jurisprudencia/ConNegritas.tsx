/* Prosa de la firma con negritas: los tramos entre **dobles asteriscos** de
   los datos se muestran en seminegrita y a pleno tono. Nada más: ni enlaces
   ni cursivas, para que las síntesis sigan siendo texto llano en los datos. */

export function ConNegritas({ texto }: { texto: string }) {
  return (
    <>
      {texto.split(/\*\*(.+?)\*\*/g).map((parte, i) =>
        i % 2 ? (
          <strong key={i} className="font-semibold text-cream">
            {parte}
          </strong>
        ) : (
          parte
        ),
      )}
    </>
  );
}

/** El mismo texto sin las marcas, para metadatos y lectores que no las
 *  interpretan. */
export const sinMarcas = (texto: string) => texto.replace(/\*\*(.+?)\*\*/g, "$1");
