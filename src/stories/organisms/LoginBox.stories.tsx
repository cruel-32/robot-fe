import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import LoginBox from '@/components/organisms/LoginBox';

export default {
  title: 'Example/organisms/LoginBox',
  component: LoginBox,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <LoginBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
