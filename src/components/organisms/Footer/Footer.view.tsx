import React from 'react';

import Navigation from '@/molecules/Navigation';
import { brandLife } from '@/helpers/CompnayHelper';
import * as S from './Footer.style';
import * as T from './Footer.type';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'next-i18next';

const FooterView = ({ menus }: T.FooterProps) => {
  const { t } = useTranslation('common');

  // constants의 값으로 대체 할 수도 있다.
  const brandStartYear = t('brand.startYear');

  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterRow>
          <S.FooterNavigation>
            <Navigation direction="horizontal" items={menus} />
          </S.FooterNavigation>
        </S.FooterRow>
        <S.FooterRow>
          <S.FooterInfo>
            <span>
              <b>{t('company.name.ko')}</b>
            </span>
            <span>
              {t('company.ceo.key')} : <b>{t('company.ceo.value')}</b>
            </span>
          </S.FooterInfo>
          <S.FooterInfo>
            <span>
              {t('company.address.key')} : <b>{t('company.address.value')}</b>
            </span>
            <span>
              {t('company.email.key')} : <b>{t('company.email.value')}</b>
            </span>
          </S.FooterInfo>
          <S.FooterInfo>
            <span>
              {t('company.crn.key')} : <b>{t('company.crn.value')}</b>
            </span>
          </S.FooterInfo>
        </S.FooterRow>
        <S.FooterRow>
          <S.Copyright variant="subtitle1">
            {t('footer.copyright', { year: brandLife(brandStartYear), company: t('company.name.en') })}
          </S.Copyright>
        </S.FooterRow>
      </S.FooterContainer>
    </S.Footer>
  );
};

export default FooterView;
