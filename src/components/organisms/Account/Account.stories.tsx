import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AccountProps } from './Account.type';
import Account from '.';

export default {
  title: 'Design System/03-Organisms/Display/Account',
  component: Account,
} as ComponentMeta<typeof Account>;

const Template: ComponentStory<typeof Account> = args => <Account {...args} />;

export const Default = Template.bind({});
Default.args = {};
