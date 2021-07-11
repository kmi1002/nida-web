import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VisitPlatformProps } from './VisitPlatform.type';
import VisitPlatform from '.';

export default {
  title: 'Design System/03-Organisms/Display/VisitPlatform',
  component: VisitPlatform,
} as Meta;

const Template: Story<VisitPlatformProps> = () => <VisitPlatform />;

export const Default = Template.bind({});
Default.args = {};
