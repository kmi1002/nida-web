import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputText from './index';

export default {
  title: 'Design System/01-Atoms/Inputs/InputText',
  component: InputText,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'label',
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: 'placeholder',
    },
    defaultValue: {
      control: { type: 'text' },
      defaultValue: 'defaultValue',
    },
    helperText: {
      control: { type: 'text' },
      defaultValue: 'helperText',
    },
    required: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    error: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    variant: {
      control: { type: 'select', options: ['filled', 'outlined', 'standard'] },
      defaultValue: 'outlined',
    },
    color: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      defaultValue: 'primary',
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      defaultValue: 'small',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    readyOnly: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    onChange: { action: 'onChange' },
  },
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = args => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {};
