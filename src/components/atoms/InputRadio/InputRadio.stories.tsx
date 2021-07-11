import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import InputRadio from './index';

export default {
  title: 'Design System/01-Atoms/Inputs/InputRadio',
  component: InputRadio,
  argTypes: {
    label: { control: { type: 'text' }, defaultValue: 'label' },
    items: {
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
          disabled: true,
        },
      ],
    },
    helperText: { control: { type: 'text' }, defaultValue: 'helperText' },
    selectedValue: { control: { type: 'text' }, defaultValue: 2 },
    required: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    error: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    color: {
      control: { type: 'select', options: ['default', 'primary', 'secondary'] },
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium'] },
      defaultValue: 'medium',
    },
    horizontal: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    onChange: { action: 'onChange' },
  },
} as ComponentMeta<typeof InputRadio>;

const Template: ComponentStory<typeof InputRadio> = args => <InputRadio {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Icon = Template.bind({});
Icon.args = {
  items: [
    {
      label: '값1',
      value: 1,
      icon: <Favorite />,
      checkedIcon: <FavoriteBorder />,
    },
    {
      label: '값2',
      value: 2,
      icon: <Favorite />,
      checkedIcon: <FavoriteBorder />,
    },
    {
      label: '값3',
      value: 3,
      disabled: true,
      icon: <Favorite />,
      checkedIcon: <FavoriteBorder />,
    },
  ],
};

export const Horizontally = Template.bind({});
Horizontally.args = {
  horizontal: true,
};
