import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SignUpFormProps } from './SignUpForm.type';
import SignUpForm from '.';

export default {
  title: 'Design System/03-Organisms/Display/SignUpForm',
  component: SignUpForm,
} as Meta;

const Template: Story<SignUpFormProps> = () => <SignUpForm />;

export const Default = Template.bind({});
Default.args = {};
