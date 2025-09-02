import { BaseComponent } from '@italia/globals';
import { html, PropertyValues, nothing, svg } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { getIcon, type AvailableIcons } from './icon-registry.js';
import { type Colors, type Sizes, type Alignments } from './types.js';
import styles from './icon.scss';

@customElement('it-icon')
export class ItIcon extends BaseComponent {
  static styles = styles;

  @property({ type: String, reflect: true }) size?: Sizes;

  @property({ type: String }) name?: AvailableIcons;

  @property({ type: String, reflect: true }) color?: Colors;

  // @property({ type: String }) background?: Colors;

  @property({ type: String, reflect: true }) align?: Alignments = 'middle';

  @property({ type: String, reflect: true }) label = '';

  @property({ type: Boolean, reflect: true }) padded = false;

  @property({ type: String, reflect: true }) src?: string;

  @state() private svgElement?: HTMLElement;

  @query('slot')
  private slotEl!: HTMLSlotElement;

  private titleId?: string;

  override async updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('name') && this.name) {
      const loader = getIcon(this.name);
      if (loader) {
        const raw = (await loader()).default;
        this.parseAndStoreSvg(raw);
      }
    }

    if (changedProps.has('src') && this.src) {
      await this.loadSvgFromUrl(this.src);
    }

    if (changedProps.has('label')) {
      this.handleTitleId();
    }

    if (
      changedProps.has('label') ||
      changedProps.has('size') ||
      changedProps.has('color') ||
      // changedProps.has('background') ||
      changedProps.has('padded') ||
      changedProps.has('role') ||
      changedProps.has('align')
    ) {
      this.updateSvgAttributes();
    }
  }

  private handleTitleId() {
    if (this.label) {
      if (!this.titleId) {
        this.titleId = `icon-label-${crypto.randomUUID()}`;
      }
    } else {
      this.titleId = undefined;
    }
  }

  private async loadSvgFromUrl(url: string) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to load SVG from ${url} (status: ${res.status})`);

      const raw = await res.text();
      this.parseAndStoreSvg(raw);
    } catch (e) {
      this.svgElement = undefined;
      this.announceSvgLoadError();
    }
  }

  private announceSvgLoadError(): void {
    this.dispatchEvent(
      new Event('error', {
        bubbles: false,
        composed: false,
        cancelable: false,
      }),
    );
  }

  private parseAndStoreSvg(raw: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(raw, 'image/svg+xml');
    const _svg = doc.documentElement;
    this.svgElement = _svg;
    this.updateSvgAttributes();
  }

  private applySvgAttributes(svgEl: HTMLElement) {
    svgEl.removeAttribute('width');
    svgEl.removeAttribute('height');

    const classList = this.updateClasses();

    svgEl.setAttribute('class', classList);
    svgEl.setAttribute('part', 'icon');

    // Accessibility logic:
    // - If a `label` is provided:
    //     - The icon is accessible to assistive technologies.
    //     - Remove aria-hidden attribute if it exists
    //     - Sets `role="img"` to indicate the SVG is an image.
    //     - Adds a <title> element with the label text inside the SVG.
    //     - Sets `aria-labelledby` to reference the <title> for screen readers.
    // - If no `label` is provided:
    //     - The icon is treated as decorative and ignored by assistive technologies.
    //     - Sets `aria-hidden="true".
    //     - Sets `role="presentation"` to indicate the SVG is purely decorative.
    //     - Removes any <title> and `aria-labelledby` attributes from the SVG.
    if (this.label) {
      svgEl.removeAttribute('aria-hidden');
      svgEl.setAttribute('role', 'img');

      // Remove previous title/aria-labelledby
      svgEl.removeAttribute('aria-labelledby');
      svgEl.querySelectorAll('title').forEach((t) => t.remove());

      // Add title and aria-labelledby for screen readers
      if (this.titleId) {
        const titleEl = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        titleEl.id = this.titleId;
        titleEl.textContent = this.label;
        svgEl.prepend(titleEl);
        svgEl.setAttribute('aria-labelledby', this.titleId);
      }
    } else {
      svgEl.setAttribute('aria-hidden', 'true');
      svgEl.setAttribute('role', 'presentation');
      svgEl.removeAttribute('aria-labelledby');
      svgEl.querySelectorAll('title').forEach((t) => t.remove());
    }
  }

  private updateSvgAttributes() {
    if (!this.svgElement) return;

    this.applySvgAttributes(this.svgElement);
  }

  private updateClasses() {
    return this.composeClass(
      'icon',
      this.size ? `icon-${this.size}` : '',
      this.color ? `icon-${this.color}` : '',
      // this.background ? `bg-${this.background}` : '',
      this.align ? `align-${this.align}` : '',
      this.padded ? `icon-padded` : '',
    );
  }

  private handleSlotChange() {
    const nodes = this.slotEl.assignedNodes({ flatten: true });
    const _svg = nodes.find(
      (node): node is HTMLElement =>
        node.nodeType === Node.ELEMENT_NODE && (node as Element).tagName.toLowerCase() === 'svg',
    );

    if (_svg) {
      this.applySvgAttributes(_svg);
    }
  }

  render() {
    return html`
      <slot @slotchange=${this.handleSlotChange}>${this.svgElement ? svg`${this.svgElement}` : nothing}</slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-icon': ItIcon;
  }
}
