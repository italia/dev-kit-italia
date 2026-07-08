---
'@italia/timeline': patch
---

Fix multiple a11y issues in timeline (closes #71):
- Classic timeline examples: set `heading-level="h4"` on `it-card` inside `it-timeline-element heading-level="h3"` to restore correct heading hierarchy across all framework examples and Storybook docs
- Docs: fix accessibility callout that incorrectly referenced `it-breadcrumbs` instead of `it-timeline`
- Point-list: remove the extra `<div class="timeline-point">` wrapper from shadow DOM — the host element (`role="listitem"`) is now the flex row itself, removing a spurious div between the `ol`/`ul` and row content
- Point-list: add `role="list"` to the rendered `ol`/`ul` to preserve Safari list semantics after `list-style: none` (same fix as bottom-nav #428); replace the no-op `ol::marker` hack
- Classic timeline pin badge: pill border-radius and monospace font
