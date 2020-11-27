/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import TextField, {
  TextFieldProps as OriginTextFieldProps,
} from '@material-ui/core/TextField';

export type InputProps = Omit<
  OriginTextFieldProps,
  'multiline' | 'rows' | 'rowsMax'
>;

const StyledInput = styled(TextField)`
  color: ${({ theme }) => theme.palette.typography};
  /* box-shadow: 0 4px 6px rgba(10, 10, 12, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); */
`;

const Input = (props: InputProps) => <StyledInput {...props} />;

export default Input;
