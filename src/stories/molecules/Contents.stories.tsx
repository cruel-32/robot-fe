import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ContentsBox, {
  ContentsBoxProps,
} from '@/components/molecules/ContentsBox';

export default {
  title: 'Example/Molecules/ContentsBox',
  component: ContentsBox,
  argTypes: {},
} as Meta;

const Template: Story<ContentsBoxProps> = (args) => <ContentsBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  topChildren: 'top content',
  children: 'center content',
  bottomChildren: 'bottom content',
};
