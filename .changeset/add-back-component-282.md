---
'@italia/dev-kit-italia': minor
'@italia/back': minor
---

Add back component (`it-back`)

- New light-DOM enhancer providing a default `history.back()` on click of `.go-back`, via a cancelable `it-back-navigate` event — call `event.preventDefault()` to run custom navigation logic instead (e.g. integrating with a framework router).
- Framework examples (vanilla, react, vue, svelte, angular) updated to demonstrate router-integrated back navigation.
