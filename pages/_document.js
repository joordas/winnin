import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // custom document so styled-components can render CSS via SSR
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="pt-BR">
        <Head>
          {this.props.styleTags}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
            rel="stylesheet"
          />
          <title>Desafio Winnin</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
