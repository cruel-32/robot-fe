/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';

import Modal from '@/components/atoms/Modal';
import Button from '@/components/atoms/Button';
import useSystem from '@/hooks/useSystem';

import { background } from '@/theme';

export type SystemConfirmProps = {
  textAlign?: 'left' | 'right' | 'center';
};

const StyledModalContents = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background-color: ${background.paper};
  padding: 20px;
  .message {
    font-size: 18px;
  }
  .button-wrap {
    margin-top: 10px;
    text-align: center;
    .message-btn {
      margin-left: 5px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

const SystemConfirm: React.FC<SystemConfirmProps> = (props) => {
  const { system, hideConfirm } = useSystem();
  const { textAlign = 'center' } = props;

  const cancelHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (typeof system.cancelCallback === 'function') {
      system.cancelCallback(e);
    }
    hideConfirm();
  };

  const confirmHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (typeof system.callback === 'function') {
      system.callback(e);
    }
    hideConfirm();
  };

  return (
    <Modal open={system.isDisplayConfirm || false}>
      <StyledModalContents>
        <div
          className="message"
          style={{
            textAlign,
          }}
        >
          {system.message}
        </div>
        <div className="button-wrap">
          <Button
            className="message-btn"
            onClick={cancelHandler}
            variant="outlined"
          >
            취소
          </Button>
          <Button
            className="message-btn"
            onClick={confirmHandler}
            variant="outlined"
          >
            확인
          </Button>
        </div>
      </StyledModalContents>
    </Modal>
  );
};
export default SystemConfirm;
