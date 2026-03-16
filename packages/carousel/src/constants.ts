import type { Options } from '@splidejs/splide';
import { CarouselVariants } from './types.js';

export const CONFIGS: Record<string, Options> = {
  'it-carousel-landscape-abstract-three-cols': {
    type: 'slide',
    perPage: 3,
    gap: 24,
    padding: { left: 0, right: 0 },
    arrows: false,
    breakpoints: {
      768: {
        perPage: 1,
        gap: 24,
        padding: { left: 0, right: 0 },
        arrows: false,
      },
      992: {
        perPage: 2,
        gap: 24,
        padding: { left: 40, right: 40 },
        arrows: false,
      },
    },
  },
  'it-carousel-landscape-abstract-three-cols-arrow-visible': {
    type: 'slide',
    perPage: 3,
    gap: 24,
    padding: { left: 0, right: 0 },
    arrows: true,
    breakpoints: {
      768: {
        perPage: 1,
        gap: 24,
        padding: { left: 40, right: 40 },
        arrows: true,
      },
      992: {
        perPage: 2,
        gap: 24,
        padding: { left: 40, right: 40 },
        arrows: true,
      },
    },
  },
  'it-big-img': {
    type: 'loop',
    perPage: 1,
    gap: 48,
    padding: { left: 320, right: 320 },
    arrows: false,
    breakpoints: {
      768: {
        perPage: 1,
        gap: 0,
        padding: { left: 0, right: 0 },
        arrows: false,
      },
      992: {
        perPage: 1,
        gap: 24,
        padding: { left: 160, right: 160 },
        arrows: false,
      },
    },
  },
  'it-standard-image': {
    type: 'loop',
    perPage: 3,
    gap: 24,
    padding: { left: 48, right: 48 },
    arrows: false,
    breakpoints: {
      768: {
        perPage: 1,
        gap: 24,
        padding: { left: 40, right: 40 },
        arrows: false,
      },
      992: {
        perPage: 2,
        gap: 24,
        padding: { left: 48, right: 48 },
        arrows: false,
      },
    },
  },
  'it-carousel-landscape-abstract': {
    type: 'slide',
    perPage: 1,
    gap: 24,
    padding: { left: 0, right: 0 },
    arrows: false,
    breakpoints: {
      768: {
        perPage: 1,
        gap: 24,
        padding: { left: 0, right: 0 },
        arrows: false,
      },
      992: {
        perPage: 1,
        gap: 24,
        padding: { left: 24, right: 24 },
        arrows: false,
      },
    },
  },
  'it-calendar-wrapper': {
    type: 'slide',
    perPage: 4,
    gap: 0,
    padding: { left: 0, right: 0 },
    arrows: false,
    breakpoints: {
      560: {
        perPage: 1,
        gap: 0,
        padding: { left: 24, right: 24 },
        arrows: false,
      },
      768: {
        perPage: 2,
        gap: 0,
        padding: { left: 0, right: 0 },
        arrows: false,
      },
      992: {
        perPage: 3,
        gap: 0,
        padding: { left: 0, right: 0 },
        arrows: false,
      },
    },
  },
};

/** Maps a CarouselVariant to its BSI wrapper class and Splide config key. */
export const VARIANT_MAP: Record<
  CarouselVariants,
  { wrapperClass: string; imageClass?: string; configKey: keyof typeof CONFIGS }
> = {
  /** Card editoriali inline (orizzontali), 1 colonna */
  single: {
    wrapperClass: 'it-carousel-landscape-abstract',
    configKey: 'it-carousel-landscape-abstract',
  },
  /** Card base solo testo, 3 colonne */
  columns: {
    wrapperClass: 'it-carousel-landscape-abstract-three-cols',
    configKey: 'it-carousel-landscape-abstract-three-cols',
  },
  /**
   * Fullscreen immagini grandi.
   * BSI richiede: it-carousel-landscape-abstract-three-cols + it-full-carousel + it-big-img
   */
  'gallery-lg': {
    wrapperClass: 'it-carousel-landscape-abstract-three-cols',
    imageClass: 'it-big-img',
    configKey: 'it-big-img',
  },
  /**
   * Fullscreen immagini standard.
   * BSI richiede: it-carousel-landscape-abstract-three-cols + it-full-carousel + it-standard-image
   */
  'gallery-sm': {
    wrapperClass: 'it-carousel-landscape-abstract-three-cols',
    imageClass: 'it-standard-image',
    configKey: 'it-standard-image',
  },
};
