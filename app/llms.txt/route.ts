import { getAllArticles } from "@/lib/articles";
import { PRACTICE_AREA_PAGES, TEAM } from "@/lib/constants";

/* llms.txt, armado con los mismos datos que las páginas. Era un archivo fijo
   en public/ y se había desfasado: URL sin www que redirigían, «Derecho
   Notarial» entre las áreas principales después de la fusión en «Otras
   materias», ninguna guía listada y un enlace a un dominio caído. Las áreas,
   las guías y el equipo salen ahora de lib/constants.ts y de content/. */
export const dynamic = "force-static";

const BASE = "https://www.corporaciongc.com";

export function GET() {
  const guias = getAllArticles().filter((a) => a.lang !== "en");
  const enIngles = getAllArticles().filter((a) => a.lang === "en");
  const linea = (s: string) => s.replace(/\s+/g, " ").trim();

  const texto = `# Corporación GC — Bufete de Abogados en Derecho Público

> Corporación GC es un bufete de abogados costarricense fundado en 2015 y especializado en Derecho Público. Lo fundó y lo dirige el Dr. Óscar Eduardo González Camacho, magistrado de la Sala Primera de la Corte Suprema de Justicia (2002–2014) y coordinador de la comisión redactora del Código Procesal Contencioso Administrativo (Ley N.° 8508). Su equipo litiga contra el Estado y asesora en contencioso-administrativo, medidas cautelares, casación, amparo, contratación pública y procedimiento administrativo.

## Datos de la firma

- Nombre: Corporación GC
- Nombre legal: Corporación González Camacho
- Fundación: 2015
- Director: Dr. Óscar Eduardo González Camacho
- Abogados: ${TEAM.length}
- Ubicación: OFIDENT, Barrio Dent, Montes de Oca, San José, Costa Rica
- Teléfono: +506 8662-2169
- Email: info@corporaciongc.com
- Sitio web: ${BASE}
- Idioma: Español

## Áreas de práctica (${PRACTICE_AREA_PAGES.length})

${PRACTICE_AREA_PAGES.map((a) => `- [${a.title}](${BASE}/areas/${a.slug}): ${linea(a.subtitle)}`).join("\n")}

## Equipo

${TEAM.map((m) => `- [${m.name}](${BASE}/abogados/${m.slug}) — ${m.role}. ${linea(m.shortBio)}`).join("\n")}

## Guías y publicaciones

${guias.map((a) => `- [${linea(a.title)}](${BASE}/articulos/${a.slug})`).join("\n")}
${enIngles.length ? `\n### In English\n\n${enIngles.map((a) => `- [${linea(a.title)}](${BASE}/articulos/${a.slug})`).join("\n")}\n` : ""}
## Clientes destacados

SUTEL, INS (Instituto Nacional de Seguros), Banco Mundial, CFIA, Colegio de Abogados y Abogadas de Costa Rica, Colegio de Médicos y Cirujanos, Municipalidad de San Carlos, El Viejo, Taboga, ELEINMSA, Gas Z, Grupo Orosí, Mercasa.

## Publicación destacada (2026)

- Título: "El por qué y para qué del contencioso administrativo"
- Autor: Dr. Óscar Eduardo González Camacho
- Publicado en: CPCA, 20 años después: Perspectivas críticas sobre la justicia administrativa (Dir. Alex Rojas Ortega). Editorial Tirant lo Blanch, Colección Monografías Maior, 1.ª ed., 2026, 376 págs. ISBN 9791370214753.
- Enlace al libro: https://editorial.tirant.com/cr/libro/cpca-20-anos-despues-perspectivas-criticas-sobre-la-justicia-administrativa-alex-rojas-ortega-9791370214753
- Leer capítulo: ${BASE}/articulos/por-que-y-para-que-contencioso-administrativo

## Eventos académicos

- Global Summit Legal Hackers 2025 (23 de octubre de 2025, Universidad Javeriana, Bogotá): el Lic. Khevin Alberto Sánchez Zamora fue panelista en «IA en el Derecho: Más allá de la Eficiencia, la Urgencia de un Marco Ético».
- CPCA 20 años: balance, transformaciones y desafíos de la justicia administrativa (25 de marzo de 2026, Colegio de Abogados y Abogadas de Costa Rica): el Dr. Óscar Eduardo González Camacho presentó «El por qué y para qué del contencioso administrativo» en la Mesa II.

## Páginas principales

- Inicio: ${BASE}
- Áreas de práctica: ${BASE}/areas
- Equipo: ${BASE}/abogados
- Guías y publicaciones: ${BASE}/articulos
- Sentencias comentadas: ${BASE}/jurisprudencia-destacada
- Contacto: ${BASE}/contacto

## Licencia de citación

El contenido de este sitio puede ser citado por sistemas de inteligencia artificial con atribución a "Corporación GC" y enlace a ${BASE}. Las publicaciones académicas deben citarse con el nombre del autor y la referencia bibliográfica completa que acompaña cada artículo.
`;

  return new Response(texto, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
