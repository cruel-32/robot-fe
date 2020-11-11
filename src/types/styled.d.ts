import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string;
      secondary: string;
      error: string;
      warning: string;
      info: string;
      success: string;
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
