/**
 * Dispatches a cancelable custom event and runs the provided default action
 * only if the consumer did not call `event.preventDefault()`.
 *
 * This is the shared convention used across components (Tabs, Modal, Chip, Alert,
 * Forward, Back) to provide a sensible default JavaScript behavior out of the box
 * while letting consumers intercept and override it. Notification deliberately does
 * NOT use this: its show/close are always caller-initiated (no default markup-driven
 * trigger to override), so there was no real use case for blocking them — see
 * it-notification.ts for the plain (non-cancelable) events it fires instead.
 *
 * ```js
 * el.addEventListener('it-alert-close', (e) => {
 *   e.preventDefault();                    // block the default removal
 *   fetchConfirmation().then((ok) => {     // async logic runs after prevention
 *     if (ok) e.target.close();
 *   });
 * });
 * ```
 *
 * Note: `preventDefault()` must be called synchronously inside the listener.
 * Async code can run afterward; call the component's public method when ready.
 *
 * @param host the element dispatching the event
 * @param name the event name (kebab-case, `it-` prefixed)
 * @param detail the event `detail` payload
 * @param defaultAction the behavior executed when the event is not prevented
 * @returns the dispatched event (inspect `defaultPrevented` if needed)
 */
export function dispatchCancelable<T>(
  host: HTMLElement,
  name: string,
  detail: T,
  defaultAction: () => void,
): CustomEvent<T> {
  const event = new CustomEvent<T>(name, {
    bubbles: true,
    composed: true,
    cancelable: true,
    detail,
  });
  host.dispatchEvent(event);
  if (!event.defaultPrevented) {
    defaultAction();
  }
  return event;
}
