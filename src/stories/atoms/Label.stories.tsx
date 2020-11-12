import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Label, { LabelProps } from '@/components/atoms/Label';

export default {
  title: 'Example/Atoms/Label',
  component: Label,
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
    variant: {
      control: {
        type: 'select',
        options: ['filled', 'outlined', 'standard'],
      },
    },
  },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'label test',
  htmlFor: undefined,
  classes: undefined,
  color: 'primary',
  disableAnimation: false,
  disabled: false,
  error: false,
  focused: false,
  margin: undefined,
  required: false,
  shrink: false,
  variant: 'standard',
};
