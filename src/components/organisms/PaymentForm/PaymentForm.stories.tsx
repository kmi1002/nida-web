import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PaymentFormProps } from './PaymentFormForm.type';
import PaymentForm from '.';

export default {
  title: 'Design System/03-Organisms/Display/PaymentForm',
  component: PaymentForm,
} as Meta;

const Template: Story<PaymentFormProps> = () => <PaymentForm />;

export const Default = Template.bind({});
Default.args = {};
