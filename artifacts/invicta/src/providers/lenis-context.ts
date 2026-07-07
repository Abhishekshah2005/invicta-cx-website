"use client";

import { createContext } from "react";
import type Lenis from "lenis";

/**
 * Holds the active Lenis instance (or `null` when smooth scrolling is disabled,
 * e.g. reduced-motion). Consume via the `useLenis` hook.
 */
export const LenisContext = createContext<Lenis | null>(null);
