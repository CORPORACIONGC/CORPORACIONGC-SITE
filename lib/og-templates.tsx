import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

const COLORS = {
  burgundy: "#6B1D3A",
  burgundyLight: "#8B2252",
  burgundyDark: "#4A0E27",
  burgundyDeepest: "#1A0A10",
  gold: "#C4A265",
  goldLight: "#D4B87A",
  cream: "#F7F3EE",
} as const;

type FontEntry = {
  name: string;
  data: Buffer;
  weight: 400 | 500 | 600;
  style: "normal";
};

// Module-scope cache so we read fonts/logo from disk only once per process
let cachedFonts: FontEntry[] | null = null;
let cachedLogo: string | null = null;

async function loadFonts(): Promise<FontEntry[]> {
  if (cachedFonts) return cachedFonts;
  const fontsDir = join(process.cwd(), "public/fonts");
  const [dmRegular, dmMedium, dmSemiBold, cormorantMedium, cormorantSemiBold] =
    await Promise.all([
      readFile(join(fontsDir, "DMSans-Regular.ttf")),
      readFile(join(fontsDir, "DMSans-Medium.ttf")),
      readFile(join(fontsDir, "DMSans-SemiBold.ttf")),
      readFile(join(fontsDir, "CormorantGaramond-Medium.ttf")),
      readFile(join(fontsDir, "CormorantGaramond-SemiBold.ttf")),
    ]);
  cachedFonts = [
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
  const data = await readFile(join(process.cwd(), "public/logo-cream.png"));
  cachedLogo = `data:image/png;base64,${data.toString("base64")}`;
  return cachedLogo;
}

/* ─────────────── VARIANT A — Default ─────────────── */

export interface DefaultOgInput {
  eyebrow: string;
  title: string;
  emphasis?: string;
  body: string;
  url: string;
}

export async function renderDefaultOg(input: DefaultOgInput) {
  const [fonts, logoSrc] = await Promise.all([loadFonts(), loadLogo()]);
  const rawParts = input.title.split("{{em}}");
  // Satori trims whitespace at flex-item boundaries — replace edges with NBSP
  const titleBefore = rawParts[0].replace(/\s+$/, " ");
  const titleAfter = (rawParts[1] ?? "").replace(/^\s+/, " ");

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          background: `linear-gradient(135deg, ${COLORS.burgundyDeepest} 0%, #2D1020 40%, ${COLORS.burgundyDark} 100%)`,
          color: COLORS.cream,
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
            background: `linear-gradient(90deg, ${COLORS.gold} 0%, ${COLORS.burgundy} 50%, ${COLORS.gold} 100%)`,
          }}
        />
        <img
          src={logoSrc}
          alt=""
          width={88}
          height={88}
          style={{ position: "absolute", top: 80, right: 80, opacity: 0.95 }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
          <div style={{ width: 32, height: 1, background: COLORS.gold }} />
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(247,243,238,0.55)",
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
            color: COLORS.cream,
            marginBottom: 28,
            maxWidth: 920,
          }}
        >
          {titleBefore && <span>{titleBefore}</span>}
          {input.emphasis && (
            <span style={{ color: COLORS.gold }}>{input.emphasis}</span>
          )}
          {titleAfter && <span>{titleAfter}</span>}
        </div>
        <div
          style={{
            fontSize: 19,
            lineHeight: 1.55,
            color: "rgba(247,243,238,0.55)",
            maxWidth: 880,
            fontWeight: 400,
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
            borderTop: "1px solid rgba(247,243,238,0.10)",
            paddingTop: 24,
            fontSize: 14,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ color: "rgba(247,243,238,0.45)", fontWeight: 500 }}>{input.url}</div>
          <div style={{ color: "rgba(247,243,238,0.30)" }}>San José · Costa Rica</div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}

/* ─────────────── VARIANT B — Attorney ─────────────── */

export interface AttorneyOgInput {
  role: string;
  name: string;
  credential: string;
  initials: string;
  /** Path under /public, e.g. "/images/oscar-gonzalez-solo.png". When set, replaces the initials tile. */
  photo?: string;
  /** CSS object-position for the photo crop, e.g. "50% 8%". Lower Y favors showing the top (head). */
  photoFocus?: string;
}

const photoCache = new Map<string, string>();

async function loadPhoto(publicPath: string): Promise<string | null> {
  if (photoCache.has(publicPath)) return photoCache.get(publicPath)!;
  try {
    const cleanPath = publicPath.replace(/^\//, "");
    const data = await readFile(join(process.cwd(), "public", cleanPath));
    const ext = (publicPath.split(".").pop() ?? "png").toLowerCase();
    const mime = ext === "jpg" || ext === "jpeg" ? "image/jpeg" : "image/png";
    const dataUrl = `data:${mime};base64,${data.toString("base64")}`;
    photoCache.set(publicPath, dataUrl);
    return dataUrl;
  } catch {
    return null;
  }
}

export async function renderAttorneyOg(input: AttorneyOgInput) {
  const [fonts, logoSrc, photoSrc] = await Promise.all([
    loadFonts(),
    loadLogo(),
    input.photo ? loadPhoto(input.photo) : Promise.resolve(null),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          background: `linear-gradient(135deg, ${COLORS.burgundyDeepest} 0%, #2D1020 35%, ${COLORS.burgundyDark} 100%)`,
          color: COLORS.cream,
          fontFamily: "DM Sans",
        }}
      >
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
            <div style={{ width: 32, height: 1, background: COLORS.gold }} />
            <div
              style={{
                fontSize: 13,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(247,243,238,0.55)",
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
              color: COLORS.cream,
              marginBottom: 24,
            }}
          >
            {input.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 17,
              lineHeight: 1.55,
              color: "rgba(247,243,238,0.65)",
              maxWidth: 480,
              borderLeft: `2px solid ${COLORS.burgundyLight}`,
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
                color: "rgba(247,243,238,0.45)",
                fontWeight: 600,
              }}
            >
              Corporación GC · Costa Rica
            </div>
          </div>
        </div>
        <div
          style={{
            width: 480,
            height: 630,
            display: "flex",
            position: "relative",
            background: `linear-gradient(160deg, #3A0B1F 0%, ${COLORS.burgundy} 55%, ${COLORS.burgundyLight} 100%)`,
          }}
        >
          {/* Gold accent line at the left edge — separates portrait from copy */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: 2,
              background: `linear-gradient(180deg, transparent 0%, ${COLORS.gold} 30%, ${COLORS.gold} 70%, transparent 100%)`,
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
                objectPosition: input.photoFocus ?? "50% 8%",
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
                fontSize: 120,
                color: "rgba(196,162,101,0.55)",
                letterSpacing: "0.04em",
              }}
            >
              {input.initials}
            </div>
          )}
          {/* Subtle bottom gradient overlay for depth and to sit nicely against the burgundy */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 180,
              background: `linear-gradient(180deg, transparent 0%, rgba(26,10,16,0.55) 100%)`,
            }}
          />
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}

/* ─────────────── VARIANT C — Article ─────────────── */

export interface ArticleOgInput {
  tag: string;
  readingTime?: string;
  date: string;
  title: string;
  excerpt: string;
  authorName: string;
  authorInitials: string;
}

export async function renderArticleOg(input: ArticleOgInput) {
  const [fonts, logoSrc] = await Promise.all([loadFonts(), loadLogo()]);

  const titleLen = input.title.length;
  const titleFontSize = titleLen > 110 ? 38 : titleLen > 80 ? 46 : titleLen > 55 ? 54 : 60;
  const trimmedExcerpt = input.excerpt.length > 200 ? input.excerpt.slice(0, 197).trimEnd() + "…" : input.excerpt;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          padding: 80,
          display: "flex",
          flexDirection: "column",
          background: `linear-gradient(135deg, ${COLORS.burgundyDeepest} 0%, #25101C 50%, #3A0B1F 100%)`,
          color: COLORS.cream,
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
            background: `linear-gradient(90deg, ${COLORS.gold} 0%, ${COLORS.burgundy} 50%, ${COLORS.gold} 100%)`,
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
          <div
            style={{
              padding: "6px 14px",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: COLORS.gold,
              background: "rgba(196,162,101,0.14)",
              border: "1px solid rgba(196,162,101,0.32)",
              borderRadius: 6,
            }}
          >
            {input.tag}
          </div>
          {input.readingTime && (
            <>
              <div style={{ color: "rgba(247,243,238,0.3)", fontSize: 11 }}>·</div>
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(247,243,238,0.5)",
                  fontWeight: 500,
                }}
              >
                {input.readingTime}
              </div>
            </>
          )}
          <div style={{ color: "rgba(247,243,238,0.3)", fontSize: 11 }}>·</div>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(247,243,238,0.5)",
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
            color: COLORS.cream,
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
            color: "rgba(247,243,238,0.6)",
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
            borderTop: "1px solid rgba(247,243,238,0.10)",
            paddingTop: 24,
            marginTop: 40,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              background: `linear-gradient(135deg, ${COLORS.burgundyDark}, ${COLORS.burgundyLight})`,
              border: "1px solid rgba(196,162,101,0.32)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Cormorant Garamond",
              fontSize: 18,
              fontWeight: 600,
              color: "rgba(196,162,101,0.85)",
            }}
          >
            {input.authorInitials}
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.cream }}>
              {input.authorName}
            </div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(247,243,238,0.4)",
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
