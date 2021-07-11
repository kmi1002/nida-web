export interface StyleWrapperProps {
  /** 크기 */
  size?: 'small' | 'medium' | 'large';
}

export interface AvatarProps extends StyleWrapperProps {
  /** 경로 */
  src: string;

  /** 대체 텍스트 */
  alt: string;
}
