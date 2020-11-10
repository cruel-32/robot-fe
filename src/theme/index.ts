import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  palette: {
    primary: '#6793e5',
    secondary: '#444444',
    disabled: '#777777',
    warning: '#dde567',
    error: '#e56782',
    success: '#67e578',
    typography: '#333333',
    hover: '#888888',
    common: {
      mainBackGround: '#fff',
      secondaryBackGround: '#cccccc',
      thirdlyBackGround: '#121212',
    },
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

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  palette: {
    primary: '#6793e5',
    secondary: '#444444',
    disabled: '#777777',
    warning: '#dde567',
    error: '#e56782',
    success: '#67e578',
    typography: '#fff',
    hover: '#cccccc',
    common: {
      mainBackGround: '#121212',
      secondaryBackGround: '#cccccc',
      thirdlyBackGround: '#fff',
    },
  },
};
