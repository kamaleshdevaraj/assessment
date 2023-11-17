import axios from "axios";
import { getFromLocalItem } from '../utilis/localstorage';

export const AxiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

AxiosClient.interceptors.request.use(function (config) {
  const token = getFromLocalItem("token");
  config.headers["Content-Type"] = "application/json";
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});
