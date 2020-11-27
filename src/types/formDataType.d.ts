declare interface IFormDataType {
  value: any;
  text: string;
}

declare type InputHandler = (param: { name: string; value: any }) => void;
