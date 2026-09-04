export const CARD_VARIANTS = [
  'default',
  'inline',
  'inline-reverse',
  'inline-mini',
  'inline-mini-reverse',
  'profile',
  'location',
  'banner',
  'inline-banner',
  'inline-banner-reverse',
  'inline-banner-mini',
  'inline-banner-mini-reverse',
] as const;
export type CardVariant = (typeof CARD_VARIANTS)[number];

export const CARD_BORDER_COLORS = ['primary', 'secondary', 'success', 'danger', 'warning'] as const;
export type CardBorderColor = (typeof CARD_BORDER_COLORS)[number];

export const CARD_IMAGE_RATIOS = ['1x1', '4x3', '16x9', '21x9'] as const;
export type CardImageRatio = (typeof CARD_IMAGE_RATIOS)[number];

export const CARD_SHADOWS = ['none', 'sm', 'md', 'lg'] as const;
export type CardShadow = (typeof CARD_SHADOWS)[number];

export const CARD_HEADING_LEVELS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type CardHeadingLevel = (typeof CARD_HEADING_LEVELS)[number];

export const CARD_HEADING_SIZES = ['sm', 'md'] as const;
export type CardHeadingSize = (typeof CARD_HEADING_SIZES)[number];
