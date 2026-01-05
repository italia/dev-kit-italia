import TrackFocus from './utils/track-focus.js';

import setAttributes from './directives/setAttributes.js';
import AriaKeyboardListController from './controllers/aria-keyboard-list-controller.js';
import { StoryFormControlMethodAndProps } from './stories/formControlReusableStories.js';
import { CollapsibleOrHiddenContentGuidelines } from './stories/reusableUsageGuidelinesStories.js';

declare global {
  interface Window {
    _itAnalytics: {
      version: string;
    };
  }
}

if (typeof window !== 'undefined') {
  window._itAnalytics = window._itAnalytics || {};
  window._itAnalytics = {
    ...window._itAnalytics,
    version: '1.0.0-alpha.3',
  };
}

export { TrackFocus, setAttributes, AriaKeyboardListController };
export type { AriaKeyboardConfig } from './controllers/aria-keyboard-list-controller.js';
export { RovingTabindexController } from './controllers/roving-tabindex-controller.js';
export type { RovingTabindexConfig } from './controllers/roving-tabindex-controller.js';
export {
  BaseComponent,
  BaseComponentInterface,
  BaseComponentType,
  BaseLocalizedComponent,
} from './base-component/base-component.js';
export {
  AriaKeyboardAccordionController,
  type AriaKeyboardAccordionConfig,
} from './controllers/aria-keyboard-accordion-controller.js';
export { CollapseAnimationController } from './controllers/collapse-controller.js';

export { FormControl } from './form/form-control.js';
export { formCollections, FormControlControllerOptions, FormControlController } from './form/form-controller.js';
export { cookies } from './utils/cookies.js';
export type Constructor<T = {}> = new (...args: any[]) => T;
export { WindowManager, type ScrollCallback, type ScrollState } from './window-manager.js';

export { StoryFormControlMethodAndProps, CollapsibleOrHiddenContentGuidelines };
