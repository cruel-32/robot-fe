import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import MenuList, { MenuListProps } from '@/components/molecules/MenuList';

export default {
  title: 'Example/molecules/MenuList',
  component: MenuList,
} as Meta;

const Template: Story<MenuListProps> = (args) => <MenuList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      to: '/',
      text: 'home',
    },
    {
      to: '/role',
      text: '역할관리',
    },
    {
      to: '/account',
      text: '계정관리',
    },
    {
      to: 'http://naver.com',
      text: 'naver',
      target: '_blank',
    },
  ],
};
