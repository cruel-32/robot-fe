import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Grid, { GridProps, ColDef, RowsProp } from '@/components/atoms/Grid';

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
  title: 'Example/atoms/Grid',
  component: Grid,
  argTypes: {
    onCellClick: { action: 'onCellClick' },
    onCellHover: { action: 'onCellHover' },
    onRowClick: { action: 'onRowClick' },
    onRowHover: { action: 'onRowHover' },
    onRowSelected: { action: 'onRowSelected' },
    onSelectionChange: { action: 'onSelectionChange' },
    onColumnHeaderClick: { action: 'onColumnHeaderClick' },
    onSortModelChange: { action: 'onSortModelChange' },
    onPageChange: { action: 'onPageChange' },
    onPageSizeChange: { action: 'onPageSizeChange' },
    onError: { action: 'onError' },
    paginationMode: {
      control: {
        type: 'select',
        options: ['client', 'server'],
      },
    },
    sortingMode: {
      control: {
        type: 'select',
        options: ['client', 'server'],
      },
    },
  },
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: defaultColumns,
  rows: defaultRows,
  columnTypes: undefined,
  components: undefined,
  loading: false,
  className: undefined,
  error: undefined,
  autoHeight: true,
  rowHeight: 52,
  headerHeight: 56,
  scrollbarSize: 15,
  columnBuffer: 2,
  showCellRightBorder: false,
  showColumnRightBorder: false,
  disableExtendRowFullWidth: false,
  sortingOrder: ['asc', 'desc', null],
  pageSize: 100,
  autoPageSize: false,
  rowsPerPageOptions: [25, 50, 100],
  paginationMode: 'client',
  rowCount: undefined,
  page: 1,
  sortingMode: 'client',
  hideFooter: false,
  hideFooterRowCount: false,
  hideFooterSelectedRowCount: false,
  hideFooterPagination: false,
  checkboxSelection: false,
  disableSelectionOnClick: false,
  logger: undefined,
  logLevel: false,
  sortModel: undefined,
  icons: undefined,
};
