import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SupportMultiProps } from './SupportMulti.type';
import SupportMulti from '.';
import {
  SupportMulti as dummyAccordionArticle,
  SupportMultiCategory as dummyAccordionArticleCategory,
} from '@/dummies/Supports';

export default {
  title: 'Design System/03-Organisms/Display/SupportMulti',
  component: SupportMulti,
  argTypes: {
    faqCategories: { control: { type: 'object' }, defaultValue: dummyAccordionArticleCategory },
    faqItems: { control: { type: 'object' }, defaultValue: dummyAccordionArticle },
    noticeItems: { control: { type: 'object' }, defaultValue: dummyAccordionArticle },
  },
} as Meta;

const Template: Story<SupportMultiProps> = ({ ...props }: SupportMultiProps) => <SupportMulti {...props} />;

export const Default = Template.bind({});
Default.args = {};
