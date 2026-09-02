---
'@italia/avatar': patch
'@italia/carousel': patch
'@italia/chip': patch
'@italia/header': patch
'@italia/upload': patch
---

Replaced hardcoded `--bsi-` custom property names with the interpolated `$prefix`, so styles keep working with a custom Bootstrap Italia prefix. Also fixed the avatar presence dot reading `--#{$prefix}avatar-dot-offset-top` instead of `--#{$prefix}avatar-dot-offset-bottom` (default aligned to `8px`, as in Bootstrap Italia)
