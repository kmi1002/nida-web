import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { printDebug, printError } from '@/helpers/DebugHelper';
import * as T from './type';

const buildHeaders = (headers?: object) => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };
};

interface IResponse {
  success: boolean;
  data?: any;
  error?: {
    code?: string;
    message: string;
  };
}

const thenResponse = (response: AxiosResponse): Promise<IResponse> => {
  printDebug('API Success', response);

  if (response.status >= 200 && response.status <= 204) {
    return Promise.resolve(response.data);
  }

  return Promise.reject(response.data);
};

const catchResponse = (error: AxiosError): Promise<IResponse> => {
  printError('API Failure', error);

  const data: IResponse = { success: false, error: { code: error.code, message: error.message } };
  return Promise.reject(data);
};

export const request = ({ method, url, headers, payload }: T.ApiRequestProps) => {
  const option: AxiosRequestConfig = {
    url,
    method,
    headers: buildHeaders(headers),
    timeout: 60000,
    withCredentials: false,
    responseType: 'json',
  };

  if (method === 'get') {
    option.params = payload;
  }

  if (method === 'post' || method === 'put' || method === 'delete') {
    option.data = payload;
  }

  return axios(option).then(thenResponse).catch(catchResponse);
};

export function setToken(token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const api = {
  get: ({ url, headers, payload }: T.ApiProps) => {
    return request({ method: 'get', url, headers, payload });
  },
  post: ({ url, headers, payload }: T.ApiProps) => {
    return request({ method: 'post', url, headers, payload });
  },
  put: ({ url, headers, payload }: T.ApiProps) => {
    return request({ method: 'put', url, headers, payload });
  },
  delete: ({ url, headers, payload }: T.ApiProps) => {
    return request({ method: 'delete', url, headers, payload });
  },
};

export default api;
