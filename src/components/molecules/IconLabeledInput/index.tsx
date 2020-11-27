import React from 'react';
import Input, { InputProps } from '@/components/atoms/Input';
import Icon from '@/components/atoms/Icon';

export type IconLabeledInputProps = Omit<InputProps, 'color'> & {
  icon?: string;
  iconSize?: string;
  label?: string;
};

const IconLabeledInput = (props: IconLabeledInputProps) => {
  const { icon = 'account_circle', iconSize } = props;

  return (
    <Input
      {...props}
      InputProps={{
        startAdornment: (
          <Icon icon={icon} margin="0 5px 0 0" iconSize={iconSize} />
        ),
      }}
    />
  );
};

export default IconLabeledInput;
