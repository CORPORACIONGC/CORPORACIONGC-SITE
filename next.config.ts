import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

const isDev = process.env.NODE_ENV === "development";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://www.youtube.com https://www.google.com https://www.googletagmanager.com https://www.google-analytics.com${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.ytimg.com https://*.youtube.com https://maps.google.com https://maps.gstatic.com https://*.googleapis.com https://*.ggpht.com https://www.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self'",
  "frame-src 'self' https://maps.google.com https://www.google.com https://www.youtube.com https://youtube.com",
  `connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://*.analytics.google.com${isDev ? " ws://localhost:* http://localhost:*" : ""}`,
  "object-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

/* Cada PDF de /pdfs tiene su ficha en /articulos, que es la que lleva el
   menú, el área y el contacto. Search Console mostraba los PDF por encima de
   sus fichas (208 impresiones del libro del proceso ejecutivo frente a 25 de
   su ficha), así que cada PDF declara su ficha como canónica. La lista sale
   del campo pdfFile de cada artículo, y no hay que mantenerla a mano. */
const FICHAS_DE_PDF: { pdf: string; slug: string }[] = fs
  .readdirSync(path.join(process.cwd(), "content", "articles"))
  .filter((f) => f.endsWith(".md"))
  .flatMap((f) => {
    const texto = fs.readFileSync(path.join(process.cwd(), "content", "articles", f), "utf8");
    const pdf = texto.match(/^pdfFile:\s*"?([^"\n]+\.pdf)"?\s*$/m)?.[1];
    return pdf ? [{ pdf, slug: f.replace(/\.md$/, "") }] : [];
  });

const nextConfig: NextConfig = {
  images: {
    // AVIF primero: mejor nitidez por byte que WebP/JPEG para fotos.
    formats: ["image/avif", "image/webp"],
    // Next 16 exige declarar las calidades permitidas. 90 = foto del fundador
    // en máxima nitidez; 75 se mantiene como valor por defecto del resto.
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "corporaciongc.com" }],
        destination: "https://www.corporaciongc.com/:path*",
        permanent: true,
      },
      // URL corrupta detectada en auditoría SEO: Y29udHJhdG es base64 truncado
      // de "contratacion". Consolida cualquier visita a la URL canónica.
      {
        source: "/areas/Y29udHJhdG",
        destination: "/areas/contratacion-publica",
        permanent: true,
      },
      // El artículo «Abogado contencioso-administrativo» competía con su
      // propia área por la misma consulta comercial: 434 y 362 impresiones,
      // cero clics cada una. Se consolida en el área, que ya tiene el
      // contenido legal y las preguntas frecuentes.
      {
        source: "/articulos/abogados-derecho-contencioso-administrativo-costa-rica",
        destination: "/areas/litigio-contencioso-administrativo",
        permanent: true,
      },
      // Mismo caso con «Abogados de Derecho Administrativo»: el artículo y el
      // área peleaban la misma consulta (en octubre, 126 impresiones y 1 clic
      // contra 959 y 10). Su contenido útil pasó al área.
      {
        source: "/articulos/abogados-derecho-administrativo-costa-rica",
        destination: "/areas/derecho-administrativo",
        permanent: true,
      },
      /* Las seis materias complementarias pasaron a una sola página. Cada
         dirección antigua lleva a su sección dentro de ella, para que quien
         tenga el enlace guardado caiga donde esperaba. */
      /* José Carlos Solano dejó la firma; su perfil lleva al equipo. */
      { source: "/abogados/jose-carlos-solano", destination: "/abogados", permanent: true },
      { source: "/areas/derecho-civil", destination: "/areas/otras-materias#civil", permanent: true },
      { source: "/areas/derecho-de-familia", destination: "/areas/otras-materias#familia", permanent: true },
      { source: "/areas/derecho-laboral", destination: "/areas/otras-materias#laboral", permanent: true },
      { source: "/areas/derecho-notarial", destination: "/areas/otras-materias#notarial", permanent: true },
      {
        source: "/areas/derecho-electoral-financiamiento-politico",
        destination: "/areas/otras-materias#electoral",
        permanent: true,
      },
      { source: "/areas/comercio-internacional", destination: "/areas/otras-materias#comercio", permanent: true },
      /* Variantes mal escritas que Search Console registró con impresiones
         en setiembre (enlaces externos o generados); todas daban 404. */
      { source: "/articulos/recurso-amparo-costarricense", destination: "/articulos/recurso-amparo-costa-rica", permanent: true },
      { source: "/articulos/recurso-amparo-costarica", destination: "/articulos/recurso-amparo-costa-rica", permanent: true },
      { source: "/articulos/que-es-the-cpca-costa-rica", destination: "/articulos/que-es-el-cpca-costa-rica", permanent: true },
      { source: "/articulos/que-es-cpca-costa-rica", destination: "/articulos/que-es-el-cpca-costa-rica", permanent: true },
      { source: "/articulos/sanciones-suppliers-contratacion-publica-ley-9986", destination: "/articulos/sanciones-a-proveedores-contratacion-publica-ley-9986", permanent: true },
      { source: "/articulos/silencio-positivo-permiso-municipales", destination: "/articulos/silencio-positivo-permiso-municipal", permanent: true },
      { source: "/articulos/traslado-de-cargos-que-costa-rica", destination: "/articulos/traslado-de-cargos-que-hacer-costa-rica", permanent: true },
      { source: "/articulos/medidas-cautelares-contra-estado-costa-rica", destination: "/articulos/medidas-cautelares-contra-el-estado-costa-rica", permanent: true },
      { source: "/areas/casacion-sala-perfil", destination: "/areas/casacion-sala-primera", permanent: true },
      { source: "/areas/zona-mar%C3%ADtimo-terrestre", destination: "/areas/zona-maritimo-terrestre", permanent: true },
      // Search Console conserva esta ruta del sitio anterior entre sus 404.
      // El artículo existe, con otra carpeta.
      {
        source: "/blog/:slug",
        destination: "/articulos/:slug",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/((?!pdfs/).*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: csp,
          },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          /* Vercel servía el HTML con «*»; el sitio no expone nada a otros
             orígenes, así que solo se admite el propio. */
          { key: "Access-Control-Allow-Origin", value: "https://www.corporaciongc.com" },
        ],
      },
      /* Los JSON y CSV de /datos se descargan desde las fichas, pero no
         deben competir en el índice de Google (que sí indexa CSV). */
      {
        source: "/datos/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/pdfs/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Los PDF casi nunca cambian: una semana de caché, y revalidación
          // en segundo plano cuando se reemplaza alguno.
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
        ],
      },
      ...FICHAS_DE_PDF.map(({ pdf, slug }) => ({
        source: `/pdfs/${pdf}`,
        headers: [{ key: "Link", value: `<https://www.corporaciongc.com/articulos/${slug}>; rel="canonical"` }],
      })),
    ];
  },
};

export default nextConfig;
