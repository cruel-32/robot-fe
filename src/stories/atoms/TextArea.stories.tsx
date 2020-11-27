import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TextArea, { TextAreaProps } from '@/components/atoms/TextArea';

export default {
  title: 'Example/Atoms/TextArea',
  component: TextArea,
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
  },
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

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
  inputRef: undefined,
  margin: 'dense',
  name: undefined,
  required: false,
  classes: undefined,
  defaultValue: undefined,
  FormHelperTextProps: undefined,
  helperText: undefined,
  InputLabelProps: undefined,
  InputProps: undefined,
  label: undefined,
  select: undefined,
  SelectProps: undefined,
  size: undefined,
  rows: 5,
  rowsMax: 5,
};
