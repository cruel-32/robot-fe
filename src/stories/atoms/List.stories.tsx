import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import List, { ListProps } from '@/components/atoms/List';
import ListItem from '@/components/atoms/ListItem';

export default {
  title: 'Example/Atoms/List',
  component: List,
} as Meta;

const Template: Story<ListProps> = (args) => (
  <div>
    <h1>* 반드시 ListItem과 같이 사용합니다</h1>
    <List {...args}>
      <ListItem>list Item 1</ListItem>
      <ListItem>list Item 2</ListItem>
      <ListItem>list Item 3</ListItem>
    </List>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  classes: undefined,
  dense: false,
  disablePadding: false,
  subheader: undefined,
};
