import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaymentFormStep1Props } from './PaymentFormStep1.type';
import PaymentFormStep1 from '.';

export default {
  title: 'Design System/03-Organisms/Display/PaymentFormStep1',
  component: PaymentFormStep1,
} as Meta;

const Template: Story<PaymentFormStep1Props> = () => <PaymentFormStep1 />;

export const Default = Template.bind({});
Default.args = {};
