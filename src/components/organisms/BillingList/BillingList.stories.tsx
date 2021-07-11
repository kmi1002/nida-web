import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BillingListProps } from './BillingList.type';
import BillingList from '.';
import Account from '@/organisms/Account';

export default {
  title: 'Design System/03-Organisms/Display/BillingList',
  component: BillingList,
} as ComponentMeta<typeof BillingList>;

const Template: ComponentStory<typeof BillingList> = args => <BillingList {...args} />;

export const Default = Template.bind({});
Default.args = {};
