export { cn } from "./utils";
export { createMetadata } from "./seo";
export { fontVariables } from "./fonts";
// GSAP is intentionally NOT re-exported here — import it from "@/lib/gsap"
// directly so its side-effectful plugin registration is explicit at the call
// site and never accidentally pulled into a server bundle.
