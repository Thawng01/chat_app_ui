import { useCallback, useEffect, useState } from "react";

import { fetchUser } from "../api/user";
import { socket } from "../service/socket";

const useUser = () => {
    const [user, setUser] = useState();
    const getUser = useCallback(async (id) => {
        const user = await fetchUser(id);
        setUser(user.data);
    }, []);

    const updateUserInfo = useCallback((user) => setUser(user), []);

    useEffect(() => {
        socket.on("updateUserInfo", updateUserInfo);
        return () => socket.off("updateUserInfo", updateUserInfo);
    }, [updateUserInfo]);

    return { user, getUser };
};

export default useUser;
