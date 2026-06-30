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
