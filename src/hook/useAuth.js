import { useState } from "react";

import apiClient from "../api/apiClient";
import useNavigation from "./useNavigation";

const useAuth = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigation();

    async function authenticate(info, register) {
        try {
            setLoading(true);

            let result;
            if (register) {
                result = await apiClient.post("/user/new", info);
            } else {
                result = await apiClient.post("auth", info);
            }
            localStorage.setItem("token", result.data);
            setLoading(false);
            navigate("/", { replace: true });
        } catch (error) {
            setError(error.response.data);
            setLoading(false);
        }
    }

    return { authenticate, error, loading };
};

export default useAuth;
