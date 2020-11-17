/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Timepicker, { TimePickerProps } from '@/components/atoms/Timepicker';

export default {
  title: 'Example/Atoms/Timepicker',
  component: Timepicker,
  argTypes: {
    onChange: { action: 'onChange' },
    onAccept: { action: 'onAccept' },
    onClose: { action: 'onClose' },
    onError: { action: 'onError' },
    rifmFormatter: { action: 'rifmFormatter' },
    shouldDisableDate: { action: 'shouldDisableDate' },
    inputVariant: {
      control: {
        type: 'select',
        options: ['standard', 'outlined', 'filled'],
      },
    },
    openTo: {
      control: {
        type: 'select',
        options: ['hours', 'minutes', 'seconds'],
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

const Template: Story<TimePickerProps> = (args) => <Timepicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: new Date(),
  ampm: true,
  inputValue: undefined,
  autoOk: true,
  disabled: false,
  disableToolbar: false,
  emptyLabel: undefined,
  format: undefined,
  initialFocusedDate: undefined,
  InputAdornmentProps: undefined,
  inputVariant: 'standard',
  invalidLabel: 'unknown',
  invalidDateMessage: '시간 형식이 맞지 않습니다.',
  maxDateMessage: '최대 시간 이후를 선택할 수 없습니다',
  minDateMessage: '최소 시간 이전을 선택할 수 없습니다',
  minutesStep: 1,
  KeyboardButtonProps: undefined,
  keyboardIcon: undefined,
  mask: undefined,
  maskChar: '_',
  // open: undefined,
  openTo: undefined,
  orientation: 'portrait',
  PopoverProps: undefined,
  readOnly: undefined,
  refuse: /[^\d]+/gi,
  rifmFormatter: undefined,
  TextFieldComponent: undefined,
  ToolbarComponent: undefined,
  variant: 'inline',
  views: ['hours', 'minutes', 'seconds'],
};
