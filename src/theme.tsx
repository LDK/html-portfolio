// theme.tsx
import { createTheme, Palette, PaletteColor } from '@mui/material/styles';
import { ExtendedThemeOptions } from './ExtendedThemeOptions';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    hd: true;
  }
}

const baseThemeOptions:ExtendedThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      hd: 1800
    }
  },
  palette: {
    primary: {
      main: '#1976FF',
      light: '#85b6ff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffd700',
      dark: '#3A4A3A',
      contrastText: '#fff',
    },
  },
};

export const theme = createTheme({ ...baseThemeOptions});
export type ExtendedPalette = Palette & { tray: PaletteColor };