import { useState, useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { NextComponentType, NextPageContext } from 'next';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '../utils/createEmotionCache';
import useStorage from '../utils/storage';
import lightTheme from '../styles/lightTheme';
import darkTheme from '../styles/darkTheme';
import MenuAppBar from '../app/components/base/MenuAppBar';

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

  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectTheme, setSelectTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    const desiredTheme = selectTheme == 'light' ? 'dark' : 'light';
    setSelectTheme(desiredTheme);
  };

  useEffect(() => {
    setActiveTheme(selectTheme == 'light' ? lightTheme : darkTheme);
  }, [selectTheme]);


  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        <MenuAppBar theme={activeTheme} colorMode={toggleTheme} />
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
