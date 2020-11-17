import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Radio, { RadioProps } from '@/components/atoms/Radio';

export default {
  title: 'Example/Atoms/Radio',
  component: Radio,
  argTypes: {
    onChange: { action: 'onChange' },
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

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  color: 'default',
  disabled: false,
  disableRipple: false,
  id: undefined,
  inputProps: undefined,
  inputRef: undefined,
  name: 'testRadio',
  required: false,
  size: 'medium',
  value: '1',
};
