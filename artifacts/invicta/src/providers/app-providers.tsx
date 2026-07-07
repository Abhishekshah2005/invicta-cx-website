"use client";

import { MotionConfig } from "motion/react";

import { ease } from "@/constants/animation";
import { SmoothScrollProvider } from "./smooth-scroll-provider";

interface AppProvidersProps {
  children: React.ReactNode;
}

/**
 * Single client-side provider tree for the app. Add future context providers
 * (theme, analytics, feature flags) here so `layout.tsx` stays a server
 * component and only mounts one client boundary.
 *
 * - `MotionConfig reducedMotion="user"` makes every Motion component respect the
 *   OS reduced-motion setting automatically.
 * - `SmoothScrollProvider` runs Lenis on the single shared GSAP RAF loop.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: ease("out") }}>
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </MotionConfig>
  );
}
