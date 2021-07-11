import React from 'react';
import * as T from './SupportSingle.type';
import * as S from './SupportSingle.style';
import Tabs from '@/molecules/Tabs';
import SimpleArticle from '../SimpleArticle';
import InquiryForm from '../InquiryForm';

const SupportSingleView = ({ value, onPropChange, introduce, privacy, terms }: T.SupportSingleProps) => {
  const tabs = [{ label: '서비스 소개' }, { label: '서비스 이용약관' }, { label: '개인정보 취급방침' }];

  return (
    <div>
      <Tabs tabs={tabs} onPropChange={onPropChange} indicatorColor="primary" textColor="primary" centered />
      {value === 0 && <SimpleArticle html={introduce} />}
      {value === 1 && <SimpleArticle html={privacy} />}
      {value === 2 && <SimpleArticle html={terms} />}
    </div>
  );
};

export default SupportSingleView;
