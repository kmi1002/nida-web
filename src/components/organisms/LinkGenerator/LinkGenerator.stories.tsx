import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkGeneratorProps } from './LinkGenerator.type';
import LinkGenerator from '.';

export default {
  title: 'Design System/03-Organisms/Display/LinkGenerator',
  component: LinkGenerator,
  argTypes: {
    nidaLink: { control: { type: 'text' }, defaultValue: 'http://한글.링크를.만들어.보.세요.com' },
  },
} as Meta;

const Template: Story<LinkGeneratorProps> = ({ nidaLink }: LinkGeneratorProps) => <LinkGenerator nidaLink={nidaLink} />;

export const Default = Template.bind({});
Default.args = {};
