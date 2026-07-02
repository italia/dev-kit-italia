---
'@italia/dev-kit-italia': minor
'@italia/alert': minor
---

Add alert component (`it-alert`)

- New light-DOM enhancer for Bootstrap Italia's `.alert` markup: auto-sets `role="alert"` and maps the `variant` attribute to the correct `alert-{variant}` class.
- Sensible default behavior: fade + remove on `.btn-close` click, via a cancelable `it-alert-close` event and a public `close()` method — call `event.preventDefault()` to intercept the close (e.g. async confirmation) and `close()` later.
- Stories/MDX updated to wrap alert examples in `<it-alert variant>` and document the auto role/variant mapping and its accessibility implications.
