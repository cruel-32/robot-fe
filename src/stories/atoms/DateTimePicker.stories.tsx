/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import DateTimePicker, {
  DateTimePickerProps,
} from '@/components/atoms/DateTimePicker';

export default {
  title: 'Example/Atoms/DateTimePicker',
  component: DateTimePicker,
  argTypes: {
    onChange: { action: 'onChange' },
    onAccept: { action: 'onAccept' },
    onOpen: { action: 'onOpen' },
    onClose: { action: 'onClose' },
    onError: { action: 'onError' },
    onMonthChange: { action: 'onMonthChange' },
    onYearChange: { action: 'onYearChange' },
    renderDay: { action: 'renderDay' },
    rifmFormatter: { action: 'rifmFormatter' },
    inputVariant: {
      control: {
        type: 'select',
        options: ['standard', 'outlined', 'filled'],
      },
    },
    openTo: {
      control: {
        type: 'select',
        options: ['date', 'year', 'month', 'hours', 'minutes'],
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

const Template: Story<DateTimePickerProps> = (args) => (
  <DateTimePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: new Date(),
  onChange: () => {},
  onAccept: () => {},
  onOpen: () => {},
  onClose: () => {},
  onError: () => {},
  allowKeyboardControl: true,
  animateYearScrolling: false,
  ampm: true,
  inputValue: undefined,
  autoOk: true,
  dateRangeIcon: undefined,
  disabled: false,
  disableFuture: false,
  disablePast: false,
  disableToolbar: false,
  emptyLabel: undefined,
  hideTabs: false,
  format: undefined,
  initialFocusedDate: undefined,
  InputAdornmentProps: undefined,
  inputVariant: 'standard',
  invalidLabel: 'unknown',
  invalidDateMessage: '날짜 형식이 맞지 않습니다.',
  maxDateMessage: '최대 날짜 이후를 선택할 수 없습니다',
  minDateMessage: '최소 날짜 이전을 선택할 수 없습니다',
  minutesStep: 1,
  KeyboardButtonProps: undefined,
  keyboardIcon: undefined,
  mask: undefined,
  maskChar: '_',
  // open: undefined,
  strictCompareDates: false,
  openTo: undefined,
  orientation: 'portrait',
  PopoverProps: undefined,
  readOnly: undefined,
  refuse: /[^\d]+/gi,
  rifmFormatter: undefined,
  TextFieldComponent: undefined,
  ToolbarComponent: undefined,
  variant: 'inline',
  views: ['year', 'month', 'date', 'hours', 'minutes'],
};
