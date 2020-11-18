import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Title, { TitleProps } from '@/components/atoms/Title';

export default {
  title: 'Example/Atoms/Title',
  component: Title,
  argTypes: {
    color: {
      control: 'color',
    },
  },
} as Meta;

const Template: Story<TitleProps> = (args) => (
  <Title {...args}>
    <span>111</span>
    <span>222</span>
  </Title>
);

export const Default = Template.bind({});
Default.args = {
  children: '타이틀 테스트',
  color: '#333',
  fontSize: undefined,
  headline: 'h1',
};
