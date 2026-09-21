---
"@italia/header": patch
"@italia/megamenu": patch
---

Fix mobile menu border and focus state regressions

- `@italia/megamenu`: the panel border was always fully shown regardless of breakpoint; it now shows a border on every side from `lg` up, and only on the top/bottom edges on mobile, matching the upcoming bootstrap-italia fix (bootstrap-italia#1949).
- `@italia/header`: keyboard focus on a dropdown/megamenu trigger no longer hides the active-state border color — the mobile-nav focus rule was forcing a fixed transparent color instead of respecting the active/inactive state.
