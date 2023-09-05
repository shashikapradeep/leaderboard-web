import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import ErrorMessage from '../../exceptions/ErrorMessage';
import {configs} from "../../configs/app.config";

class Axios {
    private static instance: AxiosInstance;

    private defaultHeaders = {
        Accept: 'application/json,text/html',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    };

    private defaultTimeout = 3000;

    private constructor() {
        this.setupInstance();
    }

    private setupInstance() {
        Axios.instance = axios.create({
            baseURL: `${configs.base_api_url}/${configs.base_api_module}/${configs.base_api_version}`,
            timeout: this.defaultTimeout,
            headers: this.defaultHeaders,
        });

        Axios.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                // Modify request config here (e.g., add headers)
                return config;
            },
            (error: AxiosError) => {
                return Promise.reject(error);
            },
        );

        Axios.instance.interceptors.response.use(
            (response: AxiosResponse) => {
                return response;
            },
            (error: AxiosError) => {
                new ErrorMessage(error).showMessage();
                return Promise.reject(error);
            },
        );
    }

    public static getInstance(): AxiosInstance {
        if (!Axios.instance) {
            new Axios();
        }
        return Axios.instance;
    }
}

export default Axios;
