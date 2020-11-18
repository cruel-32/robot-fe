/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import Button, {
  ButtonProps as originButtonProps,
} from '@material-ui/core/Button';

export type ButtonProps = Omit<originButtonProps, 'startIcon' | 'endIcon'>;
const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.palette.typography};
  min-width: 40px !important;
`;

export default (props: ButtonProps) => {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
};
