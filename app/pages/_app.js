import App from 'next/app';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'Styles/global-style';
import Helmet from 'react-helmet';
import theme from 'Styles/theme';
import TabFocusOutlineStyles from 'Components/TabFocusOutlineStyles';

export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          defaultTitle="Next.js Starter"
          titleTemplate="%s | Next.js Starter"
          meta={[
            { charset: 'UTF-8' },
            process.env.NO_INDEX === 'true' ? { name: 'robots', content: 'noindex' } : false,
          ].filter(Boolean)}
        />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
          <TabFocusOutlineStyles />
        </ThemeProvider>
      </Fragment>
    );
  }
}
