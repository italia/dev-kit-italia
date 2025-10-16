# Radio Button Examples

Esempi di utilizzo del componente `<it-radio>` e `<it-radio-group>` in diversi framework.

## Vanilla JavaScript

File: `src/radio-examples.html`

Apri il file HTML direttamente nel browser o con un server locale:

```bash
cd examples/vanilla-app
npm install
npm run dev
```

Visita `http://localhost:5173/src/radio-examples.html`

## React

File: `src/RadioExamples.jsx`

Importa il componente nell'app:

```jsx
import RadioExamples from './RadioExamples';

function App() {
  return <RadioExamples />;
}
```

Avvia l'app:

```bash
cd examples/react-app
npm install
npm run dev
```

## Vue

File: `src/RadioExamples.vue`

Importa il componente nell'app:

```vue
<script setup>
import RadioExamples from './RadioExamples.vue';
</script>

<template>
  <RadioExamples />
</template>
```

Avvia l'app:

```bash
cd examples/vue-app
npm install
npm run dev
```

## Svelte

File: `src/RadioExamples.svelte`

Importa il componente nell'app:

```svelte
<script>
  import RadioExamples from './RadioExamples.svelte';
</script>

<RadioExamples />
```

Avvia l'app:

```bash
cd examples/svelte-app
npm install
npm run dev
```

## Angular

File: `src/app/pages/radio-examples.component.html`

Aggiungi il componente alle routes o importalo:

```typescript
import { RadioExamplesComponent } from './pages/radio-examples.component';

// In app.component.ts o nelle routes
```

Avvia l'app:

```bash
cd examples/angular-app
npm install
npm start
```

## Esempi Inclusi

Tutti gli esempi includono:

1. **Esempio Base** - Radio button standard in un gruppo con `<it-radio-group>`
2. **Testo di Supporto** - Radio con testo di aiuto (`support-text`)
3. **Radio Inline** - Radio allineati orizzontalmente
4. **Radio Disabilitato** - Stati disabilitati e abilitati
5. **Raggruppati Visivamente** - Radio con attributo `group`
6. **Radio Group con Validazione** - Form con campi required usando `<it-radio-group>`

## Utilizzo Base

**Con it-radio-group (raccomandato):**

```html
<it-radio-group name="gruppo">
  <span slot="legend">Gruppo di radio</span>
  <it-radio value="opzione1" checked>
    <span slot="label">Opzione 1</span>
  </it-radio>
  <it-radio value="opzione2">
    <span slot="label">Opzione 2</span>
  </it-radio>
</it-radio-group>
```

**Con fieldset (alternativa per casi specifici):**

```html
<fieldset>
  <legend>Gruppo di radio</legend>
  <it-radio-group name="gruppo">
    <it-radio value="opzione1" checked>
      <span slot="label">Opzione 1</span>
    </it-radio>
    <it-radio value="opzione2">
      <span slot="label">Opzione 2</span>
    </it-radio>
  </it-radio-group>
</fieldset>
```

## Attributi Principali

### it-radio-group
- `name` - Nome del gruppo di radio (obbligatorio)
- `value` - Valore selezionato nel gruppo
- `disabled` - Disabilita tutti i radio del gruppo
- `required` - Gruppo obbligatorio per validazione

### it-radio
- `value` - Valore del radio
- `checked` - Se il radio è selezionato
- `disabled` - Se il radio è disabilitato
- `inline` - Allinea il radio orizzontalmente
- `group` - Raggruppa visivamente i radio
- `support-text` - Testo di supporto sotto il radio

## Eventi

- `change` - Emesso da `<it-radio-group>` quando cambia la selezione

## Slot

### it-radio-group
- `legend` - Contenuto della legenda del gruppo (equivalente a `<legend>`)

### it-radio
- `label` (default) - Contenuto della label del radio button
