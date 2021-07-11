import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VisitBrowserProps } from './VisitBrowser.type';
import VisitBrowser from '.';

export default {
  title: 'Design System/03-Organisms/Display/VisitBrowser',
  component: VisitBrowser,
} as Meta;

const Template: Story<VisitBrowserProps> = () => <VisitBrowser />;

export const Default = Template.bind({});
Default.args = {};
