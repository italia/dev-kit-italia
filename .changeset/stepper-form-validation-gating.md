---
'@italia/stepper': minor
---

**Stepper: allow blocking progress when the step form is invalid**

- New `next-disabled` attribute on `it-stepper`: disables the "Next" button as well as "Confirm" (which previously lacked a `?disabled` binding and could not be disabled externally). It is combined via OR with automatic disabling at sequence boundaries; the "Back" button is unaffected.
- `it-stepper-change` is now cancelable when triggered by clicking the "Next" button: calling `preventDefault()` blocks the step change, allowing the consumer to display errors with `reportValidity()` or execute asynchronous checks. When emitted by the public `next()` / `prev()` methods, it remains non-cancelable so consumers cannot lock themselves inside their own listener. It continues to not be emitted when directly setting `current`.
- `it-stepper-confirm` remains non-cancelable by design: it has no default behavior to block (it does not advance the step), so the consumer already has full control over what happens on confirmation. To prevent confirmation, use `next-disabled`.
- New exported type: `StepperChangeEventDetail`.
- Stories, MDX documentation, and the example apps updated with both approaches.
