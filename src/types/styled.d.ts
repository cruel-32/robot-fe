import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string;
      secondary: string;
      disabled: string;
      warning: string;
      error: string;
      success: string;
      typography: string;
      hover: string;
      common: {
        mainBackGround: string;
        secondaryBackGround: string;
        thirdlyBackGround: string;
      };
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
