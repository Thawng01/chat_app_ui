import apiClient from "./apiClient";

const endpoint = "auth/";

const fetchMe = async (id) => await apiClient.get(endpoint + "me/" + id);

export default {
    fetchMe,
};
