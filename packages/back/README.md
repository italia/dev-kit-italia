# \<it-back>

Web component _light DOM_ che aggiunge il comportamento di default "torna indietro"
(`window.history.back()`) agli elementi `.go-back` del Design system .italia.

## Installation

```bash
npm i @italia/back
```

## Usage

```html
<script type="module">
  import '@italia/back/it-back.js';
</script>

<it-back>
  <a href="#" class="go-back">
    <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
    <span>Torna indietro</span>
  </a>
</it-back>
```

Al click, il componente esegue `window.history.back()`. L'evento `it-back-navigate` è
cancelable: chiamando `event.preventDefault()` puoi sovrascrivere il comportamento di
default, ad esempio per gestire la navigazione con il router di un framework.
