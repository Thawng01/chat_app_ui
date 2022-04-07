import apiClient from "./apiClient";

const endpoint = "conversation/";
export const fetchUserConv = async (id) => await apiClient.get(endpoint + id);
export const deleteConv = async (id) => await apiClient.delete(endpoint + id);
