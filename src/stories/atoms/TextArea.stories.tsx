import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TextArea, { TextAreaProps } from '@/components/atoms/TextArea';

export default {
  title: 'Example/Atoms/TextArea',
  component: TextArea,
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
  disableUnderline: false,
  endAdornment: undefined,
  error: false,
  fullWidth: false,
  id: undefined,
  inputRef: undefined,
  margin: 'dense',
  name: undefined,
  readOnly: false,
  required: false,
  rows: 5,
  rowsMax: 5,
};
