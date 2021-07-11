import React from 'react';
import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageWithLayoutType from '@/types/pageWithLayout';
import AppLayout from '@/templates/AppLayout';
import { wrapper } from '@/constants/configureStore';

const Dashboard: NextPage = () => {
  return <>Dashboard</>;
};

export const getStaticProps = wrapper.getStaticProps(store => async context => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
});

(Dashboard as PageWithLayoutType).layout = AppLayout;

export default Dashboard;
