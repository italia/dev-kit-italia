import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../packages/**/stories/**/*.mdx', '../packages/**/stories/**/*.stories.@(js|ts|tsx|jsx|mjs)'],
  addons: [
    // '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    'storybook-addon-tag-badges',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  staticDirs: ['./assets'],
  docs: {
    defaultName: 'Documentazione',
  },
  viteFinal: async (config) => {
    config.css = config.css || {};
    config.css.preprocessorOptions = config.css.preprocessorOptions || {};
    config.css.preprocessorOptions.scss = {
      // Modificare gli import ora significherebbe una riscrittura pesante di bootstrap-italia.
      silenceDeprecations: [
        'import',
        'global-builtin',
        'function-units',
        'color-functions',
        'mixed-decls',
        'abs-percent',
      ],
    };

    // console.log('OptimizeDeps include:', config.optimizeDeps?.include);
    // console.log('OptimizeDeps exclude:', config.optimizeDeps?.exclude);
    config.optimizeDeps ??= {};
    config.optimizeDeps.exclude ??= [];

    // Aggiungi manualmente pacchetti sospetti
    config.optimizeDeps.exclude.push('@storybook/addon-docs/mdx-react-shim');
    config.optimizeDeps.exclude.push('@storybook/addon-docs');
    config.optimizeDeps.exclude.push('@mdx-js/react');

    return config;
  },
};
export default config;
