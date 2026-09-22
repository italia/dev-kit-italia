---
"@italia/header": patch
"@italia/megamenu": patch
"@italia/popover": patch
"@italia/dropdown": patch
---

Fix mobile menu border and focus state regressions

- `@italia/megamenu`: the panel border was always fully shown regardless
  of breakpoint; it now shows a border on every side from `lg` up, and
  only on the top/bottom edges on mobile, matching the upcoming
  bootstrap-italia fix (bootstrap-italia#1949).
- `@italia/megamenu`: removed the dead `.shadow-lg` class from the
  trigger content markup, mirroring the same removal on the BSI side.
- `@italia/popover`: the arrow is always rotated 45deg regardless of
  placement, so which pair of sides is visually exposed depends on
  which side of the trigger the popover ends up placed on — that
  information was previously discarded after positioning. Now exposed
  as a `data-side` attribute on the arrow element so consumers can
  style its border correctly per placement, and the fixed notch offset
  now compensates for a consumer-added border and for the notch size
  deviating from its default, so the arrow stays flush against the
  panel edge.
- `@italia/dropdown`: the popover arrow had no border of its own, so a
  bordered dropdown panel (also from bootstrap-italia#1949) would show
  with a borderless arrow. Uses the new `data-side` attribute from
  `@italia/popover` to apply the correct border sides for every
  placement (bottom/top/left/right), not just the default one.
- `@italia/header`: keyboard focus on a dropdown/megamenu trigger no
  longer hides the active-state border color — the mobile-nav focus rule
  was forcing a fixed transparent color instead of respecting the
  active/inactive state.
