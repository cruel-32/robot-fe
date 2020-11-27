import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ListItem, { ListItemProps } from '@/components/atoms/ListItem';

export default {
  title: 'Example/Atoms/ListItem',
  component: ListItem,
  icon: {
    control: {
      type: 'select',
      options: ['flex-start', 'center'],
    },
  },
} as Meta;

const Template: Story<ListItemProps> = (args) => (
  <div>
    <h1>* 반드시 List와 같이 사용합니다</h1>
    <ListItem>list Item 1</ListItem>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  alignItems: 'center',
  autoFocus: false,
  button: false,
  children: undefined,
  classes: undefined,
  ContainerComponent: undefined,
  ContainerProps: undefined,
  dense: false,
  disabled: false,
  disableGutters: false,
  divider: false,
  selected: false,
};
