import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseLocalizedComponent } from '@italia/globals';
import { registerTranslation } from '@italia/i18n';
import it from './locales/it.js';
import en from './locales/en.js';

import styles from './it-tab.scss';

registerTranslation(it, en);

/**
 * `it-tab` rappresenta il singolo tab (trigger) all'interno di un componente `it-tabs`.
 *
 * L'host stesso è l'elemento interattivo: porta `role="tab"`, `tabIndex` e tutti
 * gli attributi ARIA direttamente nel light DOM. Lo shadow DOM contiene solo
 * `<slot>` per il contenuto — nessun elemento interattivo annidato (no nested-interactive).
 *
 * ## Accessibilità dismissible
 *
 * Quando `dismissible` è attivo, il componente imposta automaticamente sull'host:
 *
 * - `aria-keyshortcuts="Delete Backspace"` — annuncia le scorciatoie da tastiera
 *   agli screen reader desktop (NVDA, JAWS, VoiceOver+Mac).
 * - `aria-description="Attiva di nuovo per chiudere."` (testo localizzato) — presente
 *   **solo** quando il tab è anche `active`; informa l'utente di screen reader mobile
 *   (VoiceOver+iOS, TalkBack+Android) che può chiudere il tab ri-attivando l'elemento
 *   (doppio tap nel DOM virtuale), senza bisogno di shortcut tastiera.
 *
 * Il click sull'host quando `active && dismissible` emette `it-tab-close-request`
 * **solo** se il gesto viene da touch o pen (doppio tap SR mobile).
 * Un click mouse sull'host non chiude il tab: l'utente usa la × esplicita.
 *
 * @slot - Etichetta del tab: testo, icona o icona+testo
 *
 * @fires it-tab-select - Emesso al click (non disabilitato, non già attivo+dismissibile).
 *   `detail.panel` contiene il nome del pannello associato.
 * @fires it-tab-close-request - Emesso al doppio-tap touch/pen quando `active && dismissible`
 *   (SR mobile), oppure dal pulsante × interno.
 *   `detail.panel` e `detail.type` (`'click'`) propagano verso `it-tabs`.
 */
@customElement('it-tab')
export class ItTab extends BaseLocalizedComponent {
  static styles = styles;

  /**
   * Nome del pannello `it-tab-panel` associato.
   * Deve corrispondere all'attributo `name` dell'`it-tab-panel` collegato.
   */
  @property({ type: String, reflect: true })
  panel = '';

  /** Se `true`, il tab è disabilitato e non interagibile. */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * Stato attivo. Gestito dall'`it-tabs` padre.
   * Quando `true` il tab è selezionato e `tabIndex` dell'host è `0`.
   */
  @property({ type: Boolean, reflect: true })
  active = false;

  /**
   * In variante card: impostato automaticamente dall'`it-tabs` padre quando `cards` è attivo.
   * Porta gli stili card direttamente su :host([cards]) in it-tab.scss.
   */
  @property({ type: Boolean, reflect: true })
  cards = false;

  /**
   * Mostra il pulsante × per chiudere il tab.
   * Impostato automaticamente dall'`it-tabs` padre (da `dismissible` sul container);
   * non richiede manipolazione del light DOM (il bottone vive nello shadow DOM di `it-tab`).
   * Al click emette `it-tab-close-request` (bubbles + composed) verso `it-tabs`.
   */
  @property({ type: Boolean, reflect: true })
  dismissible = false;

  /**
   * Restituisce l'`id` dell'host, usato dall'`it-tabs` padre per
   * impostare `aria-labelledby` sul pannello associato (tutto in light DOM,
   * nessun cross-shadow ARIA necessario).
   */
  get tabId(): string {
    return this.id || this._id || '';
  }

  /** Tipo di pointer dell'ultimo pointerdown: 'mouse' | 'touch' | 'pen' | '' */
  private _lastPointerType = '';

  /** Porta il focus sull'host. Chiamato dal `RovingTabindexController`. */
  focusTab(): void {
    this.focus();
  }

  override connectedCallback(): void {
    super.connectedCallback?.();

    if (!this.hasAttribute('role')) this.setAttribute('role', 'tab');
    if (!this.id) this.id = this._id ?? '';
    this.setAttribute('aria-selected', String(this.active));
    this.setAttribute('aria-disabled', String(this.disabled));
    this.setAttribute('aria-controls', this.panel);
    // L'host è l'elemento interattivo: porta lui il tabindex del roving pattern.
    this.tabIndex = this.active ? 0 : -1;
    this._updateDismissibleAria();
    this.addEventListener('pointerdown', this._handlePointerDown);
    this.addEventListener('click', this._handleClick);
    this.addEventListener('keydown', this._handleKeydown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback?.();
    this.removeEventListener('pointerdown', this._handlePointerDown);
    this.removeEventListener('click', this._handleClick);
    this.removeEventListener('keydown', this._handleKeydown);
  }

  override updated(changed: Map<string | number | symbol, unknown>): void {
    super.updated?.(changed);
    if (changed.has('active')) {
      this.setAttribute('aria-selected', String(this.active));
      this.tabIndex = this.active ? 0 : -1;
    }
    if (changed.has('disabled')) this.setAttribute('aria-disabled', String(this.disabled));
    if (changed.has('panel')) this.setAttribute('aria-controls', this.panel);
    if (changed.has('active') || changed.has('dismissible')) this._updateDismissibleAria();
  }

  /**
   * Aggiorna gli attributi ARIA legati alla funzionalità dismissible:
   *
   * - `aria-keyshortcuts="Delete Backspace"` — presente sempre quando il tab è dismissibile;
   *   annuncia la scorciatoia da tastiera agli screen reader (NVDA, JAWS, VoiceOver+Mac).
   *
   * - `aria-description` — presente solo quando il tab è **sia attivo sia dismissibile**;
   *   contiene il testo localizzato (es. "Attiva di nuovo per chiudere.") che informa
   *   l'utente mobile (VoiceOver/TalkBack) che può chiudere ri-attivando l'elemento
   *   (doppio tap), oltre ai tasti Delete/Backspace già coperti da aria-keyshortcuts.
   */
  private _updateDismissibleAria(): void {
    if (this.dismissible) {
      this.setAttribute('aria-keyshortcuts', 'Delete Backspace');
    } else {
      this.removeAttribute('aria-keyshortcuts');
    }

    if (this.dismissible && this.active) {
      this.setAttribute('aria-description', this.localize.term('closeActiveTabHint'));
    } else {
      this.removeAttribute('aria-description');
    }
  }

  private _handlePointerDown = (e: PointerEvent): void => {
    this._lastPointerType = e.pointerType;
  };

  private _handleClick = (): void => {
    if (this.disabled) return;
    // Tab già attivo + dismissibile: doppio tap touch/pen (SR mobile) → close-request.
    // Mouse click sull'host NON chiude: l'utente usa la × esplicita.
    if (this.dismissible && this.active && (this._lastPointerType === 'touch' || this._lastPointerType === 'pen')) {
      this.dispatchEvent(
        new CustomEvent('it-tab-close-request', {
          bubbles: true,
          composed: true,
          detail: { panel: this.panel, type: 'click' },
        }),
      );
      return;
    }
    this.dispatchEvent(
      new CustomEvent('it-tab-select', {
        bubbles: true,
        composed: true,
        detail: { panel: this.panel },
      }),
    );
  };

  private _handleKeydown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // Space/Enter attivano il tab, mai la chiusura.
      // La chiusura tramite tastiera è esclusiva di Delete/Backspace,
      // gestiti da it-tabs._onKeyDown.
      if (this.disabled || this.active) return;
      this.dispatchEvent(
        new CustomEvent('it-tab-select', {
          bubbles: true,
          composed: true,
          detail: { panel: this.panel },
        }),
      );
    }
  };

  private _handleCloseClick = (e: Event): void => {
    e.stopPropagation(); // non triggerare selezione del tab
    this.dispatchEvent(
      new CustomEvent('it-tab-close-request', {
        bubbles: true,
        composed: true,
        detail: { panel: this.panel, type: e.type },
      }),
    );
  };

  render() {
    return html`
      <slot></slot>
      ${this.dismissible
        ? html`<span class="it-tab-close" aria-hidden="true" @click=${this._handleCloseClick}>
            <it-icon name="it-close"></it-icon>
          </span>`
        : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-tab': ItTab;
  }
}
