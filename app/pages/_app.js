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

        <style jsx>
          {`
            @font-face {
              font-family: 'Inter';
              src: url('/fonts/Inter-Regular.woff2') format('woff2'),
                   url('/fonts/Inter-Regular.woff') format('woff');
              font-weight: 400;
              font-display: swap;
            }

            @font-face {
              font-family: 'Inter';
              src: url('/fonts/Inter-SemiBold.woff2') format('woff2'),
                   url('/fonts/Inter-SemiBold.woff') format('woff');
              font-weight: 600;
              font-display: swap;
            }
          `}
        </style>
      </Fragment>
    );
  }
}
