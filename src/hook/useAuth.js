import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useMyContext from "./useMyContext";
import apiClient from "../api/apiClient";

const useAuth = () => {
    const [error, setError] = useState(null);
    const { setAuth } = useMyContext();

    const navigate = useNavigate();

    async function authenticate(info, register) {
        try {
            let result;
            if (register) {
                result = await apiClient.post("/user/new", info);
            } else {
                result = await apiClient.post("auth", info);
            }
            localStorage.setItem("token", result.data);
            setAuth(result.data);
            navigate("/", { replace: true });
        } catch (error) {
            setError(error.response.data);
        }
    }

    return { authenticate, error };
};

export default useAuth;
