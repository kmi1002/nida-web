export interface ApiProps {
  url: string;
  headers?: object;
  payload?: object;
}

export interface ApiRequestProps extends ApiProps {
  method: 'get' | 'post' | 'put' | 'delete';
}
