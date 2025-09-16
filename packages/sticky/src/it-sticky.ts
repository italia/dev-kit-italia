import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseComponent } from '@italia/globals';
import { StickyController } from './sticky-controller.js';

@customElement('it-sticky')
export class ItSticky extends BaseComponent {
  private stickyController = new StickyController(this);

  render() {
    return html`<div id="${this._id}"></div>`;
  }

  createRenderRoot() {
    return this;
  }
}
