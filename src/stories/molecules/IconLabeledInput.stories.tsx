import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import IconLabeledInput, {
  IconLabeledInputProps,
} from '@/components/molecules/IconLabeledInput';

export default {
  title: 'Example/Molecules/IconLabeledInput',
  component: IconLabeledInput,
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

const Template: Story<IconLabeledInputProps> = (args) => (
  <IconLabeledInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'place holder',
  autoComplete: '',
  autoFocus: false,
  disabled: false,
  error: false,
  fullWidth: false,
  id: undefined,
  inputProps: undefined,
  inputRef: undefined,
  margin: 'dense',
  name: undefined,
  required: false,
  type: 'text',
  classes: undefined,
  defaultValue: undefined,
  icon: 'account_circle',
  label: 'Icon Labeled Input',
  helperText: 'helper text',
};
