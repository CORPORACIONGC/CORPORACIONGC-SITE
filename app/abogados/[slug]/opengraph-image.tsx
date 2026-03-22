import { ImageResponse } from "next/og";

export const alt = "Corporación GC — Perfil de Abogado";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TEAM_DATA: Record<string, { name: string; role: string; areas: string }> = {
  "oscar-gonzalez": { name: "Dr. Óscar Eduardo González Camacho", role: "Fundador y Director", areas: "Derecho Administrativo · Contencioso Administrativo · Derecho Constitucional" },
  "khevin-sanchez": { name: "Lic. Khevin Sánchez Zamora", role: "Abogado Asociado", areas: "Medidas Cautelares · Contencioso Administrativo · Contratación Pública" },
  "katherine-gonzalez": { name: "Licda. Katherine González Coto", role: "Abogada Asociada", areas: "Responsabilidad Patrimonial · Derecho Expropiatorio · Contencioso Administrativo" },
  "mariana-montero": { name: "Licda. Mariana Montero Acuña", role: "Abogada Asociada", areas: "Malpraxis Médica · Iatrogenia · Responsabilidad Patrimonial" },
  "esteban-perez": { name: "Lic. Esteban Pérez Herrera", role: "Abogado Asociado", areas: "Derecho Urbanístico · Contencioso Administrativo · Contratación Pública" },
  "jose-carlos-solano": { name: "Lic. José Carlos Solano Salas", role: "Abogado Asociado", areas: "Derecho Constitucional · Contencioso Administrativo · Derecho Tributario" },
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = TEAM_DATA[slug] ?? { name: "Abogado", role: "Corporación GC", areas: "" };

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
            Corporación GC · {member.role}
          </span>
        </div>

        <h1 style={{ fontSize: "56px", fontWeight: 300, color: "#F7F3EE", lineHeight: 1.15, margin: 0, letterSpacing: "-0.02em" }}>
          {member.name}
        </h1>

        <p style={{ fontSize: "18px", color: "rgba(247,243,238,0.5)", marginTop: "20px" }}>
          {member.areas}
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
