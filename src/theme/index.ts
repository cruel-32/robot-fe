import { DefaultTheme } from 'styled-components';
import { createMuiTheme, Theme, ThemeProvider } from '@material-ui/core/styles';

export { ThemeProvider as MaterialThemeProvider };

export const defaultTheme: DefaultTheme = {
  palette: {
    primary: '#90caf9',
    secondary: '#f48fb1',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
    success: '#4caf50',
    disabled: '#777777',
    typography: '#333333',
    hover: '#888888',
  },
  fontWeight: {
    thin: 100,
    ultraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    heavy: 900,
  },
  breakPoint: {
    pc: '@media screen and (min-width: 768px)',
    mobile: '@media screen and (max-width: 767px)',
  },
};

export const materialDefaultTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a6d4fa',
      main: '#90caf9',
      dark: '#648dae',
    },
    secondary: {
      light: '#f6a5c0',
      main: '#f48fb1',
      dark: '#aa647b',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
    },
  },
});

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  palette: {
    primary: '#90caf9',
    secondary: '#f48fb1',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
    success: '#4caf50',
    disabled: '#777777',
    typography: '#333333',
    hover: '#888888',
  },
};
