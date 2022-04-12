import axios from "axios";

export const source = axios.CancelToken.source();

const token = localStorage.getItem("token");

const apiClient = axios.create({
    baseURL: "https://node-chat-app-api.herokuapp.com/api",
    headers: { "x-auth-token": token },
});

export default apiClient;
