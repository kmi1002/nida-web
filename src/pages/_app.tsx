import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';
import { wrapper } from '@/constants/configureStore';
import GlobalStyle from '@/styles/GlobalStyles';
import theme from '@/styles/theme';
import PageWithLayoutType from '@/types/pageWithLayout';
import { initGA, logPageView } from '@/helpers/GAHelper';
import { useRouter } from 'next/router';

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

const RootApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as PageWithLayoutType).layout || React.Fragment;
  const store: any = useStore();
  const router = useRouter();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA(process.env.GA_APP_ID);
      window.GA_INITIALIZED = true;
    }

    router.events.on('routeChangeComplete', logPageView);

    return () => {
      router.events.off('routeChangeComplete', logPageView);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Next.js</title>
      </Head>
      <PersistGate persistor={persistStore(store)} loading={<div>Loading</div>}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </PersistGate>
    </>
  );
};

export default wrapper.withRedux(appWithTranslation(RootApp));
