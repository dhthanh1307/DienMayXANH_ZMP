import axios from "axios";

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
            const accessToken = localStorage.getItem('accessToken');
            const language = localStorage.getItem('language') || 'en';
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
                const refreshToken = localStorage.getItem('refreshToken');
                try {
                    const { data } = await axiosInstance.post('/auth/refresh-token', { token: refreshToken });
                    localStorage.setItem('accessToken', data.accessToken);
                    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
                    return axiosInstance(originalRequest);
                } catch (refreshError) {
                }
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

const productApi = createApiInstance("https://dummyjson.com");

const locationApi = createApiInstance("https://open.oapi.vn/location");

export { createApiInstance, locationApi, productApi };
