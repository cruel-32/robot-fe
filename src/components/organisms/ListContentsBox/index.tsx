import React, { useState } from 'react';
import styled from 'styled-components';

import ContentsBox from '@/components/molecules/ContentsBox';
import TitleBar, { TitleBarProps } from '@/components/molecules/TitleBar';
import DataGrid, {
  DataGridProps,
  SelectionChangeParams,
  ColDef,
  RowsProp,
  CellParams,
} from '@/components/atoms/DataGrid';
import ButtonBox from '@/components/molecules/ButtonBox';

export type ListContentsBoxProps = Pick<TitleBarProps, 'title' | 'icon'> &
  Pick<DataGridProps, 'columns' | 'rows'> & {
    onSelectionChange?: (data: SelectionChangeParams) => void;
    addClickCallback?: (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    confirmCallback?: (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    onCellClick?: (param: CellParams) => void;
  };
export type { SelectionChangeParams, ColDef, RowsProp, CellParams };

const StyledContentsWrap = styled.div`
  height: 400px;
`;

const ListContentsBox: React.FC<ListContentsBoxProps> = (props) => {
  const {
    title,
    icon,
    columns,
    rows,
    addClickCallback,
    onSelectionChange,
    confirmCallback,
    onCellClick,
  } = props;
  const [confirmMode, setConfirmMode] = useState(false);

  const toggleConfirmMode = () => {
    setConfirmMode(!confirmMode);
  };

  const onCellClickNoSelection = (param: CellParams) => {
    if (!confirmMode && typeof onCellClick === 'function') {
      onCellClick(param);
    }
  };

  return (
    <ContentsBox
      topChildren={
        <>
          <TitleBar title={title} icon={icon} />
          <ButtonBox
            confirmMode={confirmMode}
            addClickCallback={addClickCallback}
            confirmCallback={confirmCallback}
            cancleCallback={toggleConfirmMode}
            deleteClickCallback={toggleConfirmMode}
            showcase="list"
          />
        </>
      }
    >
      <StyledContentsWrap>
        <DataGrid
          checkboxSelection={confirmMode}
          columns={columns}
          rows={rows}
          onSelectionChange={onSelectionChange}
          onCellClick={onCellClickNoSelection}
        />
      </StyledContentsWrap>
    </ContentsBox>
  );
};

export default ListContentsBox;
