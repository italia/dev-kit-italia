---
'@italia/avatar': minor
'@italia/dropdown': minor
'@italia/popover': minor
---

Fix avatar rendering differences vs Bootstrap Italia (#431):

- Presence/status dots now use the per-size dot offset/size, so they sit correctly on the circle edge instead of too far inward.
- The "+N" group balloon no longer shows the dropdown expand caret, keeping the number centred. Adds a `hide-expand-icon` property to `it-dropdown`.
- The avatar "+N" dropdown menu now centres its arrow on the trigger. Adds an opt-in `center-arrow` property to `it-dropdown` / `it-popover` (standard dropdowns keep the existing fixed notch position).
