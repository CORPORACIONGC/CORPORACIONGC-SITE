import { ArrowDown } from "@phosphor-icons/react/dist/ssr";

/* Acceso al articulado en el primer pantallazo de las guías que publican
   una norma completa: quien busca el texto llega a él de un toque, y los
   artículos más consultados abren directo por su ancla (#art-N), que el
   visor de la norma reconoce. El MDX no admite expresiones, así que los
   artículos llegan como texto: «39:Plazo para demandar|90:Audiencia». */
export function IrAlArticulado({
  etiqueta,
  articulos: lista = "",
}: {
  etiqueta: string;
  articulos?: string;
}) {
  const articulos = lista
    .split("|")
    .map((par) => par.split(":").map((x) => x.trim()))
    .filter(([art, rotulo]) => art && rotulo);
  return (
    <nav aria-label="Acceso al articulado" className="border-y border-cream/10 py-5">
      <a
        href="#articulado-vigente"
        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-burgundy via-[#5A1730] to-[#4A0E27] px-5 py-3 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:from-burgundy-light hover:via-burgundy hover:to-[#5A1730] active:scale-[0.97]"
      >
        <ArrowDown size={16} weight="bold" aria-hidden="true" />
        {etiqueta}
      </a>
      {articulos.length > 0 && (
        <ul role="list" className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {articulos.map(([art, rotulo]) => (
            <li key={art}>
              <a
                href={`#art-${art}`}
                className="text-cream/70 underline decoration-cream/25 underline-offset-4 transition-colors hover:text-burgundy hover:decoration-burgundy dark:hover:text-hilo-texto dark:hover:decoration-hilo"
              >
                <span className="tabular-nums text-cream/90">Art. {art}</span> · {rotulo}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
