---
'@italia/dev-kit-italia': minor
'@italia/transfer': minor
---

Add `commit(detail)` method to `it-transfer`, applying a previously cancelled `it-transfer` event (move to target, move back to source, or reset) without re-dispatching it — enables async confirmation patterns (API calls, user prompts) after `event.preventDefault()`, with no bypass flag needed.
