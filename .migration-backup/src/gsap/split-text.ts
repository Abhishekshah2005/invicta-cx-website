/**
 * Reusable text-splitting utilities.
 *
 * The project ships GSAP's official `SplitText` (free since 3.13) — prefer it
 * via `useTextReveal` / `import { SplitText } from "@/lib/gsap"` for production
 * reveals. This module provides a dependency-free manual fallback for cases
 * where you want to split text without GSAP (e.g. a CSS-only animation, or a
 * Motion component), and a thin typed helper around GSAP's SplitText.
 */
import { SplitText } from "@/lib/gsap";

export interface ManualSplitResult {
  words: HTMLSpanElement[];
  chars: HTMLSpanElement[];
  /** Restore the element's original markup. */
  revert: () => void;
}

/**
 * Split a plain-text element into word (and optionally char) spans without any
 * external dependency. Assumes the element contains only text — for rich markup
 * use GSAP `SplitText`. Marked `aria-hidden`-friendly: the visible text is
 * unchanged, so screen readers still read it naturally.
 */
export function splitTextManual(
  element: HTMLElement,
  options: { chars?: boolean } = {},
): ManualSplitResult {
  const original = element.innerHTML;
  const text = element.textContent ?? "";
  const words: HTMLSpanElement[] = [];
  const chars: HTMLSpanElement[] = [];

  element.textContent = "";

  const tokens = text.split(/(\s+)/); // keep whitespace tokens
  for (const token of tokens) {
    if (token.trim() === "") {
      element.appendChild(document.createTextNode(token));
      continue;
    }

    const wordSpan = document.createElement("span");
    wordSpan.style.display = "inline-block";
    wordSpan.style.willChange = "transform";

    if (options.chars) {
      for (const char of Array.from(token)) {
        const charSpan = document.createElement("span");
        charSpan.style.display = "inline-block";
        charSpan.textContent = char;
        wordSpan.appendChild(charSpan);
        chars.push(charSpan);
      }
    } else {
      wordSpan.textContent = token;
    }

    element.appendChild(wordSpan);
    words.push(wordSpan);
  }

  return {
    words,
    chars,
    revert: () => {
      element.innerHTML = original;
    },
  };
}

/**
 * Typed convenience wrapper around GSAP `SplitText`. Registration already
 * happened in `@/lib/gsap`.
 */
export function createSplitText(
  target: Element | string,
  vars?: ConstructorParameters<typeof SplitText>[1],
): SplitText {
  return new SplitText(target, vars);
}
