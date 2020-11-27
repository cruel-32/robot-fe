import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ButtonBox, { ButtonBoxProps } from '@/components/molecules/ButtonBox';

export default {
  title: 'Example/Molecules/ButtonBox',
  component: ButtonBox,
  argTypes: {
    confirmCallback: { action: 'confirmCallback' },
    cancleCallback: { action: 'cancleCallback' },
    deleteClickCallback: { action: 'deleteClickCallback' },
    modifyClickCallback: { action: 'modifyClickCallback' },
  },
} as Meta;

const Template: Story<ButtonBoxProps> = (args) => <ButtonBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  confirmMode: false,
};
