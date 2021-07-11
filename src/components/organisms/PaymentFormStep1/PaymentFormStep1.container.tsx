import React from 'react';
import PaymentFormStep1View from './PaymentFormStep1.view';
import * as T from './PaymentFormStep1.type';

const PaymentFormStep1Container = ({ onPropNext }: T.PaymentFormStep1Props) => {
  return <PaymentFormStep1View onPropEnter={onPropNext} />;
};

export default PaymentFormStep1Container;
