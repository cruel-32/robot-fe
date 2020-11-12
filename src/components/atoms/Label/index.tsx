/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import InputLabel, {
  InputLabelProps as originInputLabelProps,
} from '@material-ui/core/InputLabel';

export type LabelProps = Omit<originInputLabelProps, 'multiline'>;
const StyledLabel = styled(InputLabel)`
  color: ${({ theme }) => theme.palette.typography};
  /* box-shadow: 0 4px 6px rgba(10, 10, 12, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); */
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

export default (props: LabelProps) => {
  const { children } = props;

  return <StyledLabel {...props}>{children}</StyledLabel>;
};
