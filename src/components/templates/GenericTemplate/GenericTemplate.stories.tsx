import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as T from './GenericTemplate.type';
import GenericTemplate from '.';

export default {
  title: 'Design System/04-Templates/GenericTemplate',
  component: GenericTemplate,
  argTypes: {},
} as Meta;

const Template = () => (
  <GenericTemplate>
    <p>Chidren</p>
  </GenericTemplate>
);

export const Default = Template.bind({});
Default.args = {};
