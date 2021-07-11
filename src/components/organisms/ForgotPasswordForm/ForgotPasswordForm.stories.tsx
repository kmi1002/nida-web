import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ForgotPasswordFormProps } from './ForgotPasswordForm.type';
import ForgotPasswordForm from '.';

export default {
  title: 'Design System/03-Organisms/Display/ForgotPasswordForm',
  component: ForgotPasswordForm,
} as Meta;

const Template: Story<ForgotPasswordFormProps> = () => <ForgotPasswordForm />;

export const Default = Template.bind({});
Default.args = {};
