import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100%;
  }

  body {
    background-color: #f3f7f9;
    color: #212121;
    line-height: 1.5;
    font-size: 17px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }
`;
