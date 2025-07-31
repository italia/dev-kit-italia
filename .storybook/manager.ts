import { addons, State } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light, // puoi anche usare themes.dark o un tema personalizzato
    brandTitle: 'Design Web Components',
    brandUrl: 'https://github.com/italia/dev-kit-italia', // opzionale
    brandImage: './logo.png',
  },
});
