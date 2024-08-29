import axios from "axios";

const $api = axios.create({
  baseURL: "https://www.zapchast.com.kg/api/", 
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

$api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(
        `Ошибка: ${error.response.status} - ${error.response.data}`
      );
    } else if (error.request) {
      console.error("Ошибка запроса:", error.request);
    } else {
      console.error("Ошибка:", error.message);
    }
    return Promise.reject(error);
  }
);

export default $api;
