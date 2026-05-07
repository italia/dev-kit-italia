import { html, type TemplateResult } from 'lit';

type ExampleOptions = {
  className?: string;
};

const helperStyles = html`<style>
  .dki-organizzare-i-contenuti-example {
    width: 100%;
    box-sizing: border-box;
  }

  .dki-organizzare-i-contenuti-example .bd-highlight {
    background-color: rgba(13, 110, 253, 0.15);
    border: 1px solid rgba(13, 110, 253, 0.25);
    padding: 1rem;
  }

  .dki-organizzare-i-contenuti-example .bd-example {
    padding: 1rem;
    border: 1px solid #dee2e6;
  }
</style>`;

export const wrapExample = (content: TemplateResult, options: ExampleOptions = {}) => {
  const className = ['dki-organizzare-i-contenuti-example', options.className].filter(Boolean).join(' ');
  return html`${helperStyles}
    <div class=${className}>${content}</div>`;
};
