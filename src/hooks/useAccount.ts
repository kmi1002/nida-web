import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest, loginSuccess, logoutRequest, logoutSuccess } from '@/stores/auth';
import { ProviderType } from '@/src/types';

export default function useAccount() {
  const dispatch = useDispatch();

  const fetchLogin = useCallback(
    (provider: ProviderType, accessToken?: string, email?: string, password?: string) =>
      dispatch(loginRequest(provider, accessToken, email, password)),
    [dispatch],
  );
  const fetchLoginSuccess = useCallback(
    () => dispatch(loginSuccess({ provider: ProviderType.EMAIL, token: 'abcdef' })),
    [dispatch],
  );
  const fetchLogout = useCallback(() => dispatch(logoutRequest()), [dispatch]);

  return {
    fetchLogin,
    fetchLoginSuccess,
    fetchLogout,
  };
}
