import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FormGrid, { FormGridProps } from '@/components/organisms/FormGrid';

export default {
  title: 'Example/organisms/FormGrid',
  component: FormGrid,
  argTypes: {
    inputHandler: { action: 'inputHandler' },
  },
} as Meta;

const Template: Story<FormGridProps> = (args) => <FormGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  forms: {
    id: {
      form: 'input',
      type: 'text',
      label: '아이디',
      disabled: true,
    },
    name: {
      form: 'input',
      type: 'text',
      label: '이름',
    },
    description: {
      form: 'textarea',
      label: '설명',
      options: {
        rows: 1,
        rowsMax: 3,
      },
    },
  },
  data: {
    id: 1,
    name: 'form 이름',
    description: 'form 설명',
  },
};
