import React from 'react';
import * as T from './Avatar.type';
import * as S from './Avatar.style';

const Avatar = ({ src, alt }: T.AvatarProps) => (
  <S.Wrapper>
    <S.Picture>
      <S.Avatar src={src} alt={alt} />
    </S.Picture>
  </S.Wrapper>
);

export default Avatar;
