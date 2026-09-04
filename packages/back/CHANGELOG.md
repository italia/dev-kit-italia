# @italia/back

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

- [#456](https://github.com/italia/dev-kit-italia/pull/456) [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add back component (`it-back`)
  - New light-DOM enhancer providing a default `history.back()` on click of `.go-back`, via a cancelable `it-back-navigate` event — call `event.preventDefault()` to run custom navigation logic instead (e.g. integrating with a framework router).
  - Framework examples (vanilla, react, vue, svelte, angular) updated to demonstrate router-integrated back navigation.

### Patch Changes

- Updated dependencies [[`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832)]:
  - @italia/globals@1.0.0-alpha.19
