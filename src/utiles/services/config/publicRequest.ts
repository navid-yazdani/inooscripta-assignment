import axios, {AxiosResponse} from 'axios';

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: { 'Content-Type': 'application/json' },
});

newsApi.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

newsApi.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const request = {
    get: <T>(url: string) => newsApi.get<T>(url).then(responseBody),
    post: <T>(url: string, body?: object) => newsApi.post<T>(url, body).then(responseBody),
};
