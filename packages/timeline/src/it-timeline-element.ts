/* eslint-disable class-methods-use-this */
import { BaseComponent } from '@italia/globals';
import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js';
import {
  TIMELINE_ELEMENT_DARK_VARIANTS,
  TIMELINE_ELEMENT_VARIANTS,
  TIMELINE_HEADING_LEVELS,
  type TimelineElementVariant,
  type TimelineHeadingLevel,
} from './types.js';
import styles from './timeline-element.scss';

/** Mappa da nome API semantico → classe CSS BSI per il pin wrapper. */
const BSI_VARIANT_CLASS: Record<string, string> = {
  current: 'it-now',
  past: 'it-evidence',
};

/**
 * Singolo elemento della timeline classica di Bootstrap Italia.
 *
 * Usa **shadow DOM** con slot reali: l'utente mette il contenuto
 * direttamente come figli senza classi aggiuntive.
 *
 * @slot pin-icon - Icona del pin (es. `<it-icon>`). Se omessa viene mostrata un'icona segnaposto.
 * @slot - Contenuto dell'elemento (es. `<it-card>`).
 *
 * @attr {string} variant - Variante colore del pin: `''` (futuro), `current` (presente, azzurro), `past` (passato, blu scuro).
 * @attr {string} date - Etichetta testuale del periodo (es. `MAGGIO 2026`).
 * @attr {string} heading-level - Livello heading (`h2`–`h6`). Default: `h3`.
 *
 * @example
 * ```html
 * <it-timeline-element variant="past" date="MAGGIO 2026">
 *   <it-icon slot="pin-icon" name="it-file" aria-hidden="true"></it-icon>
 *   <it-card>
 *     <a slot="title" href="#">Titolo del contenuto</a>
 *     <span slot="text">Descrizione breve.</span>
 *   </it-card>
 * </it-timeline-element>
 * ```
 */
@customElement('it-timeline-element')
export class ItTimelineElement extends BaseComponent {
  static styles = styles;

  @property({ type: String })
  variant: TimelineElementVariant = '';

  @property({ type: String })
  date = '';

  @property({ type: String, attribute: 'heading-level' })
  headingLevel: TimelineHeadingLevel = 'h3';

  protected getHeadingLevel(): TimelineHeadingLevel {
    return TIMELINE_HEADING_LEVELS.includes(this.headingLevel) ? this.headingLevel : 'h3';
  }

  protected getVariant(): TimelineElementVariant {
    return TIMELINE_ELEMENT_VARIANTS.includes(this.variant) ? this.variant : '';
  }

  override render() {
    if (this.variant && !TIMELINE_ELEMENT_VARIANTS.includes(this.variant)) {
      this.logger.warn(
        `Invalid variant value, falling back to default. Expected one of: ${TIMELINE_ELEMENT_VARIANTS.join(', ')}`,
      );
    }
    if (this.headingLevel && !TIMELINE_HEADING_LEVELS.includes(this.headingLevel)) {
      this.logger.warn(
        `Invalid heading-level value, falling back to default. Expected one of: ${TIMELINE_HEADING_LEVELS.join(', ')}`,
      );
    }

    const headingTag = unsafeStatic(this.getHeadingLevel());
    const bsiVariantClass = BSI_VARIANT_CLASS[this.getVariant()] ?? undefined;
    const pinWrapperClasses = this.composeClass('it-pin-wrapper', bsiVariantClass);
    const variant = this.getVariant();
    // Decide whether the slotted icon needs white color (dark-background variants)
    const needsInverseIcon = (TIMELINE_ELEMENT_DARK_VARIANTS as ReadonlyArray<string>).includes(this.getVariant());

    return staticHtml`
      <div class="col-12">
        <div class="timeline-element">
        ${
          variant === 'current'
            ? html`<span class="it-now-label">Oggi</span>` // <-- SOSTITUISCI CON IL TUO METODO/CHIAVE i18n E.g. this.t('today') o msg('Oggi')
            : nothing
        }
          <${headingTag} class="${pinWrapperClasses}">
            <div class="pin-icon">
              <slot
                name="pin-icon"
                @slotchange=${(e: Event) => this._onPinIconSlotChange(e, needsInverseIcon)}
              >
              </slot>
            </div>
            ${this.date ? html`<div class="pin-text"><span>${this.date}</span></div>` : nothing}
          </${headingTag}>
          <slot></slot>
        </div>
      </div>
    `;
  }

  /**
   * When the pin-icon slot changes, auto-set `color="white"` on any `<it-icon>`
   * that doesn't already have an explicit color attribute.
   */
  private _onPinIconSlotChange(e: Event, needsInverse: boolean) {
    const slot = e.target as HTMLSlotElement;
    for (const node of slot.assignedElements()) {
      if (node.tagName.toLowerCase() === 'it-icon') {
        node.setAttribute('size', 'sm');
        if (!node.hasAttribute('color')) {
          if (needsInverse) node.setAttribute('color', 'white');
          else node.removeAttribute('color');
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-timeline-element': ItTimelineElement;
  }
}
