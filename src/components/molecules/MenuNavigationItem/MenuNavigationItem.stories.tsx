import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuNavigation as dummyMenuNavigation } from '@/dummies/Navigation';
import MenuNavigationItem from './index';

export default {
  title: 'Design System/02-Molecules/SimpleNavigationItem/MenuNavigationItem',
  component: MenuNavigationItem,
} as ComponentMeta<typeof MenuNavigationItem>;

const Template: ComponentStory<typeof MenuNavigationItem> = args => <MenuNavigationItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: dummyMenuNavigation[1].title,
  items: dummyMenuNavigation[1].items,
};
