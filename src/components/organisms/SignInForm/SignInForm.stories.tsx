import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SignInFormProps } from './SignInForm.type';
import SignInForm from '.';

export default {
  title: 'Design System/03-Organisms/Display/SignInForm',
  component: SignInForm,
} as Meta;

const Template: Story<SignInFormProps> = () => <SignInForm />;

export const Default = Template.bind({});
Default.args = {};
