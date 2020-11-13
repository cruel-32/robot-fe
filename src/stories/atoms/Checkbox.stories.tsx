import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from '@/components/atoms/Checkbox';

export default {
  title: 'Example/Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['medium', 'small'],
      },
    },
    color: {
      control: {
        type: 'select',
        expanded: true,
        options: ['default', 'primary', 'secondary'],
      },
    },
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  checkedIcon: undefined,
  classes: undefined,
  color: 'default',
  disabled: false,
  disableRipple: false,
  icon: undefined,
  id: undefined,
  indeterminate: undefined,
  indeterminateIcon: undefined,
  inputProps: undefined,
  inputRef: undefined,
  required: false,
  size: 'medium',
  value: undefined,
};
