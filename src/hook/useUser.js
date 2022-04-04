import { useState } from "react";

import userApi from "../api/user";

const useUser = () => {
    const [user, setUser] = useState();
    const getUser = async (id) => {
        const user = await userApi.fetchUser(id);
        setUser(user.data);
    };

    return { user, getUser };
};

export default useUser;
