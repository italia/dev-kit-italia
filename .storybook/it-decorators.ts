import { html } from 'lit';

export const StoryWidth100 = (story) => html`
  <div class="w100-layout">
    <style>
      .w100-layout {
        width: 100%;
      }
      #storybook-root:has(.w100-layout) {
        width: 80%;
      }

      .docs-story div[scale='1'],
      .innerZoomElementWrapper {
        &:has(.w100-layout) {
          width: 100% !important;
          display: block !important;
        }
      }
      .docs-story div[scale='1']:has(.w100-layout) {
        margin-bottom: 2rem;
      }
    </style>
    ${story()}
  </div>
`;
