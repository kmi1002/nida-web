import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputSelect from './index';

export default {
  title: 'Design System/01-Atoms/Inputs/InputSelect',
  component: InputSelect,
  argTypes: {
    label: { control: { type: 'text' }, defaultValue: 'label' },
    placeholder: { control: { type: 'text' }, defaultValue: 'placeholder' },
    options: {
      control: { type: 'object' },
      defaultValue: [
        {
          label: '값1',
          value: 1,
        },
        {
          label: '값2',
          value: 2,
        },
        {
          label: '값3',
          value: 3,
        },
      ],
    },
    helperText: { control: { type: 'text' }, defaultValue: 'helperText' },
    selectedValue: { control: { type: 'text' }, defaultValue: '' },
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
      control: { type: 'select', expanded: true, options: ['default', 'primary', 'secondary'] },
      defaultValue: 'primary',
    },
    fullWidth: { control: { type: 'boolean' }, defaultValue: false },
    size: {
      control: { type: 'select', options: ['small', 'medium'] },
      defaultValue: 'small',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    onChange: { action: 'onChange' },
    onClose: { action: 'onClose' },
    onOpen: { action: 'onOpen' },
  },
} as ComponentMeta<typeof InputSelect>;

const Template: ComponentStory<typeof InputSelect> = args => <InputSelect {...args} />;

export const Default = Template.bind({});
Default.args = {};
