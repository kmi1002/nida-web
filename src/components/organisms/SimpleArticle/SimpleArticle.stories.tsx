import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SimpleArticleProps } from './SimpleArticle.type';
import SimpleArticle from './index';

export default {
  title: 'Design System/03-Organisms/Display/SimpleArticle',
  component: SimpleArticle,
  argTypes: {
    html: { control: { type: 'string' }, defaultValue: '제목' },
  },
} as Meta;

const Template: Story<SimpleArticleProps> = ({ ...props }: SimpleArticleProps) => <SimpleArticle {...props} />;

export const Default = Template.bind({});
Default.args = {};
