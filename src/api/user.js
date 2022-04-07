import apiClient from "./apiClient";

const endpoint = "user/";

export const fetchUser = async (id) => await apiClient.get(endpoint + "/" + id);

export const toggleBlock = async (id, me) =>
    await apiClient.put(endpoint + "block/" + id, { me });

export const updateUserInfo = async (id, info) =>
    await apiClient.put(endpoint + id, info);

export const updateUserProfile = async (id, avatar) => {
    const form = new FormData();
    form.append("avatar", avatar);
    await apiClient.put(`${endpoint}profile/${id}`, form);
};
