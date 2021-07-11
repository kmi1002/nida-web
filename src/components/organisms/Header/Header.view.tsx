import React from 'react';
import * as S from './Header.style';
import MenuNavigation from '@/molecules/MenuNavigation';
import ImageIcon from '@/atoms/ImageIcon';
import { useTranslation } from 'next-i18next';

const HeaderView = () => {
  const { t } = useTranslation('common');

  return (
    <S.Container>
      <div>
        <ImageIcon type="logo" />
      </div>
      <MenuNavigation items2={[{ title: 'header.navigation.product' }, { title: 'header.navigation.login' }]} />
    </S.Container>
  );
};

export default HeaderView;
