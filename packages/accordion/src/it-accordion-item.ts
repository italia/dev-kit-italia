import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { ItCollapse } from '@italia/accordion';
import styles from './accordion.scss';
import type { HeadingLevels } from './types.ts';

@customElement('it-accordion-item')
export class ItAccordionItem extends ItCollapse {
  // Eredita tutte le proprietà da ItCollapse
  // Aggiunge solo alias semantici per le proprietà accordion
  static styles = styles;

  @property()
  override as: HeadingLevels = 'h2';

  @property({ type: Boolean, attribute: 'default-open', reflect: true })
  override defaultOpen: boolean = false;

  @property({ type: Boolean, attribute: 'left-icon', reflect: true })
  leftIcon = false;

  @property({ type: Boolean, attribute: 'background-active', reflect: true })
  backgroundActive = false;

  @property({ type: Boolean, attribute: 'background-hover', reflect: true })
  backgroundHover = false;

  public setParentBackground(backgroundActive: boolean, backgroundHover: boolean) {
    this.backgroundActive = backgroundActive;
    this.backgroundHover = backgroundHover;
  }

  public setParentLeftIcon(leftIcon: boolean) {
    this.leftIcon = leftIcon;
  }

  protected override renderDefaultTrigger() {
    if (!this.label) return null;

    const buttonClasses = ['accordion-button', !this.expanded && 'collapsed'].filter(Boolean).join(' ');

    // Scegli l'icona in base al tipo e allo stato
    let iconContent = null;
    if (this.leftIcon) {
      const iconName = this.expanded ? 'it-minus' : 'it-plus';
      iconContent = html`<it-icon size="xs" name="${iconName}" class="accordion-icon-left" color="primary"></it-icon>`;
    } else {
      iconContent = html`<it-icon
        size="sm"
        name="it-expand"
        class="accordion-icon ${this.expanded ? 'expanded' : ''}"
        color="primary"
      ></it-icon>`;
    }

    const buttonContent = this.leftIcon ? html`${iconContent}${this.label}` : html`${this.label}${iconContent}`;

    const buttonElement = html`<button
      type="button"
      class="${buttonClasses}"
      aria-expanded="${this.expanded}"
      aria-controls="${this._contentId}"
      id="${this._triggerId}"
      @click=${this.handleTriggerAction}
    >
      ${buttonContent}
    </button>`;
    switch (this.as) {
      case 'h3':
        return html`<h3 class="accordion-header">${buttonElement}</h3>`;
      case 'h4':
        return html`<h4 class="accordion-header">${buttonElement}</h4>`;
      case 'h5':
        return html`<h5 class="accordion-header">${buttonElement}</h5>`;
      case 'h6':
        return html`<h6 class="accordion-header">${buttonElement}</h6>`;
      default:
        return html`<h2 class="accordion-header">${buttonElement}</h2>`;
    }
  }

  protected override updateBackgroundStyles() {
    // Aggiorna l'icona left se necessario
    if (this.leftIcon) {
      const iconElement = this.shadowRoot?.querySelector('.accordion-icon-left') as HTMLElement;
      if (iconElement) {
        const iconName = this.expanded ? 'it-minus' : 'it-plus';
        iconElement.setAttribute('name', iconName);

        if (this.backgroundActive && this.expanded) {
          iconElement.setAttribute('color', 'white');
        } else {
          iconElement.setAttribute('color', 'primary');
        }
      }
    }

    // Aggiorna l'icona normale (chevron)
    const normalIcon = this.shadowRoot?.querySelector('.accordion-icon') as HTMLElement;
    if (normalIcon) {
      if (this.expanded) {
        normalIcon.classList.add('expanded');
      } else {
        normalIcon.classList.remove('expanded');
      }

      if (this.backgroundActive && this.expanded) {
        normalIcon.setAttribute('color', 'white');
      } else {
        normalIcon.setAttribute('color', 'primary');
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-accordion-item': ItAccordionItem;
  }
}
