import React from 'react';
import Input, { InputProps } from '@/components/atoms/Input';

export type LabeledInputProps = InputProps;

const LabeledInput = (props: InputProps) => {
  const { children, type = 'text' } = props;
  return (
    <Input {...props} type={type}>
      {children}
    </Input>
  );
};
export default LabeledInput;
