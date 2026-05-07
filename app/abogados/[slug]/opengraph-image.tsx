// app/abogados/[slug]/opengraph-image.tsx
import { renderAttorneyOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";
import { ATTORNEYS } from "@/lib/seo-constants";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateImageMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = ATTORNEYS[slug];
  return [
    {
      id: "default",
      alt: a?.ogImageAlt ?? "Corporación GC — Costa Rica",
      size: OG_SIZE,
      contentType: OG_CONTENT_TYPE,
    },
  ];
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = ATTORNEYS[slug];
  if (!a) {
    // fallback genérico
    return renderAttorneyOg({
      role: "Corporación GC",
      name: "Equipo legal",
      credential: "Bufete dedicado al Derecho Público en Costa Rica.",
      initials: "GC",
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "https://corporaciongc.com",
    });
  }

  return renderAttorneyOg({
    role: a.role,
    name: a.name,
    credential: a.credential,
    initials: a.initials,
    photo: a.photo,
    photoFocus: a.photoFocus,
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "https://corporaciongc.com",
  });
}
