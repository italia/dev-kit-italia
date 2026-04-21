import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '@italia/globals';
import { StickyController, StickyOptions } from './sticky-controller.js';

@customElement('it-sticky')
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

  public _stickyController = new StickyController(this, this);

  protected override updated(): void {
    if (this.id === '') {
      this.id = this._id!;
    }
    if (this.positionType !== 'fixed' && this.positionType !== 'sticky') {
      // eslint-disable-next-line no-console
      console.warn("The supported values for the 'position-type' property are 'fixed' or 'sticky'.");
    }
  }

  createRenderRoot() {
    return this;
  }
}
