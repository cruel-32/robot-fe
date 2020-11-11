/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from '@material-ui/core/Button';
import Icon from '@/components/atoms/Icon';

export type IconButtonReverseProps = {
  icon: string;
} & ButtonProps;

const StyledIconButton = styled(Button)`
  color: ${({ theme }) => theme.palette.typography};
  /* box-shadow: 0 4px 6px rgba(10, 10, 12, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); */
  padding: 7px 14px;
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

export default (props: IconButtonReverseProps) => {
  const { children, icon, color, disabled } = props;
  return (
    <StyledIconButton
      {...props}
      endIcon={
        icon && <Icon icon={icon} color={disabled ? 'disabled' : color} />
      }
    >
      {children}
    </StyledIconButton>
  );
};
