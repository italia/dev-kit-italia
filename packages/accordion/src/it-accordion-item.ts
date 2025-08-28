import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
// import '@italia/icon/it-icon.js';
// import '@italia/button/it-button.js';
import { HeadingLevels, isKeyboardEvent, PressEvent } from './types.js';
import styles from './accordion.scss';

@customElement('it-accordion-item')
export class ItAccordionItem extends BaseComponent {
  static styles = styles;

  @property()
  as: HeadingLevels = 'h2';

  @property()
  label: string = '';

  @property({ type: Boolean, attribute: 'default-open', reflect: true })
  defaultOpen: boolean = false;

  // Stato interno per tracking dell'apertura/chiusura corrente
  @state()
  private _isExpanded: boolean = false;

  // Metodo pubblico per modificare lo stato di apertura
  public setExpanded(expanded: boolean) {
    this._isExpanded = expanded;
  }

  // Metodo pubblico per impostare le proprietà background del parent
  public setParentBackground(backgroundActive: boolean, backgroundHover: boolean) {
    this.parentBackgroundActive = backgroundActive;
    this.parentBackgroundHover = backgroundHover;
  }

  // Getter per leggere lo stato corrente
  public get isExpanded(): boolean {
    return this._isExpanded;
  }

  // Proprietà per tracciare se il parent accordion ha i background attivi
  @property({ type: Boolean, attribute: false })
  public parentBackgroundActive: boolean = false;

  @property({ type: Boolean, attribute: false })
  public parentBackgroundHover: boolean = false;

  protected _panelId = this.generateId('it-accordion-item-content');

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);

    // Solo se defaultOpen cambia (dovrebbe essere raro), aggiorna lo stato interno
    if (changedProperties.has('defaultOpen')) {
      this._isExpanded = this.defaultOpen;
      const collapseElement = this.shadowRoot?.querySelector('it-collapse') as any;
      if (collapseElement && collapseElement.expanded !== this._isExpanded) {
        collapseElement.expanded = this._isExpanded;
      }
      this.updateAccordionIcon();
    }

    // Se lo stato interno cambia, aggiorna l'icona e il collapse
    if (changedProperties.has('_isExpanded')) {
      const collapseElement = this.shadowRoot?.querySelector('it-collapse') as any;
      if (collapseElement && collapseElement.expanded !== this._isExpanded) {
        collapseElement.expanded = this._isExpanded;
      }
      this.updateAccordionIcon();
      this.updateBackgroundProperties();
    }

    // Se cambiano le proprietà di background del parent, aggiorna le CSS properties
    if (changedProperties.has('parentBackgroundActive') || changedProperties.has('parentBackgroundHover')) {
      this.updateBackgroundProperties();
    }
  }

  private updateAccordionIcon() {
    const iconElement = this.shadowRoot?.querySelector('.accordion-icon');
    const collapseElement = this.shadowRoot?.querySelector('it-collapse') as any;

    if (iconElement && collapseElement) {
      if (collapseElement.expanded) {
        iconElement.classList.add('expanded');
      } else {
        iconElement.classList.remove('expanded');
      }
    }
  }

  private updateBackgroundProperties() {
    if (this.parentBackgroundActive && this._isExpanded) {
      this.style.setProperty('--accordion-button-bg', 'var(--bs-color-background-primary)');
      this.style.setProperty('--accordion-button-color', 'var(--bs-color-text-inverse)');
    } else {
      this.style.removeProperty('--accordion-button-bg');
      this.style.removeProperty('--accordion-button-color');
    }

    if (this.parentBackgroundHover) {
      this.style.setProperty('--accordion-button-hover-bg', 'var(--bs-color-background-primary)');
      this.style.setProperty('--accordion-button-hover-color', 'var(--bs-color-text-inverse)');
    } else {
      this.style.removeProperty('--accordion-button-hover-bg');
      this.style.removeProperty('--accordion-button-hover-color');
    }
  }

  firstUpdated(changedProperties: Map<string | number | symbol, unknown>) {
    super.firstUpdated?.(changedProperties);

    // Inizializza lo stato interno dal defaultOpen
    this._isExpanded = this.defaultOpen;

    // Sync collapse component con lo stato iniziale
    const collapseElement = this.shadowRoot?.querySelector('it-collapse') as any;
    if (collapseElement) {
      collapseElement.expanded = this._isExpanded;
    }

    // Aggiorna l'icona inizialmente
    this.updateAccordionIcon();

    // Aggiorna le proprietà background inizialmente
    this.updateBackgroundProperties();

    // Ascolta i cambiamenti del collapse
    if (collapseElement) {
      const observer = new MutationObserver(() => {
        this.updateAccordionIcon();
      });
      observer.observe(collapseElement, {
        attributes: true,
        attributeFilter: ['expanded'],
      });
    }
  }

  private _dispatchToggle(e: PressEvent) {
    // Dispatch custom event che bubble fino al padre it-accordion
    if (isKeyboardEvent(e) && e.key !== 'Enter' && e.key !== ' ') return;

    this.dispatchEvent(
      new CustomEvent('accordion-toggle', {
        detail: { id: this._panelId },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private renderHeading() {
    const buttonClasses = ['accordion-button', this._isExpanded && 'expanded'].filter(Boolean).join(' ');

    const buttonContent = html`<it-button
      class="${buttonClasses}"
      type="button"
      icon
      @click="${this._dispatchToggle}"
      @keydown="${this._dispatchToggle}"
      exportparts="focusable,button"
    >
      <span>${this.label}</span>
      <it-icon name="it-collapse" class="accordion-icon" color="primary"></it-icon>
    </it-button>`;

    switch (this.as) {
      case 'h3':
        return html`<h3 class="accordion-header" id="${this._id}">${buttonContent}</h3>`;
      case 'h4':
        return html`<h4 class="accordion-header" id="${this._id}">${buttonContent}</h4>`;
      case 'h5':
        return html`<h5 class="accordion-header" id="${this._id}">${buttonContent}</h5>`;
      case 'h6':
        return html`<h6 class="accordion-header" id="${this._id}">${buttonContent}</h6>`;
      default:
        return html`<h2 class="accordion-header" id="${this._id}">${buttonContent}</h2>`;
    }
  }

  render() {
    return html` <div class="accordion-item" part="accordion-item">
      <it-collapse ?expanded="${this._isExpanded}">
        <!-- Trigger slot -->
        <div slot="trigger">${this.renderHeading()}</div>
        <!-- Content slot -->
        <div
          slot="content"
          id="${this._panelId}"
          class="accordion-collapse"
          role="region"
          aria-labelledby="${this._id}"
        >
          <div class="accordion-body">
            <slot></slot>
          </div>
        </div>
      </it-collapse>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-accordion-item': ItAccordionItem;
  }
}
