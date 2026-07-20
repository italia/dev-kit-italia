---
'@italia/carousel': patch
---

Fixed `aria-roledescription` being set on the shadow DOM wrapper, where it had no effect since that element carries `role="presentation"`. It is now set on the host element instead, next to the `region` landmark.
