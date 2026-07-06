import { createElement } from "react";

import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "article" | "header" | "footer";
};

/** Semantic, vertically-rhythmic section wrapper. A neutral layout primitive. */
export function Section({ as = "section", className, children, ...props }: SectionProps) {
  return createElement(
    as,
    { className: cn("relative py-20 md:py-28 lg:py-32", className), ...props },
    children,
  );
}
