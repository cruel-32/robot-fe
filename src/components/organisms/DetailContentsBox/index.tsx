import React from 'react';

import ContentsBox from '@/components/molecules/ContentsBox';
import TitleBar, { TitleBarProps } from '@/components/molecules/TitleBar';
import ButtonBox from '@/components/molecules/ButtonBox';

export type DetailContentsBoxProps = Pick<TitleBarProps, 'title' | 'icon'> & {
  modifyCallback?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  contentsWritableMode?: boolean;
  modeChangeHandler?: (mode: boolean) => void;
};

const DetailContentsBox: React.FC<DetailContentsBoxProps> = (props) => {
  const {
    title,
    icon,
    contentsWritableMode,
    modeChangeHandler,
    modifyCallback,
    children,
  } = props;
  // const history = useHistory();

  const toggleConfirmMode = () => {
    if (modeChangeHandler) {
      modeChangeHandler(!contentsWritableMode);
    }
  };
  const deleteHandler = () => {
    window.confirm('정말 삭제하시겠습니까?');
  };

  return (
    <ContentsBox
      topChildren={
        <>
          <TitleBar title={title} icon={icon} />
          <ButtonBox
            confirmMode={contentsWritableMode}
            confirmCallback={modifyCallback}
            cancleCallback={toggleConfirmMode}
            deleteClickCallback={deleteHandler}
            modifyClickCallback={toggleConfirmMode}
          />
        </>
      }
    >
      {children}
    </ContentsBox>
  );
};

export default DetailContentsBox;
