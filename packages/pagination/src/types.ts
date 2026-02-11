export const PAGINATION_SIZES = ['sm', 'lg'] as const;
export const PAGINATION_ALIGNMENTS = ['start', 'center', 'end'] as const;

export type PaginationSize = (typeof PAGINATION_SIZES)[number];
export type PaginationAlignment = (typeof PAGINATION_ALIGNMENTS)[number];
