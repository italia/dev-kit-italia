---
'@italia/dev-kit-italia': major
'@italia/section': major
---

Breaking: removed the Bootstrap Italia v2 color utility classes (`.primary-bg`, `.white-color`, `.neutral-1-bg-a7`…) from the global styles, following their removal in Bootstrap Italia (italia/bootstrap-italia#1930). Use `.bg-*`, `.text-*`, `.border-*` or the `--bsi-color-*` custom properties. `it-section` now applies `.text-white` instead of `.white-color` to its content on dark variants.
