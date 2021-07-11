import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as T from './AppTemplate.type';
import AppTemplate from '.';
import Header from '@organisms/Header';
import Footer from '@organisms/Footer';
import LinkGenerator from '@organisms/LinkGenerator';
import { FooterNavigation as dummyNavigation } from '@/dummies/Navigation';
import Pricing1 from '@organisms/Pricing';
import PaymentForm from '@organisms/PaymentForm';
import SigninForm from '@organisms/SignInForm';
import SignupForm from '@organisms/SignUpForm';
import ForgotPasswordForm from '@organisms/ForgotPasswordForm';
import SupportSingle1 from '@organisms/SupportSingle';
import SupportMulti1 from '@organisms/SupportMulti';
import { Introduce as dummyIntroduce } from '@/dummies/Supports';
import {
  SupportMulti as dummyAccordionArticle,
  SupportMultiCategory as dummyAccordionArticleCategory,
} from '@/dummies/Supports';

export default {
  title: 'Design System/04-Templates/AppTemplage',
  component: AppTemplate,
  argTypes: {},
} as Meta;

const Template: Story<T.AppTemplateProps> = ({ children, header, hero, sponsor, footer }: T.AppTemplateProps) => (
  <AppTemplate header={header} hero={hero} sponsor={sponsor} footer={footer}>
    {children}
  </AppTemplate>
);

export const Default = Template.bind({});
Default.args = {
  header: 'header',
  hero: 'hero',
  sponsor: 'sponsor',
  footer: 'footer',
};

export const Main = Template.bind({});
Main.args = {
  header: <Header />,
  // hero: 'hero',
  // sponsor: 'sponsor',
  children: <LinkGenerator />,
  footer: <Footer menus={dummyNavigation} />,
};

export const Pricing = Template.bind({});
Pricing.args = {
  header: <Header />,
  // hero: 'hero',
  // sponsor: 'sponsor',
  children: <Pricing1 />,
  footer: <Footer menus={dummyNavigation} />,
};

export const Payment = Template.bind({});
Payment.args = {
  header: <Header />,
  // hero: 'hero',
  // sponsor: 'sponsor',
  children: <PaymentForm />,
  footer: <Footer menus={dummyNavigation} />,
};

export const Signin = Template.bind({});
Signin.args = {
  header: <Header />,
  // hero: 'hero',
  // sponsor: 'sponsor',
  children: <SigninForm />,
  footer: <Footer menus={dummyNavigation} />,
};

export const Signup = Template.bind({});
Signup.args = {
  header: <Header />,
  // hero: 'hero',
  // sponsor: 'sponsor',
  children: <SignupForm />,
  footer: <Footer menus={dummyNavigation} />,
};

export const ForgotPassword = Template.bind({});
ForgotPassword.args = {
  header: <Header />,
  // hero: 'hero',
  // sponsor: 'sponsor',
  children: <ForgotPasswordForm />,
  footer: <Footer menus={dummyNavigation} />,
};

export const SupportSingle = Template.bind({});
SupportSingle.args = {
  header: <Header />,
  // hero: 'hero',
  // sponsor: 'sponsor',
  children: <SupportSingle1 introduce={dummyIntroduce} privacy={dummyIntroduce} terms={dummyIntroduce} />,
  footer: <Footer menus={dummyNavigation} />,
};

export const SupportMulti = Template.bind({});
SupportMulti.args = {
  header: <Header />,
  // hero: 'hero',
  // sponsor: 'sponsor',
  children: (
    <SupportMulti1
      faqCategories={dummyAccordionArticleCategory}
      faqItems={dummyAccordionArticle}
      noticeItems={dummyAccordionArticle}
    />
  ),
  footer: <Footer menus={dummyNavigation} />,
};
