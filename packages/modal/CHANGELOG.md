# Changelog

## 1.0.0-beta.3

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/button@1.0.0-beta.3
  - @italia/globals@1.0.0-beta.3
  - @italia/icon@1.0.0-beta.3

## 1.0.0-beta.2

### Patch Changes

- [`87c09ca`](https://github.com/italia/dev-kit-italia/commit/87c09ca0e1d8ffc77344e5bfb30bf6d4a3a7b59d) Thanks [@pnicolli](https://github.com/pnicolli)! - Fixed release packaging

- Updated dependencies [[`87c09ca`](https://github.com/italia/dev-kit-italia/commit/87c09ca0e1d8ffc77344e5bfb30bf6d4a3a7b59d)]:
  - @italia/button@1.0.0-beta.2
  - @italia/globals@1.0.0-beta.2
  - @italia/icon@1.0.0-beta.2

## 1.0.0-beta.1

### Minor Changes

- [#458](https://github.com/italia/dev-kit-italia/pull/458) [`1fd9fda`](https://github.com/italia/dev-kit-italia/commit/1fd9fdab8e3f2e9c7ba799e233306e66832835d4) Thanks [@pnicolli](https://github.com/pnicolli)! - Unified the README file of all components packages, made special packages more consistent (i18n, globals, dev-kit-italia)

### Patch Changes

- [#495](https://github.com/italia/dev-kit-italia/pull/495) [`7df75f1`](https://github.com/italia/dev-kit-italia/commit/7df75f1ae0665be7c11043737ca019bef83e696f) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Fix dialog role announcement in `it-modal` with NVDA
  - The initial focus now enters on `.modal-content` instead of the `[role="dialog"]` element. NVDA doesn't announce the role when focus lands on the dialog element itself ([nvaccess/nvda#8620](https://github.com/nvaccess/nvda/issues/8620)): users were told the name of the modal but not that it was a dialog, while VoiceOver, JAWS and Narrator announced it correctly. Entering on a descendant has the dialog announced as its ancestor, role included. `.modal-content` is a container and not a control, so its content is still read out after the announcement, as it was before.
  - This also covers the mobile menus of `it-header` and `it-navscroll`, which are `it-modal` instances.
  - Removed `role="document"` from `.modal-dialog`. It was the ARIA 1.0 pattern for letting screen readers switch back to browse mode inside a dialog, superseded by `aria-modal="true"`, and NVDA announced it as "document" right after the dialog role on entering the modal.
  - Removed `#safari-focus-anchor`: it had been left unused since the VoiceOver iOS workarounds moved to the timers in `FocusTrapController`.

- [#507](https://github.com/italia/dev-kit-italia/pull/507) [`8583808`](https://github.com/italia/dev-kit-italia/commit/8583808a10437ff7dfc44a6ce5886315a7b35fa8) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Fix header on mobile. Make optional to focus on close button on modal open.

- Updated dependencies [[`1fd9fda`](https://github.com/italia/dev-kit-italia/commit/1fd9fdab8e3f2e9c7ba799e233306e66832835d4)]:
  - @italia/globals@1.0.0-beta.1
  - @italia/button@1.0.0-beta.1
  - @italia/icon@1.0.0-beta.1

## 1.0.0-beta.0

### Major Changes

- [#465](https://github.com/italia/dev-kit-italia/pull/465) [`3cfe4eb`](https://github.com/italia/dev-kit-italia/commit/3cfe4ebcbb253b7b81f17d99a864d7a3bfe8b024) Thanks [@astagi](https://github.com/astagi)! - Beta release

### Patch Changes

- Updated dependencies [[`3cfe4eb`](https://github.com/italia/dev-kit-italia/commit/3cfe4ebcbb253b7b81f17d99a864d7a3bfe8b024)]:
  - @italia/button@1.0.0-beta.0
  - @italia/globals@1.0.0-beta.0
  - @italia/icon@1.0.0-beta.0

## 1.0.0-alpha.19

### Minor Changes

- [#456](https://github.com/italia/dev-kit-italia/pull/456) [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832) Thanks [@deodorhunter](https://github.com/deodorhunter)! - `it-modal-open` and `it-modal-close` are now cancelable: calling `event.preventDefault()` stops the modal from opening/closing, so consumers can intercept the action and resume it later via `show()`/`hide()`. `toggle()` now delegates to `show()`/`hide()` so it respects the same cancellation.

### Patch Changes

- Updated dependencies [[`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832)]:
  - @italia/globals@1.0.0-alpha.19
  - @italia/button@1.0.0-alpha.19
  - @italia/icon@1.0.0-alpha.19

## 1.0.0-alpha.18

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/button@1.0.0-alpha.18
  - @italia/globals@1.0.0-alpha.18
  - @italia/icon@1.0.0-alpha.18

## 1.0.0-alpha.17

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/button@1.0.0-alpha.17
  - @italia/globals@1.0.0-alpha.17
  - @italia/icon@1.0.0-alpha.17

## 1.0.0-alpha.16

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/button@1.0.0-alpha.16
  - @italia/globals@1.0.0-alpha.16
  - @italia/icon@1.0.0-alpha.16

## 1.0.0-alpha.15

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/button@1.0.0-alpha.15
  - @italia/globals@1.0.0-alpha.15
  - @italia/icon@1.0.0-alpha.15

## 1.0.0-alpha.14

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/button@1.0.0-alpha.14
  - @italia/globals@1.0.0-alpha.14
  - @italia/icon@1.0.0-alpha.14

## 1.0.0-alpha.13

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/button@1.0.0-alpha.13
  - @italia/globals@1.0.0-alpha.13
  - @italia/icon@1.0.0-alpha.13

## 1.0.0-alpha.12

### Minor Changes

- [#346](https://github.com/italia/dev-kit-italia/pull/346) [`ff9981d`](https://github.com/italia/dev-kit-italia/commit/ff9981d4ec7414bcb717c31d3c026c5fc20fa156) Thanks [@pnicolli](https://github.com/pnicolli)! - Refactoring to migrate from old sass imports to new use/forward syntax. Removed several silenced warnings.

### Patch Changes

- Updated dependencies [[`ff9981d`](https://github.com/italia/dev-kit-italia/commit/ff9981d4ec7414bcb717c31d3c026c5fc20fa156)]:
  - @italia/button@1.0.0-alpha.12
  - @italia/icon@1.0.0-alpha.12
  - @italia/globals@1.0.0-alpha.12

## 1.0.0-alpha.11

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/button@1.0.0-alpha.11
  - @italia/globals@1.0.0-alpha.11
  - @italia/icon@1.0.0-alpha.11

## 1.0.0-alpha.10

### Patch Changes

- [#94](https://github.com/italia/dev-kit-italia/pull/94) [`a1bc1fb`](https://github.com/italia/dev-kit-italia/commit/a1bc1fb60b4adf11507d455e18a4fd900d41fe5a) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added header component

- Updated dependencies [[`a1bc1fb`](https://github.com/italia/dev-kit-italia/commit/a1bc1fb60b4adf11507d455e18a4fd900d41fe5a)]:
  - @italia/globals@1.0.0-alpha.10
  - @italia/button@1.0.0-alpha.10
  - @italia/icon@1.0.0-alpha.10

## 1.0.0-alpha.9

### Minor Changes

- [#293](https://github.com/italia/dev-kit-italia/pull/293) [`fef3f8b`](https://github.com/italia/dev-kit-italia/commit/fef3f8bdde69cebe93c4b5d3b0fd75701f588188) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Handle Safari bugs and quirks in it-modal and focus-trap-controller

- [#352](https://github.com/italia/dev-kit-italia/pull/352) [`a5ee60f`](https://github.com/italia/dev-kit-italia/commit/a5ee60f85c77c681a5c61a87970388318e794188) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add upload component

### Patch Changes

- [`d12b0cb`](https://github.com/italia/dev-kit-italia/commit/d12b0cbcd0862320e601c24fd85d82ff7f7e657d) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Fixed docs link to others components

- Updated dependencies [[`b00d9b2`](https://github.com/italia/dev-kit-italia/commit/b00d9b262bec00d3a036e6a38ec8a0e4975d0474), [`fef3f8b`](https://github.com/italia/dev-kit-italia/commit/fef3f8bdde69cebe93c4b5d3b0fd75701f588188), [`a5ee60f`](https://github.com/italia/dev-kit-italia/commit/a5ee60f85c77c681a5c61a87970388318e794188)]:
  - @italia/globals@1.0.0-alpha.9
  - @italia/button@1.0.0-alpha.9
  - @italia/icon@1.0.0-alpha.9

## 1.0.0-alpha.8

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/button@1.0.0-alpha.8
  - @italia/globals@1.0.0-alpha.8
  - @italia/icon@1.0.0-alpha.8

## 1.0.0-alpha.7

### Patch Changes

- [#320](https://github.com/italia/dev-kit-italia/pull/320) [`8373579`](https://github.com/italia/dev-kit-italia/commit/83735794eec3ec027554983823830cb28fe3b68c) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Added it-progress component

- [#320](https://github.com/italia/dev-kit-italia/pull/320) [`8373579`](https://github.com/italia/dev-kit-italia/commit/83735794eec3ec027554983823830cb28fe3b68c) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Removed attribute "icon" from it-button because self-managed

- Updated dependencies [[`8373579`](https://github.com/italia/dev-kit-italia/commit/83735794eec3ec027554983823830cb28fe3b68c), [`572df4d`](https://github.com/italia/dev-kit-italia/commit/572df4dfe4e249cc98aa6650a2bf8f9726794f40), [`8373579`](https://github.com/italia/dev-kit-italia/commit/83735794eec3ec027554983823830cb28fe3b68c)]:
  - @italia/button@1.0.0-alpha.7
  - @italia/globals@1.0.0-alpha.7
  - @italia/icon@1.0.0-alpha.7

## 1.0.0-alpha.6

### Minor Changes

- [#274](https://github.com/italia/dev-kit-italia/pull/274) [`1a76d13`](https://github.com/italia/dev-kit-italia/commit/1a76d13c61c4836508ccdf54ccc018114c7408cb) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Update it-modal docs

### Patch Changes

- Updated dependencies [[`e556822`](https://github.com/italia/dev-kit-italia/commit/e55682290e80bcfc68cd8d835d96b77abd276b46)]:
  - @italia/button@1.0.0-alpha.6
  - @italia/icon@1.0.0-alpha.6
  - @italia/globals@1.0.0-alpha.6

## 1.0.0-alpha.5

### Minor Changes

- [#225](https://github.com/italia/dev-kit-italia/pull/225) [`57f1319`](https://github.com/italia/dev-kit-italia/commit/57f1319bb9db5d1b4a5811ccf16e46cc09e83e8f) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added modal component

### Patch Changes

- Updated dependencies [[`57f1319`](https://github.com/italia/dev-kit-italia/commit/57f1319bb9db5d1b4a5811ccf16e46cc09e83e8f), [`f8d05ee`](https://github.com/italia/dev-kit-italia/commit/f8d05eed0c38744e77788499175ec85901c4e092)]:
  - @italia/globals@1.0.0-alpha.5
  - @italia/button@1.0.0-alpha.5
  - @italia/icon@1.0.0-alpha.5

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0-alpha.2] - 2025-12-01

### Added

- Implementazione iniziale del componente `it-modal`
- Supporto completo accessibilità WAI-ARIA
- Varianti: alert, popconfirm, link-list
- Dimensioni: sm, lg, xl
- Posizionamento: center, left, right
- Focus trap e gestione tastiera
- Eventi: it-modal-show, it-modal-shown, it-modal-hide, it-modal-hidden
