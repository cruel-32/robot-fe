import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Container, { ContainerProps } from '@/components/atoms/Container';

export default {
  title: 'Example/atoms/Container',
  component: Container,
  argTypes: {
    maxWidth: {
      control: {
        type: 'select',
        options: ['md', 'sm', 'xl', 'xs', false],
      },
    },
  },
} as Meta;

const Template: Story<ContainerProps> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  disableGutters: false,
  fixed: false,
  maxWidth: 'lg',
};
