import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type CalloutVariant, CALLOUT_VARIANTS } from '../src/types.ts';

interface CalloutProps {
  variant: CalloutVariant;
  highlight: boolean;
  bigText: boolean;
}

const renderComponent = ({
  variant = 'primary',
  highlight = false,
  icon = '',
  title = 'Titolo callout',
  content = 'Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.',
  moreContent = '',
  bigText = false,
}) => html`
  <it-callout variant="${ifDefined(variant)}" ?highlight="${highlight}" ?bigText="${bigText}">
    ${icon ? html`<it-icon slot="icon" name="${icon}" size="md"></it-icon>` : nothing}
    <span slot="title">${title}</span>
    <p>${content}</p>
    ${moreContent ? html`<div slot="more-content">${moreContent}</div>` : ''}
  </it-callout>
`;

const meta = {
  title: 'Componenti/Callout',
  tags: ['beta', 'a11y-ok', 'web-component'],
  component: 'it-callout',
  args: {
    variant: '',
    highlight: false,
    bigText: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Variante di colore del callout',
      options: ['', ...CALLOUT_VARIANTS],
      table: { defaultValue: { summary: "''" } },
    },
    highlight: {
      control: 'boolean',
      description: 'Applica lo stile highlight (bordo solo a sinistra)',
      table: { defaultValue: { summary: 'false' } },
    },
    bigText: {
      control: 'boolean',
      description: 'Applica la dimensione grande al testo del callout',
      table: { defaultValue: { summary: 'false' } },
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
        highlight: false,
        // more rimosso
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
        highlight: false,
        // more rimosso
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
        highlight: false,
        // more rimosso
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
        highlight: false,
        // more rimosso
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
        variant: '',
        highlight: true,
        // more rimosso
        title: 'Titolo callout',
        icon: '',
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

export const HighlightPrimario: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'primary',
        highlight: true,
        // more rimosso
        title: 'Titolo callout',
        icon: '',
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

export const HighlightSuccess: Story = {
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'success',
        highlight: true,
        // more rimosso
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

export const HighlightWarning: Story = {
  render: () => html`
    <div class="row">
      ${renderComponent({
        variant: 'warning',
        highlight: true,
        // more rimosso
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
        // more rimosso
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

export const CalloutApprofondimento: Story = {
  render: () => html`
    <div class="row">
      <it-callout>
        <span slot="title">Approfondimento</span>
        <p>
          Quisque suscipit interdum augue non volutpat. Cras tristique arcu tortor. Mauris eu magna nibh. Curabitur
          malesuada neque in lectus sagittis accumsan. In vitae justo eros. Maecenas pellentesque lacinia ipsum vitae
          rhoncus. Vestibulum pretium tempor turpis, nec gravida eros viverra in. Proin dictum nibh ut semper tristique.
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
        <div slot="more-content">Contenuto aggiuntivo di approfondimento</div>
      </it-callout>
    </div>
  `,
};
