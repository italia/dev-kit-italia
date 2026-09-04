/**
 * Returns the nearest focusable ancestor of `el` by walking up parentElement.
 * Used as the last-resort fallback when a self-removing component (chip, alert)
 * has no adjacent sibling of the same type to shift focus to.
 *
 * "Focusable ancestor" means an element with tabindex >= 0. The container that
 * wraps a chip group or alert list is the expected target; authors following the
 * WAI-ARIA pattern should give it tabindex="0".
 */
export function focusableFallbackAncestor(el: HTMLElement): HTMLElement | null {
  let current: HTMLElement | null = el.parentElement;
  while (current) {
    const tab = current.getAttribute('tabindex');
    if (tab !== null && parseInt(tab, 10) >= 0) return current;
    current = current.parentElement;
  }
  return null;
}

/** Mirrors FocusTrapController's notion of "focusable", scoped to the handful of
 *  interactive elements consumers actually place next to alert/chip/notification. */
const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  'it-button:not([disabled])',
].join(',');

/**
 * True last-resort fallback for when a self-removing component (alert, chip,
 * notification) has neither an adjacent sibling of the same type nor a
 * `focusableFallbackAncestor` (i.e. no author-provided `tabindex="0"` wrapper) —
 * the common case in practice, since most real usages don't add that wrapper.
 * Without this, focus silently drops to `<body>` with no way for a keyboard/AT
 * user to tell where they ended up.
 *
 * Finds the closest focusable element to `el` anywhere in the document, walking
 * outward in document order: the nearest one that comes before `el` (closer to
 * where the user's attention already was), falling back to the nearest one after.
 * This is a coarse, page-wide search — it may land focus on something not
 * visually adjacent — but it is deterministic and strictly better than silently
 * losing focus.
 */
export function nearestFocusableInDocument(el: HTMLElement): HTMLElement | null {
  const candidates = Array.from(document.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)).filter(
    (candidate) => candidate !== el && !el.contains(candidate),
  );
  if (!candidates.length) return null;

  let closestBefore: HTMLElement | null = null;
  let closestAfter: HTMLElement | null = null;
  candidates.forEach((candidate) => {
    // eslint-disable-next-line no-bitwise
    if (el.compareDocumentPosition(candidate) & Node.DOCUMENT_POSITION_PRECEDING) {
      closestBefore = candidate; // querySelectorAll returns document order, so the last match wins
    } else if (!closestAfter) {
      closestAfter = candidate; // first match after `el` in document order
    }
  });
  return closestBefore ?? closestAfter;
}
