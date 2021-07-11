import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InquiryListProps } from './InquiryList.type';
import InquiryList from '.';

export default {
  title: 'Design System/03-Organisms/Display/InquiryList',
  component: InquiryList,
} as Meta;

const Template: Story<InquiryListProps> = () => <InquiryList />;

export const Default = Template.bind({});
Default.args = {};
