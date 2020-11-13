/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import Checkbox, {
  CheckboxProps as originCheckboxProps,
} from '@material-ui/core/Checkbox';

export type CheckboxProps = Omit<originCheckboxProps, 'children'>;

const StyledCheckbox = styled(Checkbox)<CheckboxProps>`
  color: ${({ theme }) => theme.palette.typography};
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

export default (props: CheckboxProps) => {
  const { color = 'primary' } = props;

  return <StyledCheckbox {...props} color={color} />;
};
