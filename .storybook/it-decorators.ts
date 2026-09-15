import { html } from 'lit';

export const StoryWidth100 = (story: any, ctx: any) => html` <div class="w100-layout">${story()}</div> `;

export const StoryHeader = (story: any, ctx: any) => html` <div class="header-full-layout">${story()}</div>`;
