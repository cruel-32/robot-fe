import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import DetailContentsBox, {
  DetailContentsBoxProps,
} from '@/components/organisms/DetailContentsBox';

export default {
  title: 'Example/organisms/DetailContentsBox',
  component: DetailContentsBox,
  argTypes: {
    modifyCallback: { action: 'modifyCallback' },
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

const Template: Story<DetailContentsBoxProps> = (args) => (
  <DetailContentsBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '디테일화면 구성',
  icon: 'table_rows',
};
