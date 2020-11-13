import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Grid, { GridProps } from '@/components/atoms/Grid';

export default {
  title: 'Example/atoms/Grid',
  component: Grid,
  argTypes: {
    fontSize: {
      control: {
        type: 'select',
        options: ['inherit', 'default', 'small', 'large'],
      },
    },
  },
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {};
