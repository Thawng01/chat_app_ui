import { useCallback, useEffect, useState } from "react";
import { source } from "../api/apiClient";
import { socket } from "../service/socket";

import fetchMe from "../api/auth";
import useToken from "./useToken";

const useMe = () => {
    const [me, setMe] = useState();
    const [error, setError] = useState(null);

    const id = useToken();

    const handleUpdateUser = useCallback((user) => setMe(user), []);

    useEffect(() => {
        socket.on("updateUser", handleUpdateUser);
        return () => socket.off("updateUser", handleUpdateUser);
    }, [handleUpdateUser]);

    const getMe = useCallback(async () => {
        try {
            const result = await fetchMe(id);
            setMe(result.data);
        } catch (error) {
            setError(error.response?.data);
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            getMe();
        }
        return () => source.cancel();
    }, [id, getMe]);

    return { me, error };
};

export default useMe;
