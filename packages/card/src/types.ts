export const CARD_VARIANTS = ['default', 'inline', 'inline-reverse', 'inline-mini', 'inline-mini-reverse'] as const;
export type CardVariant = (typeof CARD_VARIANTS)[number];
