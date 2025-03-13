import axios from "axios";

const createApiInstance = (baseURL: string ) => {
    const api = axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json",
        },
        timeout: 5000,
    });

    api.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => {
            console.error("Request Error:", error);

            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            console.error("Response Error:", error);

            return Promise.reject(error);
        }
    );

    return api;
};

const productApi = createApiInstance("https://dummyjson.com");

const locationApi = createApiInstance("https://open.oapi.vn/location");

export { createApiInstance,locationApi, productApi };
