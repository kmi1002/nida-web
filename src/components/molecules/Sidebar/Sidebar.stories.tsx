import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import SettingsIcon from '@material-ui/icons/Settings';
import Sidebar from './index';

export default {
  title: 'Design System/02-Molecules/Navigation/Sidebar',
  component: Sidebar,
  argTypes: {
    depthStep: {
      control: { type: 'number' },
      defaultValue: 10,
    },
    depth: {
      control: { type: 'number' },
      defaultValue: 0,
    },
    expanded: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    items: {
      control: { type: 'object' },
      defaultValue: [
        { name: 'home', label: 'Home', Icon: HomeIcon },
        {
          name: 'billing',
          label: 'Billing',
          Icon: ReceiptIcon,
          items: [
            { name: 'statements', label: 'Statements' },
            { name: 'reports', label: 'Reports' },
          ],
        },
        'divider',
        {
          name: 'settings',
          label: 'Settings',
          Icon: SettingsIcon,
          items: [
            { name: 'profile', label: 'Profile' },
            { name: 'insurance', label: 'Insurance' },
            'divider',
            {
              name: 'notifications',
              label: 'Notifications',
              Icon: NotificationsIcon,
              items: [
                { name: 'email', label: 'Email' },
                {
                  name: 'desktop',
                  label: 'Desktop',
                  Icon: DesktopWindowsIcon,
                  items: [
                    { name: 'schedule', label: 'Schedule' },
                    { name: 'frequency', label: 'Frequency' },
                  ],
                },
                { name: 'sms', label: 'SMS' },
              ],
            },
          ],
        },
      ],
    },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = args => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};
