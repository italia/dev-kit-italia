export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type AvatarColor = 'primary' | 'secondary' | '';

export type AvatarPresence = 'active' | 'busy' | 'hidden' | '';

export type AvatarStatus = 'approved' | 'declined' | 'notify' | '';

export type AvatarType = 'image' | 'text' | 'icon' | '';

export type AvatarGroupSize = 'sm' | 'md';
export type AvatarGroupDirection = 'vertical' | 'horizontal';

export interface AvatarProps {
  size?: AvatarSize;
  color?: AvatarColor;
  presence?: AvatarPresence;
  status?: AvatarStatus;
  type?: AvatarType;
  src?: string;
  alt?: string;
  text?: string;
  initials?: string;
  icon?: string;
  href?: string;
  title?: string;
  extraText?: string;
  extraTextTag?: 'h3' | 'h4' | 'p' | 'time';
}
