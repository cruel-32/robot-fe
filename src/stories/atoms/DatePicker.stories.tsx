/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import DatePicker, { DatePickerProps } from '@/components/atoms/DatePicker';

export default {
  title: 'Example/Atoms/DatePicker',
  component: DatePicker,
  argTypes: {
    /** 리액트 기본적인 이벤트 props는 작성하지 않아도 됩니다. 아래는 테스트용 코드 */
    // onClick: {
    //   action: 'clicked',
    // },
    // onFocus: {
    //   action: 'focusin',
    // },
    // onBlur: {
    //   action: 'focusout',
    // },
    inputVariant: {
      control: {
        type: 'select',
        options: ['standard', 'outlined', 'filled'],
      },
    },
    openTo: {
      control: {
        type: 'select',
        options: ['date', 'year', 'month'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['dialog', 'inline', 'static'],
      },
    },
    orientation: {
      control: {
        type: 'select',
        options: ['portrait', 'landscape'],
      },
    },
  },
} as Meta;

const Template: Story<DatePickerProps> = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: () => {},
  onAccept: () => {},
  onClose: () => {},
  onError: () => {},
  onMonthChange: () => {},
  onYearChange: () => {},
  inputValue: undefined,
  value: new Date(),
  allowKeyboardControl: true,
  animateYearScrolling: false,
  autoOk: true,
  disabled: false,
  disableFuture: false,
  disablePast: false,
  disableToolbar: false,
  emptyLabel: undefined,
  format: undefined,
  initialFocusedDate: undefined,
  InputAdornmentProps: undefined,
  inputVariant: 'standard',
  invalidDateMessage: '날짜 형식이 맞지 않습니다',
  invalidLabel: 'unknown',
  KeyboardButtonProps: undefined,
  keyboardIcon: undefined,
  leftArrowButtonProps: undefined,
  leftArrowIcon: undefined,
  loadingIndicator: undefined,
  mask: undefined,
  maskChar: '_',
  maxDate: '2021-12-31',
  maxDateMessage: '최대 날짜보다 이전 날짜를 선택하세요',
  minDate: '1930-01-01',
  minDateMessage: '최소 날짜보다 이후 날짜를 선택하세요',
  // open: undefined,
  openTo: undefined,
  orientation: 'portrait',
  PopoverProps: undefined,
  readOnly: undefined,
  refuse: /[^\d]+/gi,
  renderDay: undefined,
  rifmFormatter: undefined,
  rightArrowButtonProps: undefined,
  rightArrowIcon: undefined,
  shouldDisableDate: undefined,
  strictCompareDates: false,
  TextFieldComponent: undefined,
  ToolbarComponent: undefined,
  variant: 'inline',
  views: ['year', 'month', 'date'],
};
