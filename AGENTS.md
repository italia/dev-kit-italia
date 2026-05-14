# AGENTS.md

## Project Overview

Dev Kit Italia is a Web Components library implementing the Italian design system (.italia). Components are built with **Lit 3** and published to NPM under the `@italia` scope. The project is a **pnpm monorepo** orchestrated by **Turborepo**.

## Common Commands

```bash
pnpm install                  # Install dependencies
pnpm build                    # Build all packages (turbo run build analyze)
pnpm test                     # Run all tests (serial via turbo)
pnpm lint                     # Lint all packages
pnpm format                   # Format all packages
pnpm storybook                # Start Storybook dev server on port 6006
pnpm storybook:build          # Build storybook static folder for production docs
```

### Working with individual packages

```bash
pnpm --filter=@italia/button build         # Build a single package
pnpm --filter=@italia/button test          # Test a single package
pnpm --filter=@italia/button lint          # Lint a single package
```

Build must run before tests (configured in turbo.json). Build depends on upstream packages (`^build`), so building a leaf package also builds its dependencies.

## Architecture

### Monorepo Layout

- **`packages/*`** — All workspace packages (components, utilities, bundle)
- **`examples/`** — Framework integration examples (React, Vue, Svelte, Angular, Vanilla JS)
- **`.storybook/`** — Storybook configuration (discovers stories from `packages/**/stories/**/*.stories.ts`)

### Package Types

| Package                     | Purpose                                                                                |
| --------------------------- | -------------------------------------------------------------------------------------- |
| `@italia/globals`           | Base classes, controllers, directives, form utilities, mixins shared by all components |
| `@italia/i18n`              | Internationalization (LocalizeMixin)                                                   |
| `@italia/test-config`       | Shared Web Test Runner config and test utilities                                       |
| `@italia/typescript-config` | Shared tsconfig presets                                                                |
| `@italia/dev-kit-italia`    | Meta-package that re-exports all components                                            |
| `@italia/<component>`       | Individual component packages (button, input, modal, etc.)                             |

### Component Structure

Each component package follows this layout:

```
packages/<name>/
  src/
    it-<name>.ts          # Lit component class (tagged as <it-name>)
    <name>.scss           # Component styles (compiled via rollup-plugin-scss-lit)
    types.ts              # Component-specific types/enums
    index.ts              # Barrel exports
  test/
    it-<name>.test.ts     # Tests using @open-wc/testing
  stories/
    it-<name>.stories.ts  # Storybook stories
    it-<name>.mdx         # Storybook docs
  rollup.config.js        # Rollup build config
  web-test-runner.config.js  # Extends @italia/test-config
  tsconfig.build.json     # Extends @italia/typescript-config
```

### Component Base Classes

All components extend `BaseComponent` (from `@italia/globals`), which extends `LitElement` and provides:

- `composeClass` (clsx) for className composition
- `_ariaAttributes` getter that maps `it-aria-*` / `it-role` host attributes to standard ARIA attributes
- `generateId()` for internal element IDs
- `prefersReducedMotion` check
- `Logger` instance

Form components use the `FormControl` mixin and `FormControlController` from `@italia/globals/form`.

### Build Pipeline

- **Rollup** bundles each component: TypeScript + SCSS (via `rollup-plugin-scss-lit`) + node-resolve
- `lit` is marked as external (peer dependency)
- **Custom Elements Manifest Analyzer** generates `custom-elements.json` per component (the `analyze` turbo task)
- SCSS imports resolve from `node_modules` (Bootstrap Italia, design-tokens-italia)

### Testing

- **@web/test-runner** with **Playwright** browsers
- Tests use `@open-wc/testing` (fixture, expect, html helpers)
- Each package has its own `web-test-runner.config.js` extending the shared base config

### Releases

Managed via **Changesets**: run `pnpm changeset` to document changes, then merging the changeset PR bumps versions. Publishing is triggered by git tags via GitHub Actions.

## Key Dependencies

- **lit** ^3.3.0 — Web Component framework
- **bootstrap-italia** — Italian design system CSS (pinned to specific commit)
- **design-tokens-italia** ^1.3.3 — Design tokens
- **sass** ^1.89.0 — SCSS compilation

## Code Style

- Prettier: single quotes, trailing commas, 120 char width
- ESLint: `@open-wc` config + `@typescript-eslint` + lit/lit-a11y plugins
- Pre-commit hooks via Husky + lint-staged
- Node.js 20.x / 22.x / 24.x, pnpm 10.11.0

## Naming Conventions

- Component tag names: `it-<name>` (e.g., `it-button`, `it-accordion`)
- Component classes: PascalCase (e.g., `ItButton`, `ItAccordion`)
- Package names: `@italia/<name>`
- ARIA passthrough: use `it-aria-*` and `it-role` attributes on the host element (mapped internally by BaseComponent)
