import { customElement, property } from 'lit/decorators.js';
import { html, nothing } from 'lit';
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js';
import { ItCollapse } from './it-collapse.js';
import styles from './accordion.scss';

@customElement('it-accordion-item')
export class ItAccordionItem extends ItCollapse {
  // Eredita tutte le proprietà da ItCollapse
  // Aggiunge solo alias semantici per le proprietà accordion
  static styles = styles;

  @property({ type: String })
  override as: string = 'h2';

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
    const buttonClasses = this.composeClass('accordion-button', !this.expanded && 'collapsed');

    // Scegli l'icona in base al tipo e allo stato
    let iconContent = null;
    if (this.leftIcon) {
      const iconName = this.expanded ? 'it-minus' : 'it-plus';
      iconContent = html`<it-icon size="xs" name="${iconName}" class="accordion-icon-left" color="primary"></it-icon>`;
    } else {
      iconContent = html`<it-icon
        size="sm"
        name="it-collapse"
        class="accordion-icon ${this.expanded ? 'expanded' : ''}"
        color="primary"
      ></it-icon>`;
    }

    const buttonElement = html`<button
      type="button"
      part="trigger"
      class="${buttonClasses}"
      aria-expanded="${this.expanded}"
      aria-controls="${this._contentId}"
      id="${this._triggerId}"
      @click=${this.handleTriggerAction}
    >
      ${this.leftIcon ? iconContent : nothing}
      <slot name="heading"></slot>
      ${!this.leftIcon ? iconContent : nothing}
    </button>`;

    // https://lit.dev/articles/lit-cheat-sheet/#bind-any-value-to-html-tag-name-or-attribute-name
    const tagName = this.isValidTag(this.as) ? this.as : 'h2';
    return html`
      ${staticHtml`
        <${unsafeStatic(tagName)} class="accordion-header">
          ${buttonElement}
        </${unsafeStatic(tagName)}>
      `}
    `;
  }

  protected override updateBackgroundStyles() {
    // Aggiorna l'icona sinistra se presente
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

    // Aggiorna l'icona predefinita a destra (chevron)
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
