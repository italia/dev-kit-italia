---
'@italia/thumbnav': minor
---

Add `active` prop to `it-thumbnav-item` and fix grid story layouts

- `it-thumbnav-item` now accepts an `active` boolean attribute/property to indicate the current item. The previous pattern of adding `.active` to the slotted anchor still works for backward compatibility.
- Fixed broken Storybook layout for the fixed-grid and auto-grid stories caused by `#storybook-root { width: fit-content }` — the three grid stories now use the `w-100` page layout so flex-basis percentages and fixed widths have a real container to reference.
