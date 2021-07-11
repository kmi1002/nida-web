import React, { useEffect, useState } from 'react';
import InquiryFormView from './InquiryForm.view';

const InquiryFormContainer = () => {
  const onOk = () => {};
  const onCancel = () => {};
  return <InquiryFormView onPropOk={onOk} onPropCancel={onCancel} />;
};

export default InquiryFormContainer;
