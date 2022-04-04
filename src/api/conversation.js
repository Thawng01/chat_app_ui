import apiClient from "./apiClient";

const endpoint = "conversation/";

const deleteConv = async (id) => await apiClient.delete(endpoint + id);

export default {
    deleteConv,
};
