---
'@italia/carousel': patch
'@italia/dev-kit-italia': patch
---

Removed the global mouse focus rule (`@include focusmouse`) from the focus utilities and from its local copy in the carousel. Its selector list contained an invalid selector, so browsers already discarded the whole rule: removing it causes no visual change.