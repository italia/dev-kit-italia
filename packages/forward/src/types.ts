/**
 * Detail dell'evento `it-forward-navigate`.
 * L'evento è cancelable: `event.preventDefault()` impedisce lo scorrimento di default
 * verso la destinazione (puoi gestire la navigazione manualmente).
 */
export interface ForwardNavigateEventDetail {
  /** Valore dell'attributo `href` del link (es. `#sezione`) */
  href: string;
  /** Elemento di destinazione risolto a partire dall'`href`, se presente */
  target: HTMLElement | null;
}
