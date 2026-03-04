"use client";

import { CREDENTIALS } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedEntry";

type CredentialItem = { metric: string; label: string; detail: string };

export function Credentials({
  credentials,
}: {
  credentials?: readonly CredentialItem[];
}) {
  const items = credentials ?? CREDENTIALS;

  return (
    <section className="relative bg-burgundy-dark overflow-hidden">
      {/* Shimmer overlay — separate from bg to avoid overriding background color */}
      <div className="absolute inset-0 animate-shimmer pointer-events-none" />
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-14 md:py-16">
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr_0.8fr] gap-6 md:gap-8"
          stagger={0.08}
        >
          {items.map((cred, i) => (
            <StaggerItem key={i}>
              <div className="text-center md:text-left">
                <div className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight leading-none">
                  {cred.metric}
                </div>
                <div className="mt-2 text-xs tracking-wide text-white/75 font-medium">
                  {cred.label}
                </div>
                <div className="mt-1 text-[10px] text-white/45">
                  {cred.detail}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
