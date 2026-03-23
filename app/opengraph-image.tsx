import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt =
  "Corporacion GC — Abogados Especialistas en Derecho Publico en Costa Rica";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [logoData, dmSansLight, dmSansRegular, dmSansMedium] = await Promise.all([
    readFile(join(process.cwd(), "public/images/logo-gc.png")),
    readFile(join(process.cwd(), "public/fonts/DMSans-Light.ttf")),
    readFile(join(process.cwd(), "public/fonts/DMSans-Regular.ttf")),
    readFile(join(process.cwd(), "public/fonts/DMSans-Medium.ttf")),
  ]);

  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#F2F0ED",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "44px",
          fontFamily: "DM Sans",
        }}
      >
        {/* Logo */}
        <img src={logoSrc} width={148} height={148} />

        {/* Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: "58px",
              fontWeight: 500,
              color: "#2C2228",
              letterSpacing: "0.12em",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            CORPORACION GC
          </h1>
          <p
            style={{
              fontSize: "21px",
              fontWeight: 400,
              color: "#8A8A8A",
              letterSpacing: "0.2em",
              margin: 0,
              marginTop: "10px",
            }}
          >
            ABOGADOS &middot; DERECHO PUBLICO
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "DM Sans",
          data: dmSansLight,
          weight: 300,
          style: "normal",
        },
        {
          name: "DM Sans",
          data: dmSansRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "DM Sans",
          data: dmSansMedium,
          weight: 500,
          style: "normal",
        },
      ],
    }
  );
}
