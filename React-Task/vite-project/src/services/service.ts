import { AxiosRequestConfig, AxiosResponse } from "axios";
import { AxiosClient } from './Axios' 
import { ENDPOINTURL } from './Endpoint'


let response: AxiosResponse<any, any>;

export const getApi = async (
  url: ENDPOINTURL,
  config?: AxiosRequestConfig,
) => {
  await AxiosClient.get(url, config)
    .then((res) => (response = res))
    .catch((err) => {
      return (response = err.response);
    });
  return response;
};

export const postApi = async (
  url: ENDPOINTURL,
  data: any,
  config?: AxiosRequestConfig
) => {
  await AxiosClient.post(url, data, config)
    .then((res) => (response = res))
    .catch((err) => (response = err.response));
  return response;
};

export const putApi = async (
  url: ENDPOINTURL,
  data: any,
  config?: AxiosRequestConfig
) => {
  await AxiosClient.put(url, data, config)
    .then((res) => (response = res))
    .catch((err) => (response = err.response));
  return response;
};

export const deleteApi = async (
  url: ENDPOINTURL,
  config?: AxiosRequestConfig
) => {
  await AxiosClient.delete(url, config)
    .then((res) => (response = res))
    .catch((err) => (response = err.response));
  return response;
};
