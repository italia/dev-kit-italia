import { html } from 'lit';
import { customElement, property, state, queryAssignedElements } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { BaseComponent, RovingTabindexController, dispatchCancelable } from '@italia/globals';
import type { ItTab } from './it-tab.js';
import type { ItTabPanel } from './it-tab-panel.js';
import type { TabPlacement, ItTabCloseEventDetail } from './types.js';

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
 *   verticale (`placement=start|end`). Accetta qualsiasi valore CSS valido
 *   per `flex-basis` (es. `200px`, `25%`, `12rem`). Non ha effetto in modalità orizzontale.
 *
 * @fires it-tabs-change - Emesso quando cambia il pannello attivo.
 *   `detail.panel` contiene il nome del pannello attivato.
 * @fires it-tab-close - Emesso (quando `dismissible` è attivo) quando si clicca il pulsante ×,
 *   si preme Delete/Backspace, o si ri-attiva il tab già selezionato (doppio tap mobile SR).
 *   Il `detail` è tipizzato come {@link ItTabCloseEventDetail}: `detail.panel` e `detail.type`.
 *
 *   L'evento è **cancelable**: chiamare `e.preventDefault()` blocca la rimozione automatica.
 *   Per eseguire la chiusura standard in un momento a scelta (es. dopo conferma asincrona)
 *   richiamare il metodo pubblico `itTabs.close(e.detail.panel)`.
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
   * Nasconde visivamente la scrollbar orizzontale della tablist su viewport intermedi
   * (≥ 768px e < 1200px), dove Bootstrap Italia mostra normalmente il tab overflow con scrollbar.
   * Su mobile (< 768px) e su desktop wide (≥ 1200px) il meccanismo viene disattivato automaticamente.
   *
   * Il meccanismo BSI: il wrapper `.nav-row` riceve `overflow: hidden` + altezza fissa che
   * stoppa la scrollbar; `.nav-tabs` riceve `padding-bottom: 20px` che spinge il
   * track della scrollbar sotto il bordo di clip, rendendola invisibile ma preservando lo scroll.
   *
   * Corrisponde alla classe Bootstrap Italia `.nav-tabs-hidescroll` sul wrapper.
   * Ignorato nei layout verticali (`placement="start"` / `placement="end"`) e con `cards`.
   * Usato tipicamente insieme ad `auto`.
   */
  @property({ type: Boolean, attribute: 'hide-scrollbar', reflect: true })
  hideScrollbar = false;

  /**
   * Sfondo primario chiaro sul tab selezionato (solo in layout verticale: `placement="start"` o `placement="end"`).
   * Corrisponde alla classe Bootstrap Italia `.nav-tabs-vertical-background`.
   */
  @property({ type: Boolean, attribute: 'vertical-background', reflect: true })
  verticalBackground = false;

  /**
   * Variante con sfondo scuro per la tablist.
   * Corrisponde alla classe Bootstrap Italia `.nav-dark`.
   * Ignorato quando `cards` è attivo: le due varianti non sono compatibili.
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
   * Abilita la chiusura dei tab tramite il pulsante × e i tasti Delete/Backspace.
   * Indipendente da `cards`: può essere usato con qualsiasi variante di tab.
   * Quando attivo, ogni `it-tab` mostra il pulsante × e risponde
   * ai tasti Delete/Backspace con l'evento cancelable `it-tab-close`.
   */
  @property({ type: Boolean, reflect: true })
  dismissible = false;

  /**
   * Attiva l'animazione "a comparsa" (fade in/out) sui pannelli.
   * Equivale alla classe `.fade` di Bootstrap Italia su ogni `.tab-pane`.
   */
  @property({ type: Boolean, reflect: true })
  fade = false;

  /**
   * Posizione della tablist rispetto ai pannelli.
   * - `top` (default): tablist sopra il contenuto
   * - `bottom`: tablist sotto il contenuto
   * - `start`: tablist a sinistra (layout verticale)
   * - `end`: tablist a destra (layout verticale)
   */
  @property({ type: String, reflect: true })
  placement: TabPlacement = 'top';

  // ─── Internal state ───────────────────────────────────────────────────────

  /**
   * Traccia se almeno uno dei tab contiene un elemento `it-icon`.
   * Determina se applicare la classe `.nav-tabs-icon-text` per ottimizzare
   * lo spazio tra icona e testo.
   */
  @state()
  private _hasIcons = false;

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
    return this.placement === 'start' || this.placement === 'end';
  }

  /**
   * Roving tabindex controller: gestisce tabindex e navigazione da tastiera
   * tra gli elementi `it-tab` secondo il pattern WAI-ARIA.
   *
   * La direzione è dinamica: `'horizontal'` per layout orizzontali,
   * `'vertical'` per layout verticali (placement start/end).
   */
  protected rovingTabindex = new RovingTabindexController<ItTab>(this, {
    getItems: () => this._tabs,
    onSelect: (tab) => this._selectTab(tab),
    selectOnFocus: true,
    // Home/End should activate tabs per WAI-ARIA for this component.
    selectOnHomeEnd: true,
    direction: 'both',
    skipItem: (tab) => tab.disabled,
  });

  // ─── Lifecycle ───────────────────────────────────────────────────────────

  override connectedCallback(): void {
    super.connectedCallback?.();
    this.addEventListener('keydown', this._onKeyDown);
    this.addEventListener('it-tab-select', this._onTabSelect as EventListener);
    this.addEventListener('it-tab-close-request', this._onTabCloseRequest as EventListener);
  }

  override disconnectedCallback(): void {
    this.removeEventListener('keydown', this._onKeyDown);
    this.removeEventListener('it-tab-select', this._onTabSelect as EventListener);
    this.removeEventListener('it-tab-close-request', this._onTabCloseRequest as EventListener);
    super.disconnectedCallback?.();
  }

  override firstUpdated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.firstUpdated?.(changedProperties);
    this._initTabs();
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated?.(changedProperties);
    // Re-sync tab state when dismissible (or cards/fade) change at runtime.
    if (changedProperties.has('dismissible') || changedProperties.has('cards') || changedProperties.has('fade')) {
      this._initTabs();
    }
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

    // Rileva se almeno un tab contiene un elemento it-icon per applicare la classe icon-text
    this._hasIcons = tabs.some((tab) => tab.querySelector('it-icon') !== null);

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

      // Propaga la variante cards su ogni it-tab — CSS :host([cards]) può stilare direttamente.
      // eslint-disable-next-line no-param-reassign
      tab.cards = this.cards;
      // Abilita il pulsante × nello shadow DOM di it-tab quando dismissible è attivo.
      // Nessuna manipolazione del light DOM: sicuro per SSR e framework re-render.
      // eslint-disable-next-line no-param-reassign
      tab.dismissible = this.dismissible;
      // ARIA: shortcut keyboard Delete + Backspace se la chiusura è abilitata.
      // aria-keyshortcuts è supportato dai browser come attributo; l'annuncio
      // da parte degli screen reader è best-effort (varia per SR/versione).
      if (this.dismissible && !tab.disabled) {
        tab.setAttribute('aria-keyshortcuts', 'Delete Backspace');
      } else {
        tab.removeAttribute('aria-keyshortcuts');
      }
    });
  }

  /**
   * Intercetta `it-tab-close-request` emesso dal bottone × nello shadow DOM di `it-tab`.
   * Prima di dispatchiare `it-tab-close` all'esterno, sposta il focus su un tab adiacente
   * in modo che l'utente da tastiera non perda il punto di navigazione.
   */
  private _onTabCloseRequest = (e: CustomEvent<{ panel: string; type: string }>): void => {
    const tab = this._tabs.find((t) => t.panel === e.detail.panel);
    if (tab) this._closeTabWithFocusShift(tab, e.detail.type !== 'click');
  };

  /**
   * Sposta il focus sul tab adiacente (successivo, altrimenti precedente) e
   * dispatcha `it-tab-close` verso l'esterno.
   *
   * Perché NON usiamo `_selectTab` né `rovingTabindex.focusItem`:
   * - `_selectTab` dispatcha `it-tabs-change`, che può far reagire il consumer
   *   in modo inaspettato (re-render, rimozione sync, ecc.) prima che il focus
   *   sia spostato — causa il "salto" di un tab.
   * - `rovingTabindex.focusItem` chiama `getItems()` che potrebbe leggere
   *   una lista di tab parzialmente aggiornata se il DOM è cambiato tra
   *   `_selectTab` e la chiamata a `focusItem`.
   *
   * Approccio diretto:
   * 1. Se il tab da chiudere era attivo, aggiorniamo active + pannelli
   *    direttamente (senza eventi intermedi) — così `_initTabs` post-rimozione
   *    trova `alreadyActive = target` e non sceglie il primo della lista.
   * 2. `target.tabIndex = 0` + `target.focus()` — atomici, nessun `getItems()`
   *    intermedio che potrebbe restituire una lista stale.
   * 3. Dispatch `it-tab-close` — il consumer rimuove il tab.
   *
   * Pattern: WAI-ARIA APG tabs § keyboard Delete.
   */

  /**
   * Esegue la chiusura fisica senza emettere eventi:
   * trasferisce lo stato `active` al tab adiacente,
   * sposta il focus (solo se `moveFocus`) e rimuove dal DOM.
   *
   * Chiamato sia come default action di `_closeTabWithFocusShift`
   * sia direttamente dal metodo pubblico `close()`.
   */
  private _executeClose(closingTab: ItTab, moveFocus: boolean): void {
    const tabs = this._tabs;
    const idx = tabs.indexOf(closingTab);
    const after = tabs.slice(idx + 1).find((t) => !t.disabled);
    const before = tabs
      .slice(0, idx)
      .reverse()
      .find((t) => !t.disabled);
    const target = after ?? before ?? null;

    if (target) {
      if (closingTab.active) {
        // Trasferisce lo stato active al target in modo sincrono,
        // così _initTabs (dopo lo slotchange) lo trova già attivo.
        tabs.forEach((t) => {
          // eslint-disable-next-line no-param-reassign
          t.active = t === target;
        });
        this._panels.forEach((p) => {
          // eslint-disable-next-line no-param-reassign
          p.active = p.name === target!.panel;
        });
      }
      // Focus sincrono: tabIndex=0 garantisce che focus() funzioni anche se Lit
      // non ha ancora aggiornato il DOM (active → tabIndex avviene async in updated).
      // Avviene solo da tastiera (Delete/Backspace), non da click × o chiamata pubblica.
      if (moveFocus) {
        target.tabIndex = 0;
        target.focus();
      }
    }
    const panelEl = this._panels.find((p) => p.name === closingTab.panel);
    closingTab.remove();
    panelEl?.remove();
  }

  private _closeTabWithFocusShift(closingTab: ItTab, moveFocus: boolean): void {
    dispatchCancelable<ItTabCloseEventDetail>(
      this,
      'it-tab-close',
      { panel: closingTab.panel, type: moveFocus ? 'keydown' : 'click' },
      () => this._executeClose(closingTab, moveFocus),
    );
  }

  /**
   * Chiude il tab associato al pannello `panel`, trasferendo lo stato `active`
   * al tab adiacente e rimuovendo `it-tab` + `it-tab-panel` dal DOM.
   *
   * Metodo pubblico pensato per essere chiamato dopo aver intercettato
   * `it-tab-close` con `e.preventDefault()` — ad esempio al termine di
   * una conferma asincrona:
   *
   * ```js
   * itTabs.addEventListener('it-tab-close', async (e) => {
   *   e.preventDefault();
   *   if (await myModal.confirm('Chiudere?')) itTabs.close(e.detail.panel);
   * });
   * ```
   *
   * Noop se `dismissible` non è attivo o il pannello non esiste.
   * Non ri-emette `it-tab-close`.
   */
  close(panel: string): void {
    if (!this.dismissible) return;
    const tab = this._tabs.find((t) => t.panel === panel);
    if (tab) this._executeClose(tab, false);
  }

  /**
   * Aggiunge un `it-tab` e il relativo `it-tab-panel` al componente.
   *
   * Il tab viene inserito prima dell'elemento `slot="after-tablist"` se presente
   * (in modo da restare all'interno della tablist prima del pulsante aggiungi),
   * altrimenti in fondo alla lista. Il pannello è sempre appeso in fondo.
   *
   * ```js
   * const tab = document.createElement('it-tab');
   * tab.setAttribute('slot', 'tab');
   * tab.setAttribute('panel', 'p5');
   * tab.textContent = 'Tab 5';
   * const panel = document.createElement('it-tab-panel');
   * panel.setAttribute('name', 'p5');
   * panel.textContent = 'Contenuto 5';
   * itTabs.addTab(tab, panel);
   * ```
   */
  addTab(tab: ItTab, panel: ItTabPanel): void {
    const afterTablist = this.querySelector<HTMLElement>('[slot="after-tablist"]');
    if (afterTablist) {
      this.insertBefore(tab, afterTablist);
    } else {
      this.appendChild(tab);
    }
    this.appendChild(panel);
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
    const currentTab = path.find(
      (el): el is HTMLElement => el instanceof HTMLElement && el.tagName.toLowerCase() === 'it-tab',
    ) as ItTab | undefined;

    if (!currentTab || (currentTab as ItTab).disabled) return;

    // Delete/Backspace quando dismissible è attivo: sposta il focus su un tab adiacente,
    // poi notifica l'esterno di chiudere il tab corrente.
    if ((e.key === 'Delete' || e.key === 'Backspace') && this.dismissible) {
      e.preventDefault();
      this._closeTabWithFocusShift(currentTab, true);
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
      'nav-dark': this.dark && !this.cards,
      'nav-tabs-vertical': isVertical,
      'nav-tabs-vertical-background': isVertical && this.verticalBackground,
      'nav-tabs-icon-text': this._hasIcons,
      'nav-tabs-cards': this.cards,
    });

    const rowClasses = classMap({
      'nav-row': true,
      auto: this.auto && !isVertical,
      'nav-tabs-hidescroll': this.hideScrollbar && !isVertical && !this.cards,
      // 'hidescroll-ico': this.hideScrollbar && this.iconText && !isVertical && !this.cards,
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
        <div class=${rowClasses}>
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
