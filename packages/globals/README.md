# `@italia/globals`

This package contains extendable BaseComponent and BaseLocalizedComponent, utils and mixins, reusable in all web-components packages.

It is the foundation of all the Web Components in [`@italia/dev-kit-italia`](https://italia.github.io/dev-kit-italia).

## Installation

```bash
npm i @italia/globals
```

### BaseComponent

Web Component with basic functionality, used for all the components that don't required translation functionalities.

Example:

```js
import { BaseComponent } from '@italia/globals';

@customElement('my-element')
export class MyElement extends BaseComponent {
  render() {
    return html`<div>Your html</div>`;
  }
}
```

### BaseLocalizedComponent

Base localized component, to be used when you need translations in your component.

```js
import { registerTranslation } from '@italia/i18n';
import { BaseLocalizedComponent } from '@italia/globals';
import en from '../translations/en';
import es from '../translations/es';

registerTranslation(en, es);

@customElement('my-element')
export class MyElement extends BaseLocalizedComponent {
  render() {
    return html` <div>
        <h2>Lang</h2>
        ${this.$localize.lang()}
      </div>
      <div>
        <h2>Direction</h2>
        ${this.$localize.dir()}
      </div>
      <div>
        <h2>Translate string</h2>
        ${this.$t('hello_world')}
      </div>
      <div>
        <h2>Date</h2>
        ${this.$d('2021-09-15 14:00:00 ET', { year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
      <div>
        <h2>Number</h2>
        ${this.$n(1234.56, { style: 'currency', currency: 'USD' })}
      </div>`;
  }
}
```
