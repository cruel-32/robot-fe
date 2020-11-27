/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import OriginButton, {
  ButtonProps as OriginButtonProps,
} from '@material-ui/core/Button';

export type ButtonProps = Omit<OriginButtonProps, 'startIcon' | 'endIcon'>;
const StyledButton = styled(OriginButton)`
  color: ${({ theme }) => theme.palette.typography};
  min-width: 40px !important;
`;

const Button = (props: ButtonProps) => {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
