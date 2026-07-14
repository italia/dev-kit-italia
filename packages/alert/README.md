# \<it-alert>

Web component _light DOM_ che aggiunge il comportamento di default di chiusura agli alert del Design system .italia.

## Installation

```bash
npm i @italia/alert
```

## Usage

```html
<script type="module">
  import '@italia/alert/it-alert.js';
</script>

<it-alert>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
    <it-button type="button" class="btn-close" it-aria-label="Chiudi avviso">
      <it-icon name="it-close"></it-icon>
    </it-button>
  </div>
</it-alert>
```

Il click sul pulsante `.btn-close` chiude l'alert. L'evento `it-alert-close` è cancelable:
chiamando `event.preventDefault()` puoi sovrascrivere il comportamento e chiudere l'alert
in un secondo momento con il metodo pubblico `close()`.
