export const ICON_COLORS = ['primary', 'secondary', 'success', 'warning', 'danger', 'inverse'] as const;
export const ICON_SIZES = ['xs', 'sm', undefined, 'lg', 'xl'] as const;
export const ICON_ALIGNMENTS = ['top', 'middle', 'bottom'] as const;

export type Colors = (typeof ICON_COLORS)[number];
export type Sizes = (typeof ICON_SIZES)[number];
export type Alignments = (typeof ICON_ALIGNMENTS)[number];
