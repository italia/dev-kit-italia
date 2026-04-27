# it-dimmer

Web component `it-dimmer` del [Design system .italia](https://designers.italia.it/).

Il dimmer focalizza l'attenzione dell'utente su un contenuto sovrapposto, oscurando il contenuto principale sottostante.

## Utilizzo

```html
<it-dimmer active icon-name="it-info-circle">
  <!-- contenuto dell'overlay -->
  <p slot="content">Testo descrittivo dell'overlay.</p>

  <!-- contenuto da oscurare (sfondo) -->
  <div>Contenuto di sfondo da oscurare</div>
</it-dimmer>
```

## Proprietà

| Proprietà   | Attributo    | Tipo                   | Default  | Descrizione                                        |
| ----------- | ------------ | ---------------------- | -------- | -------------------------------------------------- |
| `active`    | `active`     | `boolean`              | `false`  | Mostra o nasconde il dimmer                        |
| `variant`   | `variant`    | `'primary' \| ''`      | `''`     | Variante cromatica (`''` = scuro, `'primary'`)     |
| `iconName`  | `icon-name`  | `string`               | `''`     | Nome icona Bootstrap Italia da mostrare nel dimmer |

## Slot

| Nome       | Descrizione                                                         |
| ---------- | ------------------------------------------------------------------- |
| *(default)*| Contenuto di sfondo da oscurare (card, immagini, testo, ecc.)      |
| `content`  | Contenuto libero dell'overlay (testo, titolo, pulsanti, ecc.)      |

## Metodi

| Metodo     | Descrizione                            |
| ---------- | -------------------------------------- |
| `show()`   | Rende visibile il dimmer               |
| `hide()`   | Nasconde il dimmer                     |
| `toggle()` | Alterna lo stato di visibilità         |

## Eventi

| Evento            | Descrizione                           |
| ----------------- | ------------------------------------- |
| `it-dimmer-show`  | Emesso quando il dimmer diventa visibile |
| `it-dimmer-hide`  | Emesso quando il dimmer viene nascosto   |

## Licenza

BSD-3-Clause © Presidenza del Consiglio dei Ministri
