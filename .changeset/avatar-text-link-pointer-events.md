---
'@italia/avatar': patch
---

Fixed text avatars with `href` being unclickable and not triggering mouse interactions (e.g. a wrapping `it-tooltip` opened only on focus, not on hover): `pointer-events: none` is now limited to non-interactive text avatars
