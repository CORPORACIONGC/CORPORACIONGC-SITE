import { ImageResponse } from "next/og";

export const alt = "Corporación GC — Publicación";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ARTICLES: Record<string, { title: string; author: string; type: string }> = {
  "tesis-ia-justicia": { title: "Hacia la implementación de sistemas automatizados de decisión basados en IA en la justicia costarricense", author: "Lic. Khevin Sánchez Zamora", type: "Tesis" },
  "hermeneutica-ia-contratacion-publica": { title: "Administración Pública aumentada: IA en la contratación estatal costarricense", author: "Lic. Khevin Sánchez Zamora, Licda. Mariana Montero Acuña", type: "Artículo" },
  "personalidad-juridica-instrumental": { title: "La personalidad jurídica instrumental como técnica de organización administrativa", author: "Lic. Khevin Sánchez Zamora", type: "Artículo" },
  "tesis-iatrogenia-responsabilidad-administrativa": { title: "La iatrogenia en la responsabilidad administrativa", author: "Licda. Mariana Montero Acuña", type: "Tesis" },
  "tesis-dano-moral-indirecto": { title: "El daño moral indirecto familiar y social como responsabilidad patrimonial de la Administración", author: "Licda. Katherine González Coto", type: "Tesis" },
  "potestad-discrecional-municipalidades-urbanismo": { title: "La potestad discrecional de la Administración Municipal en la regulación urbanística", author: "Lic. Esteban Pérez Herrera", type: "Tesis" },
  "control-jurisdiccional-actos-gobierno": { title: "El control jurisdiccional de los actos de gobierno", author: "Lic. José Carlos Solano Salas", type: "Tesis" },
  "tesis-procedimiento-expropiatorio-cr": { title: "Transformación y perspectivas del procedimiento expropiatorio en Costa Rica", author: "Licda. Katherine González Coto", type: "Tesis" },
  "libro-justicia-administrativa": { title: "La Justicia Administrativa frente a la Inactividad Material de la Administración Pública", author: "Dr. Óscar Eduardo González Camacho", type: "Libro" },
  "libro-nuevo-proceso-contencioso": { title: "El Nuevo Proceso Contencioso Administrativo", author: "Dr. Óscar Eduardo González Camacho", type: "Libro" },
  "libro-proceso-ejecutivo": { title: "Consideraciones Prácticas en torno al Proceso Ejecutivo", author: "Dr. Óscar Eduardo González Camacho", type: "Libro" },
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES[slug] ?? { title: "Publicación Académica", author: "", type: "Artículo" };

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1A0A10 0%, #2D1020 40%, #4A0E27 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 100px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #C4A265, #6B1D3A, #C4A265)" }} />

        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <div style={{ width: "32px", height: "1px", backgroundColor: "#C4A265" }} />
          <span style={{ fontSize: "14px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(247,243,238,0.45)" }}>
            {article.type} · Corporación GC
          </span>
        </div>

        <h1 style={{ fontSize: "42px", fontWeight: 300, color: "#F7F3EE", lineHeight: 1.2, margin: 0, letterSpacing: "-0.01em", maxWidth: "950px" }}>
          {article.title.length > 110 ? article.title.substring(0, 110) + "…" : article.title}
        </h1>

        <p style={{ fontSize: "20px", color: "#C4A265", marginTop: "24px" }}>
          {article.author}
        </p>

        <div style={{ position: "absolute", bottom: "50px", left: "100px", right: "100px", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "15px", color: "rgba(247,243,238,0.35)" }}>corporaciongc.com</span>
          <span style={{ fontSize: "13px", color: "rgba(247,243,238,0.25)" }}>San José, Costa Rica</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
