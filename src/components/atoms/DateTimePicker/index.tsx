/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import {
  KeyboardDateTimePicker,
  KeyboardDateTimePickerProps,
} from '@material-ui/pickers';

export type DateTimePickerProps = KeyboardDateTimePickerProps;

const StyledDateTimePicker = styled(
  KeyboardDateTimePicker
)<DateTimePickerProps>`
  color: ${({ theme }) => theme.palette.typography};
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

const DateTimePicker = (props: DateTimePickerProps) => {
  const {
    format = 'yyyy/MM/DD HH:mm:ss',
    variant = 'inline',
    invalidDateMessage = '날짜 형식이 맞지 않습니다.',
    maxDateMessage = '최대 날짜 이후를 선택할 수 없습니다',
    minDateMessage = '최소 날짜 이전을 선택할 수 없습니다',
  } = props;

  return (
    <StyledDateTimePicker
      {...props}
      format={format}
      variant={variant}
      invalidDateMessage={invalidDateMessage}
      maxDateMessage={maxDateMessage}
      minDateMessage={minDateMessage}
    />
  );
};
export default DateTimePicker;
