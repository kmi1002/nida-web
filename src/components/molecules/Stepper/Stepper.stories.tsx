import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stepper from './index';

export default {
  title: 'Design System/02-Molecules/Navigation/Stepper',
  component: Stepper,
  argTypes: {
    steps: {
      control: { type: 'object' },
      defaultValue: ['링크 만들기', '링크 선택하기', '링크 연결하기', '링크 완료'],
    },
    step: {
      control: { type: 'number' },
      defaultValue: 1,
    },
    alternativeLabel: { control: { type: 'boolean' }, defaultValue: false },
  },
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = args => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {};
