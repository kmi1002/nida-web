import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import InputCheck from './index';

export default {
  title: 'Design System/01-Atoms/Inputs/InputCheck',
  component: InputCheck,
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
          checked: true,
        },
        {
          label: '값3',
          value: 3,
          disabled: true,
        },
      ],
    },
    helperText: { control: { type: 'text' }, defaultValue: 'helperText' },
    required: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    error: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    color: {
      control: { type: 'select', expanded: true, options: ['default', 'primary', 'secondary'] },
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium'] },
      defaultValue: 'medium',
    },
    onChange: { action: 'onChange' },
  },
} as ComponentMeta<typeof InputCheck>;

const Template: ComponentStory<typeof InputCheck> = args => <InputCheck {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Single = Template.bind({});
Single.args = {
  label: '',
  items: [
    {
      label: '한개만 선택',
      value: 1,
    },
  ],
  helperText: '',
};

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
