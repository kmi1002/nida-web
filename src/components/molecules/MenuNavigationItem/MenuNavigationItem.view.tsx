import React from 'react';
import MenuNavigationDropdown from '@/molecules/MenuNavigationDropdown';
import { useTranslation } from 'next-i18next';
import * as S from './MenuNavigationItem.style';
import * as T from './MenuNavigationItem.type';

const MenuNavigationItemView = ({
  title,
  items,
  selected,
  onMouseOver,
  onFocus,
  onMouseLeave,
  onBlur,
  onClick,
}: T.MenuNavigationItemProps) => {
  const { t } = useTranslation('common');

  return (
    <S.Container
      onMouseOver={onMouseOver}
      onFocus={onFocus}
      onMouseLeave={onMouseLeave}
      onBlur={onBlur}
      onClick={onClick}
    >
      <S.Title>{t(title)}</S.Title>
      {selected && items && <MenuNavigationDropdown items={items} />}
    </S.Container>
  );
};

export default MenuNavigationItemView;
