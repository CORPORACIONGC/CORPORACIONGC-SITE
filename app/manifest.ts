import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Corporación GC — Abogados Especialistas en Derecho Público",
    short_name: "Corporación GC",
    description:
      "Bufete de abogados costarricense especializado en Derecho Público: Administrativo, Constitucional, Contencioso y Contratación Pública.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#6B1D3A",
    lang: "es",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/images/logo-gc.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
