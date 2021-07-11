import React, { useEffect, useState } from 'react';
import SupportMultiView from './SupportMulti.view';
import * as T from './SupportMulti.type';

const SupportMultiContainer = ({ faqCategories, faqItems, noticeItems, tabs, onPropChange }: T.SupportMultiProps) => {
  // faqCategories = [...faqCategories, ...faqCategories];
  // faqItems = [...faqItems, ...faqItems];
  // noticeItems = [...noticeItems, ...noticeItems];

  const [value, setValue] = useState(0);
  const onChange = (value: number) => {
    setValue(value);
    console.log(value);
  };

  return (
    <SupportMultiView
      value={value}
      noticeItems={noticeItems}
      faqCategories={faqCategories}
      faqItems={faqItems}
      onPropChange={onChange}
    />
  );
};

export default SupportMultiContainer;
