/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import {
  DataGrid,
  DataGridProps,
  RowsProp,
  ColDef,
} from '@material-ui/data-grid';

// 유료 라이센스...
// import {
//   XGrid as DataGrid,
//   XGridProps as DataGridProps,
//   ColDef,
//   RowsProp,
// } from '@material-ui/x-grid';

export type GridProps = Omit<DataGridProps, 'startIcon' | 'endIcon'>;
const StyledGrid = styled(DataGrid)`
  color: ${({ theme }) => theme.palette.typography};
  /* box-shadow: 0 4px 6px rgba(10, 10, 12, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); */
  min-height: 300px;
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;
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
];

export default (props: GridProps) => {
  const {
    rowHeight = 40,
    columns = defaultColumns,
    rows = defaultRows,
  } = props;

  return (
    <StyledGrid
      {...props}
      rowHeight={rowHeight}
      columns={columns}
      rows={rows}
    />
  );
};
