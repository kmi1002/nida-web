import { ProviderType } from '@/src/types';

// 로그인
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_PREPARE = 'LOGIN_PREPARE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_CANCELLED = 'LOGIN_CANCELLED';

// 로그아웃
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginPrepareAction {
  type: typeof LOGIN_PREPARE;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  provider: ProviderType;
  token: string;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
}

interface LoginCancelledAction {
  type: typeof LOGIN_CANCELLED;
}

interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST;
}

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

interface LogoutFailureAction {
  type: typeof LOGOUT_FAILURE;
}

export type InitActionTypes =
  | LoginRequestAction
  | LoginPrepareAction
  | LoginSuccessAction
  | LoginFailureAction
  | LoginCancelledAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutFailureAction;

export enum AuthStateType {
  LOGGED_IN = 'logged_in',
  LOGGED_OUT = 'logged_out',
  LOGIN_FAILURE = 'login_failure',
  LOGIN_CANCELLED = 'login_cancelled',
}

export interface AuthState {
  // 상태
  authState: AuthStateType;

  // 인증 타입
  provider: ProviderType;

  // 엑세스 토큰
  accessToken: string | null;
}
