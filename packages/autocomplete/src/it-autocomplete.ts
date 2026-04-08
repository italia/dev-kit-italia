import { FormControl } from '@italia/globals';
import { registerTranslation } from '@italia/i18n';
import { html, nothing, PropertyValues } from 'lit';
import { customElement, property, state, query, queryAssignedElements } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { AutocompleteOption, AutocompleteSource } from './types.js';
import it from './locales/it.js';
import en from './locales/en.js';
import styles from './autocomplete.scss';

registerTranslation(it);
registerTranslation(en);

/**
 * @summary Componente di autocompletamento conforme alle linee guida ARIA APG
 */
@customElement('it-autocomplete')
export class ItAutocomplete extends FormControl {
  static styles = styles;

  @query('.autocomplete-listbox')
  private listbox?: HTMLElement;

  @queryAssignedElements({ slot: 'label' })
  labelElements!: HTMLElement[];

  @state() private _options: AutocompleteOption[] = [];

  @state() public _filteredOptions: AutocompleteOption[] = [];

  @state() public _isOpen = false;

  @state() public _activeIndex = -1;

  @state() private _inputValue = '';

  @state() public _listboxHasVisualFocus = false;

  private _typingDebounceTimer?: ReturnType<typeof setTimeout>;

  @state() private _currentStatusContent = '';

  private _boundClickOutside?: (e: MouseEvent) => void;

  get label(): string {
    return this.labelElements.length > 0 ? this.labelElements[0].innerText.trim() : '';
  }

  @property({ type: Object, reflect: true })
  source: AutocompleteSource = [];

  @property({ type: String, reflect: true })
  placeholder = '';

  @property({ type: Boolean, reflect: true }) _showAssistiveHint = true;

  @property({ type: String, attribute: 'support-text', reflect: true })
  supportText = '';

  @property({ type: Number, attribute: 'min-length', reflect: true })
  minLength = 0;

  @property({
    type: Object,
    attribute: 'default-value',
    reflect: true,
    converter: {
      fromAttribute: (value: string | null) => {
        if (value === null) return undefined;
        try {
          // 1. Prova a trattarlo come JSON (Oggetto o stringa quotata '"roma"')
          const parsed = JSON.parse(value);
          // Sicurezza extra: se il parse ha successo ma esce un numero/bool, convertilo.
          if (typeof parsed === 'object' || typeof parsed === 'string') {
            return parsed;
          }
          return String(parsed);
        } catch (e) {
          // 2. Se esplode (es. value="roma" senza virgolette JSON), trattalo come stringa semplice
          return value;
        }
      },
      toAttribute: (value: AutocompleteOption | string) => {
        if (typeof value === 'object' && value !== null) {
          return JSON.stringify(value);
        }
        return String(value);
      },
    },
  })
  defaultValue: AutocompleteOption['value'] | AutocompleteOption = '';

  @property({ type: Boolean, attribute: 'label-hidden', reflect: true })
  labelHidden = false;

  public get invalid(): boolean {
    if (!this.formControlController.submittedOnce && !this.customValidation) {
      return false;
    }
    return this.validationMessage?.length > 0 || (!this.customValidation && !this.checkValidity());
  }

  override checkValidity(): boolean {
    if (!this.required) {
      return true;
    }
    if (!this.value) return false;

    // Se la source è statica, validiamo contro la lista
    if (Array.isArray(this.source) && this.source.length > 0) {
      return this._options.some((o) => o.value === this.value);
    }
    // Se la source è async, ci fidiamo che se c'è un value, è valido
    return true;
  }

  override reportValidity(): boolean {
    const isValid = this.checkValidity();
    this.handleValidationMessages();
    return isValid;
  }

  override get validity(): ValidityState {
    return { valid: this.checkValidity() } as ValidityState;
  }

  protected override handleValidationMessages() {
    if (!this.customValidation) {
      if (this.required && !this.value) {
        this.setCustomValidity(this.$t('validityRequired'));
      } else {
        this.setCustomValidity('');
      }
    }
  }

  override connectedCallback() {
    super.connectedCallback?.();
    this._handleReady();

    // Inizializzazione Default Value
    if (this.defaultValue) {
      if (typeof this.defaultValue === 'object' && this.defaultValue !== null) {
        // CASO OGGETTO: Fiducia cieca. Impostiamo Value e Label subito.
        this.value = this.defaultValue.value;
        this._inputValue = this.defaultValue.label;
      } else {
        // CASO STRINGA: Impostiamo il Value. La Label verrà risolta in willUpdate (se possibile).
        this.value = this.defaultValue;
      }
    }

    // Click outside handler per chiudere l'autocomplete
    this._boundClickOutside = this._handleClickOutside.bind(this);
    document.addEventListener('click', this._boundClickOutside);
  }

  override disconnectedCallback() {
    super.disconnectedCallback?.();
    if (this._boundClickOutside) {
      document.removeEventListener('click', this._boundClickOutside);
    }
  }

  private _handleClickOutside(e: MouseEvent) {
    if (!this._isOpen) return;
    const target = e.target as Node;
    if (!this.contains(target)) {
      this._isOpen = false;
      this._activeIndex = -1;
      this._listboxHasVisualFocus = false;
    }
  }

  /**
   * Logica di sincronizzazione dati: KISS Principle
   * 1. Se stringa -> Cerca nella source statica. Se non trova -> Reset.
   * 2. Se oggetto -> Fidati (già gestito in connectedCallback, _inputValue è pieno).
   */
  protected override willUpdate(changedProps: PropertyValues<this>): void {
    super.willUpdate(changedProps);

    // 1. Sincronizza options se la source è statica
    if (changedProps.has('source') && Array.isArray(this.source)) {
      this._options = this.source;
    }

    // 2. Riconciliazione Label (Solo se manca)
    // Se abbiamo un value ma _inputValue è vuoto, significa che siamo nel caso "Stringa"
    if (this.value && !this._inputValue) {
      // Possiamo risolvere la label SOLO se abbiamo una source statica caricata
      if (Array.isArray(this.source) && this.source.length > 0) {
        const match = this._options.find((o) => o.value === this.value);

        if (match) {
          // Trovato! Impostiamo la label corretta
          this._inputValue = match.label;
        } else {
          // Non trovato in una lista statica -> Il valore è invalido -> Reset
          this.value = '';
        }
      }
      // Se la source è Async (funzione), non possiamo fare nulla.
      // L'input resterà vuoto visivamente, ma manteniamo il value interno (fiducia).
    }
  }

  override updated(changedProps: Map<PropertyKey, unknown>) {
    // Validazione standard FormControl
    if (changedProps.has('value')) {
      if (!this.customValidation && this.formControlController.submittedOnce) {
        this.handleValidationMessages();
      }
    }
  }

  protected _handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this._inputValue = input.value;

    this._showAssistiveHint = false;
    this._listboxHasVisualFocus = false;

    this.dispatchEvent(
      new CustomEvent('it-autocomplete-search', { bubbles: true, composed: true, detail: { value: input.value } }),
    );
    if (this._inputValue.length === 0) {
      this.value = '';
    }
    if (this._inputValue.length < this.minLength) {
      this._isOpen = false;
      this._filteredOptions = [];
      this._announceStatus();
      return;
    }

    if (Array.isArray(this.source)) {
      this._filterOptions(this._inputValue);
    } else if (typeof this.source === 'function') {
      this.source(this._inputValue, (results) => {
        this._filteredOptions = results;
        this._isOpen = results.length > 0;
        this._activeIndex = -1;
      });
    }

    if (this._typingDebounceTimer) clearTimeout(this._typingDebounceTimer);
    this._typingDebounceTimer = setTimeout(() => {
      this._announceStatus(true);
    }, 500);
  }

  private _filterOptions(_query: string) {
    const lower = _query.toLowerCase();
    this._filteredOptions = this._options.filter((o) => o.label.toLowerCase().includes(lower));
    this._isOpen = this._filteredOptions.length > 0;
    this._activeIndex = -1;
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (!this._isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      if (this._inputValue.length >= this.minLength) {
        const inputEvent = new Event('input', { bubbles: true, composed: true });
        Object.defineProperty(inputEvent, 'target', { value: this.inputElement, enumerable: true });
        this._handleInput(inputEvent);

        this._listboxHasVisualFocus = true;
        if (this._isOpen) this._activeIndex = e.key === 'ArrowDown' ? 0 : this._filteredOptions.length - 1;
        this._scrollToOption(this._activeIndex);
      }
      e.preventDefault();
      return;
    }

    if (!this._isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!this._listboxHasVisualFocus) {
          this._listboxHasVisualFocus = true;
          this._activeIndex = 0;
        } else this._activeIndex = (this._activeIndex + 1) % this._filteredOptions.length;
        this._scrollToOption(this._activeIndex);
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!this._listboxHasVisualFocus) {
          this._listboxHasVisualFocus = true;
          this._activeIndex = this._filteredOptions.length - 1;
        } else this._activeIndex = this._activeIndex === 0 ? this._filteredOptions.length - 1 : this._activeIndex - 1;
        this._scrollToOption(this._activeIndex);
        break;
      case 'Enter':
        e.preventDefault();
        if (this._listboxHasVisualFocus && this._activeIndex >= 0)
          this._selectOption(this._filteredOptions[this._activeIndex].value);
        break;
      case 'Escape':
      case 'Tab':
        this._isOpen = false;
        this._activeIndex = -1;
        this._listboxHasVisualFocus = false;
        break;
      default:
        break;
    }
  }

  private _scrollToOption(index: number) {
    if (!this.listbox) return;
    const option = this.listbox.children[index] as HTMLElement;
    option?.scrollIntoView({ block: 'nearest' });
  }

  private _selectOption(optionValue: string) {
    const selectedOption = this._filteredOptions.find((opt) => opt.value === optionValue);
    const label = selectedOption ? selectedOption.label : optionValue;

    this._inputValue = label;
    this.value = optionValue;
    this._isOpen = false;
    this._activeIndex = -1;
    this._listboxHasVisualFocus = false;
    this.inputElement.focus();

    this.dispatchEvent(new CustomEvent('it-change', { bubbles: true, composed: true, detail: { value: optionValue } }));
  }

  private _handleOptionClick(option: string) {
    this._selectOption(option);
  }

  private _handleOptionHover(index: number) {
    this._activeIndex = index;
  }

  private _handleOptionKeyDown(e: KeyboardEvent, option: string) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this._selectOption(option);
    }
  }

  protected override _handleReady() {
    requestAnimationFrame(() => {
      this.dispatchEvent(new CustomEvent('it-autocomplete-ready', { bubbles: true, detail: { el: this } }));
    });
  }

  private _announceStatus(force = false) {
    if (!this._isOpen && !force) return;
    const count = this._filteredOptions.length;
    const queryLength = this._inputValue.length;

    let content = '';

    if (queryLength > 0 && queryLength < this.minLength) {
      content = this.$t('autocomplete_statusQueryTooShort').replace('{minLength}', this.minLength.toString());
    } else if (count === 0 && queryLength >= this.minLength) {
      content = this.$t('autocomplete_statusNoResults');
    } else if (count > 0) {
      content =
        count === 1
          ? this.$t('autocomplete_statusOneResult')
          : this.$t('autocomplete_statusManyResults').replace('{count}', count.toString());
    }
    if (content !== this._currentStatusContent) {
      this._currentStatusContent = content;
    }
  }

  private _getStatusAnnouncement(): string {
    return this._currentStatusContent;
  }

  render() {
    const showValidation = this.formControlController.submittedOnce || this.customValidation;
    const inputId = this.id || this.generateId('it-autocomplete');
    const labelId = `${inputId}-label`;
    const listboxId = `${inputId}-listbox`;
    const assistiveHintId = `${inputId}-assistiveHint`;
    const statusId = `${inputId}-status-a`;
    const status = this._getStatusAnnouncement();
    return html`
      <div class="form-group autocomplete-wrapper">
        <label id="${labelId}" for="${inputId}" class="${this.composeClass({ 'visually-hidden': this.labelHidden })}">
          <slot name="label"></slot>
        </label>

        <div class="autocomplete-input-wrapper">
          <input
            id="${inputId}"
            part="autocomplete-input"
            type="text"
            class="${this.composeClass('form-control it-form__control', {
              'is-invalid': showValidation && this.invalid,
              'just-validate-success-field': showValidation && !this.invalid,
            })}"
            .value="${live(this._inputValue)}"
            placeholder="${this.placeholder}"
            ?disabled="${this.disabled}"
            ?required="${this.required}"
            minlength="${this.minLength}"
            ?formNoValidate="${true}"
            aria-invalid=${ifDefined(this.invalid ? 'true' : undefined)}
            role="combobox"
            aria-autocomplete="list"
            aria-controls="${listboxId}"
            aria-expanded="${this._isOpen ? 'true' : 'false'}"
            aria-haspopup="listbox"
            aria-labelledby="${labelId}"
            aria-describedby="${[
              this.supportText ? `${inputId}-support` : '',
              this._showAssistiveHint ? assistiveHintId : '',
            ]
              .filter(Boolean)
              .join(' ') || nothing}"
            aria-activedescendant=${ifDefined(
              this._activeIndex >= 0 ? `${inputId}-option-${this._activeIndex}` : undefined,
            )}
            @click=${this._handleClick}
            @input="${this._handleInput}"
            @keydown="${this._handleKeyDown}"
            @blur="${this._handleBlur}"
            @focus="${this._handleFocus}"
          />

          ${this._isOpen && this._filteredOptions.length > 0
            ? html`<ul
                id="${listboxId}"
                class="autocomplete-listbox"
                part="autocomplete-list"
                role="listbox"
                aria-label="${this.$t('autocomplete_listboxLabel')}"
              >
                ${this._filteredOptions.map((option, index) => {
                  const position = `${index + 1} ${this.$t('autocomplete_of')} ${this._filteredOptions.length}`;
                  const ariaLabel =
                    index === this._activeIndex
                      ? `${option.label}, ${position}, ${this.$t('autocomplete_option_selected')}`
                      : `${option.label}, ${position}`;

                  return html`<li
                    id="${inputId}-option-${index}"
                    role="option"
                    part="autocomplete-option"
                    tabindex="-1"
                    aria-selected="${index === this._activeIndex ? 'true' : 'false'}"
                    aria-posinset="${index + 1}"
                    aria-setsize="${this._filteredOptions.length}"
                    aria-label="${ariaLabel}"
                    class="autocomplete-option ${classMap({ active: index === this._activeIndex })}"
                    @click="${() => this._handleOptionClick(option.value)}"
                    @keydown="${(e: KeyboardEvent) => this._handleOptionKeyDown(e, option.value)}"
                    @mouseenter="${() => this._handleOptionHover(index)}"
                  >
                    <span>${option.label}</span>
                    ${index === this._activeIndex
                      ? html`<span class="visually-hidden">, ${this.$t('autocomplete_option_selected')}</span>`
                      : nothing}
                  </li>`;
                })}
              </ul>`
            : nothing}
        </div>

        ${this._showAssistiveHint
          ? html`<div id="${assistiveHintId}" class="visually-hidden">${this.$t('autocomplete_assistiveHint')}</div>`
          : nothing}

        <div id="${statusId}" role="status" aria-live="polite" aria-atomic="true" class="visually-hidden">
          ${status}
        </div>

        ${this.supportText
          ? html`<small id="${inputId}-support" class="form-text text-muted"
              ><slot name="support-text">${this.supportText}</slot></small
            >`
          : nothing}
        ${this.invalid && this.validationMessage
          ? html`<div class="invalid-feedback" role="alert">${this.validationMessage}</div>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-autocomplete': ItAutocomplete;
  }
}
