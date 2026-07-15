# @italia/back

## 1.0.0-alpha.19

### Minor Changes

- [#456](https://github.com/italia/dev-kit-italia/pull/456) [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add back component (`it-back`)
  - New light-DOM enhancer providing a default `history.back()` on click of `.go-back`, via a cancelable `it-back-navigate` event — call `event.preventDefault()` to run custom navigation logic instead (e.g. integrating with a framework router).
  - Framework examples (vanilla, react, vue, svelte, angular) updated to demonstrate router-integrated back navigation.

### Patch Changes

- Updated dependencies [[`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832)]:
  - @italia/globals@1.0.0-alpha.19
