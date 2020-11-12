import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Input, { InputProps } from '@/components/atoms/Input';

export default {
  title: 'Example/Atoms/Input',
  component: Input,
  argTypes: {
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
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'place holder',
  autoComplete: '',
  autoFocus: false,
  color: 'primary',
  disabled: false,
  disableUnderline: false,
  endAdornment: undefined,
  error: false,
  fullWidth: false,
  id: undefined,
  inputComponent: 'input',
  inputProps: undefined,
  inputRef: undefined,
  margin: 'dense',
  name: undefined,
  readOnly: false,
  required: false,
  type: 'text',
};
