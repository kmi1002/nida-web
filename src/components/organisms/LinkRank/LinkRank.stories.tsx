import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkRankProps } from './LinkRank.type';
import LinkRank from '.';
import { LinkRank as dummyLinkRank } from '@/dummies/Link';

export default {
  title: 'Design System/03-Organisms/Display/LinkRank',
  component: LinkRank,
  argTypes: {
    rows: { control: { type: 'object' }, defaultValue: dummyLinkRank },
  },
} as Meta;

const Template: Story<LinkRankProps> = ({ rows }: LinkRankProps) => <LinkRank rows={rows} />;

export const Default = Template.bind({});
Default.args = {};
