import React from 'react';
import * as T from './Avatar.types';
import * as S from './Avatar.styles';

const AvatarContainer = ({ src, alt, size }: T.AvatarProps) => (
  <S.Wrapper size={size}>
    <S.Picture>
      <S.Avatar src={src} alt={alt} />
    </S.Picture>
  </S.Wrapper>
);

export default AvatarContainer;
