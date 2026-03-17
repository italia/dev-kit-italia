export const TAB_PLACEMENTS = ['top', 'bottom', 'start', 'end'] as const;
export type TabPlacement = (typeof TAB_PLACEMENTS)[number];

/**
 * Payload dell'evento `it-tab-close` emesso da `it-tabs`.
 *
 * Quando si chiama `e.preventDefault()` per intercettare la chiusura
 * (es. modale di conferma asincrona), richiamare il metodo pubblico
 * `itTabs.close(e.detail.panel)` per delegare al componente la chiusura
 * standard (focus shift + rimozione DOM) nel momento desiderato.
 *
 * @example
 * ```js
 * itTabs.addEventListener('it-tab-close', async (e) => {
 *   e.preventDefault();
 *   const ok = await myModal.confirm(`Chiudere?`);
 *   if (ok) itTabs.close(e.detail.panel);
 * });
 * ```
 */
export interface ItTabCloseEventDetail {
  /** Nome del pannello (`it-tab-panel[name]`) da chiudere. */
  panel: string;
  /**
   * Origine dell'azione:
   * - `'keydown'` — tasto Delete o Backspace
   * - `'click'`   — pulsante × o doppio tap (click su tab già attivo con `dismissible`)
   */
  type: 'keydown' | 'click';
}
