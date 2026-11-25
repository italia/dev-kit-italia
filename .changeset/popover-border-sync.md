---
'@italia/dev-kit-italia': patch
'@italia/popover': patch
---

Popover: follows the border and the icon colors the popover gets in Bootstrap Italia

- The arrow draws the panel border on its two outer sides, per placement, as the dropdown arrow does.
- `it-icon` in the header and in the inner link take their colors from the popover styles, with no `color` attribute: primary in the header, the link color (hover included) in the link.
