import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalChangePasswordProps } from './ModalChangePassword.type';
import ModalChangePassword from '.';

export default {
  title: 'Design System/03-Organisms/Display/ModalChangePassword',
  component: ModalChangePassword,
  argTypes: {
    open: { control: { type: 'boolean' }, defaultValue: true },
    onPropClose: { action: 'close action' },
  },
} as Meta;

const Template: Story<ModalChangePasswordProps> = ({ ...props }: ModalChangePasswordProps) => (
  <ModalChangePassword {...props} />
);

export const Default = Template.bind({});
Default.args = {};
