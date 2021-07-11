import api from '@/apis/api';
import { ProviderType } from '@/src/types';

const API_URL = `${process.env.API_URL}:${process.env.API_PORT}`;

export const login = (provider: ProviderType, accessToken?: string, email?: string, password?: string) => {
  let payload: { [k: string]: string } = { provider };

  if (provider === ProviderType.EMAIL) {
    if (email === undefined || password === undefined) {
      throw new Error('이메일 & 비밀번호가 없습니다.');
    }

    payload = { ...payload, email, password };
  } else {
    if (accessToken === undefined) {
      throw new Error('accessToken이 없습니다.');
    }

    payload = { ...payload, accessToken };
  }

  return api.post({
    url: `${API_URL}/login`,
    payload,
  });
};
