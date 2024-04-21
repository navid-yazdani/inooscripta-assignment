import axios, {AxiosResponse} from 'axios';

axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers["Accept-Language"] = "en";
axios.defaults.baseURL = 'https://newsapi.org/v2/';

axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const request = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body?: object) => axios.post<T>(url, body).then(responseBody),
};
