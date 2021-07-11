import React from 'react';
import * as T from './SupportMulti.type';
import * as S from './SupportMulti.style';
import Tabs from '@/molecules/Tabs';
import AccordionArticle from '../AccordionArticle';
import InquiryForm from '../InquiryForm';

const SupportMultiView = ({ value, onPropChange, noticeItems, faqCategories, faqItems }: T.SupportMultiProps) => {
  const tabs = [{ label: '공지사항' }, { label: '도움말' }, { label: '문의하기' }];

  console.log(noticeItems);
  return (
    <div>
      <Tabs tabs={tabs} onPropChange={onPropChange} indicatorColor="primary" textColor="primary" centered />
      {value === 0 && <AccordionArticle rows={noticeItems} />}
      {value === 1 && <AccordionArticle categories={faqCategories} rows={faqItems} />}
      {value === 2 && <InquiryForm />}
    </div>
  );
};

export default SupportMultiView;
