# \<it-forward>

Web component _light DOM_ che aggiunge il comportamento di default di scorrimento fluido
ai link "forward" del Design system .italia.

## Installation

```bash
npm i @italia/forward
```

## Usage

```html
<script type="module">
  import '@italia/forward/it-forward.js';
</script>

<it-forward>
  <a href="#sezione-di-esempio" class="forward" aria-label="Vai a: Sezione di esempio">
    <it-icon name="it-expand" size="lg" color="primary"></it-icon>
  </a>
</it-forward>
```

Al click sul link, il componente scorre fluidamente fino alla sezione di destinazione e vi
sposta il focus (rispettando le preferenze di riduzione del movimento). L'evento
`it-forward-navigate` è cancelable: chiamando `event.preventDefault()` puoi sovrascrivere
il comportamento di default.
