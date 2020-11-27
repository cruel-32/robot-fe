import 'styled-components';

declare interface IColorSet {
  light: string;
  main: string;
  dark: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string | IColorSet;
      secondary: string | IColorSet;
      error: string | IColorSet;
      warning: string | IColorSet;
      info: string | IColorSet;
      success: string | IColorSet;
      disabled: string;
      typography: string;
      hover: string;
    };
    fontWeight: {
      thin: number;
      ultraLight: number;
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
      extraBold: number;
      heavy: number;
    };
    breakPoint: {
      pc: string;
      mobile: string;
    };
  }
}
