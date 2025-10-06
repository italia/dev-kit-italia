# Popover Web Component

Questo package contiene il web component `<it-popover>`, conforme agli standard del progetto e con stili Bootstrap Italia.

## Cos'è un Popover?

Un **popover** è un piccolo overlay non-modale che appare vicino a un elemento specifico dell'interfaccia, solitamente attivato da un'interazione dell'utente (click, hover, focus).

### Differenza tra Popover, Tooltip e Dialog

È importante comprendere quando usare ciascun pattern:

- **Tooltip**: Fornisce brevi informazioni descrittive su hover/focus. Scompare automaticamente quando si esce con il mouse. Contenuto semplice (solo testo). Es: spiegazione funzione di un pulsante.

- **Popover**: Fornisce contenuto aggiuntivo contestuale e interattivo. Non-modale, senza backdrop, chiusura "light" (click outside). Contenuto ricco (testo, link, immagini, form). Es: menu contestuali, color picker, date picker, info aggiuntive.

- **Dialog/Modal**: Richiede un'azione dall'utente prima di continuare. Modale, con backdrop, chiusura esplicita (pulsante). Blocca l'interazione con il resto dell'interfaccia. Es: conferme, alert critici, form complessi.

### Caratteristiche del nostro Popover

Il componente `it-popover` implementa correttamente le best practices UX per i popover:

- ✅ **Non-modale**: non blocca l'interazione con il resto dell'interfaccia
- ✅ **Nessun backdrop**: l'utente può vedere e interagire con il contenuto sottostante
- ✅ **Light dismiss**: si chiude automaticamente cliccando fuori o programmabile
- ✅ **Posizionamento dinamico**: usa [Floating UI](https://floating-ui.com/) per adattarsi allo spazio disponibile
- ✅ **Contenuto ricco**: supporta HTML complesso, link, icone, form

**Reference**: [Popups, dialogs, tooltips, and popovers — UX Patterns](https://medium.com/design-bootcamp/popups-dialogs-tooltips-and-popovers-ux-patterns-2-939da7a1ddcd)

### ⚠️ Quando NON usare un Popover

**Usa un Dialog/Modal invece se:**

- ❌ L'azione è **critica** e richiede attenzione immediata (es: conferma eliminazione)
- ❌ L'utente **deve** completare un'azione prima di continuare (es: login obbligatorio)
- ❌ Il contenuto è **complesso** e richiede focus completo (es: wizard multi-step)
- ❌ L'azione può avere **conseguenze irreversibili** (es: "Sei sicuro di voler eliminare?")

**Usa un Tooltip invece se:**

- ❌ Il contenuto è **solo testo breve** descrittivo (es: "Salva il documento")
- ❌ L'informazione è **non interattiva** (nessun link/button)
- ❌ Compare automaticamente all'**hover** e scompare all'uscita
- ❌ Non ci sono **azioni** da compiere dentro l'overlay

**Usa un Popover quando:**

- ✅ Fornisci **opzioni contestuali** senza interrompere il flusso (es: menu)
- ✅ Mostri **info aggiuntive** con contenuto ricco (es: preview con link)
- ✅ Permetti **selezioni** da un set di valori (es: color picker, date picker)
- ✅ L'utente **può continuare** a lavorare anche con il popover aperto
- ✅ Non è un'azione critica o irreversibile

## Utilizzo

Il componente `<it-popover>` permette di visualizzare contenuti in overlay posizionati rispetto a un elemento trigger.

### Installazione

```bash
npm install @italia/popover
```

### Import

```javascript
import '@italia/popover';
```

### Esempio base

```html
<it-popover>
  <it-button slot="trigger" variant="danger">
    Clicca per aprire
  </it-button>
  <div slot="content" class="popover" tabindex="-1">
    <div class="popover-inner">
      <h3 class="popover-header">Titolo del Popover</h3>
      <div class="popover-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  </div>
</it-popover>

<script>
  // Aggiungi event listener per gestire il click sul trigger
  const popover = document.querySelector('it-popover');
  const trigger = popover.querySelector('[slot="trigger"]');
  
  trigger.addEventListener('click', () => {
    popover.toggle();
  });
</script>
```

### Design Rationale: Perché il click non è automatico?

**Scelta progettuale consapevole**: Il componente `it-popover` **NON gestisce automaticamente** il click sul trigger. Questa è una decisione UX intenzionale per i seguenti motivi:

#### 🎯 Flessibilità del pattern di interazione

I popover, a differenza dei dialog modali, non hanno un pattern di interazione univoco. Possono essere attivati in molti modi:

- **Click**: Il pattern più comune per menu e azioni
- **Hover**: Utile per preview o informazioni aggiuntive (come nei rich tooltip)
- **Focus**: Per accessibilità da tastiera
- **Programmatico**: Da codice, come risposta ad altre azioni
- **Custom**: Combinazioni (es: click + keyboard, long press, ecc.)

Gestire automaticamente solo il click limiterebbe queste possibilità.

#### 🔀 Casi d'uso diversi

Il componente deve supportare diverse implementazioni:

- **Date Picker**: Aperto al click, chiuso alla selezione di una data
- **Color Picker**: Aperto al click, aggiornamento in tempo reale
- **Menu contestuale**: Aperto al click/right-click, chiuso alla selezione
- **Info tooltip**: Aperto all'hover, chiuso all'uscita del mouse
- **Form popover**: Aperto al focus, chiuso alla perdita di focus o submit

Ogni caso richiede una logica diversa che l'utente conosce meglio del componente.

#### ✅ Best practice dei Web Components

Seguiamo il principio di **responsabilità unica**: il componente gestisce il posizionamento e la visibilità, l'applicazione gestisce l'interazione. Questo è coerente con:

- `<dialog>` nativo HTML: non apre automaticamente al click
- `<details>` nativo HTML: gestisce il click ma è un caso specifico
- Altri design system (Material, Polaris): delegano l'handling al consumatore

#### 💡 Come gestire l'interazione

È semplice aggiungere il comportamento desiderato:

```javascript
// Click
trigger.addEventListener('click', () => popover.toggle());

// Hover
trigger.addEventListener('mouseenter', () => popover.openPopover());
trigger.addEventListener('mouseleave', () => popover.closePopover());

// Focus
trigger.addEventListener('focus', () => popover.openPopover());
trigger.addEventListener('blur', () => popover.closePopover());
```

**Nota importante**: Il componente gestisce comunque automaticamente il **click outside** per chiudere il popover (light dismiss pattern), perché questa è una caratteristica intrinseca dei popover secondo le best practices UX.

### Proprietà

| Proprietà | Tipo | Default | Descrizione |
|-----------|------|---------|-------------|
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left' \| 'top-start' \| 'top-end' \| 'right-start' \| 'right-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end'` | `'bottom-start'` | Posizione del popover rispetto al trigger |
| `open` | `boolean` | `false` | Stato di apertura del popover |

### Slot

| Slot | Descrizione |
|------|-------------|
| `trigger` | Elemento che attiva il popover (es. pulsante) |
| `content` | Contenuto da visualizzare nel popover |

### Metodi

| Metodo | Descrizione |
|--------|-------------|
| `openPopover()` | Apre il popover |
| `closePopover()` | Chiude il popover |
| `toggle()` | Cambia lo stato del popover (aperto/chiuso) |

### Eventi

| Evento | Descrizione |
|--------|-------------|
| `it-popover-open` | Emesso quando il popover viene aperto |
| `it-popover-close` | Emesso quando il popover viene chiuso |

### Esempi avanzati

#### Posizionamento

```html
<it-popover placement="top">
  <it-button slot="trigger">Popover in alto</it-button>
  <div slot="content" class="popover" tabindex="-1">
    <div class="popover-inner">
      <h3 class="popover-header">Titolo</h3>
      <div class="popover-body">Contenuto</div>
    </div>
  </div>
</it-popover>
```

#### Con icona e link

```html
<it-popover placement="top">
  <it-button slot="trigger" variant="primary">
    Popover con icona e link
  </it-button>
  <div slot="content" class="popover" tabindex="-1">
    <div class="popover-inner">
      <h3 class="popover-header">
        <it-icon name="it-info-circle" size="sm"></it-icon>
        Titolo del Popover
      </h3>
      <div class="popover-body">
        Lorem ipsum dolor sit amet.
        <a href="#" class="popover-inner-link">Vai al link</a>
      </div>
    </div>
  </div>
</it-popover>
```

#### Controllo programmatico

```javascript
const popover = document.querySelector('it-popover');

// Apri il popover
popover.openPopover();

// Chiudi il popover
popover.closePopover();

// Toggle
popover.toggle();

// Ascolta gli eventi
popover.addEventListener('it-popover-open', (e) => {
  console.log('Popover aperto', e);
});

popover.addEventListener('it-popover-close', (e) => {
  console.log('Popover chiuso', e);
});
```

### Note

- Il popover si chiude automaticamente quando si clicca all'esterno
- Il componente gestisce automaticamente gli attributi ARIA per l'accessibilità
- Per elementi disabilitati, avvolgi il componente in un elemento contenitore con `tabindex="0"`

## Sviluppo

- Stili: solo SCSS, no CSS inline
- Test: web-test-runner
- Storie: Storybook

## License

Vedi LICENSE.

