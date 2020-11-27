/* eslint-disable @typescript-eslint/no-unused-vars */
import { DefaultTheme } from 'styled-components';
import { createMuiTheme, Theme, ThemeProvider } from '@material-ui/core/styles';

export { ThemeProvider as MaterialThemeProvider };

export const gray = {
  light: '#efefef',
  main: '#ededed',
  dark: '#cccccc',
};

export const primary = {
  light: '#a6d4fa',
  main: '#90caf9',
  dark: '#648dae',
};

export const darkPrimary = {
  light: '#a6d4fa',
  main: '#90caf9',
  dark: '#648dae',
};

export const secondary = {
  light: '#f6a5c0',
  main: '#f48fb1',
  dark: '#aa647b',
};

export const error = {
  light: '#e57373',
  main: '#f44336',
  dark: '#d32f2f',
};

export const warning = {
  light: '#ffb74d',
  main: '#ff9800',
  dark: '#f57c00',
};

export const info = {
  light: '#64b5f6',
  main: '#2196f3',
  dark: '#1976d2',
};

export const success = {
  light: '#81c784',
  main: '#4caf50',
  dark: '#388e3c',
};

export const background = {
  default: '#f6f9fc',
  paper: '#fff',
};

export const darkBackground = {
  default: '#121212',
  paper: '#121212',
};

export const fontWeight = {
  thin: 100,
  ultraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  heavy: 900,
};

export const breakPoint = {
  pc: '@media screen and (min-width: 768px)',
  mobile: '@media screen and (max-width: 767px)',
};

export const defaultTheme: DefaultTheme = {
  palette: {
    primary,
    secondary,
    error,
    warning,
    info,
    success,
    disabled: '#777777',
    typography: '#333333',
    hover: '#888888',
  },
  fontWeight,
  breakPoint,
};

export const materialDefaultTheme: Theme = createMuiTheme({
  palette: {
    primary,
    secondary,
    error,
    warning,
    info,
    success,
    background,
  },
});

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  palette: {
    primary,
    secondary,
    error,
    warning,
    info,
    success,
    disabled: '#777777',
    typography: '#333333',
    hover: '#888888',
  },
};
