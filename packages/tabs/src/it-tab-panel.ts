import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { BaseComponent } from '@italia/globals';

import styles from './it-tab-panel.scss';

/**
 * `it-tab-panel` rappresenta il pannello di contenuto associato a un `it-tab`.
 *
 * Il contenuto dello slot diventa il corpo del pannello, visibile solo quando
 * il tab corrispondente è selezionato.
 *
 * L'attributo `name` deve corrispondere all'attributo `panel` dell'`it-tab` collegato.
 *
 * @slot - Contenuto del pannello
 *
 * @csspart panel - Il `div` contenitore interno del pannello
 */
@customElement('it-tab-panel')
export class ItTabPanel extends BaseComponent {
  static styles = styles;

  /**
   * Identificatore del pannello. Deve corrispondere all'attributo `panel`
   * dell'`it-tab` associato. Viene usato anche come `id` dell'elemento host
   * per il collegamento ARIA tramite `aria-controls`.
   */
  @property({ type: String, reflect: true })
  name = '';

  /**
   * Stato attivo del pannello. Gestito dall'`it-tabs` padre.
   * Quando `true`, il pannello è visibile.
   */
  @property({ type: Boolean, reflect: true })
  active = false;

  /**
   * Attiva l'animazione "a comparsa" (fade-in) sul pannello al momento
   * dell'attivazione, usando la Web Animations API (opacity 0→1, 150 ms).
   * Rispetta automaticamente `prefers-reduced-motion`: se l'utente ha
   * richiesto animazioni ridotte l'effetto viene completamente saltato.
   * Da usare su tutti i pannelli dello stesso `it-tabs` per coerenza visiva.
   */
  @property({ type: Boolean, reflect: true })
  fade = false;

  override connectedCallback(): void {
    super.connectedCallback?.();
    // L'id sull'host fa da target per aria-controls del tab
    if (this.name && !this.id) {
      this.id = this.name;
    }
    // role e tabindex sull'host: aria-labelledby è valido solo su elementi con role
    if (!this.hasAttribute('role')) this.setAttribute('role', 'tabpanel');
    if (!this.hasAttribute('tabindex')) this.tabIndex = 0;
  }

  override updated(changed: Map<string | number | symbol, unknown>): void {
    super.updated?.(changed);

    // Aggiorna l'id se il name cambia dopo la connessione
    if (changed.has('name') && this.name && !this.hasAttribute('id')) {
      this.id = this.name;
    }

    // Fade-in con Web Animations API quando il pannello diventa attivo.
    // Viene saltato se il pannello non ha l'attributo `fade` oppure se
    // l'utente ha richiesto animazioni ridotte (prefers-reduced-motion).
    // Strategia: forziamo display:flex sull'host via style inline prima di animare,
    // così il browser non deve risolvere la cascade da :host([active]) e l'elemento
    // è sicuramente nel flusso quando opacity parte da 0.
    // Al termine rimuoviamo lo style inline e lasciamo la cascade CSS riprendere.
    if (changed.has('active') && this.fade) {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (this.active && !reduced) {
        // Forza display prima che il browser risolva la cascade, poi anima
        // l'host stesso (più semplice e affidabile dell'animare il figlio shadow).
        this.style.display = 'flex';
        // eslint-disable-next-line no-unused-expressions
        this.offsetHeight; // forza reflow: l'elemento è ora nel flusso
        this.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, easing: 'linear', fill: 'none' }).finished.then(
          () => this.style.removeProperty('display'),
        );
      }
    }
  }

  render() {
    return html`
      <div
        part="panel"
        class=${classMap({
          'tab-pane': true,
          fade: this.fade,
          active: this.active,
          show: this.active,
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-tab-panel': ItTabPanel;
  }
}
