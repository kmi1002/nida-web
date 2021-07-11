import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SupportSingleProps } from './SupportSingle.type';
import SupportSingle from '.';
import { Introduce as dummyIntroduce } from '@/dummies/Supports';

export default {
  title: 'Design System/03-Organisms/Display/SupportSingle',
  component: SupportSingle,
  argTypes: {
    introduce: { control: { type: 'string' }, defaultValue: dummyIntroduce },
    privacy: { control: { type: 'string' }, defaultValue: dummyIntroduce },
    terms: { control: { type: 'string' }, defaultValue: dummyIntroduce },
  },
} as Meta;

const Template: Story<SupportSingleProps> = ({ ...props }: SupportSingleProps) => <SupportSingle {...props} />;

export const Default = Template.bind({});
Default.args = {};
