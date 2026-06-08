import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '@italia/globals';
import styles from './it-stepper-step.scss';

/**
 * `it-stepper-step` rappresenta un singolo passo all'interno di un componente `it-stepper`.
 *
 * Gestisce sia i metadati del passo (etichetta, icona, stato) sia il contenuto mostrato
 * nell'area del contenuto dello stepper quando il passo è attivo.
 *
 * ## Struttura attesa
 *
 * ```html
 * <it-stepper>
 *   <it-stepper-step icon="it-calendar">
 *     <span slot="label">Primo contenuto</span>
 *     <p>Contenuto del primo step</p>
 *   </it-stepper-step>
 *   <it-stepper-step>
 *     <span slot="label">Secondo contenuto</span>
 *     <p>Contenuto del secondo step</p>
 *   </it-stepper-step>
 * </it-stepper>
 * ```
 *
 * @slot label - Etichetta del passo, mostrata nell'intestazione dello stepper dall'`it-stepper` padre.
 * @slot - Contenuto del passo, mostrato nell'area `steppers-content` quando il passo è attivo.
 */
@customElement('it-stepper-step')
export class ItStepperStep extends BaseComponent {
  static styles = styles;

  /**
   * Nome dell'icona BSI da mostrare nell'intestazione del passo (variante `icons`).
   * Esempio: `'it-calendar'`, `'it-lock'`, `'it-settings'`.
   */
  @property({ type: String })
  icon = '';

  /**
   * Indica se il passo è attualmente attivo (contenuto visibile).
   * Gestito automaticamente dall'`it-stepper` padre.
   */
  @property({ type: Boolean, reflect: true })
  active = false;

  /**
   * Indica se il passo è stato confermato (completato).
   * Gestito automaticamente dall'`it-stepper` padre.
   */
  @property({ type: Boolean, reflect: true })
  confirmed = false;

  render() {
    return html`<slot name="label"></slot><slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-stepper-step': ItStepperStep;
  }
}
