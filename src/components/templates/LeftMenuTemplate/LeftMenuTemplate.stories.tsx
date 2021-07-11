import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as T from './LeftMenuTemplate.type';
import LeftMenuTemplate from '.';
import Account1 from '@organisms/Account';
import LinkList1 from '@organisms/LinkList';
import BillingList1 from '@organisms/BillingList';
import InquiryForm1 from '@organisms/InquiryForm';
import InquiryList1 from '@organisms/InquiryList';
import InquiryDetail1 from '@organisms/InquiryDetail';

import LinkGenerator1 from '@organisms/LinkGenerator';
import Pricing1 from '@organisms/Pricing';
import PaymentForm from '@organisms/PaymentForm';
import Sidebar from '@/molecules/Sidebar';
import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
const dummySidebar = [
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
];

export default {
  title: 'Design System/04-Templates/LeftMenuTemplate',
  component: LeftMenuTemplate,
  argTypes: {},
} as Meta;

const Template: Story<T.LeftMenuTemplateProps> = ({ children, leftMenu, header, footer }: T.LeftMenuTemplateProps) => (
  <LeftMenuTemplate leftMenu={leftMenu} header={header} footer={footer}>
    {children}
  </LeftMenuTemplate>
);

export const Default = Template.bind({});
Default.args = {
  leftMenu: <Sidebar items={dummySidebar} />,
  header: 'header',
  footer: 'footer',
};

export const Account = Template.bind({});
Account.args = {
  leftMenu: <Sidebar items={dummySidebar} />,
  header: 'header',
  children: <Account1 />,
  footer: 'footer',
};

export const LinkList = Template.bind({});
LinkList.args = {
  leftMenu: <Sidebar items={dummySidebar} />,
  header: 'header',
  children: <LinkList1 />,
  footer: 'footer',
};

export const LinkGenerator = Template.bind({});
LinkGenerator.args = {
  leftMenu: <Sidebar items={dummySidebar} />,
  header: 'header',
  children: <LinkGenerator1 />,
  footer: 'footer',
};

export const BillingList = Template.bind({});
BillingList.args = {
  leftMenu: <Sidebar items={dummySidebar} />,
  header: 'header',
  children: <BillingList1 />,
  footer: 'footer',
};

export const InquiryList = Template.bind({});
InquiryList.args = {
  leftMenu: <Sidebar items={dummySidebar} />,
  header: 'header',
  children: <InquiryList1 />,
  footer: 'footer',
};

export const InquiryForm = Template.bind({});
InquiryForm.args = {
  leftMenu: <Sidebar items={dummySidebar} />,
  header: 'header',
  children: <InquiryForm1 />,
  footer: 'footer',
};

export const InquiryDetail = Template.bind({});
InquiryDetail.args = {
  leftMenu: <Sidebar items={dummySidebar} />,
  header: 'header',
  children: <InquiryDetail1 />,
  footer: 'footer',
};

export const Pricing = Template.bind({});
Pricing.args = {
  leftMenu: <Sidebar items={dummySidebar} />,
  header: 'header',
  children: <Pricing1 />,
  footer: 'footer',
};

export const Payment = Template.bind({});
Payment.args = {
  leftMenu: <Sidebar items={dummySidebar} />,
  header: 'header',
  children: <PaymentForm />,
  footer: 'footer',
};
