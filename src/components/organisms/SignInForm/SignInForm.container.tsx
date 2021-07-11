import React, { useEffect, useState } from 'react';
import SignInFormView from './SignInForm.view';
import { ProviderType } from '@/stores/auth/type';
import { AuthStatus } from '@/types/linkTypes';
import { checkEmail, checkPasswordHigh } from '@/helpers/RegexHelper';

const SignInFormContainer = () => {
  const [state, setState] = useState({
    emailStatus: AuthStatus.none,
    passwordStatus: AuthStatus.none,
    disabled: false,
  });

  const onSns = (provider: ProviderType) => {
    console.log(provider);
  };

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
  const onPasswordCheck = (value: string) => {
    if (value === '') {
      setState({ ...state, passwordStatus: AuthStatus.empty });
      return;
    }

    if (!checkPasswordHigh.test(value)) {
      setState({ ...state, passwordStatus: AuthStatus.password });
      return;
    }

    setState({ ...state, passwordStatus: AuthStatus.none });
  };

  const onProcess = () => {
    console.log('onSignin');
  };

  return (
    <SignInFormView
      emailStatus={state.emailStatus}
      passwordStatus={state.passwordStatus}
      onPropSns={onSns}
      onPropEmailCheck={onEmailCheck}
      onPropPasswordCheck={onPasswordCheck}
      onPropProcess={onProcess}
    />
  );
};

export default SignInFormContainer;
