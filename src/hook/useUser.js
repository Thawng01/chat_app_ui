import { useCallback, useState } from "react";

import { fetchUser } from "../api/user";

const useUser = () => {
    const [user, setUser] = useState();
    const getUser = useCallback(async (id) => {
        const user = await fetchUser(id);
        setUser(user.data);
    }, []);

    return { user, getUser };
};

export default useUser;
