---
"@italia/header": patch
"@italia/megamenu": patch
---

Fix mobile menu border and focus state regressions

- `@italia/megamenu`: the panel border was always fully shown regardless
  of breakpoint; it now shows a border on every side from `lg` up, and
  only on the top/bottom edges on mobile, matching the upcoming
  bootstrap-italia fix (bootstrap-italia#1949).
- `@italia/megamenu`: removed the dead `.shadow-lg` class from the
  trigger content markup, mirroring the same removal on the BSI side.
- `@italia/dropdown`: the popover arrow had no border of its own, so a
  bordered dropdown panel (also from bootstrap-italia#1949) would show
  with a borderless arrow. Added the same border-top/border-left treatment
  already used by `@italia/megamenu`'s arrow.
- `@italia/header`: keyboard focus on a dropdown/megamenu trigger no
  longer hides the active-state border color — the mobile-nav focus rule
  was forcing a fixed transparent color instead of respecting the
  active/inactive state.
