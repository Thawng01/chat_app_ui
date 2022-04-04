import apiClient from "./apiClient";

const endpoint = "message/";

const getAllMessages = async (userId, me) =>
    await apiClient.get(endpoint + "all/" + userId + "/" + me);

const getMessage = async (id) => await apiClient.get(endpoint + "/" + id);

const createMessage = async (message) => {
    return await apiClient.post(endpoint, message);
};

export default {
    getAllMessages,
    getMessage,
    createMessage,
};
