# Breadcrumbs Web Component

Questo package contiene il web component `<it-breadcrumbs>`, conforme agli standard del progetto e con stili Bootstrap Italia.

## Installation

```bash
npm i @italia/breadcrumbs
```

## Usage

```html
<it-breadcrumbs it-aria-label="Percorso di navigazione">
  <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
  <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
  <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
</it-breadcrumbs>
```

## Sviluppo

- Stili: solo SCSS, no CSS inline
- Test: web-test-runner
- Storie: Storybook

## License

Vedi LICENSE.
