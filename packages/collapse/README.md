# \<it-collapse>

Web component `it-collapse` del Design System Italia.

## Installation

```bash
npm i @italia/collapse
```

## Usage

```html
<script type="module">
  import '@italia/collapse';
</script>

<it-collapse label="Collapse header" default-open>
  <div slot="content">
    <p>Contenuto del collapse.</p>
  </div>
</it-collapse>
```

## Con trigger personalizzato

```html
<it-collapse>
  <button slot="trigger">Custom trigger</button>
  <div slot="content">
    <p>Contenuto del collapse.</p>
  </div>
</it-collapse>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```
