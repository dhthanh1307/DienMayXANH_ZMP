import axios from "axios";

const api = axios.create({
    baseURL: "https://open.oapi.vn/location",
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
        console.error("Error:", error);

        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error("API Error:", error);

        return Promise.reject(error);
    }
);

export default api;
