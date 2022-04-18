import { useCallback, useEffect, useState } from "react";

import { fetchUser } from "../api/user";
import { source } from "../api/apiClient";
import socket from "../service/socket";

const useUser = (userId) => {
    const [user, setUser] = useState();
    const [error, setError] = useState(null);

    const getUser = useCallback(async () => {
        try {
            const user = await fetchUser(userId);
            setUser(user.data);
        } catch (error) {
            setError(error.response.data);
        }
    }, [userId]);

    useEffect(() => {
        if (userId !== undefined) {
            getUser();
        }
        return () => source.cancel();
    }, [getUser, userId]);

    useEffect(() => {
        socket.on("updateUser", (data) => {
            setUser(data);
        });

        return () => socket.off("updateUser");
    }, [setUser]);

    return { user, error };
};

export default useUser;
