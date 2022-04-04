import axios from "axios";
const apiClient = axios.create({
    baseURL: "http://192.168.43.240:9000/api",
});

export default apiClient;
