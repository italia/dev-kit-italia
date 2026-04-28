export const THUMBNAV_HOVER_EFFECTS = ['nozoom', 'black', 'primary'] as const;
export const THUMBNAV_POSITIONS = ['bottom', 'top', 'left', 'right'] as const;
export const THUMBNAV_AUTO_COLUMNS = [2, 3, 4, 5] as const;

export type ThumbnnavHoverEffect = (typeof THUMBNAV_HOVER_EFFECTS)[number];
export type ThumbnnavPosition = (typeof THUMBNAV_POSITIONS)[number];
export type ThumbnnavAutoColumns = (typeof THUMBNAV_AUTO_COLUMNS)[number];
