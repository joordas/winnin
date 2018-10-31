import React from 'react';
import App, { Container } from 'next/app';
import Page from '../src/components/Page';

class CustomApp extends App {
  static getInitialProps() {
    return {};
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}

export default CustomApp;