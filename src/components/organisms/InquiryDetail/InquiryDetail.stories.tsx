import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InquiryDetailProps } from './InquiryDetail.type';
import InquiryDetail from '.';

export default {
  title: 'Design System/03-Organisms/Display/InquiryDetail',
  component: InquiryDetail,
} as Meta;

const Template: Story<InquiryDetailProps> = () => <InquiryDetail />;

export const Default = Template.bind({});
Default.args = {};
