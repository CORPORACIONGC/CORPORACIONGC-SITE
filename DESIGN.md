---
version: alpha
name: Corporación GC — placa de bronce editorial
description: Sitio de un bufete costarricense de Derecho Público. Estética editorial-jurídica y minimalista sobre blanco (modo diurno) o negro borgoña (modo nocturno), con el burdeos como sello y el dorado como hilo. Una sola familia tipográfica, DM Sans, la del logotipo; titulares en ligera y en un solo tono, y un único énfasis en todo el sitio, el subrayado en hilo dorado. Fotografía de retrato real, encuadrada con la misma escala de rostro y la misma línea de ojos.
colors:
  primary: "#6B1D3A"
  primary-light: "#8B2252"
  primary-dark: "#4A0E27"
  accent: "#C4A265"
  accent-light: "#D4B87A"
  accent-text: "#7A5F2E"
  ink: "#1C1C1E"
  ink-muted: "#6B6B6D"
  surface: "#FFFFFF"
  surface-alt: "#FAFAFA"
  hairline: "#E8E8E9"
  night-surface: "#0F0A0D"
  night-surface-alt: "#140F14"
  night-ink: "#F7F3EE"
  band: "#3A0B1F"
  on-primary: "#FFFFFF"
typography:
  wordmark-display:
    fontFamily: DM Sans
    fontSize: 4.5rem
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.08em
  wordmark-display-mobile:
    fontFamily: DM Sans
    fontSize: 2rem
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.08em
  headline:
    fontFamily: DM Sans
    fontSize: 4rem
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: -0.015em
  title:
    fontFamily: DM Sans
    fontSize: 2.375rem
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: -0.012em
  card-title:
    fontFamily: DM Sans
    fontSize: 1.1875rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.01em
  quote:
    fontFamily: DM Sans
    fontSize: 1.375rem
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: -0.01em
  literal-passage:
    fontFamily: DM Sans
    fontSize: 21px
    fontWeight: 300
    lineHeight: 1.55
  folio-title-mobile:
    fontFamily: DM Sans
    fontSize: 26px
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: -0.012em
  folio-prose:
    fontFamily: DM Sans
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.7
  folio-title:
    fontFamily: DM Sans
    fontSize: 30px
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: -0.012em
  lead:
    fontFamily: DM Sans
    fontSize: 1.1875rem
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: DM Sans
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.7
  card-name:
    fontFamily: DM Sans
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.01em
  meta:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.16em
  wordmark-caption:
    fontFamily: DM Sans
    fontSize: 9px
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: 0.3em
  membrete-name:
    fontFamily: DM Sans
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.2em
  membrete-name-mobile:
    fontFamily: DM Sans
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.2em
  membrete-caption:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.34em
  membrete-caption-mobile:
    fontFamily: DM Sans
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.34em
  group-tab:
    fontFamily: DM Sans
    fontSize: 28px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: -0.015em
  group-tab-large:
    fontFamily: DM Sans
    fontSize: 32px
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: -0.015em
  article-number:
    fontFamily: DM Sans
    fontSize: 44px
    fontWeight: 300
    lineHeight: 1
    letterSpacing: -0.02em
  timeline-year:
    fontFamily: DM Sans
    fontSize: 26px
    fontWeight: 300
    lineHeight: 1
    letterSpacing: -0.01em
  button:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.025em
rounded:
  none: 0px
  sm: 6px
  md: 8px
  lg: 12px
spacing:
  gutter-mobile: 24px
  gutter-desktop: 40px
  container: 1400px
  section-mobile: 96px
  section-desktop: 128px
  team-gap: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 14px 28px
  button-primary-hover:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.on-primary}"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent-text}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 14px 28px
  button-outline-night:
    backgroundColor: "{colors.night-surface}"
    textColor: "{colors.accent}"
    rounded: "{rounded.md}"
  team-portrait:
    backgroundColor: "{colors.surface-alt}"
    rounded: "{rounded.none}"
    width: 250px
    height: 312px
  team-name:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.ink}"
    typography: "{typography.card-name}"
  team-role:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.meta}"
  section-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
  signature-underline:
    backgroundColor: "{colors.accent}"
    height: 1.5px
  logo-band:
    backgroundColor: "{colors.band}"
    textColor: "{colors.night-ink}"
  button-primary-active:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.on-primary}"
  button-outline-night-hover:
    backgroundColor: "{colors.night-surface}"
    textColor: "{colors.accent-light}"
  divider:
    backgroundColor: "{colors.hairline}"
    height: 1px
  team-section-night:
    backgroundColor: "{colors.night-surface-alt}"
    textColor: "{colors.night-ink}"
---

## Overview

Una placa de bronce convertida en interfaz. Corporación GC es un bufete dedicado exclusivamente al Derecho Público, fundado y dirigido por un ex-Magistrado de la Sala Primera y co-redactor del CPCA, y el sitio tiene que transmitir esa autoridad con la sobriedad de una revista de ideas y la precisión de una sentencia bien redactada. La página respira: mucho blanco, pocas piezas, cada una con un trabajo claro. El burdeos aparece como sello, en el énfasis de un titular o en el botón principal; el dorado aparece como hilo, en una línea fina o en un borde. La fotografía es siempre de personas reales del despacho.

El sitio tiene dos temas. El diurno es blanco con tinta casi negra; el nocturno es negro con un matiz borgoña y tinta marfil. El tema se decide por la preferencia del sistema o por la hora local, y todo componente debe verse correcto en ambos.

## Colors

La paleta es corta a propósito. **Burdeos (#6B1D3A)** es el color de marca y del botón principal; su versión clara (#8B2252) queda para el paso del cursor sobre el botón principal. Los titulares nunca llevan color: van en la tinta del tema. **Dorado (#C4A265)** es el hilo: bordes, líneas finas, iconos sobre fondo oscuro. Como texto sobre blanco no alcanza el contraste AA, así que el rótulo del botón con borde dorado usa el **bronce oscuro (#7A5F2E)** en modo diurno y recupera el dorado en modo nocturno.

La tinta (#1C1C1E) se atenúa por opacidad para jerarquizar: 85 % para el texto de apoyo importante, 70–75 % para párrafos secundarios y 65 % para metadatos, cargos y etiquetas. El 65 % es el piso para texto que deba leerse: sobre blanco da 5,3:1, mientras que el 60 % queda en 4,47:1, apenas por debajo de AA. Por debajo de ese piso solo van iconos y filetes. La **banda borgoña (#3A0B1F)** sostiene los logos de clientes y la sección de publicaciones, que son oscuras en ambos temas.

## Typography

Una sola familia, **DM Sans**, la misma del logotipo. Se carga como fuente variable con su eje de tamaño óptico: el navegador elige el diseño según el tamaño, más abierto en el texto pequeño y más cerrado y de trazo más fino en los titulares. Como ese diseño de gran tamaño ya viene cerrado, el interletraje de los titulares es apenas negativo (−0,015 em); más apretado, las letras se tocan.

**Un titular, un tono.** Los titulares de sección (`type-headline`) y los títulos destacados, como el nombre del fundador o el de la sentencia fundacional (`type-title`), van en ligera (300), en un solo color y un solo peso; la jerarquía la hacen el tamaño y el aire. Partir cada titular en dos colores y dos pesos era una fórmula repetida en 39 titulares que se leía como plantilla, y quedó retirada: si un componente todavía envuelve una frase en un `span` de color, el `span` hereda el color y el peso del titular. El único énfasis del sitio es **el subrayado del abogado** (`gc-subrayado`): un hilo dorado bajo «conocimiento de autor», la frase que resume a la firma, que se traza de izquierda a derecha cuando el titular entra en pantalla. Se usa una sola vez; si aparece en un segundo lugar, deja de significar. En modo nocturno la ligera sube a 350, porque el texto claro sobre negro se adelgaza por irradiación. Los títulos de tarjetas, como artículos o sentencias, van en semibold a 19 px (`type-card-title`). Las citas generales van en ligera a 22 px y en redonda (`type-quote`); los pasajes literales de las sentencias van en la cursiva real de DM Sans, que se carga para eso.

El nombre de la firma en el hero queda fuera de esa escala. Repite la composición del logotipo: DM Sans medio, en mayúsculas, con 0,08 em de interletraje (`wordmark-display`), y debajo, en versalitas pequeñas, la línea «Fundado y dirigido por…», que hace el papel del «ABOGADOS» del logotipo. En móvil el nombre baja a 32 px para no partirse en dos líneas.

Para el texto, el párrafo de apoyo mide 16 px con interlínea 1,7 (`type-body`) y el párrafo introductorio 17–19 px con interlínea 1,65 (`type-lead`); ambos se mantienen entre 50 y 60 caracteres por línea. Las etiquetas en versalitas (`type-label`) miden 11 px, peso 600 y 0,16 em de interletraje, y se usan con moderación: el hero, Áreas de práctica y Jurisprudencia destacada, las tres secciones donde la etiqueta nombra algo que el titular no dice. Ningún texto de la portada baja de 11 px; la única excepción es la palabra «ABOGADOS» bajo el nombre en el logotipo (`wordmark-caption`, 9 px), que forma parte de la marca.

**En todo el sitio.** Las páginas interiores (perfiles, áreas, artículos, jurisprudencia, sobre nosotros, contacto y la página 404) arman sus titulares con la clase `font-display` y un tamaño de Tailwind. Unas reglas globales en `app/globals.css` les aplican la misma voz sin reescribir cada componente: desde `text-3xl` (unos 30 px) el titular va en ligera y en un solo tono; por debajo el título va en semibold; el interletraje se abre a −0,01/−0,015 em salvo en los rótulos que usan `tracking-wide` a propósito, como el menú móvil; y toda cita con `font-display italic` pasa a ligera y redonda. En los artículos, el `h1` va en ligera, `h2` y `h3` en semibold con interlínea 1,25, las citas en bloque en redonda, y el texto justificado lleva división silábica en escritorio y se alinea a la izquierda por debajo de 640 px. Las imágenes para redes sociales (`lib/og-templates.tsx`) usan también solo DM Sans, en un solo tono. El sitio ya no carga Newsreader ni Cormorant Garamond.

Los roles viven como variables y utilidades `type-*` en `app/globals.css` y son la única fuente de estas decisiones. Un componente nuevo usa esos roles en vez de combinar tamaños, pesos e interletrajes a mano.

## Layout

Contenedor de 1400 px con márgenes de 24 px en móvil y 40 px desde tablet. Las secciones de la portada respiran con 96 px de relleno vertical en móvil y 128–144 px en escritorio. Todo el texto de la portada se alinea a la izquierda, sobre el mismo eje que las imágenes; la única composición asimétrica permitida es la de dos columnas donde el titular ocupa la izquierda y el párrafo de apoyo la derecha, alineados por la base.

El equipo se muestra en una sola fila de cinco retratos en escritorio (desde 1024 px), sin flechas ni desplazamiento, para que el visitante vea a todo el despacho de un vistazo. Por debajo de 1024 px la fila se desliza con el dedo y la tarjeta siguiente asoma por el borde. El nombre y el cargo viven siempre debajo de la foto.

## Elevation & Depth

La profundidad viene del contraste entre superficies y de líneas finas, casi nunca de sombras. Los retratos llevan un filete interior de 1 px al 6 % para que la foto no se funda con el fondo claro. Las tarjetas de jurisprudencia conservan una sombra suave y difusa teñida de burdeos; ninguna otra pieza de la portada lleva sombra, y el desenfoque de fondo (vidrio) queda reservado a la barra de navegación.

## Shapes

Las fotografías tienen esquinas rectas: son retratos y documentos, y el ángulo recto les da el aire de una lámina. Los botones usan 8 px de radio; las tarjetas de áreas y de publicaciones, 12 px. Las etiquetas de tipo de sentencia usan 6 px.

## Components

**Retrato del equipo.** Foto 4:5 recortada a partir de la detección del rostro, de modo que las cinco cabezas tengan la misma escala y los ojos la misma altura. Los recortes viven en `public/images/equipo/<slug>.jpg`; para un integrante nuevo se genera su recorte con la misma proporción de rostro (ancho del rostro ≈ 36 % del ancho del cuadro) y la misma línea de ojos (≈ 23,5 % de la altura). La imagen se muestra al 90 % de saturación y recupera el color completo al pasar el cursor o al recibir el foco; no se amplía. Debajo va un filete fino, el nombre en DM Sans 17 px semibold con el título académico (Lic., Licda., MSc., Dr.) atenuado en peso regular, y el cargo en 13 px. Al pasar el cursor o recibir el foco, un trazo burdeos (dorado de noche) recorre el filete de izquierda a derecha, como el subrayado de La firma; el nombre toma ese color y aparece una flecha en la línea del cargo, que así no le quita ancho al nombre. En la fila deslizable de móvil y tableta, un indicador de cinco segmentos y un contador («3 / 5») marcan la posición. Debajo de la fila, «Conozca al equipo completo» lleva a la sección de abogados de Sobre nosotros.

**Botones.** El principal es burdeos macizo con texto blanco. El secundario tiene borde dorado y texto en bronce oscuro de día, dorado de noche; en las secciones siempre oscuras se usa la variante `outline-inverse`. Ambos se desplazan levemente hacia el cursor con una desaceleración exponencial, sin rebote.

**Membrete.** La composición de la hoja membretada de los escritos, llevada a la web (`components/ui/Membrete.tsx`): el sello GC a la izquierda y, a su lado, «CORPORACIÓN GC» en DM Sans medio, mayúscula y 0,2 em de interletraje (`membrete-name`), con «ABOGADOS · DERECHO PÚBLICO» debajo en gris espaciado (`membrete-caption`). Encabeza «Sobre nosotros», centrado y seguido de la regla dorada de los dictámenes. Es una pieza de marca: sus tamaños quedan fuera de la escala de texto a propósito.

**Figuras de fotos de evento.** Las fotos de actos, como la capacitación a ELEINMSA, van a lo ancho en proporción 3:2 y nunca en una columna estrecha: en un recuadro vertical, el recorte lateral deja fuera a quien habla.

**Explorador de áreas de práctica** (`components/sections/PracticeExplorer.tsx`). Reemplaza la cuadrícula de tarjetas con ícono. Las 32 áreas se ordenan en cinco grupos de práctica: Litigio y tribunales, Administración pública, Sectores regulados, Territorio y bienes públicos, y Cobertura complementaria. En escritorio, los grupos forman una columna de pestañas verticales en DM Sans ligera de 28–32 px (`group-tab`) con su conteo. El grupo activo toma el color de marca, su filete se traza y aparece una flecha. A la derecha, las áreas del grupo van en dos columnas de filas con filete, con el nombre en semibold y la descripción en 13 px, y el mismo trazo al pasar el cursor que la fila del equipo. El grupo cambia al pasar el cursor, con clic o con las flechas del teclado. Los paneles se apilan en la misma celda para que la sección no salte. En móvil, los grupos son una tira de pestañas deslizable. Las 32 áreas están siempre en el HTML inicial. Si se agrega un área nueva a `PRACTICE_AREA_PAGES`, hay que asignarla a un grupo en `GROUPS`; si no, cae por defecto en el grupo que corresponde a su prioridad.

**Folio de sentencia** (`components/sections/SentenciaFolio.tsx`). La sentencia destacada de la portada es una hoja de papel (`gc-papel`) apoyada sobre dos hojas más, como un expediente (`gc-pila`). La sombra tiene cuatro capas teñidas de burdeos, nunca negras. Arriba va el encabezado de la resolución, centrado: tribunal, número, fecha y hora, un filete dorado, la categoría y el título. El título se escribe a 26–30 px en ligera, un encabezado de documento subordinado al titular de la sección. Debajo, dos voces separadas por un filete. A la izquierda, tres síntesis en prosa de la firma: el caso, el análisis y el impacto en la jurisprudencia (`sintesisPortada`). A la derecha, los pasajes literales de la Sala **en cursiva**, con comillas angulares doradas colgadas al margen y su considerando debajo (`fragmentosPortada`, verificados por `fragmentosLiterales`). Al pie van la fórmula de redacción, el enlace al texto íntegro en Nexus y el enlace al análisis. Con más de una sentencia, debajo del folio aparece un índice (año, categoría, título y número) y la hoja cambia a la elegida; con una sola, el índice no se muestra. La página de cada sentencia no reproduce el texto íntegro: enlaza a Nexus y cierra con una bibliografía (sentencia, precedentes citados y normativa, con enlaces a Nexus y SINALEVI).

**Página de una sentencia** (`app/jurisprudencia-destacada/[slug]/page.tsx`). Se lee como un documento analizado. Arriba, el título y el resumen a la izquierda y, a la derecha, la ficha de la resolución en papel (`gc-papel`), con el enlace al texto íntegro en Nexus. Debajo, la franja «En síntesis», con el caso, el análisis y el impacto. El cuerpo es prosa de la firma (`analisis` en los datos), con índice al margen en números romanos. En cada sección, los pasajes literales de la Sala se tejen en cursiva después del primer párrafo (o antes, si la prosa los comenta), con las frases decisivas bajo el subrayado dorado (`gc-subrayado`) y el considerando al pie. Los pasajes de otras resoluciones que citan la sentencia (`citasExternas`) usan el mismo tratamiento, van después del párrafo que los introduce y enlazan su referencia a Nexus. Los elementos visuales viven en `components/jurisprudencia/SentenciaVisuales.tsx` y se activan por sección (`visual`):
- la trayectoria procesal del caso;
- la línea de tiempo de los precedentes hasta el giro;
- los anclajes normativos, con el número del artículo a 44 px y, si no es la Constitución, la ley al lado («LGAP»);
- el contraste entre dos categorías jurídicas;
- el período que cubre un cálculo;
- tres formas de un concepto (`formas`, por id de sección): columnas con numeral romano a 26 px, título y una explicación breve de la firma;
- el reparto de una condena entre causas concurrentes (`reparto`): el monto total, una barra dividida en proporción, en burdeos la parte que asume la Administración y en dorado la otra, y el detalle de cada parte;
- la recepción: hitos verticales con año, órgano, una frase y los votos enlazados;
- las citas (`components/jurisprudencia/CitasExplorador.tsx`): la cifra total, una serie anual en columnas doradas y el reparto por despacho con barras. Cada año y cada despacho es un botón que abre la lista de resoluciones filtrada, con fecha, número enlazado a Nexus, despacho y expediente; la lista completa está en el HTML y se descarga en CSV. Las cifras se calculan desde la lista (`lib/jurisprudencia-citas.ts`, generada), nunca se escriben a mano. Al pie, el método y la fecha de corte.

Todos se dibujan con filetes, puntos dorados y un único punto burdeos para el hito final. Toda frase literal de un visual se comprueba con `esLiteral` y se descarta si no coincide con un pasaje. La página cierra con el texto íntegro en Nexus, la bibliografía (con la jurisprudencia posterior que la cita, `citadaPor`) y quién redactó la sentencia.

**Movimiento.** Una sola entrada por bloque: aparece desde 20 px más abajo con desaceleración exponencial (`cubic-bezier(0.16, 1, 0.3, 1)`). Con `prefers-reduced-motion` todo llega a su estado final sin animar.

## Do's and Don'ts

- Usar `type-headline`, `type-title`, `type-card-title` y `type-quote` para los titulares y las citas; todo en DM Sans.
- Escribir cada titular en un solo color y un solo peso; el único énfasis del sitio es el subrayado dorado del manifiesto de La firma.
- Mantener los párrafos entre 50 y 60 caracteres por línea y en 16 px o más.
- Encuadrar cada retrato nuevo con la misma escala de rostro y línea de ojos que los existentes.
- No partir titulares en dos colores ni en dos pesos, ni repetir el subrayado dorado en otra sección.
- No cambiar la composición del nombre de la firma en el hero: DM Sans medio, mayúsculas, 0,08 em.
- Reservar la cursiva para los pasajes literales de las sentencias; las citas de otra clase van en redonda. No cerrar el interletraje de los titulares más allá de −0,015 em.
- No poner etiquetas en versalitas sobre cada titular; tres en toda la portada como máximo.
- No superponer nombres, cargos ni biografías sobre las fotos.
- No usar texto dorado sobre fondo claro (2,4:1), ni tinta por debajo del 65 % de opacidad para texto que deba leerse.
- No usar curvas con rebote, zoom sobre fotos al pasar el cursor, ni vidrio esmerilado fuera de la barra de navegación.
