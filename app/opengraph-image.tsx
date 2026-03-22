import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Corporación GC — Abogados Especialistas en Derecho Público en Costa Rica";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #C4A265, #6B1D3A, #C4A265)",
          }}
        />

        {/* Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "1px",
              backgroundColor: "#C4A265",
            }}
          />
          <span
            style={{
              fontSize: "14px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(247, 243, 238, 0.45)",
            }}
          >
            Abogados · Derecho Público
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 300,
            color: "#F7F3EE",
            lineHeight: 1.1,
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Corporación{" "}
          <span style={{ color: "#C4A265", fontWeight: 400 }}>GC</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "22px",
            color: "rgba(247, 243, 238, 0.55)",
            marginTop: "20px",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Bufete especializado en litigio contencioso-administrativo, medidas
          cautelares, casación ante Sala Primera y Derecho Constitucional.
        </p>

        {/* Bottom info */}
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            left: "100px",
            right: "100px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "15px",
              color: "rgba(247, 243, 238, 0.35)",
            }}
          >
            corporaciongc.com
          </span>
          <span
            style={{
              fontSize: "13px",
              color: "rgba(247, 243, 238, 0.25)",
            }}
          >
            San José, Costa Rica
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
