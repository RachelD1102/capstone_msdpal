import axios from "axios";

const isDev = process.env.NODE_ENV === "development";

const adminRequest = axios.create({
  baseURL: isDev ? "/home" : "https://uofumsdpal.dev/api",
});

adminRequest.interceptors.request.use(
  (config) => {
    config.headers["a-token"] = localStorage.getItem("token");

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

adminRequest.interceptors.response.use((config) => {
    return config
  }, (error) => {
    return Promise.reject(error)
  })
  
  export default adminRequest