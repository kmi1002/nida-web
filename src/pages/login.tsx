import React from 'react';
import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageWithLayoutType from '@/types/pageWithLayout';
import { useTranslation } from 'next-i18next';
import LoginLayout from '@/templates/LoginLayout';
import { wrapper } from '@/constants/configureStore';
import SigninForm from '@/organisms/SigninForm';

const login: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <SigninForm />
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(store => async context => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
});

(login as PageWithLayoutType).layout = LoginLayout;

export default login;
