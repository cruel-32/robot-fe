/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import {
  KeyboardTimePicker,
  KeyboardTimePickerProps,
} from '@material-ui/pickers';

export type TimePickerProps = KeyboardTimePickerProps;

const StyledTimePicker = styled(KeyboardTimePicker)<TimePickerProps>`
  color: ${({ theme }) => theme.palette.typography};
  &:hover {
    color: ${({ theme }) => theme.palette.hover};
  }
`;

export default (props: TimePickerProps) => {
  const {
    format = 'HH:mm:ss',
    variant = 'inline',
    invalidDateMessage = '시간 형식이 맞지 않습니다.',
    maxDateMessage = '최대 시간 이후를 선택할 수 없습니다',
    minDateMessage = '최소 시간 이전을 선택할 수 없습니다',
  } = props;

  return (
    <StyledTimePicker
      {...props}
      format={format}
      variant={variant}
      invalidDateMessage={invalidDateMessage}
      maxDateMessage={maxDateMessage}
      minDateMessage={minDateMessage}
    />
  );
};
