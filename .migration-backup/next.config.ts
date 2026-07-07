import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Source maps in prod bloat the bundle; enable only when debugging prod.
  productionBrowserSourceMaps: false,

  compiler: {
    // Strip console.* (except error/warn) from production bundles.
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },

  experimental: {
    // Tree-shake barrel imports from these heavy packages for smaller bundles.
    optimizePackageImports: [
      "lucide-react",
      "motion",
      "@react-three/drei",
      "@react-three/fiber",
      "three",
      "gsap",
      "leva",
    ],
  },

  images: {
    // Prefer modern formats; Next negotiates the best the browser supports.
    formats: ["image/avif", "image/webp"],
    // Sensible responsive breakpoints for a marketing site.
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1440, 1920, 2560, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    // Add production CDN / CMS hosts here as the project grows.
    remotePatterns: [],
  },

  // Import `*.svg` as optimized React components via SVGR.
  // SVGs placed in `/public` are still served as static URLs (rules only
  // apply to imported modules), so both usage patterns are supported.
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: false,
              titleProp: true,
              ref: true,
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: { overrides: { removeViewBox: false } },
                  },
                ],
              },
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
