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
 *   <it-stepper-step label="Primo contenuto" icon="it-calendar">
 *     <p>Contenuto del primo step</p>
 *   </it-stepper-step>
 *   <it-stepper-step label="Secondo contenuto">
 *     <p>Contenuto del secondo step</p>
 *   </it-stepper-step>
 * </it-stepper>
 * ```
 *
 * @slot - Contenuto del passo, mostrato nell'area `steppers-content` quando il passo è attivo.
 */
@customElement('it-stepper-step')
export class ItStepperStep extends BaseComponent {
  static styles = styles;

  /** Etichetta testuale del passo, mostrata nell'intestazione dello stepper. */
  @property({ type: String, reflect: true })
  label = '';

  /**
   * Nome dell'icona BSI da mostrare nell'intestazione del passo (variante `icons`).
   * Esempio: `'it-calendar'`, `'it-lock'`, `'it-settings'`.
   */
  @property({ type: String, reflect: true })
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
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-stepper-step': ItStepperStep;
  }
}
