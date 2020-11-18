/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import Icon, { IconProps as originIconProps } from '@material-ui/core/Icon';

export type IconProps = Omit<originIconProps, 'children'> & {
  icon: string;
  iconColor?: string;
  iconSize?: string;
  margin?: string;
  padding?: string;
};

const StyledIcon = styled(Icon)`
  cursor: ${({ onClick }) => (typeof onClick === 'function' ? 'pointer' : '')};
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

export default (props: IconProps) => {
  const {
    icon,
    color,
    fontSize,
    iconColor,
    iconSize,
    margin,
    padding,
    onClick,
  } = props;

  return (
    <StyledIcon
      color={color}
      fontSize={fontSize}
      style={{ color: iconColor, fontSize: iconSize, margin, padding }}
      onClick={onClick}
    >
      {icon}
    </StyledIcon>
  );
};
