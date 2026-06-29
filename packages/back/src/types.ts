/**
 * Detail dell'evento `it-back-navigate`.
 * L'evento è cancelable: `event.preventDefault()` impedisce l'esecuzione di default
 * di `window.history.back()`, permettendo di gestire la navigazione manualmente
 * (ad esempio con il router di un framework).
 */
export type BackNavigateEventDetail = Record<string, never>;
