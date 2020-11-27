/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import {
  KeyboardDatePicker,
  KeyboardDatePickerProps,
} from '@material-ui/pickers';

export type DatePickerProps = KeyboardDatePickerProps;

const StyledDatePicker = styled(KeyboardDatePicker)<DatePickerProps>`
  color: ${({ theme }) => theme.palette.typography};
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

const DatePicker = (props: DatePickerProps) => {
  const {
    format = 'yyyy/MM/DD',
    variant = 'inline',
    invalidDateMessage = '날짜 형식이 맞지 않습니다',
    maxDateMessage = '최대 날짜보다 이전 날짜를 선택하세요',
    minDateMessage = '최소 날짜보다 이후 날짜를 선택하세요',
  } = props;

  return (
    <StyledDatePicker
      {...props}
      format={format}
      variant={variant}
      invalidDateMessage={invalidDateMessage}
      maxDateMessage={maxDateMessage}
      minDateMessage={minDateMessage}
    />
  );
};
export default DatePicker;
