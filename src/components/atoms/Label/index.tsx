/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import OriginInputLabel, {
  InputLabelProps as OriginInputLabelProps,
} from '@material-ui/core/InputLabel';

export type LabelProps = Omit<OriginInputLabelProps, 'multiline'>;
const StyledLabel = styled(OriginInputLabel)<LabelProps>`
  color: ${({ theme }) => theme.palette.typography};
  /* box-shadow: 0 4px 6px rgba(10, 10, 12, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); */
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

const Label = (props: LabelProps) => {
  const { children } = props;

  return <StyledLabel {...props}>{children}</StyledLabel>;
};

export default Label;
