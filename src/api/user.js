import apiClient from "./apiClient";

const endpoint = "user/";

const fetchUserConv = async (id) => await apiClient.get("conversation/" + id);

const fetchUser = async (id) => await apiClient.get(endpoint + "/" + id);

const toggleBlock = async (id, me) =>
    await apiClient.put(endpoint + "block/" + id, { me });

const updateUserInfo = async (id, info) =>
    await apiClient.put(endpoint + id, info);

export default {
    fetchUserConv,
    fetchUser,
    toggleBlock,
    updateUserInfo,
};
