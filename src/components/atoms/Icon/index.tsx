/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import Icon, { IconProps as originIconProps } from '@material-ui/core/Icon';

export type IconProps = { icon: string } & Omit<originIconProps, 'children'>;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.palette.typography};
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

export default (props: IconProps) => {
  const { icon } = props;

  return <StyledIcon {...props}>{icon}</StyledIcon>;
};
