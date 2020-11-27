import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import LogoutBox from '@/components/organisms/LogoutBox';

export default {
  title: 'Example/organisms/LogoutBox',
  component: LogoutBox,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <LogoutBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
