/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import OriginIcon, {
  IconProps as OriginIconProps,
} from '@material-ui/core/Icon';

// material icons의 목록은
// https://material.io/resources/icons/?icon=image&style=baseline
// 에서 확인 가능
export type IconProps = Omit<OriginIconProps, 'children'> & {
  icon: string;
  iconColor?: string;
  iconSize?: string;
  margin?: string;
  padding?: string;
};

const StyledIcon = styled(OriginIcon)`
  cursor: ${({ onClick }) => (typeof onClick === 'function' ? 'pointer' : '')};
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

const Icon = (props: IconProps) => {
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

export default Icon;
