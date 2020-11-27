/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import styled from 'styled-components';
import OriginSlider, {
  SliderProps as OriginSliderProps,
} from '@material-ui/core/Slider';

export type SliderProps = Omit<OriginSliderProps, 'startIcon' | 'endIcon'>;
const StyledSlider = styled(OriginSlider)`
  color: ${({ theme }) => theme.palette.typography};
  /* box-shadow: 0 4px 6px rgba(10, 10, 12, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); */
  padding: 7px 14px;
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

const Slider = (props: SliderProps) => {
  const { color = 'primary' } = props;
  return <StyledSlider {...props} color={color} />;
};
export default Slider;
