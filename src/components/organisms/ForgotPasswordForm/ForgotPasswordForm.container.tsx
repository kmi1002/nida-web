import React, { useEffect, useState } from 'react';
import ForgotPasswordFormView from './ForgotPasswordForm.view';
import { AuthStatus } from '@/types/linkTypes';
import { checkEmail } from '@/helpers/RegexHelper';

const ForgotPasswordFormContainer = () => {
  const [state, setState] = useState({
    emailStatus: AuthStatus.none,
    disabled: false,
  });

  const onEmailCheck = (value: string) => {
    if (value === '') {
      setState({ ...state, emailStatus: AuthStatus.empty });
      return;
    }

    if (!checkEmail.test(value)) {
      setState({ ...state, emailStatus: AuthStatus.email });
      return;
    }

    setState({ ...state, emailStatus: AuthStatus.none });
  };

  const onProcess = () => {
    console.log('onSignin');
  };
  return (
    <ForgotPasswordFormView emailStatus={state.emailStatus} onPropEmailCheck={onEmailCheck} onPropProcess={onProcess} />
  );
};

export default ForgotPasswordFormContainer;
