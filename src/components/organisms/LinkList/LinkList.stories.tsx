import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkListProps } from './LinkList.type';
import LinkList from '.';

export default {
  title: 'Design System/03-Organisms/Display/LinkList',
  component: LinkList,
} as Meta;

const Template: Story<LinkListProps> = () => <LinkList />;

export const Default = Template.bind({});
Default.args = {};
