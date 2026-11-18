---
'@italia/accordion': patch
'@italia/callout': patch
'@italia/carousel': patch
'@italia/dev-kit-italia': patch
'@italia/header': patch
'@italia/pagination': patch
'@italia/radio': patch
'@italia/rating': patch
'@italia/tabs': patch
'@italia/transfer': patch
'@italia/upload': patch
---

Focus rings now read the bootstrap-italia `--bsi-focus-*` custom properties (inner and outer ring color and width) instead of the Sass variables `$focus-outline-color-in`/`-out`, which bootstrap-italia removes, and of values written by hand. Tabs use the inset ring of bootstrap-italia (3px outer ring on the edge, 2px inner ring inside) with colors swapped and full opacity on `.nav-dark`. The callout toggle read a custom property that does not exist (`--bsi-focus-outline-color`) and now reads the outer ring color. Requires the bootstrap-italia version that adds the `--bsi-focus-*` properties.
