---
'@italia/dev-kit-italia': minor
'@italia/alert': minor
---

Add alert component (`it-alert`)

- New light-DOM enhancer for Bootstrap Italia's `.alert` markup: auto-sets `role="alert"` and maps the `variant` attribute to the correct `alert-{variant}` class.
- Sensible default behavior: fade + remove on `.btn-close` click, via a cancelable `it-alert-close` event and a public `close()` method — call `event.preventDefault()` to intercept the close (e.g. async confirmation) and `close()` later.
- Stories/MDX updated to wrap alert examples in `<it-alert variant>` and document the auto role/variant mapping and its accessibility implications.
- Focus on close: shifts to an adjacent alert's close button when one exists; otherwise falls back to a `tabindex`-bearing ancestor, and now further falls back to the nearest focusable element anywhere in the document — the common case in practice, since most usages don't add that ancestor. Previously focus was silently lost to `<body>` in that case.
