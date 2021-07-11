import React from 'react';
import * as T from './AppTemplate.type';
import * as S from './AppTemplate.style';

const AppTemplateContainer = ({ header, hero, sponsor, children, footer }: T.AppTemplateProps) => {
  return (
    <S.Wrapper>
      <S.Header>{header}</S.Header>
      {hero && <S.Hero>{hero}</S.Hero>}
      {sponsor && <S.Sponsor>{sponsor}</S.Sponsor>}
      <S.Content>{children}</S.Content>
      <S.Footer>{footer}</S.Footer>
    </S.Wrapper>
  );
};

export default AppTemplateContainer;
