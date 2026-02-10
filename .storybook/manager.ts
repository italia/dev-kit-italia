import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';
import { defaultConfig, type TagBadgeParameters } from 'storybook-addon-tag-badges';
import './addons/changelog-tab';

// Colori per i badge dei tag
const IT_DOCS_COLORS = {
  // Lifecycle badges
  new: '#047857',
  beta: '#d97706',
  deprecated: '#dc2626',
  // Accessibility badges
  a11yOk: '#059669',
  a11yWarning: '#d97706',
  a11yIssue: '#dc2626',
  // Type badges
  primary: '#0066CC',
  documentation: '#6b7280',
  // Common
  white: '#ffffff',
};

// Stili comuni per i badge
const BADGE_COMMON_STYLE = {
  color: IT_DOCS_COLORS.white,
  fontSize: '14px !important',
  fontWeight: '600',
  borderRadius: '4px',
};

// Display comuni per badge in sidebar
const BADGE_SIDEBAR_DISPLAY = {
  sidebar: [
    {
      type: 'component' as const,
      skipInherited: true,
    },
  ],
  toolbar: true,
  mdx: true,
};

// Display per badge solo in toolbar/mdx (no sidebar)
const BADGE_NO_SIDEBAR_DISPLAY = {
  sidebar: false,
  toolbar: true,
  mdx: true,
};

addons.setConfig({
  theme: {
    ...themes.light, // puoi anche usare themes.dark o un tema personalizzato

    colorPrimary: IT_DOCS_COLORS.primary,
    colorSecondary: IT_DOCS_COLORS.primary,

    // UI
    appBg: '#f9f9f9',
    appContentBg: '#FFF',
    appBorderRadius: 4,
    appPreviewBg: '#f9f9f9',

    brandTitle: 'Dev Kit Italia',
    brandImage: './logo.png',

    fontBase: '"Titillium Web", Geneva, Tahoma, sans-serif',
  },

  tagBadges: [
    {
      tags: 'new',
      badge: {
        text: 'New',
        style: {
          ...BADGE_COMMON_STYLE,
          backgroundColor: IT_DOCS_COLORS.new,
        },
        tooltip: 'Componente recentemente aggiunto',
      },
      display: BADGE_SIDEBAR_DISPLAY,
    },
    {
      tags: 'alpha',
      badge: {
        text: 'Alpha',
        style: {
          ...BADGE_COMMON_STYLE,
          backgroundColor: IT_DOCS_COLORS.beta,
        },
        tooltip: 'In fase di sviluppo - potrebbero esserci modifiche',
      },
      display: BADGE_SIDEBAR_DISPLAY,
    },
    {
      tags: 'deprecated',
      badge: {
        text: 'Deprecato',
        style: {
          ...BADGE_COMMON_STYLE,
          backgroundColor: IT_DOCS_COLORS.deprecated,
        },
        tooltip: 'Questo componente è deprecato e verrà rimosso',
      },
      display: BADGE_SIDEBAR_DISPLAY,
    },
    {
      tags: 'a11y-ok',
      badge: {
        text: 'A11y ✓',
        style: {
          ...BADGE_COMMON_STYLE,
          backgroundColor: IT_DOCS_COLORS.a11yOk,
        },
        tooltip: 'Accessibilità completa e verificata',
      },
      display: BADGE_NO_SIDEBAR_DISPLAY,
    },
    {
      tags: 'a11y-warning',
      badge: {
        text: 'A11y ⚠',
        style: {
          ...BADGE_COMMON_STYLE,
          backgroundColor: IT_DOCS_COLORS.a11yWarning,
        },
        tooltip: 'Accessibilità con avvisi - alcuni miglioramenti necessari',
      },
      display: BADGE_NO_SIDEBAR_DISPLAY,
    },
    {
      tags: 'a11y-issue',
      badge: {
        text: 'A11y ✗',
        style: {
          ...BADGE_COMMON_STYLE,
          backgroundColor: IT_DOCS_COLORS.a11yIssue,
        },
        tooltip: 'Problemi di accessibilità - correzioni necessarie',
      },
      display: BADGE_NO_SIDEBAR_DISPLAY,
    },
    {
      tags: 'web-component',
      badge: {
        text: 'Componente',
        style: {
          ...BADGE_COMMON_STYLE,
          backgroundColor: IT_DOCS_COLORS.primary,
        },
        tooltip: 'Web Component',
      },
      display: BADGE_NO_SIDEBAR_DISPLAY,
    },
    {
      tags: 'documentation',
      badge: {
        text: 'Documentazione HTML',
        style: {
          ...BADGE_COMMON_STYLE,
          backgroundColor: IT_DOCS_COLORS.documentation,
        },
        tooltip: 'Documentazione da Bootstrap Italia - non implementato come Web Component',
      },
      display: BADGE_NO_SIDEBAR_DISPLAY,
    },
    // Place the default config after your custom matchers.
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
});
