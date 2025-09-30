export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type AvatarColor = 'primary' | 'secondary' | '';

export type AvatarPresence = 'active' | 'busy' | 'hidden' | '';

export type AvatarStatus = 'approved' | 'declined' | 'notify' | '';

export type AvatarType = 'image' | 'text' | 'icon' | 'dropdown' | '';

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
  icon?: string;
  href?: string;
  avatarTitle?: string;
}
