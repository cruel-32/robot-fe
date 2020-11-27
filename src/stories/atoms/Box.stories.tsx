import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Box, { BoxProps } from '@/components/atoms/Box';

export default {
  title: 'Example/atoms/Box',
  component: Box,
} as Meta;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Box Test',
  clone: false,
  component: 'div',
};
