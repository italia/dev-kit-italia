---
'@italia/avatar': minor
---

Add tooltip support for avatar links: wrap `it-avatar` in `it-tooltip` (using its `trigger`/`content` slots) to show contextual info on hover/focus, matching the Bootstrap Italia "Avatar link con tooltip" pattern.

- `it-avatar` now forwards `it-aria-*` attributes to its rendered `<a>`/`<div>`, so `it-tooltip` can wire up `aria-describedby` on the real link.
- Fixed `it-avatar ~ span` CSS rules that were unintentionally applying list-item spacing to any sibling `<span>`, including a tooltip's `slot="content"` element.
- Added a new, separate "Avatar link con tooltip" story/example section (kept distinct from the plain "Avatar con link" section) across Storybook and all framework examples.
