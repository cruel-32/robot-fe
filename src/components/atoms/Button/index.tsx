/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import Button, {
  ButtonProps as oriButtonProps,
} from '@material-ui/core/Button';

export type ButtonProps = Omit<oriButtonProps, 'startIcon' | 'endIcon'>;
const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.palette.typography};
  /* box-shadow: 0 4px 6px rgba(10, 10, 12, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); */
  padding: 7px 14px;
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

export default (props: ButtonProps) => {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
};
