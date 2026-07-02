---
'@italia/dev-kit-italia': minor
'@italia/modal': minor
---

`it-modal-open` and `it-modal-close` are now cancelable: calling `event.preventDefault()` stops the modal from opening/closing, so consumers can intercept the action and resume it later via `show()`/`hide()`. `toggle()` now delegates to `show()`/`hide()` so it respects the same cancellation.
