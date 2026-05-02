"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackContactFromHref } from "@/lib/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  contactTarget?: string;
  children: ReactNode;
};

export function TrackedContactLink({
  href,
  contactTarget,
  onClick,
  children,
  ...rest
}: Props) {
  const handleClick: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] = (e) => {
    trackContactFromHref(href, contactTarget);
    onClick?.(e);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
