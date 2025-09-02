import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: ['../packages/**/stories/**/*.mdx', '../packages/**/stories/**/*.stories.@(js|ts|tsx|jsx|mjs)'],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/blocks'),
    getAbsolutePath('@storybook/addon-a11y'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/web-components-vite'),
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
      silenceDeprecations: ['import', 'global-builtin', 'function-units', 'color-functions', 'mixed-decls'],
    };

    console.log('OptimizeDeps include:', config.optimizeDeps?.include);
    console.log('OptimizeDeps exclude:', config.optimizeDeps?.exclude);
    config.optimizeDeps ??= {};
    config.optimizeDeps.exclude ??= [];

    // Aggiungi manualmente pacchetti sospetti
    config.optimizeDeps.exclude.push('@storybook/addon-essentials/docs/mdx-react-shim');
    config.optimizeDeps.exclude.push('@storybook/addon-docs');
    config.optimizeDeps.exclude.push('@mdx-js/react');
    return config;
  },
};
export default config;
