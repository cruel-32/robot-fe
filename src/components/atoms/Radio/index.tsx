/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import Radio, { RadioProps as originRadioProps } from '@material-ui/core/Radio';

export type RadioProps = Omit<originRadioProps, 'checkedIcon' | 'icon'>;

const StyledRadio = styled(Radio)<RadioProps>`
  color: ${({ theme }) => theme.palette.typography};
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

export default (props: RadioProps) => <StyledRadio {...props} />;
