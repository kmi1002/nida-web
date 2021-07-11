import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuNavigation as dummyMenuNavigation } from '@/dummies/Navigation';
import MenuNavigation from './index';

export default {
  title: 'Design System/02-Molecules/SimpleNavigationItem/MenuNavigation',
  component: MenuNavigation,
} as ComponentMeta<typeof MenuNavigation>;

const Template: ComponentStory<typeof MenuNavigation> = args => <MenuNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  // items2: dummyMenuNavigation,
};
