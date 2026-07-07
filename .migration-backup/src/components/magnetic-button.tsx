"use client";

import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/effects/magnetic";

type MagneticButtonProps = ComponentProps<typeof Button> & {
  /** Magnetic follow strength (0–1). */
  strength?: number;
};

/**
 * A shadcn `Button` wrapped in a magnetic hover effect — a premium CTA
 * primitive. Accepts all `Button` props (`variant`, `size`, `asChild`, …).
 */
export function MagneticButton({ strength = 0.4, children, ...props }: MagneticButtonProps) {
  return (
    <Magnetic strength={strength}>
      <Button {...props}>{children}</Button>
    </Magnetic>
  );
}
