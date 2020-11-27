import React from 'react';

import GridBox from '@/components/atoms/GridBox';
import Button from '@/components/atoms/Button';
import IconButton from '@/components/molecules/IconButton';

export type ButtonBoxProps = {
  confirmCallback?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  cancleCallback?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  deleteClickCallback?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  modifyClickCallback?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  confirmMode?: boolean;
};

const ButtonBox: React.FC<ButtonBoxProps> = (props) => {
  const {
    confirmCallback,
    deleteClickCallback,
    cancleCallback,
    modifyClickCallback,
    confirmMode,
  } = props;

  return (
    <GridBox container justify="flex-end">
      <GridBox item style={{ display: confirmMode ? 'none' : 'block' }}>
        <IconButton onClick={deleteClickCallback} icon="delete" title="삭제">
          삭제
        </IconButton>
        <IconButton onClick={modifyClickCallback} icon="save" title="수정">
          수정
        </IconButton>
      </GridBox>
      <GridBox item style={{ display: confirmMode ? 'block' : 'none' }}>
        <Button onClick={cancleCallback}>취소</Button>
        <Button onClick={confirmCallback}>확인</Button>
      </GridBox>
    </GridBox>
  );
};

export default ButtonBox;
