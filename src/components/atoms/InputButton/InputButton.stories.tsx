import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputButton from './index';

export default {
  title: 'Design System/01-Atoms/Inputs/InputButton',
  component: InputButton,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['text', 'outlined', 'contained'] },
      defaultValue: 'outlined',
    },
    color: {
      control: { type: 'select', options: ['default', 'inherit', 'primary', 'secondary'] },
      defaultValue: 'default',
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      defaultValue: 'medium',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    onClick: { action: 'button clicked' },
  },
} as ComponentMeta<typeof InputButton>;

const Template: ComponentStory<typeof InputButton> = args => <InputButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
