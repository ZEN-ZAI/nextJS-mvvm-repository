import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '../app/createEmotionCache';
import { NextComponentType, NextPageContext } from 'next';
import MenuAppBar from '../app/components/base/MenuAppBar';
import useStorage from '../utils/storage';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  pageProps: any
  Component: NextComponentType<NextPageContext, any, {}> & { layoutProps: any }
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const { getItem, setItem } = useStorage();

  // if (typeof window !== 'undefined') {
  //   console.log('we are running on the client')
  //   const themeMode = localStorage.getItem('theme');
  //   console.log(themeMode);
  // } else {
  //     console.log('we are running on the server');
  // }

  React.useEffect(() => {
    setTimeout(() => {
      const themeMode = localStorage.getItem('theme');
      console.log(themeMode);
    }, 1000);
  }, []);

  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    setItem('theme', mode === 'light' ? 'dark' : 'light', 'local');
  };
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MenuAppBar theme={theme} colorMode={colorMode} />
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
