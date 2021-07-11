export enum IconType {
  NO_IMAGE = 'no-image',
  LOGO = 'logo',
}

export interface StyleProps {
  flipHorizontal?: boolean;
  flipVertical?: boolean;
}

export interface ImgProps extends StyleProps {
  src: string;
  alt: string;
}

export interface IconProps extends StyleProps {
  type: 'no-image';
}
