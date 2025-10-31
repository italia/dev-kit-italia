import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseComponent, setAttributes } from '@italia/globals';
import styles from './skiplinks.scss';

@customElement('it-skiplinks')
export class ItSkiplinks extends BaseComponent {
  static styles = styles;

  protected links = [];

  private _onSlotChange(e: any) {
    const slot = e.target;
    const assigned = slot?.assignedElements({ flatten: true });

    this.links = assigned
      .filter((el: HTMLElement) => el.tagName === 'A')
      .map((a: HTMLElement) => ({
        href: a.getAttribute('href'),
        text: a.textContent?.trim(),
      }));

    this.requestUpdate(); // aggiorna la UI
  }

  render() {
    return html`
      <slot @slotchange=${this._onSlotChange}></slot>
      ${this.links.length > 2
        ? html`
            <nav class="skiplinks" role="navigation" ${setAttributes(this._ariaAttributes)}>
              <ul part="skiplinks-list">
                ${this.links.map(
                  (link: any) => html`
                    <li class="visually-hidden-focusable">
                      <a href=${link.href}>${link.text}</a>
                    </li>
                  `,
                )}
              </ul>
            </nav>
          `
        : html`<div class="skiplinks">
            ${this.links.map(
              (link: any) => html` <a href=${link.href} class="visually-hidden-focusable">${link.text}</a> `,
            )}
          </div>`}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-skiplinks': ItSkiplinks;
  }
}
