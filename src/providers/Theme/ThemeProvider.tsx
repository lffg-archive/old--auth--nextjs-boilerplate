import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import theme from '~/config/theme';
import GlobalStyle from './GlobalStyle';

interface Props {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </StyledComponentsThemeProvider>
  );
}
