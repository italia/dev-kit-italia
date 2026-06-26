---
"@italia/autocomplete": patch
---

fix(autocomplete): address screen reader findings from issue #43

- The assistive hint is now `aria-hidden="true"`, so it is announced once as the input's description (via `aria-describedby`) instead of being read a second time as a standalone element when navigating by element. Reproduced on VoiceOver (Firefox/Chrome/Safari) and JAWS/NVDA (Edge/Chrome).
- The `role="status"` live region is now reset to empty after an option is selected, when the query drops below `minLength`, and when the listbox is dismissed (Escape/Tab/click-outside), so a stale "N results available" message is no longer reachable after the field is no longer searching.
