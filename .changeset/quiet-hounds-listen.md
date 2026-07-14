---
'@italia/tooltip': patch
---

Fix `it-tooltip` host to use `display: inline-flex` instead of the browser default inline box, so it stays vertically aligned with sibling elements when used as a flex item (e.g. wrapping an `it-avatar` in a row of avatars).
