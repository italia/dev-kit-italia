import { html } from 'lit';

export const StoryWidth100 = (story) => html`
  <div class="w100-layout">
    <style>
      :host,
      .w100-layout {
        width: 100%;
      }
      #storybook-root:has(.w100-layout) {
        width: 80%;
      }

      /* Forza i wrapper di Storybook che hai postato nello screenshot */
      .docs-story div[scale='1'],
      .innerZoomElementWrapper {
        width: 100% !important;
        display: block !important;
      }
    </style>
    ${story()}
  </div>
`;
