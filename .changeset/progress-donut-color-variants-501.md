---
'@italia/progress': patch
---

Fixed `it-progress[type="donut"]` ignoring the semantic `color` variants (`default`, `success`, `info`, `warning`, `danger`), which all collapsed onto the same color. Each variant now maps to the same design token the matching Progress Bar variant uses, and the resulting color is exposed as the `--it-progress-donut-color` custom property for per-instance customization
