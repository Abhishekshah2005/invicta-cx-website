import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * Type-safe, validated environment variables.
 *
 * Add new variables here and to `.env.example`. Access them via `env.X`
 * instead of `process.env.X` so missing/invalid values fail fast at build
 * time rather than surfacing as runtime `undefined`s.
 */
export const env = createEnv({
  /**
   * Server-only variables. Never exposed to the client.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  },

  /**
   * Client-exposed variables. Must be prefixed with `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  },

  /**
   * Destructure values manually because Next.js only inlines statically
   * analyzable `process.env.X` references in the client bundle.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },

  /** Treat empty strings as undefined so defaults apply. */
  emptyStringAsUndefined: true,

  /** Skip validation in lint/CI contexts where env may be intentionally absent. */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
