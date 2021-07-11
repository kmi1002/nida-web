import React from 'react';
import MenuNavigationItem from '../MenuNavigationItem';

import * as S from './MenuNavigation.style';
import * as T from './MenuNavigation.type';

const MenuNavigationView = ({ items2 }: T.MenuNavigationProps) => {
  return (
    <S.Container>
      {items2.map(({ title, items }) => {
        return <MenuNavigationItem title={title} items={items} />;
      })}
    </S.Container>
  );
};

export default MenuNavigationView;
