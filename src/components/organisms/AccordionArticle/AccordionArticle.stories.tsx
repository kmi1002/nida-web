import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AccordionArticleProps } from './AccordionArticle.type';
import {
  SupportMulti as dummyAccordionArticle,
  SupportMultiCategory as dummyAccordionArticleCategory,
} from '@/dummies/Supports';
import AccordionArticle from './index';

export default {
  title: 'Design System/03-Organisms/Display/AccordionArticle',
  component: AccordionArticle,
  argTypes: {
    categories: { control: { type: 'object' }, defaultValue: dummyAccordionArticleCategory },
    rows: { control: { type: 'object' }, defaultValue: dummyAccordionArticle },
  },
} as ComponentMeta<typeof AccordionArticle>;

const Template: ComponentStory<typeof AccordionArticle> = args => <AccordionArticle {...args} />;
//   <AccordionArticle categories={categories} rows={rows} />
// );

export const Default = Template.bind({});
Default.args = {};
