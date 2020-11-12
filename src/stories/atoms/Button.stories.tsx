import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '@/components/atoms/Button';

export default {
  title: 'Example/Atoms/Button',
  component: Button,
  argTypes: {
    /** 리액트 기본적인 이벤트 props는 작성하지 않아도 됩니다. 아래는 테스트용 코드 */
    // onClick: {
    //   action: 'clicked',
    // },
    // onFocus: {
    //   action: 'focusin',
    // },
    // onBlur: {
    //   action: 'focusout',
    // },
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
    color: {
      control: {
        type: 'select',
        expanded: true,
        options: ['default', 'inherit', 'primary', 'secondary'],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'outlined',
  children: '버튼1',
  color: 'inherit',
  disabled: false,
  disableElevation: false,
  disableFocusRipple: false,
  fullWidth: false,
  href: '',
  size: 'small',
};
