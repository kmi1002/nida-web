import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaymentFormStep2Props } from './PaymentFormStep2.type';
import PaymentFormStep2 from '.';

export default {
  title: 'Design System/03-Organisms/Display/PaymentFormStep2',
  component: PaymentFormStep2,
} as Meta;

const Template: Story<PaymentFormStep2Props> = () => <PaymentFormStep2 />;

export const Default = Template.bind({});
Default.args = {};
