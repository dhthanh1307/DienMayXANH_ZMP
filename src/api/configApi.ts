import { ACCESSTOKEN, REFRESHTOKEN } from "@utilities/index";
import axios from "axios";
import Cookies from "js-cookie" 

const createApiInstance = (baseURL: string) => {
    const axiosInstance = axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json",
        },
        timeout: 5000,
    });

    axiosInstance.interceptors.request.use(
        (config) => {
            const accessToken = Cookies.get(ACCESSTOKEN);

            const language =  Cookies.get('language') || 'en';
            if (accessToken) {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            }

            config.headers['Accept-Language'] = language;

            return config;
        },
        (error) => Promise.reject(error)
    );

    axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;

                const refreshToken =  Cookies.get(REFRESHTOKEN);
                try {
                    const { data } = await axiosInstance.post('/auth/refresh-token', { token: refreshToken });

                    Cookies.set(ACCESSTOKEN, data.accessToken);//cookie 

                    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;

                    return axiosInstance(originalRequest);
                } catch (refreshError) {
                    console.error(refreshError);
                }
            }

            return Promise.reject(error);
        }
    );

    return axiosInstance;
};





export { createApiInstance };
