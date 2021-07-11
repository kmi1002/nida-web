import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as T from './ImageIcon.type';
import ImageIcon from '.';

export default {
  title: 'Design System/01-Atoms/Display/ImageIcon',
  component: ImageIcon,
  argTypes: {
    type: { control: { type: 'select', options: Object.values(T.IconType) }, defaultValue: 'logo' },
    flipVertical: { control: { type: 'boolean' } },
    flipHorizontal: { control: { type: 'boolean' } },
  },
} as ComponentMeta<typeof ImageIcon>;

const Template: ComponentStory<typeof ImageIcon> = args => <ImageIcon {...args} />;

export const Default = Template.bind({});
Default.args = {};
