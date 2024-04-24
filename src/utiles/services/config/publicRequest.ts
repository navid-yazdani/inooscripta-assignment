import axios, {AxiosResponse} from 'axios';
import qs from 'qs'
const api = axios.create({
  headers: {'Content-Type': 'application/json'},
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const request = {
  get: <T>(url: string, data: object) => api.get<T>(url+ "?" + qs.stringify(data)).then(responseBody),
  post: <T>(url: string, body?: object) => api.post<T>(url, body).then(responseBody),
};
