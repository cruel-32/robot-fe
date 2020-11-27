import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FormFactory, {
  FormFactoryProps,
} from '@/components/molecules/FormFactory';

export default {
  title: 'Example/Molecules/FormFactory',
  component: FormFactory,
  argTypes: {
    inputHandler: { action: 'inputHandler' },
    form: {
      control: {
        type: 'select',
        options: ['input', 'textarea', 'select', 'checkbox', 'radio'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'number', 'password'],
      },
    },
  },
} as Meta;

const Template: Story<FormFactoryProps> = (args) => <FormFactory {...args} />;

export const Default = Template.bind({});
Default.args = {
  form: 'input',
  name: 'name',
  value: '1',
  disabled: false,
  items: [
    { value: '1', text: '1번' },
    { value: '2', text: '2번' },
    { value: '3', text: '3번' },
  ],
};
