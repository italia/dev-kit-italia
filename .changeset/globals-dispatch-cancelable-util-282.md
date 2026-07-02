---
'@italia/globals': minor
---

Add shared `dispatchCancelable` and `focusableFallbackAncestor` utilities. `dispatchCancelable` dispatches a cancelable custom event and only runs the provided default action if `preventDefault()` was not called — this is now the shared convention behind the cancelable events in `it-alert`, `it-back`, `it-forward`, `it-chip`, `it-modal`, `it-notification` and `it-transfer`. `it-tabs` and `it-upload` were migrated internally to use it, with no behavior change.
