import React from 'react';
import * as S from './ImageIcon.style';
import * as T from './ImageIcon.type';

const ImageIcon = ({ type, flipHorizontal, flipVertical }: T.IconProps) => {
  const IMAGES = {
    'no-image': 'null',
    logo: require('@/images/logo.png'),
  };

  return <S.Icon src={IMAGES[type]} alt="" flipHorizontal={flipHorizontal} flipVertical={flipVertical} />;
};

export default ImageIcon;
