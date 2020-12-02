import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import DetailGrid, { DetailGridProps } from '@/components/organisms/DetailGrid';

export default {
  title: 'Example/organisms/DetailGrid',
  component: DetailGrid,
  argTypes: {
    onSelectionChange: { action: 'onSelectionChange' },
    confirmCallback: { action: 'confirmCallback' },
    modifyClickCallback: { action: 'modifyClickCallback' },
    onCellClick: { action: 'onCellClick' },
  },
} as Meta;

const Template: Story<DetailGridProps> = (args) => <DetailGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  detailColumns: [
    {
      field: 'id',
      label: '아이디',
    },
    {
      field: 'name',
      label: '이름',
    },
    {
      field: 'description',
      label: '설명',
    },
    {
      field: 'authorities',
      label: '권한',
    },
  ],
  data: {
    id: '0001',
    name: '김이름',
    description: '김이름에 대한 설명',
  },
};
