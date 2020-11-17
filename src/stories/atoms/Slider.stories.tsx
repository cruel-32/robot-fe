/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Slider, { SliderProps } from '@/components/atoms/Slider';

export default {
  title: 'Example/atoms/Slider',
  component: Slider,
  argTypes: {
    onChange: { action: 'onChange' },
    onChangeCommitted: { action: 'onChangeCommitted' },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
  },
} as Meta;

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  scale: (value: number) => value,
  value: undefined,
  color: 'primary',
  disabled: false,
  marks: false,
  max: 100,
  min: 0,
  name: undefined,
  orientation: 'horizontal',
  step: 1,
  ThumbComponent: 'span',
  track: 'normal',
};

export const Range = Template.bind({});
Range.args = {
  scale: (value: number) => value,
  value: [1, 10],
  color: 'primary',
  disabled: false,
  marks: false,
  max: 100,
  min: 0,
  name: undefined,
  orientation: 'horizontal',
  step: 1,
  ThumbComponent: 'span',
  track: 'normal',
};
