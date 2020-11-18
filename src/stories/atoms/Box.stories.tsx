import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Box, { BoxProps } from '@/components/atoms/Box';

export default {
  title: 'Example/Atoms/Box',
  component: Box,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} as Meta;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: '#fff',
  children: '박스 테스트',
  display: 'block',
  padding: '0px',
  margin: '0px',
};
