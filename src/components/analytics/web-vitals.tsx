"use client";

import { useReportWebVitals } from "next/web-vitals";

/**
 * Core Web Vitals monitoring. Logs metrics (LCP, CLS, INP, FCP, TTFB) in
 * development and is the single place to forward them to an analytics endpoint
 * in production. Mount once, high in the tree. Renders nothing.
 */
export function WebVitals() {
  useReportWebVitals((metric) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`[web-vitals] ${metric.name}: ${Math.round(metric.value)}`);
      return;
    }

    // Production: forward to your analytics collector. Example:
    // const body = JSON.stringify(metric);
    // navigator.sendBeacon?.("/api/vitals", body);
  });

  return null;
}
