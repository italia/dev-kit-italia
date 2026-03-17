export const TAB_PLACEMENTS = ['top', 'bottom', 'start', 'end'] as const;
export type TabPlacement = (typeof TAB_PLACEMENTS)[number];

/**
 * Payload dell'evento `it-tab-close` emesso da `it-tabs`.
 *
 * Quando si chiama `e.preventDefault()` per intercettare la chiusura
 * (es. modale di conferma asincrona), richiamare `e.detail.close()` per
 * delegare al componente l'intera logica di chiusura standard:
 * trasferimento dello stato `active`, spostamento del focus sul tab
 * adiacente e rimozione di `it-tab` + `it-tab-panel` dal DOM.
 *
 * @example
 * ```js
 * itTabs.addEventListener('it-tab-close', async (e) => {
 *   e.preventDefault();
 *   const ok = await myModal.confirm(`Chiudere?`);
 *   if (ok) e.detail.close();
 * });
 * ```
 */
export interface ItTabCloseEventDetail {
  /** Nome del pannello (`it-tab-panel[name]`) da chiudere. */
  panel: string;
  /**
   * Origine dell'azione:
   * - `'keydown'` — tasto Delete o Backspace
   * - `'click'`   — pulsante × cliccato con il mouse
   */
  type: 'keydown' | 'click';
  /**
   * Esegue la chiusura predefinita del componente:
   * trasferisce lo stato `active` al tab adiacente, sposta il focus
   * (solo quando l'azione era da tastiera) e rimuove `it-tab` +
   * `it-tab-panel` dal DOM.
   *
   * Chiamare solo dopo aver già invocato `e.preventDefault()`;
   * se l'evento non è stato cancellato, la chiusura avviene già
   * automaticamente come default action.
   */
  close: () => void;
}
