# Radio Button Examples

Esempi di utilizzo del componente `<it-radio>` in diversi framework.

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

File: `src/app/radio-examples/`

Aggiungi il componente alle routes o importalo:

```typescript
import { RadioExamplesComponent } from './radio-examples/radio-examples.component';

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

1. **Esempio Base** - Radio button standard in un gruppo
2. **Testo di Supporto** - Radio con testo di aiuto (`support-text`)
3. **Radio Inline** - Radio allineati orizzontalmente
4. **Radio Disabilitato** - Stati disabilitati e abilitati
5. **Raggruppati Visivamente** - Radio con attributo `group`
6. **Validazione** - Form con campi required

## Utilizzo Base

```html
<fieldset>
  <legend>Gruppo di radio</legend>
  <it-radio name="gruppo" value="opzione1" checked>
    <span slot="label">Opzione 1</span>
  </it-radio>
  <it-radio name="gruppo" value="opzione2">
    <span slot="label">Opzione 2</span>
  </it-radio>
</fieldset>
```

## Attributi Principali

- `name` - Nome del gruppo di radio (obbligatorio)
- `value` - Valore del radio
- `checked` - Se il radio è selezionato
- `disabled` - Se il radio è disabilitato
- `inline` - Allinea il radio orizzontalmente
- `group` - Raggruppa visivamente i radio
- `support-text` - Testo di supporto sotto il radio
- `required` - Campo obbligatorio per validazione

## Eventi

- `change` - Emesso quando lo stato checked cambia

## Slot

- `label` (default) - Contenuto della label del radio button
