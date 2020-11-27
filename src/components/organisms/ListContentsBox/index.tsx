import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

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
    confirmCallback?: (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    modifyClickCallback?: (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    onCellClick?: (e: CellParams) => void;
  };
export type { SelectionChangeParams, ColDef, RowsProp, CellParams };

const useStyles = makeStyles(
  createStyles({
    contentsWrap: {
      height: '400px',
    },
  })
);

const ListContentsBox: React.FC<ListContentsBoxProps> = (props) => {
  const {
    title,
    icon,
    columns,
    rows,
    onSelectionChange,
    confirmCallback,
    modifyClickCallback,
    onCellClick,
  } = props;
  const [confirmMode, setConfirmMode] = useState(false);
  const classes = useStyles();

  const toggleConfirmMode = () => {
    setConfirmMode(!confirmMode);
  };

  return (
    <ContentsBox
      topChildren={
        <>
          <TitleBar title={title} icon={icon} />
          <ButtonBox
            confirmMode={confirmMode}
            confirmCallback={confirmCallback}
            cancleCallback={toggleConfirmMode}
            deleteClickCallback={toggleConfirmMode}
            modifyClickCallback={modifyClickCallback}
          />
        </>
      }
    >
      <div className={classes.contentsWrap}>
        <DataGrid
          checkboxSelection={confirmMode}
          columns={columns}
          rows={rows}
          onSelectionChange={onSelectionChange}
          onCellClick={onCellClick}
        />
      </div>
    </ContentsBox>
  );
};

export default ListContentsBox;
