import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonProps } from '@material-ui/core/Button';

import Button from '@/components/atoms/Button';

export default {
  title: 'Example/Molecules/IconButton',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'outlined',
  children: '버튼1',
  color: 'inherit',
  disabled: false,
  disableElevation: false,
  disableFocusRipple: false,
  fullWidth: false,
  href: '',
  size: 'small',
};
