import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './pagination-item.scss';

@customElement('it-pagination-item')
export class ItPaginationItem extends BaseComponent {
  static styles = styles;

  static shadowRootOptions = { ...BaseComponent.shadowRootOptions, delegatesFocus: true };

  @property({ type: String, reflect: true })
  page = '';

  @property({ type: Boolean, reflect: true })
  current = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);

    // When current or disabled state changes, update the slotted elements
    if (changedProperties.has('current') || changedProperties.has('disabled')) {
      this.updateSlottedElements();
    }
  }

  private updateSlottedElements() {
    const slot = this.shadowRoot?.querySelector('slot') as HTMLSlotElement;
    if (!slot) return;

    const assignedElements = slot.assignedElements();
    assignedElements.forEach((element) => {
      // Gestione accessibilità per l'elemento interno (es. <a> o <button>)
      if (this.current) {
        element.setAttribute('aria-current', 'page');
      } else {
        element.removeAttribute('aria-current');
      }

      if (this.disabled) {
        element.setAttribute('aria-disabled', 'true');
        element.setAttribute('tabindex', '-1');
      } else {
        element.removeAttribute('aria-disabled');
        element.removeAttribute('tabindex');
      }
      element.classList.add('page-link');
      element.removeEventListener('click', this.handleClick);
      element.addEventListener('click', this.handleClick.bind(this));
    });
  }

  private handleSlotChange() {
    // Initial setup when slot content changes
    this.updateSlottedElements();
  }

  private handleClick(e: any) {
    // Se disabilitato o già attivo, ignoriamo il click
    if (this.disabled || this.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Emettiamo un evento "interno" che il padre (ItPagination) ascolterà.
    // Usiamo bubbles: true per risalire il DOM fino al padre.
    this.dispatchEvent(
      new CustomEvent('it-item-click', {
        detail: { page: this.page },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override render() {
    // La classe 'page-item' va sul contenitore LI per Bootstrap
    const liClasses = this.composeClass('page-item', this.current && 'active', this.disabled && 'disabled');

    return html`
      <li class="${liClasses}">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-pagination-item': ItPaginationItem;
  }
}
