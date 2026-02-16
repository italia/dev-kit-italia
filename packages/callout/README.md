# Callout

Web component it-callout del Design system .italia

## Installazione

```bash
npm install @italia/callout
npm install @italia/collapse
```

Nel caso di non utilizzo del kit completo, la dipendenza `@itala/collapse` è necessaria per implementare la versione "Callout di approfondimento", che presenta una sezione collassabile implementata attraverso collapse.

```js
// it-callout-more-collapse.ts
import { ItCollapseBase } from '@italia/collapse';

export class ItCalloutMoreCollapse extends ItCollapseBase {}
```

## Utilizzo

```html
<it-callout variant="primary">
  <span slot="title">Titolo del callout</span>
  <p>Contenuto del callout con informazioni importanti per l'utente.</p>
</it-callout>
```

## Documentazione

Per maggiori informazioni consultare la [documentazione ufficiale](https://italia.github.io/dev-kit-italia).
