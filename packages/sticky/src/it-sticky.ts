import { property } from 'lit/decorators.js';
import { BaseComponent } from '@italia/globals';
import { StickyController, StickyOptions } from './sticky-controller.js';

export class ItSticky extends BaseComponent {
  @property({ reflect: true, attribute: 'padding-top' }) paddingTop?: StickyOptions['paddingTop'] = 0;

  @property({ reflect: true, attribute: 'sticky-class-name' }) stickyClassName?: StickyOptions['stickyClassName'];

  @property({ reflect: true, attribute: 'position-type' }) positionType?: StickyOptions['positionType'] = 'sticky';

  @property({ reflect: true, type: Boolean }) stackable?: StickyOptions['stackable'] = false;

  /**
   * Extra pixels to scroll past the element's natural position before sticky activates.
   * Useful when you want sticky to kick in only after a preceding element (e.g. a header) has scrolled away.
   */
  @property({ reflect: true, type: Number, attribute: 'trigger-offset' })
  triggerOffset?: StickyOptions['triggerOffset'] = 0;

  /**
   * CSS selector of an element whose height is used as the trigger offset.
   * When provided, takes precedence over `trigger-offset`.
   */
  @property({ reflect: true, attribute: 'trigger-selector' }) triggerSelector?: StickyOptions['triggerSelector'];

  /** Which viewport edge to stick to. Use `'bottom'` together with `position-type="fixed"` for a persistent bottom bar. */
  @property({ reflect: true }) position?: 'top' | 'bottom' = 'top';

  public _stickyController: StickyController = new StickyController(this, this);

  protected override updated(): void {
    if (this.id === '') {
      this.id = this._id!;
    }
    if (this.positionType !== 'fixed' && this.positionType !== 'sticky') {
      // eslint-disable-next-line no-console
      console.warn("The supported values for the 'position-type' property are 'fixed' or 'sticky'.");
    }
    if (this.position !== 'top' && this.position !== 'bottom') {
      // eslint-disable-next-line no-console
      console.warn("The supported values for the 'position' property are 'top' or 'bottom'.");
    }
  }

  createRenderRoot() {
    return this;
  }
}

if (!customElements.get('it-sticky')) {
  customElements.define('it-sticky', ItSticky);
}

declare global {
  interface HTMLElementTagNameMap {
    'it-sticky': ItSticky;
  }
}
