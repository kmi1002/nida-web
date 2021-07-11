import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputFile from './index';

export default {
  title: 'Design System/01-Atoms/Inputs/InputFile',
  component: InputFile,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: '파일 업로드',
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: '5개까지 등록 할 수 있습니다',
    },
    preview: {
      control: { type: 'select', options: ['file', 'image'] },
      defaultValue: 'file',
    },
    accept: {
      control: { type: 'select', options: ['*', 'image/*', 'image/jpeg'] },
      defaultValue: 'image/*',
    },
    maxCount: {
      control: { type: 'number' },
      defaultValue: 1,
    },
    errorEmpty: {
      control: { type: 'text' },
      defaultValue: '파일이 비어있습니다',
    },
    errorCount: {
      control: { type: 'text' },
      defaultValue: '추가 할 수 없습니다',
    },
  },
} as ComponentMeta<typeof InputFile>;

const Template: ComponentStory<typeof InputFile> = args => <InputFile {...args} />;

export const Default = Template.bind({});
Default.args = {};
