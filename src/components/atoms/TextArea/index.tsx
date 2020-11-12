/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import Input, { InputProps as originInputProps } from '@material-ui/core/Input';

export type TextAreaProps = Omit<
  originInputProps,
  'multiline' | 'startAdornment' | 'type' | 'inputComponent' | 'inputProps'
>;
const StyledInput = styled(Input)`
  color: ${({ theme }) => theme.palette.typography};
  /* box-shadow: 0 4px 6px rgba(10, 10, 12, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); */
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

export default (props: TextAreaProps) => <StyledInput {...props} multiline />;
