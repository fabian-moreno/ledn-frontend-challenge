import axios from 'axios';

export const getQueryFn = (url: string) => () => getRequest(url);

export const getRequest = (url: string) => axios.get(url).then((res) => res.data);

export const putRequest = (url: string, data: unknown) =>
  axios.put(url, data).then((res) => res.data);
