import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PricingProps } from './Pricing.type';
import Pricing from '.';

export default {
  title: 'Design System/03-Organisms/Display/Pricing',
  component: Pricing,
} as Meta;

const Template: Story<PricingProps> = () => <Pricing />;

export const Default = Template.bind({});
Default.args = {};
