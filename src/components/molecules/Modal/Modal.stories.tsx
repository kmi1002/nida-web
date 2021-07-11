import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './index';

import { MenuNavigation as dummyMenuNavigation } from '@/dummies/Navigation';

const tmp = dummyMenuNavigation[1].items;
console.log(tmp);

export default {
  title: 'Design System/02-Molecules/Uitils/Modal',
  component: Modal,
  argTypes: {
    open: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    onPropClose: { action: 'close action' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'text',
};
