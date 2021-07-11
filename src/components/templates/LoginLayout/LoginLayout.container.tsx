import React from 'react';
import * as T from './LoginLayout.type';
import * as S from './LoginLayout.style';
import Header from '@/organisms/Header';

const LoginLayoutContainer = ({ children }: T.LoginLayoutProps) => {
  return (
    <S.Wrapper>
      <Header />
      {children}
    </S.Wrapper>
  );
};

export default LoginLayoutContainer;
