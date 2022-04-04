import { useState, useEffect } from "react";

import userApi from "../api/user";
import messageApi from "../api/message";
import useToken from "./useToken";

const useUser = () => {
    const [users, setUsers] = useState([]);

    let me = useToken();

    const getUsers = async () => {
        const result = await userApi.fetchUserConv(me);
        const length = result?.data?.length;
        if (length > 0) {
            for (let i = 0; i < length; i++) {
                let response = await messageApi.getMessage(result.data[i]._id);
                setUsers((prev) => [...prev, response.data]);
            }
        }
    };

    useEffect(() => {
        if (me !== undefined) {
            getUsers();
        }
    }, [me, setUsers]);

    return users;
};

export default useUser;
