/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import { DataGrid, DataGridProps } from '@material-ui/data-grid';

export type { ColDef, RowsProp } from '@material-ui/data-grid';

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
  min-height: 300px;
`;

export default (props: GridProps) => {
  const { rowHeight = 40, autoHeight = true } = props;

  return (
    <StyledGrid {...props} rowHeight={rowHeight} autoHeight={autoHeight} />
  );
};
