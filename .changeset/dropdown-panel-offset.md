---
'@italia/dropdown': patch
'@italia/megamenu': patch
---

Fix the dropdown panel's distance and width.

The distance between trigger and panel was about twice what it should be: an `offset` of `0` was discarded as falsy, so a panel meant to sit flush against the navbar kept the default distance, and Bootstrap Italia's open animation ended on a `margin-top` that was added to the offset instead of replacing it. The default offset is now 12px, where the caret’s point meets the trigger, and the animation no longer shifts the panel.

Dropdown items no longer wrap, so the panel grows with its longest item as it does in Bootstrap Italia, instead of staying at its minimum width. Wrapping was introduced for the megamenu, whose items sit in fixed-width columns, but applied to every dropdown because both share the item's styles; the megamenu
now opts into it on its own.
