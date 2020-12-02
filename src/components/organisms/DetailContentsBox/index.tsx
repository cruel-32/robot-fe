import React, { memo } from 'react';

import ContentsBox from '@/components/molecules/ContentsBox';
import TitleBar, { TitleBarProps } from '@/components/molecules/TitleBar';
import ButtonBox from '@/components/molecules/ButtonBox';
import useSystem from '@/hooks/useSystem';

const MemoContentsBox = memo(ContentsBox);
const MemoTitleBar = memo(TitleBar);
const MemoButtonBox = memo(ButtonBox);

export type DetailContentsBoxProps = Pick<TitleBarProps, 'title' | 'icon'> & {
  cancleCallback?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  confirmCallback?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  backClickCallback?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  modifyClickCallback?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  contentsWritableMode?: boolean;
};

const DetailContentsBox: React.FC<DetailContentsBoxProps> = (props) => {
  const { showConfirm } = useSystem();
  const {
    title,
    icon,
    contentsWritableMode,
    backClickCallback,
    cancleCallback,
    confirmCallback,
    modifyClickCallback,
    children,
  } = props;
  // const history = useHistory();

  const deleteHandler = () => {
    showConfirm({
      message: '정말 삭제하시겠습니까?',
    });
  };

  return (
    <MemoContentsBox
      topChildren={
        <>
          <MemoTitleBar title={title} icon={icon} />
          <MemoButtonBox
            confirmMode={contentsWritableMode}
            backClickCallback={backClickCallback}
            confirmCallback={confirmCallback}
            cancleCallback={cancleCallback}
            deleteClickCallback={deleteHandler}
            modifyClickCallback={modifyClickCallback}
            showcase="detail"
          />
        </>
      }
    >
      {children}
    </MemoContentsBox>
  );
};

export default DetailContentsBox;
