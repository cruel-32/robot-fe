import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import GridBox, { GridBoxProps } from '@/components/atoms/GridBox';

export default {
  title: 'Example/atoms/GridBox',
  component: GridBox,
  argTypes: {
    alignContent: {
      control: {
        type: 'select',
        options: [
          'stretch',
          'center',
          'flex-start',
          'flex-end',
          'space-between',
          'space-around',
        ],
      },
    },
    alignItems: {
      control: {
        type: 'select',
        options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      },
    },
    direction: {
      control: {
        type: 'select',
        options: ['row', 'row-reverse', 'column', 'column-reverse'],
      },
    },
    justify: {
      control: {
        type: 'select',
        options: [
          'flex-start',
          'center',
          'flex-end',
          'space-between',
          'space-around',
          'space-evenly',
        ],
      },
    },
    lg: {
      control: {
        type: 'select',
        options: [false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
    },
    md: {
      control: {
        type: 'select',
        options: [false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
    },
    sm: {
      control: {
        type: 'select',
        options: [false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
    },
    xl: {
      control: {
        type: 'select',
        options: [false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
    },
    xs: {
      control: {
        type: 'select',
        options: [false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
    },
    spacing: {
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    },
    wrap: {
      control: {
        type: 'select',
        options: ['nowrap', 'wrap', 'wrap-reverse'],
      },
    },
  },
} as Meta;

const Template: Story<GridBoxProps> = (args) => <GridBox {...args} />;

const children = [
  <GridBox item>1</GridBox>,
  <GridBox item>2</GridBox>,
  <GridBox item>3</GridBox>,
  <GridBox item>4</GridBox>,
];

export const Default = Template.bind({});
Default.args = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  classes: undefined,
  container: true,
  direction: 'row',
  item: false,
  justify: 'flex-start',
  lg: false,
  md: false,
  sm: false,
  wrap: 'wrap',
  xl: false,
  xs: false,
  zeroMinWidth: false,
  spacing: 5,
  children,
};
