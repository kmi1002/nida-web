import React, { useEffect, useState } from 'react';
import SignUpFormView from './SignUpForm.view';
import moment from 'moment-timezone';
moment.tz.setDefault('Asia/Seoul');
import { AuthStatus } from '@/types/linkTypes';
import { checkNameKrEn, checkEmail, checkPasswordHigh } from '@/helpers/RegexHelper';
import SignInFormView from '../SignInForm/SignInForm.view';

const SignUpFormContainer = () => {
  const [state, setState] = useState({
    nameStatus: AuthStatus.none,
    emailStatus: AuthStatus.none,
    passwordStatus: AuthStatus.none,
    disabled: false,
  });

  const onNameCheck = (value: string) => {
    if (value === '') {
      setState({ ...state, nameStatus: AuthStatus.empty });
      return;
    }

    if (!checkNameKrEn.test(value)) {
      setState({ ...state, nameStatus: AuthStatus.name });
      return;
    }
    setState({ ...state, nameStatus: AuthStatus.none });
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
    console.log('onSignup');
  };

  const onAgree = (value: boolean) => {
    console.log('onAgree');
  };

  return (
    <SignUpFormView
      nameStatus={state.nameStatus}
      emailStatus={state.emailStatus}
      passwordStatus={state.passwordStatus}
      onPropNameCheck={onNameCheck}
      onPropEmailCheck={onEmailCheck}
      onPropPasswordCheck={onPasswordCheck}
      onPropProcess={onProcess}
      onPropAgree={onAgree}
    />
  );
};

export default SignUpFormContainer;
