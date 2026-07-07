"use client";

import { motion } from "motion/react";
import { useLocation } from "wouter";

import { DURATION, ease } from "@/constants/animation";

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * Fade/slide the page content on route change. Wire this up by creating an App
 * Router `template.tsx` (templates re-mount on navigation, unlike layouts):
 *
 * ```tsx
 * // src/app/template.tsx
 * import { PageTransition } from "@/motion";
 * export default function Template({ children }: { children: React.ReactNode }) {
 *   return <PageTransition>{children}</PageTransition>;
 * }
 * ```
 */
export function PageTransition({ children }: PageTransitionProps) {
  const [pathname] = useLocation();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.base, ease: ease("out") }}
    >
      {children}
    </motion.div>
  );
}
