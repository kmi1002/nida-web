import React from 'react';
import * as T from './GenericTemplate.type';
import * as S from './GenericTemplate.style';

const GenericTemplateContainer = ({ children }: T.GenericTemplateProps) => {
  return (
    <S.Wrapper>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};

export default GenericTemplateContainer;
