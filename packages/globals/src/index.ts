import TrackFocus from './utils/track-focus.js';

import setAttributes from './directives/setAttributes.js';

export { TrackFocus, setAttributes };
export {
  BaseComponent,
  BaseComponentInterface,
  BaseComponentType,
  BaseLocalizedComponent,
} from './base-component/base-component.js';

export { FormControl } from './form/form-control.js';
export { formCollections, FormControlControllerOptions, FormControlController } from './form/form-controller.js';
export { cookies } from './utils/cookies.js';
export type Constructor<T = {}> = new (...args: any[]) => T;
