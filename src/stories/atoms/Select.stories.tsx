import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Select, { SelectProps } from '@/components/atoms/Select';

export default {
  title: 'Example/Atoms/Select',
  component: Select,
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
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
  },
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'standard',
  children: undefined,
  classes: undefined,
  inputProps: undefined,
  value: '0003',
  textProp: 'text',
  valueProp: 'value',
  items: [
    { text: '서울', value: '0001' },
    { text: '부산', value: '0002' },
    { text: '대전', value: '0003' },
    { text: '대구', value: '0004' },
  ],
};
