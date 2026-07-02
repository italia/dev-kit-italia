---
'@italia/dev-kit-italia': minor
'@italia/chip': minor
---

`it-chip` now removes itself by default when its dismiss button is clicked, via a cancelable `it-chip-close` event and a new public `close()` method — call `event.preventDefault()` to intercept the removal (e.g. async confirmation) and `close()` later.
