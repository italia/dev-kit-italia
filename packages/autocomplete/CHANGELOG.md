# @italia/autocomplete

## 1.0.0-beta.1

### Minor Changes

- [#458](https://github.com/italia/dev-kit-italia/pull/458) [`1fd9fda`](https://github.com/italia/dev-kit-italia/commit/1fd9fdab8e3f2e9c7ba799e233306e66832835d4) Thanks [@pnicolli](https://github.com/pnicolli)! - Unified the README file of all components packages, made special packages more consistent (i18n, globals, dev-kit-italia)

### Patch Changes

- [#485](https://github.com/italia/dev-kit-italia/pull/485) [`25deaa0`](https://github.com/italia/dev-kit-italia/commit/25deaa012849ae26ba05f2ebb87532e64b1a5c64) Thanks [@astagi](https://github.com/astagi)! - Updated to bootstrap-italia 3.0.0-beta.4

- Updated dependencies [[`1fd9fda`](https://github.com/italia/dev-kit-italia/commit/1fd9fdab8e3f2e9c7ba799e233306e66832835d4)]:
  - @italia/globals@1.0.0-beta.1
  - @italia/i18n@1.0.0-beta.1
  - @italia/icon@1.0.0-beta.1

## 1.0.0-beta.0

### Major Changes

- [#465](https://github.com/italia/dev-kit-italia/pull/465) [`3cfe4eb`](https://github.com/italia/dev-kit-italia/commit/3cfe4ebcbb253b7b81f17d99a864d7a3bfe8b024) Thanks [@astagi](https://github.com/astagi)! - Beta release

### Patch Changes

- Updated dependencies [[`3cfe4eb`](https://github.com/italia/dev-kit-italia/commit/3cfe4ebcbb253b7b81f17d99a864d7a3bfe8b024)]:
  - @italia/globals@1.0.0-beta.0
  - @italia/i18n@1.0.0-beta.0
  - @italia/icon@1.0.0-beta.0

## 1.0.0-alpha.19

### Patch Changes

- [#452](https://github.com/italia/dev-kit-italia/pull/452) [`96498b1`](https://github.com/italia/dev-kit-italia/commit/96498b1918e1cd9a905e1388d8fd40e1d6d8c625) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Addressed screen reader findings from issue #43
  - The assistive hint is now `aria-hidden="true"`, so it is announced once as the input's description (via `aria-describedby`) instead of being read a second time as a standalone element when navigating by element.
  - The `role="status"` live region is now reset to empty after an option is selected, when the query drops below `minLength`, and when the listbox is dismissed (Escape/Tab/click-outside), so a stale "N results available" message is no longer reachable after the field is no longer searching.

- Updated dependencies [[`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832)]:
  - @italia/globals@1.0.0-alpha.19
  - @italia/i18n@1.0.0-alpha.19
  - @italia/icon@1.0.0-alpha.19

## 1.0.0-alpha.18

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.18
  - @italia/i18n@1.0.0-alpha.18
  - @italia/icon@1.0.0-alpha.18

## 1.0.0-alpha.17

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.17
  - @italia/i18n@1.0.0-alpha.17
  - @italia/icon@1.0.0-alpha.17

## 1.0.0-alpha.16

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.16
  - @italia/i18n@1.0.0-alpha.16
  - @italia/icon@1.0.0-alpha.16

## 1.0.0-alpha.15

### Patch Changes

- [`5a955c2`](https://github.com/italia/dev-kit-italia/commit/5a955c285a2a25d79e40d3058d6b45be6c44c82d) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - enable attribute it-aria-controls on it-autocomplete component

- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.15
  - @italia/i18n@1.0.0-alpha.15
  - @italia/icon@1.0.0-alpha.15

## 1.0.0-alpha.14

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.14
  - @italia/i18n@1.0.0-alpha.14
  - @italia/icon@1.0.0-alpha.14

## 1.0.0-alpha.13

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.13
  - @italia/i18n@1.0.0-alpha.13
  - @italia/icon@1.0.0-alpha.13

## 1.0.0-alpha.12

### Minor Changes

- [#346](https://github.com/italia/dev-kit-italia/pull/346) [`ff9981d`](https://github.com/italia/dev-kit-italia/commit/ff9981d4ec7414bcb717c31d3c026c5fc20fa156) Thanks [@pnicolli](https://github.com/pnicolli)! - Refactoring to migrate from old sass imports to new use/forward syntax. Removed several silenced warnings.

### Patch Changes

- [`1943e3c`](https://github.com/italia/dev-kit-italia/commit/1943e3c959f5abc15caa4595ccf57ad4ff50a135) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Fixed a11y

- Updated dependencies [[`ff9981d`](https://github.com/italia/dev-kit-italia/commit/ff9981d4ec7414bcb717c31d3c026c5fc20fa156)]:
  - @italia/icon@1.0.0-alpha.12
  - @italia/globals@1.0.0-alpha.12
  - @italia/i18n@1.0.0-alpha.12

## 1.0.0-alpha.11

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.11
  - @italia/i18n@1.0.0-alpha.11
  - @italia/icon@1.0.0-alpha.11

## 1.0.0-alpha.10

### Patch Changes

- Aggiornamento della versione
- Updated dependencies [[`900b2f7`](https://github.com/italia/dev-kit-italia/commit/900b2f75dccf49d05325443f50f6215ad2f6d18b), [`a1bc1fb`](https://github.com/italia/dev-kit-italia/commit/a1bc1fb60b4adf11507d455e18a4fd900d41fe5a)]:
  - @italia/i18n@1.0.0-alpha.10
  - @italia/globals@1.0.0-alpha.10
  - @italia/icon@1.0.0-alpha.10

## 1.0.0-alpha.9

### Patch Changes

- Aggiornamento della versione
- Updated dependencies [[`b00d9b2`](https://github.com/italia/dev-kit-italia/commit/b00d9b262bec00d3a036e6a38ec8a0e4975d0474), [`fef3f8b`](https://github.com/italia/dev-kit-italia/commit/fef3f8bdde69cebe93c4b5d3b0fd75701f588188), [`a5ee60f`](https://github.com/italia/dev-kit-italia/commit/a5ee60f85c77c681a5c61a87970388318e794188)]:
  - @italia/globals@1.0.0-alpha.9
  - @italia/i18n@1.0.0-alpha.9
  - @italia/icon@1.0.0-alpha.9

## 1.0.0-alpha.8

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.8
  - @italia/i18n@1.0.0-alpha.8
  - @italia/icon@1.0.0-alpha.8

## 1.0.0-alpha.7

### Patch Changes

- Aggiornamento della versione
- Updated dependencies [[`572df4d`](https://github.com/italia/dev-kit-italia/commit/572df4dfe4e249cc98aa6650a2bf8f9726794f40)]:
  - @italia/globals@1.0.0-alpha.7
  - @italia/i18n@1.0.0-alpha.7
  - @italia/icon@1.0.0-alpha.7

## 1.0.0-alpha.6

### Patch Changes

- Aggiornamento della versione
- Updated dependencies [[`e556822`](https://github.com/italia/dev-kit-italia/commit/e55682290e80bcfc68cd8d835d96b77abd276b46)]:
  - @italia/icon@1.0.0-alpha.6
  - @italia/globals@1.0.0-alpha.6
  - @italia/i18n@1.0.0-alpha.6

## 1.0.0-alpha.5

### Minor Changes

- [#255](https://github.com/italia/dev-kit-italia/pull/255) [`7e9a9be`](https://github.com/italia/dev-kit-italia/commit/7e9a9be9346207bcc8be4760662b1cee4aa620cf) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add it-autocomplete component

### Patch Changes

- Updated dependencies [[`57f1319`](https://github.com/italia/dev-kit-italia/commit/57f1319bb9db5d1b4a5811ccf16e46cc09e83e8f), [`18e1e61`](https://github.com/italia/dev-kit-italia/commit/18e1e61c9e999713ffc1965a547d08919808dc77)]:
  - @italia/globals@1.0.0-alpha.5
  - @italia/i18n@1.0.0-alpha.5
  - @italia/icon@1.0.0-alpha.5
