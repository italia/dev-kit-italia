import type { DefaultTranslation } from '@italia/i18n';

const translation: DefaultTranslation = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',

  showHidePassword: 'Mostra/Nascondi Password.',
  shortPass: 'Password troppo breve.',
  badPass: 'Password debole.',
  goodPass: 'Password abbastanza sicura.',
  strongPass: 'Password sicura.',
  ariaLabelPasswordMeter: 'Robustezza della password',
  passwordSuggestionsLabel: 'Suggerimenti per una buona password:',
  passwordSuggestionLength: 'Almeno {minLength} caratteri.',
  passwordSuggestionUppercase: 'Una o più maiuscole.',
  passwordSuggestionLowercase: 'Una o più minuscole.',
  passwordSuggestionNumber: 'Uno o più numeri.',
  passwordSuggestionSpecial: 'Uno o più caratteri speciali.',
  passwordSuggestionFollowed: 'suggerimenti seguiti',
  passwordSuggestionFollowedPlural: 'suggerimenti seguiti',
  passwordSuggestionOf: 'di',
  passwordSuggestionMetLabel: 'Soddisfatto:',
  validityRequired: 'Questo campo è obbligatorio.',
  validityInvalid: 'Il valore non è corretto.',
  validityPattern: 'Il valore non corrisponde al formato richiesto.',
  validityMinlength: 'Il valore deve essere lungo almeno {minlength} caratteri.',
  validityMaxlength: 'Il valore deve essere lungo al massimo {maxlength} caratteri.',
};

export default translation;
