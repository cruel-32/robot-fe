import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import LabeledInput, {
  LabeledInputProps,
} from '@/components/molecules/LabeledInput';

export default {
  title: 'Example/Molecules/LabeledInput',
  component: LabeledInput,
  argTypes: {
    onChange: { action: 'onChange' },
    onFocus: { action: 'onFocus' },
    onBlur: { action: 'onBlur' },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    margin: {
      control: {
        type: 'select',
        options: ['dense', 'none'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'email', 'tel', 'number', 'password', 'search'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['filled', 'outlined', 'standard'],
      },
    },
  },
} as Meta;

const Template: Story<LabeledInputProps> = (args) => <LabeledInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'place holder',
  autoComplete: '',
  autoFocus: false,
  color: 'primary',
  disabled: false,
  error: false,
  fullWidth: false,
  id: undefined,
  inputProps: undefined,
  inputRef: undefined,
  label: 'test label',
  margin: 'dense',
  name: undefined,
  required: false,
  type: 'text',

  classes: undefined,
  defaultValue: undefined,
  FormHelperTextProps: undefined,
  helperText: 'helper text',
  InputLabelProps: undefined,
  InputProps: undefined,
  select: undefined,
  SelectProps: undefined,
  size: undefined,
};
