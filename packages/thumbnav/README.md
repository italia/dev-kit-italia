# it-thumbnav

Web component Thumbnav del Design System .italia

Componente di navigazione con immagini thumbnail.

## Installazione

```bash
npm install @italia/thumbnav
```

## Utilizzo

```html
<it-thumbnav>
  <it-thumbnav-item>
    <a href="#" class="ratio ratio-3x2">
      <img src="..." alt="Visualizza immagine 1">
    </a>
  </it-thumbnav-item>
</it-thumbnav>
```

## Attributi

### it-thumbnav

- `small` (boolean): Thumbnail di dimensione ridotta (120px invece di 240px)
- `vertical` (boolean): Disposizione verticale
- `fixed` (boolean): Larghezza fissa per ogni thumbnail
- `hover` (string): Effetto hover - `nozoom`, `black`, `primary`
- `auto` (number): Griglia automatica - numero di colonne (2-5)
- `position` (string): Posizione in overlay - `bottom`, `top`, `left`, `right`

## Documentazione

Visita la [documentazione ufficiale](https://designers.italia.it/design-system/componenti/thumbnav/) per dettagli completi sull'utilizzo del componente.

## Licenza

BSD 3-Clause License
