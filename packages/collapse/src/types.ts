export type TriggerTag = keyof HTMLElementTagNameMap;
export type PressEvent = MouseEvent | KeyboardEvent | PointerEvent;
export const isMouseEvent = (event: PressEvent): event is MouseEvent => event instanceof MouseEvent;
export const isKeyboardEvent = (event: PressEvent): event is KeyboardEvent => event instanceof KeyboardEvent;
