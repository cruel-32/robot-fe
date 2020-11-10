/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.common.secondaryBackGround};
  color: ${({ theme }) => theme.palette.typography};
  /* box-shadow: 0 4px 6px rgba(10, 10, 12, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); */
  padding: 7px 14px;
  &:hover {
    background-color: ${({ theme }) => theme.palette.common.thirdlyBackGround};
    color: ${({ theme }) => theme.palette.hover};
  }
`;

export default (
  props: Omit<ButtonProps, 'color' | 'startIcon' | 'endIcon'>,
) => {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
};
