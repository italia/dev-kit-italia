# @italia/dev-kit-italia

## 1.0.0-beta.20

### Major Changes

- [#465](https://github.com/italia/dev-kit-italia/pull/465) [`3cfe4eb`](https://github.com/italia/dev-kit-italia/commit/3cfe4ebcbb253b7b81f17d99a864d7a3bfe8b024) Thanks [@astagi](https://github.com/astagi)! - Beta release

### Patch Changes

- Updated dependencies [[`3cfe4eb`](https://github.com/italia/dev-kit-italia/commit/3cfe4ebcbb253b7b81f17d99a864d7a3bfe8b024)]:
  - @italia/accordion@1.0.0-beta.20
  - @italia/alert@1.0.0-beta.20
  - @italia/autocomplete@1.0.0-beta.20
  - @italia/avatar@1.0.0-beta.20
  - @italia/back@1.0.0-beta.20
  - @italia/back-to-top@1.0.0-beta.20
  - @italia/bottom-nav@1.0.0-beta.20
  - @italia/breadcrumbs@1.0.0-beta.20
  - @italia/button@1.0.0-beta.20
  - @italia/callout@1.0.0-beta.20
  - @italia/card@1.0.0-beta.20
  - @italia/carousel@1.0.0-beta.20
  - @italia/checkbox@1.0.0-beta.20
  - @italia/chip@1.0.0-beta.20
  - @italia/collapse@1.0.0-beta.20
  - @italia/dimmer@1.0.0-beta.20
  - @italia/dropdown@1.0.0-beta.20
  - @italia/forward@1.0.0-beta.20
  - @italia/header@1.0.0-beta.20
  - @italia/hero@1.0.0-beta.20
  - @italia/i18n@1.0.0-beta.20
  - @italia/icon@1.0.0-beta.20
  - @italia/input@1.0.0-beta.20
  - @italia/megamenu@1.0.0-beta.20
  - @italia/modal@1.0.0-beta.20
  - @italia/navscroll@1.0.0-beta.20
  - @italia/notification@1.0.0-beta.20
  - @italia/pagination@1.0.0-beta.20
  - @italia/popover@1.0.0-beta.20
  - @italia/progress@1.0.0-beta.20
  - @italia/radio@1.0.0-beta.20
  - @italia/rating@1.0.0-beta.20
  - @italia/section@1.0.0-beta.20
  - @italia/select@1.0.0-beta.20
  - @italia/skiplinks@1.0.0-beta.20
  - @italia/stepper@1.0.0-beta.20
  - @italia/sticky@1.0.0-beta.20
  - @italia/tabs@1.0.0-beta.20
  - @italia/thumbnav@1.0.0-beta.20
  - @italia/timeline@1.0.0-beta.20
  - @italia/toggle@1.0.0-beta.20
  - @italia/toolbar@1.0.0-beta.20
  - @italia/tooltip@1.0.0-beta.20
  - @italia/transfer@1.0.0-beta.20
  - @italia/upload@1.0.0-beta.20
  - @italia/video@1.0.0-beta.20

## 1.0.0-alpha.19

### Minor Changes

- [#456](https://github.com/italia/dev-kit-italia/pull/456) [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add alert component (`it-alert`)
  - New light-DOM enhancer for Bootstrap Italia's `.alert` markup: auto-sets `role="alert"` and maps the `variant` attribute to the correct `alert-{variant}` class.
  - Sensible default behavior: fade + remove on `.btn-close` click, via a cancelable `it-alert-close` event and a public `close()` method — call `event.preventDefault()` to intercept the close (e.g. async confirmation) and `close()` later.
  - Stories/MDX updated to wrap alert examples in `<it-alert variant>` and document the auto role/variant mapping and its accessibility implications.
  - Focus on close: shifts to an adjacent alert's close button when one exists; otherwise falls back to a `tabindex`-bearing ancestor, and now further falls back to the nearest focusable element anywhere in the document — the common case in practice, since most usages don't add that ancestor. Previously focus was silently lost to `<body>` in that case.

- [#456](https://github.com/italia/dev-kit-italia/pull/456) [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add back component (`it-back`)
  - New light-DOM enhancer providing a default `history.back()` on click of `.go-back`, via a cancelable `it-back-navigate` event — call `event.preventDefault()` to run custom navigation logic instead (e.g. integrating with a framework router).
  - Framework examples (vanilla, react, vue, svelte, angular) updated to demonstrate router-integrated back navigation.

- [#456](https://github.com/italia/dev-kit-italia/pull/456) [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add forward component (`it-forward`)
  - New light-DOM enhancer providing a default smooth-scroll on link click, via a cancelable `it-forward-navigate` event — call `event.preventDefault()` to run custom navigation logic instead.
  - Added an interactive "custom logic" canvas to the stories/MDX.

- [#456](https://github.com/italia/dev-kit-italia/pull/456) [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832) Thanks [@deodorhunter](https://github.com/deodorhunter)! - `it-chip` now removes itself by default when its dismiss button is clicked, via a cancelable `it-chip-close` event and a new public `close()` method — call `event.preventDefault()` to intercept the removal (e.g. async confirmation) and `close()` later.

  Focus on close: shifts to an adjacent chip's dismiss button, but only if that neighbor is also `dismissable` — a plain label or link chip sitting next to it is no longer treated as an equivalent "next item to remove". Falls back to a `tabindex`-bearing ancestor, and now further to the nearest focusable element anywhere in the document when no such ancestor exists (the common case in practice) — previously focus was silently lost to `<body>` in that case.

- [#456](https://github.com/italia/dev-kit-italia/pull/456) [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832) Thanks [@deodorhunter](https://github.com/deodorhunter)! - `it-modal-open` and `it-modal-close` are now cancelable: calling `event.preventDefault()` stops the modal from opening/closing, so consumers can intercept the action and resume it later via `show()`/`hide()`. `toggle()` now delegates to `show()`/`hide()` so it respects the same cancellation.

- [#456](https://github.com/italia/dev-kit-italia/pull/456) [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832) Thanks [@deodorhunter](https://github.com/deodorhunter)! - `it-notification` now fires `it-notification-show` and `it-notification-close` custom events (not cancelable — show/close are always caller-initiated, so there was no real use case for blocking them). `it-notification-close` covers the close button, the auto-dismiss timeout and any programmatic `hide()` call.

  Also fixed: dismissing a notification while focus is on its own close button no longer silently drops focus to `<body>`. Focus is restored to whatever was focused right before `show()` was called (typically the button that triggered it — there is no author-provided trigger slot to target like `it-modal` has), falling back to a `tabindex`-bearing ancestor and then to the nearest focusable element in the document if that original element is gone.

- [#429](https://github.com/italia/dev-kit-italia/pull/429) [`97ad0e3`](https://github.com/italia/dev-kit-italia/commit/97ad0e3c888380d61ad3ad0680c875b65c4fa848) Thanks [@pnicolli](https://github.com/pnicolli)! - Renamed full.css to styles-for-migration.css

- [#462](https://github.com/italia/dev-kit-italia/pull/462) [`1a8774e`](https://github.com/italia/dev-kit-italia/commit/1a8774eecc7eae5ef97ceb4cc93b0da273a68610) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added SSR documentation and a Next.js example app: how to avoid crashes and reach HTML-first hydration in Next.js, SvelteKit and other SSR frameworks (#360)

- [#429](https://github.com/italia/dev-kit-italia/pull/429) [`97ad0e3`](https://github.com/italia/dev-kit-italia/commit/97ad0e3c888380d61ad3ad0680c875b65c4fa848) Thanks [@pnicolli](https://github.com/pnicolli)! - Added docs for migrating from bootstrap-italia

- [#456](https://github.com/italia/dev-kit-italia/pull/456) [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add `commit(detail)` method to `it-transfer`, applying a previously cancelled `it-transfer` event (move to target, move back to source, or reset) without re-dispatching it — enables async confirmation patterns (API calls, user prompts) after `event.preventDefault()`, with no bypass flag needed.

### Patch Changes

- Updated dependencies [[`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832), [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832), [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832), [`aa77369`](https://github.com/italia/dev-kit-italia/commit/aa773695e73e24c05fe27db62a99b971f7fd3490), [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832), [`f9dd0a8`](https://github.com/italia/dev-kit-italia/commit/f9dd0a88f6ead92614b27a65bcbfc77553ab06c7), [`976ade9`](https://github.com/italia/dev-kit-italia/commit/976ade9c2cce7b54f97abf4f3e24129be7f626be), [`96498b1`](https://github.com/italia/dev-kit-italia/commit/96498b1918e1cd9a905e1388d8fd40e1d6d8c625), [`7d41b05`](https://github.com/italia/dev-kit-italia/commit/7d41b05d8ccf93a6096e1927bf3d0b14d647ee81), [`231ec99`](https://github.com/italia/dev-kit-italia/commit/231ec99eb950292f5040793d419b49ae30943d1e), [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832), [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832), [`5e0ecfc`](https://github.com/italia/dev-kit-italia/commit/5e0ecfc622bdafa22e471a5d7198d90a544260db), [`7f3551f`](https://github.com/italia/dev-kit-italia/commit/7f3551f6f2e015f0a7f4b252cdbc3859a8226903), [`1229840`](https://github.com/italia/dev-kit-italia/commit/1229840fe4d205da7d4b114f87d95462f6dd8256), [`812509a`](https://github.com/italia/dev-kit-italia/commit/812509a74574e01ff14b1c51232228381bfe6530), [`b2a220e`](https://github.com/italia/dev-kit-italia/commit/b2a220e413a514220a54b9bd9ff93887bba7c378), [`2cb911e`](https://github.com/italia/dev-kit-italia/commit/2cb911e970375e260010d5f1dd204eda5cab360a), [`7f3551f`](https://github.com/italia/dev-kit-italia/commit/7f3551f6f2e015f0a7f4b252cdbc3859a8226903), [`a413a25`](https://github.com/italia/dev-kit-italia/commit/a413a25137a6f483c171187e678748bb6c4c741a), [`7b23069`](https://github.com/italia/dev-kit-italia/commit/7b230696944bd32070dbadcb94e039ba4b4b9f19), [`b672540`](https://github.com/italia/dev-kit-italia/commit/b6725406bdc4faf9d0642150b409295751d15832), [`10102b4`](https://github.com/italia/dev-kit-italia/commit/10102b4bd2a7fc90b0957858a54613898b309acb), [`46dab26`](https://github.com/italia/dev-kit-italia/commit/46dab266b9a210d0a5680d231bced9f9945c5a13), [`10102b4`](https://github.com/italia/dev-kit-italia/commit/10102b4bd2a7fc90b0957858a54613898b309acb)]:
  - @italia/alert@1.0.0-alpha.19
  - @italia/back@1.0.0-alpha.19
  - @italia/forward@1.0.0-alpha.19
  - @italia/notification@1.0.0-alpha.19
  - @italia/chip@1.0.0-alpha.19
  - @italia/toolbar@1.0.0-alpha.19
  - @italia/hero@1.0.0-alpha.19
  - @italia/autocomplete@1.0.0-alpha.19
  - @italia/thumbnav@1.0.0-alpha.19
  - @italia/header@1.0.0-alpha.19
  - @italia/modal@1.0.0-alpha.19
  - @italia/breadcrumbs@1.0.0-alpha.19
  - @italia/tooltip@1.0.0-alpha.19
  - @italia/timeline@1.0.0-alpha.19
  - @italia/dropdown@1.0.0-alpha.19
  - @italia/megamenu@1.0.0-alpha.19
  - @italia/stepper@1.0.0-alpha.19
  - @italia/avatar@1.0.0-alpha.19
  - @italia/upload@1.0.0-alpha.19
  - @italia/transfer@1.0.0-alpha.19
  - @italia/navscroll@1.0.0-alpha.19
  - @italia/accordion@1.0.0-alpha.19
  - @italia/back-to-top@1.0.0-alpha.19
  - @italia/bottom-nav@1.0.0-alpha.19
  - @italia/button@1.0.0-alpha.19
  - @italia/callout@1.0.0-alpha.19
  - @italia/card@1.0.0-alpha.19
  - @italia/carousel@1.0.0-alpha.19
  - @italia/checkbox@1.0.0-alpha.19
  - @italia/collapse@1.0.0-alpha.19
  - @italia/dimmer@1.0.0-alpha.19
  - @italia/i18n@1.0.0-alpha.19
  - @italia/icon@1.0.0-alpha.19
  - @italia/input@1.0.0-alpha.19
  - @italia/pagination@1.0.0-alpha.19
  - @italia/popover@1.0.0-alpha.19
  - @italia/progress@1.0.0-alpha.19
  - @italia/radio@1.0.0-alpha.19
  - @italia/rating@1.0.0-alpha.19
  - @italia/section@1.0.0-alpha.19
  - @italia/select@1.0.0-alpha.19
  - @italia/skiplinks@1.0.0-alpha.19
  - @italia/sticky@1.0.0-alpha.19
  - @italia/tabs@1.0.0-alpha.19
  - @italia/toggle@1.0.0-alpha.19
  - @italia/video@1.0.0-alpha.19

## 1.0.0-alpha.18

### Minor Changes

- [#423](https://github.com/italia/dev-kit-italia/pull/423) [`855df3c`](https://github.com/italia/dev-kit-italia/commit/855df3c81a5c9037d1b706ae123ecafb3eb5b3a3) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Update carousel Storybook, examples, resolved styling issues, fix unique landmarks violations

- [#370](https://github.com/italia/dev-kit-italia/pull/370) [`b6142ed`](https://github.com/italia/dev-kit-italia/commit/b6142ed9ec3fc22daca2810346aab846c04f1287) Thanks [@pnicolli](https://github.com/pnicolli)! - Added `it-stepper` component

### Patch Changes

- Updated dependencies [[`23073ff`](https://github.com/italia/dev-kit-italia/commit/23073ff55d4f1606e723bdd42db7c64bc4c8a141), [`5cde271`](https://github.com/italia/dev-kit-italia/commit/5cde2712aad88ac8a16c69266e9c7f8826d11cf3), [`855df3c`](https://github.com/italia/dev-kit-italia/commit/855df3c81a5c9037d1b706ae123ecafb3eb5b3a3), [`2e97096`](https://github.com/italia/dev-kit-italia/commit/2e970961ebe5f2bfac050b445b81e88cdee75487), [`7c794fd`](https://github.com/italia/dev-kit-italia/commit/7c794fde49f70c8a42e63fa8d1123f14b4d52f21), [`b6142ed`](https://github.com/italia/dev-kit-italia/commit/b6142ed9ec3fc22daca2810346aab846c04f1287), [`7b28fbb`](https://github.com/italia/dev-kit-italia/commit/7b28fbb179cc20f7bb7cfbdb00a547807087891b), [`4279133`](https://github.com/italia/dev-kit-italia/commit/42791332cab4e9fbe0bbae5dec23507f23b84354), [`51d3b5b`](https://github.com/italia/dev-kit-italia/commit/51d3b5b91fa6b39d227282c952e503696b0131ef)]:
  - @italia/upload@1.0.0-alpha.18
  - @italia/avatar@1.0.0-alpha.18
  - @italia/dropdown@1.0.0-alpha.18
  - @italia/popover@1.0.0-alpha.18
  - @italia/carousel@1.0.0-alpha.18
  - @italia/card@1.0.0-alpha.18
  - @italia/dimmer@1.0.0-alpha.18
  - @italia/stepper@1.0.0-alpha.18
  - @italia/bottom-nav@1.0.0-alpha.18
  - @italia/select@1.0.0-alpha.18
  - @italia/section@1.0.0-alpha.18
  - @italia/chip@1.0.0-alpha.18
  - @italia/header@1.0.0-alpha.18
  - @italia/megamenu@1.0.0-alpha.18
  - @italia/accordion@1.0.0-alpha.18
  - @italia/autocomplete@1.0.0-alpha.18
  - @italia/back-to-top@1.0.0-alpha.18
  - @italia/breadcrumbs@1.0.0-alpha.18
  - @italia/button@1.0.0-alpha.18
  - @italia/callout@1.0.0-alpha.18
  - @italia/checkbox@1.0.0-alpha.18
  - @italia/collapse@1.0.0-alpha.18
  - @italia/hero@1.0.0-alpha.18
  - @italia/i18n@1.0.0-alpha.18
  - @italia/icon@1.0.0-alpha.18
  - @italia/input@1.0.0-alpha.18
  - @italia/modal@1.0.0-alpha.18
  - @italia/navscroll@1.0.0-alpha.18
  - @italia/notification@1.0.0-alpha.18
  - @italia/pagination@1.0.0-alpha.18
  - @italia/progress@1.0.0-alpha.18
  - @italia/radio@1.0.0-alpha.18
  - @italia/rating@1.0.0-alpha.18
  - @italia/skiplinks@1.0.0-alpha.18
  - @italia/sticky@1.0.0-alpha.18
  - @italia/tabs@1.0.0-alpha.18
  - @italia/timeline@1.0.0-alpha.18
  - @italia/toggle@1.0.0-alpha.18
  - @italia/thumbnav@1.0.0-alpha.18
  - @italia/toolbar@1.0.0-alpha.18
  - @italia/tooltip@1.0.0-alpha.18
  - @italia/transfer@1.0.0-alpha.18
  - @italia/video@1.0.0-alpha.18

## 1.0.0-alpha.17

### Minor Changes

- [`be1fa1d`](https://github.com/italia/dev-kit-italia/commit/be1fa1d984353281e83c202293a351ac482fccb6) Thanks [@pnicolli](https://github.com/pnicolli)! - Upgraded bootstrap-italia to version 3.0.0-beta.1

### Patch Changes

- Updated dependencies []:
  - @italia/accordion@1.0.0-alpha.17
  - @italia/autocomplete@1.0.0-alpha.17
  - @italia/avatar@1.0.0-alpha.17
  - @italia/back-to-top@1.0.0-alpha.17
  - @italia/bottom-nav@1.0.0-alpha.17
  - @italia/breadcrumbs@1.0.0-alpha.17
  - @italia/button@1.0.0-alpha.17
  - @italia/callout@1.0.0-alpha.17
  - @italia/card@1.0.0-alpha.17
  - @italia/carousel@1.0.0-alpha.17
  - @italia/checkbox@1.0.0-alpha.17
  - @italia/chip@1.0.0-alpha.17
  - @italia/collapse@1.0.0-alpha.17
  - @italia/dimmer@1.0.0-alpha.17
  - @italia/dropdown@1.0.0-alpha.17
  - @italia/header@1.0.0-alpha.17
  - @italia/hero@1.0.0-alpha.17
  - @italia/i18n@1.0.0-alpha.17
  - @italia/icon@1.0.0-alpha.17
  - @italia/input@1.0.0-alpha.17
  - @italia/megamenu@1.0.0-alpha.17
  - @italia/modal@1.0.0-alpha.17
  - @italia/navscroll@1.0.0-alpha.17
  - @italia/notification@1.0.0-alpha.17
  - @italia/pagination@1.0.0-alpha.17
  - @italia/popover@1.0.0-alpha.17
  - @italia/progress@1.0.0-alpha.17
  - @italia/radio@1.0.0-alpha.17
  - @italia/rating@1.0.0-alpha.17
  - @italia/section@1.0.0-alpha.17
  - @italia/select@1.0.0-alpha.17
  - @italia/skiplinks@1.0.0-alpha.17
  - @italia/sticky@1.0.0-alpha.17
  - @italia/tabs@1.0.0-alpha.17
  - @italia/timeline@1.0.0-alpha.17
  - @italia/toggle@1.0.0-alpha.17
  - @italia/thumbnav@1.0.0-alpha.17
  - @italia/toolbar@1.0.0-alpha.17
  - @italia/tooltip@1.0.0-alpha.17
  - @italia/transfer@1.0.0-alpha.17
  - @italia/upload@1.0.0-alpha.17
  - @italia/video@1.0.0-alpha.17

## 1.0.0-alpha.16

### Minor Changes

- [`22f9430`](https://github.com/italia/dev-kit-italia/commit/22f94308513ed418b1e988f56227fd740f266428) Thanks [@pnicolli](https://github.com/pnicolli)! - Added `w-33` and `w-66` classes. Added responsive variants for the `w-\*` classes.

### Patch Changes

- Updated dependencies []:
  - @italia/accordion@1.0.0-alpha.16
  - @italia/autocomplete@1.0.0-alpha.16
  - @italia/avatar@1.0.0-alpha.16
  - @italia/back-to-top@1.0.0-alpha.16
  - @italia/bottom-nav@1.0.0-alpha.16
  - @italia/breadcrumbs@1.0.0-alpha.16
  - @italia/button@1.0.0-alpha.16
  - @italia/callout@1.0.0-alpha.16
  - @italia/card@1.0.0-alpha.16
  - @italia/carousel@1.0.0-alpha.16
  - @italia/checkbox@1.0.0-alpha.16
  - @italia/chip@1.0.0-alpha.16
  - @italia/collapse@1.0.0-alpha.16
  - @italia/dimmer@1.0.0-alpha.16
  - @italia/dropdown@1.0.0-alpha.16
  - @italia/header@1.0.0-alpha.16
  - @italia/hero@1.0.0-alpha.16
  - @italia/i18n@1.0.0-alpha.16
  - @italia/icon@1.0.0-alpha.16
  - @italia/input@1.0.0-alpha.16
  - @italia/megamenu@1.0.0-alpha.16
  - @italia/modal@1.0.0-alpha.16
  - @italia/navscroll@1.0.0-alpha.16
  - @italia/notification@1.0.0-alpha.16
  - @italia/pagination@1.0.0-alpha.16
  - @italia/popover@1.0.0-alpha.16
  - @italia/progress@1.0.0-alpha.16
  - @italia/radio@1.0.0-alpha.16
  - @italia/rating@1.0.0-alpha.16
  - @italia/section@1.0.0-alpha.16
  - @italia/select@1.0.0-alpha.16
  - @italia/skiplinks@1.0.0-alpha.16
  - @italia/sticky@1.0.0-alpha.16
  - @italia/tabs@1.0.0-alpha.16
  - @italia/timeline@1.0.0-alpha.16
  - @italia/toggle@1.0.0-alpha.16
  - @italia/thumbnav@1.0.0-alpha.16
  - @italia/toolbar@1.0.0-alpha.16
  - @italia/tooltip@1.0.0-alpha.16
  - @italia/transfer@1.0.0-alpha.16
  - @italia/upload@1.0.0-alpha.16
  - @italia/video@1.0.0-alpha.16

## 1.0.0-alpha.15

### Patch Changes

- Aggiornamento della versione
- Updated dependencies [[`5a955c2`](https://github.com/italia/dev-kit-italia/commit/5a955c285a2a25d79e40d3058d6b45be6c44c82d)]:
  - @italia/autocomplete@1.0.0-alpha.15
  - @italia/accordion@1.0.0-alpha.15
  - @italia/avatar@1.0.0-alpha.15
  - @italia/back-to-top@1.0.0-alpha.15
  - @italia/bottom-nav@1.0.0-alpha.15
  - @italia/breadcrumbs@1.0.0-alpha.15
  - @italia/button@1.0.0-alpha.15
  - @italia/callout@1.0.0-alpha.15
  - @italia/card@1.0.0-alpha.15
  - @italia/carousel@1.0.0-alpha.15
  - @italia/checkbox@1.0.0-alpha.15
  - @italia/chip@1.0.0-alpha.15
  - @italia/collapse@1.0.0-alpha.15
  - @italia/dimmer@1.0.0-alpha.15
  - @italia/dropdown@1.0.0-alpha.15
  - @italia/header@1.0.0-alpha.15
  - @italia/hero@1.0.0-alpha.15
  - @italia/i18n@1.0.0-alpha.15
  - @italia/icon@1.0.0-alpha.15
  - @italia/input@1.0.0-alpha.15
  - @italia/megamenu@1.0.0-alpha.15
  - @italia/modal@1.0.0-alpha.15
  - @italia/navscroll@1.0.0-alpha.15
  - @italia/notification@1.0.0-alpha.15
  - @italia/pagination@1.0.0-alpha.15
  - @italia/popover@1.0.0-alpha.15
  - @italia/progress@1.0.0-alpha.15
  - @italia/radio@1.0.0-alpha.15
  - @italia/rating@1.0.0-alpha.15
  - @italia/section@1.0.0-alpha.15
  - @italia/select@1.0.0-alpha.15
  - @italia/skiplinks@1.0.0-alpha.15
  - @italia/sticky@1.0.0-alpha.15
  - @italia/tabs@1.0.0-alpha.15
  - @italia/timeline@1.0.0-alpha.15
  - @italia/toggle@1.0.0-alpha.15
  - @italia/thumbnav@1.0.0-alpha.15
  - @italia/toolbar@1.0.0-alpha.15
  - @italia/tooltip@1.0.0-alpha.15
  - @italia/transfer@1.0.0-alpha.15
  - @italia/upload@1.0.0-alpha.15
  - @italia/video@1.0.0-alpha.15

## 1.0.0-alpha.14

### Patch Changes

- Aggiornamento della versione
- Updated dependencies [[`49ecd58`](https://github.com/italia/dev-kit-italia/commit/49ecd5851d03ba0f02ab054488d5e651be28e80f)]:
  - @italia/carousel@1.0.0-alpha.14
  - @italia/accordion@1.0.0-alpha.14
  - @italia/autocomplete@1.0.0-alpha.14
  - @italia/avatar@1.0.0-alpha.14
  - @italia/back-to-top@1.0.0-alpha.14
  - @italia/bottom-nav@1.0.0-alpha.14
  - @italia/breadcrumbs@1.0.0-alpha.14
  - @italia/button@1.0.0-alpha.14
  - @italia/callout@1.0.0-alpha.14
  - @italia/card@1.0.0-alpha.14
  - @italia/checkbox@1.0.0-alpha.14
  - @italia/chip@1.0.0-alpha.14
  - @italia/collapse@1.0.0-alpha.14
  - @italia/dimmer@1.0.0-alpha.14
  - @italia/dropdown@1.0.0-alpha.14
  - @italia/header@1.0.0-alpha.14
  - @italia/hero@1.0.0-alpha.14
  - @italia/i18n@1.0.0-alpha.14
  - @italia/icon@1.0.0-alpha.14
  - @italia/input@1.0.0-alpha.14
  - @italia/megamenu@1.0.0-alpha.14
  - @italia/modal@1.0.0-alpha.14
  - @italia/navscroll@1.0.0-alpha.14
  - @italia/notification@1.0.0-alpha.14
  - @italia/pagination@1.0.0-alpha.14
  - @italia/popover@1.0.0-alpha.14
  - @italia/progress@1.0.0-alpha.14
  - @italia/radio@1.0.0-alpha.14
  - @italia/rating@1.0.0-alpha.14
  - @italia/section@1.0.0-alpha.14
  - @italia/select@1.0.0-alpha.14
  - @italia/skiplinks@1.0.0-alpha.14
  - @italia/sticky@1.0.0-alpha.14
  - @italia/tabs@1.0.0-alpha.14
  - @italia/timeline@1.0.0-alpha.14
  - @italia/toggle@1.0.0-alpha.14
  - @italia/thumbnav@1.0.0-alpha.14
  - @italia/toolbar@1.0.0-alpha.14
  - @italia/tooltip@1.0.0-alpha.14
  - @italia/transfer@1.0.0-alpha.14
  - @italia/upload@1.0.0-alpha.14
  - @italia/video@1.0.0-alpha.14

## 1.0.0-alpha.13

### Patch Changes

- Aggiornamento della versione
- Updated dependencies [[`a225c54`](https://github.com/italia/dev-kit-italia/commit/a225c54a737a3c31e489706e7aa4a9c7b5e1cce7), [`29c534c`](https://github.com/italia/dev-kit-italia/commit/29c534c4792a0bc3fd10d596b494e360713d2c25)]:
  - @italia/card@1.0.0-alpha.13
  - @italia/accordion@1.0.0-alpha.13
  - @italia/autocomplete@1.0.0-alpha.13
  - @italia/avatar@1.0.0-alpha.13
  - @italia/back-to-top@1.0.0-alpha.13
  - @italia/bottom-nav@1.0.0-alpha.13
  - @italia/breadcrumbs@1.0.0-alpha.13
  - @italia/button@1.0.0-alpha.13
  - @italia/callout@1.0.0-alpha.13
  - @italia/carousel@1.0.0-alpha.13
  - @italia/checkbox@1.0.0-alpha.13
  - @italia/chip@1.0.0-alpha.13
  - @italia/collapse@1.0.0-alpha.13
  - @italia/dimmer@1.0.0-alpha.13
  - @italia/dropdown@1.0.0-alpha.13
  - @italia/header@1.0.0-alpha.13
  - @italia/hero@1.0.0-alpha.13
  - @italia/i18n@1.0.0-alpha.13
  - @italia/icon@1.0.0-alpha.13
  - @italia/input@1.0.0-alpha.13
  - @italia/megamenu@1.0.0-alpha.13
  - @italia/modal@1.0.0-alpha.13
  - @italia/navscroll@1.0.0-alpha.13
  - @italia/notification@1.0.0-alpha.13
  - @italia/pagination@1.0.0-alpha.13
  - @italia/popover@1.0.0-alpha.13
  - @italia/progress@1.0.0-alpha.13
  - @italia/radio@1.0.0-alpha.13
  - @italia/rating@1.0.0-alpha.13
  - @italia/section@1.0.0-alpha.13
  - @italia/select@1.0.0-alpha.13
  - @italia/skiplinks@1.0.0-alpha.13
  - @italia/sticky@1.0.0-alpha.13
  - @italia/tabs@1.0.0-alpha.13
  - @italia/timeline@1.0.0-alpha.13
  - @italia/toggle@1.0.0-alpha.13
  - @italia/thumbnav@1.0.0-alpha.13
  - @italia/toolbar@1.0.0-alpha.13
  - @italia/tooltip@1.0.0-alpha.13
  - @italia/transfer@1.0.0-alpha.13
  - @italia/upload@1.0.0-alpha.13
  - @italia/video@1.0.0-alpha.13

## 1.0.0-alpha.12

### Minor Changes

- [#346](https://github.com/italia/dev-kit-italia/pull/346) [`ff9981d`](https://github.com/italia/dev-kit-italia/commit/ff9981d4ec7414bcb717c31d3c026c5fc20fa156) Thanks [@pnicolli](https://github.com/pnicolli)! - Refactoring to migrate from old sass imports to new use/forward syntax. Removed several silenced warnings.

### Patch Changes

- [#259](https://github.com/italia/dev-kit-italia/pull/259) [`2560d5d`](https://github.com/italia/dev-kit-italia/commit/2560d5d79a348e93ae038388bdd239cb35c49efc) Thanks [@Fupete](https://github.com/Fupete)! - Added version number in the docs

- Updated dependencies [[`1943e3c`](https://github.com/italia/dev-kit-italia/commit/1943e3c959f5abc15caa4595ccf57ad4ff50a135), [`ff9981d`](https://github.com/italia/dev-kit-italia/commit/ff9981d4ec7414bcb717c31d3c026c5fc20fa156), [`502aa3a`](https://github.com/italia/dev-kit-italia/commit/502aa3a7d760e6546153e64c6a23d96464a385db), [`fe80563`](https://github.com/italia/dev-kit-italia/commit/fe8056309b71d74af3e9981429518850ff890f15), [`2773adc`](https://github.com/italia/dev-kit-italia/commit/2773adc7e09b56e0bdfaf3be7ba866a83ab8b2b4)]:
  - @italia/autocomplete@1.0.0-alpha.12
  - @italia/notification@1.0.0-alpha.12
  - @italia/back-to-top@1.0.0-alpha.12
  - @italia/breadcrumbs@1.0.0-alpha.12
  - @italia/bottom-nav@1.0.0-alpha.12
  - @italia/pagination@1.0.0-alpha.12
  - @italia/accordion@1.0.0-alpha.12
  - @italia/navscroll@1.0.0-alpha.12
  - @italia/skiplinks@1.0.0-alpha.12
  - @italia/carousel@1.0.0-alpha.12
  - @italia/checkbox@1.0.0-alpha.12
  - @italia/collapse@1.0.0-alpha.12
  - @italia/dropdown@1.0.0-alpha.12
  - @italia/megamenu@1.0.0-alpha.12
  - @italia/progress@1.0.0-alpha.12
  - @italia/thumbnav@1.0.0-alpha.12
  - @italia/timeline@1.0.0-alpha.12
  - @italia/transfer@1.0.0-alpha.12
  - @italia/callout@1.0.0-alpha.12
  - @italia/popover@1.0.0-alpha.12
  - @italia/section@1.0.0-alpha.12
  - @italia/toolbar@1.0.0-alpha.12
  - @italia/tooltip@1.0.0-alpha.12
  - @italia/avatar@1.0.0-alpha.12
  - @italia/button@1.0.0-alpha.12
  - @italia/dimmer@1.0.0-alpha.12
  - @italia/header@1.0.0-alpha.12
  - @italia/rating@1.0.0-alpha.12
  - @italia/select@1.0.0-alpha.12
  - @italia/sticky@1.0.0-alpha.12
  - @italia/toggle@1.0.0-alpha.12
  - @italia/upload@1.0.0-alpha.12
  - @italia/input@1.0.0-alpha.12
  - @italia/modal@1.0.0-alpha.12
  - @italia/radio@1.0.0-alpha.12
  - @italia/video@1.0.0-alpha.12
  - @italia/card@1.0.0-alpha.12
  - @italia/chip@1.0.0-alpha.12
  - @italia/hero@1.0.0-alpha.12
  - @italia/icon@1.0.0-alpha.12
  - @italia/tabs@1.0.0-alpha.12
  - @italia/i18n@1.0.0-alpha.12

## 1.0.0-alpha.11

### Patch Changes

- [`60c9cd3`](https://github.com/italia/dev-kit-italia/commit/60c9cd347cfc6ef61b5bfc30be15e9d44bca8d5b) Thanks [@pnicolli](https://github.com/pnicolli)! - Fixed full css generation after latest bootstrap-italia upgrade.

- Updated dependencies []:
  - @italia/accordion@1.0.0-alpha.11
  - @italia/autocomplete@1.0.0-alpha.11
  - @italia/avatar@1.0.0-alpha.11
  - @italia/back-to-top@1.0.0-alpha.11
  - @italia/bottom-nav@1.0.0-alpha.11
  - @italia/breadcrumbs@1.0.0-alpha.11
  - @italia/button@1.0.0-alpha.11
  - @italia/callout@1.0.0-alpha.11
  - @italia/card@1.0.0-alpha.11
  - @italia/carousel@1.0.0-alpha.11
  - @italia/checkbox@1.0.0-alpha.11
  - @italia/chip@1.0.0-alpha.11
  - @italia/collapse@1.0.0-alpha.11
  - @italia/dimmer@1.0.0-alpha.11
  - @italia/dropdown@1.0.0-alpha.11
  - @italia/header@1.0.0-alpha.11
  - @italia/hero@1.0.0-alpha.11
  - @italia/i18n@1.0.0-alpha.11
  - @italia/icon@1.0.0-alpha.11
  - @italia/input@1.0.0-alpha.11
  - @italia/megamenu@1.0.0-alpha.11
  - @italia/modal@1.0.0-alpha.11
  - @italia/navscroll@1.0.0-alpha.11
  - @italia/notification@1.0.0-alpha.11
  - @italia/pagination@1.0.0-alpha.11
  - @italia/popover@1.0.0-alpha.11
  - @italia/progress@1.0.0-alpha.11
  - @italia/radio@1.0.0-alpha.11
  - @italia/rating@1.0.0-alpha.11
  - @italia/section@1.0.0-alpha.11
  - @italia/select@1.0.0-alpha.11
  - @italia/skiplinks@1.0.0-alpha.11
  - @italia/sticky@1.0.0-alpha.11
  - @italia/tabs@1.0.0-alpha.11
  - @italia/timeline@1.0.0-alpha.11
  - @italia/toggle@1.0.0-alpha.11
  - @italia/thumbnav@1.0.0-alpha.11
  - @italia/toolbar@1.0.0-alpha.11
  - @italia/tooltip@1.0.0-alpha.11
  - @italia/transfer@1.0.0-alpha.11
  - @italia/upload@1.0.0-alpha.11
  - @italia/video@1.0.0-alpha.11

## 1.0.0-alpha.10

### Patch Changes

- [#94](https://github.com/italia/dev-kit-italia/pull/94) [`a1bc1fb`](https://github.com/italia/dev-kit-italia/commit/a1bc1fb60b4adf11507d455e18a4fd900d41fe5a) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added header component

- [#333](https://github.com/italia/dev-kit-italia/pull/333) [`fd4d575`](https://github.com/italia/dev-kit-italia/commit/fd4d5757a716a1d266328b4e53f5180154720321) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Added it-toolbar component

- Updated dependencies [[`88c1ad8`](https://github.com/italia/dev-kit-italia/commit/88c1ad8b49db4cec7167ba762fb82b0bd86e93fa), [`900b2f7`](https://github.com/italia/dev-kit-italia/commit/900b2f75dccf49d05325443f50f6215ad2f6d18b), [`381996d`](https://github.com/italia/dev-kit-italia/commit/381996d969682981ba0615641f7ac573be0a76c4), [`a1bc1fb`](https://github.com/italia/dev-kit-italia/commit/a1bc1fb60b4adf11507d455e18a4fd900d41fe5a), [`a1bc1fb`](https://github.com/italia/dev-kit-italia/commit/a1bc1fb60b4adf11507d455e18a4fd900d41fe5a), [`a1bc1fb`](https://github.com/italia/dev-kit-italia/commit/a1bc1fb60b4adf11507d455e18a4fd900d41fe5a), [`fd4d575`](https://github.com/italia/dev-kit-italia/commit/fd4d5757a716a1d266328b4e53f5180154720321), [`fe786d5`](https://github.com/italia/dev-kit-italia/commit/fe786d58fec7212d612baa0b251885dd5ce07fe0), [`88bdc22`](https://github.com/italia/dev-kit-italia/commit/88bdc22f0a1c2322bf5ebf3d1a7bfaa3fbc83f02)]:
  - @italia/hero@1.0.0-alpha.10
  - @italia/i18n@1.0.0-alpha.10
  - @italia/card@1.0.0-alpha.10
  - @italia/sticky@1.0.0-alpha.10
  - @italia/dropdown@1.0.0-alpha.10
  - @italia/megamenu@1.0.0-alpha.10
  - @italia/popover@1.0.0-alpha.10
  - @italia/header@1.0.0-alpha.10
  - @italia/modal@1.0.0-alpha.10
  - @italia/toolbar@1.0.0-alpha.10
  - @italia/accordion@1.0.0-alpha.10
  - @italia/autocomplete@1.0.0-alpha.10
  - @italia/avatar@1.0.0-alpha.10
  - @italia/back-to-top@1.0.0-alpha.10
  - @italia/bottom-nav@1.0.0-alpha.10
  - @italia/breadcrumbs@1.0.0-alpha.10
  - @italia/button@1.0.0-alpha.10
  - @italia/callout@1.0.0-alpha.10
  - @italia/carousel@1.0.0-alpha.10
  - @italia/checkbox@1.0.0-alpha.10
  - @italia/chip@1.0.0-alpha.10
  - @italia/collapse@1.0.0-alpha.10
  - @italia/dimmer@1.0.0-alpha.10
  - @italia/icon@1.0.0-alpha.10
  - @italia/input@1.0.0-alpha.10
  - @italia/navscroll@1.0.0-alpha.10
  - @italia/notification@1.0.0-alpha.10
  - @italia/pagination@1.0.0-alpha.10
  - @italia/progress@1.0.0-alpha.10
  - @italia/radio@1.0.0-alpha.10
  - @italia/rating@1.0.0-alpha.10
  - @italia/section@1.0.0-alpha.10
  - @italia/select@1.0.0-alpha.10
  - @italia/skiplinks@1.0.0-alpha.10
  - @italia/tabs@1.0.0-alpha.10
  - @italia/timeline@1.0.0-alpha.10
  - @italia/toggle@1.0.0-alpha.10
  - @italia/thumbnav@1.0.0-alpha.10
  - @italia/tooltip@1.0.0-alpha.10
  - @italia/transfer@1.0.0-alpha.10
  - @italia/upload@1.0.0-alpha.10
  - @italia/video@1.0.0-alpha.10

## 1.0.0-alpha.9

### Minor Changes

- [#317](https://github.com/italia/dev-kit-italia/pull/317) [`b00d9b2`](https://github.com/italia/dev-kit-italia/commit/b00d9b262bec00d3a036e6a38ec8a0e4975d0474) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added tabs component

- [`1201f1e`](https://github.com/italia/dev-kit-italia/commit/1201f1e4399f21beb25042a40917d6ad20e8b1dc) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added timeline component

- [#329](https://github.com/italia/dev-kit-italia/pull/329) [`0aa17c5`](https://github.com/italia/dev-kit-italia/commit/0aa17c545f8b0ba9d8e4b3550c0161c73f866148) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add bottom-nav component

- [#359](https://github.com/italia/dev-kit-italia/pull/359) [`d144c97`](https://github.com/italia/dev-kit-italia/commit/d144c972493b2b9d6af7fb3898b3520e7c6fb034) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add transfer component

- [#328](https://github.com/italia/dev-kit-italia/pull/328) [`cfe1a3c`](https://github.com/italia/dev-kit-italia/commit/cfe1a3c5c85fae70323b4f3da7fb5764beac78f9) Thanks [@pnicolli](https://github.com/pnicolli)! - Added it-notification component

- [#321](https://github.com/italia/dev-kit-italia/pull/321) [`b7e062a`](https://github.com/italia/dev-kit-italia/commit/b7e062ab6e6fd79121918e388caf852b53c0ddad) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added dimmer component

- [#353](https://github.com/italia/dev-kit-italia/pull/353) [`21924f1`](https://github.com/italia/dev-kit-italia/commit/21924f1698d0e521e4c5e5d4e05ec2fd197f18b1) Thanks [@pnicolli](https://github.com/pnicolli)! - Added `it-tooltip` component

- [#352](https://github.com/italia/dev-kit-italia/pull/352) [`a5ee60f`](https://github.com/italia/dev-kit-italia/commit/a5ee60f85c77c681a5c61a87970388318e794188) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add upload component

### Patch Changes

- [#354](https://github.com/italia/dev-kit-italia/pull/354) [`7032706`](https://github.com/italia/dev-kit-italia/commit/70327060fecef3bdc649e4f890ca81217e94d9aa) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added it-thumbnav component

- Updated dependencies [[`b00d9b2`](https://github.com/italia/dev-kit-italia/commit/b00d9b262bec00d3a036e6a38ec8a0e4975d0474), [`fef3f8b`](https://github.com/italia/dev-kit-italia/commit/fef3f8bdde69cebe93c4b5d3b0fd75701f588188), [`4c41b98`](https://github.com/italia/dev-kit-italia/commit/4c41b982c1f726769e4c3636c46d66d68eceb174), [`d12b0cb`](https://github.com/italia/dev-kit-italia/commit/d12b0cbcd0862320e601c24fd85d82ff7f7e657d), [`1201f1e`](https://github.com/italia/dev-kit-italia/commit/1201f1e4399f21beb25042a40917d6ad20e8b1dc), [`4c41b98`](https://github.com/italia/dev-kit-italia/commit/4c41b982c1f726769e4c3636c46d66d68eceb174), [`0aa17c5`](https://github.com/italia/dev-kit-italia/commit/0aa17c545f8b0ba9d8e4b3550c0161c73f866148), [`d144c97`](https://github.com/italia/dev-kit-italia/commit/d144c972493b2b9d6af7fb3898b3520e7c6fb034), [`cfe1a3c`](https://github.com/italia/dev-kit-italia/commit/cfe1a3c5c85fae70323b4f3da7fb5764beac78f9), [`21924f1`](https://github.com/italia/dev-kit-italia/commit/21924f1698d0e521e4c5e5d4e05ec2fd197f18b1), [`95cb4d6`](https://github.com/italia/dev-kit-italia/commit/95cb4d62fa58c497960fdf602345dc91afe99e99), [`a5ee60f`](https://github.com/italia/dev-kit-italia/commit/a5ee60f85c77c681a5c61a87970388318e794188)]:
  - @italia/tabs@1.0.0-alpha.9
  - @italia/button@1.0.0-alpha.9
  - @italia/modal@1.0.0-alpha.9
  - @italia/dropdown@1.0.0-alpha.9
  - @italia/breadcrumbs@1.0.0-alpha.9
  - @italia/timeline@1.0.0-alpha.9
  - @italia/megamenu@1.0.0-alpha.9
  - @italia/bottom-nav@1.0.0-alpha.9
  - @italia/transfer@1.0.0-alpha.9
  - @italia/notification@1.0.0-alpha.9
  - @italia/tooltip@1.0.0-alpha.9
  - @italia/rating@1.0.0-alpha.9
  - @italia/card@1.0.0-alpha.9
  - @italia/chip@1.0.0-alpha.9
  - @italia/navscroll@1.0.0-alpha.9
  - @italia/progress@1.0.0-alpha.9
  - @italia/upload@1.0.0-alpha.9
  - @italia/dimmer@1.0.0-alpha.9
  - @italia/popover@1.0.0-alpha.9
  - @italia/video@1.0.0-alpha.9
  - @italia/accordion@1.0.0-alpha.9
  - @italia/autocomplete@1.0.0-alpha.9
  - @italia/avatar@1.0.0-alpha.9
  - @italia/back-to-top@1.0.0-alpha.9
  - @italia/callout@1.0.0-alpha.9
  - @italia/carousel@1.0.0-alpha.9
  - @italia/checkbox@1.0.0-alpha.9
  - @italia/collapse@1.0.0-alpha.9
  - @italia/hero@1.0.0-alpha.9
  - @italia/i18n@1.0.0-alpha.9
  - @italia/icon@1.0.0-alpha.9
  - @italia/input@1.0.0-alpha.9
  - @italia/pagination@1.0.0-alpha.9
  - @italia/radio@1.0.0-alpha.9
  - @italia/section@1.0.0-alpha.9
  - @italia/select@1.0.0-alpha.9
  - @italia/skiplinks@1.0.0-alpha.9
  - @italia/sticky@1.0.0-alpha.9
  - @italia/toggle@1.0.0-alpha.9
  - @italia/thumbnav@1.0.0-alpha.9

## 1.0.0-alpha.8

### Patch Changes

- [`c0234ba`](https://github.com/italia/dev-kit-italia/commit/c0234ba6192c5bfae44826b1b4161deb225e4aea) Thanks [@pnicolli](https://github.com/pnicolli)! - Fixed dist export for full.css

- Updated dependencies []:
  - @italia/accordion@1.0.0-alpha.8
  - @italia/autocomplete@1.0.0-alpha.8
  - @italia/avatar@1.0.0-alpha.8
  - @italia/back-to-top@1.0.0-alpha.8
  - @italia/breadcrumbs@1.0.0-alpha.8
  - @italia/button@1.0.0-alpha.8
  - @italia/callout@1.0.0-alpha.8
  - @italia/card@1.0.0-alpha.8
  - @italia/carousel@1.0.0-alpha.8
  - @italia/checkbox@1.0.0-alpha.8
  - @italia/chip@1.0.0-alpha.8
  - @italia/collapse@1.0.0-alpha.8
  - @italia/dropdown@1.0.0-alpha.8
  - @italia/hero@1.0.0-alpha.8
  - @italia/i18n@1.0.0-alpha.8
  - @italia/icon@1.0.0-alpha.8
  - @italia/input@1.0.0-alpha.8
  - @italia/megamenu@1.0.0-alpha.8
  - @italia/modal@1.0.0-alpha.8
  - @italia/navscroll@1.0.0-alpha.8
  - @italia/pagination@1.0.0-alpha.8
  - @italia/popover@1.0.0-alpha.8
  - @italia/progress@1.0.0-alpha.8
  - @italia/radio@1.0.0-alpha.8
  - @italia/rating@1.0.0-alpha.8
  - @italia/section@1.0.0-alpha.8
  - @italia/select@1.0.0-alpha.8
  - @italia/skiplinks@1.0.0-alpha.8
  - @italia/sticky@1.0.0-alpha.8
  - @italia/toggle@1.0.0-alpha.8
  - @italia/video@1.0.0-alpha.8

## 1.0.0-alpha.7

### Minor Changes

- [#307](https://github.com/italia/dev-kit-italia/pull/307) [`37e516b`](https://github.com/italia/dev-kit-italia/commit/37e516ba5750b2d4dd7d13bebdafd4fe778f022d) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added Carousel component

- [#276](https://github.com/italia/dev-kit-italia/pull/276) [`56a02b8`](https://github.com/italia/dev-kit-italia/commit/56a02b8072dbf1259cff380cf78bdd69ac5a813c) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add dev-kit tracking documentation

- [#330](https://github.com/italia/dev-kit-italia/pull/330) [`5cf5bb0`](https://github.com/italia/dev-kit-italia/commit/5cf5bb0a3a62ef46c808f92250a4c016f9abddad) Thanks [@pnicolli](https://github.com/pnicolli)! - Added styles file `full.css` which contains all bootstrap-italia styles. It is meant to help with the migration process from bootstrap-italia to dev-kit-italia.

### Patch Changes

- [#320](https://github.com/italia/dev-kit-italia/pull/320) [`8373579`](https://github.com/italia/dev-kit-italia/commit/83735794eec3ec027554983823830cb28fe3b68c) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Added it-progress component

- [#316](https://github.com/italia/dev-kit-italia/pull/316) [`572df4d`](https://github.com/italia/dev-kit-italia/commit/572df4dfe4e249cc98aa6650a2bf8f9726794f40) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Added it-toggle component as an extension of it-checkbox

- [`22eb901`](https://github.com/italia/dev-kit-italia/commit/22eb901eae2c2a4cae23b981f39ec838805e2c8c) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Updated docs with link to components

- [#343](https://github.com/italia/dev-kit-italia/pull/343) [`e725862`](https://github.com/italia/dev-kit-italia/commit/e7258623365aa6597da53da3c52abeb1bf84521b) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - fixed megamenu styles

- [#320](https://github.com/italia/dev-kit-italia/pull/320) [`8373579`](https://github.com/italia/dev-kit-italia/commit/83735794eec3ec027554983823830cb28fe3b68c) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Added it-progress component

- [#308](https://github.com/italia/dev-kit-italia/pull/308) [`07eea32`](https://github.com/italia/dev-kit-italia/commit/07eea3205e1cdd19ecd2bd069d337003c5c6f730) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Added it-megamenu component

- Updated dependencies [[`8373579`](https://github.com/italia/dev-kit-italia/commit/83735794eec3ec027554983823830cb28fe3b68c), [`572df4d`](https://github.com/italia/dev-kit-italia/commit/572df4dfe4e249cc98aa6650a2bf8f9726794f40), [`22eb901`](https://github.com/italia/dev-kit-italia/commit/22eb901eae2c2a4cae23b981f39ec838805e2c8c), [`37e516b`](https://github.com/italia/dev-kit-italia/commit/37e516ba5750b2d4dd7d13bebdafd4fe778f022d), [`8373579`](https://github.com/italia/dev-kit-italia/commit/83735794eec3ec027554983823830cb28fe3b68c), [`e725862`](https://github.com/italia/dev-kit-italia/commit/e7258623365aa6597da53da3c52abeb1bf84521b), [`8373579`](https://github.com/italia/dev-kit-italia/commit/83735794eec3ec027554983823830cb28fe3b68c), [`07eea32`](https://github.com/italia/dev-kit-italia/commit/07eea3205e1cdd19ecd2bd069d337003c5c6f730)]:
  - @italia/navscroll@1.0.0-alpha.7
  - @italia/progress@1.0.0-alpha.7
  - @italia/button@1.0.0-alpha.7
  - @italia/modal@1.0.0-alpha.7
  - @italia/chip@1.0.0-alpha.7
  - @italia/checkbox@1.0.0-alpha.7
  - @italia/toggle@1.0.0-alpha.7
  - @italia/dropdown@1.0.0-alpha.7
  - @italia/popover@1.0.0-alpha.7
  - @italia/select@1.0.0-alpha.7
  - @italia/carousel@1.0.0-alpha.7
  - @italia/video@1.0.0-alpha.7
  - @italia/megamenu@1.0.0-alpha.7
  - @italia/accordion@1.0.0-alpha.7
  - @italia/autocomplete@1.0.0-alpha.7
  - @italia/avatar@1.0.0-alpha.7
  - @italia/back-to-top@1.0.0-alpha.7
  - @italia/breadcrumbs@1.0.0-alpha.7
  - @italia/callout@1.0.0-alpha.7
  - @italia/card@1.0.0-alpha.7
  - @italia/collapse@1.0.0-alpha.7
  - @italia/hero@1.0.0-alpha.7
  - @italia/i18n@1.0.0-alpha.7
  - @italia/icon@1.0.0-alpha.7
  - @italia/input@1.0.0-alpha.7
  - @italia/pagination@1.0.0-alpha.7
  - @italia/radio@1.0.0-alpha.7
  - @italia/rating@1.0.0-alpha.7
  - @italia/section@1.0.0-alpha.7
  - @italia/skiplinks@1.0.0-alpha.7
  - @italia/sticky@1.0.0-alpha.7

## 1.0.0-alpha.6

### Minor Changes

- [#261](https://github.com/italia/dev-kit-italia/pull/261) [`36ea0c7`](https://github.com/italia/dev-kit-italia/commit/36ea0c7371522af5d50794d6657e8e65ecabea49) Thanks [@pnicolli](https://github.com/pnicolli)! - Added card component

- [#270](https://github.com/italia/dev-kit-italia/pull/270) [`7c3f181`](https://github.com/italia/dev-kit-italia/commit/7c3f18160ed0ef3a0aa1b058cb22d0911cff74fd) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add Tables HTML documentation

### Patch Changes

- [#273](https://github.com/italia/dev-kit-italia/pull/273) [`fc1c229`](https://github.com/italia/dev-kit-italia/commit/fc1c229cb2229c5ea290c3068c59f3daac84ca7d) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Added Hero component

- [#289](https://github.com/italia/dev-kit-italia/pull/289) [`4a4577c`](https://github.com/italia/dev-kit-italia/commit/4a4577c727cb224b74123e2298ea416a5eb9e0a7) Thanks [@danielenole](https://github.com/danielenole)! - Enhanced docs

- Updated dependencies [[`efd4340`](https://github.com/italia/dev-kit-italia/commit/efd4340195ebe84a8a8135035125b83db56172d0), [`36ea0c7`](https://github.com/italia/dev-kit-italia/commit/36ea0c7371522af5d50794d6657e8e65ecabea49), [`d2d9687`](https://github.com/italia/dev-kit-italia/commit/d2d9687c8baacc655c2dd9aa6fcd938f46b8f4a3), [`fc1c229`](https://github.com/italia/dev-kit-italia/commit/fc1c229cb2229c5ea290c3068c59f3daac84ca7d), [`e556822`](https://github.com/italia/dev-kit-italia/commit/e55682290e80bcfc68cd8d835d96b77abd276b46), [`01aa2d7`](https://github.com/italia/dev-kit-italia/commit/01aa2d7850660d72c6e09a6b1118005fd75f9420), [`1a76d13`](https://github.com/italia/dev-kit-italia/commit/1a76d13c61c4836508ccdf54ccc018114c7408cb), [`b0d65d7`](https://github.com/italia/dev-kit-italia/commit/b0d65d724a42c92d92e2f09b8c061a00bdaa0492), [`526c4d8`](https://github.com/italia/dev-kit-italia/commit/526c4d8f13a6974d6290f7ca9726fac349218fc5), [`4a4577c`](https://github.com/italia/dev-kit-italia/commit/4a4577c727cb224b74123e2298ea416a5eb9e0a7)]:
  - @italia/checkbox@1.0.0-alpha.6
  - @italia/card@1.0.0-alpha.6
  - @italia/input@1.0.0-alpha.6
  - @italia/radio@1.0.0-alpha.6
  - @italia/video@1.0.0-alpha.6
  - @italia/hero@1.0.0-alpha.6
  - @italia/back-to-top@1.0.0-alpha.6
  - @italia/breadcrumbs@1.0.0-alpha.6
  - @italia/accordion@1.0.0-alpha.6
  - @italia/navscroll@1.0.0-alpha.6
  - @italia/collapse@1.0.0-alpha.6
  - @italia/callout@1.0.0-alpha.6
  - @italia/section@1.0.0-alpha.6
  - @italia/button@1.0.0-alpha.6
  - @italia/rating@1.0.0-alpha.6
  - @italia/chip@1.0.0-alpha.6
  - @italia/icon@1.0.0-alpha.6
  - @italia/modal@1.0.0-alpha.6
  - @italia/sticky@1.0.0-alpha.6
  - @italia/dropdown@1.0.0-alpha.6
  - @italia/pagination@1.0.0-alpha.6
  - @italia/autocomplete@1.0.0-alpha.6
  - @italia/avatar@1.0.0-alpha.6
  - @italia/i18n@1.0.0-alpha.6
  - @italia/popover@1.0.0-alpha.6
  - @italia/select@1.0.0-alpha.6
  - @italia/skiplinks@1.0.0-alpha.6

## 1.0.0-alpha.5

### Minor Changes

- [#228](https://github.com/italia/dev-kit-italia/pull/228) [`13c773f`](https://github.com/italia/dev-kit-italia/commit/13c773fa2aee43082c8af460cb7a5a72803bab4e) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added Forward documentation

- [#147](https://github.com/italia/dev-kit-italia/pull/147) [`7e0ab9c`](https://github.com/italia/dev-kit-italia/commit/7e0ab9c8235bbe58eec625fa8bb1b9ee05b0c388) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added Go Back documentation

- [#236](https://github.com/italia/dev-kit-italia/pull/236) [`7a6fa3d`](https://github.com/italia/dev-kit-italia/commit/7a6fa3dcbabbb85ed638c1daba4501c45f47966e) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added Pagination component

- [#212](https://github.com/italia/dev-kit-italia/pull/212) [`16a09a0`](https://github.com/italia/dev-kit-italia/commit/16a09a09cbd8af4596c44ed3d58a925cf9c3cc95) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Added it-back-to-top component

- [#135](https://github.com/italia/dev-kit-italia/pull/135) [`9fc2b8c`](https://github.com/italia/dev-kit-italia/commit/9fc2b8c2890e6139f2892490eb43f330da3cdb38) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added rating component

- [#152](https://github.com/italia/dev-kit-italia/pull/152) [`c8f2aa6`](https://github.com/italia/dev-kit-italia/commit/c8f2aa6e6a23bfc21a514bc35eae88d63edfb8cb) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - feat: added overlay docs

- [#225](https://github.com/italia/dev-kit-italia/pull/225) [`57f1319`](https://github.com/italia/dev-kit-italia/commit/57f1319bb9db5d1b4a5811ccf16e46cc09e83e8f) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added modal component

- [#145](https://github.com/italia/dev-kit-italia/pull/145) [`a1a7f34`](https://github.com/italia/dev-kit-italia/commit/a1a7f343c9374374aae7d49ec90bc16077d41ea8) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added breadcrumbs component

- [#255](https://github.com/italia/dev-kit-italia/pull/255) [`7e9a9be`](https://github.com/italia/dev-kit-italia/commit/7e9a9be9346207bcc8be4760662b1cee4aa620cf) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Add it-autocomplete component

- [#146](https://github.com/italia/dev-kit-italia/pull/146) [`a9a5365`](https://github.com/italia/dev-kit-italia/commit/a9a53659c168f846f344129d6b78f974942a8dce) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added callout component

- [#133](https://github.com/italia/dev-kit-italia/pull/133) [`5be67a2`](https://github.com/italia/dev-kit-italia/commit/5be67a2c1c2b5515ff66298fdcff046c5d44641b) Thanks [@pnicolli](https://github.com/pnicolli)! - Added list component

- [#238](https://github.com/italia/dev-kit-italia/pull/238) [`d53c48c`](https://github.com/italia/dev-kit-italia/commit/d53c48cae3b8d524f465e47070ecf8e6a2358510) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Added it-select component

- [#265](https://github.com/italia/dev-kit-italia/pull/265) [`179d7b8`](https://github.com/italia/dev-kit-italia/commit/179d7b814d9debfbe325e14593ff86ace4c4be34) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Updated Back docs and examples

- [#250](https://github.com/italia/dev-kit-italia/pull/250) [`883d4d9`](https://github.com/italia/dev-kit-italia/commit/883d4d9d56a4810eb38c5d72cc42d872bc8fe619) Thanks [@pnicolli](https://github.com/pnicolli)! - Added Alert component

### Patch Changes

- [#251](https://github.com/italia/dev-kit-italia/pull/251) [`21e8180`](https://github.com/italia/dev-kit-italia/commit/21e8180e49b83ca2be70d69e952a52d2e563b29e) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Updated bootstrap-italia and fixed design-tokens

- [#129](https://github.com/italia/dev-kit-italia/pull/129) [`0b53eba`](https://github.com/italia/dev-kit-italia/commit/0b53ebabfead90e66cc621c9e3ed4d1b0296554d) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Popover documentation and global styling

- [`f8d05ee`](https://github.com/italia/dev-kit-italia/commit/f8d05eed0c38744e77788499175ec85901c4e092) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Updated bootstrap-italia and fixed some stories

- Updated dependencies [[`21e8180`](https://github.com/italia/dev-kit-italia/commit/21e8180e49b83ca2be70d69e952a52d2e563b29e), [`7a6fa3d`](https://github.com/italia/dev-kit-italia/commit/7a6fa3dcbabbb85ed638c1daba4501c45f47966e), [`16a09a0`](https://github.com/italia/dev-kit-italia/commit/16a09a09cbd8af4596c44ed3d58a925cf9c3cc95), [`9fc2b8c`](https://github.com/italia/dev-kit-italia/commit/9fc2b8c2890e6139f2892490eb43f330da3cdb38), [`1c1e6e8`](https://github.com/italia/dev-kit-italia/commit/1c1e6e813afe73fe15229a83bc445e59041af86e), [`57f1319`](https://github.com/italia/dev-kit-italia/commit/57f1319bb9db5d1b4a5811ccf16e46cc09e83e8f), [`a1a7f34`](https://github.com/italia/dev-kit-italia/commit/a1a7f343c9374374aae7d49ec90bc16077d41ea8), [`7e9a9be`](https://github.com/italia/dev-kit-italia/commit/7e9a9be9346207bcc8be4760662b1cee4aa620cf), [`a9a5365`](https://github.com/italia/dev-kit-italia/commit/a9a53659c168f846f344129d6b78f974942a8dce), [`0b53eba`](https://github.com/italia/dev-kit-italia/commit/0b53ebabfead90e66cc621c9e3ed4d1b0296554d), [`d53c48c`](https://github.com/italia/dev-kit-italia/commit/d53c48cae3b8d524f465e47070ecf8e6a2358510), [`18e1e61`](https://github.com/italia/dev-kit-italia/commit/18e1e61c9e999713ffc1965a547d08919808dc77), [`f8d05ee`](https://github.com/italia/dev-kit-italia/commit/f8d05eed0c38744e77788499175ec85901c4e092)]:
  - @italia/accordion@1.0.0-alpha.5
  - @italia/collapse@1.0.0-alpha.5
  - @italia/popover@1.0.0-alpha.5
  - @italia/section@1.0.0-alpha.5
  - @italia/avatar@1.0.0-alpha.5
  - @italia/input@1.0.0-alpha.5
  - @italia/radio@1.0.0-alpha.5
  - @italia/video@1.0.0-alpha.5
  - @italia/chip@1.0.0-alpha.5
  - @italia/pagination@1.0.0-alpha.5
  - @italia/back-to-top@1.0.0-alpha.5
  - @italia/rating@1.0.0-alpha.5
  - @italia/modal@1.0.0-alpha.5
  - @italia/breadcrumbs@1.0.0-alpha.5
  - @italia/autocomplete@1.0.0-alpha.5
  - @italia/callout@1.0.0-alpha.5
  - @italia/checkbox@1.0.0-alpha.5
  - @italia/select@1.0.0-alpha.5
  - @italia/dropdown@1.0.0-alpha.5
  - @italia/i18n@1.0.0-alpha.5
  - @italia/button@1.0.0-alpha.5
  - @italia/navscroll@1.0.0-alpha.5
  - @italia/icon@1.0.0-alpha.5
  - @italia/skiplinks@1.0.0-alpha.5
  - @italia/sticky@1.0.0-alpha.5

## 1.0.0-alpha.4

### Patch Changes

- Aggiornamento della versione
- Updated dependencies [[`7207967`](https://github.com/italia/dev-kit-italia/commit/7207967288d520767efd5c79908d6526e0f5219e)]:
  - @italia/sticky@1.0.0-alpha.4
  - @italia/accordion@1.0.0-alpha.4
  - @italia/avatar@1.0.0-alpha.4
  - @italia/button@1.0.0-alpha.4
  - @italia/checkbox@1.0.0-alpha.4
  - @italia/chip@1.0.0-alpha.4
  - @italia/collapse@1.0.0-alpha.4
  - @italia/dropdown@1.0.0-alpha.4
  - @italia/i18n@1.0.0-alpha.4
  - @italia/icon@1.0.0-alpha.4
  - @italia/input@1.0.0-alpha.4
  - @italia/popover@1.0.0-alpha.4
  - @italia/radio@1.0.0-alpha.4
  - @italia/section@1.0.0-alpha.4
  - @italia/skiplinks@1.0.0-alpha.4
  - @italia/video@1.0.0-alpha.4

## 1.0.0-alpha.3

### Minor Changes

- [#141](https://github.com/italia/dev-kit-italia/pull/141) [`198638c`](https://github.com/italia/dev-kit-italia/commit/198638c16916b7b7706d2c691b5cdc3d64ce17bb) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Added it-skiplinks component

- [#153](https://github.com/italia/dev-kit-italia/pull/153) [`c37bb79`](https://github.com/italia/dev-kit-italia/commit/c37bb79cd11faf8e3fc4b78f7d3a9da02a65605b) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Added Affix documentation

- [#213](https://github.com/italia/dev-kit-italia/pull/213) [`4cb77c2`](https://github.com/italia/dev-kit-italia/commit/4cb77c28e60eb24f51690a81515d6117d3167f68) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Move avatar and footer docs to mdx and align to new structure

- [#127](https://github.com/italia/dev-kit-italia/pull/127) [`1c9b7b4`](https://github.com/italia/dev-kit-italia/commit/1c9b7b484ca631a2f72a3eb5179997a0852f6539) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Added checkbox component

- [#149](https://github.com/italia/dev-kit-italia/pull/149) [`7d17473`](https://github.com/italia/dev-kit-italia/commit/7d17473a5f48e25054bca57707f4ef834e31cfd4) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Added docs for Badge

- [#134](https://github.com/italia/dev-kit-italia/pull/134) [`7b3fd82`](https://github.com/italia/dev-kit-italia/commit/7b3fd821de6675e5f96acd0956e3560ae3d863c8) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added collapse component

### Patch Changes

- [#222](https://github.com/italia/dev-kit-italia/pull/222) [`a4a9ba0`](https://github.com/italia/dev-kit-italia/commit/a4a9ba03667e46dcabf104ec4ef24f76c5f5e10c) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Fixed form elements validation

- [#201](https://github.com/italia/dev-kit-italia/pull/201) [`147f9ba`](https://github.com/italia/dev-kit-italia/commit/147f9ba893a5a29e923bee42f46eaab4838861d4) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - fix: fouc styles for it-video

- [#197](https://github.com/italia/dev-kit-italia/pull/197) [`d0312a7`](https://github.com/italia/dev-kit-italia/commit/d0312a7af33f7fa0bca62e3500a1f2babb760775) Thanks [@pnicolli](https://github.com/pnicolli)! - Fixed it-button disabled interaction.

- [#131](https://github.com/italia/dev-kit-italia/pull/131) [`a2649a8`](https://github.com/italia/dev-kit-italia/commit/a2649a8879464a65539a15ed077671dc9873a119) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Aggiunta documentazione sull'obiettivo del progetto

- Updated dependencies [[`198638c`](https://github.com/italia/dev-kit-italia/commit/198638c16916b7b7706d2c691b5cdc3d64ce17bb), [`a4a9ba0`](https://github.com/italia/dev-kit-italia/commit/a4a9ba03667e46dcabf104ec4ef24f76c5f5e10c), [`147f9ba`](https://github.com/italia/dev-kit-italia/commit/147f9ba893a5a29e923bee42f46eaab4838861d4), [`8ddff07`](https://github.com/italia/dev-kit-italia/commit/8ddff0754342cd7314c6ba7d65909437473a890b), [`d0312a7`](https://github.com/italia/dev-kit-italia/commit/d0312a7af33f7fa0bca62e3500a1f2babb760775), [`8ea45a9`](https://github.com/italia/dev-kit-italia/commit/8ea45a9a2c9195b6e73bd7d612405654c6355567), [`21b8a9d`](https://github.com/italia/dev-kit-italia/commit/21b8a9d02dc62c3d25925c9bd6e5697abffd0b39), [`5e541a4`](https://github.com/italia/dev-kit-italia/commit/5e541a42b580b9c9d6086ff65e0aed42929ab7d4), [`d7e298e`](https://github.com/italia/dev-kit-italia/commit/d7e298e8382243a8103dbd687e8bc794a25553b5), [`31f51f5`](https://github.com/italia/dev-kit-italia/commit/31f51f5c748672de5f05d45643fe418aa730feef), [`4cb77c2`](https://github.com/italia/dev-kit-italia/commit/4cb77c28e60eb24f51690a81515d6117d3167f68), [`d59a424`](https://github.com/italia/dev-kit-italia/commit/d59a4240606ab8ac3983e71ad0ba829a0fc74fd0), [`2300214`](https://github.com/italia/dev-kit-italia/commit/2300214a46761099e6672f85fbe8bbb1acaae4e9), [`1c9b7b4`](https://github.com/italia/dev-kit-italia/commit/1c9b7b484ca631a2f72a3eb5179997a0852f6539), [`aa2bae9`](https://github.com/italia/dev-kit-italia/commit/aa2bae9f2687f31efbff1d94fb5edafa87882761), [`f0503f1`](https://github.com/italia/dev-kit-italia/commit/f0503f19d34ea15e1953d5ff35c345719fe0d6d2), [`7b3fd82`](https://github.com/italia/dev-kit-italia/commit/7b3fd821de6675e5f96acd0956e3560ae3d863c8), [`d162cca`](https://github.com/italia/dev-kit-italia/commit/d162cca4553bcc3d770d94438eb96be4c1b04166), [`532c6d2`](https://github.com/italia/dev-kit-italia/commit/532c6d24169ae9a01673c7d760ccfdb1b58c9a07)]:
  - @italia/skiplinks@1.0.0-alpha.3
  - @italia/checkbox@1.0.0-alpha.3
  - @italia/input@1.0.0-alpha.3
  - @italia/radio@1.0.0-alpha.3
  - @italia/video@1.0.0-alpha.3
  - @italia/dropdown@1.0.0-alpha.3
  - @italia/button@1.0.0-alpha.3
  - @italia/chip@1.0.0-alpha.3
  - @italia/icon@1.0.0-alpha.3
  - @italia/avatar@1.0.0-alpha.3
  - @italia/section@1.0.0-alpha.3
  - @italia/accordion@1.0.0-alpha.3
  - @italia/collapse@1.0.0-alpha.3
  - @italia/popover@1.0.0-alpha.3
  - @italia/i18n@1.0.0-alpha.3
  - @italia/sticky@1.0.0-alpha.3

## 0.1.0-alpha.2

### Minor Changes

- [#125](https://github.com/italia/dev-kit-italia/pull/125) [`3fed78e`](https://github.com/italia/dev-kit-italia/commit/3fed78ef91bc13d0b035fe93928a0e37e93769a8) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Aggiunto componente it-avatar e integrato con chip e dropdown

- [#120](https://github.com/italia/dev-kit-italia/pull/120) [`7122eec`](https://github.com/italia/dev-kit-italia/commit/7122eec5bdf1fecfe66b1aabc0226c70aff48e2e) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Refactor form component and created FormControl extendable class"

- [#78](https://github.com/italia/dev-kit-italia/pull/78) [`21d2248`](https://github.com/italia/dev-kit-italia/commit/21d22487a1a0df53243b74649259d9a1a371b03b) Thanks [@pnicolli](https://github.com/pnicolli)! - Rinominato in Dev Kit Italia

### Patch Changes

- [#118](https://github.com/italia/dev-kit-italia/pull/118) [`0cce260`](https://github.com/italia/dev-kit-italia/commit/0cce2609f1cceafe234752515a07dad09f791650) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added sticky component

- [#15](https://github.com/italia/dev-kit-italia/pull/15) [`e8cc612`](https://github.com/italia/dev-kit-italia/commit/e8cc61276214b310a3da2c25788b5d1ca4725946) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added footer documentation

- [#114](https://github.com/italia/dev-kit-italia/pull/114) [`16c9e6a`](https://github.com/italia/dev-kit-italia/commit/16c9e6ac28f624e7aff6759e0927083bac6b147a) Thanks [@Fupete](https://github.com/Fupete)! - Migliorata la documentazione, corretti typo e alcune imprecisioni di formattazione.

- [#122](https://github.com/italia/dev-kit-italia/pull/122) [`4872759`](https://github.com/italia/dev-kit-italia/commit/4872759870bb27887338b9e48f8a52f7050b86b0) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Moved examples under parent folder /examples

- [#111](https://github.com/italia/dev-kit-italia/pull/111) [`27fb740`](https://github.com/italia/dev-kit-italia/commit/27fb74084e3807ab9b2c1ee37ebb765607bee2df) Thanks [@deodorhunter](https://github.com/deodorhunter)! - Added accordion component

- Updated dependencies [[`8f6b980`](https://github.com/italia/dev-kit-italia/commit/8f6b98046ceeb5ef69f4a31b0866d2659dc75bb0), [`7c7bd77`](https://github.com/italia/dev-kit-italia/commit/7c7bd77816c5fcc78ec20ad64b609fa24c7f31df), [`3fed78e`](https://github.com/italia/dev-kit-italia/commit/3fed78ef91bc13d0b035fe93928a0e37e93769a8), [`0cce260`](https://github.com/italia/dev-kit-italia/commit/0cce2609f1cceafe234752515a07dad09f791650), [`60e4a40`](https://github.com/italia/dev-kit-italia/commit/60e4a405b4ce5c683dfd147d0f21fc68d773480f), [`54837ca`](https://github.com/italia/dev-kit-italia/commit/54837ca890f854d8f6d8566208f9980505e3a731), [`16c9e6a`](https://github.com/italia/dev-kit-italia/commit/16c9e6ac28f624e7aff6759e0927083bac6b147a), [`c654f09`](https://github.com/italia/dev-kit-italia/commit/c654f093c4e9800c62ccf39b512cdec7d58d4815), [`7122eec`](https://github.com/italia/dev-kit-italia/commit/7122eec5bdf1fecfe66b1aabc0226c70aff48e2e), [`21d2248`](https://github.com/italia/dev-kit-italia/commit/21d22487a1a0df53243b74649259d9a1a371b03b), [`aaee9d2`](https://github.com/italia/dev-kit-italia/commit/aaee9d239947841503c728b93bda29a7446bfee0), [`27fb740`](https://github.com/italia/dev-kit-italia/commit/27fb74084e3807ab9b2c1ee37ebb765607bee2df), [`aaee9d2`](https://github.com/italia/dev-kit-italia/commit/aaee9d239947841503c728b93bda29a7446bfee0), [`b55e47d`](https://github.com/italia/dev-kit-italia/commit/b55e47d6ff95a400f82fe90959d8031eba1df04b)]:
  - @italia/button@0.1.0-alpha.2
  - @italia/input@0.1.0-alpha.2
  - @italia/section@0.1.0-alpha.2
  - @italia/dropdown@0.1.0-alpha.2
  - @italia/avatar@0.1.0-alpha.2
  - @italia/chip@0.1.0-alpha.2
  - @italia/sticky@0.1.0-alpha.2
  - @italia/video@0.1.0-alpha.2
  - @italia/radio@0.1.0-alpha.2
  - @italia/popover@0.1.0-alpha.2
  - @italia/i18n@0.1.0-alpha.2
  - @italia/icon@0.1.0-alpha.2
  - @italia/accordion@0.1.0-alpha.2
