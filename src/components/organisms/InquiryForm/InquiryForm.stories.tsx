import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InquiryFormProps } from './InquiryForm.type';
import InquiryForm from '.';

export default {
  title: 'Design System/03-Organisms/Display/InquiryForm',
  component: InquiryForm,
} as Meta;

const Template: Story<InquiryFormProps> = () => <InquiryForm />;

export const Default = Template.bind({});
Default.args = {};
