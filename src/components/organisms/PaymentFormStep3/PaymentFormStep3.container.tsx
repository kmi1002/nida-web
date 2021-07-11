import React, { useEffect, useState } from 'react';
import PaymentFormStep3View from './PaymentFormStep3.view';
import * as T from './PaymentFormStep3.type';

const PaymentFormStep3Container = ({ onPropHome }: T.PaymentFormStep3Props) => {
  return <PaymentFormStep3View onPropHome={onPropHome} />;
};

export default PaymentFormStep3Container;
