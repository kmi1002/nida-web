import React from 'react';
import * as T from './LeftMenuTemplate.type';
import * as S from './LeftMenuTemplate.style';

const LeftMenuTemplateContainer = ({ header, leftMenu, children, footer }: T.LeftMenuTemplateProps) => {
  return (
    <S.GridContainer container>
      <S.GridLeft item>{leftMenu}</S.GridLeft>
      <S.GridContent item>
        <S.Header>{header}</S.Header>
        <S.Contents>{children}</S.Contents>
        <S.Footer>{footer}</S.Footer>
      </S.GridContent>
    </S.GridContainer>
  );
};

export default LeftMenuTemplateContainer;
