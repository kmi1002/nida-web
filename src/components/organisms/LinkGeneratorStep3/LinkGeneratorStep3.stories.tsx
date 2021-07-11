import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkGeneratorStep3Props } from './LinkGeneratorStep3.type';
import LinkGeneratorStep3 from './index';

export default {
  title: 'Design System/03-Organisms/Display/LinkGeneratorStep3',
  component: LinkGeneratorStep3,
  argTypes: {
    sourceLink: { control: { type: 'text' }, defaultValue: 'http://한글.링크를.만들어.보.세요.com' },
    targetLink: { control: { type: 'text' } },
    onPropPrev: { action: 'prev clicked' },
    onPropNext: { action: 'next clicked' },
  },
} as Meta;

const Template: Story<LinkGeneratorStep3Props> = ({
  targetLink,
  sourceLink,
  onPropPrev,
  onPropNext,
}: LinkGeneratorStep3Props) => (
  <LinkGeneratorStep3 sourceLink={sourceLink} targetLink={targetLink} onPropPrev={onPropPrev} onPropNext={onPropNext} />
);

export const Default = Template.bind({});
Default.args = {};
