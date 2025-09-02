import { customElement, property } from 'lit/decorators.js';
import { ItCollapse } from './it-collapse.js';
import styles from './accordion.scss';

@customElement('it-accordion-item')
export class ItAccordionItem extends ItCollapse {
  // Eredita tutte le proprietà da ItCollapse
  // Aggiunge solo alias semantici per le proprietà accordion
  static styles = styles;

  @property()
  override label: string = '';

  @property()
  override as: string = 'h2';

  @property({ type: Boolean, attribute: 'default-open', reflect: true })
  override defaultOpen: boolean = false;

  // Metodi pubblici per compatibilità con it-accordion
  public setExpanded(expanded: boolean) {
    this.expanded = expanded;
  }

  public get isExpanded(): boolean {
    return this.expanded;
  }

  // Metodi per compatibilità con la vecchia API
  public setParentBackground(backgroundActive: boolean, backgroundHover: boolean) {
    this.backgroundActive = backgroundActive;
    this.backgroundHover = backgroundHover;
  }

  public setParentLeftIcon(leftIcon: boolean) {
    this.leftIcon = leftIcon;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-accordion-item': ItAccordionItem;
  }
}
