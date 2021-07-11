import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkGeneratorStep2Props } from './LinkGeneratorStep2.type';
import LinkGeneratorStep2 from './index';

export default {
  title: 'Design System/03-Organisms/Display/LinkGeneratorStep2',
  component: LinkGeneratorStep2,
  argTypes: {
    sourceLink: { control: { type: 'text' }, defaultValue: 'http://한글.링크를.만들어.보.세요.com' },
    onPropPrev: { action: 'prev clicked' },
    onPropNext: { action: 'next clicked' },
  },
} as Meta;

const Template: Story<LinkGeneratorStep2Props> = ({ sourceLink, onPropPrev, onPropNext }: LinkGeneratorStep2Props) => (
  <LinkGeneratorStep2 sourceLink={sourceLink} onPropPrev={onPropPrev} onPropNext={onPropNext} />
);

export const Default = Template.bind({});
Default.args = {};
