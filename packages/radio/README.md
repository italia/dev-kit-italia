# \<it-radio> & \<it-radio-group>

## Installation

```bash
npm i @italia/radio
```

## Usage

### Utilizzo Base

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
