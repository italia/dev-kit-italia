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
    // Aggiorna immediatamente le proprietà CSS e l'icona quando cambiano le proprietà del parent
    this.updateBackgroundProperties();
    this.updateAccordionIcon();
  }

  // Metodo pubblico per impostare la proprietà leftIcon del parent
  public setParentLeftIcon(leftIcon: boolean) {
    this.parentLeftIcon = leftIcon;
    // Forza il re-render quando cambia leftIcon
    this.requestUpdate();
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

  @property({ type: Boolean, attribute: false })
  public parentLeftIcon: boolean = false;

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
    // Gestisce sia l'icona normale che quella left
    const iconElement = this.shadowRoot?.querySelector('.accordion-icon, .accordion-icon-left');
    const collapseElement = this.shadowRoot?.querySelector('it-collapse') as any;

    if (iconElement && collapseElement) {
      if (collapseElement.expanded) {
        iconElement.classList.add('expanded');
      } else {
        iconElement.classList.remove('expanded');
      }

      // Per leftIcon, aggiorna anche il nome dell'icona
      if (this.parentLeftIcon) {
        (iconElement as any).name = collapseElement.expanded ? 'it-minus' : 'it-plus';
      }

      // Aggiorna il colore dell'icona in base al background
      // Se ha background attivo e l'item è espanso, l'icona deve essere bianca
      if (this.parentBackgroundActive && this._isExpanded) {
        (iconElement as any).color = 'white';
      } else {
        (iconElement as any).color = 'primary';
      }
    }
  }

  private updateBackgroundProperties() {
    // backgroundActive: applica background solo agli item espansi/attivi
    if (this.parentBackgroundActive && this._isExpanded) {
      this.style.setProperty('--accordion-button-bg', 'var(--bs-color-background-primary)');
      this.style.setProperty('--accordion-button-color', 'var(--bs-color-text-inverse)');
    } else {
      this.style.removeProperty('--accordion-button-bg');
      this.style.removeProperty('--accordion-button-color');
    }

    // backgroundHover: applica background hover a tutti gli item
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
        // Sincronizza _isExpanded con lo stato del collapse (unica fonte di verità)
        this._isExpanded = collapseElement.expanded;
        this.updateAccordionIcon();
        this.updateBackgroundProperties();
      });
      observer.observe(collapseElement, {
        attributes: true,
        attributeFilter: ['expanded'],
      });
    }
  }

  private renderHeading() {
    const buttonClasses = ['accordion-button', this._isExpanded && 'expanded'].filter(Boolean).join(' ');

    // Se il parent ha leftIcon=true, usa icone più/meno a sinistra
    const iconContent = this.parentLeftIcon
      ? html`<it-icon
          name="${this._isExpanded ? 'it-minus' : 'it-plus'}"
          class="accordion-icon-left"
          color="primary"
        ></it-icon>`
      : html`<it-icon name="it-collapse" class="accordion-icon" color="primary"></it-icon>`;

    const buttonContent = this.parentLeftIcon
      ? html`<it-button class="${buttonClasses}" type="button" icon id="${this._id}" exportparts="focusable,button">
          ${iconContent}
          <span>${this.label}</span>
        </it-button>`
      : html`<it-button class="${buttonClasses}" type="button" icon id="${this._id}" exportparts="focusable,button">
          <span>${this.label}</span>
          ${iconContent}
        </it-button>`;

    switch (this.as) {
      case 'h3':
        return html`<h3 class="accordion-header">${buttonContent}</h3>`;
      case 'h4':
        return html`<h4 class="accordion-header">${buttonContent}</h4>`;
      case 'h5':
        return html`<h5 class="accordion-header">${buttonContent}</h5>`;
      case 'h6':
        return html`<h6 class="accordion-header">${buttonContent}</h6>`;
      default:
        return html`<h2 class="accordion-header">${buttonContent}</h2>`;
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
