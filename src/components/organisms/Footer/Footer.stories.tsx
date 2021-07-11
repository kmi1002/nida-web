import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooterNavigation as dummyNavigation } from '@/dummies/Navigation';
import { FooterProps } from './Footer.type';
import Footer from '.';

export default {
  title: 'Design System/03-Organisms/Display/Footer',
  component: Footer,
  argTypes: {
    menus: { control: { type: 'object' }, defaultValue: dummyNavigation },
  },
} as Meta;

const Template: Story<FooterProps> = ({ menus }: FooterProps) => <Footer menus={menus} />;

export const Default = Template.bind({});
Default.args = {};
