import { ImageResponse } from "next/og";

export const alt = "Corporación GC — Área de Práctica";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const AREAS: Record<string, { title: string; subtitle: string }> = {
  "litigio-contencioso-administrativo": { title: "Litigio Contencioso Administrativo", subtitle: "Demandas contra el Estado y entes públicos ante el Tribunal Contencioso Administrativo" },
  "medidas-cautelares": { title: "Medidas Cautelares", subtitle: "Protección jurisdiccional urgente: provisionalísimas, ante causam y definitivas" },
  "casacion-sala-primera": { title: "Recursos de Casación ante Sala Primera", subtitle: "Impugnación de sentencias del TCA ante la Corte Suprema de Justicia" },
  "asesoria-regulatoria": { title: "Asesoría Regulatoria", subtitle: "Redacción de reglamentos, decretos ejecutivos y normativa administrativa" },
  "informes-juridicos-dictamenes": { title: "Informes Jurídicos y Dictámenes", subtitle: "Opiniones técnicas sobre la legalidad de actuaciones administrativas" },
  "derecho-administrativo": { title: "Derecho Administrativo", subtitle: "Procedimientos administrativos, recursos de revocatoria y apelación" },
  "derecho-constitucional": { title: "Derecho Constitucional", subtitle: "Amparo, inconstitucionalidad y habeas corpus ante la Sala Constitucional" },
  "contratacion-publica": { title: "Contratación Pública", subtitle: "Objeciones al cartel, impugnación de adjudicaciones y litigio en licitaciones" },
  "derecho-notarial": { title: "Derecho Notarial y Registral", subtitle: "Escrituras públicas, protocolizaciones, constitución de sociedades y gestión registral" },
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = AREAS[slug] ?? { title: "Área de Práctica", subtitle: "" };

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
            Corporación GC · Área de Práctica
          </span>
        </div>

        <h1 style={{ fontSize: "52px", fontWeight: 300, color: "#F7F3EE", lineHeight: 1.15, margin: 0, letterSpacing: "-0.02em", maxWidth: "900px" }}>
          {area.title}
        </h1>

        <p style={{ fontSize: "20px", color: "rgba(247,243,238,0.5)", marginTop: "20px", lineHeight: 1.5, maxWidth: "700px" }}>
          {area.subtitle}
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
