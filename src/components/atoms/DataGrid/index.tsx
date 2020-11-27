/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import {
  DataGrid as OriginDataGrid,
  DataGridProps as OriginDataGridProps,
} from '@material-ui/data-grid';

export type {
  Columns,
  ColDef,
  RowsProp,
  RowSelectedParams,
  SelectionChangeParams,
  CellParams,
} from '@material-ui/data-grid';

// 유료 라이센스...
// import {
//   XGrid as DataGrid,
//   XGridProps as OriginDataGridProps,
//   ColDef,
//   RowsProp,
// } from '@material-ui/x-grid';

export type DataGridProps = Omit<OriginDataGridProps, 'startIcon' | 'endIcon'>;
const StyledDataGrid = styled(OriginDataGrid)`
  color: ${({ theme }) => theme.palette.typography};
`;

const DataGrid = (props: DataGridProps) => {
  const {
    rowHeight = 35,
    rowsPerPageOptions = [20, 50, 100],
    autoHeight = true,
    pageSize = 100,
  } = props;

  return (
    <StyledDataGrid
      {...props}
      rowsPerPageOptions={rowsPerPageOptions}
      rowHeight={rowHeight}
      autoHeight={autoHeight}
      pageSize={pageSize}
    />
  );
};
export default DataGrid;
