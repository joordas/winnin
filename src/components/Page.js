import React from 'react';
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components';
import theme from './theme';
import Menu from './Menu';
import config, { PageTitleHeader } from '../config';

const Global = createGlobalStyle`
  html: {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Roboto';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;

const Inner = styled.div`
  max-width: ${theme.maxWidth};
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
`;

const Page = ({ pathname, children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <PageTitleHeader />
      <Inner>
        <Global />
        <Menu tabs={config.categories} selected={pathname} />
        {children}
      </Inner>
    </div>
  </ThemeProvider>
);

export default Page;
