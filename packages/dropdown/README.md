# Dropdown Web Component

Questo package contiene il web component `<it-dropdown>`, conforme agli standard del progetto e con stili Bootstrap Italia.

## Installation

```bash
npm i @italia/dropdown
```

## Usage

```
<it-dropdown>
  <button>Apri menu</button>
  <ul popover>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">Chi siamo</a></li>
    <li><a href="/contatti">Contatti</a></li>
  </ul>
</it-dropdown>
```

## Sviluppo

- Stili: solo SCSS, no CSS inline
- Test: web-test-runner
- Storie: Storybook

## License

Vedi LICENSE.
