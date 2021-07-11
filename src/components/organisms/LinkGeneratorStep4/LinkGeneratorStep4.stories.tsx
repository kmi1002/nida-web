import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkGeneratorStep4Props } from './LinkGeneratorStep4.type';
import LinkGeneratorStep4 from './index';

export default {
  title: 'Design System/03-Organisms/Display/LinkGeneratorStep4',
  component: LinkGeneratorStep4,
  argTypes: {
    sourceLink: { control: { type: 'text' }, defaultValue: 'http://한글.링크를.만들어.보.세요.com' },
    onPropLogin: { action: 'login clicked' },
  },
} as Meta;

const Template: Story<LinkGeneratorStep4Props> = ({ sourceLink, onPropLogin }: LinkGeneratorStep4Props) => (
  <LinkGeneratorStep4 sourceLink={sourceLink} onPropLogin={onPropLogin} />
);

export const Default = Template.bind({});
Default.args = {};
