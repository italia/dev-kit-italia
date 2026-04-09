# <it-progress>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installazione

```bash
npm install @italia/progress
```

## Utilizzo

```html
<script type="module">
  import '@italia/progress';
</script>
```

## Donut

```html
<it-progress type="donut" value="75" it-aria-label="Caricamento"></it-progress>
```

### Proprietà principali donut

- `value` (number, 0-1)
- `color` (string)
- `trail-color` (string)
- `stroke-width` (number)
- `trail-width` (number)
- `easing` (string)
- `duration` (number)
- `animate` (boolean)
- `it-aria-label` (string)

## Progress bar

```html
<it-progress type="bar" value="50" it-aria-label="Caricamento"></it-progress>
```

### Varianti bar

```html
<it-progress type="bar" value="35" show-label></it-progress>
<it-progress type="bar" value="35" show-label>35%</it-progress>
<it-progress type="bar" indeterminate it-aria-label="In elaborazione..."></it-progress>
<it-progress type="bar" value="66" color="danger" it-aria-label="Caricamento errore"></it-progress>
```

## Spinner

```html
<it-progress type="spinner" active></it-progress>
<it-progress type="spinner" active double></it-progress>
<it-progress type="spinner" active size="sm"></it-progress>
<it-progress type="spinner" active size="lg"></it-progress>
<it-progress type="spinner" active size="xl"></it-progress>
```

## Accessibilità

- Il componente usa attributi ARIA appropriati (`role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`) in base al `type`
- Supporto a label accessibile per donut e progress bar
- Spinner con testo dedicato agli screen reader tramite slot o fallback interno

## Licenza

BSD-3-Clause © Presidenza del Consiglio dei Ministri
