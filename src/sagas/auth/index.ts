import { take, put, call, fork, delay } from 'redux-saga/effects';
import { setToken } from '@/apis/api';
import * as authApis from '@/apis/auth';
import { ProviderType } from '@/src/types';

function* login(provider: ProviderType, accessToken?: string, email?: string, password?: string) {
  try {
    const { data } = yield call(authApis.login, provider, accessToken, email, password);
    const token: string = data.accessToken;

    setToken(token);

    yield put({ type: 'LOGIN_SUCCESS', provider, token });

    yield delay(500);
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE', error });
  }
}

function* logout() {
  try {
    yield put({ type: 'LOGOUT_SUCCESS' });
  } catch (error) {
    yield put({ type: 'LOGOUT_FAILURE', error });
  }
}

export function* watchLogin() {
  while (true) {
    const { provider, accessToken, email, password } = yield take('LOGIN_REQUEST');
    yield fork(login, provider, accessToken, email, password);
  }
}

export function* watchLogout() {
  while (true) {
    yield take('LOGOUT_REQUEST');
    yield fork(logout);
  }
}
