---
name: Hover-only preview components can't be verified via static screenshot
description: Fixed-position, cursor-following image previews (opacity toggled only on hover/active state) never render in an automated screenshot tool, since there's no real mouse hover event — don't mistake "still blank in screenshot" for "fix didn't work".
---

If a component's image/preview only appears via `hover`/`pointerenter` state (e.g. a `position: fixed` panel that follows the cursor, opacity 0 until `active`), an automated screenshot tool cannot trigger it — there's no real cursor. A "still blank" screenshot after a data fix does not necessarily mean the fix failed; it may mean the panel was never meant to show in a hover-less capture.

**Why:** Wasted a diagnostic cycle assuming missing image data was the bug, when the real complaint was about perceived empty space that only fills on hover — a static screenshot could never confirm or deny either theory.

**How to apply:** When a user reports a hover-triggered preview area as "blank"/"not working" and a screenshot can't help, consider whether the actual fix should make the preview panel always-visible (e.g. default to first item, sticky-positioned in-flow) rather than fixed/cursor-following — this both eliminates the perceived blank space and sidesteps the screenshot verification limitation entirely.
