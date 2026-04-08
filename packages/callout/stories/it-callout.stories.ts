import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type CalloutVariant, CALLOUT_VARIANTS } from '../src/types.ts';

interface CalloutProps {
  variant: CalloutVariant;
  highlight: boolean;
  calloutMore?: boolean;
  bigText?: boolean;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const renderComponent = ({
  variant = '',
  highlight = false,
  calloutMore = false,
  icon = '',
  title = 'Titolo callout',
  content = html`<p>
    Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
    non augue non purus vestibulum varius.
  </p>`,
  moreContent = undefined,
  bigText = false,
  headingLevel = 'h2',
}) => html`
  <it-callout
    variant="${ifDefined(variant)}"
    ?highlight="${highlight}"
    ?callout-more="${calloutMore}"
    ?big-text="${bigText}"
    heading-level="${headingLevel}"
  >
    ${icon ? html`<it-icon slot="icon" name="${icon}" size="md"></it-icon>` : nothing}
    <span slot="title">${title}</span>
    ${content} ${moreContent}
  </it-callout>
`;

const meta = {
  title: 'Componenti/Callout',
  tags: ['alpha', 'a11y-ok', 'web-component'],
  component: 'it-callout',
  args: {
    variant: '',
    highlight: false,
    calloutMore: false,
    bigText: false,
    headingLevel: 'h2',
  },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Variante di colore del callout',
      options: CALLOUT_VARIANTS,
    },
    highlight: {
      control: 'boolean',
      description: 'Applica lo stile highlight (bordo solo a sinistra)',
      table: { defaultValue: { summary: 'false' } },
    },
    calloutMore: {
      name: 'callout-more',
      control: 'boolean',
      description:
        'Applica lo stile "Approfondimento" all callout. Aggiungi eventuale contenuto collassabile da mostrare nello slot `more-content`',
      table: { defaultValue: { summary: 'false' } },
    },
    bigText: {
      name: 'big-text',
      control: 'boolean',
      description: "Applica lo stile per testo più grande all'interno del callout",
      table: { defaultValue: { summary: 'false' } },
    },
    headingLevel: {
      name: 'heading-level',
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Livello di intestazione semantica per il titolo del callout',
      table: { defaultValue: { summary: 'h2' } },
    },
  },
} satisfies Meta<CalloutProps>;

export default meta;
type Story = StoryObj<CalloutProps>;

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],

  render: (params) => renderComponent({ ...params, icon: 'it-info-circle' }),
};

export const CalloutBase: Story = {
  render: (params) => html` <div class="row">${renderComponent({ ...params, icon: 'it-info-circle' })}</div> `,
};
export const CalloutBigText: Story = {
  render: (params) => html`
    <div class="row">${renderComponent({ ...params, icon: 'it-info-circle', bigText: true })}</div>
  `,
};

export const CalloutPrimario: Story = {
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'primary',
        title: 'Note a riguardo',
        icon: 'it-info-circle',
        // @ts-ignore
        content: html`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `,
      })}
    </div>
  `,
};

export const CalloutSuccess: Story = {
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'success',
        title: 'Titolo di conferma',
        icon: 'it-check-circle',
        // @ts-ignore
        content: html`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `,
      })}
    </div>
  `,
};

export const CalloutWarning: Story = {
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'warning',
        title: 'Titolo di attenzione',
        icon: 'it-warning-circle',
        // @ts-ignore
        content: html`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `,
      })}
    </div>
  `,
};

export const CalloutDanger: Story = {
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'danger',
        title: 'Titolo di allerta',
        icon: 'it-close-circle',
        // @ts-ignore
        content: html`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `,
      })}
    </div>
  `,
};

export const HighlightBase: Story = {
  render: () => html`
    <div class="row">
      ${renderComponent({
        highlight: true,
        title: 'Titolo callout',
        icon: 'it-info-circle',

        content: html`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `,
      })}
    </div>
  `,
};

export const HighlightPrimario: Story = {
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'primary',
        highlight: true,

        title: 'Titolo callout',
        icon: 'it-info-circle',

        content: html`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `,
      })}
    </div>
  `,
};

export const HighlightSuccess: Story = {
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'success',
        highlight: true,

        title: 'Titolo di conferma',
        icon: 'it-check-circle',
        content: html`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `,
      })}
    </div>
  `,
};

export const HighlightWarning: Story = {
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'warning',
        highlight: true,

        title: 'Titolo di attenzione',
        icon: 'it-warning-circle',
        content: html`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `,
      })}
    </div>
  `,
};

export const HighlightDanger: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'closed',
      },
    },
  },
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'danger',
        highlight: true,

        title: 'Titolo di allerta',
        icon: 'it-close-circle',
        content: html`
          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
          interdum magna, eu commodo odio mauris semper dolor.
        `,
      })}
    </div>
  `,
};

export const CalloutApprofondimento: Story = {
  render: () => html`
    <div class="row" style="background-color: #fff; padding: 2rem">
      <!-- START CALLOUT APPROFONDIMENTO -->
      ${renderComponent({
        calloutMore: true,
        title: 'Approfondimento',
        icon: 'it-info-circle',
        content: html`
          <p>
            Quisque suscipit interdum augue non volutpat. Cras tristique arcu tortor. Mauris eu magna nibh. Curabitur
            malesuada neque in lectus sagittis accumsan. In vitae justo eros. Maecenas pellentesque lacinia ipsum vitae
            rhoncus. Vestibulum pretium tempor turpis, nec gravida eros viverra in. Proin dictum nibh ut semper
            tristique.
          </p>
          <p>
            Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue
            molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat
            interdum magna, eu commodo odio mauris semper dolor.
          </p>
          <p>
            Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet,
            <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas
            ullamcorper tincidunt nulla quis laoreet.
          </p>
        `,
        // @ts-ignore
        moreContent: html`
          <it-callout-more>
            <span slot="label">Leggi tutto</span>
            <div slot="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </div>
            <a slot="extra" class="callout-more-download" href="#">
              <it-icon name="it-download" color="primary" size="sm"></it-icon>
              <span class="visually-hidden">Scarica il contenuto in PDF </span>
              Download
            </a>
          </it-callout-more>
        `,
      })}
      <!-- END CALLOUT APPROFONDIMENTO -->
    </div>
  `,
};
