import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { dummyAvatar } from '@/dummies/Input';
import Avatar from '.';

export default {
  title: 'Design System/01-Atoms/Display/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: dummyAvatar.src,
  alt: dummyAvatar.alt,
  size: 'medium',
};
