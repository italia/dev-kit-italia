export const HEADING_LEVELS = ['h2', 'h3', 'h4', 'h5', 'h6'] as const;
export const ACCORDION_MODES = ['single', 'multiple'] as const;

export type HeadingLevels = (typeof HEADING_LEVELS)[number];
export type TriggerTag = keyof HTMLElementTagNameMap;
export type PressEvent = MouseEvent | KeyboardEvent;
export const isMouseEvent = (event: PressEvent): event is MouseEvent => event instanceof MouseEvent;
export const isKeyboardEvent = (event: PressEvent): event is KeyboardEvent => event instanceof KeyboardEvent;
export type AccordionMode = (typeof ACCORDION_MODES)[number];
