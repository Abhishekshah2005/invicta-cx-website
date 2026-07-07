import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Project-specific rule tuning for a heavily-animated, ref-driven codebase.
  {
    rules: {
      // GSAP / Three.js frequently rely on non-null assertions on refs.
      "@typescript-eslint/no-non-null-assertion": "off",
      // Allow intentional empty catch blocks in animation/teardown code.
      "no-empty": ["error", { allowEmptyCatch: true }],
      // Unused vars: allow a leading-underscore escape hatch.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },

  // Turn off all formatting-related rules so Prettier is the single source of
  // truth. Must be last so it overrides style rules from the configs above.
  eslintConfigPrettier,

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    "next-env.d.ts",
    "src/components/ui/**", // shadcn-generated primitives are managed by the CLI
    "**/*.glsl",
    "**/*.vert",
    "**/*.frag",
  ]),
]);

export default eslintConfig;
