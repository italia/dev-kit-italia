export const TIMELINE_VARIANTS = ['classic', 'point-list'] as const;
export type TimelineVariant = (typeof TIMELINE_VARIANTS)[number];

export const TIMELINE_ELEMENT_VARIANTS = ['', 'current', 'past'] as const;
export type TimelineElementVariant = (typeof TIMELINE_ELEMENT_VARIANTS)[number];

/** Variants that have a non-white (dark/colored) pin background, requiring inverse icon color. */
export const TIMELINE_ELEMENT_DARK_VARIANTS: ReadonlyArray<TimelineElementVariant> = ['current', 'past'];

export const TIMELINE_HEADING_LEVELS = ['h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type TimelineHeadingLevel = (typeof TIMELINE_HEADING_LEVELS)[number];

export const TIMELINE_POINT_COLORS = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
] as const;
export type TimelinePointColor = (typeof TIMELINE_POINT_COLORS)[number];

export const TIMELINE_POINT_LIST_TAGS = ['ol', 'ul'] as const;
export type TimelinePointListTag = (typeof TIMELINE_POINT_LIST_TAGS)[number];
