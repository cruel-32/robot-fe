import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SideHeader from '@/components/organisms/SideHeader';

export default {
  title: 'Example/organisms/SideHeader',
  component: SideHeader,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <SideHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
