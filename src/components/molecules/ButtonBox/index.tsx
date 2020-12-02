import React, { memo } from 'react';

import GridBox from '@/components/atoms/GridBox';
import Button from '@/components/atoms/Button';
import IconButton from '@/components/molecules/IconButton';

export type ButtonBoxProps = {
  confirmCallback?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  cancleCallback?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  addClickCallback?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  backClickCallback?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  deleteClickCallback?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  modifyClickCallback?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  confirmMode?: boolean;
  showcase: 'list' | 'write' | 'detail';
};

const MemoIconButton = memo(IconButton);
const MemoButton = memo(Button);

const ButtonBox: React.FC<ButtonBoxProps> = (props) => {
  const {
    confirmCallback,
    addClickCallback,
    backClickCallback,
    deleteClickCallback,
    cancleCallback,
    modifyClickCallback,
    confirmMode,
    showcase = 'list',
  } = props;

  return (
    <GridBox container justify="flex-end">
      <GridBox item style={{ display: confirmMode ? 'none' : 'block' }}>
        <MemoIconButton
          onClick={backClickCallback}
          icon="arrow_back"
          title="뒤로"
          style={{ display: showcase !== 'list' ? 'index-flex' : 'none' }}
        >
          뒤로
        </MemoIconButton>
        <MemoIconButton
          onClick={deleteClickCallback}
          icon="delete"
          title="삭제"
        >
          삭제
        </MemoIconButton>
        <MemoIconButton
          onClick={modifyClickCallback}
          icon="save"
          title="수정"
          style={{
            display: showcase === 'detail' ? 'index-flex' : 'none',
          }}
        >
          수정
        </MemoIconButton>
        <MemoIconButton
          onClick={addClickCallback}
          icon="add"
          title="등록"
          style={{
            display:
              showcase === 'write' || showcase === 'list'
                ? 'index-flex'
                : 'none',
          }}
        >
          등록
        </MemoIconButton>
      </GridBox>
      <GridBox item style={{ display: confirmMode ? 'block' : 'none' }}>
        <MemoButton onClick={cancleCallback}>취소</MemoButton>
        <MemoButton onClick={confirmCallback}>확인</MemoButton>
      </GridBox>
    </GridBox>
  );
};

export default ButtonBox;
