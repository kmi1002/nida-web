import React, { useEffect, useState } from 'react';
import Stepper from '@/molecules/Stepper';
import PaymentFormStep1 from '../PaymentFormStep1';
import PaymentFormStep2 from '../PaymentFormStep2';
import PaymentFormStep3 from '../PaymentFormStep3';

const PaymentFormContainer = () => {
  const [state, setState] = useState({ step: 1 });

  const onPrev = () => {
    setState({ ...state, step: Math.max(state.step - 1, 1) });
  };

  const onNext = () => {
    setState({ ...state, step: Math.min(state.step + 1, 3) });
  };

  const onMoveStep2 = () => {
    onNext();
  };

  const onMoveStep3 = () => {
    onNext();
  };

  const onHome = () => {};

  return (
    <div>
      <Stepper step={state.step} steps={['상품 확인', '결제 시도', '결제 결과']} alternativeLabel />
      {state.step === 1 && <PaymentFormStep1 onPropNext={onMoveStep2} />}
      {state.step === 2 && <PaymentFormStep2 onPropPrev={onPrev} onPropNext={onMoveStep3} />}
      {state.step === 3 && <PaymentFormStep3 onPropHome={onHome} />}
    </div>
  );
};

export default PaymentFormContainer;
