/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import Modal, { ModalProps as originModalProps } from '@material-ui/core/Modal';

export type ModalProps = Omit<originModalProps, 'BackdropComponent'>;
const StyledModal = styled(Modal)`
  color: ${({ theme }) => theme.palette.typography};
`;

export default (props: ModalProps) => {
  const { children } = props;
  return <StyledModal {...props}>{children}</StyledModal>;
};
