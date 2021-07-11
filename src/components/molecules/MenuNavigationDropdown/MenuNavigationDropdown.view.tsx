import React from 'react';
import { useTranslation } from 'next-i18next';
import * as S from './MenuNavigationDropdown.style';
import * as T from './MenuNavigationDropdown.type';

const MenuNavigationDropdownView = ({ items }: T.MenuNavigationDropdownProps) => {
  const { t } = useTranslation('common');

  return (
    <S.Container>
      {items.map(({ categoryTitle, categoryItems }, index) => (
        <S.Section>
          {/*<S.SectionTitle>{t(categoryTitle)}</S.SectionTitle>*/}
          {/*<S.SectionContent>*/}
          {/*  {categoryItems.map(({ title, url, icon, disabled }, index) => (*/}
          {/*    <S.SubLink href={url}>*/}
          {/*      {icon && <p>1</p>}*/}
          {/*      <S.SubTitle>{t(title)}</S.SubTitle>*/}
          {/*    </S.SubLink>*/}
          {/*  ))}*/}
          {/*</S.SectionContent>*/}
        </S.Section>
      ))}
    </S.Container>
  );
};

export default MenuNavigationDropdownView;
