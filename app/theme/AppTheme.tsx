'use client'
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';
import { purpleTheme } from '.';

interface Props {
  children: ReactNode
}
export function AppTheme({ children }: Props) {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}