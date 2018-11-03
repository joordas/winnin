import React, { Component } from 'react';
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components';
import theme from './theme';
import Menu from './Menu';
import config from '../config';

const Global = createGlobalStyle`
  html: {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

const Inner = styled.div`
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Inner>
          <Global />
          <Menu tabs={config.categories} />
          {this.props.children}
        </Inner>
      </ThemeProvider>
    );
  }
}

export default Page;
