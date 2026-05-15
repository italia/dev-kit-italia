# Toolbar Component

Web component toolbar del Design system .italia basato su Lit e Web Components.

## Features

- Componente di navigazione a icone in tre dimensioni (grande, media, piccola)
- Supporto per orientamenti orizzontale e verticale
- Supporto completo per link, pulsanti, dropdown e badge
- Accessibilità WCAG 2.1 AA
- Integrazione Bootstrap Italia

## Installation

```bash
npm install @italia/toolbar
```

## Usage

```html
<it-toolbar>
  <li>
    <a href="#" class="active">
      <svg class="icon"><use href="/sprites.svg#it-comment"></use></svg>
      <span class="toolbar-label">messaggi</span>
    </a>
  </li>
  <li>
    <a href="#">
      <svg class="icon"><use href="/sprites.svg#it-camera"></use></svg>
      <span class="toolbar-label">immagini</span>
    </a>
  </li>
</it-toolbar>
```

## Documentation

- [Designers Italia](https://designers.italia.it/design-system/componenti/toolbar/)
- [Bootstrap Italia](https://bootstrap-italia.github.io/docs/menu-di-navigazione/toolbar/)

## License

BSD 3-Clause License - See LICENSE file for details
