/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import OriginModal, {
  ModalProps as OriginModalProps,
} from '@material-ui/core/Modal';

export type ModalProps = Omit<OriginModalProps, 'BackdropComponent'>;
const StyledModal = styled(OriginModal)`
  color: ${({ theme }) => theme.palette.typography};
`;

const Modal = (props: ModalProps) => {
  const { children } = props;
  return <StyledModal {...props}>{children}</StyledModal>;
};
export default Modal;
