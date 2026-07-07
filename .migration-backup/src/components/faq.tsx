"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

interface FaqProps {
  items: FaqItem[];
  /** Allow multiple panels open at once. Defaults to single (accordion). */
  multiple?: boolean;
  className?: string;
}

/**
 * FAQ list built on the Radix-backed accordion. Serves double duty: objection
 * handling and FAQ structured data. Questions use the display serif for
 * editorial weight.
 */
export function Faq({ items, multiple = false, className }: FaqProps) {
  return (
    <Accordion
      type={multiple ? "multiple" : "single"}
      collapsible={!multiple}
      className={cn("w-full border-t border-border", className)}
    >
      {items.map((item, index) => (
        <AccordionItem key={index} value={`faq-${index}`} className="border-b border-border">
          <AccordionTrigger className="py-5 font-display text-lg font-medium hover:no-underline md:text-xl">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
