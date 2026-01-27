# \<it-rating>

[![npm version](https://img.shields.io/npm/v/@italia/rating.svg)](https://www.npmjs.com/package/@italia/rating)

Web component per la valutazione con stelle (rating) del Design System Italia basato su Bootstrap Italia.

## Installazione

```bash
npm install @italia/rating
```

## Utilizzo Base

```html
<script type="module">
  import '@italia/rating';
</script>

<it-rating name="rating" value="3">
  <span slot="legend">Valuta questo servizio</span>
</it-rating>
```

## Con Label

```html
<it-rating name="rating" value="4" label="Valutazione">
</it-rating>
```

## Sola Lettura

```html
<it-rating name="rating" value="4" read-only>
</it-rating>
```

## Disabilitato

```html
<it-rating name="rating" value="3" disabled>
  <span slot="legend">Valutazione</span>
</it-rating>
```

## Obbligatorio

```html
<form>
  <it-rating name="rating" required>
    <span slot="legend">Valuta questo contenuto (obbligatorio)</span>
  </it-rating>
  <button type="submit">Invia</button>
</form>
```

## Proprietà

| Proprietà | Tipo | Default | Descrizione |
|-----------|------|---------|-------------|
| `name` | `string` | `''` | Nome del campo per l'invio del form |
| `value` | `number` | `0` | Valore corrente della valutazione (1-5) |
| `label` | `string` | `''` | Etichetta del rating |
| `disabled` | `boolean` | `false` | Se il rating è disabilitato |
| `read-only` | `boolean` | `false` | Se il rating è in sola lettura (non interattivo) |
| `required` | `boolean` | `false` | Se la selezione è obbligatoria |
| `max-stars` | `number` | `5` | Numero massimo di stelle |

## Eventi

### `change`

Emesso quando cambia il valore della valutazione.

```javascript
const rating = document.querySelector('it-rating');
rating.addEventListener('change', (event) => {
  console.log('Nuovo valore:', event.detail.value);
});
```

## Slot

### `legend`

Contenuto della legend del fieldset (label del rating).

```html
<it-rating name="rating">
  <span slot="legend">Valuta questo servizio</span>
</it-rating>
```

## Accessibilità

Il componente implementa le best practice di accessibilità:

- Utilizza `role="radiogroup"` per il gruppo di stelle
- Ogni stella ha `role="radio"` (quando interattivo) o `role="img"` (quando read-only)
- Supporto completo per la navigazione da tastiera:
  - `Tab`: entra/esce dal rating
  - `Frecce`: naviga tra le stelle
  - `Home`: vai alla prima stella
  - `End`: vai all'ultima stella
  - `Spazio/Enter`: seleziona la stella corrente
- Etichette aria-label appropriate per ogni stella
- Supporto per screen reader con testo nascosto visualmente

## Integrazione con Form

Il componente si integra nativamente con i form HTML:

```html
<form id="reviewForm">
  <it-rating name="rating" value="3" required>
    <span slot="legend">Valutazione</span>
  </it-rating>
  
  <button type="submit">Invia recensione</button>
</form>

<script>
  document.getElementById('reviewForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Rating:', formData.get('rating'));
  });
</script>
```

## Validazione

Il componente supporta la validazione HTML5:

```javascript
const rating = document.querySelector('it-rating');

// Verifica validità
if (rating.checkValidity()) {
  console.log('Rating valido');
}

// Mostra errori di validazione
rating.reportValidity();
```

## Personalizzazione CSS

```css
it-rating {
  --rating-star-size: 1.5rem;
  --rating-star-color: #ffc107;
  --rating-star-empty-color: #e0e0e0;
}
```

## Browser Support

- Chrome/Edge (ultimo + 1 versione precedente)
- Firefox (ultimo + 1 versione precedente)
- Safari (ultimo + 1 versione precedente)

## Licenza

BSD-3-Clause © Presidenza del Consiglio dei Ministri
