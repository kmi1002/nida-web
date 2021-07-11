import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navigation as dummyNavigation } from '@/dummies/Navigation';
import Navigation from './index';

export default {
  title: 'Design System/02-Molecules/Navigation/Navigation',
  component: Navigation,
  argTypes: {
    direction: { control: { type: 'select', options: ['horizontal', 'vertical'] }, defaultValue: 'horizontal' },
    items: { control: { type: 'object' }, defaultValue: dummyNavigation },
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = args => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {};
