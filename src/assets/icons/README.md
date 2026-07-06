# Icons

Place `.svg` icon files here. They import as **React components** via SVGR
(configured in `next.config.ts`):

```tsx
import Logo from "@/assets/icons/logo.svg";

<Logo className="h-8 w-8 text-primary" />;
```

For icons used as raw image URLs instead, put them in `/public` and reference by
path string. For UI glyphs, prefer `lucide-react`.
