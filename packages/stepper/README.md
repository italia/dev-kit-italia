# @italia/stepper

Web component `it-stepper` del Design system .italia — componente per guidare l'utente attraverso una procedura suddivisa in più passi.

## Installazione

```bash
npm install @italia/stepper
```

## Utilizzo

```html
<script type="module">
  import '@italia/stepper';
</script>

<it-stepper header-variant="numbers" current="1" total-steps="6">
  <it-stepper-step label="Primo contenuto">
    <p>Contenuto del primo step</p>
  </it-stepper-step>
  <it-stepper-step label="Secondo contenuto">
    <p>Contenuto del secondo step</p>
  </it-stepper-step>
  <it-stepper-step label="Terzo contenuto">
    <p>Contenuto del terzo step</p>
  </it-stepper-step>
</it-stepper>
```

## Documentazione

Consulta la [documentazione completa](https://italia.github.io/dev-kit-italia) per esempi e dettagli sulle proprietà disponibili.
