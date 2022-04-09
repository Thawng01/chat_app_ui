import apiClient from "./apiClient";

const endpoint = "message/";

export const getAllMessages = async (receiver, sender) =>
    await apiClient.get(`${endpoint}all/${receiver}/${sender}`);

export const getMessage = async (id, me) =>
    await apiClient.get(`${endpoint}${id}/${me}`);

export const createMessage = async (message) =>
    await apiClient.post(endpoint, message);

export const updateRead = async (input) => apiClient.put(endpoint, input);

export const sendImage = async (input) => {
    const { message, sender, receiver } = input;
    const formData = new FormData();
    formData.append("image", message);
    formData.append("sender", sender);
    formData.append("receiver", receiver);

    await apiClient.post(`${endpoint}image`, formData);
};
