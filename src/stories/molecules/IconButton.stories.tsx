import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import IconButton, { IconButtonProps } from '@/components/molecules/IconButton';

export default {
  title: 'Example/Molecules/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        // material icons의 목록은
        // https://material.io/resources/icons/?icon=image&style=baseline
        // 에서 확인 가능
        options: [
          '3d_rotation',
          'accessibility',
          'accessibility_new',
          'code',
          'done',
          'favorite_border',
          'favorite',
          'maximize',
          'minimize',
          'mediation',
          'search',
          'search_off',
          'settings_remote',
          'view_module',
          'zoom_in',
          'zoom_out',
          'error',
          'play_arrow',
          'pause',
          'stop',
          'web',
          'phone',
          'create',
          'clear',
          'redo',
          'undo',
          'battery_alert',
          'battery_charging_full',
          'battery_full',
          'battery_std',
          'battery_unknown',
          'bar_chart',
          'keyboard_arrow_down',
          'keyboard_arrow_left',
          'keyboard_arrow_right',
          'keyboard_arrow_up',
          'image',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
    color: {
      control: {
        type: 'select',
        expanded: true,
        options: ['default', 'inherit', 'primary', 'secondary'],
      },
    },
    iconColor: {
      control: 'color',
    },
  },
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'add_circle',
  variant: 'outlined',
  children: '버튼1',
  color: 'inherit',
  disabled: false,
  disableElevation: false,
  disableFocusRipple: false,
  fullWidth: false,
  href: '',
  size: 'small',
  iconColor: undefined,
  iconSize: undefined,
};
