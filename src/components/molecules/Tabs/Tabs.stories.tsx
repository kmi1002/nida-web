import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SupportTabs as dummyTabs, SupportScrollTabs as dummySupportScrollTabs } from '@/dummies/Supports';
import Tabs from './index';

export default {
  title: 'Design System/02-Molecules/Navigation/Tabs',
  component: Tabs,
  argTypes: {
    indicatorColor: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      defaultValue: 'primary',
    },
    textColor: {
      control: { type: 'select', options: ['primary', 'secondary', 'inherit'] },
      defaultValue: 'primary',
    },
    variant: {
      control: { type: 'select', options: ['standard', 'scrollable', 'fullWidth'] },
      defaultValue: 'standard',
    },
    centered: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    tabs: {
      control: { type: 'object' },
      defaultValue: dummyTabs,
    },
    onPropChange: { action: 'login clicked' },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = args => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const fullWidth = Template.bind({});
fullWidth.args = {
  variant: 'fullWidth',
};

export const scrollable = Template.bind({});
scrollable.args = {
  variant: 'scrollable',
  tabs: dummySupportScrollTabs,
  scrollButtons: 'auto',
};
