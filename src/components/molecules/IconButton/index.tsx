/* eslint-disable indent */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from '@material-ui/core/Button';
import Icon from '@/components/atoms/Icon';

export type IconButtonProps = Omit<ButtonProps, 'startIcon' | 'endIcon'> & {
  icon: string;
  iconPlace?: 'left' | 'right' | 'both';
  iconColor?: string;
  iconSize?: string;
};

const StyledIconButton = styled(Button)`
  color: ${({ theme }) => theme.palette.typography};
  min-width: 40px !important;
`;

export default (props: IconButtonProps) => {
  const {
    children,
    icon,
    color,
    iconColor,
    iconSize,
    disabled,
    iconPlace = 'left',
  } = props;
  return (
    <StyledIconButton
      {...props}
      startIcon={
        iconPlace !== 'right' && (
          <Icon
            icon={icon}
            iconSize={iconSize}
            color={disabled ? 'disabled' : color}
            iconColor={disabled ? 'disabled' : iconColor}
          />
        )
      }
      endIcon={
        iconPlace !== 'left' && (
          <Icon
            icon={icon}
            color={disabled ? 'disabled' : color}
            iconColor={disabled ? 'disabled' : iconColor}
          />
        )
      }
    >
      {children}
    </StyledIconButton>
  );
};
