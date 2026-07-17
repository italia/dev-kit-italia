---
'@italia/globals': minor
---

Add shared `dispatchCancelable`, `focusableFallbackAncestor` and `nearestFocusableInDocument` utilities. `dispatchCancelable` dispatches a cancelable custom event and only runs the provided default action if `preventDefault()` was not called — this is now the shared convention behind the cancelable events in `it-alert`, `it-back`, `it-forward`, `it-chip`, `it-modal` and `it-transfer`. `it-tabs` and `it-upload` were migrated internally to use it, with no behavior change. `focusableFallbackAncestor` is also used by `it-notification` to restore focus on dismiss (see its own changeset) even though `it-notification` does not use `dispatchCancelable` itself — its show/close are always caller-initiated, so there was no real case for making them cancelable.

`nearestFocusableInDocument` is a new true last-resort fallback used by `it-alert`, `it-chip` and `it-notification`: when a self-removing/self-hiding component has neither an adjacent same-type element nor a `tabindex`-bearing ancestor to target, it now searches the whole document for the nearest focusable element instead of silently losing focus to `<body>` — the common real-world case, since most usages don't add that ancestor.
