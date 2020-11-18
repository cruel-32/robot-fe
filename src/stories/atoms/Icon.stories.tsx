import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Icon, { IconProps } from '@/components/atoms/Icon';

export default {
  title: 'Example/atoms/Icon',
  component: Icon,
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
    iconColor: {
      control: 'color',
    },
    color: {
      control: {
        type: 'select',
        expanded: true,
        options: [
          'inherit',
          'primary',
          'secondary',
          'action',
          'error',
          'disabled',
        ],
      },
    },
    fontSize: {
      control: {
        type: 'select',
        options: ['inherit', 'default', 'small', 'large'],
      },
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => (
  <>
    <Icon {...args} />
    <p>style을 주면 color와 fontSize 커스텀 가능</p>
  </>
);

export const Default = Template.bind({});
Default.args = {
  icon: 'add_circle',
  iconColor: undefined,
  iconSize: undefined,
};
