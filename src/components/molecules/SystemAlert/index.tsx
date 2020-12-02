/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';

import Modal from '@/components/atoms/Modal';
import Button from '@/components/atoms/Button';
import useSystem from '@/hooks/useSystem';

import { background } from '@/theme';

export type SystemAlertProps = {
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
  }
`;

const SystemAlert: React.FC<SystemAlertProps> = (props) => {
  const { system, hideAlert } = useSystem();
  const { textAlign = 'center' } = props;

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (typeof system.callback === 'function') {
      console.log('실행');
      system.callback(e);
    }
    hideAlert();
  };

  return (
    <Modal open={system.isDisplayAlert || false}>
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
          <Button onClick={clickHandler} variant="outlined">
            확인
          </Button>
        </div>
      </StyledModalContents>
    </Modal>
  );
};
export default SystemAlert;
