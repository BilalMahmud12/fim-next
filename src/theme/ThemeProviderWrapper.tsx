'use client'
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '.';
import GlobalStyles from './GlobalStyles';

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
