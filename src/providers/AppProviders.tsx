import React from 'react';
import ThemeProvider from './Theme/ThemeProvider';

interface Props {
  children: React.ReactNode;
}

export default function AppProviders({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
