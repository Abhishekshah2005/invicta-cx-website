/**
 * Font loading strategy — centralized so `layout.tsx` stays clean and every
 * font is self-hosted, preloaded, and exposed as a CSS variable.
 *
 * `next/font` self-hosts these (no runtime external requests), inlines a
 * size-adjusted fallback to eliminate layout shift (CLS), and only downloads
 * the declared subsets.
 *
 * Type system (the brand's "human × precision" duality):
 *   --font-display : Fraunces  — heritage-editorial serif for headlines
 *   --font-sans    : Geist     — precise neutral grotesk for body/UI
 *   --font-mono    : Geist Mono — technical labels, KPIs, figures
 */
import { Fraunces, Geist, Geist_Mono } from "next/font/google";

/**
 * Display / headline serif. Variable font with the optical-size axis enabled so
 * large headings get true display-optimized letterforms. Echoes the classical
 * serif Invicta wordmark and injects editorial warmth.
 */
export const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
  preload: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: true,
});

/** Primary UI / body typeface (variable grotesk). */
export const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

/** Monospace for KPIs, figures, and technical labels (variable). */
export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "monospace"],
});

/**
 * Combined font CSS-variable classes for the `<html>` element. Order is
 * irrelevant; each exposes its own `--font-*` custom property.
 */
export const fontVariables = [fontDisplay.variable, fontSans.variable, fontMono.variable].join(" ");
