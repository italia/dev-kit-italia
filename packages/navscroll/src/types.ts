export const POSITION = ['top', 'bottom'] as const;
export const LINE_POSITION = [null, 'left', 'right'] as const;
export const DARK_MODE = [null, 'mobile', 'desktop', 'always'] as const;

export type Position = (typeof POSITION)[number];
export type LinePosition = (typeof LINE_POSITION)[number];
export type DarkMode = (typeof DARK_MODE)[number];
