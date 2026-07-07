import { createElement } from "react";

import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Optional kicker above the title. */
  eyebrow?: React.ReactNode;
  /** The heading text (rendered in the display serif). */
  title: React.ReactNode;
  /** Optional supporting lead paragraph. */
  lead?: React.ReactNode;
  /** Heading level for correct document outline. */
  as?: "h1" | "h2" | "h3";
  /** Text alignment. */
  align?: "left" | "center";
}

/**
 * The canonical section header: eyebrow → serif title → lead. Presentational
 * only — wrap in `<Reveal>` / `<TextReveal>` to animate. Enforces consistent
 * type scale and rhythm across every section.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  as = "h2",
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      {createElement(
        as,
        {
          className: cn(
            "max-w-4xl text-fluid-2xl font-medium text-balance",
            as === "h1" && "text-fluid-3xl",
          ),
        },
        title,
      )}
      {lead ? (
        <p
          className={cn(
            "max-w-2xl text-lg text-pretty text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
