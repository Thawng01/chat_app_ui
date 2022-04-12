import axios from "axios";

export const source = axios.CancelToken.source();

const token = localStorage.getItem("token");

const apiClient = axios.create({
    baseURL: "http://192.168.43.240:9000/api",
    headers: { "x-auth-token": token },
});

export default apiClient;
