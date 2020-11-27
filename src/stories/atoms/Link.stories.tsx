import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Link, { LinkProps } from '@/components/atoms/Link';

export default {
  title: 'Example/Atoms/Link',
  component: Link,
  // argTypes: {
  //   backgroundColor: {
  //     control: 'color',
  //   },
  // },
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <div>
    <Link {...args} />
    <p>
      spa router 링크가 필요할떄 이 컴포넌트를 사용하거나 useHistory 훅을
      사용하세요
    </p>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  to: '/',
  children: 'root link',
  target: '_blank',
};

export const External = Template.bind({});
External.args = {
  to: 'https://naver.com',
  children: 'naver',
  target: '_blank',
};
