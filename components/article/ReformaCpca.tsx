/* Comparación "Régimen anterior vs CPCA" (reforma de 2008).
   Diseño estilizado (aportado por el cliente) que reemplaza la tabla Markdown
   de la sección "qué cambió" en el artículo del CPCA. Trae su propio encabezado
   de sección (eyebrow + H2 + lead) por diseño. Estilos en app/globals.css
   (.gc-reforma). */

export function ReformaCpca() {
  return (
    <section className="gc-reforma" aria-labelledby="reforma-h2">
      <span className="gc-eyebrow">Reforma del 2008</span>

      <h2 id="reforma-h2">
        De la revisión del acto <em>a la tutela judicial plena</em>
      </h2>

      <p className="gc-lead">
        La entrada en vigor del Código Procesal Contencioso Administrativo cambió
        las reglas del juego frente al Estado. Una comparación, aspecto por
        aspecto, muestra el alcance de la transformación.
      </p>

      <div className="gc-cols" aria-hidden="true">
        <div className="gc-col-h">Aspecto</div>
        <div className="gc-col-h">
          <span className="gc-year">Antes</span>
          Régimen anterior
          <span className="gc-cite">Ley N.° 3667 · 1966</span>
        </div>
        <div className="gc-col-h gc-col-h--new">
          <span className="gc-year">Hoy</span>
          CPCA
          <span className="gc-cite">Ley N.° 8508 · vigente desde 2008</span>
        </div>
      </div>

      <div className="gc-row">
        <div className="gc-cell gc-aspect">
          <span className="gc-aspect-num">01</span>Enfoque del proceso
        </div>
        <div className="gc-cell gc-old" data-label="Antes">
          Esencialmente revisor del acto.
        </div>
        <div className="gc-cell gc-new" data-label="Hoy">
          Tutela judicial plena de la persona.
        </div>
      </div>

      <div className="gc-row">
        <div className="gc-cell gc-aspect">
          <span className="gc-aspect-num">02</span>Forma del proceso
        </div>
        <div className="gc-cell gc-old" data-label="Antes">
          Predominantemente escrito.
        </div>
        <div className="gc-cell gc-new" data-label="Hoy">
          Oral y por audiencias.
        </div>
      </div>

      <div className="gc-row">
        <div className="gc-cell gc-aspect">
          <span className="gc-aspect-num">03</span>Agotar la vía administrativa
        </div>
        <div className="gc-cell gc-old" data-label="Antes">
          Exigible como regla general.
        </div>
        <div className="gc-cell gc-new" data-label="Hoy">
          Facultativo.<span className="gc-art">art. 31</span>
        </div>
      </div>

      <div className="gc-row">
        <div className="gc-cell gc-aspect">
          <span className="gc-aspect-num">04</span>Qué se puede pedir
        </div>
        <div className="gc-cell gc-old" data-label="Antes">
          Centrado en la anulación del acto.
        </div>
        <div className="gc-cell gc-new" data-label="Hoy">
          Catálogo amplio de pretensiones.<span className="gc-art">art. 42</span>
        </div>
      </div>

      <div className="gc-row">
        <div className="gc-cell gc-aspect">
          <span className="gc-aspect-num">05</span>Medidas cautelares
        </div>
        <div className="gc-cell gc-old" data-label="Antes">
          Limitadas.
        </div>
        <div className="gc-cell gc-new" data-label="Hoy">
          Desarrolladas.<span className="gc-art">arts. 19–30</span>
        </div>
      </div>

      <aside className="gc-closing">
        <p>
          Esta transformación es la razón por la que hoy <em>se puede demandar al
          Estado</em> de forma mucho más completa que antes de 2008.
        </p>
      </aside>
    </section>
  );
}
