import type { ReactNode } from "react";

/**
 * Renders a string where given phrases are highlighted with a refined gold
 * tint. Phrases must match substrings exactly (case-sensitive).
 */
export function HighlightedText({
  texto,
  destacar,
}: {
  texto: string;
  destacar?: string[];
}): ReactNode {
  if (!destacar || destacar.length === 0) return texto;

  // Sort by length desc to prefer longer matches first
  const phrases = [...destacar]
    .filter((p) => p.length > 0)
    .sort((a, b) => b.length - a.length);

  if (phrases.length === 0) return texto;

  // Escape regex special characters
  const escaped = phrases.map((p) =>
    p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = texto.split(regex);

  return parts.map((part, i) => {
    const isHighlight = phrases.includes(part);
    if (!isHighlight) return part;
    return (
      <span
        key={i}
        className="bg-gold/[0.10] text-gold font-medium px-1 -mx-0.5 rounded-sm"
      >
        {part}
      </span>
    );
  });
}
