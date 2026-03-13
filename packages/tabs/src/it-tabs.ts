import { html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { BaseComponent, RovingTabindexController } from '@italia/globals';
import type { ItTab } from './it-tab.js';
import type { ItTabPanel } from './it-tab-panel.js';
import type { TabPlacement } from './types.js';

import styles from './it-tabs.scss';

/**
 * `it-tabs` è il componente contenitore per un'interfaccia a schede (tab).
 *
 * Gestisce la selezione, la navigazione da tastiera (roving tabindex, frecce, Home, End)
 * e i collegamenti ARIA tra trigger e pannelli.
 *
 * ## Struttura attesa
 *
 * ```html
 * <it-tabs label="Navigazione">
 *   <it-tab slot="tab" panel="p1">Tab 1</it-tab>
 *   <it-tab slot="tab" panel="p2">Tab 2</it-tab>
 *
 *   <it-tab-panel name="p1">Contenuto del primo pannello</it-tab-panel>
 *   <it-tab-panel name="p2">Contenuto del secondo pannello</it-tab-panel>
 * </it-tabs>
 * ```
 *
 * @slot tab  - Slot nominato per gli elementi `it-tab` (trigger della lista)
 * @slot after-tablist - Slot opzionale per elementi aggiuntivi dopo la lista di tab
 *   (es. pulsante "aggiungi"). Appare alla fine della tablist visivamente allineato ai tab.
 * @slot      - Slot di default per gli elementi `it-tab-panel` (contenuto)
 *
 * @cssprop [--it-tabs-nav-size=auto] - Larghezza (flex-basis) della tablist in modalità
 *   verticale (`vertical`, `placement=start|end`). Accetta qualsiasi valore CSS valido
 *   per `flex-basis` (es. `200px`, `25%`, `12rem`). Non ha effetto in modalità orizzontale.
 *
 * @fires it-tabs-change - Emesso quando cambia il pannello attivo.
 *   `detail.panel` contiene il nome del pannello attivato.
 * @fires it-tab-close - Emesso (in modalità `cards`) quando si clicca il pulsante ×
 *   iniettato automaticamente. `detail.panel` contiene il nome del pannello da chiudere.
 *   L'effettiva rimozione del tab è responsabilità dell'utente.
 */
@customElement('it-tabs')
export class ItTabs extends BaseComponent {
  static styles = styles;

  static shadowRootOptions = { ...BaseComponent.shadowRootOptions, delegatesFocus: true };

  /**
   * Testo dell'`aria-label` per la tablist.
   * Obbligatorio quando non è presente un'intestazione visiva adiacente.
   */
  @property({ type: String, reflect: true })
  label = '';

  /**
   * Tab a tutta larghezza: i tab occupano l'intera larghezza disponibile.
   * Corrisponde alla classe Bootstrap Italia `.auto` sulla tablist.
   */
  @property({ type: Boolean, reflect: true })
  auto = false;

  /**
   * Layout verticale dei tab (orientamento verticale della tablist).
   * Attiva anche la funzione di navigazione con frecce Su/Giù.
   */
  @property({ type: Boolean, reflect: true })
  vertical = false;

  /**
   * Sfondo primario chiaro sul tab selezionato (solo in modalità verticale).
   * Corrisponde alla classe Bootstrap Italia `.nav-tabs-vertical-background`.
   */
  @property({ type: Boolean, attribute: 'vertical-background', reflect: true })
  verticalBackground = false;

  /**
   * Variante con sfondo scuro per la tablist.
   * Corrisponde alla classe Bootstrap Italia `.nav-dark`.
   */
  @property({ type: Boolean, reflect: true })
  dark = false;

  /**
   * Stile "card" per i tab.
   * Corrisponde alla classe Bootstrap Italia `.nav-tabs-cards`.
   */
  @property({ type: Boolean, reflect: true })
  cards = false;

  /**
   * Attiva l'animazione "a comparsa" (fade in/out) sui pannelli.
   * Equivale alla classe `.fade` di Bootstrap Italia su ogni `.tab-pane`.
   */
  @property({ type: Boolean, reflect: true })
  fade = false;

  /**
   * Spazio ottimizzato per la combinazione icona + testo nei tab.
   * Corrisponde alla classe Bootstrap Italia `.nav-tabs-icon-text`.
   */
  @property({ type: Boolean, attribute: 'icon-text', reflect: true })
  iconText = false;

  /**
   * Posizione della tablist rispetto ai pannelli.
   * - `top` (default): tablist sopra il contenuto
   * - `bottom`: tablist sotto il contenuto
   * - `start`: tablist a sinistra (layout verticale)
   * - `end`: tablist a destra (layout verticale)
   */
  @property({ type: String, reflect: true })
  placement: TabPlacement = 'top';

  // ─── Slot queries ─────────────────────────────────────────────────────────

  @queryAssignedElements({ slot: 'tab', selector: 'it-tab' })
  private _tabs!: ItTab[];

  @queryAssignedElements({ selector: 'it-tab-panel' })
  private _panels!: ItTabPanel[];

  // ─── Keyboard navigation ──────────────────────────────────────────────────

  /**
   * Determina se la tablist è in orientamento verticale.
   * Usato sia per il layout che per la direzione della navigazione da tastiera.
   */
  private get _isVertical(): boolean {
    return this.vertical || this.placement === 'start' || this.placement === 'end';
  }

  /**
   * Roving tabindex controller: gestisce tabindex e navigazione da tastiera
   * tra gli elementi `it-tab` secondo il pattern WAI-ARIA.
   *
   * La direzione è dinamica: `'horizontal'` per layout orizzontali,
   * `'vertical'` per layout verticali (o placement start/end).
   */
  protected rovingTabindex = new RovingTabindexController<ItTab>(this, {
    getItems: () => this._tabs,
    onSelect: (tab) => this._selectTab(tab),
    selectOnFocus: true,
    direction: 'both',
    skipItem: (tab) => tab.disabled,
  });

  // ─── Lifecycle ───────────────────────────────────────────────────────────

  override connectedCallback(): void {
    super.connectedCallback?.();
    this.addEventListener('keydown', this._onKeyDown);
    this.addEventListener('it-tab-select', this._onTabSelect as EventListener);
  }

  override disconnectedCallback(): void {
    this.removeEventListener('keydown', this._onKeyDown);
    this.removeEventListener('it-tab-select', this._onTabSelect as EventListener);
    super.disconnectedCallback?.();
  }

  override firstUpdated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.firstUpdated?.(changedProperties);
    this._initTabs();
  }

  // ─── Internal state management ───────────────────────────────────────────

  /**
   * Inizializza i tab: attiva il primo tab non disabilitato se nessuno è già attivo,
   * collega i tab ai pannelli via ARIA e allinea il roving tabindex controller.
   */
  private _initTabs(): void {
    const tabs = this._tabs;
    const panels = this._panels;

    if (!tabs.length) return;

    const alreadyActive = tabs.find((t) => t.active && !t.disabled);
    const toActivate = alreadyActive ?? tabs.find((t) => !t.disabled) ?? null;

    tabs.forEach((tab) => {
      const isActive = tab === toActivate;
      // eslint-disable-next-line no-param-reassign
      tab.active = isActive;

      const panel = panels.find((p) => p.name === tab.panel);
      if (panel) {
        if (!panel.id) panel.id = panel.name;
        // Imposta aria-labelledby puntando al bottone interno del tab.
        // Cross-shadow ARIA id reference: funziona nei browser moderni (Chrome 90+, FF 100+, Safari 16+).
        panel.setAttribute('aria-labelledby', tab.tabId);
        // Il fade può essere impostato sull'it-tabs (propagato a tutti i pannelli)
        // o direttamente su singoli it-tab-panel. Non sovrascrivere il valore
        // già presente sul pannello se l'it-tabs non ha fade.
        // eslint-disable-next-line no-param-reassign
        panel.fade = panel.fade || this.fade;
        // eslint-disable-next-line no-param-reassign
        panel.active = isActive;
      }

      // In modalità cards, inietta il pulsante × come <a aria-hidden> (visuale only).
      // Non <button>: would be nested-interactive inside role="tab".
      // Keyboard close: tasto Delete gestito in _onKeyDown.
      if (this.cards && !tab.querySelector('.it-tab-close')) {
        this._injectCloseButton(tab);
      }
      // Rimuove il bottone × se cards è stata tolta dopo l'init
      if (!this.cards) {
        tab.querySelector('.it-tab-close')?.remove();
        tab.removeAttribute('aria-keyshortcuts');
      }
      // ARIA: shortcut keyboard per chiudere in cards mode
      if (this.cards && !tab.disabled) {
        tab.setAttribute('aria-keyshortcuts', 'Delete');
      } else if (!this.cards) {
        tab.removeAttribute('aria-keyshortcuts');
      }
    });
  }

  /**
   * Inietta un elemento `<a class="it-tab-close">` con `<it-icon>` nel light DOM
   * dell'`it-tab` per la modalità cards. Usa `<a>` perché `<button>` dentro
   * `role="tab"` crea nested interactive content (pattern ARIA non valido).
   * Il click sull'<a> emette l'evento `it-tab-close` sull'`it-tabs` e fa da
   * hook per l'utente per rimuovere il tab programmaticamente.
   */
  private _injectCloseButton(tab: ItTab): void {
    const a = document.createElement('a');
    a.className = 'it-tab-close';
    // aria-hidden="true": rimuove dall'albero AT — evita nested-interactive violation.
    // L'accesso keyboard avviene via tasto Delete (gestito in _onKeyDown).
    a.setAttribute('aria-hidden', 'true');
    a.setAttribute('tabindex', '-1');
    // it-icon nel light DOM: eredita stili BSI globali
    a.innerHTML = '<it-icon name="it-close" aria-hidden="true"></it-icon>';
    a.addEventListener('click', (e: Event) => {
      e.stopPropagation(); // non triggerare selezione del tab
      this.dispatchEvent(
        new CustomEvent('it-tab-close', {
          bubbles: true,
          composed: true,
          detail: { panel: tab.panel },
        }),
      );
    });
    tab.appendChild(a);
  }

  /**
   * Seleziona il tab indicato e aggiorna tutti gli stati (tab attivo, pannello visibile,
   * tabindex sul roving controller).
   */
  private _selectTab(targetTab: ItTab): void {
    if (targetTab.disabled) return;

    const tabs = this._tabs;
    const panels = this._panels;

    tabs.forEach((tab) => {
      const isTarget = tab === targetTab;
      // eslint-disable-next-line no-param-reassign
      tab.active = isTarget;

      const panel = panels.find((p) => p.name === tab.panel);
      if (panel) {
        // eslint-disable-next-line no-param-reassign
        panel.active = isTarget;
      }
    });

    this.dispatchEvent(
      new CustomEvent('it-tabs-change', {
        bubbles: true,
        composed: true,
        detail: { panel: targetTab.panel },
      }),
    );
  }

  // ─── Event handlers ──────────────────────────────────────────────────────

  private _onTabSelect = (e: CustomEvent<{ panel: string }>): void => {
    const target = e.target as ItTab;
    if (target.tagName.toLowerCase() === 'it-tab') {
      this._selectTab(target);
    }
  };

  /**
   * Navigazione da tastiera nella tablist (WAI-ARIA tabs pattern).
   *
   * Orizzontale: ArrowLeft / ArrowRight / Home / End
   * Verticale:   ArrowUp  / ArrowDown  / Home / End
   *
   * La logica di navigazione viene delegata al `RovingTabindexController`
   * che gestisce wrap-around, skip dei disabilitati e aggiornamento dei tabindex.
   */
  private _onKeyDown = (e: KeyboardEvent): void => {
    // Risale il composedPath per trovare l'it-tab che ha originato l'evento
    // (attraversa i confini dello shadow DOM).
    const path = e.composedPath();
    const currentTab = this._tabs.find(
      (tab) => path.includes(tab) || (tab.shadowRoot && tab.shadowRoot.contains(path[0] as Node)),
    );

    if (!currentTab || currentTab.disabled) return;

    // Delete key in cards mode: chiude il tab corrente (accessibilità keyboard).
    if (e.key === 'Delete' && this.cards) {
      e.preventDefault();
      this.dispatchEvent(
        new CustomEvent('it-tab-close', {
          bubbles: true,
          composed: true,
          detail: { panel: currentTab.panel },
        }),
      );
      return;
    }

    // direction='both': tutte e 4 le frecce sono valide in ogni orientamento
    const validKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
    if (!validKeys.includes(e.key)) return;

    // Delega navigazione + aggiornamento tabindex + selezione (via onSelect) al controller.
    this.rovingTabindex.handleKeydown(currentTab, e);
  };

  // ─── Slot change handlers ────────────────────────────────────────────────

  private _onTabSlotChange(): void {
    this._initTabs();
  }

  private _onPanelSlotChange(): void {
    this._initTabs();
  }

  // ─── Render ──────────────────────────────────────────────────────────────

  render() {
    const isVertical = this._isVertical;

    const tablistClasses = classMap({
      nav: true,
      'nav-tabs': true,
      auto: this.auto && !isVertical,
      'nav-dark': this.dark,
      'nav-tabs-vertical': isVertical,
      'nav-tabs-vertical-background': isVertical && this.verticalBackground,
      'nav-tabs-icon-text': this.iconText,
      'nav-tabs-cards': this.cards,
    });

    const wrapperClasses = classMap({
      'tabs-wrapper': true,
      'tabs-wrapper--bottom': this.placement === 'bottom',
      'tabs-wrapper--start': this.placement === 'start',
      'tabs-wrapper--end': this.placement === 'end',
      'tabs-wrapper--vertical': isVertical,
    });

    return html`
      <div class=${wrapperClasses}>
        <div class="nav-row">
          <div
            class=${tablistClasses}
            role="tablist"
            part="tablist"
            aria-label=${ifDefined(this.label || undefined)}
            aria-orientation=${isVertical ? 'vertical' : 'horizontal'}
          >
            <slot name="tab" @slotchange=${this._onTabSlotChange}></slot>
          </div>
          <slot name="after-tablist"></slot>
        </div>
        <div class="tab-content" part="tab-content">
          <slot @slotchange=${this._onPanelSlotChange}></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-tabs': ItTabs;
  }
}
