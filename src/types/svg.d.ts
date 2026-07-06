/**
 * Type declarations for SVG imports processed by SVGR (see `next.config.ts`).
 *
 * `import Logo from "@/assets/icons/logo.svg"` yields a React component.
 * SVGs in `/public` are served as static URLs and are not imported.
 */
declare module "*.svg" {
  import type { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGSVGElement> & { title?: string }>;
  export default content;
}

declare module "*.svg?url" {
  const content: string;
  export default content;
}
