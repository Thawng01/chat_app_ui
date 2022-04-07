import { useState, useEffect, useCallback } from "react";

import { fetchUserConv } from "../api/conversation";
import { getMessage } from "../api/message";
import useToken from "./useToken";
import { source } from "../api/apiClient";

const useUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    let me = useToken();

    const getUsers = useCallback(async () => {
        try {
            setLoading(true);

            const result = await fetchUserConv(me);
            const length = result?.data?.length;
            if (length > 0) {
                for (let i = 0; i < length; i++) {
                    let response = await getMessage(result.data[i]._id);
                    setUsers((prev) => [...prev, response.data]);
                }
            }
            setLoading(false);
        } catch (error) {
            setError(error.response.data);
            setLoading(false);
        }
    }, [me]);

    useEffect(() => {
        if (me !== undefined) {
            getUsers();
        }

        return () => source.cancel();
    }, [me, getUsers]);

    return { loading, users, error };
};

export default useUser;
