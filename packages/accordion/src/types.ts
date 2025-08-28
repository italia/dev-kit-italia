export const HEADING_LEVELS = ['h2', 'h3', 'h4', 'h5', 'h6'];

export type HeadingLevels = (typeof HEADING_LEVELS)[number];

export type PressEvent = MouseEvent | KeyboardEvent;
export const isMouseEvent = (event: PressEvent): event is MouseEvent => event instanceof MouseEvent;
export const isKeyboardEvent = (event: PressEvent): event is KeyboardEvent => event instanceof KeyboardEvent;
