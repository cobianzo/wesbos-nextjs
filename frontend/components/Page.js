import React from 'react';
import { PropTypes } from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    :root {
        --black:        #000;
        --red:          #ff0000;
        --white:        #fff;
        --gray:         #ccc;
        --grey:         var(--gray);
        --lightGray:    #eee;
        --offWhite:     #f4f4f4;
        --maxWidth:     1000px;
        --bs:           0 12px 24px 0 rgba(0,0,0,0.09);
    }

    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: ${(props) => (props.whiteColor ? 'white' : 'black')};
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;

    }
    a {
        text-decoration: none;
        color: var(--black);
    }
    a:hover {
        text-decoration: underline;
    }
    button {  font-family: 'radnika_next'; }
`;

const InnerStyle = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;
  margin: 0 auto;
`;

function Page({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />

      <InnerStyle>
        <h2>I am a page component</h2>
        {children}
      </InnerStyle>
    </>
  );
}

export default Page;
Page.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
