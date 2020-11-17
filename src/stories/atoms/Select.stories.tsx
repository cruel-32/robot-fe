import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Select, { SelectProps } from '@/components/atoms/Select';

const items = [
  { text: '서울', value: '0001' },
  { text: '부산', value: '0002' },
  { text: '대전', value: '0003' },
  { text: '대구', value: '0004' },
  { text: '수원', value: '0005' },
  { text: '고양', value: '0006' },
  { text: '용인', value: '0007' },
  { text: '청주', value: '0008' },
  { text: '의정부', value: '0009' },
  { text: '강릉', value: '0010' },
  { text: '구리', value: '0011' },
  { text: '서산', value: '0012' },
];

export default {
  title: 'Example/Atoms/Select',
  component: Select,
  argTypes: {
    onChange: { action: 'onChange' },
    onClose: { action: 'onClose' },
    onOpen: { action: 'onOpen' },
    variant: {
      control: {
        type: 'select',
        options: ['outlined', 'standard'],
      },
    },
    value: {
      control: {
        type: 'inline-radio',
        options: items.map((item) => item.value),
      },
    },
  },
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  autoWidth: false,
  classes: undefined,
  defaultValue: undefined,
  displayEmpty: undefined,
  IconComponent: undefined,
  id: undefined,
  inputProps: undefined,
  label: undefined,
  labelId: undefined,
  labelWidth: undefined,
  MenuProps: undefined,
  multiple: false,
  native: undefined,
  open: undefined,
  SelectDisplayProps: undefined,
  variant: 'standard',
  value: '0003',
  textProp: 'text',
  valueProp: 'value',
  items,
};

export const Multiple = Template.bind({});
Multiple.args = {
  autoWidth: false,
  classes: undefined,
  defaultValue: undefined,
  displayEmpty: undefined,
  IconComponent: undefined,
  id: undefined,
  inputProps: undefined,
  label: undefined,
  labelId: undefined,
  labelWidth: undefined,
  MenuProps: undefined,
  multiple: true,
  native: undefined,
  open: undefined,
  SelectDisplayProps: undefined,
  variant: 'standard',
  value: ['0003', '0004'],
  textProp: 'text',
  valueProp: 'value',
  items,
};
