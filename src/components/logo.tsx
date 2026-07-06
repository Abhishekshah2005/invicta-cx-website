import Image from "next/image";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

/**
 * The official Invicta logo (crimson warhorse + serif wordmark). Served from
 * `/public/invicta-logo.png` — never recreated or redrawn. Constrain the
 * rendered size with `className` (e.g. `h-9 w-auto`).
 */
export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src="/invicta-logo.png"
      alt="Invicta"
      width={1337}
      height={861}
      priority={priority}
      className={cn("w-auto object-contain", className)}
    />
  );
}
