# Radio Group Component

## Approccio HTML-First

Il componente `<it-radio-group>` implementa un gruppo di radio button seguendo le best practice di accessibilità e semantica HTML.

### Caratteristiche principali

✅ **HTML-First**: Supporta e incoraggia l'uso di `<fieldset>` e `<legend>` nativi  
✅ **Accessibilità SR**: Screen reader annunciano correttamente "1 di 3", "2 di 3", ecc.  
✅ **Form Integration**: Integrazione completa con form HTML native tramite `ElementInternals`  
✅ **Validazione**: Supporto per validazione nativa (`required`, `checkValidity`, `reportValidity`)  
✅ **Keyboard Navigation**: Supporto completo per navigazione da tastiera

---

## Utilizzo Base

### Approccio Raccomandato: con `<fieldset>` e `<legend>`

```html
<form>
  <fieldset>
    <legend>Seleziona il genere</legend>
    <it-radio-group name="genere" value="femmina">
      <it-radio value="maschio">Maschio</it-radio>
      <it-radio value="femmina">Femmina</it-radio>
      <it-radio value="altro">Altro</it-radio>
    </it-radio-group>
  </fieldset>
</form>
```

**Perché questo approccio?**

- `<fieldset>` fornisce una struttura semantica corretta
- `<legend>` associa automaticamente il label al gruppo
- Screen reader annunciano correttamente la struttura
- Accessibilità nativa senza JavaScript aggiuntivo

---

### Approccio Alternativo: con attributo `label`

```html
<form>
  <it-radio-group name="animale" label="Scegli il tuo animale preferito" value="gatto">
    <it-radio value="cane">Cane</it-radio>
    <it-radio value="gatto">Gatto</it-radio>
    <it-radio value="coniglio">Coniglio</it-radio>
  </it-radio-group>
</form>
```

---

## Proprietà

| Proprietà  | Tipo      | Default | Descrizione                                      |
| ---------- | --------- | ------- | ------------------------------------------------ |
| `name`     | `string`  | `''`    | Nome del gruppo per la form submission           |
| `value`    | `string`  | `''`    | Valore correntemente selezionato                 |
| `disabled` | `boolean` | `false` | Disabilita tutti i radio del gruppo              |
| `required` | `boolean` | `false` | Rende obbligatoria la selezione                  |
| `label`    | `string`  | `''`    | Label alternativa (quando non si usa `<legend>`) |

---

## Esempi

### Campo Obbligatorio

```html
<form>
  <fieldset>
    <legend>Accetti i termini? <span class="text-danger">*</span></legend>
    <it-radio-group name="accettazione" required>
      <it-radio value="si">Sì, accetto</it-radio>
      <it-radio value="no">No, non accetto</it-radio>
    </it-radio-group>
  </fieldset>
  <button type="submit">Invia</button>
</form>

<script>
  // La validazione è automatica!
  document.querySelector('form').addEventListener('submit', (e) => {
    const group = document.querySelector('it-radio-group');
    if (!group.checkValidity()) {
      e.preventDefault();
      group.reportValidity(); // Mostra messaggio di errore
    }
  });
</script>
```

---

### Gruppo Disabilitato

```html
<it-radio-group name="opzioni" value="opzione2" disabled>
  <it-radio value="opzione1">Opzione 1</it-radio>
  <it-radio value="opzione2">Opzione 2 (selezionata)</it-radio>
  <it-radio value="opzione3">Opzione 3</it-radio>
</it-radio-group>
```

---

### Disposizione Inline con Bootstrap Italia

```html
<fieldset>
  <legend>Valutazione</legend>
  <it-radio-group name="rating" class="d-flex gap-3">
    <it-radio value="1">★</it-radio>
    <it-radio value="2">★★</it-radio>
    <it-radio value="3">★★★</it-radio>
    <it-radio value="4">★★★★</it-radio>
    <it-radio value="5">★★★★★</it-radio>
  </it-radio-group>
</fieldset>
```

---

## API JavaScript

### Metodi

#### `checkValidity(): boolean`

Verifica se il gruppo è valido (se required, controlla che sia selezionato un valore).

```javascript
const group = document.querySelector('it-radio-group');
if (!group.checkValidity()) {
  console.log("Seleziona un'opzione!");
}
```

#### `reportValidity(): boolean`

Come `checkValidity()`, ma mostra anche il messaggio di errore nativo.

```javascript
group.reportValidity(); // Mostra errore e fa focus sul primo radio
```

---

### Proprietà (JavaScript)

```javascript
const group = document.querySelector('it-radio-group');

// Lettura
console.log(group.value); // 'maschio'
console.log(group.name); // 'genere'
console.log(group.required); // true

// Scrittura
group.value = 'femmina'; // Seleziona il radio con value="femmina"
group.disabled = true; // Disabilita tutto il gruppo
```

---

### Eventi

#### `change`

Emesso quando l'utente seleziona un diverso radio.

```javascript
group.addEventListener('change', (e) => {
  console.log('Nuovo valore:', e.target.value);
});
```

---

## Form Submission

Il componente si integra perfettamente con form HTML native:

```html
<form id="myForm">
  <fieldset>
    <legend>Dati personali</legend>
    <it-radio-group name="genere" value="maschio">
      <it-radio value="maschio">Maschio</it-radio>
      <it-radio value="femmina">Femmina</it-radio>
    </it-radio-group>
  </fieldset>
  <button type="submit">Invia</button>
</form>

<script>
  document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get('genere')); // 'maschio'
  });
</script>
```

---

## Accessibilità

### Screen Reader

Il componente garantisce che gli screen reader annuncino correttamente:

1. **Nome del gruppo**: Da `<legend>` o attributo `label`
2. **Posizione**: "1 di 3", "2 di 3", "3 di 3" (grazie a `role="radiogroup"`)
3. **Stato**: Checked/Unchecked
4. **Required**: "obbligatorio" se `required="true"`

### Navigazione da Tastiera

| Tasto              | Azione                                                 |
| ------------------ | ------------------------------------------------------ |
| `Tab`              | Entra nel gruppo (focus sul radio selezionato o primo) |
| `Arrow Up/Left`    | Seleziona radio precedente                             |
| `Arrow Down/Right` | Seleziona radio successivo                             |
| `Space`            | Seleziona radio in focus                               |

---

## Migration da Solo `<it-radio>`

### Prima (deprecato)

```html
<fieldset>
  <legend>Genere</legend>
  <it-radio name="genere" value="maschio">Maschio</it-radio>
  <it-radio name="genere" value="femmina">Femmina</it-radio>
</fieldset>
```

❌ **Problemi:**

- Screen reader annuncia "1 di 1" per ogni radio
- FormData potrebbe non funzionare correttamente
- Mutua esclusione gestita con logica fragile

### Dopo (raccomandato)

```html
<fieldset>
  <legend>Genere</legend>
  <it-radio-group name="genere">
    <it-radio value="maschio">Maschio</it-radio>
    <it-radio value="femmina">Femmina</it-radio>
  </it-radio-group>
</fieldset>
```

✅ **Vantaggi:**

- Screen reader corretto: "1 di 2", "2 di 2"
- FormData funziona perfettamente
- Validazione nativa
- Mutua esclusione robusta

---

## Best Practices

### ✅ DO

```html
<!-- Usa fieldset + legend per semantica corretta -->
<fieldset>
  <legend>Titolo del gruppo</legend>
  <it-radio-group name="gruppo">
    <it-radio value="1">Opzione 1</it-radio>
    <it-radio value="2">Opzione 2</it-radio>
  </it-radio-group>
</fieldset>

<!-- Fornisci sempre un label (via legend o attributo) -->
<it-radio-group name="gruppo" label="Scegli un'opzione"> ... </it-radio-group>

<!-- Usa required per campi obbligatori -->
<it-radio-group name="gruppo" required> ... </it-radio-group>
```

### ❌ DON'T

```html
<!-- NON usare radio senza gruppo -->
<it-radio name="solo" value="1">Opzione</it-radio>

<!-- NON omettere il label -->
<it-radio-group name="gruppo">
  <it-radio value="1">Opzione 1</it-radio>
</it-radio-group>

<!-- NON usare senza name -->
<it-radio-group>
  <it-radio value="1">Opzione 1</it-radio>
</it-radio-group>
```

---

## Browser Support

Il componente usa `ElementInternals` per l'integrazione form. Richiede:

- Chrome/Edge 77+
- Firefox 93+
- Safari 16.4+

Per browser più vecchi, considera un polyfill per `ElementInternals`.

---

## Testing

Per testare l'accessibilità screen reader:

1. **macOS**: Attiva VoiceOver (⌘+F5)
2. **Windows**: Usa NVDA o JAWS
3. **Linux**: Usa Orca

Verifica che annunci:

- Nome del gruppo
- Posizione corretta (1 di N, 2 di N, ecc.)
- Stato checked/unchecked

---

## FAQ

### Q: Posso usare `<it-radio>` da solo senza `<it-radio-group>`?

**A:** No, è deprecato. Usa sempre `<it-radio-group>` per garantire accessibilità e form integration corrette.

### Q: Devo sempre usare `<fieldset>`?

**A:** È fortemente raccomandato per la semantica HTML corretta. Se non puoi, usa l'attributo `label`:

```html
<it-radio-group name="gruppo" label="Titolo del gruppo"> ... </it-radio-group>
```

### Q: Come gestisco la validazione custom?

**A:** Usa `checkValidity()` e imposta messaggi custom:

```javascript
const group = document.querySelector('it-radio-group');
if (!group.checkValidity()) {
  // Custom validation logic
}
```

### Q: Posso stilizzare il componente con CSS?

**A:** Sì! Il componente non usa Shadow DOM, quindi puoi stilizzare con CSS normale:

```css
it-radio-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

it-radio-group.inline {
  flex-direction: row;
}
```
