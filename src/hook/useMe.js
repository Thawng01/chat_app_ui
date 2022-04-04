import { useEffect, useState } from "react";

import authApi from "../api/auth";
import useToken from "./useToken";

const useMe = () => {
    const [me, setMe] = useState();

    const id = useToken();

    useEffect(() => {
        if (id) {
            getMe();
        }
    }, [id]);

    const getMe = async () => {
        const result = await authApi.fetchMe(id);
        setMe(result.data);
    };

    return me;
};

export default useMe;
