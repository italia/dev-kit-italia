# @italia/globals

## 1.0.0-beta.1

### Minor Changes

- [#458](https://github.com/italia/dev-kit-italia/pull/458) [`1fd9fda`](https://github.com/italia/dev-kit-italia/commit/1fd9fdab8e3f2e9c7ba799e233306e66832835d4) Thanks [@pnicolli](https://github.com/pnicolli)! - Unified the README file of all components packages, made special packages more consistent (i18n, globals, dev-kit-italia)

### Patch Changes

- Updated dependencies [[`1fd9fda`](https://github.com/italia/dev-kit-italia/commit/1fd9fdab8e3f2e9c7ba799e233306e66832835d4)]:
  - @italia/i18n@1.0.0-beta.1

## 1.0.0-beta.0

### Major Changes

- [#465](https://github.com/italia/dev-kit-italia/pull/465) [`3cfe4eb`](https://github.com/italia/dev-kit-italia/commit/3cfe4ebcbb253b7b81f17d99a864d7a3bfe8b024) Thanks [@astagi](https://github.com/astagi)! - Beta release

### Patch Changes

- Updated dependencies [[`3cfe4eb`](https://github.com/italia/dev-kit-italia/commit/3cfe4ebcbb253b7b81f17d99a864d7a3bfe8b024)]:
  - @italia/i18n@1.0.0-beta.0

## 1.0.0-alpha.19

### Minor Changes

- [#456](https://github.com/italia/dev-kit-italia/pull/456) [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add shared `dispatchCancelable`, `focusableFallbackAncestor` and `nearestFocusableInDocument` utilities. `dispatchCancelable` dispatches a cancelable custom event and only runs the provided default action if `preventDefault()` was not called — this is now the shared convention behind the cancelable events in `it-alert`, `it-back`, `it-forward`, `it-chip`, `it-modal` and `it-transfer`. `it-tabs` and `it-upload` were migrated internally to use it, with no behavior change. `focusableFallbackAncestor` is also used by `it-notification` to restore focus on dismiss (see its own changeset) even though `it-notification` does not use `dispatchCancelable` itself — its show/close are always caller-initiated, so there was no real case for making them cancelable.

  `nearestFocusableInDocument` is a new true last-resort fallback used by `it-alert`, `it-chip` and `it-notification`: when a self-removing/self-hiding component has neither an adjacent same-type element nor a `tabindex`-bearing ancestor to target, it now searches the whole document for the nearest focusable element instead of silently losing focus to `<body>` — the common real-world case, since most usages don't add that ancestor.

### Patch Changes

- Updated dependencies []:
  - @italia/i18n@1.0.0-alpha.19

## 1.0.0-alpha.18

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/i18n@1.0.0-alpha.18

## 1.0.0-alpha.17

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/i18n@1.0.0-alpha.17

## 1.0.0-alpha.16

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/i18n@1.0.0-alpha.16

## 1.0.0-alpha.15

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/i18n@1.0.0-alpha.15

## 1.0.0-alpha.14

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/i18n@1.0.0-alpha.14

## 1.0.0-alpha.13

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/i18n@1.0.0-alpha.13

## 1.0.0-alpha.12

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/i18n@1.0.0-alpha.12

## 1.0.0-alpha.11

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/i18n@1.0.0-alpha.11

## 1.0.0-alpha.10

### Patch Changes

- [#94](https://github.com/italia/dev-kit-italia/pull/94) [`a1bc1fb`](https://github.com/italia/dev-kit-italia/commit/a1bc1fb60b4adf11507d455e18a4fd900d41fe5a) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added header component

- Updated dependencies [[`900b2f7`](https://github.com/italia/dev-kit-italia/commit/900b2f75dccf49d05325443f50f6215ad2f6d18b)]:
  - @italia/i18n@1.0.0-alpha.10

## 1.0.0-alpha.9

### Minor Changes

- [#317](https://github.com/italia/dev-kit-italia/pull/317) [`b00d9b2`](https://github.com/italia/dev-kit-italia/commit/b00d9b262bec00d3a036e6a38ec8a0e4975d0474) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added tabs component

- [#293](https://github.com/italia/dev-kit-italia/pull/293) [`fef3f8b`](https://github.com/italia/dev-kit-italia/commit/fef3f8bdde69cebe93c4b5d3b0fd75701f588188) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Handle Safari bugs and quirks in it-modal and focus-trap-controller

- [#352](https://github.com/italia/dev-kit-italia/pull/352) [`a5ee60f`](https://github.com/italia/dev-kit-italia/commit/a5ee60f85c77c681a5c61a87970388318e794188) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add upload component

### Patch Changes

- Updated dependencies []:
  - @italia/i18n@1.0.0-alpha.9

## 1.0.0-alpha.8

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/i18n@1.0.0-alpha.8

## 1.0.0-alpha.7

### Patch Changes

- [#316](https://github.com/italia/dev-kit-italia/pull/316) [`572df4d`](https://github.com/italia/dev-kit-italia/commit/572df4dfe4e249cc98aa6650a2bf8f9726794f40) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Added it-toggle component as an extension of it-checkbox

- Updated dependencies []:
  - @italia/i18n@1.0.0-alpha.7

## 1.0.0-alpha.6

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/i18n@1.0.0-alpha.6

## 1.0.0-alpha.5

### Minor Changes

- [#225](https://github.com/italia/dev-kit-italia/pull/225) [`57f1319`](https://github.com/italia/dev-kit-italia/commit/57f1319bb9db5d1b4a5811ccf16e46cc09e83e8f) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added modal component

### Patch Changes

- Updated dependencies [[`18e1e61`](https://github.com/italia/dev-kit-italia/commit/18e1e61c9e999713ffc1965a547d08919808dc77)]:
  - @italia/i18n@1.0.0-alpha.5

## 1.0.0-alpha.4

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/i18n@1.0.0-alpha.4

## 1.0.0-alpha.3

### Minor Changes

- [#231](https://github.com/italia/dev-kit-italia/pull/231) [`dd0a212`](https://github.com/italia/dev-kit-italia/commit/dd0a212d90c8babe430838845962d03d61aea59e) Thanks [@pnicolli](https://github.com/pnicolli)! - Added global variable with current kit version number

- [#127](https://github.com/italia/dev-kit-italia/pull/127) [`1c9b7b4`](https://github.com/italia/dev-kit-italia/commit/1c9b7b484ca631a2f72a3eb5179997a0852f6539) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Added checkbox component

### Patch Changes

- [#222](https://github.com/italia/dev-kit-italia/pull/222) [`a4a9ba0`](https://github.com/italia/dev-kit-italia/commit/a4a9ba03667e46dcabf104ec4ef24f76c5f5e10c) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Fixed form elements validation

- [#172](https://github.com/italia/dev-kit-italia/pull/172) [`f0503f1`](https://github.com/italia/dev-kit-italia/commit/f0503f19d34ea15e1953d5ff35c345719fe0d6d2) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - fix: docs for input and number-input

- Updated dependencies []:
  - @italia/i18n@1.0.0-alpha.3

## 0.1.0-alpha.2

### Minor Changes

- [#125](https://github.com/italia/dev-kit-italia/pull/125) [`3fed78e`](https://github.com/italia/dev-kit-italia/commit/3fed78ef91bc13d0b035fe93928a0e37e93769a8) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Aggiunto componente it-avatar e integrato con chip e dropdown

- [#118](https://github.com/italia/dev-kit-italia/pull/118) [`0cce260`](https://github.com/italia/dev-kit-italia/commit/0cce2609f1cceafe234752515a07dad09f791650) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added sticky component

- [#130](https://github.com/italia/dev-kit-italia/pull/130) [`54837ca`](https://github.com/italia/dev-kit-italia/commit/54837ca890f854d8f6d8566208f9980505e3a731) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Implemented radio components

- [#120](https://github.com/italia/dev-kit-italia/pull/120) [`7122eec`](https://github.com/italia/dev-kit-italia/commit/7122eec5bdf1fecfe66b1aabc0226c70aff48e2e) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Refactor form component and created FormControl extendable class"

- [#78](https://github.com/italia/dev-kit-italia/pull/78) [`21d2248`](https://github.com/italia/dev-kit-italia/commit/21d22487a1a0df53243b74649259d9a1a371b03b) Thanks [@pnicolli](https://github.com/pnicolli)! - Rinominato in Dev Kit Italia

- [#20](https://github.com/italia/dev-kit-italia/pull/20) [`aaee9d2`](https://github.com/italia/dev-kit-italia/commit/aaee9d239947841503c728b93bda29a7446bfee0) Thanks [@pnicolli](https://github.com/pnicolli)! - Aggiornato il metodo base composeClass per usare clsx.

  Aggiunto ReactiveController per la gestione della tastiera.

- [#111](https://github.com/italia/dev-kit-italia/pull/111) [`27fb740`](https://github.com/italia/dev-kit-italia/commit/27fb74084e3807ab9b2c1ee37ebb765607bee2df) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added accordion component

### Patch Changes

- [#106](https://github.com/italia/dev-kit-italia/pull/106) [`8f6b980`](https://github.com/italia/dev-kit-italia/commit/8f6b98046ceeb5ef69f4a31b0866d2659dc75bb0) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Fixed validation on untouched form submit

- Updated dependencies [[`21d2248`](https://github.com/italia/dev-kit-italia/commit/21d22487a1a0df53243b74649259d9a1a371b03b)]:
  - @italia/i18n@0.1.0-alpha.2

## 0.1.0-alpha.1

### Minor Changes

- [#13](https://github.com/italia/dev-kit-italia/pull/13) [`05429af`](https://github.com/italia/dev-kit-italia/commit/05429af9465b4af9b8301fc60691263dffcc00d7) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Aggiunto componente it-input e gestita la validazione di form.

### Patch Changes

- Updated dependencies [[`05429af`](https://github.com/italia/dev-kit-italia/commit/05429af9465b4af9b8301fc60691263dffcc00d7)]:
  - @italia/i18n@0.1.0-alpha.1

## 0.0.1-alpha.0

### Patch Changes

- [#95](https://github.com/italia/dev-kit-italia/pull/95) [`5e6ae5a`](https://github.com/italia/dev-kit-italia/commit/5e6ae5ae7ef1aad2c6e7871d91b4aec94ee5a6c3) Thanks [@pnicolli](https://github.com/pnicolli)! - Aggiunta configurazione di rilascio tramite changesets

- Updated dependencies [[`5e6ae5a`](https://github.com/italia/dev-kit-italia/commit/5e6ae5ae7ef1aad2c6e7871d91b4aec94ee5a6c3)]:
  - @italia/i18n@0.0.1-alpha.0
