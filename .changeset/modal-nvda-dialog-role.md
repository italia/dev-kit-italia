---
'@italia/modal': patch
---

Fix dialog role announcement in `it-modal` with NVDA

- The initial focus now enters on `.modal-content` instead of the `[role="dialog"]` element. NVDA doesn't announce the role when focus lands on the dialog element itself ([nvaccess/nvda#8620](https://github.com/nvaccess/nvda/issues/8620)): users were told the name of the modal but not that it was a dialog, while VoiceOver, JAWS and Narrator announced it correctly. Entering on a descendant has the dialog announced as its ancestor, role included. `.modal-content` is a container and not a control, so its content is still read out after the announcement, as it was before.
- This also covers the mobile menus of `it-header` and `it-navscroll`, which are `it-modal` instances.
- Removed `role="document"` from `.modal-dialog`. It was the ARIA 1.0 pattern for letting screen readers switch back to browse mode inside a dialog, superseded by `aria-modal="true"`, and NVDA announced it as "document" right after the dialog role on entering the modal.
- Removed `#safari-focus-anchor`: it had been left unused since the VoiceOver iOS workarounds moved to the timers in `FocusTrapController`.
