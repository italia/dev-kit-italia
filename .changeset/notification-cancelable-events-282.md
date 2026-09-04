---
'@italia/dev-kit-italia': minor
'@italia/notification': minor
---

`it-notification` now fires `it-notification-show` and `it-notification-close` custom events (not cancelable — show/close are always caller-initiated, so there was no real use case for blocking them). `it-notification-close` covers the close button, the auto-dismiss timeout and any programmatic `hide()` call.

Also fixed: dismissing a notification while focus is on its own close button no longer silently drops focus to `<body>`. Focus is restored to whatever was focused right before `show()` was called (typically the button that triggered it — there is no author-provided trigger slot to target like `it-modal` has), falling back to a `tabindex`-bearing ancestor and then to the nearest focusable element in the document if that original element is gone.
