# @italia/alert

## 1.0.0-beta.2

### Patch Changes

- [`87c09ca`](https://github.com/italia/dev-kit-italia/commit/87c09ca0e1d8ffc77344e5bfb30bf6d4a3a7b59d) Thanks [@pnicolli](https://github.com/pnicolli)! - Fixed release packaging

- Updated dependencies [[`87c09ca`](https://github.com/italia/dev-kit-italia/commit/87c09ca0e1d8ffc77344e5bfb30bf6d4a3a7b59d)]:
  - @italia/globals@1.0.0-beta.2

## 1.0.0-beta.1

### Minor Changes

- [#458](https://github.com/italia/dev-kit-italia/pull/458) [`1fd9fda`](https://github.com/italia/dev-kit-italia/commit/1fd9fdab8e3f2e9c7ba799e233306e66832835d4) Thanks [@pnicolli](https://github.com/pnicolli)! - Unified the README file of all components packages, made special packages more consistent (i18n, globals, dev-kit-italia)

### Patch Changes

- Updated dependencies [[`1fd9fda`](https://github.com/italia/dev-kit-italia/commit/1fd9fdab8e3f2e9c7ba799e233306e66832835d4)]:
  - @italia/globals@1.0.0-beta.1

## 1.0.0-beta.0

### Major Changes

- [#465](https://github.com/italia/dev-kit-italia/pull/465) [`3cfe4eb`](https://github.com/italia/dev-kit-italia/commit/3cfe4ebcbb253b7b81f17d99a864d7a3bfe8b024) Thanks [@astagi](https://github.com/astagi)! - Beta release

### Patch Changes

- Updated dependencies [[`3cfe4eb`](https://github.com/italia/dev-kit-italia/commit/3cfe4ebcbb253b7b81f17d99a864d7a3bfe8b024)]:
  - @italia/globals@1.0.0-beta.0

## 1.0.0-alpha.19

### Minor Changes

- [#456](https://github.com/italia/dev-kit-italia/pull/456) [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add alert component (`it-alert`)
  - New light-DOM enhancer for Bootstrap Italia's `.alert` markup: auto-sets `role="alert"` and maps the `variant` attribute to the correct `alert-{variant}` class.
  - Sensible default behavior: fade + remove on `.btn-close` click, via a cancelable `it-alert-close` event and a public `close()` method — call `event.preventDefault()` to intercept the close (e.g. async confirmation) and `close()` later.
  - Stories/MDX updated to wrap alert examples in `<it-alert variant>` and document the auto role/variant mapping and its accessibility implications.
  - Focus on close: shifts to an adjacent alert's close button when one exists; otherwise falls back to a `tabindex`-bearing ancestor, and now further falls back to the nearest focusable element anywhere in the document — the common case in practice, since most usages don't add that ancestor. Previously focus was silently lost to `<body>` in that case.

### Patch Changes

- Updated dependencies [[`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832)]:
  - @italia/globals@1.0.0-alpha.19
