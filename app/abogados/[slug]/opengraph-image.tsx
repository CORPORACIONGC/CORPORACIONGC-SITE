import { renderAttorneyOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-templates";
import { ATTORNEYS_OG, TEAM } from "@/lib/constants";

export const runtime = "nodejs";
export const alt = "Corporación GC — Perfil de Abogado";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = ATTORNEYS_OG[slug as keyof typeof ATTORNEYS_OG];
  if (!a) {
    const member = TEAM.find((m) => m.slug === slug);
    const initials = member
      ? member.name
          .replace(/^(Dr\.\s|Lic\.\s|Licda\.\s|MSc\.\s)/, "")
          .split(" ")
          .map((w) => w[0])
          .slice(0, 2)
          .join("")
          .toUpperCase()
      : "GC";
    return renderAttorneyOg({
      role: member?.role ?? "Abogado Asociado",
      name: member?.name ?? "Corporación GC",
      credential: member?.shortBio ?? "Bufete especialista en Derecho Público en Costa Rica.",
      initials,
    });
  }
  return renderAttorneyOg({
    role: a.role,
    name: a.name,
    credential: a.credential,
    initials: a.initials,
  });
}
