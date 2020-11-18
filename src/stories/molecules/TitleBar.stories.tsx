import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TitleBar, { TitleBarProps } from '@/components/molecules/TitleBar';
import Icon from '@/components/atoms/Icon';

import { materialDefaultTheme } from '@/theme';

export default {
  title: 'Example/Molecules/TitleBar',
  component: TitleBar,
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
  },
} as Meta;

const Template: Story<TitleBarProps> = (args) => <TitleBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: '#fff',
  headline: 'h1',
  title: '타이틀바 테스트',
  icon: 'search',
  iconColor: '#fff',
  iconSize: '32px',
  border: `1px solid ${materialDefaultTheme.palette.primary.main}`,
  borderRadius: '4px',
  backgroundColor: materialDefaultTheme.palette.primary.dark,
  padding: '4px',
};

const WithButtonTemplate: Story<TitleBarProps> = (args) => (
  <TitleBar {...args}>
    <Icon
      icon="close"
      iconColor="#fff"
      iconSize="31px"
      margin="2px 2px 0 0"
      onClick={() => alert('close')}
    />
    <Icon
      icon="add"
      iconColor="#fff"
      iconSize="31px"
      margin="2px 2px 0 0"
      onClick={() => alert('add')}
    />
  </TitleBar>
);
export const WithButton = WithButtonTemplate.bind({});
WithButton.args = {
  color: '#fff',
  headline: 'h1',
  title: '타이틀바 테스트',
  icon: 'search',
  iconColor: '#fff',
  iconSize: '32px',
  border: `1px solid ${materialDefaultTheme.palette.primary.main}`,
  borderRadius: '4px',
  backgroundColor: materialDefaultTheme.palette.primary.dark,
  padding: '4px',
};
