import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import useAccount from '@/hooks/useAccount';
import { logEvent } from '@/helpers/GAHelper';
import { RootState } from '@/src/stores';
import { AuthStateType } from '@/stores/auth/type';

let lang = 'ko-KR';

if (typeof localStorage !== 'undefined') {
  lang = localStorage.getItem('lang') || navigator.language;
}
export const getLang = () => lang;

const HeaderContainer: NextPage = () => {
  const { authState } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const { locale } = router;
  const { t, i18n } = useTranslation('common');

  const { fetchLoginSuccess, fetchLogout } = useAccount();

  const onLogout = () => {
    logEvent('test', 'logout');

    fetchLogout();
    router.push('/login');
  };

  const onLogin = () => {
    logEvent('test', 'login', 'label', 0);

    fetchLoginSuccess();
    router.push('/dashboard');
  };

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  const onChangeLanguage = (lang: string) => {
    localStorage.setItem('lang', lang);
    router.push(router.pathname, router.pathname, { locale: lang });
  };

  return (
    <div>
      {authState === AuthStateType.LOGGED_IN ? (
        <button type="button" onClick={() => onLogout()}>
          {t('common:auth.logout')}
        </button>
      ) : (
        <button type="button" onClick={() => onLogin()}>
          {t('common:auth.login')}
        </button>
      )}
      <button type="button" onClick={() => onChangeLanguage(i18n.language === 'en' ? 'ko' : 'en')}>
        {i18n.language === 'en' ? 'ko' : 'en'}
      </button>
    </div>
  );
};

export default HeaderContainer;
