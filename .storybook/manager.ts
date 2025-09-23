import { addons, State } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import { defaultConfig, type TagBadgeParameters } from 'storybook-addon-tag-badges';

addons.setConfig({
  theme: {
    ...themes.light, // puoi anche usare themes.dark o un tema personalizzato

    colorPrimary: '#0066CC',
    colorSecondary: '#0066CC',

    // UI
    appBg: '#f9f9f9',
    appContentBg: '#FFF',
    appBorderRadius: 4,
    appPreviewBg: '#f9f9f9',

    brandTitle: 'Dev Kit Italia',
    brandImage: './logo.png',
  },

  tagBadges: [
    {
      tags: 'alpha',
      badge: ({ tag }) => {
        return {
          text: tag,
          bgColor: '#995c00',
          fgColor: '#ffffff',
        };
      },
      display: {
        sidebar: ['component', 'story', 'docs', 'group'],
      },
    },
    {
      tags: 'new',
      badge: ({ tag }) => {
        return {
          text: tag,
          bgColor: '#5c6f82',
          fgColor: '#ffffff',
        };
      },
      display: {
        sidebar: ['component', 'story', 'docs', 'group'],
      },
    },
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
});
