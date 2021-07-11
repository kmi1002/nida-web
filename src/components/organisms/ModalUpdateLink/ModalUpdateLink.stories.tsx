import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalUpdateLinkProps } from './ModalUpdateLink.type';
import ModalUpdateLink from '.';

export default {
  title: 'Design System/03-Organisms/Display/ModalUpdateLink',
  component: ModalUpdateLink,
  argTypes: {
    open: { control: { type: 'boolean' }, defaultValue: true },
    onPropClose: { action: 'close action' },
  },
} as Meta;

const Template: Story<ModalUpdateLinkProps> = ({ ...props }: ModalUpdateLinkProps) => <ModalUpdateLink {...props} />;

export const Default = Template.bind({});
Default.args = {};
