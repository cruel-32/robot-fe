/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import OriginRadio, {
  RadioProps as OriginRadioProps,
} from '@material-ui/core/Radio';

export type RadioProps = Omit<OriginRadioProps, 'children'>;

const StyledRadio = styled(OriginRadio)<RadioProps>`
  color: ${({ theme }) => theme.palette.typography};
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

const Radio = (props: RadioProps) => {
  const { color = 'primary' } = props;

  return <StyledRadio {...props} color={color} />;
};
export default Radio;
