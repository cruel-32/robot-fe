import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ListContentsBox, {
  ListContentsBoxProps,
  ColDef,
  RowsProp,
} from '@/components/organisms/ListContentsBox';

const defaultColumns: ColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
];
const defaultRows: RowsProp = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: 'Arya', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Josie', firstName: 'Lizal', age: 22 },
];

export default {
  title: 'Example/organisms/ListContentsBox',
  component: ListContentsBox,
  argTypes: {
    onSelectionChange: { action: 'onSelectionChange' },
    confirmCallback: { action: 'confirmCallback' },
    modifyClickCallback: { action: 'modifyClickCallback' },
    onCellClick: { action: 'onCellClick' },
    icon: {
      control: {
        type: 'select',
        // material icons의 목록은
        // https://material.io/resources/icons/?icon=image&style=baseline
        // 에서 확인 가능
        options: [
          '3d_rotation',
          'accessibility',
          'accessibility_new',
          'code',
          'done',
          'favorite_border',
          'favorite',
          'maximize',
          'minimize',
          'mediation',
          'search',
          'search_off',
          'settings_remote',
          'view_module',
          'zoom_in',
          'zoom_out',
          'error',
          'play_arrow',
          'pause',
          'stop',
          'web',
          'phone',
          'create',
          'clear',
          'redo',
          'undo',
          'battery_alert',
          'battery_charging_full',
          'battery_full',
          'battery_std',
          'battery_unknown',
          'bar_chart',
          'keyboard_arrow_down',
          'keyboard_arrow_left',
          'keyboard_arrow_right',
          'keyboard_arrow_up',
          'image',
        ],
      },
    },
  },
} as Meta;

const Template: Story<ListContentsBoxProps> = (args) => (
  <ListContentsBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'list 컨텐츠',
  icon: '3d_rotation',
  columns: defaultColumns,
  rows: defaultRows,
};
