import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VisitUserProps } from './VisitUser.type';
import VisitUser from '.';

export default {
  title: 'Design System/03-Organisms/Display/VisitUser',
  component: VisitUser,
} as Meta;

const Template: Story<VisitUserProps> = () => <VisitUser />;

export const Default = Template.bind({});
Default.args = {};
