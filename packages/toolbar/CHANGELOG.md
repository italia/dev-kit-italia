# Changelog - Toolbar Component

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

- [#333](https://github.com/italia/dev-kit-italia/pull/333) [`fd4d575`](https://github.com/italia/dev-kit-italia/commit/fd4d5757a716a1d266328b4e53f5180154720321) Thanks [@giuliaghisini](https://github.com/giuliaghisini)! - Added it-toolbar component

- Updated dependencies [[`a1bc1fb`](https://github.com/italia/dev-kit-italia/commit/a1bc1fb60b4adf11507d455e18a4fd900d41fe5a)]:
  - @italia/globals@1.0.0-alpha.10

## [1.0.0-alpha.6] - Initial Release

### Added

- New `it-toolbar` web component for navigation menus with icon-based items
- Support for three size variants:
  - `lg` (large, default): Shows labels and icons
  - `md` (medium): Hides labels visually, uses `.visually-hidden` spans for accessibility
  - `sm` (small): Hides labels visually, uses `.visually-hidden` spans for accessibility
- Support for two orientation variants:
  - `horizontal` (default): Items arranged in a row
  - `vertical`: Items arranged in a column
- Badge support for notifications and unread content indicators
- Divider support for grouping logical menu sections
- Active state support via `.active` CSS class on items
- Disabled state support via `.disabled` class and `disabled` attribute
- Full WCAG 2.1 AA accessibility compliance
- Complete Storybook documentation with multiple story examples
- Comprehensive test suite covering accessibility and properties
- Example implementations for all supported frameworks:
  - React
  - Angular
  - Vue
  - Svelte
  - Vanilla JavaScript

### Features

- Accessible navigation component following Bootstrap Italia design system
- Responsive design that adapts to container width
- Dark mode support via `dark` attribute
- Customizable aria-label via `it-aria-label` attribute
- Slot-based content model for flexible item structure
- CSS part exposure for styling via `::part()` pseudo-elements:
  - `toolbar-container`: Main nav element
  - `toolbar-list`: The ul element

### Documentation

- MDX documentation file with examples and usage guidelines
- README with installation and usage instructions
- References to Designers Italia and Bootstrap Italia design documentation

### Files Created

- `/packages/toolbar/src/it-toolbar.ts` - Main component
- `/packages/toolbar/src/types.ts` - TypeScript types
- `/packages/toolbar/src/index.ts` - Module exports
- `/packages/toolbar/src/toolbar.scss` - Placeholder for styles (FOUC prevention not implemented)
- `/packages/toolbar/stories/it-toolbar.stories.ts` - Storybook stories
- `/packages/toolbar/stories/it-toolbar.mdx` - Storybook documentation
- `/packages/toolbar/test/it-toolbar.test.ts` - Test suite
- `/packages/toolbar/package.json` - Package configuration
- Configuration files (tsconfig.json, rollup.config.js, web-test-runner.config.js)
- `/examples/react-app/src/pages/Toolbar.jsx` - React example
- `/examples/angular-app/src/app/pages/toolbar.component.ts|html` - Angular example
- `/examples/vue-app/src/pages/Toolbar.vue` - Vue example
- `/examples/svelte-app/src/pages/Toolbar.svelte` - Svelte example
- `/examples/vanilla-app/src/toolbar.html` - Vanilla JavaScript example
