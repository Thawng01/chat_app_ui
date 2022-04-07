import apiClient from "./apiClient";

const endpoint = "message/";

export const getAllMessages = async (userId, me) =>
    await apiClient.get(`${endpoint}all/${userId}/${me}`);

export const getMessage = async (id) =>
    await apiClient.get(endpoint + "/" + id);

export const createMessage = async (message) =>
    await apiClient.post(endpoint, message);

export const sendImage = async (input) => {
    const { message, sender, receiver } = input;
    const formData = new FormData();
    formData.append("image", message);
    formData.append("sender", sender);
    formData.append("receiver", receiver);

    await apiClient.post(`${endpoint}image`, formData);
};
