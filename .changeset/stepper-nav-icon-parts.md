---
'@italia/stepper': minor
---

Exposed the stepper nav arrows as CSS parts

- The `it-icon` elements inside the "Indietro" and "Avanti" buttons now forward their `icon` part as `prev-icon` and `next-icon`, so consumers can style them with `it-stepper::part(next-icon)`. They were previously unreachable: `it-icon` exposes its svg as `icon`, but a part only reaches the tree that holds the element — the stepper's shadow root — and no `exportparts` forwarded it out to the page. The only lever left to consumers was the `--bsi-icon-size-s` custom property, which inherits across the shadow boundary but only controls size.
- The two names are distinct because the header check marks and the per-step icons are `it-icon` elements too: forwarding them all as `icon` would let a single consumer rule hit every one of them.
- Documented all of the stepper's parts with `@csspart`, which were previously unlisted: `stepper`, `header`, `header-list`, `content`, `nav`, `progress`, `dots`, `save`, `focusable`, plus the two new ones.
