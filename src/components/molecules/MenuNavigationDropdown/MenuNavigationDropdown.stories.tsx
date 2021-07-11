import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuNavigation as dummyMenuNavigation } from '@/dummies/Navigation';
import MenuNavigationDropdown from './index';

const tmp = dummyMenuNavigation[1].items;
// console.log(tmp);

export default {
  title: 'Design System/02-Molecules/SimpleNavigationItem/MenuNavigationDropdown',
  component: MenuNavigationDropdown,
} as ComponentMeta<typeof MenuNavigationDropdown>;

const Template: ComponentStory<typeof MenuNavigationDropdown> = args => <MenuNavigationDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  items,
};
