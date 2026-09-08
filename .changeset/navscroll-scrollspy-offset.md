---
'@italia/navscroll': patch
---

Fixed the scrollspy marking the wrong menu entry as active, and the animated scroll overshooting on the first and last section.

The active section was measured with `offsetTop`, which is relative to the nearest positioned ancestor rather than to the scroll container. Any positioned wrapper in between falsified it — including the one `it-section` produces by default, since bootstrap-italia styles `.section-content` as `position: relative`, zeroing the `offsetTop` of every section and leaving the last menu entry permanently active. Section positions are now measured against the scroll container, the same way `scrollToElement()` already did.

The animated scroll after a click now sets each frame's position with `behavior: 'instant'`. bootstrap-italia sets `scroll-behavior: smooth` on `:root`, so every frame of the animation used to start its own native smooth scroll: the browser chased a moving target, never reached it, and kept easing long after the animation had finished — the click landed hundreds of pixels short and the page drifted for seconds.

The scroll events emitted during that animation no longer overwrite the entry the click had just selected, and the animation target is clamped to the scrollable range.
