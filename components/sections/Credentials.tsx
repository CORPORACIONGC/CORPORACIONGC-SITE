"use client";

import { CREDENTIALS } from "@/lib/constants";
import { AnimatedEntry } from "@/components/ui/AnimatedEntry";

type CredentialItem = { metric: string; label: string; detail: string };

export function Credentials({
  credentials,
}: {
  credentials?: readonly CredentialItem[];
}) {
  const items = credentials ?? CREDENTIALS;

  return (
    <section className="relative bg-gradient-to-b from-burgundy-dark via-[#3A0B1F] to-[#2E0919] overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-10 md:py-12">
        <AnimatedEntry>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {items.map((cred, i) => (
              <div key={i} className="flex items-baseline gap-3 md:gap-4">
                <span className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight leading-none">
                  {cred.metric}
                </span>
                <div>
                  <div className="text-xs tracking-wide text-white/80 font-medium">
                    {cred.label}
                  </div>
                  <div className="text-[10px] text-white/45">
                    {cred.detail}
                  </div>
                </div>
                {i < items.length - 1 && (
                  <div className="hidden md:block w-px h-10 bg-white/15 ml-auto" />
                )}
              </div>
            ))}
          </div>
        </AnimatedEntry>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
