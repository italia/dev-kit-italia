---
'@italia/dev-kit-italia': minor
'@italia/chip': minor
---

`it-chip` now removes itself by default when its dismiss button is clicked, via a cancelable `it-chip-close` event and a new public `close()` method — call `event.preventDefault()` to intercept the removal (e.g. async confirmation) and `close()` later.

Focus on close: shifts to an adjacent chip's dismiss button, but only if that neighbor is also `dismissable` — a plain label or link chip sitting next to it is no longer treated as an equivalent "next item to remove". Falls back to a `tabindex`-bearing ancestor, and now further to the nearest focusable element anywhere in the document when no such ancestor exists (the common case in practice) — previously focus was silently lost to `<body>` in that case.
