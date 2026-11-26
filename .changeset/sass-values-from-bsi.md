---
'@italia/carousel': patch
'@italia/dropdown': patch
'@italia/timeline': patch
'@italia/transfer': patch
'@italia/dev-kit-italia': patch
---

Eight styles no longer read Bootstrap Italia Sass variables due to be removed or made private there (`$transfer-*`, `$card-shadow`, `$dropdown-menu-animation-speed`, `$gray-disabled`, `$neutral-2`): the transfer border and header icon now read `--bsi-color-border-subtle`, the others carry the value. No visual change.
