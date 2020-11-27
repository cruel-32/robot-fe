/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Modal, { ModalProps } from '@/components/atoms/Modal';
import Button from '@/components/atoms/Button';

export default {
  title: 'Example/atoms/Modal',
  component: Modal,
  argTypes: {
    onBackdropClick: {
      action: 'onBackdropClick',
    },
    onClose: {
      action: 'onClose',
    },
    onEscapeKeyDown: {
      action: 'onEscapeKeyDown',
    },
    onRendered: {
      action: 'onRendered',
    },
    paginationMode: {
      control: {
        type: 'select',
        options: ['client', 'server'],
      },
    },
  },
} as Meta;

const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <TestReact />
  </Modal>
);

export const Default = Template.bind({});

const TestReact = () => (
  <div>
    <h1>Modal Test</h1>
  </div>
);

Default.args = {
  BackdropProps: undefined,
  closeAfterTransition: false,
  container: undefined,
  disableAutoFocus: false,
  disableBackdropClick: false,
  disableEnforceFocus: false,
  disableEscapeKeyDown: false,
  disablePortal: false,
  disableRestoreFocus: false,
  disableScrollLock: false,
  hideBackdrop: false,
  keepMounted: false,
  open: false,
};

const ModalTest = (props: ModalProps) => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={openModal}>show modal</Button>
      <Modal {...props} open={open}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Button onClick={closeModal}>hide modal</Button>
        </div>
      </Modal>
    </div>
  );
};

const withButtonTemplate: Story<ModalProps> = (args) => <ModalTest {...args} />;
export const WithButton = withButtonTemplate.bind({});

WithButton.args = {
  BackdropProps: undefined,
  closeAfterTransition: false,
  container: undefined,
  disableAutoFocus: false,
  disableBackdropClick: false,
  disableEnforceFocus: false,
  disableEscapeKeyDown: false,
  disablePortal: false,
  disableRestoreFocus: false,
  disableScrollLock: false,
  hideBackdrop: false,
  keepMounted: false,
};
