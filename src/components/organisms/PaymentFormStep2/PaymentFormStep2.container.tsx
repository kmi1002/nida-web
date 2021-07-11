import React, { useEffect, useState } from 'react';
import PaymentFormStep2View from './PaymentFormStep2.view';
import * as T from './PaymentFormStep2.type';

const PaymentFormStep2Container = ({ onPropPrev, onPropNext }: T.PaymentFormStep1Props) => {
  return <PaymentFormStep2View onPropBack={onPropPrev} onPropEnter={onPropNext} />;
};

export default PaymentFormStep2Container;
