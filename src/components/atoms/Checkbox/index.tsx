/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import OriginCheckbox, {
  CheckboxProps as OriginCheckboxProps,
} from '@material-ui/core/Checkbox';

export type CheckboxProps = Omit<OriginCheckboxProps, 'children'>;

const StyledCheckbox = styled(OriginCheckbox)<CheckboxProps>`
  color: ${({ theme }) => theme.palette.typography};
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

const Checkbox = (props: CheckboxProps) => {
  const { color = 'primary' } = props;

  return <StyledCheckbox {...props} color={color} />;
};

export default Checkbox;
