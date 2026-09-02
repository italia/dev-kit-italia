# @italia/notification

## 1.0.0-beta.1

### Minor Changes

- [#458](https://github.com/italia/dev-kit-italia/pull/458) [`1fd9fda`](https://github.com/italia/dev-kit-italia/commit/1fd9fdab8e3f2e9c7ba799e233306e66832835d4) Thanks [@pnicolli](https://github.com/pnicolli)! - Unified the README file of all components packages, made special packages more consistent (i18n, globals, dev-kit-italia)

### Patch Changes

- Updated dependencies [[`1fd9fda`](https://github.com/italia/dev-kit-italia/commit/1fd9fdab8e3f2e9c7ba799e233306e66832835d4)]:
  - @italia/globals@1.0.0-beta.1
  - @italia/i18n@1.0.0-beta.1

## 1.0.0-beta.0

### Major Changes

- [#465](https://github.com/italia/dev-kit-italia/pull/465) [`3cfe4eb`](https://github.com/italia/dev-kit-italia/commit/3cfe4ebcbb253b7b81f17d99a864d7a3bfe8b024) Thanks [@astagi](https://github.com/astagi)! - Beta release

### Patch Changes

- Updated dependencies [[`3cfe4eb`](https://github.com/italia/dev-kit-italia/commit/3cfe4ebcbb253b7b81f17d99a864d7a3bfe8b024)]:
  - @italia/globals@1.0.0-beta.0
  - @italia/i18n@1.0.0-beta.0

## 1.0.0-alpha.19

### Minor Changes

- [#456](https://github.com/italia/dev-kit-italia/pull/456) [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832) Thanks [@deodorhunter](https://github.com/deodorhunter)! - `it-notification` now fires `it-notification-show` and `it-notification-close` custom events (not cancelable — show/close are always caller-initiated, so there was no real use case for blocking them). `it-notification-close` covers the close button, the auto-dismiss timeout and any programmatic `hide()` call.

  Also fixed: dismissing a notification while focus is on its own close button no longer silently drops focus to `<body>`. Focus is restored to whatever was focused right before `show()` was called (typically the button that triggered it — there is no author-provided trigger slot to target like `it-modal` has), falling back to a `tabindex`-bearing ancestor and then to the nearest focusable element in the document if that original element is gone.

### Patch Changes

- [#457](https://github.com/italia/dev-kit-italia/pull/457) [`aa77369`](https://github.com/italia/dev-kit-italia/commit/aa773695e73e24c05fe27db62a99b971f7fd3490) Thanks [@pnicolli](https://github.com/pnicolli)! - Set default notification z-index

- [`10102b4`](https://github.com/italia/dev-kit-italia/commit/10102b4bd2a7fc90b0957858a54613898b309acb) Thanks [@pnicolli](https://github.com/pnicolli)! - - Fixed notification announcements on NVDA and Jaws
  - Improved announcements on several screen readers
- Updated dependencies [[`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832)]:
  - @italia/globals@1.0.0-alpha.19
  - @italia/i18n@1.0.0-alpha.19

## 1.0.0-alpha.18

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.18
  - @italia/i18n@1.0.0-alpha.18

## 1.0.0-alpha.17

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.17
  - @italia/i18n@1.0.0-alpha.17

## 1.0.0-alpha.16

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.16
  - @italia/i18n@1.0.0-alpha.16

## 1.0.0-alpha.15

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.15
  - @italia/i18n@1.0.0-alpha.15

## 1.0.0-alpha.14

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.14
  - @italia/i18n@1.0.0-alpha.14

## 1.0.0-alpha.13

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.13
  - @italia/i18n@1.0.0-alpha.13

## 1.0.0-alpha.12

### Minor Changes

- [#346](https://github.com/italia/dev-kit-italia/pull/346) [`ff9981d`](https://github.com/italia/dev-kit-italia/commit/ff9981d4ec7414bcb717c31d3c026c5fc20fa156) Thanks [@pnicolli](https://github.com/pnicolli)! - Refactoring to migrate from old sass imports to new use/forward syntax. Removed several silenced warnings.

### Patch Changes

- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.12
  - @italia/i18n@1.0.0-alpha.12

## 1.0.0-alpha.11

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.11
  - @italia/i18n@1.0.0-alpha.11

## 1.0.0-alpha.10

### Patch Changes

- Aggiornamento della versione
- Updated dependencies [[`900b2f7`](https://github.com/italia/dev-kit-italia/commit/900b2f75dccf49d05325443f50f6215ad2f6d18b), [`a1bc1fb`](https://github.com/italia/dev-kit-italia/commit/a1bc1fb60b4adf11507d455e18a4fd900d41fe5a)]:
  - @italia/i18n@1.0.0-alpha.10
  - @italia/globals@1.0.0-alpha.10

## 1.0.0-alpha.9

### Minor Changes

- [#328](https://github.com/italia/dev-kit-italia/pull/328) [`cfe1a3c`](https://github.com/italia/dev-kit-italia/commit/cfe1a3c5c85fae70323b4f3da7fb5764beac78f9) Thanks [@pnicolli](https://github.com/pnicolli)! - Added it-notification component

### Patch Changes

- Updated dependencies [[`b00d9b2`](https://github.com/italia/dev-kit-italia/commit/b00d9b262bec00d3a036e6a38ec8a0e4975d0474), [`fef3f8b`](https://github.com/italia/dev-kit-italia/commit/fef3f8bdde69cebe93c4b5d3b0fd75701f588188), [`a5ee60f`](https://github.com/italia/dev-kit-italia/commit/a5ee60f85c77c681a5c61a87970388318e794188)]:
  - @italia/globals@1.0.0-alpha.9
  - @italia/i18n@1.0.0-alpha.9
