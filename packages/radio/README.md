# \<it-radio> & \<it-radio-group>

Componenti web per radio button conformi al design system italiano.

## Installation

```bash
npm i @italia/radio
```

## Usage

### Utilizzo Base con it-radio-group (raccomandato)

```html
<script type="module">
  import '@italia/radio';
</script>

<it-radio-group name="gruppo">
  <span slot="legend">Seleziona un'opzione</span>
  <it-radio value="opzione1" checked>
    <span slot="label">Opzione 1</span>
  </it-radio>
  <it-radio value="opzione2">
    <span slot="label">Opzione 2</span>
  </it-radio>
  <it-radio value="opzione3">
    <span slot="label">Opzione 3</span>
  </it-radio>
</it-radio-group>
```

### Con testo di supporto

```html
<it-radio-group name="gruppo">
  <span slot="legend">Gruppo di radio</span>
  <it-radio value="opt1" support-text="Testo di aiuto per questa opzione">
    <span slot="label">Radio con supporto</span>
  </it-radio>
  <it-radio value="opt2">
    <span slot="label">Radio semplice</span>
  </it-radio>
</it-radio-group>
```

### Radio inline

```html
<it-radio-group name="gruppo-inline">
  <span slot="legend">Gruppo inline</span>
  <it-radio value="opt1" inline>
    <span slot="label">Opzione 1</span>
  </it-radio>
  <it-radio value="opt2" inline>
    <span slot="label">Opzione 2</span>
  </it-radio>
  <it-radio value="opt3" inline>
    <span slot="label">Opzione 3</span>
  </it-radio>
</it-radio-group>
```

### Radio raggruppati visivamente

```html
<it-radio-group name="gruppo">
  <span slot="legend">Gruppo visivamente evidenziato</span>
  <it-radio value="opt1" group>
    <span slot="label">Opzione 1</span>
  </it-radio>
  <it-radio value="opt2" group>
    <span slot="label">Opzione 2</span>
  </it-radio>
</it-radio-group>
```

### Con validazione (required)

```html
<form>
  <it-radio-group name="scelta" required>
    <span slot="legend">Seleziona un'opzione *</span>
    <it-radio value="si">
      <span slot="label">Sì, accetto</span>
    </it-radio>
    <it-radio value="no">
      <span slot="label">No, non accetto</span>
    </it-radio>
  </it-radio-group>
  <button type="submit">Invia</button>
</form>
```

### Stato disabilitato

```html
<it-radio-group name="gruppo" disabled>
  <span slot="legend">Gruppo disabilitato</span>
  <it-radio value="opt1" checked>
    <span slot="label">Opzione 1</span>
  </it-radio>
  <it-radio value="opt2">
    <span slot="label">Opzione 2</span>
  </it-radio>
</it-radio-group>
```

## API

### it-radio-group

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | `string` | `''` | Nome del gruppo (obbligatorio per form) |
| `value` | `string` | `''` | Valore correntemente selezionato |
| `disabled` | `boolean` | `false` | Disabilita tutti i radio del gruppo |
| `required` | `boolean` | `false` | Rende obbligatoria la selezione |

#### Methods

| Method | Description |
|--------|-------------|
| `checkValidity()` | Verifica se il gruppo è valido |
| `reportValidity()` | Mostra messaggio di validazione nativo |

#### Events

| Event | Description |
|-------|-------------|
| `change` | Emesso quando cambia la selezione nel gruppo |

#### Slots

| Slot | Description |
|------|-------------|
| `legend` | Contenuto della legenda del gruppo |
| (default) | Contiene gli elementi `<it-radio>` |

### it-radio

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | `''` | Valore del radio |
| `checked` | `boolean` | `false` | Se il radio è selezionato |
| `disabled` | `boolean` | `false` | Se il radio è disabilitato |
| `inline` | `boolean` | `false` | Layout inline |
| `group` | `boolean` | `false` | Raggruppamento visivo |
| `supportText` | `string` | `''` | Testo di supporto sotto la label |

#### Slots

| Slot | Description |
|------|-------------|
| `label` (default) | Contenuto della label del radio |

## Keyboard Navigation

Il componente supporta la navigazione da tastiera secondo gli standard ARIA:

- **Tab/Shift+Tab**: Entra/esce dal gruppo di radio
- **Arrow Up/Down**: Naviga tra i radio e seleziona
- **Arrow Left/Right**: Naviga tra i radio e seleziona
- **Space**: Seleziona il radio corrente

## Accessibility

- Usa il pattern `role="radiogroup"` e `role="radio"` ARIA
- Supporta il roving tabindex per navigazione ottimale
- I radio disabilitati sono esclusi dalla navigazione
- Integrazione completa con form HTML5

## Esempi Framework

Per esempi completi con React, Vue, Svelte, Angular e Vanilla JS, consulta la cartella `examples/` del repository.

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
