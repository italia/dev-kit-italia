export const TAB_PLACEMENTS = ['top', 'bottom', 'start', 'end'] as const;
export type TabPlacement = (typeof TAB_PLACEMENTS)[number];
