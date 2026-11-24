---
'@italia/dev-kit-italia': patch
---

Restore `styles-for-migration.css`, missing from the package since 1.0.0-beta.5: the full Bootstrap Italia stylesheet forwarded `components/card-old`, removed from Bootstrap Italia, and the Sass error did not stop the build. The build now fails on Sass errors.
