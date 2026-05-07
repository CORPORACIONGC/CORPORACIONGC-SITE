// lib/og-templates.tsx
// Helpers compartidos para imágenes Open Graph (next/og, runtime nodejs).
// Tema único: blanco puro + burgundy. Sin crema, sin dorado.
// Cuatro renderers: home (hero), default (áreas/legal/sobre), attorney, article.
//
// Runtime nodejs: lee fuentes, logo y fotos del filesystem (carpeta /public)
// y los embeede como data URL para que Satori los pueda renderizar.

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

const C = {
  burgundy: "#6B1D3A",
  burgundyLight: "#8B2252",
  burgundyDark: "#4A0E27",
  white: "#FFFFFF",
  charcoal: "#1C1C1E",
} as const;

// Surface: blanco puro con un leve viñeteado burdeos en las esquinas
const BG_DEFAULT = `radial-gradient(ellipse 80% 70% at 100% 0%, rgba(107,29,58,0.06) 0%, transparent 55%), radial-gradient(ellipse 70% 60% at 0% 100%, rgba(107,29,58,0.04) 0%, transparent 55%), linear-gradient(180deg, ${C.white} 0%, ${C.white} 100%)`;
const BG_ARTICLE = `radial-gradient(ellipse 80% 70% at 100% 100%, rgba(107,29,58,0.05) 0%, transparent 60%), linear-gradient(180deg, ${C.white} 0%, ${C.white} 100%)`;

// ---------- Cache compartido (un proceso, una lectura) ----------
type FontEntry = {
  name: string;
  data: Buffer;
  weight: 300 | 400 | 500 | 600;
  style: "normal";
};

let cachedFonts: FontEntry[] | null = null;
let cachedLogo: string | null = null;
const photoCache = new Map<string, string>();

async function loadFonts(): Promise<FontEntry[]> {
  if (cachedFonts) return cachedFonts;
  const fontsDir = join(process.cwd(), "public/fonts");
  const [dmLight, dmRegular, dmMedium, dmSemiBold, cormorantMedium, cormorantSemiBold] =
    await Promise.all([
      readFile(join(fontsDir, "DMSans-Light.ttf")),
      readFile(join(fontsDir, "DMSans-Regular.ttf")),
      readFile(join(fontsDir, "DMSans-Medium.ttf")),
      readFile(join(fontsDir, "DMSans-SemiBold.ttf")),
      readFile(join(fontsDir, "CormorantGaramond-Medium.ttf")),
      readFile(join(fontsDir, "CormorantGaramond-SemiBold.ttf")),
    ]);
  cachedFonts = [
    { name: "DM Sans", data: dmLight, weight: 300, style: "normal" },
    { name: "DM Sans", data: dmRegular, weight: 400, style: "normal" },
    { name: "DM Sans", data: dmMedium, weight: 500, style: "normal" },
    { name: "DM Sans", data: dmSemiBold, weight: 600, style: "normal" },
    { name: "Cormorant Garamond", data: cormorantMedium, weight: 500, style: "normal" },
    { name: "Cormorant Garamond", data: cormorantSemiBold, weight: 600, style: "normal" },
  ];
  return cachedFonts;
}

async function loadLogo(): Promise<string> {
  if (cachedLogo) return cachedLogo;
  const data = await readFile(join(process.cwd(), "public/logo-burgundy.png"));
  cachedLogo = `data:image/png;base64,${data.toString("base64")}`;
  return cachedLogo;
}

type PhotoTransform = {
  /** Fracción del alto a agregar como padding blanco arriba (0.10 = 10%). */
  extendTopRatio?: number;
  /** Fracción del alto a recortar del fondo (0.20 = quita el 20% inferior). */
  cropBottomRatio?: number;
};

async function loadPhoto(
  publicPath: string,
  transform?: PhotoTransform
): Promise<string | null> {
  const cacheKey =
    transform && (transform.extendTopRatio || transform.cropBottomRatio)
      ? `${publicPath}|t${transform.extendTopRatio ?? 0}|b${transform.cropBottomRatio ?? 0}`
      : publicPath;
  if (photoCache.has(cacheKey)) return photoCache.get(cacheKey)!;
  try {
    const cleanPath = publicPath.replace(/^\//, "");
    const raw = await readFile(join(process.cwd(), "public", cleanPath));

    let buffer: Buffer = raw;
    let mime = "image/png";
    if (transform && (transform.extendTopRatio || transform.cropBottomRatio)) {
      const meta = await sharp(raw).metadata();
      const w = meta.width ?? 1;
      const h = meta.height ?? 1;
      const cropBottomPx = Math.round(h * (transform.cropBottomRatio ?? 0));
      const extractHeight = Math.max(1, h - cropBottomPx);
      const extendTopPx = Math.round(extractHeight * (transform.extendTopRatio ?? 0));
      buffer = await sharp(raw)
        .extract({ left: 0, top: 0, width: w, height: extractHeight })
        .extend({
          top: extendTopPx,
          bottom: 0,
          left: 0,
          right: 0,
          // Blanco puro: el fondo del OG es blanco, así que no se nota la unión.
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        })
        .png()
        .toBuffer();
      mime = "image/png";
    } else {
      const ext = (publicPath.split(".").pop() ?? "png").toLowerCase();
      mime = ext === "jpg" || ext === "jpeg" ? "image/jpeg" : "image/png";
    }
    const dataUrl = `data:${mime};base64,${buffer.toString("base64")}`;
    photoCache.set(cacheKey, dataUrl);
    return dataUrl;
  } catch {
    return null;
  }
}

// ---------- Helper para preservar espacios alrededor de la emphasis ----------
const NBSP = " ";
function splitWithNbsp(text: string, marker = "{{em}}"): [string, string] {
  const parts = text.split(marker);
  return [
    parts[0].replace(/\s+$/, NBSP),
    (parts[1] ?? "").replace(/^\s+/, NBSP),
  ];
}

// =============================================================
// VARIANTE A1 — HOME (hero centrado con wordmark + tagline)
// =============================================================
export interface HomeOgInput {
  /** Tagline. Use `{{em}}` para envolver la frase enfatizada. */
  tagline: string;
  emphasis?: string;
  url: string;
  baseUrl?: string;
}

export async function renderHomeOg(input: HomeOgInput) {
  const [fonts, logoSrc] = await Promise.all([loadFonts(), loadLogo()]);
  // Si hay emphasis, usamos split. Si no, una sola pieza.
  const [taglineBefore, taglineAfter] = input.emphasis
    ? splitWithNbsp(input.tagline)
    : [input.tagline, ""];

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: BG_DEFAULT,
          color: C.charcoal,
          fontFamily: "DM Sans",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: C.burgundy }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 56, maxWidth: 1000 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <img src={logoSrc} alt="" width={96} height={96} />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontWeight: 600,
                  fontSize: 56,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  color: C.charcoal,
                }}
              >
                Corporación GC
              </div>
              <div
                style={{
                  fontFamily: "DM Sans",
                  fontWeight: 300,
                  fontSize: 16,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  color: "rgba(28,28,30,0.55)",
                  paddingLeft: 2,
                }}
              >
                Abogados
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.55,
              color: "rgba(28,28,30,0.72)",
              fontWeight: 400,
              maxWidth: 880,
              borderLeft: `2px solid ${C.burgundy}`,
              paddingLeft: 22,
              display: "flex",
            }}
          >
            {input.emphasis ? (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <span>{taglineBefore}</span>
                <span style={{ color: C.burgundy, fontWeight: 600 }}>{input.emphasis}</span>
                <span>{taglineAfter}</span>
              </div>
            ) : (
              <span>{input.tagline}</span>
            )}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 96,
            right: 96,
            bottom: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(28,28,30,0.10)",
            paddingTop: 24,
            fontSize: 14,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ color: "rgba(28,28,30,0.55)", fontWeight: 500 }}>{input.url}</div>
          <div style={{ color: "rgba(28,28,30,0.40)" }}>San José · Costa Rica</div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}

// =============================================================
// VARIANTE A2 — Default (áreas, legal, sobre-nosotros)
// =============================================================
export interface DefaultOgInput {
  eyebrow: string;
  /** Título. Use `{{em}}` como marcador para insertar `emphasis`. */
  title: string;
  emphasis?: string;
  body: string;
  url: string;
  baseUrl?: string;
}

export async function renderDefaultOg(input: DefaultOgInput) {
  const [fonts, logoSrc] = await Promise.all([loadFonts(), loadLogo()]);
  const [titleBefore, titleAfter] = splitWithNbsp(input.title);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          background: BG_DEFAULT,
          color: C.charcoal,
          fontFamily: "DM Sans",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: C.burgundy }} />

        {/* Corner mark */}
        <div
          style={{
            position: "absolute",
            top: 72,
            right: 80,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
            <div
              style={{
                fontFamily: "DM Sans",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                lineHeight: 1,
                color: C.charcoal,
              }}
            >
              Corporación GC
            </div>
            <div
              style={{
                fontFamily: "DM Sans",
                fontWeight: 300,
                fontSize: 9,
                letterSpacing: "0.30em",
                textTransform: "uppercase",
                lineHeight: 1,
                color: "rgba(28,28,30,0.55)",
              }}
            >
              Abogados
            </div>
          </div>
          <img src={logoSrc} alt="" width={56} height={56} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
          <div style={{ width: 32, height: 1, background: C.burgundy }} />
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(28,28,30,0.55)",
              fontWeight: 500,
            }}
          >
            {input.eyebrow}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontFamily: "Cormorant Garamond",
            fontWeight: 500,
            fontSize: 76,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            color: C.charcoal,
            marginBottom: 28,
            maxWidth: 920,
          }}
        >
          <span>{titleBefore}</span>
          {input.emphasis ? <span style={{ color: C.burgundy }}>{input.emphasis}</span> : null}
          <span>{titleAfter}</span>
        </div>
        <div
          style={{
            fontSize: 19,
            lineHeight: 1.55,
            color: "rgba(28,28,30,0.62)",
            maxWidth: 880,
            fontWeight: 400,
            display: "flex",
          }}
        >
          {input.body}
        </div>
        <div
          style={{
            position: "absolute",
            left: 80,
            right: 80,
            bottom: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(28,28,30,0.10)",
            paddingTop: 24,
            fontSize: 14,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ color: "rgba(28,28,30,0.55)", fontWeight: 500 }}>{input.url}</div>
          <div style={{ color: "rgba(28,28,30,0.40)" }}>San José · Costa Rica</div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}

// =============================================================
// VARIANTE B — Attorney (foto editorial a sangre completa, fondo blanco)
// =============================================================
export interface AttorneyOgInput {
  role: string;
  name: string;
  credential: string;
  initials: string;
  baseUrl?: string;
  /** Path en /public, ej. "/images/oscar-gonzalez-solo.png". Si está, se usa la foto. */
  photo?: string;
  /** CSS object-position para el crop, ej. "50% 8%". Y bajo favorece la cabeza. */
  photoFocus?: string;
  /** Pre-procesado de la foto vía sharp (extender canvas o recortar). */
  photoTransform?: PhotoTransform;
}

export async function renderAttorneyOg(input: AttorneyOgInput) {
  const [fonts, logoSrc, photoSrc] = await Promise.all([
    loadFonts(),
    loadLogo(),
    input.photo ? loadPhoto(input.photo, input.photoTransform) : Promise.resolve(null),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          background: BG_DEFAULT,
          color: C.charcoal,
          fontFamily: "DM Sans",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: C.burgundy }} />

        {/* Columna izquierda: copy */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "80px 60px 80px 80px",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
            <div style={{ width: 32, height: 1, background: C.burgundy }} />
            <div
              style={{
                fontSize: 13,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(28,28,30,0.55)",
                fontWeight: 500,
              }}
            >
              {input.role}
            </div>
          </div>
          <div
            style={{
              fontFamily: "Cormorant Garamond",
              fontWeight: 500,
              fontSize: 60,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: C.charcoal,
              marginBottom: 24,
              maxWidth: 600,
              display: "flex",
            }}
          >
            {input.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 17,
              lineHeight: 1.55,
              color: "rgba(28,28,30,0.70)",
              maxWidth: 480,
              borderLeft: `2px solid ${C.burgundy}`,
              paddingLeft: 16,
              marginBottom: 36,
            }}
          >
            {input.credential}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src={logoSrc} alt="" width={28} height={28} />
            <div
              style={{
                fontSize: 13,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(28,28,30,0.50)",
                fontWeight: 600,
              }}
            >
              Corporación GC · Costa Rica
            </div>
          </div>
        </div>

        {/* Columna derecha: foto editorial a sangre completa */}
        <div
          style={{
            width: 480,
            height: 630,
            display: "flex",
            position: "relative",
            background: BG_DEFAULT,
          }}
        >
          {/* Hilo burdeos vertical sutil como separador */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: 1,
              background: `linear-gradient(180deg, transparent 0%, rgba(107,29,58,0.18) 30%, rgba(107,29,58,0.18) 70%, transparent 100%)`,
            }}
          />
          {photoSrc ? (
            <img
              src={photoSrc}
              alt=""
              width={480}
              height={630}
              style={{
                width: 480,
                height: 630,
                objectFit: "cover",
                objectPosition: input.photoFocus ?? "50% 10%",
              }}
            />
          ) : (
            <div
              style={{
                width: 480,
                height: 630,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Cormorant Garamond",
                fontWeight: 600,
                fontSize: 140,
                color: C.burgundy,
                letterSpacing: "0.04em",
              }}
            >
              {input.initials}
            </div>
          )}
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}

// =============================================================
// VARIANTE D — Jurisprudencia (sentencia editorial con redactor)
// =============================================================
export interface JurisprudenceOgInput {
  /** Badge editorial — ej. "Sentencia Fundacional" */
  badge?: string;
  /** Número oficial — ej. "Resolución N° 1016-F-2004" */
  numero: string;
  /** Fecha en formato corto — ej. "26 Nov 2004" */
  fechaCorta: string;
  /** Tribunal — se acorta automáticamente */
  tribunal: string;
  /** Título editorial */
  title: string;
  /** Pasaje icónico — se trunca a ~190 chars */
  pullQuote: string;
  /** Path de la foto del redactor en /public, ej. "/images/oscar-gonzalez-solo.png" */
  redactorPhoto?: string;
  /** Nombre del redactor — default Dr. Óscar */
  redactorName?: string;
  /** Línea de credencial — default ex-Magistrado */
  redactorCredential?: string;
  baseUrl?: string;
}

export async function renderJurisprudenceOg(input: JurisprudenceOgInput) {
  const [fonts, logoSrc, photoSrc] = await Promise.all([
    loadFonts(),
    loadLogo(),
    input.redactorPhoto
      ? loadPhoto(input.redactorPhoto)
      : loadPhoto("/images/oscar-gonzalez-solo.png"),
  ]);

  const titleLen = input.title.length;
  const titleFontSize = titleLen > 80 ? 46 : titleLen > 55 ? 54 : 60;

  const trimmedQuote =
    input.pullQuote.length > 190
      ? input.pullQuote.slice(0, 187).trimEnd() + "…"
      : input.pullQuote;

  const tribunalShort = input.tribunal
    .replace(
      "Sala Primera de la Corte Suprema de Justicia",
      "Sala Primera CSJ"
    )
    .replace(
      "Sala Constitucional de la Corte Suprema de Justicia",
      "Sala Constitucional CSJ"
    )
    .replace("Tribunal Contencioso Administrativo", "T. Contencioso Adm.");

  const eyebrow = input.badge
    ? `Jurisprudencia · ${input.badge}`
    : "Jurisprudencia Destacada";

  const redactorName = input.redactorName ?? "Dr. Óscar Eduardo González Camacho";
  const redactorCredential =
    input.redactorCredential ?? "Ex-Magistrado · Sala Primera CSJ · 2002–2014";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          padding: 80,
          display: "flex",
          flexDirection: "column",
          background: BG_ARTICLE,
          color: C.charcoal,
          fontFamily: "DM Sans",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: C.burgundy,
          }}
        />

        {/* Eyebrow + wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 26,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 28, height: 1, background: C.burgundy }} />
            <div
              style={{
                fontSize: 12,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: C.burgundy,
                fontWeight: 600,
              }}
            >
              {eyebrow}
            </div>
          </div>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(28,28,30,0.55)",
              fontWeight: 600,
            }}
          >
            Corporación GC
          </div>
        </div>

        {/* Metadata row */}
        <div
          style={{
            display: "flex",
            fontSize: 13,
            color: "rgba(28,28,30,0.62)",
            fontWeight: 500,
            marginBottom: 22,
            letterSpacing: "0.02em",
          }}
        >
          {input.numero} · {tribunalShort} · {input.fechaCorta}
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontFamily: "Cormorant Garamond",
            fontWeight: 500,
            fontSize: titleFontSize,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            color: C.charcoal,
            marginBottom: 26,
            maxWidth: 1020,
          }}
        >
          {input.title}
        </div>

        {/* Pull quote */}
        <div
          style={{
            display: "flex",
            fontFamily: "Cormorant Garamond",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: 22,
            lineHeight: 1.4,
            color: "rgba(28,28,30,0.72)",
            maxWidth: 1000,
            borderLeft: `2px solid ${C.burgundy}`,
            paddingLeft: 22,
            marginBottom: "auto",
          }}
        >
          «{trimmedQuote}»
        </div>

        {/* Bottom: redactor */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            borderTop: "1px solid rgba(28,28,30,0.10)",
            paddingTop: 22,
            marginTop: 32,
          }}
        >
          {photoSrc ? (
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                overflow: "hidden",
                display: "flex",
                border: `1px solid ${C.burgundy}`,
              }}
            >
              <img
                src={photoSrc}
                alt=""
                width={56}
                height={56}
                style={{
                  width: 56,
                  height: 56,
                  objectFit: "cover",
                  objectPosition: "50% 22%",
                }}
              />
            </div>
          ) : (
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                background: C.burgundy,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Cormorant Garamond",
                fontSize: 22,
                fontWeight: 600,
                color: C.white,
              }}
            >
              ÓG
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.charcoal }}>
              Redactado por {redactorName}
            </div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(28,28,30,0.50)",
                fontWeight: 500,
                marginTop: 3,
              }}
            >
              {redactorCredential}
            </div>
          </div>
          <img
            src={logoSrc}
            alt=""
            width={52}
            height={52}
            style={{ opacity: 0.85 }}
          />
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}

// =============================================================
// VARIANTE C — Article
// =============================================================
export interface ArticleOgInput {
  tag: string;
  readingTime: string;
  date: string;
  title: string;
  excerpt: string;
  authorName: string;
  authorInitials: string;
  baseUrl?: string;
}

export async function renderArticleOg(input: ArticleOgInput) {
  const [fonts, logoSrc] = await Promise.all([loadFonts(), loadLogo()]);

  // Tamaño del título adaptativo según largo, para evitar overflow
  const titleLen = input.title.length;
  const titleFontSize = titleLen > 110 ? 38 : titleLen > 80 ? 46 : titleLen > 55 ? 54 : 60;
  const trimmedExcerpt =
    input.excerpt.length > 220 ? input.excerpt.slice(0, 217).trimEnd() + "…" : input.excerpt;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          padding: 80,
          display: "flex",
          flexDirection: "column",
          background: BG_ARTICLE,
          color: C.charcoal,
          fontFamily: "DM Sans",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: C.burgundy }} />

        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
          <div
            style={{
              padding: "6px 14px",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: C.white,
              background: C.burgundy,
              borderRadius: 6,
            }}
          >
            {input.tag}
          </div>
          <div style={{ color: "rgba(28,28,30,0.30)", fontSize: 11 }}>·</div>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(28,28,30,0.55)",
              fontWeight: 500,
            }}
          >
            {input.readingTime}
          </div>
          <div style={{ color: "rgba(28,28,30,0.30)", fontSize: 11 }}>·</div>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(28,28,30,0.55)",
              fontWeight: 500,
            }}
          >
            {input.date}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Cormorant Garamond",
            fontWeight: 500,
            fontSize: titleFontSize,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: C.charcoal,
            marginBottom: 20,
            maxWidth: 1000,
          }}
        >
          {input.title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 17,
            lineHeight: 1.5,
            color: "rgba(28,28,30,0.65)",
            maxWidth: 960,
            fontWeight: 400,
            marginBottom: "auto",
          }}
        >
          {trimmedExcerpt}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            borderTop: "1px solid rgba(28,28,30,0.10)",
            paddingTop: 24,
            marginTop: 40,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              background: C.burgundy,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Cormorant Garamond",
              fontSize: 18,
              fontWeight: 600,
              color: C.white,
            }}
          >
            {input.authorInitials}
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.charcoal }}>{input.authorName}</div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(28,28,30,0.50)",
                fontWeight: 500,
              }}
            >
              Corporación GC · Derecho Público
            </div>
          </div>
          <img src={logoSrc} alt="" width={56} height={56} style={{ opacity: 0.85 }} />
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}
