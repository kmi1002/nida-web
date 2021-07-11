import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaymentFormStep3Props } from './PaymentFormStep3.type';
import PaymentFormStep3 from '.';

export default {
  title: 'Design System/03-Organisms/Display/PaymentFormStep3',
  component: PaymentFormStep3,
} as Meta;

const Template: Story<PaymentFormStep3Props> = () => <PaymentFormStep3 />;

export const Default = Template.bind({});
Default.args = {};
