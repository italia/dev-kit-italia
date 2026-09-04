# @italia/timeline

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

### Patch Changes

- [#451](https://github.com/italia/dev-kit-italia/pull/451) [`1229840`](https://github.com/italia/dev-kit-italia/commit/1229840fe4d205da7d4b114f87d95462f6dd8256) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Fix multiple a11y issues in timeline (closes #71):
  - Classic timeline examples: set `heading-level="h4"` on `it-card` inside `it-timeline-element heading-level="h3"` to restore correct heading hierarchy across all framework examples and Storybook docs
  - Docs: fix accessibility callout that incorrectly referenced `it-breadcrumbs` instead of `it-timeline`
  - Point-list: remove the extra `<div class="timeline-point">` wrapper from shadow DOM — the host element (`role="listitem"`) is now the flex row itself, removing a spurious div between the `ol`/`ul` and row content
  - Point-list: add `role="list"` to the rendered `ol`/`ul` to preserve Safari list semantics after `list-style: none` (same fix as bottom-nav #428); replace the no-op `ol::marker` hack
  - Classic timeline pin badge: pill border-radius and monospace font
- Updated dependencies [[`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832)]:
  - @italia/globals@1.0.0-alpha.19

## 1.0.0-alpha.18

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.18

## 1.0.0-alpha.17

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.17

## 1.0.0-alpha.16

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.16

## 1.0.0-alpha.15

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.15

## 1.0.0-alpha.14

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.14

## 1.0.0-alpha.13

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.13

## 1.0.0-alpha.12

### Minor Changes

- [#346](https://github.com/italia/dev-kit-italia/pull/346) [`ff9981d`](https://github.com/italia/dev-kit-italia/commit/ff9981d4ec7414bcb717c31d3c026c5fc20fa156) Thanks [@pnicolli](https://github.com/pnicolli)! - Refactoring to migrate from old sass imports to new use/forward syntax. Removed several silenced warnings.

### Patch Changes

- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.12

## 1.0.0-alpha.11

### Patch Changes

- Aggiornamento della versione
- Updated dependencies []:
  - @italia/globals@1.0.0-alpha.11

## 1.0.0-alpha.10

### Patch Changes

- Aggiornamento della versione
- Updated dependencies [[`a1bc1fb`](https://github.com/italia/dev-kit-italia/commit/a1bc1fb60b4adf11507d455e18a4fd900d41fe5a)]:
  - @italia/globals@1.0.0-alpha.10

## 1.0.0-alpha.9

### Minor Changes

- [`1201f1e`](https://github.com/italia/dev-kit-italia/commit/1201f1e4399f21beb25042a40917d6ad20e8b1dc) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added timeline component

- [#358](https://github.com/italia/dev-kit-italia/pull/358) [`95cb4d6`](https://github.com/italia/dev-kit-italia/commit/95cb4d62fa58c497960fdf602345dc91afe99e99) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Typography variables changes introduced in bsi recent alphas

### Patch Changes

- Updated dependencies [[`b00d9b2`](https://github.com/italia/dev-kit-italia/commit/b00d9b262bec00d3a036e6a38ec8a0e4975d0474), [`fef3f8b`](https://github.com/italia/dev-kit-italia/commit/fef3f8bdde69cebe93c4b5d3b0fd75701f588188), [`a5ee60f`](https://github.com/italia/dev-kit-italia/commit/a5ee60f85c77c681a5c61a87970388318e794188)]:
  - @italia/globals@1.0.0-alpha.9

## 1.0.0-alpha.1

### Minor Changes

- Added timeline component (`it-timeline`, `it-timeline-element`, `it-timeline-point-list`, `it-timeline-point`)
