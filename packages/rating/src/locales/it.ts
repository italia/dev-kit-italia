import type { DefaultTranslation } from '@italia/i18n';

const translation: DefaultTranslation = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',

  noRating: 'Nessuna valutazione',
  ratingLabelSingle: (rating: number, max: number) => `${rating} stella su ${max}`,
  ratingLabelPlural: (rating: number, max: number) => `${rating} stelle su ${max}`,
};

export default translation;
