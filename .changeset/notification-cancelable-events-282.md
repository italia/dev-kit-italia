---
'@italia/dev-kit-italia': minor
'@italia/notification': minor
---

`it-notification-show` and `it-notification-close` are now cancelable, letting consumers intercept the default behavior and resume it later. `it-notification-close` covers the close button, the auto-dismiss timeout and any programmatic `hide()` call.
