export const INPUT_TYPES = ['text', 'email', 'number', 'tel', 'time', 'password', 'textarea'];

export const INPUT_SIZES = ['sm', undefined, 'lg'];

export type InputType = (typeof INPUT_TYPES)[number];
export type Sizes = (typeof INPUT_SIZES)[number];

export type Suggestion = {
  key: string | number;
  text: (config: Record<string, any>) => string;
  test: (password: string, config: Record<string, any>) => boolean;
};
