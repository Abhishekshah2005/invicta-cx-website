import { createElement } from "react";

import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "article" | "header" | "footer";
  /**
   * Vertical rhythm. `default` is the airy homepage/flagship cadence; `compact`
   * is a tighter cadence for content-dense template pages (industries, services)
   * — premium breathing room without the sparseness of long scrolls.
   */
  space?: "default" | "compact";
};

const SPACE = {
  default: "py-20 md:py-28 lg:py-32",
  compact: "py-16 md:py-20 lg:py-24",
} as const;

/** Semantic, vertically-rhythmic section wrapper. A neutral layout primitive. */
export function Section({
  as = "section",
  space = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return createElement(
    as,
    { className: cn("relative", SPACE[space], className), ...props },
    children,
  );
}
